import { useCallback, useState } from "react"
import { useLocation } from "react-router"
import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

export const SinceView = () => {
	const { search } = useLocation()
	const yearParam = new URLSearchParams(search).get("year") ?? ""
	const hasValidYear = /^\d{4}$/.test(yearParam)
	const yearNumber = Number(yearParam)

	const { data, loading, error } = useFetchData<HistoryData>(
		"https://history.muffinlabs.com/date"
	)

	// Filter events only when a valid year is provided; otherwise show all.
	const filteredItems = data
		? hasValidYear
			? data.data.Events.filter((item) => Number(item.year) >= yearNumber)
			: data.data.Events
		: []

	// Lazy loading state: holder styr på hvor mange items der skal vises
	const [visibleCount, setVisibleCount] = useState(10)
	// Track forrige yearParam og data for at detecte ændringer
	const [prevYearParam, setPrevYearParam] = useState(yearParam)
	const [prevData, setPrevData] = useState(data)

	// Reset til 10 items når år eller data ændres (adjusting state during render)
	if (yearParam !== prevYearParam || data !== prevData) {
		setVisibleCount(10)
		setPrevYearParam(yearParam)
		setPrevData(data)
	}

	const visibleItems = filteredItems.slice(0, visibleCount)  // Vis kun de første X items
	const hasMore = visibleItems.length < filteredItems.length  // Er der flere at loade?

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
