"use client"
import { useContext, createContext, useState } from "react";

const NavContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [openmenu, setopenmenu] = useState(false)

    const togglemenu = () => {
        setopenmenu(!openmenu)

    }

    return (
        <NavContext.Provider value={{ openmenu, setopenmenu, togglemenu }}>{children}</NavContext.Provider>
    )

}

export const Nav = () => {
    return useContext(NavContext)
}