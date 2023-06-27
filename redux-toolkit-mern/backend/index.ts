import { app } from "./app";
import mongoose from "mongoose";

const startServer = async () => {
    try{
        await mongoose.connect("")
        console.log("Connected to db");
        app.listen(3004, () => console.log("Server running")
        )
        
    }catch(error){
        console.log(error);
        
    }
}

startServer()