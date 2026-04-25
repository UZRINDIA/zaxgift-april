// import mongoose from "mongoose";


// // create a veriable first for ceshe storage

// let cached = global.mongoose

// if (!cached) {
//     cached = global.mongoose = { conn: 'null', prom: 'null' }
// }
// async function connectDB() {
//     // options for mongodb connection
//     if (cached.conn) {
//         return cached.conn
//     }
//     if (!cached.conn) {
//         const opts = {
//             bufferCommands: false,
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//         // save the resposne from the mongdb connection using promise method {also provide the collection name}
//         cached.promise = await mongoose.connect(`${process.env.MONGODB_URI}/uzrindia`, opts).then(mongoose => {
//             return mongoose
//         })
//     }
//     // where the promise is already available in cached data
//     cached.conn = await cached.promise
//     return cached.conn
// }
// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;


