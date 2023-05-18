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
        },
        {
          key: 3,
          title: "Title",
          created_by: "Developer",
          created_at: "Thu 18 May",
          note: "test note to allow for design of note displaying"
        },
        {
          key: 4,
          title: "Title",
          created_by: "Developer",
          created_at: "Thu 18 May",
          note: "test note to allow for design of note displaying"
        },
        {
          key: 5,
          title: "Title",
          created_by: "Developer",
          created_at: "Thu 18 May",
          note: "test note to allow for design of note displaying"
        },
        {
          key: 6,
          title: "Title",
          created_by: "Developer",
          created_at: "Thu 18 May",
          note: "test note to allow for design of note displaying"
        }
    ])

    function updateNotes(newNote) {

      setNotes(notes => ([...notes, {...newNote, key: (notes.length + 1) }]))
    }

    const noteComponents = notes.map(noteData => (<Note {...noteData} />))

    return (
        <Container>
            <NoteForm />
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