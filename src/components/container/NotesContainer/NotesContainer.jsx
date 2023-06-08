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

    function setNoteUpdateMode(key, update) {
      setNotes(current =>
        current.filter(note => {
          if (note.key === key) {
            note.edit = update;
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
        }))
    }

    const [newNote, setNewNote] = React.useState({
      title: "",
      note: "",
      created_by: "",
      color: "random",
      update: false
    })

    function updateNewNote(event) {
      const { name, value } = event.target
      setNewNote(prev => ({
        ...prev,
        [name]: value
      }))
    }

    const colorArr = [
      { name: "green", code: "RGB(202,237,157)"},
      { name: "orange", code: "RGB(248,163,43)"},
      { name: "pink", code: "RGB(252,195,201)"},
      { name: "purple", code: "RGB(220,136,221)"}
    ]

    function handleSubmit(event) {
      event.preventDefault();
      const note = newNote;
      note.color = newNote.color === "random"
                    ? colorArr[Math.floor(Math.random() * 4)].code
                    : colorArr.find(obj => obj.name === newNote.color).code

      updateNotes(note);

      setNewNote({
        title: "",
        note: "",
        created_by: "",
        color: "random"
      });
    }

    const noteComponents = notes.map(noteData => (
      <Note
        {...noteData}
        deleteNote={deleteSelectedNote}
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