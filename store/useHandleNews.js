import { create } from "zustand";

const useHandleNews = create((set) => ({
    textNews: '',
    dateNews: '',
    imageNews: [],
    setTextNews: (text) => set(() => ({textNews: text})),
    setDateNews: (date) => set(() => ({dateNews: date})),
    setImageNews: (url) => set(() => ({imageNews: url})),

    isOpened: false,
    setIsOpened: (isOpened) => set({ isOpened }),
}))

export default useHandleNews