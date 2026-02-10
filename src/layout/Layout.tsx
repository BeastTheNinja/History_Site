import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"

export const Layout = () => {

    // Shared page shell with header, nav, and route outlet.
    return (

        <>
            <div className="bg-[#151515] overflow-x-hidden">
                <Header />

                <Navigation />

                <Outlet />
            </div>



        </>
    )
}