import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "../layout/Layout"

export const Routing = () => {



    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="by-date" element={<h1>By Date</h1>} />
                        <Route index element={<h1>Today</h1>} />
                        <Route path="since" element={<h1>Since</h1>} />
                    </Route>
                </Routes>


            </BrowserRouter>

        </>
    )
}