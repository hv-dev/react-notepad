// import './App.css';
import {Header, NotesContainer} from "./components"
import headerImg from './assets/images/logo.svg';

function App() {
  return (
    <div>
      <Header 
        titleText="Your Personal Notepad"
        link={{ url: "https://www.github.com/hv-dev", text: "Other Projects" }}
        imgSrc={headerImg}
      />
      <NotesContainer />
    </div>
  );
}

export default App;
