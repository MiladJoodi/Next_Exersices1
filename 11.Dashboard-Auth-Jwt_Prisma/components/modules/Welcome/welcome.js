import React, { useEffect, useState } from 'react'
import { usePopUpClose } from '@/store'
import toast, { Toaster } from "react-hot-toast";

function Welcome() {


    const [popup, setPopup] = useState(true)

    const onHidePopup = () => {
        setPopup(false)
        localStorage.setItem("popup", JSON.stringify(false))
    }

    useEffect(() => {
        const data = localStorage.getItem("popup")
        console.log(data)
        if(data){
            setPopup(false)
        }
    }, [])

    return (


        <>
            {popup && (

                <div className='popup'>
                    <span>
                        خوش آمدید
                    </span>
                    <span className='pop-up-close-btn' onClick={onHidePopup}>
                        <i class="bi bi-x-circle"></i>
                    </span>
                </div>
            )}

        </>
    )
}

export default Welcome