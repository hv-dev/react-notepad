import React from "react"
import styled from "styled-components"

function NotesContainer(props) {
    const { id, title, note, created_by, created_at, deleteNote } = props

    return (
        <Note>
            <NoteTitle>{title}</NoteTitle>
            <DeleteButton onClick={() => deleteNote(id)}>Delete</DeleteButton>
            <NoteDetails>Author: {created_by} on {created_at}</NoteDetails>
            <NoteText>{note}</NoteText>
        </Note>
    )
}

export default NotesContainer

const Note = styled.div`
    background-color: white;
    margin: 20px 20px;
`

const NoteTitle = styled.h1`
    display: inline-block;
    margin: 10px;
    width: 96%;
`

const DeleteButton = styled.button`
    position: absolute;
    height: 38px;
    margin: 10px 0px;
`

const NoteDetails = styled.h2`
    margin: 10px;
`

const NoteText = styled.p`
    margin-left: 10px;
`
