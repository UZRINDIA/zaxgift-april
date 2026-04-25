// import { Inngest } from "inngest";
// import connectDB from "./db";
// import User from "@/models/User";
// import Order from "@/models/Order";


// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "uzr-india" });


// // function  to sync the user creation

// //-- inngest function to save user data to data base

// export const syncUserCreation = inngest.createFunction(
//     {
//         id: 'sync-user-from-clerk'
//     },
//     {
//         event: 'clerk/user.created'
//     },
//     async ({ event }) => {
//         // event payload's data is clerk user json object 

//         const { user } = event.data;
//         const { id, first_name, last_name, email_addresses, image_url } = user

//         const userData = {
//             _id: id,
//             email: email_addresses[0].email_address,
//             name: first_name + " " + last_name,
//             image: image_url,
//         }
//         await connectDB()
//         await User.create(userData)
//     }
// )



// // const email = user.email_addrsses.find(e =>
// //     e.id === user.primary_email_address_id
// // ).email;
// // await database.users.insert({ id, email, first_name, last_name });
// //-----------------!!!------------------------------//

// // inngest function to update user to  databse

// export const syncUserUpdate = inngest.createFunction(
//     { id: 'update-user-from-clerk' },
//     { event: 'clerk/user.update' },
//     async ({ event }) => {
//         // let d-structure the userobject
//         const { id, first_name, last_name, email_addresses, image_url } = event.data
//         const userData = {
//             _id: id,
//             name: first_name + ' ' + last_name,
//             email: email_addresses[0].email_address,
//             image: image_url
//         }
//         await connectDB();
//         await User.findByIdAndUpdate(id, userData)
//     }

// )

// // inngest function to delete user from database
// export const syncUserDeletion = inngest.createFunction(
//     {
//         id: 'delete-user-from-clerk'
//     },
//     {
//         event: 'clerk/user.delete'
//     },
//     async ({ event }) => {
//         const { id } = event.data
//         await connectDB()
//         await User.findByIdAndDelete(id)
//     }
// )


// // inngest function to create and feed order in to database 


// export const createUserOrder = inngest.createFunction(
//     {
//         id: 'create-user-order',
//         batchEvents: {
//             maxSize: 5,
//             timeout: '5s'
//         }
//     },
//     { event: 'order-created' },
//     async ({ events }) => {

//         const orders = events.map((event) => {
//             return {
//                 userId: event.data.userId,
//                 item: event.data.items,
//                 amount: event.data.amount,
//                 address: event.data.address,
//                 date: event.data.date,
//             }
//         })

//         await connectDB()
//         await Order.insertMany(orders)

//         return { success: true, processed: orders.length }
//     }


// )

// // by using createUserOrder function i will create route