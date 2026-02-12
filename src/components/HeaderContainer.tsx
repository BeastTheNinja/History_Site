import { useLocation, useNavigate } from "react-router"
import { DateInput } from "./DateInput"
import { HeaderText } from "./HeaderText"

export const HeaderContainer = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isByDate = location.pathname === "/by-date"
    const isSince = location.pathname === "/since"
    const isWideHeader = isByDate || isSince

    // Read current input values from the URL query string.
    const dateValue = new URLSearchParams(location.search).get("date") ?? ""
    const yearValue = new URLSearchParams(location.search).get("year") ?? ""

    // Keep the URL in sync with typed values on each view.
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
                className={`relative mx-auto mt-4 px-4 md:absolute md:left-1/2 md:top-120 md:-translate-x-1/2 md:mt-0 md:px-0 ${isWideHeader
                    ? "w-[calc(100vw-2rem)] max-w-288.5"
                    : "w-full max-w-88 sm:max-w-120 md:max-w-166.25"
                    }`}
            >
                <div
                    className={`relative flex flex-col items-center justify-center gap-4 bg-[#FFE9BF] dark:bg-[#1F1F1F] border-12 sm:border-18 md:border-25 border-[#D29E62] dark:border-[#D29E62] px-4 py-8 md:px-0 md:py-0 ${isWideHeader
                        ? "w-full h-113 md:gap-6"
                        : "w-full h-72 sm:h-88 md:h-96 md:block"
                        }`}
                >
                    {!isByDate && !isSince && <HeaderText />}
                    {isByDate && (
                        <DateInput
                            value={dateValue}
                            onChange={handleDateChange}
                            layout={isWideHeader ? "flow" : "absolute"}
                        />
                    )}
                    {isSince && (
                        <DateInput
                            value={yearValue}
                            onChange={handleYearChange}
                            headingText="SINCE:"
                            descriptionText="What happend on this day - Here you can enter a specific year to get only events for that year"
                            inputPlaceholder="Year"
                            inputPattern="^\\d{4}$"
                            inputMode="numeric"
                            formatValue={(raw) => raw.replace(/\D/g, "").slice(0, 4)}
                            isValidValue={(value) => /^\d{4}$/.test(value)}
                            layout={isWideHeader ? "flow" : "absolute"}
                        />
                    )}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#D29E62] dark:bg-[#C7BD8D] rounded-full"></div>
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#D29E62] dark:bg-[#C7BD8D] rounded-full"></div>
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#D29E62] dark:bg-[#C7BD8D] rounded-full"></div>
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#D29E62] dark:bg-[#C7BD8D] rounded-full"></div>
                </div>
            </div>
        </>
    )
}