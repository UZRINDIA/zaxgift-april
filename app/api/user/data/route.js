// import connectDB from "@/config/db";
// import User from "@/models/User";
// import { getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";



// export async function GET(request) {

//     try {
//         // user id ko get krnge using request which we are getting from front end part

//         const { userId } = getAuth(request)
//         await connectDB()
//         const user = await User.findById(userId)

//         // check if user is available or not
//         if (!user) {
//             return NextResponse.json({ success: "false", message: 'User not Found' })
//         }
//         return NextResponse.json({ success: 'true', user })
//     } catch (error) {
//         return NextResponse.json({ success: 'false', message: error.message })
//     }
// }