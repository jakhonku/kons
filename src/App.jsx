import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
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
import MusiqaJurnali from './pages/MusiqaJurnali';
import HemisOquvchi from './pages/HemisOquvchi';
import NotFound from './pages/NotFound';

// New Pages
import VasiylikKengashi from './pages/VasiylikKengashi';
import OquvUslubiyKengash from './pages/OquvUslubiyKengash';
import Fakultetlar from './pages/Fakultetlar';
import Kafedralar from './pages/Kafedralar';
import Bolimlar from './pages/Bolimlar';
import NukusFiliali from './pages/NukusFiliali';
import JamoatTashkilotlari from './pages/JamoatTashkilotlari';
import Vakansiyalar from './pages/Vakansiyalar';
import Talim from './pages/Talim';
import BitiruvchilarBandligi from './pages/BitiruvchilarBandligi';
import IlmFan from './pages/IlmFan';
import IlmiyKengash from './pages/IlmiyKengash';
import IlmiyLoyihalar from './pages/IlmiyLoyihalar';
import Doktorantura from './pages/Doktorantura';
import IlmiyKonferensiyalar from './pages/IlmiyKonferensiyalar';
import Nashriyot from './pages/Nashriyot';
import MusiqaJurnaliTahririyati from './pages/MusiqaJurnaliTahririyati';
import MusiqaCholgulariLaboratoriyasi from './pages/MusiqaCholgulariLaboratoriyasi';
import EurasianMusicJournal from './pages/EurasianMusicJournal';
import InteraktivXizmatlar from './pages/InteraktivXizmatlar';
import OnlineMurojaat from './pages/OnlineMurojaat';
import IjodiyFaoliyat from './pages/IjodiyFaoliyat';
import RektorBio from './pages/RektorBio';

import JonliEfir from './pages/JonliEfir';
import TalimYonalishlari from './pages/TalimYonalishlari';
import TalimDasturlari from './pages/TalimDasturlari';
import QabulTalablari from './pages/QabulTalablari';
import QabulKvotasi from './pages/QabulKvotasi';
import KasbiyImtihonlar from './pages/KasbiyImtihonlar';
import ImtihonNatijalari from './pages/ImtihonNatijalari';
import XorijiyTalabalar from './pages/XorijiyTalabalar';
import StudyInUzbekistan from './pages/StudyInUzbekistan';
import RektorTabrigi from './pages/RektorTabrigi';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Tuzilma */}
          <Route path="tuzilma" element={<Tuzilma />} />
          <Route path="rahbariyat" element={<Rahbariyat />} />
          <Route path="rahbariyat/rektor" element={<RektorBio />} />
          <Route path="vasiylik-kengashi" element={<VasiylikKengashi />} />
          <Route path="oquv-uslubiy-kengash" element={<OquvUslubiyKengash />} />
          <Route path="fakultetlar" element={<Fakultetlar />} />
          <Route path="kafedralar" element={<Kafedralar />} />
          <Route path="bolimlar" element={<Bolimlar />} />
          <Route path="nukus-filiali" element={<NukusFiliali />} />
          <Route path="jamoat-tashkilotlari" element={<JamoatTashkilotlari />} />
          <Route path="vakansiyalar" element={<Vakansiyalar />} />
          <Route path="kontaktlar" element={<Kontaktlar />} />
          <Route path="hujjatlar" element={<Hujjatlar />} />

          {/* Ta'lim */}
          <Route path="talim" element={<Talim />} />
          <Route path="dars-jadvali" element={<DarsJadvali />} />
          <Route path="oquv-rejalar" element={<OquvRejalar />} />
          <Route path="sillabuslar" element={<Sillabuslar />} />
          <Route path="kelajakka-qadam" element={<KelajakkaQadam />} />
          <Route path="togaraklar" element={<Togaraklar />} />
          <Route path="bitiruvchilar-bandligi" element={<BitiruvchilarBandligi />} />
          <Route path="talabalar" element={<Talabalar />} />

          {/* Ilm-fan */}
          <Route path="ilm-fan" element={<IlmFan />} />
          <Route path="ilmiy-kengash" element={<IlmiyKengash />} />
          <Route path="ilmiy-loyihalar" element={<IlmiyLoyihalar />} />
          <Route path="doktorantura" element={<Doktorantura />} />
          <Route path="ilmiy-konferensiyalar" element={<IlmiyKonferensiyalar />} />
          <Route path="grantlar" element={<Grantlar />} />
          <Route path="nashriyot" element={<Nashriyot />} />
          <Route path="musiqa-jurnali-tahririyati" element={<MusiqaJurnaliTahririyati />} />
          <Route path="musiqa-jurnali" element={<MusiqaJurnali />} />
          <Route path="musiqa-cholgulari-laboratoriyasi" element={<MusiqaCholgulariLaboratoriyasi />} />
          <Route path="eurasian-music-journal" element={<EurasianMusicJournal />} />

          {/* Interaktiv */}
          <Route path="interaktiv-xizmatlar" element={<InteraktivXizmatlar />} />
          <Route path="online-murojaat" element={<OnlineMurojaat />} />
          <Route path="kutubxona" element={<Kutubxona />} />
          <Route path="hemis-talaba" element={<HemisTalaba />} />
          <Route path="hemis-oquvchi" element={<HemisOquvchi />} />
          <Route path="registrator" element={<Registrator />} />
          <Route path="yotoqxona" element={<Yotoqxona />} />

          {/* Ijodiy */}
          <Route path="ijodiy-faoliyat" element={<IjodiyFaoliyat />} />

          <Route path="jonli-efir" element={<JonliEfir />} />
          <Route path="taqvim" element={<Taqvim />} />
          <Route path="taqvim/:id" element={<TadbirBatafsil />} />
          <Route path="fotogalereya" element={<Fotogalereya />} />
          <Route path="videogalereya" element={<Videogalereya />} />

          {/* Qabul */}
          <Route path="abituriyentlar" element={<Abituriyentlar />} />
          <Route path="talim-yonalishlari" element={<TalimYonalishlari />} />
          <Route path="talim-dasturlari" element={<TalimDasturlari />} />
          <Route path="qabul-talablari" element={<QabulTalablari />} />
          <Route path="qabul-kvotasi" element={<QabulKvotasi />} />
          <Route path="kasbiy-imtihonlar" element={<KasbiyImtihonlar />} />
          <Route path="imtihon-natijalari" element={<ImtihonNatijalari />} />

          {/* Xalqaro */}
          <Route path="xalqaro" element={<Xalqaro />} />
          <Route path="hamkor-tashkilotlar" element={<HamkorTashkilotlar />} />
          <Route path="xorijiy-talabalar" element={<XorijiyTalabalar />} />
          <Route path="xorijiy-dasturlar" element={<XorijiyDasturlar />} />
          <Route path="xalqaro-memorandumlar" element={<XalqaroMemorandumlar />} />
          <Route path="erasmus" element={<Erasmus />} />
          <Route path="xalqaro-stipendiyalar" element={<XalqaroStipendiyalar />} />
          <Route path="qoshma-konsertlar" element={<QoshmaKonsertlar />} />
          <Route path="study-in-uzbekistan" element={<StudyInUzbekistan />} />

          {/* Axborot xizmati */}
          <Route path="yangiliklar" element={<Yangiliklar />} />
          <Route path="sayohat-360" element={<Sayohat360 />} />
          <Route path="rektor-tabrigi" element={<RektorTabrigi />} />
          <Route path="yashil-universitet" element={<YashilUniversitet />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
