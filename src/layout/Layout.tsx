import { useContext } from "react"
import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { GoToTop } from "../components/GoToTop"
import { DarkmodeToggle } from "../components/DarkmodeToggle"
import { DarkModeContext } from "../components/context/darkmodeContext"

export const Layout = () => {
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    // Shared page shell with header, nav, and route outlet.
    return (

        <>
            <div className={`min-h-screen overflow-x-hidden bg-[#F5F1E8] text-[#3B2A22] dark:bg-[#151515] dark:text-[#EDE6D8] ${isDarkMode ? "dark" : ""}`}>
                <Header />

                <Navigation />
                <DarkmodeToggle />
                <GoToTop />

                <Outlet />

               
            </div>
        </>
    )
}