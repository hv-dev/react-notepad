import React from "react"
import styled from "styled-components"

function NoteForm() {
  const [newNote, setNewNote] = React.useState({
    title: "",
    note: "",
    created_by: "",

  })

  function updateNewNote(event) {
    const { name, value } = event.target
    setNewNote(prev => ({
      prev,
      [name]: value
    }))
  }

  return (
    <Form>
      <h2>New Note</h2>
      <input 
        type="text"
        placeholder="Title"
        className="form--input"
        value={newNote.title}
        name="title"
        onChange={updateNewNote}
      />
      <textarea
        placeholder="Note"
        className="form--input"
        value={newNote.note}
        name="note"
        onChange={updateNewNote}
      />
      <SubmitButton>Add To Notes</SubmitButton>
    </Form>
  )
}

export default NoteForm

const Form = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 400px;

  .form--input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=textarea] {
    rows: 10;
  }
`
const SubmitButton = styled.button`
  background-color: blue;
`