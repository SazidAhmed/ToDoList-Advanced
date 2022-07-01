
import { Container } from 'react-bootstrap';
import Topnav from './components/website/Navbar';
import Doc from './components/website/Doc';

function App() {
  return (
    <>
    <Topnav />
    <Container>
      <Doc />
    </Container>
    </>
  );
}

export default App;
