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
   
// let  age = Userdata      
   if( age > 18 && 18 < 50){
   
   console.log("this is your eligible ")
 
   }
    else{
       console.log( "this is your ander 18 is not  eligible") 
   }
  
  
  
  
  
    return NextResponse.json({
        message:"ok",
        Userdata,
    },
    {
        status:200
    }
    )
    console.log("[[[[[[[[[[[[[[[[[[")
 } catch (error) {
    return NextResponse.json({
        error:"yaar is ko sahe karro"
    },
    {
        status:500
    })
 }   
}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
   