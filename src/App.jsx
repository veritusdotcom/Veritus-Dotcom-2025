import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contabilidade from './pages/solutions/Contabilidade';
import Advocacia from './pages/solutions/Advocacia';
import Clinicas from './pages/solutions/Clinicas';
import Imobiliarias from './pages/solutions/Imobiliarias';
import Planos from './pages/Planos';
import AssessoriaFinanceira from './pages/AssessoriaFinanceira';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucoes/contabilidade" element={<Contabilidade />} />
            <Route path="/solucoes/advocacia" element={<Advocacia />} />
            <Route path="/solucoes/clinicas" element={<Clinicas />} />
            <Route path="/solucoes/imobiliarias" element={<Imobiliarias />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/assessoria-financeira" element={<AssessoriaFinanceira />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
