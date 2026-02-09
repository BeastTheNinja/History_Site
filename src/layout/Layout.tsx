import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"

export const Layout = () => {


    return (

        <>
            <div className="bg-[#151515]">
        <Header />

        <Navigation />

        <Outlet />
        </div>

        
        
        </>
    )
}