// import Image from "next/image";
// import Dashboard from "./dashboard/page";
// import QuoteRequestForm from "./quote_request/page";
// import TermsAndAttachmentsForm from "./terms_and_attachment_form/page";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function Home() {
//   return (
//     <div className="container mx-auto py-6">
//       <header>
//         <div className="mb-8">

//           <Card className="mt-4 p-6">
//             <div className="flex items-center justify-between space-x-4">
//               <div className="flex items-center space-x-4">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#175CFF] text-primary-foreground">
//                   1
//                 </div>
//                 <div className="space-y-1 text-sm flex flex-col">
//                   <span className="font-semibold">Request Information</span>
//                   <span className="text-muted-foreground text-xs">Provide details about the RFQ</span>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full border text-[#667185]">
//                   2
//                 </div>
//                 <div className="space-y-1 text-sm flex flex-col">
//                   <span className="text-muted-Provide details about the RFQforeground">Terms and Attachments</span>
//                   <span className="text-[#667185] text-xs">Payment and delivery terms</span>
//                 </div>

//               </div>
//               {/* <div className="h-px w-12 bg-border" /> */}
//               <div className="flex items-center space-x-4">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full border text-[#667185]">
//                   3
//                 </div>
//                 <div className="space-y-1 text-sm flex flex-col">
//                   <span className="text-muted-Provide details about the RFQforeground">Reviews</span>
//                   <span className="text-[#667185] text-xs">Confirm all information provided</span>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </header>

//       <main>
//         <TermsAndAttachmentsForm />
//          {/* <Dashboard /> */}
//       {/* <QuoteRequestForm /> */}
//       </main>

//       <footer>
//         <div className="flex items-center justify-end space-x-4">
//           <Button variant="outline" type="button">
//             Cancel
//           </Button>
//           <Button variant="outline" className="border-[#175CFF] border text-[#175CFF]" type="button">
//             Save as draft
//           </Button>
//           <Button className="bg-[#175CFF]" type="submit">Continue</Button>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';
import { useState } from "react";
import Image from "next/image";
import QuoteRequestForm from "./quote_request/page";
import TermsAndAttachmentsForm from "./terms_and_attachment_form/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils"; 
import { Check } from "lucide-react";
import Dashboard from "./dashboard/page";
import ConfirmationAlertDialog from "./dashboard/partials/confirmation";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    if (currentStep === 3) {
      setIsOpen(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Dashboard />;
      case 2:
        return <TermsAndAttachmentsForm />;
      case 3:
        return <QuoteRequestForm />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
  <ConfirmationAlertDialog
    loading={loading}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    onSubmit={() => {
      setCurrentStep(1);
      setLoading(false);
    }}
  />
  <header>
    <div className="mb-8">
      <Card className="mt-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Step 1 */}
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                currentStep >= 1
                  ? "bg-[#175CFF] text-white"
                  : "border border-[#667185] text-[#667185]"
              )}
            >
              {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
            </div>
            <div className="space-y-1 text-sm flex flex-col">
              <span className="font-semibold">Request Information</span>
              <span className="text-muted-foreground text-xs">
                Provide details about the RFQ
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                currentStep >= 2
                  ? "bg-[#175CFF] text-white"
                  : "border border-[#667185] text-[#667185]"
              )}
            >
              {currentStep > 2 ? <Check className="h-4 w-4" /> : "2"}
            </div>
            <div className="space-y-1 text-sm flex flex-col">
              <span className="font-semibold">Terms and Attachments</span>
              <span className="text-[#667185] text-xs">
                Payment and delivery terms
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                currentStep >= 3
                  ? "bg-[#175CFF] text-white"
                  : "border border-[#667185] text-[#667185]"
              )}
            >
              3
            </div>
            <div className="space-y-1 text-sm flex flex-col">
              <span className="font-semibold">Reviews</span>
              <span className="text-[#667185] text-xs">
                Confirm all information provided
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </header>

  <main>{renderStepContent()}</main>

  <footer>
    <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-4 mt-8">
      <Button variant="outline" type="button">
        Cancel
      </Button>
      <Button
        variant="outline"
        className="border-[#175CFF] border text-[#175CFF]"
        type="button"
      >
        Save as draft
      </Button>

      <Button
        disabled={currentStep === 1}
        variant="outline"
        type="button"
        className="bg-red-300"
        onClick={handleBack}
      >
        Back
      </Button>

      <Button
        className="bg-[#175CFF] text-white"
        type="button"
        onClick={handleNext}
      >
        {currentStep < 3 ? "Continue" : "Submit"}
      </Button>
    </div>
  </footer>
</div>

  );
}

