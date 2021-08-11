const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ModificationSchema = new mongoose.Schema({

    client :  {
        type:Schema.Types.ObjectId , 
        ref:"Client" ,
        required:true
    } ,
    operation : {
        type:String ,
        required: true
    },
    user:{
        type:Schema.Types.ObjectId , 
        ref:"User",
        required:true
    },
    previousStatus:{
        type:String ,
        default:null
    },
    newStatus:{
        type:String , 
        default:null
    }} , {timestamps:true});

const Modification = mongoose.model("Modification", ModificationSchema);

exports.Modification = Modification;
