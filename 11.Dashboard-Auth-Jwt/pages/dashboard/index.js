import React from "react";
import Head from "next/head";
import Navbar from "@/components/modules/Navbar/Navbar";
import Header from "@/components/modules/Header/Header";
import States from "@/components/modules/States/States";
import Applications from "@/components/templates/Applications/Applications";
import { verifyToken } from "@/utils/auth";
import connectToDB from '@/configs/db';
import UserModel from "@/models/User"
import Charts from "@/components/templates/Charts/Charts";

function Dashboard({user}) {

  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Navbar username={user} />

      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Header />
        {/* <!-- Main --> */}
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            <States />
            {/* <Charts /> */}
            <Applications />
          </div>
        </main>
      </div>
      {/* <a class="gh-ribbon red left" href="https://github.com/Scrumplex" target="_blank">Fork me on GitHub!</a> */}
    </div>
  );
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
  },'_id firstname lastname')

  return{
    props:{
      user: JSON.parse(JSON.stringify(user))
    }
  }
}

export default Dashboard;
