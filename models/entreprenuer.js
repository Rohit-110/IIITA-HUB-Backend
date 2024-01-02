import mongoose from "mongoose";

const schema2 = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type: String,
    },

    qualifications:{
        type: String,
    },
    profession:{
        type: String,
    },
    email:{
        type:String,
    },
    mobile:{
        type: String,
    },
    aadhar:{
        type :String,
    },
    description:{
        type: String,
    },
    companysize: {
        type: String,
    },
    targetaudience:{
        type: String,
    },
    equity:{
        type: String,
    },
    budget:{
        type: String,
    },
    expinc: {
        type: String,
    },
    startuplevel:{
        type: String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required : true,
    },
});
export const Entrepreneur = mongoose.model("entrepreneur",schema2);