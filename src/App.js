// import './App.css';
import { useState } from "react"
import {Header, NotesContainer} from "./components"
import styled from "styled-components"
import headerImg from './assets/images/maxwell-the-cat-maxwell.gif';

function App() {
  const [showForm, toggleForm] = useState(true);

  function toggleNoteForm() {
    toggleForm(oldValue => !oldValue)
  }

  return (
    <AppContainer>
      <Header 
        titleText="Your Personal Notepad"
        link={{ url: "https://www.github.com/hv-dev", text: "Other Projects" }}
        imgSrc={headerImg}
        formToggle={toggleNoteForm}
        showForm={showForm}
      />
      <NotesContainer
        showForm={showForm}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`