// import Image from "next/image"

// const items = [
//   {
//     id: 1,
//     name: "Oxygen concentrator",
//     code: "#26373",
//     variant: "Blue",
//     quantity: "100 pieces",
//     price: "$200.00",
//     amount: "$2,000.00",
//     delivery: "2024-08-07",
//   },
//   {
//     id: 2,
//     name: "Mechanical ventilator",
//     code: "#26373",
//     variant: "NIL",
//     quantity: "45 kg",
//     price: "$450.00",
//     amount: "$2,500.00",
//     delivery: "2024-08-07",
//   },
//   {
//     id: 3,
//     name: "Patient Monitor",
//     code: "#26373",
//     variant: "Blue",
//     quantity: "30 Units",
//     price: "$400.00",
//     amount: "$1,900.00",
//     delivery: "2024-08-07",
//   },
//   {
//     id: 4,
//     name: "Mechanical ventilator",
//     code: "#26373",
//     variant: "Blue",
//     quantity: "35 Units",
//     price: "$200.00",
//     amount: "$1,500.00",
//     delivery: "2024-08-07",
//   },
// ]

// export default function ItemsTable() {
//   return (
//     <div className="px-4">
//       <table className="w-full">
//         <thead>
//           <tr className="border-b text-left text-sm text-gray-500">
//             <th className="py-4 font-medium">Item</th>
//             <th className="py-4 font-medium">Variant</th>
//             <th className="py-4 font-medium">Quantity</th>
//             <th className="py-4 font-medium">Price</th>
//             <th className="py-4 font-medium">Amount</th>
//             <th className="py-4 font-medium">Expected Delivery Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id} className="border-b">
//               <td className="py-4">
//                 <div className="flex items-center gap-3">
//                   <div className="h-10 w-10 overflow-hidden rounded-lg bg-gray-100">
//                     <Image
//                       src="/placeholder.svg?height=40&width=40"
//                       alt={item.name}
//                       width={40}
//                       height={40}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">{item.code}</p>
//                   </div>
//                 </div>
//               </td>
//               <td className="py-4">{item.variant}</td>
//               <td className="py-4">{item.quantity}</td>
//               <td className="py-4">{item.price}</td>
//               <td className="py-4">{item.amount}</td>
//               <td className="py-4">{item.delivery}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan={4} className="py-4"></td>
//             <td className="py-4">
//               <div>
//                 <p className="text-sm text-gray-500">Sub Total</p>
//                 <p className="font-medium">$8,000.00</p>
//               </div>
//             </td>
//             <td className="py-4">
//               <div>
//                 <p className="text-sm text-gray-500">Total</p>
//                 <p className="font-medium">$8,760.00</p>
//               </div>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   )
// }


import React from "react";
import Media from '@/assets/media.png'
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ItemsTable = () => {
  const items = [
    {
      id: 1,
      name: "Oxygen concentrator",
      variant: "Blue",
      quantity: "100 pieces",
      price: "$200.00",
      amount: "$2,000.00",
      deliveryDate: "2024-08-07",
      image: Media, // replace with an appropriate image URL
    },
    {
      id: 2,
      name: "Mechanical ventilator",
      variant: "NIL",
      quantity: "45 Kg",
      price: "$350.00",
      amount: "$2,500.00",
      deliveryDate: "2024-08-07",
      image: Media, // replace with an appropriate image URL
    },
    {
      id: 3,
      name: "Patient Monitor",
      variant: "Blue",
      quantity: "30 Units",
      price: "$300.00",
      amount: "$1,500.00",
      deliveryDate: "2024-08-07",
      image: Media, // replace with an appropriate image URL
    },
    {
      id: 4,
      name: "Mechanical ventilator",
      variant: "Blue",
      quantity: "35 Units",
      price: "$200.00",
      amount: "$1,500.00",
      deliveryDate: "2024-08-07",
      image: Media, // replace with an appropriate image URL
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Item(s)</h2>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
          <thead className="text-xs text-gray-700 bg-gray-100">
            <tr>
              <th className="p-4">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="px-6 py-3">Items</th>
              <th className="px-6 py-3">Variants</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Expected Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-6 py-4 flex items-center space-x-3">
                <div className="h-10 w-10 overflow-hidden rounded-lg bg-gray-100">
                   <Image
                      src={item.image}
                      alt={item.name}
                     width={40}
                     height={40}
                   />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">#{item.id}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{item.variant}</td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">{item.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex justify-end mt-4 text-gray-800 text-sm">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Sub Total:</span>
            <span className="font-medium">$8,000.00</span>
          </div>
          <div className="flex justify-between">
            <span>Total:</span>
            <span className="font-bold text-lg">$8,750.00</span>
          </div>
        </div>
      </CardFooter>
    </div>
  );
};

export default ItemsTable;
