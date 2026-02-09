import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"



export const TodayView = () => {

    const { data, loading, error } = useFetchData<HistoryData>("https://history.muffinlabs.com/date")

    console.log(data)
    return (
        <>
            <div>
                {loading && <p>loading</p>}
                {error && <p>error</p>}
                {data && <Timeline items={data.data.Events} />}
            </div>

        </>
    )
}