import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import {NextResponse} from "next/server"


export async function GET(request) {
    try{

        const{userID} =getAuth(request)

        await connectDB()
        const user = await User.findById(userID)
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" });
        }



        const{ cartitems } = user

        return NextResponse.json({success: true, cartItems})

    }catch(error){
        return NextResponse.json({ success: false, message: error.message })
    }
}
