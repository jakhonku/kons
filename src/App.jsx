import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Tarix from './pages/Tarix';
import Tuzilma from './pages/Tuzilma';
import Rahbariyat from './pages/Rahbariyat';
import Hujjatlar from './pages/Hujjatlar';
import Yangiliklar from './pages/Yangiliklar';
import Taqvim from './pages/Taqvim';
import Kontaktlar from './pages/Kontaktlar';
import Abituriyentlar from './pages/Abituriyentlar';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tarix" element={<Tarix />} />
          <Route path="tuzilma" element={<Tuzilma />} />
          <Route path="rahbariyat" element={<Rahbariyat />} />
          <Route path="hujjatlar" element={<Hujjatlar />} />
          <Route path="yangiliklar" element={<Yangiliklar />} />
          <Route path="taqvim" element={<Taqvim />} />
          <Route path="kontaktlar" element={<Kontaktlar />} />
          <Route path="abituriyentlar" element={<Abituriyentlar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
