import { useLocation, useNavigate } from "react-router"
import { DateInput } from "./DateInput"
import { HeaderText } from "./HeaderText"

export const HeaderContainer = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isByDate = location.pathname === "/by-date"

    const dateValue = new URLSearchParams(location.search).get("date") ?? ""

    const handleDateChange = (next: string) => {
        if (!isByDate) return

        if (next === "") {
            navigate("/by-date", { replace: true })
            return
        }

        navigate(`/by-date?date=${next}`, { replace: true })
    }

    return (
        <>
            <div className="absolute left-1/2 top-1/4 sm:top-1/3 -translate-x-1/2">
                <div
                    className={`relative items-center bg-[#1F1F1F] border-12 sm:border-18 md:border-25 border-[#D29E62] ${isByDate
                            ? "w-288.5 h-113"
                            : "w-88 h-72 sm:w-120 sm:h-88 md:w-166.25 md:h-96"
                        }`}
                >
                    {!isByDate && <HeaderText />}
                    {isByDate && (
                        <DateInput
                            value={dateValue}
                            onChange={handleDateChange}
                        />
                    )}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#C7BD8D] rounded-full"></div>
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#C7BD8D] rounded-full"></div>
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#C7BD8D] rounded-full"></div>
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#C7BD8D] rounded-full"></div>
                </div>
            </div>
        </>
    )
}