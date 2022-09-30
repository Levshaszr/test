import React from 'react'
import {Character} from './components/Character'
import {useCharacters} from './hooks/characters'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Clicker from "./components/Click"

import {useCharacter} from './hooks/character'

function App() {

    const {characterDetail} = useCharacter()

    const {characters, setCurrentPage, totalPage, error, loading} = useCharacters()
    const pageNumber = []
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i)
    }
    const handleChange = (evt:React.ChangeEvent<unknown>, value: number ) => {
        setCurrentPage(value)
    }

    return (
        <>
            <Clicker />
            <Container style={{width: '80%', maxWidth: '80%'}}>
                {error && <Box sx={{color: 'red',textAlign: 'center'}}>{ error }</Box>}
                {loading && <Box sx={{textAlign: 'center'}}>Loading...</Box>}
                {!error && <Box component="h1" sx={{ textAlign: 'center' }}>Disney characters</Box>}
                {!error && <Stack>
                    <Pagination count={totalPage} onChange={handleChange}/>
                </Stack>}
                {!error && <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {characters.map(character => <Character character={character} key={character._id}/>)}
                </Box>}
            </Container>
        </>
    )
}
export default App;