import { useSearchParams } from 'react-router-dom'

const useSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const get = (key) => {
    return searchParams.get(key)
  }

  const set = (key, value) => {
    const params = new URLSearchParams(searchParams)

    params.set(key, value)

    setSearchParams(params)
  }

  const remove = (key) => {
    const params = new URLSearchParams(searchParams)

    params.delete(key)

    setSearchParams(params)
  }

  const clear = () => {
    setSearchParams({})
  }

  return {
    get,
    set,
    remove,
    clear
  }
}

export { useSearchParam }