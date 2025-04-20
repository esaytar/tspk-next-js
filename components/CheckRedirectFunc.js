'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation"
import useDropdown from "../store/useDropdown";
import useOpenSidebar from "../store/useOpenSidebar";

const CheckRedirectFunc = () => {
    const pathname = usePathname()
    const dropdown = useDropdown()
    const sidebar = useOpenSidebar()

    useEffect(() => {
        dropdown.close()
        dropdown.closeMobile()
        sidebar.close()
    }, [pathname])
}

export default CheckRedirectFunc