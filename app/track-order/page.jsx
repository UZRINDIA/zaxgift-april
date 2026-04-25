// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Package,
//   Mail,
//   Search,
//   Truck,
//   Calendar,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";
// import { useUser } from "@clerk/nextjs"; // Clerk hook

// export default function TrackOrderPage() {
//   const [orderId, setOrderId] = useState("");
//   const [orderData, setOrderData] = useState(null);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [checkoutEmail, setCheckoutEmail] = useState("");

//   const { user } = useUser(); // get Clerk user

//   useEffect(() => {
//     if (user) {
//       setCheckoutEmail(user.emailAddresses[0]?.emailAddress || "");
//     }
//   }, [user]);

//   const onSubmit = async () => {
//     setIsLoading(true);
//     setError("");
//     setOrderData(null);

//     try {
//       const response = await axios.post("/api/track-order", {
//         orderId,
//         email: checkoutEmail,
//       });

//       setOrderData(response.data);
//     } catch (err) {
//       console.error(err);
//       setError(
//         err.response?.data?.message ||
//           "Something went wrong while fetching the order."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case "shipped":
//         return "text-green-600 bg-green-50";
//       case "processing":
//         return "text-amber-600 bg-amber-50";
//       case "delivered":
//         return "text-blue-600 bg-blue-50";
//       default:
//         return "text-gray-600 bg-gray-50";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 px-6">
//           <div className="flex items-center justify-center">
//             <Package className="h-8 w-8 text-white mr-3" />
//             <h1 className="text-2xl font-bold text-white">Track Your Order</h1>
//           </div>
//           <p className="text-purple-100 text-center mt-2">
//             Enter your details below to check your order status
//           </p>
//         </div>

//         <div className="p-6 space-y-6">
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="orderId"
//                 className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
//               >
//                 <Package className="h-4 w-4 mr-2 text-purple-600" />
//                 Order ID
//               </label>
//               <div className="relative">
//                 <input
//                   id="orderId"
//                   type="text"
//                   value={orderId}
//                   onChange={(e) => setOrderId(e.target.value)}
//                   placeholder="Enter your order number"
//                   className="w-full p-3 pl-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 hover:bg-gray-100"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
//               >
//                 <Mail className="h-4 w-4 mr-2 text-purple-600" />
//                 Checkout Email
//               </label>
//               <div className="relative">
//                 <input
//                   id="email"
//                   type="email"
//                   value={checkoutEmail}
//                   onChange={(e) => setCheckoutEmail(e.target.value)}
//                   placeholder="Enter email used for checkout"
//                   className="w-full p-3 pl-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200 hover:bg-gray-100"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={onSubmit}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center font-medium"
//             >
//               {isLoading ? (
//                 <div className="flex items-center">
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Tracking...
//                 </div>
//               ) : (
//                 <>
//                   <Search className="h-5 w-5 mr-2" />
//                   Track Order
//                 </>
//               )}
//             </button>
//           </div>

//           {error && (
//             <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start">
//               <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
//               <p className="text-red-700 text-sm">{error}</p>
//             </div>
//           )}

//           {orderData && (
//             <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 animate-fadeIn">
//               <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
//                 <h3 className="text-lg font-medium text-gray-800">
//                   Order Details
//                 </h3>
//               </div>

//               <div className="p-5 space-y-4">
//                 <div className="flex items-center">
//                   <Package className="h-5 w-5 text-gray-500 mr-3" />
//                   <div>
//                     <p className="text-sm text-gray-500">Order ID</p>
//                     <p className="font-medium">{orderData.orderId}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <Truck className="h-5 w-5 text-gray-500 mr-3" />
//                   <div>
//                     <p className="text-sm text-gray-500">Status</p>
//                     <span
//                       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
//                         orderData.status
//                       )}`}
//                     >
//                       {orderData.status === "Shipped" && (
//                         <CheckCircle className="h-3 w-3 mr-1" />
//                       )}
//                       {orderData.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <Calendar className="h-5 w-5 text-gray-500 mr-3" />
//                   <div>
//                     <p className="text-sm text-gray-500">Estimated Delivery</p>
//                     <p className="font-medium">
//                       {orderData.estimatedDelivery}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="pt-2">
//                   <p className="text-xs text-gray-500 mb-2">Delivery Progress</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full"
//                       style={{
//                         width:
//                           orderData.status === "Processing"
//                             ? "25%"
//                             : orderData.status === "Shipped"
//                             ? "75%"
//                             : orderData.status === "Delivered"
//                             ? "100%"
//                             : "10%",
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="text-center text-xs text-gray-500 pt-2">
//             Need help?{" "}
//             <a href="#" className="text-purple-600 hover:text-purple-800">
//               Contact our support team
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
