import React from "react"
import styled from "styled-components"

function NotesContainer(props) {
    const { title, note, created_by, created_at } = props

    return (
        <Note>
            <NoteTitle>{title}</NoteTitle>
            <NoteDetails>Author: {created_by} on {created_at}</NoteDetails>
            <NoteText>{note}</NoteText>
        </Note>
    )
}

export default NotesContainer

const Note = styled.div`
    background-color: blue;
    margin: 20px;
    width: 100%;
    border-style: solid;
`

const NoteTitle = styled.h1`
`

const NoteDetails = styled.h2`
`

const NoteText = styled.p`
`