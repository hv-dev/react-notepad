import headerImg from './assets/images/header.png';
import './App.css';
import {Header} from "./components"

function App() {
  return (
    <div>
      <Header 
        leftText="Your Personal Notepad"
        rightText="Your Personal Notepad - built in React!"
        imgSrc={headerImg}
      />
    </div>
  );
}

export default App;
