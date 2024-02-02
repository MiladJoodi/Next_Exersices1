import React, { useEffect, useState } from 'react'
import { usePopUpClose } from '@/store'
import toast, { Toaster } from "react-hot-toast";

function Welcome() {

   const [popup, setPopup] = useState(true)



   const onHidePopup = ()=>{
    setPopup(false)
    localStorage.setItem("popup", JSON.stringify(false))
   }

   useEffect(()=>{
    const data = localStorage.getItem("popup")
    setPopup(JSON.parse(data))
    // console.log(data)
},[])

    return (
        <>
             {popup &&(
                <div className='popup'>
                    <h1>
                        خوش آمدید
                    </h1>
                    <span onClick={onHidePopup}>بستن</span>
                </div>
             )}
        </>
    )
}

export default Welcome