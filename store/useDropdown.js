import { create } from "zustand";

const useDropdown = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
    
    isMobileOpen: false,
    reverseStatus: () => set((state) => ({ isMobileOpen: !state.isMobileOpen })),
    openMobile: () => set({isMobileOpen: true}),
    closeMobile: () => set({isMobileOpen: false}),
}))

export default useDropdown