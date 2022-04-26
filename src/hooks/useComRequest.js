import { useEffect, useState } from "react"

export const useComRequest = (request) => {
    const [isLoading, setLoading] = useState(false) 
    const [isError, setError] = useState('') 
    const [response, setResponse] = useState('')

useEffect(() => {
    setLoading(true);
    request()
    .then(res => setResponse(res))
    .catch(err => setError(err))
    .finally(() => {
        console.log('LOA!!!!!!!')
        setLoading(false)})
    // console.log('LOADING!!!!!!!');
}, [])
console.log(isError, response);
return [response, isLoading, isError]
}