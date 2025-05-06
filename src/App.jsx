// App.js
import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanForm from './components/LoanForm';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ThemeProvider from './context/ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
          <Routes>
            <Route path="/" element={<LoanForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
