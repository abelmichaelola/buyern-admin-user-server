
import mongoose from 'mongoose';
import Location, { LocationSchema } from './Location.js';
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    regStatus: {
        type: Number,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
        index: true,
    },
    phoneCode: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    dob: {
        type: Date,
        required: true,
    },
    location: LocationSchema,
    image: {
        type: String,
        unique: true
    },

}, {timestamps: true});

//Export the model
export default mongoose.model('User', userSchema);