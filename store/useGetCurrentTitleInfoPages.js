// store/titleStore.ts
import { create } from "zustand";

export const useTitleStore = create((set) => ({
    title: typeof document !== 'undefined' ? document.title : '',
    setTitle: (newTitle) => set({ title: newTitle }),
}));