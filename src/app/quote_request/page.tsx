"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, Check, ChevronsUpDown, Trash2 } from 'lucide-react'
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
    rfqNo: z.string(),
    title: z.string(),
    department: z.string(),
    expectedDeliveryDate: z.date(),
    items: z.array(
        z.object({
            item: z.string(),
            variant: z.string(),
            quantity: z.number(),
            unit: z.string(),
            price: z.number(),
            expectedDeliveryDate: z.date(),
            amount: z.number(),
        })
    ),
    note: z.string().optional(),
})

const departments = [
    "Maternity",
    "Pediatrics",
    "Emergency",
    "Surgery",
    "Cardiology",
]

const items = [
    "Oxygen Concentrator",
    "Mechanical Ventilator",
    "Patient Monitor",
    "Defibrillator",
]

const variants = ["Blue", "Green", "White", "Black"]

export default function QuoteRequestForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            items: [{}],
        },
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "items",
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="container mx-auto py-6">
            <Card className="p-6">
                <div className="flex items-center mb-10">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold">Request for Quote</h2>
                        <p className="text-sm text-muted-foreground">
                            Fill out these details to send the RFQ
                        </p>
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="rfqNo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>RFQ No</FormLabel>
                                        <FormControl>
                                            <Input placeholder="RFQ-10234" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Request for Equipments" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Department</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-full justify-between",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value || "Select department"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0">
                                                {/* <Command>
                        <CommandInput placeholder="Search department..." />
                        <CommandEmpty>No department found.</CommandEmpty>
                        <CommandGroup>
                          {departments.map((department) => (
                            <CommandItem
                              value={department}
                              key={department}
                              onSelect={() => {
                                form.setValue("department", department)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  department === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {department}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command> */}
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="expectedDeliveryDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Expected delivery date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <span className="text-xs text-muted-foreground">
                                            Calculated based on lead time and issue date
                                        </span>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">Add Items</h3>
                            </div>
                            <div className="rounded-md border">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="px-4 py-3 text-left text-sm font-medium">
                                                Items
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium">
                                                Variant
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium">
                                                Quantity
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium">
                                                Price
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium">
                                                Expected delivery date
                                            </th>
                                            <th className="px-4 py-3 text-left text-sm font-medium">
                                                Amount
                                            </th>
                                            <th className="px-4 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fields.map((field, index) => (
                                            <tr key={field.id} className="border-b">
                                                <td className="px-4 py-2">
                                                    <FormField
                                                        control={form.control}
                                                        name={`items.${index}.item`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <Select
                                                                    value={field.value}
                                                                    onValueChange={field.onChange}
                                                                    items={items}
                                                                    placeholder="Select item"
                                                                />
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <FormField
                                                        control={form.control}
                                                        name={`items.${index}.variant`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <Select
                                                                    value={field.value}
                                                                    onValueChange={field.onChange}
                                                                    items={variants}
                                                                    placeholder="Select variant"
                                                                />
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <FormField
                                                        control={form.control}
                                                        name={`items.${index}.quantity`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <div className="flex items-center border border-gray-300 rounded-md px-2">
                                                                        <Input
                                                                            type="number"
                                                                            placeholder="100"
                                                                            className="flex-1 border-none focus:ring-0 focus:outline-none"
                                                                            {...field}
                                                                        />
                                                                        <span className="ml-2 text-gray-500 text-sm bg-gray-100 py-1 px-4 rounded">Pack</span>
                                                                    </div>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <FormField
                                                        control={form.control}
                                                        name={`items.${index}.price`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input
                                                                        type="number"
                                                                        placeholder="12.00"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <FormField
                                                        control={form.control}
                                                        name={`items.${index}.expectedDeliveryDate`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button
                                                                                variant={"outline"}
                                                                                className={cn(
                                                                                    "w-full pl-3 text-left font-normal",
                                                                                    !field.value && "text-muted-foreground"
                                                                                )}
                                                                            >
                                                                                {field.value ? (
                                                                                    format(field.value, "PPP")
                                                                                ) : (
                                                                                    <span>Pick a date</span>
                                                                                )}
                                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent
                                                                        className="w-auto p-0"
                                                                        align="start"
                                                                    >
                                                                        <Calendar
                                                                            mode="single"
                                                                            selected={field.value}
                                                                            onSelect={field.onChange}
                                                                            disabled={(date) =>
                                                                                date < new Date() ||
                                                                                date < new Date("1900-01-01")
                                                                            }
                                                                            initialFocus
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <span className="font-semibold text-gray-800 text-sm">$1200</span>
                                                </td>
                                                <td className="px-4 py-2">
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => remove(index)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <FormField
                                control={form.control}
                                name="note"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Note</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter note here"
                                                className="min-h-[100px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        
                    </form>
                </Form>
            </Card>
        </div>
    )
}

function Select({
    items,
    value,
    onValueChange,
    placeholder,
}: {
    items: string[]
    value?: string
    onValueChange: (value: string) => void
    placeholder?: string
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-full justify-between",
                            !value && "text-muted-foreground"
                        )}
                    >
                        {value || placeholder}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                {/* <Command>
          <CommandInput placeholder={`Search ${placeholder?.toLowerCase()}...`} />
          <CommandEmpty>No items found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                value={item}
                key={item}
                onSelect={() => {
                  onValueChange(item)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    item === value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command> */}
            </PopoverContent>
        </Popover>
    )
}

