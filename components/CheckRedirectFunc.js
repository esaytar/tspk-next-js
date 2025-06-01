'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation"
import useDropdown from "../store/useDropdown";
import useOpenElement from "../store/useOpenElement";

const CheckRedirectFunc = () => {
    const pathname = usePathname()
    const dropdown = useDropdown()
    const element = useOpenElement()

    useEffect(() => {
        dropdown.close()
        dropdown.closeMobile()
        element.closeSidebar()
    }, [pathname])
}

export default CheckRedirectFunc