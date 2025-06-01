import { create } from "zustand"

const useOpenElement = create((set) => ({
    isOpenSidebar: false,
    openSidebar: () => set({isOpenSidebar: true}),
    closeSidebar: () => set({isOpenSidebar: false}),
    reverseStatusSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),

    isModalDocOpen: false,
    setIsOpenedModalDoc: (isModalDocOpen) => set({ isModalDocOpen }),
}))

export default useOpenElement