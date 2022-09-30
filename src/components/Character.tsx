import React, {useState} from 'react'
import {ICharacters} from "../model";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface CharactersProps {
    character: ICharacters
}

export function Character({character}: CharactersProps) {
    const [details, setDetails] = useState(false)

    return (
        <Card sx={{
            maxWidth: 345,
            maxHeight: 300,
            height: 300,
            width: 250,
            justifyContent: 'space-between',
            marginBottom: 1,
            cursor: 'pointer'
        }}>
            <Link href={"/details_page/"+character._id} >
                <Box
                    sx={{
                        p: 2,
                        borderRadius: '4px',
                        backgroundImage: `url(${character.imageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        height: 200,
                    }}
                />
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        marginTop: '15px'
                    }}
                >
                    { character.name }
                </Typography>
            </Link>
        </Card>
    )
}