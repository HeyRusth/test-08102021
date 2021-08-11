var mongoose = require('mongoose') 
const {JsonWebTokenError} = require('jsonwebtoken');
//const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    admin : {
        type : Boolean , 
        default : false
  } , 
    name: {
        type : String , 
        required : true 
    }, 
    
    lastname : {
        type : String , 
        required : true 
    },
     
    hashedPassword: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
    },

    email : {
        type : String , 
        required : true 
    },

    mobile : {
        type: Number , 
    },

    company : {
        type:String 

    }, 
     habilitation : {
        type : String ,
        required : true
    },
    token : {
        type : String ,
    }, 
    permissions : {
        type:[String],
        /*enum : ["","","",""]*/
    }, 
    secondaryPermissions : {
        type:[String]
    },
    provenances : {
        type:[String]
    },
    users : {
        type:[String] , 
         
    },
      authorisedConnection : {
           type : Boolean
     } , 
     groupedAction : { 
         type:[String]
     },
    tarif : {
        type:Number
    } , 
    typeTarif:{
        type:String 
    }
    },
    { timestamps: true }
    )

     userSchema.methods.generateToken = function () {
        return jwt.sign({_id: this._id, name: this.name, email: this.email, lastname: this.lastname}, "jwtPrivateKey");
    }

const User = mongoose.model('User',userSchema) ; 

exports.User=User ; 