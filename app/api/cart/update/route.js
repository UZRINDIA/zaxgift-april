// import connectDB from "@/config/db";
// import User from "@/models/User";
// import { getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";



// // using this api we can update the cart data


// export async function POST(request) {
//     try {
//         // first we will get the user id form database

//         const { userId } = getAuth(request)
//         // get cart data 
//         const { cartData } = await request.json()
//         // to save cart data connect db

//         await connectDB()

//         const user = await User.findById(userId)

//         user.cartItem = cartData;
//         await user.save()

//         return NextResponse.json({ success: true })
//     } catch (error) {
//         return NextResponse.json({ success: false, message: error.message })
//     }
// }