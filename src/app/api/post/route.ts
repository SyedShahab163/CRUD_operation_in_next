import { NextResponse } from "next/server";
import {postuser} from "@/lib/Userdata"
import { experimental_taintUniqueValue } from "react";

 export  const POST =  async (req:Request, res:Response) => {
    
//  try {
    const {name , age ,id} = await req.json()
    const Userdata = {
        Name:name,
        age:age,
        id:id,
    }
    postuser(Userdata);
   
      let user 
    //   const users= "sorry this is not eligile"
    // 
   if( age > 18 &&  age < 60){
     user = "this is your eligible"
    
   }
    else {
         user = "sorry this is not eligile"
    }
    // const alluser = user
    // const user  = " "
    return NextResponse.json({
        message:"ok",
        user,
      
    },
    {
        status:200
    }
    )
    console.log("[[[[[[[[[[[[[[[[[[")
//  } catch (error) {
    // return NextResponse.json({
        // error:"yaar is ko sahe karro"
    // },
    // {
        // status:500
    // })
//  }   
// }
}