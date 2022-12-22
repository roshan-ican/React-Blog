import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  // For Loading we use a hook
  const [isPending, setIsPending] = useState(true)
  // To render the error message on the UI
  const [error, setError] = useState(null)
  useEffect(() => {
    // abort function it will help with clean up
    const abortCont = new AbortController()
    // console.log("useEffect Ran")
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch resource for that data")
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('fetch Aborted');
          }else {
            setIsPending(false)
            setError(err.message)
          }
          // console.log(err.message)
          setIsPending(false)
          setError(err.message)
        })
    }, 1000)
    // clean up of useEffect
    return () => abortCont.abort()
  }, [url])
  return { data, error, isPending }
}

export default useFetch
