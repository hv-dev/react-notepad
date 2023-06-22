// import './App.css';
import { useState } from "react"
import {Header, NotesContainer} from "./components"
import styled from "styled-components"
import headerImg from './assets/images/maxwell-the-cat-maxwell.gif';

function App() {
  const [formVisible, toggleForm] = useState(true);

  function toggleNoteForm(newVal) {
    toggleForm(newVal);
  }

  return (
    <AppContainer>
      <Header 
        titleText="Your Personal Notepad"
        link={{ url: "https://www.github.com/hv-dev", text: "Other Projects" }}
        imgSrc={headerImg}
        formToggle={toggleNoteForm}
        formVisible={formVisible}
      />
      <NotesContainer
        formToggle={toggleNoteForm}
        formVisible={formVisible}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`