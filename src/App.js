import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topnav from './components/layout/Navbar';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Auth from './pages/Auth';

function App() {

  return (
  <>
    <BrowserRouter>
      <Topnav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
