import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topnav from './components/layout/Navbar';
import Home from './pages/Home';
import Crew from './pages/Crew';

function App() {

  return (
  <>
    <BrowserRouter>
      <Topnav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
