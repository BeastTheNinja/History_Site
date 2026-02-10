import { useLocation, useNavigate } from "react-router"
import { DateInput } from "./DateInput"
import { HeaderText } from "./HeaderText"

export const HeaderContainer = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isByDate = location.pathname === "/by-date"
    const isSince = location.pathname === "/since"
    const isWideHeader = isByDate || isSince

    const dateValue = new URLSearchParams(location.search).get("date") ?? ""
    const yearValue = new URLSearchParams(location.search).get("year") ?? ""

    const handleDateChange = (next: string) => {
        if (!isByDate) return

        if (next === "") {
            navigate("/by-date", { replace: true })
            return
        }

        navigate(`/by-date?date=${next}`, { replace: true })
    }

    const handleYearChange = (next: string) => {
        if (!isSince) return

        if (next === "") {
            navigate("/since", { replace: true })
            return
        }

        navigate(`/since?year=${next}`, { replace: true })
    }

    return (
        <>
            <div
                className={`absolute left-1/2 top-1/4 sm:top-1/3 -translate-x-1/2 ${isWideHeader
                    ? "w-[calc(100vw-2rem)] max-w-288.5"
                    : ""
                    }`}
            >
                <div
                    className={`relative items-center bg-[#1F1F1F] border-12 sm:border-18 md:border-25 border-[#D29E62] ${isWideHeader
                        ? "w-full h-113"
                        : "w-88 h-72 sm:w-120 sm:h-88 md:w-166.25 md:h-96"
                        }`}
                >
                    {!isByDate && !isSince && <HeaderText />}
                    {isByDate && (
                        <DateInput
                            value={dateValue}
                            onChange={handleDateChange}
                        />
                    )}
                    {isSince && (
                        <DateInput
                            value={yearValue}
                            onChange={handleYearChange}
                            headingText="SINCE:"
                            descriptionText="What happend on this day - Here you can enter a specific year to get only events for that year"
                            inputPlaceholder="YYYY"
                            inputPattern="^\\d{4}$"
                            inputMode="numeric"
                            formatValue={(raw) => raw.replace(/\D/g, "").slice(0, 4)}
                            isValidValue={(value) => /^\d{4}$/.test(value)}
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