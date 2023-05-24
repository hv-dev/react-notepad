// import './App.css';
import { useState } from "react"
import {Header, NotesContainer} from "./components"
import headerImg from './assets/images/logo.svg';

function App() {
  const [showForm, toggleForm] = useState(true);

  function toggleNoteForm() {
    toggleForm(oldValue => !oldValue)
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
