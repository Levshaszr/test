import {useEffect, useState} from "react";
import {ICharacters} from "../model";
import axios, {AxiosError} from "axios";

export  function useCharacters() {
    const [characters, setCharacters] = useState<ICharacters[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    async function getList() {
        const url = `https://api.disneyapi.dev/characters?page=${currentPage}`
        await axios.get(url)
            .then((resp) => {
                setTotalPage(resp.data.totalPages)
                setCharacters(resp.data.data)
                setLoading(false)
            })
            .catch((e: unknown) => {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            })
    }

    useEffect(() => {
        setError('')
        setLoading(true)
        getList()
    }, [currentPage])
    return {characters, error, loading, setCurrentPage, totalPage}
}