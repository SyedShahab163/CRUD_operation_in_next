import { NextResponse } from "next/server";
import {postuser} from "@/lib/Userdata"
import { experimental_taintUniqueValue } from "react";

 export  const POST =  async (req:Request, res:Response) => {
    
  try {
    const {name , age ,id} = await req.json()
    const Userdata = {
        Name:name,
        age:age,
        id:id,
    }
    postuser(Userdata);
   
      let user 
      const users= "sorry this is not eligile"
     
   if( age > 18 &&  age < 60){
     user = "this is your eligible"
   }
    else {
         user = "sorry this is not eligile"
    }
    return NextResponse.json({
        message:"ok",
        user,
    },
    {
        status:200
    }
    )
  } catch (error) {
     return NextResponse.json({
         error:"Somethin went Wrong"
     },
     {
         status:500
    })
  }   
 }
