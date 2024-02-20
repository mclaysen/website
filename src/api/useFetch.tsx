import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string) => {
    const[state, setState] = useState<{data: T | null, loading: Boolean}>({data: null, loading: true});
    useEffect(() => {
        setState({data: null, loading: true});
        fetch(url)
            .then(x=>x.json())
            .then(y=>{
                setState({data: y, loading: false})
            })
    }, [url])

    return state;
}