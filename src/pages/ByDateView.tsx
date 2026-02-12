import { useCallback, useState } from "react"
import { useLocation } from "react-router"
import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

export const ByDateView = () => {
    const { search } = useLocation()
    const dateParam = new URLSearchParams(search).get("date") ?? ""

    // Build endpoint for a specific day/month if input matches DD-MM.
    const match = dateParam.match(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])$/)
    const url = match
        ? `https://history.muffinlabs.com/date/${Number(match[2])}/${Number(match[1])}`
        : `https://history.muffinlabs.com/date`

    const { data, loading, error } = useFetchData<HistoryData>(url)

    // Lazy loading state: holder styr på hvor mange items der skal vises
    const [visibleCount, setVisibleCount] = useState(10)
    // Track forrige dateParam og data for at detecte ændringer
    const [prevDateParam, setPrevDateParam] = useState(dateParam)
    const [prevData, setPrevData] = useState(data)

    // Reset til 10 items når dato eller data ændres (adjusting state during render)
    if (dateParam !== prevDateParam || data !== prevData) {
        setVisibleCount(10)
        setPrevDateParam(dateParam)
        setPrevData(data)
    }

    const items = data ? data.data.Events : []
    const visibleItems = items.slice(0, visibleCount)  // Vis kun de første X items
    const hasMore = visibleItems.length < items.length  // Er der flere at loade?

    // Callback der kaldes når brugeren scroller til bunden - loader 10 ekstra
    const onLoadMore = useCallback(() => {
        setVisibleCount((c) => c + 10)
    }, [])

    // Hook der håndterer infinite scroll med IntersectionObserver
    const { sentinelRef } = useInfiniteScroll({ onLoadMore, hasMore })

    return (
        <>
            <div>
                {loading && <p className="font-['Linden_Hill'] text-[#695E48] dark:text-[#C7BD8D]">loading</p>}
                {error && <p className="font-['Linden_Hill'] text-[#695E48] dark:text-[#C7BD8D]">error</p>}
                {data && <Timeline items={visibleItems} />}
                {hasMore && <div ref={sentinelRef} className="h-1" />}
            </div>
        </>
    )
}