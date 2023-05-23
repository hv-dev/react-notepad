import React from "react"
import styled from "styled-components"
import { NoteForm, Note } from "../../"

function NotesContainer(props) {
    const { showForm } = props
    const[notes, setNotes] = React.useState([])

    function updateNotes(newNote) {
      const d = new Date();
      const dateString = `${d.toLocaleDateString()} at ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
      setNotes(notes => ([...notes, {...newNote, key: (notes.length + 1), created_at: dateString }]))
    }

    const [newNote, setNewNote] = React.useState({
      title: "",
      note: "",
      created_by: ""
    })

    function updateNewNote(event) {
      const { name, value } = event.target
      setNewNote(prev => ({
        ...prev,
        [name]: value
      }))
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(newNote);
      updateNotes(newNote);

      setNewNote({
        title: "",
        note: "",
        created_by: "",
      });
    }

    const noteForm = <NoteForm
                        title={newNote.title}
                        created_by={newNote.created_by}
                        created_at={newNote.created_at}
                        note={newNote.note}
                        updateNewNote={updateNewNote}
                        handleSubmit={handleSubmit}
                      />
    const noteComponents = notes.map(noteData => (<Note {...noteData} />))

    return (
        <Container>
            { showForm && 
                <NoteForm
                  title={newNote.title}
                  created_by={newNote.created_by}
                  created_at={newNote.created_at}
                  note={newNote.note}
                  updateNewNote={updateNewNote}
                  handleSubmit={handleSubmit}
                />
            }
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