import mongoose from 'mongoose';
import { config } from 'dotenv';

export const connectDB = ()=>{

    mongoose.connect(process.env.MONGO_URI,{
        dbName: "SharkTank",
    })
    .then((c) => console.log(`Database is Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
    

};

