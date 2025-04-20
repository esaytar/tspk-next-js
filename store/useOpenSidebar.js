import { create } from "zustand"

const useOpenSidebar = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
    reverseStatus: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useOpenSidebar