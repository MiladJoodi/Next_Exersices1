"use client"
import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerComponent = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Hamburger
            size={24}
            toggled={open}
            toggle={setOpen}
            />

            {open && <div className="absolute top-0 left-0 w-screen h-screen p-4 text-black bg-white dark:bg-slate-900 dark:text-white">
                <Hamburger
            size={24}
            toggled={open}
            toggle={setOpen}
            />
                </div>}


        </div>
            
    );
}

export default HamburgerComponent;