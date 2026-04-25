// import connectDB from "@/config/db";
// import authSeller from "@/lib/authSeller";
// import Product from "@/models/Product";
// import { getAuth } from "@clerk/nextjs/server";
// import { v2 as cloudinary } from "cloudinary";
// import { NextResponse } from "next/server";

// // lets configure cloudnary key
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// })

// // let get the userid by creating a async function using try catch block to handle the post request


// export async function POST(request) {
//     try {
//         const { userId } = getAuth(request)
//         // verify if the user is a seller or not by creating a function
//         const { isSeller } = await authSeller(userId)

//         if (!isSeller) {
//             return NextResponse.json({ success: false, massage: 'not authorized' })
//         }
//         // if the user is a seller then store the data using formData 
//         const formData = await request.formData()

//         const name = formData.get('name');
//         const description = formData.get('description');
//         const category = formData.get('category');
//         const productPrice = formData.get('productprice');
//         const offerPrice = formData.get('offerprice');

//         // for image file 
//         const file = formData.getAll('images');
//         // what if file is not there
//         if (!file || file.length === 0) {
//             return NextResponse.json({ success: false, massage: 'no file uploaded' })
//         }

//         const result = await Promise.all(
//             file.map(async (file) => {
//                 const arrayBuffer = await file.arrayBuffer()
//                 const buffer = Buffer.from(arrayBuffer)

//                 return new Promise((resolve, reject) => {
//                     const stream = cloudinary.uploader.upload_stream(
//                         { resource_type: 'auto' },
//                         (error, result) => {
//                             if (error) {
//                                 reject(error)
//                             } else {
//                                 resolve(result)
//                             }
//                         }
//                     )
//                     stream.end(buffer)
//                 })
//             })
//         )

//         const image = result.map(result => result.secure_url)

//         // now to save the porduct data to mongoose we first need to create product model
//         // call the database connection
//         await connectDB()
//         const newProduct = await Product.create({
//             userId,
//             name,
//             description,
//             category,
//             productPrice: Number(productPrice),
//             offerPrice: Number(offerPrice),
//             image,
//             date: Date.now()
//         })
//         return NextResponse.json({ success: true, message: 'upload successful', newProduct })

//     } catch (error) {
//         NextResponse.json({ success: false, massage: error.message })
//     }
// }
