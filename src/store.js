import {create} from "zustand";

const useStore = create ((set) => ({
    count: 0,
    increament: () => set((state)=> ({count: state.count + 1})),
    decreament: () => set((state)=> ({count: state.count - 1})),

}));

export default useStore;