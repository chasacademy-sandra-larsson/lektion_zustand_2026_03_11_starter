import { create } from "zustand"



// 1. Definera vår type eller interface
type CounterState = {
    count: number;
    increment: () => void
    decrement: () => void 
    reset: () => void
}


// 2. Skapa vår store
export  const useCounterStore = create<CounterState>((set) => ({

    // State
    count: 0,


    // Actions
    increment: () => set((state) => ({ count: state.count + 1})),
    decrement: () => set((state) => ({ count: state.count - 1})),
    reset: () => set({ count: 0})

})) 
