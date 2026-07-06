import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import Layout from './components/layout/Layout';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Preloader from './components/layout/Preloader';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminNews from './pages/admin/AdminNews';
import AdminPosters from './pages/admin/AdminPosters';
import AdminTicker from './pages/admin/AdminTicker';
import AdminTelegram from './pages/admin/AdminTelegram';
import AdminMessages from './pages/admin/AdminMessages';
import AdminOnlineImtihonlar from './pages/admin/AdminOnlineImtihonlar';
import AdminGallery from './pages/admin/AdminGallery';
import AdminVideos from './pages/admin/AdminVideos';

// Pages
import Home from './pages/Home';

import Rahbariyat from './pages/Rahbariyat';
import Hujjatlar from './pages/Hujjatlar';
import Yangiliklar from './pages/Yangiliklar';
import YangilikBatafsil from './pages/YangilikBatafsil';
import Taqvim from './pages/Taqvim';
import Kontaktlar from './pages/Kontaktlar';
import Talabalar from './pages/Talabalar';
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
import RegistratorMurojaat from './pages/RegistratorMurojaat';
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
import MusiqaSanati from './pages/MusiqaSanati';
import CholuIjrochiligi from './pages/CholuIjrochiligi';
import Kafedralar from './pages/Kafedralar';
import Bolimlar from './pages/Bolimlar';
import DevonxonaBolim from './pages/DevonxonaBolim';
import AxborotResursMarkazi from './pages/AxborotResursMarkazi';
import YoshlarManaviyat from './pages/YoshlarManaviyat';
import Fonoteka from './pages/Fonoteka';
import IqtidorliTalabalarSektori from './pages/IqtidorliTalabalarSektori';
import MurojaatlarNazorat from './pages/MurojaatlarNazorat';
import TalimSifati from './pages/TalimSifati';
import XalqaroAloqalarBolim from './pages/XalqaroAloqalarBolim';
import NukusFiliali from './pages/NukusFiliali';
import JamoatTashkilotlari from './pages/JamoatTashkilotlari';
import KasabaUyushmasi from './pages/KasabaUyushmasi';
import YoshlarIttifoqi from './pages/YoshlarIttifoqi';
import XotinQizlarQomitasi from './pages/XotinQizlarQomitasi';
import Vakansiyalar from './pages/Vakansiyalar';
import BitiruvchilarBandligi from './pages/BitiruvchilarBandligi';
import IlmiyKengash from './pages/IlmiyKengash';
import IlmiyLoyihalar from './pages/IlmiyLoyihalar';
import Doktorantura from './pages/Doktorantura';
import IlmiyKonferensiyalar from './pages/IlmiyKonferensiyalar';
import Nashriyot from './pages/Nashriyot';
import MusiqaJurnaliTahririyati from './pages/MusiqaJurnaliTahririyati';
import MusiqaCholgulariLaboratoriyasi from './pages/MusiqaCholgulariLaboratoriyasi';
import EurasianMusicJournal from './pages/EurasianMusicJournal';
import OnlineMurojaat from './pages/OnlineMurojaat';
import MusiqaliTeatrStudiyasi from './pages/MusiqaliTeatrStudiyasi';
import RektorBio from './pages/RektorBio';

import JonliEfir from './pages/JonliEfir';
import QabulTalablari from './pages/QabulTalablari';
import CallCenter from './pages/CallCenter';
import QabulKvotasi from './pages/QabulKvotasi';
import ImtihonJadvali from './pages/ImtihonJadvali';
import ImtihonNatijalari from './pages/ImtihonNatijalari';
import OnlineImtihonlar from './pages/OnlineImtihonlar';
import XorijiyTalabalar from './pages/XorijiyTalabalar';
import StudyInUzbekistan from './pages/StudyInUzbekistan';
import RektorTabrigi from './pages/RektorTabrigi';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
      <AdminAuthProvider>
      <Preloader />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
        {/* Admin (yashirin) — havolasi navigatsiyada koʻrinmaydi */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="posters" element={<AdminPosters />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="videos" element={<AdminVideos />} />
          <Route path="ticker" element={<AdminTicker />} />
          <Route path="telegram" element={<AdminTelegram />} />
          <Route path="online-imtihonlar" element={<AdminOnlineImtihonlar />} />
          <Route path="messages" element={<AdminMessages />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Tuzilma */}
          <Route path="rahbariyat" element={<Rahbariyat />} />
          <Route path="rahbariyat/rektor" element={<RektorBio />} />
          <Route path="vasiylik-kengashi" element={<VasiylikKengashi />} />
          <Route path="oquv-uslubiy-kengash" element={<OquvUslubiyKengash />} />
          <Route path="fakultetlar" element={<Fakultetlar />} />
          <Route path="fakultetlar/musiqa-sanati" element={<MusiqaSanati />} />
          <Route path="fakultetlar/cholgu-ijrochiligi" element={<CholuIjrochiligi />} />
          <Route path="kafedralar" element={<Kafedralar />} />
          <Route path="bolimlar" element={<Bolimlar />} />
          <Route path="bolimlar/devonxona-arxiv" element={<DevonxonaBolim />} />
          <Route path="bolimlar/axborot-resurs-markazi" element={<AxborotResursMarkazi />} />
          <Route path="bolimlar/yoshlar-manaviyat-marifat" element={<YoshlarManaviyat />} />
          <Route path="bolimlar/fonoteka" element={<Fonoteka />} />
          <Route path="bolimlar/iqtidorli-talabalar-sektori" element={<IqtidorliTalabalarSektori />} />
          <Route path="bolimlar/murojaatlar-nazorat" element={<MurojaatlarNazorat />} />
          <Route path="bolimlar/talim-sifati" element={<TalimSifati />} />
          <Route path="bolimlar/xalqaro-aloqalar" element={<XalqaroAloqalarBolim />} />
          <Route path="nukus-filiali" element={<NukusFiliali />} />
          <Route path="jamoat-tashkilotlari" element={<JamoatTashkilotlari />} />
          <Route path="jamoat-tashkilotlari/kasaba-uyushmasi" element={<KasabaUyushmasi />} />
          <Route path="jamoat-tashkilotlari/yoshlar-ittifoqi" element={<YoshlarIttifoqi />} />
          <Route path="jamoat-tashkilotlari/xotin-qizlar-maslahat-kengashi" element={<XotinQizlarQomitasi />} />
          <Route path="vakansiyalar" element={<Vakansiyalar />} />
          <Route path="kontaktlar" element={<Kontaktlar />} />
          <Route path="hujjatlar" element={<Hujjatlar />} />

          {/* Taʼlim */}
          <Route path="dars-jadvali" element={<DarsJadvali />} />
          <Route path="oquv-rejalar" element={<OquvRejalar />} />
          <Route path="sillabuslar" element={<Sillabuslar />} />
          <Route path="kelajakka-qadam" element={<KelajakkaQadam />} />
          <Route path="togaraklar" element={<Togaraklar />} />
          <Route path="bitiruvchilar-bandligi" element={<BitiruvchilarBandligi />} />
          <Route path="talabalar" element={<Talabalar />} />

          {/* Ilm-fan */}
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
          <Route path="online-murojaat" element={<OnlineMurojaat />} />
          <Route path="kutubxona" element={<Kutubxona />} />
          <Route path="hemis-talaba" element={<HemisTalaba />} />
          <Route path="hemis-oquvchi" element={<HemisOquvchi />} />
          <Route path="registrator" element={<Registrator />} />
          <Route path="registrator-murojaat" element={<RegistratorMurojaat />} />
          <Route path="yotoqxona" element={<Yotoqxona />} />

          {/* Ijodiy */}

          <Route path="musiqali-teatr-studiyasi" element={<MusiqaliTeatrStudiyasi />} />
          <Route path="jonli-efir" element={<JonliEfir />} />
          <Route path="taqvim" element={<Taqvim />} />
          <Route path="taqvim/:id" element={<TadbirBatafsil />} />
          <Route path="fotogalereya" element={<Fotogalereya />} />
          <Route path="videogalereya" element={<Videogalereya />} />

          {/* Qabul */}
          <Route path="talim-dasturlari" element={<Navigate to="/sillabuslar" replace />} />
          <Route path="qabul-talablari" element={<QabulTalablari />} />
          <Route path="call-center" element={<CallCenter />} />
          <Route path="qabul-kvotasi" element={<QabulKvotasi />} />
          <Route path="kasbiy-imtihonlar" element={<Navigate to="/qabul-talablari" replace />} />
          <Route path="imtihon-jadvali" element={<ImtihonJadvali />} />
          <Route path="imtihon-natijalari" element={<ImtihonNatijalari />} />
          <Route path="online-imtihonlar" element={<OnlineImtihonlar />} />

          {/* Xalqaro */}
          <Route path="hamkor-tashkilotlar" element={<HamkorTashkilotlar />} />
          <Route path="xorijiy-talabalar" element={<XorijiyTalabalar />} />
          <Route path="xorijiy-dasturlar" element={<XorijiyDasturlar />} />
          <Route path="xalqaro-memorandumlar" element={<XalqaroMemorandumlar />} />
          <Route path="erasmus" element={<Erasmus />} />
          <Route path="xalqaro-stipendiyalar" element={<XalqaroStipendiyalar />} />
          <Route path="qoshma-konsertlar" element={<QoshmaKonsertlar />} />
          <Route path="study-in-uzbekistan" element={<StudyInUzbekistan />} />

          {/* Yangiliklar */}
          <Route path="yangiliklar" element={<Yangiliklar />} />
          <Route path="yangiliklar/:id" element={<YangilikBatafsil />} />
          <Route path="sayohat-360" element={<Sayohat360 />} />
          <Route path="rektor-tabrigi" element={<RektorTabrigi />} />
          <Route path="yashil-universitet" element={<YashilUniversitet />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </BrowserRouter>
      </AdminAuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
