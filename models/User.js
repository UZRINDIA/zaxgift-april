// import mongoose from 'mongoose';

// // create user schema for mongodb


// const userSchema = new mongoose.Schema({
//     // store the data 
//     _id: { type: String, required: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     image: { type: String, required: true },
//     cartItem: { type: Object, default: {} }
// }, { minimize: false }
// )

// // by using above schema lets create an user model 
// // if user already exist then check it in user model
// const User = mongoose.models.user || mongoose.model('user', userSchema)

// export default User;