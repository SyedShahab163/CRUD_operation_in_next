import { NextResponse } from "next/server";
import {getalluser ,getuser} from "@/lib/Userdata";
export const GET = async (req:Request, res:Response)=>{
    try {
         const userData =  getalluser();
         const user = getuser();
        return NextResponse.json({
            message:"Ok",
            userDetails : userData,
             user
        }, 
        {
            status:200
        }) 

    } catch (error) {
        return NextResponse.json({
            Error
        },{
            status:500
        })
    }
}