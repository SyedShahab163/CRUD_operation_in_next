import { NextResponse } from "next/server";
import { userRemoveById } from "@/lib/Userdata";

export const DELETE = async (req:Request,res:Response)=>{
    try {
    
            const id = req.url.split('userinfo/')[1];
            userRemoveById(id);
            return NextResponse.json({
                message:"OK",
                res:"user info RemoveSucces fully"
            })
    } catch (error) {
        NextResponse.json({
            error
        },
        {
            status:500
        })
    }
    console.log("PUT","===================================")
 }