import mongoose from "mongoose";

const schema1 = new mongoose.Schema({
    name: {
       type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
    mobile:{
        type: String,
    },
});
export const User = mongoose.model("user",schema1);
