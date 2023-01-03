import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(response => {
                    if (!response.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    if (error.name === "AbortError") {
                        console.log('Fetch aborted')
                    }
                    console.error(error.message);
                    setError(error.message);
                    setIsPending(false);
                })
        }, 500);
        return () => {
            abortController.abort()
            cleanup()
        }
    }, [url]);
    return { data, isPending, error }
}
export default useFetch;
