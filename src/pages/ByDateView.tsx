import { useLocation } from "react-router"
import { Timeline } from "../components/Timeline"
import { useFetchData } from "../data/Data"
import type { HistoryData } from "../types/Data"

export const ByDateView = () => {
    const { search } = useLocation()
    const dateParam = new URLSearchParams(search).get("date") ?? ""

    const match = dateParam.match(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])$/)
    const url = match
        ? `https://history.muffinlabs.com/date/${Number(match[2])}/${Number(match[1])}`
        : `https://history.muffinlabs.com/date`

    const { data, loading, error } = useFetchData<HistoryData>(url)

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