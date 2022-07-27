import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topnav from './components/layout/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {

  return (
  <>
    <BrowserRouter>
      <Topnav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
