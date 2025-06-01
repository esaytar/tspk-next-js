import { create } from "zustand"

const useSetSearchResults = create((set) => ({
    searchResults: [],
    setSearchResults: (res) => set(() => ({searchResults: res})),
}))

export default useSetSearchResults