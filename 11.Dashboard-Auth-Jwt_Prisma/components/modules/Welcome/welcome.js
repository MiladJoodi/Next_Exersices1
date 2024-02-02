import React, { useEffect, useState } from 'react'
import { usePopUpClose } from '@/store'
import toast, { Toaster } from "react-hot-toast";

function Welcome() {


    const [popup, setPopup] = useState(true)

    const onHidePopup = () => {
        setPopup(false)
        // localStorage.setItem("popup", JSON.stringify(false))
    }

    useEffect(() => {
        const data = localStorage.getItem("popup")
        console.log(data)
        if(data){
            setPopup(false)
        }
    }, [])

    return (


        <div>
            {popup && (

                <div className='popup'>
                    <p>
                        خوش آمدید
                    </p>
                    <p className='pop-up-close-btn' onClick={onHidePopup}>
                        <i class="bi bi-x-circle"></i>
                    </p>
                </div>
            )}

        </div>
    )
}

export default Welcome