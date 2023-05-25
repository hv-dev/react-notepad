import React from "react"
import styled from "styled-components"
import { NoteForm, Note } from "../../"
import backgroundImg from "../../../assets/images/background.svg"

function NotesContainer(props) {
    const { showForm } = props
    const[notes, setNotes] = React.useState([])

    function updateNotes(newNote) {
      const d = new Date();
      const dateString = `${d.toLocaleDateString()} at ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
      setNotes(notes => ([...notes, {...newNote, key: (notes.length + 1), created_at: dateString }]))
    }

    function deleteSelectedNote(key) {
      setNotes(current =>
        current.filter(note => {
          return note.key !== key;
        })
      );
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
                        note={newNote.note}
                        updateNewNote={updateNewNote}
                        handleSubmit={handleSubmit}
                      />
    const noteComponents = notes.map(noteData => (<Note {...noteData} deleteNote={deleteSelectedNote} id={noteData.key} />))

    return (
        <Container>
          <BackgroundImage 
            src={backgroundImg}
          />
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
            { notes.length > 0 ? noteComponents : <NoNotesMessage>No Notes to Display</NoNotesMessage>}
        </Container>
    )
}

export default NotesContainer

const Container = styled.main`
  height: 100%;
`

const BackgroundImage = styled.img`
  // puts it behind all other elements
  position: absolute;
  z-index: -999;

  // extends it to all edges of page
  width: 100%;
  height: 100%;
`

const NoNotesMessage = styled.h1`
  align-self: center;
`