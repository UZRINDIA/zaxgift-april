// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// //import { useAuth } from "@clerk/nextjs"; // Clerk hook

// const NewsLetter = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const { getToken } = useAuth();

//   const handleSubscribe = async () => {
//     try {
//       const token = await getToken(); // Get Clerk JWT

//       const res = await axios.post(
//         "/api/subscribe",
//         { email },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setMessage(res.data.message || "Subscribed successfully!");
//       setEmail("");
//     } catch (err) {
//       console.error(err);
//       setMessage("Subscription failed.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
//       <h1 className="md:text-4xl text-2xl font-medium">Subscribe now & get 20% off</h1>
//       <p className="md:text-base text-gray-500/80 pb-8">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//       <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
//         <input
//           className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
//           type="email"
//           placeholder="Enter your email id"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           onClick={handleSubscribe}
//           className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none"
//         >
//           Subscribe
//         </button>
//       </div>
//       {message && <p className="text-green-600 mt-4">{message}</p>}
//     </div>
//   );
// };

// export default NewsLetter;
