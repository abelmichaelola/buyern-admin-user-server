import Mongoose from "mongoose";
// Declare the Schema of the Mongo model
export var LocationSchema = new Mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    address2: {
        type: String,
    },
    zipcode:{
        type:Number,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    city: {
        type: String,
    },
    LatLng: {
        type: Object,
    },
});

//Export the model
export default Mongoose.model('Location', LocationSchema);