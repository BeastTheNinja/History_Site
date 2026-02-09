import { useEffect, useState } from "react"

export const useFetchData = <T,>(url: string) => {

    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError("An error occurred while fetching data.");
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error };
}  
