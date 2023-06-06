import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

function Note(props) {
    const { id, title, note, created_by, created_at, deleteNote, color } = props

    // const colorArr = [
    //     { name: "green", code: "RGB(202,237,157)"},
    //     { name: "orange", code: "RGB(248,163,43)"},
    //     { name: "pink", code: "RGB(252,195,201)"},
    //     { name: "purple", code: "RGB(220,136,221)"}
    // ]

    // const noteColor = color === null
    //     ? colorArr[Math.floor(Math.random() * colorArr.length)].code
    //     : colorArr.find(obj => obj.name === color).code

    return (
        <NoteMain color={color}>
            <NoteTitle>{title}</NoteTitle>
            <DeleteButton onClick={() => deleteNote(id)}>Delete</DeleteButton>
            <NoteDetails>Author: {created_by} on {created_at}</NoteDetails>
            <NoteText>{note}</NoteText>
        </NoteMain>
    )
}

export default Note

const NoteMain = styled.div`
    background: ${(props) => props.color};
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