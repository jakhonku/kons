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
import Talabalar from './pages/Talabalar';
import Xalqaro from './pages/Xalqaro';
import HamkorTashkilotlar from './pages/HamkorTashkilotlar';
import XorijiyDasturlar from './pages/XorijiyDasturlar';
import XalqaroMemorandumlar from './pages/XalqaroMemorandumlar';
import Erasmus from './pages/Erasmus';
import XalqaroStipendiyalar from './pages/XalqaroStipendiyalar';
import QoshmaKonsertlar from './pages/QoshmaKonsertlar';
import Fotogalereya from './pages/Fotogalereya';
import Videogalereya from './pages/Videogalereya';
import YashilUniversitet from './pages/YashilUniversitet';
import DarsJadvali from './pages/DarsJadvali';
import OquvRejalar from './pages/OquvRejalar';
import Sillabuslar from './pages/Sillabuslar';
import HemisTalaba from './pages/HemisTalaba';
import Grantlar from './pages/Grantlar';
import KelajakkaQadam from './pages/KelajakkaQadam';
import Kutubxona from './pages/Kutubxona';
import Registrator from './pages/Registrator';
import Togaraklar from './pages/Togaraklar';
import Yotoqxona from './pages/Yotoqxona';
import TadbirBatafsil from './pages/TadbirBatafsil';
import Sayohat360 from './pages/Sayohat360';
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
          <Route path="taqvim/:id" element={<TadbirBatafsil />} />
          <Route path="kontaktlar" element={<Kontaktlar />} />
          <Route path="abituriyentlar" element={<Abituriyentlar />} />
          <Route path="talabalar" element={<Talabalar />} />
          <Route path="xalqaro" element={<Xalqaro />} />
          <Route path="hamkor-tashkilotlar" element={<HamkorTashkilotlar />} />
          <Route path="xorijiy-dasturlar" element={<XorijiyDasturlar />} />
          <Route path="xalqaro-memorandumlar" element={<XalqaroMemorandumlar />} />
          <Route path="erasmus" element={<Erasmus />} />
          <Route path="xalqaro-stipendiyalar" element={<XalqaroStipendiyalar />} />
          <Route path="qoshma-konsertlar" element={<QoshmaKonsertlar />} />
          <Route path="fotogalereya" element={<Fotogalereya />} />
          <Route path="videogalereya" element={<Videogalereya />} />
          <Route path="yashil-universitet" element={<YashilUniversitet />} />
          <Route path="dars-jadvali" element={<DarsJadvali />} />
          <Route path="oquv-rejalar" element={<OquvRejalar />} />
          <Route path="sillabuslar" element={<Sillabuslar />} />
          <Route path="hemis-talaba" element={<HemisTalaba />} />
          <Route path="grantlar" element={<Grantlar />} />
          <Route path="kelajakka-qadam" element={<KelajakkaQadam />} />
          <Route path="kutubxona" element={<Kutubxona />} />
          <Route path="registrator" element={<Registrator />} />
          <Route path="togaraklar" element={<Togaraklar />} />
          <Route path="yotoqxona" element={<Yotoqxona />} />
          <Route path="sayohat-360" element={<Sayohat360 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
