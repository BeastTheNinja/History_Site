import { useCallback, useState } from "react"
import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

export const TodayView = () => {
    // Default view shows today's events from the API.
    const { data, loading, error } = useFetchData<HistoryData>("https://history.muffinlabs.com/date")

    // Lazy loading state: holder styr på hvor mange items der skal vises
    const [visibleCount, setVisibleCount] = useState(10)
    // Track forrige data for at detecte ændringer
    const [prevData, setPrevData] = useState(data)

    // Reset til 10 items når ny data hentes (adjusting state during render)
    if (data !== prevData) {
        setVisibleCount(10)
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

    console.log(data)
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