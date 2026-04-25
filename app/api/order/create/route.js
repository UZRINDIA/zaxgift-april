

// // create api for feed order into database

// import { inngest } from "@/config/inngest";
// import Product from "@/models/Product";
// import User from "@/models/User";
// import { getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//     try {

//         // userid , address, items
//         const { userId } = getAuth(request);

//         const { address, items } = await request.json()
//         // check if we dont have the address or item 

//         if (!address || items.length === 0) {
//             return NextResponse.json({ success: false, message: 'invalid Data' })
//         }
//         // if every thing is there we need to create an order //before that we need to calculate the order amount

//         // calculate amount using items
//         const amount = await items.reduce(async (prev, item) => {
//             const product = await Product.findById(item.product)  // find the product then return 
//             return await prev + product.offerPrice * item.quantity  // 
//         }, 0)

//         // here send an event to inngest 

//         await inngest.send({
//             name: 'order/created',
//             data: {
//                 userId,
//                 address,
//                 items,
//                 amount: amount + Math.floor(amount * 0.18),  // here calculate the tax 
//                 date: Date.now()
//             }
//         })

//         // clear user cart data 

//         const user = await User.findById(userId)
//         user.cartItem = {}
//         // save user
//         await user.save()


//         return NextResponse.json({ success: true, message: 'order placed' })

//     } catch (error) {
//         console.log(error);

//         return NextResponse.json({ success: false, message: error.message })
//     }
// }