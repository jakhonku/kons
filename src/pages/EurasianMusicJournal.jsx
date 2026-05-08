import InfoPage from '../components/InfoPage';

const BREADCRUMBS = [
  { label: 'Bosh sahifa', to: '/' },
  { label: 'Ilm-fan' },
  { label: 'Eurasian Music Journal' },
];

export default function EurasianMusicJournal() {
  return (
    <InfoPage
      tag="International Journal"
      title="Eurasian"
      emphasis="Music Journal"
      breadcrumbs={BREADCRUMBS}
      lead="Eurasian Music Journal (EMJ) — Markaziy Osiyo va Yevroosiyo musiqa madaniyati, tarixi, nazariyasi va ijro san'atiga bagʻishlangan ingliz tilidagi xalqaro ilmiy jurnal. 2021-yildan beri konservatoriya tomonidan nashr qilinadi."
      stats={[
        { value: '4', label: 'Issues per year' },
        { value: '24', label: 'Articles (2025)' },
        { value: '18', label: 'Countries' },
      ]}
      sections={[
        {
          heading: "Editorial Board / Tahririyat kengashi",
          cards: [
            { tag: 'Editor-in-Chief', title: 'Prof. Behruz Toshmatov', desc: "Doctor of Arts. Vice-Rector for Research, Uzbek State Conservatory." },
            { tag: 'Co-Editor', title: 'Dr. Kim Min-Joon', desc: "Hanyang University, South Korea. Specialist in East-West musical dialog." },
            { tag: 'Co-Editor', title: 'Prof. Maria Krieger', desc: "Berlin University of the Arts, Germany. Ethnomusicology." },
            { tag: 'Editorial Member', title: 'Prof. Shirin Akbarova', desc: "Moscow State Tchaikovsky Conservatory, Russia." },
            { tag: 'Editorial Member', title: 'Dr. Aisha Rahmanova', desc: "Kazakh National Conservatory, Kazakhstan." },
            { tag: 'Editorial Member', title: 'Prof. Marco Riva', desc: "Conservatorio di Milano, Italy." },
          ],
        },
        {
          heading: "Scope and Topics",
          items: [
            "Maqom traditions across Central Asia",
            "Silk Road musical heritage",
            "Eurasian composition schools (20th–21st century)",
            "Ethnomusicology and folk music studies",
            "Historical performance practices",
            "Music pedagogy in the Eurasian context",
            "Digital humanities in music research",
            "Cross-cultural music collaborations",
          ],
        },
        {
          heading: "Submission Guidelines",
          table: {
            head: ['Parameter', 'Requirement'],
            rows: [
              ['Language', 'English (with Russian/Uzbek abstract)'],
              ['Article length', '6000–10000 words'],
              ['Format', 'Word .docx, Times New Roman 12, double-spaced'],
              ['Citation style', 'Chicago Manual of Style (Notes-Bibliography)'],
              ['Abstract', '250 words + 5–8 keywords'],
              ['Peer review', 'Double-blind, 30–45 days'],
              ['Open access', 'Yes (CC BY-NC 4.0 license)'],
              ['Submission email', 'emj@konservatoriya.uz'],
            ],
          },
        },
        {
          heading: "Recent Issues",
          cards: [
            { tag: 'Vol. 5, Issue 4', title: 'Music & Identity in Post-Soviet Central Asia', desc: '8 articles · December 2025', meta: 'ISSN: 2181-4567' },
            { tag: 'Vol. 5, Issue 3', title: "Maqom: Tradition Meets Modernity", desc: '7 articles · September 2025', meta: 'Special issue' },
            { tag: 'Vol. 5, Issue 2', title: 'Music Education Reforms in Eurasia', desc: '6 articles · June 2025' },
          ],
        },
      ]}
      contact={{
        title: "Editorial Office",
        responsible: "Dr. Sevara Yusupova (Managing Editor)",
        phone: '+998 71 234-56-94',
        email: 'emj@konservatoriya.uz',
        address: "Building 1, Room 316",
      }}
    />
  );
}
