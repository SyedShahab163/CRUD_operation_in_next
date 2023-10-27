import { NextResponse } from "next/server";
import { getUserByid,userUpdateById, } from "@/lib/Userdata";

 export const GET = async (req:Request, res:Response)=>{
   
    
  try {
        const Name = req.url.split('userinfo/')[1];
         const userDetial = getUserByid(Name);
        return NextResponse.json({
            message:"OK",
            userDetial,
           
        },
        {
            status:200
        }) 
    } catch (error) {
      return NextResponse.json({
     error
      },
      {
     status:500
      })        
     }
 } 
 export const PUT = async(req:Request,res:Response)=>{
    try {
        const id = req.url.split('userinfo/')[1];
        const {name,age } = await req.json()
        userUpdateById(id,name ,age)
        const userDetial = getUserByid(id);
        return NextResponse.json({
            message:"OK",
            res:"user data succeffuly updated",
            userDetial
        },
    
        {
            status:500
        })
    } catch (error) {
        NextResponse.json({
            error
        },
        {
            status:500
        })
    }

 }
