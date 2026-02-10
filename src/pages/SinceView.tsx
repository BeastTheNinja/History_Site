import { useLocation } from "react-router"
import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"

export const SinceView = () => {
	const { search } = useLocation()
	const yearParam = new URLSearchParams(search).get("year") ?? ""
	const hasValidYear = /^\d{4}$/.test(yearParam)
	const yearNumber = Number(yearParam)

	const { data, loading, error } = useFetchData<HistoryData>(
		"https://history.muffinlabs.com/date"
	)

	const filteredItems = data
		? hasValidYear
			? data.data.Events.filter((item) => Number(item.year) >= yearNumber)
			: data.data.Events
		: []

	return (
		<>
			<div>
				{loading && <p>loading</p>}
				{error && <p>error</p>}
				{data && <Timeline items={filteredItems} />}
			</div>
		</>
	)
}
