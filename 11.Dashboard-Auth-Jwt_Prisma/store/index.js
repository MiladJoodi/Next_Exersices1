import { useState } from "react";
import { create } from "zustand";

export const usePopUpClose = create((set) => ({
    popUp: true,
    closePopup: (status)=> {
        set({popUp: status})
    }
}))

