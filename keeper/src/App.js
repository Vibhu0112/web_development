import './App.css';
import Header from './Components/header';
import Note from "./Components/note"
import Footer from "./Components/footer"
import Card from "./props/propscard"

function App() {
  return (
    <div className="App">
      <Header /> 
      <Note />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
