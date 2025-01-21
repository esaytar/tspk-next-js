'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation"
import useDropdown from "../store/useDropdown";

const CheckRedirectFunc = () => {
    const pathname = usePathname()
    const dropdown = useDropdown()

    useEffect(() => {
        dropdown.close()
        dropdown.closeMobile()
    }, [pathname])
}

export default CheckRedirectFunc