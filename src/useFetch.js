import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] =useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Failed to load resource: the server responded with a status of 404 (Not Found)')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    },[url]);
    return { data,isPending,error }
}
export default useFetch;