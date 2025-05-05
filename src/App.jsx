import './App.css';
import { Container } from '@mui/material';
import LoanForm from './components/LoanForm';
import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <LoanForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
