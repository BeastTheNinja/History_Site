import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "../layout/Layout"
import { TodayView } from "../pages/TodayView"
import { ByDateView } from "../pages/ByDateView"
import { SinceView } from "../pages/SinceView"

export const Routing = () => {



    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="by-date" element={<ByDateView />} />
                        <Route index element={<TodayView />} />
                        <Route path="since" element={<SinceView />} />
                    </Route>
                </Routes>


            </BrowserRouter>

        </>
    )
}