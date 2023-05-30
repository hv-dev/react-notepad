import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import greenNote from "../../../assets/images/notes/green.png"
import orangeNote from "../../../assets/images/notes/orange.png"
import pinkNote from "../../../assets/images/notes/pink.png"
import purpleNote from "../../../assets/images/notes/purple.png"

function Note(props) {
    const { id, title, note, created_by, created_at, deleteNote, color } = props

    const colorArr = [
        { name: "green", img: {greenNote}},
        { name: "orange", img: {orangeNote}},
        { name: "pink", img: {pinkNote}},
        { name: "purple", img: {purpleNote}}
    ]

    const noteColor = color === null
        ? colorArr[Math.floor(Math.random() * colorArr.length)].img
        : colorArr.find(obj => obj.name === color)

    return (
        <NoteMain color={noteColor}>
            <NoteTitle>{title}</NoteTitle>
            <DeleteButton onClick={() => deleteNote(id)}>Delete</DeleteButton>
            <NoteDetails>Author: {created_by} on {created_at}</NoteDetails>
            <NoteText>{note}</NoteText>
        </NoteMain>
    )
}

export default Note

const NoteMain = styled.div`
    background: ${(props) => `url(${greenNote}) no-repeat`};
    background-size: auto;
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

Note.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    deleteNote: PropTypes.func.isRequired,
    color: PropTypes.string
}

Note.defaultProps = {
    color: null
};