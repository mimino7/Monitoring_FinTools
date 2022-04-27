import React, { useState } from 'react'

const useCommRequest = (callback) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const  fetching = async() => {
        setLoading(true)
        try {
await callback()
        }
        catch (e) {
            console.log(e.message);
            setError(e.message)
        }
        finally {
            setLoading(false)
        }
    }
    return (
    [fetching, loading, error]
    )
}

export default useCommRequest