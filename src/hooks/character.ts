import {useEffect, useState} from "react";
import {ICharacter} from "../model";
import axios, {AxiosError} from "axios";

export  function useCharacter() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [characterDetail, setCharacterDetail] = useState<ICharacter>()
    // const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        setError('')
        setLoading(true)
        const url = `https://api.disneyapi.dev/characters/6`
        axios.get(url)
            .then((resp) => {
// console.log(currentPage);
// console.log(resp);
//                 setTotalPage(resp.data.totalPages)
                setCharacterDetail(resp.data)
                setLoading(false)
            })
            .catch((e: unknown) => {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            })

    }, [])
    return {characterDetail, error, loading}
}