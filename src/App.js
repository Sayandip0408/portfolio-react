import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Styles/Home.css';
import './Styles/Contact.css';
import './Styles/About.css';
import './Styles/Project.css';
import NavBar from './Components/Navbar';
import { Contact } from './Pages/Contact';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Project from './Pages/Project';

function App() {
  return (
    <BrowserRouter>
      <main className='app'>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
