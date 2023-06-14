import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

function Note(props) {
    const { id, title, note, created_by, created_at, deleteNote, color, updateNote } = props

    return (
      <NoteMain color={color}>
        <div>
          <NoteTitle>{title}</NoteTitle>
          <UpdateButton onClick={() => updateNote(id)}>Edit</UpdateButton>
          <DeleteButton onClick={() => deleteNote(id)}>Delete</DeleteButton>
          <NoteDetails>Author: {created_by} on {created_at}</NoteDetails>
          <NoteText>{note}</NoteText>
        </div>
      </NoteMain>
    )
}

export default Note

const NoteMain = styled.div`
    background: ${(props) => props.color};
    width: 800px;
    margin: 20px 20px;
    min-height: 150px;
    padding: 16px;
    border: 1px solid #d8d8d8;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-family: "Helvetica", "Arial", sans-serif;
    position: relative;
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

const UpdateButton = styled.button`
  height: 32px;
  width: 32px;
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
    color: PropTypes.string.isRequired,
    updateNote: PropTypes.func.isRequired
}