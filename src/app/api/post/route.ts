import { NextResponse } from "next/server";
import {postuser} from "@/lib/Userdata"
// import { experimental_taintUniqueValue } from "react";

 export const POST =  async (req:Request, res:Response) => {
    
  // try {
    const {name,age,id ,vip} = await req.json()
    const Userdata = {
        Name:name,
        age:age,
        id:id,
    }
    postuser(Userdata)
      let user

    if( vip === true){
       user =  Userdata}
     else if(name === "admin" ){
        user = Userdata
    }else if(age > 18 &&  age < 60){
    user = "this is your eligible"
    }else{
        user = "sorry this is not vip person"
    }
    // }else
      // user = "sorry this is not eligible"
    // }
    // const  Condition: boolean = true; 
    //  let con
      //  if (vip === true) {
        // user = Userdata
    // 
      // } else {
   
    //  user = "sorry this is not a vip person"
    // }
      // if (name === 'admin') {
      // user ="Name is admin Condition satisfied"

      // } else 
      //  user = "Name is not admin. Condition not satisfied"
      // 

     return NextResponse.json({
        message:"ok",
        user
        
    },
    {
        status:200
    }
    )
  }
  // } catch (error) {
    //  return NextResponse.json({
        //  error:"Somethin went Wrong"
    //  },
    //  {
        //  status:500
    // })
  // }   
//  }
//  }