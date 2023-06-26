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
    random: true,
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
      random: true
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
      <InputsContainer>
      <LeftContainer>
        <FormTitle>{isUpdating ? `Editing Note ${updatingNote.title} by ${updatingNote.author}` : "Create a New Note"}</FormTitle>
        <InputContainer direction="column">
          {/* <label htmlFor="title">Title</label> */}
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
        </InputContainer>
        <InputContainer direction="column">
          {/* <label htmlFor="author">Author</label> */}
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
        </InputContainer>
        <InputContainer direction="row">
          <label htmlFor="color">Colour</label>
          <input
            id="color"
            type="color"
            name="color"
            value={formData.color}
            onChange={handleFormChange}
          />
        </InputContainer>
        <InputContainer direction="row">
          <label htmlFor="random">Random Colour?</label>
          <input
            id="random"
            type="checkbox"
            name="random"
            checked={formData.random}
            onChange={handleFormChange}
          />
        </InputContainer>
      </LeftContainer>
      <RightContainer>
        <textarea
          id="note"
          placeholder="Note"
          className="form--input"
          value={formData.note}
          name="note"
          onChange={handleFormChange}
          rows={12}
          required
          style={{marginTop: 60 + "px"}}
        />
      </RightContainer>
      </InputsContainer>
      <SubmitButton>Add To Notes</SubmitButton>
    </Form>
  )
}

const Form = styled.form`
background-color: lightblue;
display: flex;
padding: 18px 48px;
display: flex;
flex-direction: column;
align-items: center;

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
const FormTitle = styled.h2`
  padding-bottom: 0px;
  margin-bottom: 8px;
`
const InputsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 24px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin-right: 6px;
  margin-bottom: 6px;
`;

const SubmitButton = styled.button`
  height: 60px;
  width: 100%;
  border-radius: 16px;
  font-size: 18px;
`;

NoteForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  formUpdate: PropTypes.func.isRequired,
  updatingNote: PropTypes.object
}

NoteForm.defaultProps = {
  updatingNote: null
}

export default NoteForm;