import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ItemsTable from "./items_table"
import { X } from "lucide-react"
import SignDoc from '@/assets/sign-doc.png'

export default function QuoteDetails() {
    return (
        <div className="p-6">
            <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div className="mb-4 md:mb-10 flex flex-col">
                        <h1 className="mb-1 text-xl md:text-2xl font-semibold">Quote details</h1>
                        <span className="text-sm text-gray-500">
                            Created on Wed, 12th June 2022, 08:00am
                        </span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-[#175CFF] text-sm md:text-base">Respond</Button>
                    <Button className="bg-[#D42620] text-sm md:text-base flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Reject
                    </Button>
                </div>
            </div>

            <QuoteInformation />

            <Card className="mb-6">
                <ItemsTable />
            </Card>

            <Card>
                <div className="flex flex-col md:flex-row items-start md:items-center p-4 gap-4">
                    <Image src={SignDoc} alt="Jane Doe" width={30} height={30} />
                    <div>
                        <h3 className="mb-2 font-semibold text-sm md:text-base">Terms and Attachments</h3>
                        <p className="text-sm text-gray-500">
                            Review payment and delivery terms
                        </p>
                    </div>
                </div>
            </Card>
        </div>

    )
}


const QuoteInformation = () => {
    return (
        <Card className="bg-[#FFFFFF] flex flex-col p-3 mb-6">
            <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between px-6">
                <h2 className="text-lg font-semibold text-gray-800">Quote Information</h2>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    Expected delivery date : 2024-12-02
                </span>
            </div>
            <CardContent className="flex flex-col md:flex-row justify-between items-start  flex-1 gap-6">
                {/* Left Section */}
                <div>
                    <div className="mt-4 space-y-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                            <span className="text-gray-500 w-24 font-medium text-sm">Title:</span>
                            <span className="text-gray-700 text-sm">Request for Equipments</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                            <span className="text-gray-500 w-24 font-medium text-sm">RFQ No:</span>
                            <span className="text-gray-700 text-sm">RQ #01234</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                            <span className="text-gray-500 w-24 font-medium text-sm">Requestor:</span>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#FFECE5] text-sm text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                    JD
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium text-sm">Jane Doe</p>
                                    <p className="text-sm text-gray-500">Head Nurse, Paediatrics</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                            <span className="text-gray-500 w-24 font-medium text-sm">Status:</span>
                            <span className="bg-[#FFECE5] text-[#F56630] px-3 py-1 rounded-full text-xs">
                                Awaiting
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                            <span className="text-gray-500 w-24 font-medium text-sm">Department:</span>
                            <span className="text-gray-700 text-sm">Maternity</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <Card className="bg-gray-50 rounded-lg p-4 px-6">
                    <h4 className="text-sm font-medium text-gray-500">Client</h4>
                    <div className="flex items-center space-x-3 mt-2">
                        <div className="bg-[#FFECE5] text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">
                            W
                        </div>
                        <div>
                            <p className="text-gray-800 font-medium text-sm">Westend Hospital</p>
                            <p className="text-sm text-gray-500">Clear Street</p>
                        </div>
                    </div>
                </Card>
            </CardContent>
        </Card>

    );
};


