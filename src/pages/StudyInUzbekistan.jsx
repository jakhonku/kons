import InfoPage from '../components/InfoPage';

export default function StudyInUzbekistan() {
  return (
    <InfoPage
      tag="Xalqaro"
      title="Study in"
      emphasis="Uzbekistan"
      breadcrumbs={[
        { label: 'Bosh sahifa', to: '/' },
        { label: 'Xalqaro' },
        { label: 'Study in Uzbekistan' },
      ]}
      lead="Information for international students about academic opportunities and student life in Uzbekistan."
      sections={[
        {
          heading: "Why study at the State Conservatory?",
          items: [
            "Centuries-old musical traditions",
            "World-class teaching staff"
          ]
        }
      ]}
    />
  );
}
