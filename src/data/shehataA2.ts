export type ShehataExample = {
  label: string;
  german: string;
  english: string;
};

export type ShehataExercise = {
  prompt: string;
  answer: string;
  note?: string;
};

export type ShehataTopic = {
  id: string;
  title: string;
  source: string;
  pages: string;
  focus: string;
  explanations: string[];
  examples: ShehataExample[];
  exercises: ShehataExercise[];
};

export const shehataA2Topics: ShehataTopic[] = [
  {
    id: 'wechsel-kasus',
    title: 'Wechselpräpositionen, Genitiv & 4 Cases',
    source: 'Folge 1-4',
    pages: 'PDF pages 3-53',
    focus: 'The PDF starts by drilling location vs direction, then connects that to case endings and genitive possession.',
    explanations: [
      'Wechselpräpositionen use dative for location (wo?) and accusative for direction (wohin?).',
      'The same preposition can change case depending on the verb: stehen/liegen/hängen are location, while stellen/legen/hängen are direction.',
      'Genitive often means "of" or possession: das Auto des Mannes, die Tasche der Frau.',
      'The four cases answer different questions: nominative wer/was, accusative wen/was, dative wem, genitive wessen.',
    ],
    examples: [
      { label: 'Location', german: 'Das Bild hängt an der Wand.', english: 'The picture is hanging on the wall.' },
      { label: 'Direction', german: 'Ich hänge das Bild an die Wand.', english: 'I hang the picture onto the wall.' },
      { label: 'Genitive', german: 'Das ist das Handy meines Bruders.', english: 'That is my brother\'s phone.' },
    ],
    exercises: [
      { prompt: 'Er stellt die Tasche ___ Tisch. (auf + der Tisch)', answer: 'auf den Tisch', note: 'Direction wohin? -> accusative.' },
      { prompt: 'Die Tasche steht ___ Tisch. (auf + der Tisch)', answer: 'auf dem Tisch', note: 'Location wo? -> dative.' },
      { prompt: 'Die Farbe ___ Auto___ ist rot. (das Auto)', answer: 'des Autos', note: 'Genitive neuter/masculine: des + -s.' },
      { prompt: 'Question word: ___ hilfst du? -> Ich helfe meinem Freund.', answer: 'Wem', note: 'Dative asks wem?' },
    ],
  },
  {
    id: 'adjektive-komparation',
    title: 'Adjective Declension, Comparison & Describing People',
    source: 'Folge 5-12',
    pages: 'PDF pages 54-102',
    focus: 'This group covers adjective endings, comparative/superlative forms, character traits, appearance, and photo description language.',
    explanations: [
      'Adjective endings depend on article type, gender, case, and number.',
      'After definite articles, adjectives usually take -e or -en: der gute Mann, den guten Mann.',
      'After ein/kein/mein, the adjective carries missing gender signals: ein guter Mann, ein gutes Kind.',
      'Comparative uses -er + als; superlative uses am ... -sten or der/die/das ... -ste.',
      'For descriptions, the PDF repeatedly trains adjective vocabulary in sentence frames: Er ist..., Sie sieht... aus, Auf dem Foto sieht man...',
    ],
    examples: [
      { label: 'Definite article', german: 'Der nette Kollege hilft mir.', english: 'The nice colleague helps me.' },
      { label: 'Indefinite article', german: 'Ich habe einen interessanten Film gesehen.', english: 'I saw an interesting film.' },
      { label: 'Photo description', german: 'Auf dem Foto sieht man eine junge Frau.', english: 'In the photo you can see a young woman.' },
    ],
    exercises: [
      { prompt: 'Der freundlich___ Lehrer erklärt die Aufgabe.', answer: 'freundliche', note: 'Definite article, nominative masculine -> -e.' },
      { prompt: 'Ich sehe einen alt___ Freund.', answer: 'alten', note: 'Accusative masculine after einen -> -en.' },
      { prompt: 'Berlin ist groß, aber Kairo ist noch ___.', answer: 'größer', note: 'Comparative + optional umlaut.' },
      { prompt: 'Sie ist die ___ Schülerin in der Klasse. (gut)', answer: 'beste', note: 'gut -> besser -> beste.' },
    ],
  },
  {
    id: 'stadt-schule-beruf',
    title: 'City/Land, School, Jobs & Work',
    source: 'Folge 13-19',
    pages: 'PDF pages 103-149',
    focus: 'This section is theme-based: speaking about where you live, school subjects, education, jobs, job ads, and your own work.',
    explanations: [
      'For Stadt vs. Land, the PDF contrasts advantages and disadvantages: ruhig, laut, praktisch, teuer, langweilig.',
      'School topics use question-answer patterns: Welche Fächer magst du? Wie findest du Mathe?',
      'Job sections train Beruf vocabulary and sentence frames for duties: Ich arbeite als..., Ich bin verantwortlich für...',
      'Job ads often require recognizing requirements: Erfahrung, Ausbildung, Arbeitszeit, Bewerbung, Gehalt.',
    ],
    examples: [
      { label: 'City/Land opinion', german: 'Ich lebe gern in der Stadt, weil es dort viele Geschäfte gibt.', english: 'I like living in the city because there are many shops there.' },
      { label: 'School', german: 'Mein Lieblingsfach ist Deutsch, weil der Unterricht interessant ist.', english: 'My favorite subject is German because the lesson is interesting.' },
      { label: 'Work', german: 'Ich arbeite als Verkäufer und berate Kunden.', english: 'I work as a salesperson and advise customers.' },
    ],
    exercises: [
      { prompt: 'Complete: Ich wohne lieber auf dem Land, ___ es dort ruhig ist.', answer: 'weil', note: 'Reason clause with verb at the end.' },
      { prompt: 'Answer: Was ist dein Lieblingsfach?', answer: 'Mein Lieblingsfach ist ...', note: 'Use nominative after sein.' },
      { prompt: 'Complete: Ich arbeite ___ Kellner in einem Restaurant.', answer: 'als', note: 'arbeiten als + profession.' },
      { prompt: 'Job ad vocabulary: Bewerbung means ___.', answer: 'application', note: 'Often appears in Stellenangebote.' },
    ],
  },
  {
    id: 'praeteritum-konjunktiv',
    title: 'Präteritum, Modal Past & Konjunktiv II',
    source: 'Folge 20-25',
    pages: 'PDF pages 150-224',
    focus: 'The PDF drills written past forms, modal verbs in Präteritum, and polite/hypothetical Konjunktiv II.',
    explanations: [
      'Präteritum is common in written German and very common for sein, haben, and modal verbs.',
      'Modal verbs lose umlaut in Präteritum: können -> konnte, müssen -> musste, dürfen -> durfte.',
      'Konjunktiv II is used for polite requests, wishes, advice, and unreal conditions.',
      'würde + infinitive is the default spoken form, but hätte, wäre, könnte, müsste are very frequent and should be memorized.',
    ],
    examples: [
      { label: 'Past', german: 'Gestern war ich krank und hatte keine Zeit.', english: 'Yesterday I was sick and had no time.' },
      { label: 'Modal past', german: 'Wir mussten für den Test lernen.', english: 'We had to study for the test.' },
      { label: 'Polite request', german: 'Könnten Sie mir bitte helfen?', english: 'Could you please help me?' },
    ],
    exercises: [
      { prompt: 'Ich ___ gestern zu Hause. (sein, Präteritum)', answer: 'war', note: 'ich war.' },
      { prompt: 'Wir ___ lange warten. (müssen, Präteritum)', answer: 'mussten', note: 'wir mussten.' },
      { prompt: 'Polite: ___ du bitte das Fenster öffnen? (können)', answer: 'Könntest', note: 'Konjunktiv II for polite request.' },
      { prompt: 'Unreal condition: Wenn ich Zeit hätte, ___ ich kommen.', answer: 'würde', note: 'würde + infinitive.' },
    ],
  },
  {
    id: 'reflexiv-infinitiv-wenn-als',
    title: 'Reflexive Verbs, Infinitiv mit zu, wenn/als',
    source: 'Folge 26-30',
    pages: 'PDF pages 225-255',
    focus: 'This group trains reflexive pronouns, zu-infinitive structures, and temporal/conditional subordinate clauses.',
    explanations: [
      'Reflexive verbs use mich, dich, sich, uns, euch, sich; some body-part structures use dative reflexive: Ich wasche mir die Hände.',
      'Infinitiv mit zu appears after many verbs and adjectives: versuchen, vergessen, anfangen, Zeit haben, Lust haben.',
      'um ... zu expresses purpose when the subject is the same in both clauses.',
      'wenn is used for present/future/repeated conditions; als is used for one past time or period.',
    ],
    examples: [
      { label: 'Reflexive', german: 'Ich freue mich auf den Urlaub.', english: 'I am looking forward to the vacation.' },
      { label: 'Infinitive', german: 'Ich habe keine Lust, Hausaufgaben zu machen.', english: 'I do not feel like doing homework.' },
      { label: 'wenn/als', german: 'Als ich klein war, spielte ich oft Fußball.', english: 'When I was little, I often played football.' },
    ],
    exercises: [
      { prompt: 'Ich interessiere ___ für Musik.', answer: 'mich', note: 'sich interessieren für + accusative reflexive.' },
      { prompt: 'Er wäscht ___ die Hände.', answer: 'sich', note: 'Dative reflexive; sich is same form in 3rd person.' },
      { prompt: 'Ich lerne Deutsch, um in Deutschland ___ arbeiten.', answer: 'zu', note: 'um ... zu + infinitive.' },
      { prompt: '___ ich ein Kind war, wohnte ich in Alexandria.', answer: 'Als', note: 'One past period.' },
    ],
  },
  {
    id: 'werden-passiv-relativ-kasusverben',
    title: 'werden, Passive, Relative Clauses & Case Verbs',
    source: 'Folge 31-38',
    pages: 'PDF pages 256-300',
    focus: 'This is the most grammar-dense part: werden as a full verb, Vorgangspassiv, relative clauses, and verbs with accusative/dative objects.',
    explanations: [
      'werden can mean "to become" as a full verb: Ich werde Arzt.',
      'Passive uses werden + Partizip II: Der Brief wird geschrieben.',
      'Relative clauses describe a noun and send the verb to the end: Das ist der Mann, der hier wohnt.',
      'Some verbs always take dative: helfen, danken, antworten, gefallen, gehören, folgen, glauben, gratulieren.',
      'Many everyday verbs take accusative: sehen, kaufen, brauchen, besuchen, fragen, finden.',
    ],
    examples: [
      { label: 'werden', german: 'Sie wird Ärztin.', english: 'She is becoming a doctor.' },
      { label: 'Passive', german: 'Das Auto wird repariert.', english: 'The car is being repaired.' },
      { label: 'Relative clause', german: 'Das ist der Lehrer, dem ich danke.', english: 'That is the teacher whom I thank.' },
    ],
    exercises: [
      { prompt: 'Der Text ___ korrigiert. (Passiv Präsens)', answer: 'wird', note: 'werden + Partizip II.' },
      { prompt: 'Das ist die Frau, ___ ich gesehen habe.', answer: 'die', note: 'Feminine accusative relative pronoun.' },
      { prompt: 'Ich helfe ___ Mann. (der)', answer: 'dem', note: 'helfen takes dative.' },
      { prompt: 'Ich besuche ___ Freund. (mein)', answer: 'meinen', note: 'besuchen takes accusative masculine.' },
    ],
  },
  {
    id: 'alltag-familie-hobbys-einladung',
    title: 'Daily Life, Family, Hobbies & Invitations',
    source: 'Folge 39-45',
    pages: 'PDF pages 301-349',
    focus: 'These PDF sections are communication-heavy: speaking about happiness, weddings, family, hobbies, reasons with weil/denn/deshalb, and answering invitations.',
    explanations: [
      'Personal topics need opinion phrases: Ich finde..., Mir ist wichtig..., Ich bin glücklich, wenn...',
      'Kausalsätze can use weil, denn, or deshalb, but each has different word order.',
      'Invitations require a social formula: thank, accept/refuse, explain, and suggest another time if needed.',
      'Hobby sections recycle frequency adverbs: oft, manchmal, selten, jeden Tag, am Wochenende.',
    ],
    examples: [
      { label: 'Reason', german: 'Ich bin glücklich, weil ich meine Familie sehe.', english: 'I am happy because I see my family.' },
      { label: 'Therefore', german: 'Ich habe keine Zeit. Deshalb kann ich nicht kommen.', english: 'I have no time. Therefore I cannot come.' },
      { label: 'Invitation reply', german: 'Danke für die Einladung. Leider kann ich nicht kommen.', english: 'Thank you for the invitation. Unfortunately, I cannot come.' },
    ],
    exercises: [
      { prompt: 'Rewrite with weil: Ich bin müde. Ich gehe schlafen.', answer: 'Ich gehe schlafen, weil ich müde bin.', note: 'Verb at the end in weil-clause.' },
      { prompt: 'Rewrite with deshalb: Es regnet. Wir bleiben zu Hause.', answer: 'Es regnet. Deshalb bleiben wir zu Hause.', note: 'Connector in position 1, verb in position 2.' },
      { prompt: 'Invitation refusal starter: Danke für die Einladung. ___ kann ich nicht kommen.', answer: 'Leider', note: 'Leider = unfortunately.' },
      { prompt: 'Frequency sentence: am Wochenende / spiele / ich / Fußball', answer: 'Am Wochenende spiele ich Fußball.', note: 'Time phrase first -> verb second.' },
    ],
  },
  {
    id: 'beruf-computer-sport',
    title: 'Work Values, Office Tasks, Computer/Internet & Sport',
    source: 'Folge 46-50',
    pages: 'PDF pages 350-358',
    focus: 'This group expands workplace and interest vocabulary, including office activities, computer verbs, internet language, and sport interests.',
    explanations: [
      'Work-value phrases include: Mir ist wichtig..., Ich lege Wert auf..., Ich bin verantwortlich für...',
      'Office language often uses separable/inseparable verbs: ausdrucken, speichern, beantworten, bearbeiten.',
      'Computer vocabulary is practical A2 language: Datei, E-Mail, Drucker, Internet, herunterladen.',
      'Interest/sport topics use sich interessieren für and gern/lieber/am liebsten.',
    ],
    examples: [
      { label: 'Work value', german: 'Mir ist ein gutes Team wichtig.', english: 'A good team is important to me.' },
      { label: 'Office task', german: 'Ich beantworte E-Mails und speichere Dateien.', english: 'I answer emails and save files.' },
      { label: 'Sport interest', german: 'Ich interessiere mich für Fußball.', english: 'I am interested in football.' },
    ],
    exercises: [
      { prompt: 'Complete: Ich bin verantwortlich ___ die Kunden.', answer: 'für', note: 'verantwortlich für + accusative.' },
      { prompt: 'Computer verb: eine Datei auf dem Computer behalten = ___.', answer: 'speichern', note: 'to save.' },
      { prompt: 'Ich interessiere ___ für Tennis.', answer: 'mich', note: 'reflexive verb.' },
      { prompt: 'Comparative preference: Ich spiele gern Fußball, aber ich schwimme ___.', answer: 'lieber', note: 'gern -> lieber -> am liebsten.' },
    ],
  },
  {
    id: 'temporal-umzu-damit-bank',
    title: 'Temporal Prepositions, um...zu/damit, Money & Banks',
    source: 'Folge 51-55',
    pages: 'PDF pages 359-372',
    focus: 'This section combines time prepositions, purpose clauses, banking vocabulary, and account-opening dialogs.',
    explanations: [
      'Temporal prepositions answer when/how long: seit, vor, nach, während, bis, ab, um.',
      'um ... zu is used when the subject stays the same; damit is used especially when the subject changes.',
      'Banking dialogs require polite forms: Ich möchte ein Konto eröffnen, Könnten Sie mir helfen?',
      'Money vocabulary includes Konto, Bankkarte, Überweisung, Geldautomat, Gebühr, Zinsen.',
    ],
    examples: [
      { label: 'Temporal', german: 'Seit zwei Jahren lerne ich Deutsch.', english: 'I have been learning German for two years.' },
      { label: 'um...zu', german: 'Ich spare Geld, um ein Auto zu kaufen.', english: 'I save money in order to buy a car.' },
      { label: 'damit', german: 'Ich schalte den Fernseher aus, damit mein Sohn lernen kann.', english: 'I turn off the TV so that my son can study.' },
    ],
    exercises: [
      { prompt: 'Ich lerne Deutsch ___ zwei Jahren.', answer: 'seit', note: 'since/for with ongoing time.' },
      { prompt: 'Ich gehe zur Bank, um ein Konto ___ eröffnen.', answer: 'zu', note: 'um ... zu + infinitive.' },
      { prompt: 'Ich helfe dir, damit du schneller fertig ___.', answer: 'wirst', note: 'damit sends conjugated verb to the end.' },
      { prompt: 'Bank word: Geld aus dem Automaten holen = Geld ___.', answer: 'abheben', note: 'to withdraw money.' },
    ],
  },
  {
    id: 'kontakte-welche-wasfuer',
    title: 'Contact Ads, welche & was für ein',
    source: 'Folge 56-57',
    pages: 'PDF pages 373-381',
    focus: 'The final section practices describing people/relationships and choosing between welche and was für ein.',
    explanations: [
      'Kontaktanzeigen use compact personal descriptions: Alter, Beruf, Hobbys, sucht..., möchte...',
      'welche asks for a choice from known options: Welche Jacke nimmst du, die rote oder die blaue?',
      'was für ein asks for type/kind: Was für ein Mensch bist du?',
      'Both forms decline by case, gender, and number: welcher, welche, welches; was für einen, was für eine.',
    ],
    examples: [
      { label: 'welche', german: 'Welche Wohnung gefällt dir besser?', english: 'Which apartment do you like better?' },
      { label: 'was für ein', german: 'Was für einen Beruf hast du?', english: 'What kind of job do you have?' },
      { label: 'contact ad', german: 'Ich suche eine ehrliche Person mit Humor.', english: 'I am looking for an honest person with humor.' },
    ],
    exercises: [
      { prompt: '___ Tasche kaufst du, die schwarze oder die braune?', answer: 'Welche', note: 'Choice between known items.' },
      { prompt: '___ ein Auto möchtest du kaufen?', answer: 'Was für', note: 'Asking for type/kind.' },
      { prompt: 'Ich suche ___ netten Partner. (was für ein + Akk.)', answer: 'was für einen', note: 'Masculine accusative.' },
      { prompt: 'Plural: ___ Bücher liest du gern?', answer: 'Welche', note: 'welche for plural choice/category.' },
    ],
  },
];

export const shehataA2Stats = {
  pdfName: 'A2 PDF Shehata.pdf',
  pageCount: 381,
  sourceCount: 57,
};
