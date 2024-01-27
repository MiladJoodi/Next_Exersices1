import React from "react";

function Dashboard() {
  return (
    <>
      <h1>Amin - Saeedi - Welcome To Dashboard</h1>
    </>
  );
}

export async function getServerSideProps(context){
  // console.log(context.req.cookies)
  const {token} = context.req.cookies
  
  if(!token){
    return{
      redirect:{
        destination:'/signin'
      }
    }
  }

  

  return{
    props:{

    }
  }
}

export default Dashboard;
