import './App.css';
import { Container } from '@mui/material';
import LoanForm from './components/LoanForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <LoanForm />
      </Container>
    </>
  );
}

export default App;
