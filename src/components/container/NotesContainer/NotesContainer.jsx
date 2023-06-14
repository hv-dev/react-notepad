import React from "react"
import styled from "styled-components"
import { NoteForm, Note } from "../../"
import backgroundImg from "../../../assets/images/background.svg"

function NotesContainer(props) {
    const { showForm } = props
    const [notes, setNotes] = React.useState([])

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

    function setNoteToUpdate(key) {
      setNotes(current =>
        current.filter(note => {
          if (note.key === key) {
            note.update = true;
          }
          return note;
        }))
    }

    function updateNote(key, title, noteText, color) {
      setNotes(current =>
        current.filter(note => {
          if (note.key === key) {
            note = {
              key: key,
              title: title,
              note: noteText,
              created_by: note.created_by,
              color: color,
              update: false
            }
          }
          return note;
        })
      )
    }

    const [newNote, setNewNote] = React.useState({
      title: "",
      note: "",
      created_by: "",
      color: "#fefbc0",
      random: false,
      update: false,
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
      const note = newNote;
      note.color = newNote.random
                    ? `#${Math.random().toString(16).substring(0, 5)}`
                    : note.color

      updateNotes(note);

      setNewNote({
        title: "",
        note: "",
        created_by: "",
        color: "#fefbc0"
      });
    }

    const noteComponents = notes.map(noteData => (
      <Note
        {...noteData}
        id={noteData.key}
      />
    ))

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
              color={newNote.color}
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