import React from "react";
import UserModel from "@/models/User"
import { verifyToken } from "@/utils/auth";
import connectToDB from '@/configs/db';

function PAdmin({user}){
    return <h1>welcome admin:</h1>
}

export async function getServerSideProps(context){
    connectToDB()
    const {token} = context.req.cookies
    
    // if(!token){
    //   return{
    //     redirect:{
    //       destination:'/signin'
    //     }
    //   }
    // }
  
    //Token Validation
    const tokenPayload = verifyToken(token)
    if(!tokenPayload){
      return{
        redirect:{
          destination: "/signin"
        }
      }
    }
  
    const user = await UserModel.findOne({
      email: tokenPayload.email
    },'_id firstname lastname role')

    if(user.role !== "ADMIN"){
        return{
            redirect:{
                destination: "/dashboard"
            }
        }
    }
  
    return{
      props:{
        user: JSON.parse(JSON.stringify(user))
      }
    }
  }

  export default PAdmin;
