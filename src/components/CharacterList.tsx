import React from "react";
import {ICharacter} from "../model";
import List from "@mui/material/List";
import {CharacterListItem} from "./CharacterListItem"

interface CharacterListProps {
    characterListItems: ICharacter
}

export function CharacterList({characterListItems}: CharacterListProps) {
    return (
        <List>
            <CharacterListItem characterListItem={characterListItems}></CharacterListItem>
        </List>
    )
}