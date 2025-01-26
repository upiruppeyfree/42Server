const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword:{
    type:String,
    required:true
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user", 
  },
},
{
  timestamps:true,
  versionKey:false
}
);

const  UserModel = mongoose.model("User", userSchema);

module.exports = UserModel
