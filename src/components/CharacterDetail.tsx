import React, {useEffect, useState} from 'react'
import {ICharacter} from "../model";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import axios, {AxiosError} from "axios";
import {CharacterList} from './CharacterList'

interface CharacterProps {
    characterDetail: ICharacter
}

export function CharacterDetail() {
    const [characterDetail, setCharacterDetail] = useState<ICharacter>()
    let id = window.location.pathname.split('/')[2];
    useEffect(() => {
        const url = `https://api.disneyapi.dev/characters/${id}`
        axios.get(url)
            .then((resp) => {
                    setCharacterDetail(resp.data)
            })
            .catch((e: unknown) => {
                const error = e as AxiosError
            })

    }, [])

    if (!characterDetail) return <></>
    return (
        <>
            <Container>

                <Box sx={{
                    width: '100%',
                    height: '385px',
                    boxShadow: '2px 3px 4px grey',
                    padding: '15px'
                }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100vh',
                            display: 'flex'
                        }}
                    >
                        <Box sx={{
                            width: '375px',
                            height: '375px',
                            boxShadow: '2px 2px 3px grey',
                            border: 'solid 5px white',
                            overflow: 'hidden'
                        }}>
                            <CardMedia
                                component="img"
                                image={characterDetail.imageUrl}
                                sx={{
                                    height: '100%',
                                    width: 'auto',
                                    margin: '0 auto'
                                }}
                            ></CardMedia>
                        </Box>
                        <Box sx={{ paddingLeft: '25px', flex: '1' }}>
                            <Typography variant="h3" component="h1">{characterDetail.name}</Typography>
                            <hr/>
                            <CharacterList characterListItems={characterDetail}></CharacterList>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </>

    )
}
