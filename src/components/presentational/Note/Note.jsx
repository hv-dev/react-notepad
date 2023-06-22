import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

function Note(props) {
    const { id, title, note, author, date, color, updateNote, deleteNote } = props

    const generateDateString = () => {
      const d = new Date(date);
      return `${d.toLocaleDateString()} at ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }

    return (
      <NoteMain color={color}>
        <NoteTitle>{title}</NoteTitle>
        <UpdateButton onClick={() => updateNote({id, title, author, date, note, color})}>Edit</UpdateButton>
        <DeleteButton onClick={() => deleteNote(id)}>Delete</DeleteButton>
        <NoteDetails>Author: {author} on {generateDateString()}</NoteDetails>
        <NoteText>{note}</NoteText>
      </NoteMain>
    )
}

export default Note

const NoteMain = styled.div`
    width: 400px;
    min-height: 150px;
    padding: 16px;
    margin: 16px;
    background-color: ${(props) => props.color};
    border: 1px solid #d8d8d8;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-family: "Helvetica", "Arial", sans-serif;
    position: relative;
`

const NoteTitle = styled.h1`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
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
  font-size: 12px;
  color: #777;
  margin-bottom: 8px;
`

const NoteText = styled.p`
  font-size: 14px;
  word-wrap: break-word;
`

Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
}