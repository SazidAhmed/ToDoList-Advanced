import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topnav from './components/layout/Navbar';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Auth from './pages/Auth';

//Contexts
import AuthContextProvider from './contexts/AuthContext';

function App() {

  return (
  <>
    <BrowserRouter>
      <AuthContextProvider>
        <Topnav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </>
  );
}

export default App;
