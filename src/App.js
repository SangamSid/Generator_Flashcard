
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Container from "./Component/Container"
import Navbar from "./Component/Navigations/Navbar"
import CreateFlashCard from "./Component/Pages/CreateFlashCard"
import MyFlashCard from "./Component/Pages/MyFlashCard"
import FlashCardDetails from './Component/FlashCardDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Container/>
      <Routes>
        <Route path="/" element={<CreateFlashCard/>}/>
        <Route path="/flashcard" element={<MyFlashCard/>}/>
        <Route path="/flashcard/:id" element={<FlashCardDetails/>}/>
      </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
