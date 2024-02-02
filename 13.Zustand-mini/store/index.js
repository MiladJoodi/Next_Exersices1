import { create } from "zustand";

export  const useCountState = create((set) => ({
    count: 0,
        actions: {
        increment: () => {
            set((state) => ({ ...state, count: state.count + 1 }))
        },
        decrement: () => {
            set((state) => ({ ...state, count: state.count - 1 }))
        }
    }
}))