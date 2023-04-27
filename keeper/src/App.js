import './App.css';
import Header from './Components/header';
import Note from "./Components/note"
import Footer from "./Components/footer"
import Notes from './Components/notes';
import "./style.css"


function App() {
  return (
    <div className="App">
      <Header /> 
      {Notes.map(noteItem => 
        <Note 
        key= {noteItem.key}
        title = {noteItem.title}
        content = {noteItem.content}
        />
      )}
      {/* <Card /> */}
      <Footer />
    </div>
  );
}

export default App;
