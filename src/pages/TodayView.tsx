import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"



export const TodayView = () => {
    // Default view shows today's events from the API.
    const { data, loading, error } = useFetchData<HistoryData>("https://history.muffinlabs.com/date")

    console.log(data)
    return (
        <>
            <div>
                {loading && <p className="font-['Linden_Hill'] text-[#695E48] dark:text-[#C7BD8D]">loading</p>}
                {error && <p className="font-['Linden_Hill'] text-[#695E48] dark:text-[#C7BD8D]">error</p>}
                {data && <Timeline items={data.data.Events} />}
            </div>

        </>
    )
}