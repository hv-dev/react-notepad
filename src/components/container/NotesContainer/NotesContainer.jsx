import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import { NoteForm, Note } from "../../"

function NotesContainer(props) {
    const { formVisible, formToggle } = props
    const [notes, setNotes] = React.useState([]);
    const [updatingNote, setUpdatingNote] = React.useState(null);

    const handleFormSubmit = (newNote) => {
      setNotes([...notes, newNote])
    }
    
    const handleFormUpdate = (updatedNote) => {
      const newNotes = notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        } else {
          return note
        }
      });
      setNotes(newNotes);
    }

    const startUpdating = (note) => {
      setUpdatingNote(note);
      formToggle(true);
    }

    const handleNoteDelete = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    }

    const noteComponents = notes.map(noteData => (
      <Note
        {...noteData}
        key={noteData.id}
        updateNote={startUpdating}
        deleteNote={handleNoteDelete}
      />
    ))

    return (
        <Container>
          {formVisible &&
            <NoteForm
              formSubmit={handleFormSubmit}
              formUpdate={handleFormUpdate}
              updatingNote={updatingNote}
            />
          }
          <NotesGrid>
            { notes.length > 0 ? noteComponents : <NoNotesMessage>No Notes to Display</NoNotesMessage>}
          </NotesGrid>
        </Container>
    )
}

export default NotesContainer

const Container = styled.main`
  height: 100%;
`

const NotesGrid = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-left: 24px;
`

const NoNotesMessage = styled.h1`
  align-self: center;
`

NotesContainer.propTypes = {
  formVisible: PropTypes.bool.isRequired,
  formToggle: PropTypes.func.isRequired
}