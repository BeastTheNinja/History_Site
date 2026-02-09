import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"

export const Layout = () => {


    return (

        <>
            <div className="bg-[#151515] max-w-screen max-h-screen mx-auto ">
        <Header />

        <Navigation />

        <Outlet />
        </div>

        
        
        </>
    )
}