import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"

function NoteForm(props) {
  const { formSubmit, formUpdate, updatingNote } = props
  const [formData, setFormData] = useState({
    title: "",
    note: "",
    author: "",
    color: "#fefbc0",
    random: false,
  })
  const [isUpdating, setIsUpdating] = useState(false)

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    let color;
    if (formData.random) {
      color = `#${uuidv4().toString().substring(0,4)}`;
    } else {
      color = formData.color;
    }
    console.log(color);
    if (isUpdating) {
      formUpdate({
        id: formData.id,
        title: formData.title,
        author: formData.author,
        note: formData.note,
        date: formData.date,
        color: color
      });
    } else {
      const noteUUID = uuidv4().toString();
      formSubmit({
        id: noteUUID,
        title: formData.title,
        author: formData.author,
        note: formData.note,
        date: Date.now(),
        color: color
      });
    }
    setFormData({
      id: null,
      title: "",
      author: "",
      note: "",
      color: "#fefac0",
      random: false
    });
    setIsUpdating(false);
  }

  useEffect(() => {
    if (updatingNote) {
      setFormData({
        id: updatingNote.id,
        title: updatingNote.title,
        author: updatingNote.author,
        date: updatingNote.date,
        note: updatingNote.note,
        color: updatingNote.color,
        random: false
      });
      setIsUpdating(true);
    }
  }, [updatingNote]);

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{isUpdating ? `Editing Note ${updatingNote.title} by ${updatingNote.author}` : "Create a New Note"}</h2>
      <input 
        id="title"
        type="text"
        placeholder="Title"
        className="form--input"
        value={formData.title}
        name="title"
        onChange={handleFormChange}
        required
      />
      <input
        id="author"
        type="text"
        placeholder="Author"
        className="form--input"
        value={formData.author}
        name="author"
        onChange={handleFormChange}
        required
      />
      <textarea
        id="note"
        placeholder="Note"
        className="form--input"
        value={formData.note}
        name="note"
        onChange={handleFormChange}
        rows={15}
        required
      />
      <label htmlFor="color">Note Colour</label>
      <input
        id="color"
        type="color"
        name="color"
        value={formData.color}
        onChange={handleFormChange}
      />
      <label htmlFor="random">Random Colour?</label>
      <input
        id="random"
        type="checkbox"
        name="random"
        checked={formData.random}
        onChange={handleFormChange}
      />
      <SubmitButton>Add To Notes</SubmitButton>
    </Form>
  )
}

const Form = styled.form`
background-color: lightblue;
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

NoteForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  formUpdate: PropTypes.func.isRequired,
  updatingNote: PropTypes.object
}

NoteForm.defaultProps = {
  updatingNote: null
}

export default NoteForm