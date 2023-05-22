import React from "react"
import styled from "styled-components"
import { NoteForm, Note } from "../../"

function NotesContainer() {
    const[notes, setNotes] = React.useState([
        {
            key: 1,
            title: "Title",
            created_by: "Developer",
            created_at: "Thu 18 May",
            note: "test note to allow for design of note displaying"
        },
        {
          key: 2,
          title: "Title",
          created_by: "Developer",
          created_at: "Thu 18 May",
          note: "test note to allow for design of note displaying"
        }
    ])

    function updateNotes(newNote) {

      setNotes(notes => ([...notes, {...newNote, key: (notes.length + 1) }]))
    }

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

    function clearNewNote() {
      setNewNote({
        title: "",
        note: "",
        created_by: "",
      })
    }

    function handleSubmit(event) {
      event.preventDefault();
      updateNotes(newNote);
      clearNewNote();
    }

    const noteComponents = notes.map(noteData => (<Note {...noteData} />))

    return (
        <Container>
            <NoteForm
              title={newNote.title}
              created_by={newNote.created_by}
              note={newNote.note}
              updateNewNote={updateNewNote}
              // clearNewNote={clearNewNote}
              handleSubmit={handleSubmit}
            />
            { notes.length > 0 ? noteComponents : <h1>No Items to Display</h1>}
        </Container>
    )
}

export default NotesContainer

const Container = styled.main`
  background-color: purple;
  display: flex;
  flex-direction: column;
`