import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

export function CharacterListItem(characterListItem:any) {
    const [data, setData] = useState<string | any>('')
    const [title, setTitle] = useState<string | any>('')

    useEffect(() => {
        Object.keys(characterListItem.characterListItem).map((item:string) => {
            const obj:string[] = characterListItem.characterListItem[item as keyof typeof characterListItem.characterListIte]

            if (typeof obj == 'object') {
                if (obj.length > 0) {
                    const str:string = obj.join(', ')
                    setData(str)
                    setTitle(item)
                }
            }
        })
    }, [])

    return (
        <ListItem>
            <Typography display="span" sx={{ fontWeight: 'bold' }}>{ title }: </Typography>
            <Typography display="span">{ data }</Typography>
        </ListItem>
    )
}