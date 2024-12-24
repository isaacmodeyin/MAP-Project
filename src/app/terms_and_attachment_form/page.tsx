"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Upload } from 'lucide-react'

const formSchema = z.object({
  paymentTerms: z.string(),
  deliverySchedule: z.string(),
  shippingMethod: z.string(),
  leadTime: z.string(),
  attachments: z.array(z.any()).optional(),
})

const paymentTerms = ["Net 30", "Net 60", "Net 90", "Immediate"]
const deliverySchedules = ["Immediate delivery", "Scheduled delivery", "Custom schedule"]
const shippingMethods = ["Courier Services", "Standard Shipping", "Express Shipping", "Air Freight"]

export default function TermsAndAttachmentsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentTerms: "Net 30",
      deliverySchedule: "Immediate delivery",
      shippingMethod: "Courier Services",
      leadTime: "10",
      attachments: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="mx-auto w-full space-y-8 p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Terms and Attachments</h2>
        <p className="text-sm text-muted-foreground">
          Provide detailed information on payment and delivery terms
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="paymentTerms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Terms</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {paymentTerms.map((term) => (
                        <SelectItem key={term} value={term}>
                          {term}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deliverySchedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Schedule</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select delivery schedule" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {deliverySchedules.map((schedule) => (
                        <SelectItem key={schedule} value={schedule}>
                          {schedule}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shippingMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shipping Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shipping method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {shippingMethods.map((method) => (
                        <SelectItem key={method} value={method}>
                          {method}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="leadTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lead time</FormLabel>
                  <div className="flex">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <div className="flex items-center rounded-r-md border border-l-0 bg-muted px-3 text-sm text-muted-foreground">
                      Days
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Attachments</h3>
              <p className="text-sm text-muted-foreground">
                Attach all necessary files or documents
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <div className="mt-4 space-y-2 text-center">
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <span className="relative mt-4 inline-flex items-center text-sm text-muted-foreground">
                OR
              </span>
              <Button
                type="button"
                variant="outline"
                className="mt-4"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Browse Files
              </Button>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/svg+xml,image/png,image/jpeg,image/gif"
                onChange={(e) => {
                  const files = Array.from(e.target.files || [])
                  form.setValue('attachments', files)
                }}
                multiple
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

