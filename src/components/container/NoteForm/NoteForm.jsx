import React from "react"
import styled from "styled-components"

function NoteForm(props) {
  const { title, created_by, note, updateNewNote, handleSubmit} = props


  return (
    <Form onSubmit={handleSubmit}>
      <h2>New Note</h2>
      <input 
        type="text"
        placeholder="Title"
        className="form--input"
        value={title}
        name="title"
        onChange={updateNewNote}
      />
      <input 
        type="text"
        placeholder="Noted by"
        className="form--input"
        value={created_by}
        name="created_by"
        onChange={updateNewNote}
      />
      <textarea
        placeholder="Note"
        className="form--input"
        value={note}
        name="note"
        onChange={updateNewNote}
        rows={15}
      />
      <SubmitButton >Add To Notes</SubmitButton>
    </Form>
  )
}

export default NoteForm

const Form = styled.form`
  background-color: red;
  display: flex;
  flex-direction: column;
  padding 18px 48px;

  .form--input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`
const SubmitButton = styled.button`
  height: 48px;
  margin-top: 12px;
  border-radius: 16px;
`
