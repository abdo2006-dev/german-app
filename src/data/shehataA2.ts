export type ShehataSourcePage = {
  page: number;
  text: string;
};

export type ShehataLesson = {
  folge: string;
  title: string;
  printedPageStart: number;
  printedPageEnd: number;
  sourcePages: ShehataSourcePage[];
  answerPages: ShehataSourcePage[];
};

export type ShehataInteractiveQuestion = {
  id: string;
  prompt: string;
  instruction: string;
  options: string[];
  answer: string;
};

export type ShehataTopic = {
  id: string;
  title: string;
  source: string;
  pages: string;
  summary: string;
  lessons: ShehataLesson[];
  interactiveQuestions: ShehataInteractiveQuestion[];
  sourcePageCount: number;
  answerPageCount: number;
};

export const shehataA2Stats = {
  "pdfName": "A2 PDF Shehata.pdf",
  "sourceCount": 57,
  "pageCount": 381,
  "groupCount": 10,
  "lessonCount": 57,
  "interactiveQuestionCount": 577
} as const;

export const shehataA2Topics: ShehataTopic[] = [
  {
    "id": "wechsel-kasus",
    "title": "Wechselpräpositionen, Genitiv & 4 Cases",
    "source": "Folge 1-4",
    "pages": "PDF pages 3-53",
    "summary": "Source workbook material from Folge 1-4: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 1",
        "title": "Wechselpräpositionen: an/auf and the wo?/wohin? idea",
        "printedPageStart": 3,
        "printedPageEnd": 16,
        "sourcePages": [
          {
            "page": 3,
            "text": "AUF \n\nIN \n\nAN \n\nÜBER \n\nUNTER \n\nHINTE\nR"
          },
          {
            "page": 4,
            "text": "Die die das der Nom. \nDie die das den Akk. \nden+n der dem dem Dat. \n\n*** eine ein ein Nom. \n*** eine ein einen Akk. \n***+n einer einem einem Dat. \n\nKeine keine kein kein Nom. \nKeine keine kein keinen Akk. \nkeinen+n keiner keinem keinem Dat. \nVOR \n\nZWISCHEN \n\nNEBEN"
          },
          {
            "page": 5,
            "text": "Nominativ Akkusativ Dativ \nich mich mir \ndu dich dir \ner ihn ihm \nes es ihm \nsie sie ihr \nwir uns uns \nihr euch euch \nsie sie ihnen \nSie Sie Ihnen \n\n\nDie Possessivartikel im Nominativ \nPronomen der Das die.sing. die.pl. \nich \ndu \ner / es \nsie \nwir \nihr \nsie \nSie \nmein \ndein \nsein \nihr \nunser \neuer \nihr \nIhr \nmein \ndein \nsein \nihr \nunser \neuer \nihr \nIhr \nmeine \ndeine \nseine \nihre \nunsere \neure \nihre \nIhre \nmeine \ndeine \nseine \nihre \nunsere \neure \nihre \nIhre"
          },
          {
            "page": 6,
            "text": "Die Possessivartikel im Akkustiv \n\nPronomen der das die.sing. die.pl. \nich \ndu \ner / es \nsie \nwir \nihr \nsie \nSie \nmeinen \ndeinen \nseinen \nihren \nunseren \neuren \nihren \nIhren \nmein \ndein \nsein \nihr \nunser \neuer \nihr \nIhr \nmeine \ndeine \nseine \nihre \nunsere \neure \nihre \nIhre \nmeine \ndeine \nseine \nihre \nunsere \neure \nihre \nIhre \n\nDie Possessivartikel im Dativ \n\nDie.Plu. Die.Sing. Das Der Pronomen \nmeinen \ndeinen \nseinen \nihren \nunseren \neuren \nihren \nIhren \nmeiner \ndeiner \nseiner \nihrer \nunserer \neurer \nihrer \nIhrer \nmeinem \ndeinem \nseinem \nihrem \nunserem \neurem \nihrem \nIhrem \nmeinem \ndeinem \nseinem \nihrem \nunserem \neurem \nihrem \nIhrem \nIch \ndu \ner / es \nsie \nwir \nihr \nsie \nSie"
          },
          {
            "page": 7,
            "text": "موضوع افق ي يضع شىء افق ي \n\n\nيكون يذهب \n\n\nWohin legst du das Buch? \nIch lege das Buch auf den \nTisch. \nWo liegt das Buch? \nDas Buch liegt auf dem Tisch. \nWohin legst du die Zeitung? \nIch lege die Zeitung vor die \nTür. \nWo liegt die Zeitung? \nDie Zeitung liegt vor der Tür. \nWohin legst du den Brief? \nIch lege den Brief zwischen \ndas Buch und die Zeitung. \nWo liegt der Brief? \nDer Brief liegt zwischen dem \nBuch und der Zeitung. \n\n\nWohin gehst du heute? \nIch gehe heute in die \nSchule. \nWo bist du? \nIch bin in der Schule."
          },
          {
            "page": 8,
            "text": "معلق يعلق \n\n\nWohin hängst du das Bild? \nIch hänge das Bild an die \nWand. \nWo hängt das Bild? \nDas Bild hängt an der Wand. \nWohin hängst du die Lampe? \nIch hänge die Lampe über \nden Tisch. \nWo hängt die Lampe? \nDie Lampe hängt über dem \nTisch. \n\n\nموضوع رأشي يضع شىيء رأشي \n\n\nWohin stellst du die \nSchuhe? \nIch stelle die Schuhe hinter \nden Tisch. \nWo stehen die Schuhe? \nDie Schuhe stehen hinter dem \nTisch. \nWohin stellst du den Stuhl? \nIch stelle den Stuhl neben \nden Tisch. \nWo steht der Stuhl? \nDer Stuhl steht neben dem \nTisch."
          },
          {
            "page": 9,
            "text": "يكون يدور \n\n\nWohin rollt der Ball? \nDer Ball rollt unter den Stuhl. \nWo ist der Ball? \nDer Ball ist unter dem Stuhl. \n\n\nan \n\n-Frankfurt liegt an dem / am Main. \n-Die Sonne steht hoch am Himmel. \n-Er arbeitet an der Universität Aleppo \n\n-Am Morgen, Am Abend, Am Mittag, \nAm Sonntag, Am Wochenende, Am \nAnfang, Am Ende. \n-Ich bin am 4. 10. 1980 geboren. \n-Er stellt den Stuhl an die Wand. \n-Herr Shehata schreibt die Wörter an \ndie Tafel. \nWir fahren an die Nordsee. \nIch schreibe einen Brief an die Eltern. \n\n-Die Uhr handelt an der 100 €. \n-Es waren an die 300 Menschen da."
          },
          {
            "page": 10,
            "text": "auf \n\n-Auf der Erde leben 7 Milliarde \nMenschen. \n-Auf der Autobahn darf man \nkein Rad fahren. \n-Wir leben auf dem Land. \n-Es gibt Eis auf dem Berg. \n-auf der Straße, auf der Bank, \nauf der Post, auf dem Bahnhof. \n\n-auf der Reise, auf dem Weg, \nauf der Fahrt في الرحلة \n-auf wiedersehen, auf \nwiederhören \n-Wie sagt man das auf Deutsch! \nكيف نقول هذا باللغة الالمانية \n\n-Er stellt den Koffer auf den \nWagen. \n-Von Freitag auf Samstag. \n-Weihnachten fällt auf einen \nMontag \nعيد الميلاد سيصادف - سيأتي يوم اتنين \n-Das Kind läuft auf seine Mutter \nzu. \nالطفل يجري في اتجاة والدته \n-Das Schiff nimmt kurs auf \nAmerika. \nالسفينة تأخذ اتجاه اميريكا \n-Auf die Dauer kann das nicht \ngehen. \nعلي المدي البعيد لم يمشي حال هذا \nالموضوع \n-Wir müssen uns auf den Weg \nmachen. \nلابد ان نتحرك – نأخذ طريقنا ونذهب \n-Wir fahren für zwei Wochen auf \nUrlaub \nسنسافر لمدة اسبوعين في اجازة \n-Auf jeden Fall في كل الاحوال \n-Auf keinen Fall ابدا"
          },
          {
            "page": 11,
            "text": "1)Ergänzen Sie bitte: An oder auf: \n1. Der Mann hängt die Uhr __________________ die Wand. \n2. Die Mutter legt die Bücher __________________ den Tisch. \n3. Wohin legt Tina ihre Puppe? _______ Sofa \n4. Die Schüler sitzen ________________ Schreibtisch. \n5. Die Frau setzt ihr Kind __________________ den Stuhl. \n6. Die Lehrerin schreibt die Wörter ___________________ die Tafel. \n7. Die Katze geht __________________ das Fenster. \n8. Die Bücher liegen __________________ dem Tisch. \n9. Der Vater stellt die Vase __________________ den Tisch. \n10. Wohin hängst du das Bild? ___________________ die Wand. \n11. Das Heft liegt ______________________ dem Tisch. \n12. Der Lehrer setzt __________________ dem Pult. \n13. Die Vase steht ___________________ dem Tisch. \n14. Die Frau hängt die Uhr ___________________die Wand. \n15. Das Bild hängt _________________ der Wand. \n16. Die Familie sitzt ____________________ dem Tisch. \n17. Das Kind liegt ____________________ dem Stuhl. \n18. Petra steht _________________ Bahnhof \n19. Der Mann steht ___________________ Fenster. \n20. Der Schüler setzt ______________dem Stuhl. \n21. Der Junge schreibt einen Brief ___________ seinen Eltern. \n2)Ergänzen Sie bitte: \n1. Das Kind geht unter __________ Tisch (m.). \n2. Das Kind ist unter __________ Tisch (m.). \n3. Martin geht an __________ Fenster (n.). \n4. Martin steht an __________ Fenster (n.). \n5. Der Stuhl ist hinter __________ Schreibtisch (m.). \n6. Das Auto fährt hinter __________ Haus (n.). \n7. Das Auto steht vor __________ Haus (n.). \n8. Dein Buch liegt neben __________ Zeitung (f.). \n9. Er läuft zwischen __________ Stühle (pl.). \n10. Er steht zwischen __________ Stühlen (pl.). \n\n3)Beantworten Sie bitte auf die folgenden Fragen mit den Wörter rechts: \n1. Wo sitzt Großmutter? ____________________(at the table) \n2. Wohin geht die Dame? _____________________(up to the window) \n3. Wo ist mein Mantel? _________________________ (on top of the bed) \n4. Wohin laufen die Kinder? _____________________(onto the football field) \n5. Wo ist der Regenschirm? __________________________(behind the door) \n6. Wohin läuft der Hund? __________________________(behind the sofa)"
          },
          {
            "page": 12,
            "text": "7. Wo wohnt deine Mutter? _______________________________(in this city) \n8. Wohin fährt Onkel Thomas? _____________________________ (into the city) \n9. Wo findet man die Bäckerei? ____________________(next to the supermarket) \n10. Wohin wirfst du die Zeitung? _________________________ (next to the chair) \n11. Wo hängt die Lampe? _______________________ (above the dresser) \n12. Wohin willst du gehen? __________________________ (across the street) \n13. Wo schläft die Katze?_________________________ (under the window) \n14. Wohin soll ich meine Schuhe setzen? ___________________________ (under the bed) \n15. Wo steht die Lehrerin? _______________________ (in front of the table) \n16. Wohin geht der Student? _____________________(to the front of the class) \n17. Wo sitzt meine Tante? ______________________(between my brothers) \n18. Wohin bringe ich das Sofa? _______________(between the chairs) \n\n4)Beschreiben Sie bitte diese Bild \n\n\n1. Eine Frau läuft __________________ __________ Haus. \n2. Ein Hund liegt __________________ __________ Auto. \n3. Ein anderer Hund steht __________________ __________ Dach. \n4. Die Kellnerin setzt das Essen __________________ ______Tisch. \n5. Eine Uhr hängt __________________ __________ Tür. \n6. Ein Mann steht __________________ __________ Fenster. \n\n\n5)Füllen Sie die Lücken mit den richtigen Artikeln oder Pronomen ein. Achten Sie auf den Kasus! \nAnna geht in __________ (1) (the) Theater und setzt sich hinter __________(2) (a) großen Mann hin. \nIn __________ (3) (the) Theater ist es ganz dunkel. Jetzt sitzt sie hinter __________(4) (the) Mann \nund kann nichts sehen. Die Schauspieler springen auf __________ (5) (the) Bühne (=stage, f.) und das \nStück fängt an. Über __________(6) (the) Bühne hängen schöne Lampen: rote, grüne, und blaue. \nAnna sieht die Lampen über __________(7) (the) Schauspieler_____ (8) (=actors, pl.), aber sie sieht \ndie Schauspieler nicht! Der Mann vor __________ (9) (her) ist sehr groß. Neben __________ (10) (her)"
          },
          {
            "page": 13,
            "text": "setzen sich zwei Frauen hin. Jetzt sitzt Anna zwischen __________ (11) (the) Frauen und hinter \n__________ (12) (the) großen Mann. Sie kann nicht weggehen und sie kann nichts sehen. Unter \n__________ (13) (her) Sitzplatz (=seat, m.) findet sie alten Kaugummi (=chewing gum). Bäh!!! Plötzlich \nspringt Anna über __________ (14) (the) Frau neben ihr und fällt auf __________(15) (the) Boden \n(=ground, m.). Sie sitzt auf __________(16) (the) Boden und schreit: \"Ich kann Sie da auf \n__________(17) (the) Bühne nicht sehen!\" Das darf man in __________ (18) (a) Theater natürlich \nnicht machen. Die Polizei kommt, und sie muss in __________(19) (the) Gefängnis (=prison, n.) \ngehen. Moral: Du sollst nicht hinter __________ (20) (a) großen Mann in Theater sitzen. \n6)Was ist richtig? \n1. Der Fernseher steht _____ _____ Tisch. \na) an dem b) auf dem c) auf den d) in dem \n2. Die Mutter stellt die Vase _____ _____ Tisch. \na) auf dem b) auf den c) an dem d) an den \n3. Das Gemälde hängt _____ _____ Wand. \na) an der b) an die c) auf die d) auf der \n4. Petra bleibt immer lange _____ _____ Badezimmer. \na) in das b) in dem c) in den d) in die \n5. Meine Kleider liegen _____ _____ Bett. \na) über meinem b) über mein c) auf meinem d) auf mein \n6. Ein Vogel sitzt _____ _____ Dach. \na) auf das b) an das c) in dem d) auf dem \n7. Wir fliegen nächste Woche _____ _____ Türkei. \na) in der b) nach der c) zu die d) in die \n8. Peter liegt _____ sein _____ Bett und liest. \na) an … es b) in … es c) auf … es d) in … em \n9. Der Vater schreibt _____ _____ Schreibtisch. \na) in sein b) an sein c) an seinem d) in seinem \n10. Ich warte _____ _____ Post auf dich. \na) auf die b) auf der c) vor die d) vor der \n7)Wählen Sie das richtige Wort in Klammern. \n1. Frau Zeller: So, Kinder, jetzt räumen wir auf. Bitte [ stellt / steht / setzt ] alle Bücher ins \nBücherregal! \n2. Gabi: Frau Zeller, soll ich die Stifte (=pens) auch ins Regal [stellen / legen / liegen]? \n3. Frau Zeller: Nein, hier ... so. Jetzt ist es besser: alle Stifte [ legen / liegen] zusammen hier im \nSchubladen (=drawer). \n4. Jürgen: Steffi, wo sind die Bilder, die ihr gemalt habt? Wir wollten sie doch ans Fenster [ hängen / \nsetzen] . \n5. Frau Zeller: Jürgen, hilf mir bitte. Wir müssen die Stühle auf die Tische [ stellen / sitzen / liegen], \ndenn ich möchte schnell staubsaugen (=vacuum)."
          },
          {
            "page": 14,
            "text": "6. Tobias: Ach nein! Der ganze Sand aus dem Sandkasten (=sandbox) [ liegt / sitzt / steht] hier auf \ndem Boden. Den müssen wir wegkehren (=sweep up). \n7. Jürgen: Ich helfe dir. Wo [ steht / stellt / sitzt] der Besen (=broom)? \n8. Tobias: Ich habe den Besen gestern in den Schrank [ gesetzt / gestellt / gelegt], er muss noch da \nsein. \n8)Wo / Wohin? Wählen Sie das richtige Wort in Klammern. \n1. [ Wo / Wohin] gehst du heute Abend? -- Ich gehe [ ins / im] Theater. \n2. [ Wo / Wohin] ist dein Mantel? -- Er hängt [ an / auf] der Wand dort. \n3. [ Wo / Wohin] fährt deine Mutter? -- Sie muss [ an / auf] die Post gehen. \n4. [ Wo / Wohin] soll ich den Brief schicken? -- An [ dieser / diese] Adresse in Berlin. \n5. [ Wo / Wohin] liegt Ulm? -- Ulm liegt [ an / auf / in] der Donau (=Danube). \n6. [ Wo / Wohin] ist der Brief von meiner Freundin? -- Er [ legt / liegt] auf dem Tisch. \n7. [ Wo / Wohin] hast du mein Fahrrad gestellt? -- Es [ steht / stellt] hinter der Garage. \n8. [ Wo / Wohin] ist die Bäckerei? -- Die Bäckerei [ liegt / sitzt] neben der Metzgerei. \n9. [ Wo / Wohin] wohnst du jetzt? -- Ich wohne [ an / auf / in] der Schillerstraße. \n9)Unten sehen Sie ein Bild. Schreiben Sie 5 Sätze, um das Bild zu beschreiben. Benutzen Sie \nmindestens 3 der folgenden Verben und 3 der folgenden Präpositionen. \n\nVerben \nliegen \nlegen \nstehen \nstellen \nsitzen \nsetzen \nhängen \nPräpositionen \nan \nauf \nhinter \nin \nneben \nüber \nunter \nvor \nzwischen \n1. ______________________________________________________ \n2. _______________________________________________________ \n3. ________________________________________________________ \n4. ______________________________________________________"
          },
          {
            "page": 15,
            "text": "5. _______________________________________________________"
          }
        ],
        "answerPages": [
          {
            "page": 15,
            "text": "Die Lösungen \nÜbung 1 \n1) an 2) auf 3) auf 4) auf 5) auf 6) an 7) an 8) auf 9) auf 10) an 11) auf 12) auf 13) auf 14) an 15) an 16) \nan 17) auf 18) an 19) an 20) auf 21) an \n\nÜbung 2 \n1) den 2) dem 3) das 4) dem 5) dem 6) das 7) dem 8) der 9) die 10) den \n\nÜbung 3 \n1) Großmutter sitzt auf dem Tisch. 2) Die Dame geht an das Fenster. 3) Dein Mantel ist auf dem Bett 4) \nDie Kinder laufen auf den Fußballplatz. 5) Der Regenschirm ist hinter der Tür. 6) Der Hund läuft hinter \ndas Sofa. 7) Meine Mutter wohnt in dieser Stadt. 8) Onkel Thomas fährt in die Stadt. 9) Man findet die \nBäckerei neben dem Supermarkt. 10) Ich werfe die Zeitung neben den Stuhl. 11) Die Lampe hängt über \nder Kommode. 12) Ich will über die Straße gehen. 13) Die Katze schläft unter dem Fenster. 14) Du sollst \ndeine Schuhe unter das Bett setzen. 15) Die Lehrerin steht vor dem Tisch. 16) Der Student geht an die \nKlasse. 17) Deine Tante sitzt zwischen meinen Brüdern. 18) Du bringst das Sofa zwischen die Stühle. \n\nÜbung 4 \n1) auf das Haus 2) unter dem 3) auf dem 4) auf den 5) über der Tür 6) an dem \n\nÜbung 5 \n1) das 2) einen 3) dem 4) dem 5) die 6) der 7) den 8)n 9) ihr 10) sie 11) den 12) dem 13) ihrem 14) die \n15) dem 16) dem 17) der 18) dem 19) das 20) einem \n\nÜbung 6 \n1) auf dem 2) auf den 3) an der 4) in dem 5) auf meinem 6) auf dem 7) in die 8) auf … es 9) an seinem \n10) vor der \n\nÜbung 7 \n1) stellt 2) stellen 3) liegen 4) hängen 5) stellen 6) steht 7) steht 8) gestellt \n\nÜbung 8 \n1) Wohin - ins 2) Wo - an 3) Wohin – auf 4) Wohin - diese 5) Wo - an 6) Wo - liegt 7) Wohin - steht 8) \nWo - liegt 9) Wo - auf \n\nÜbung 9 \n1) Das Telefon liegt auf dem Tisch. 2) Der Mann hängt das Bild an die Wand. 3) Die Frau legt die \nZeitung auf den Tisch. 4) Die Katze sitzt auf dem Teppich. 5) Der Ball liegt auf dem Boden"
          },
          {
            "page": 16,
            "text": "حركة \n\n\nثبات \n\n\n- Ich fahre ins Kino. \n-Ich fahre ins Theater / ins Cafe / ins Geschäft \n-Wir gehen in den Park / in den Markt / in die \nApotheke / in die Kneipe / in den Klub \n\nin \n-Ich bin im Kino / im Theater / im Cafe / im \nGeschäft \n-Wir sind im Park / im Markt / in der Apoth Kneipe \n/ im Klub \n-in fünf Minuten, in zwei Wochen, in 9 Monaten \n-Im April, im Jahr 2013, im 19 Jahrhundert. \n-Das Gesetz tritt in Kunft. \n-Alles in Ordnung. \n-Er ist in Gefahr."
          }
        ]
      },
      {
        "folge": "Folge 2",
        "title": "More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor",
        "printedPageStart": 17,
        "printedPageEnd": 33,
        "sourcePages": [
          {
            "page": 17,
            "text": "حركة \n\n\nثبات \n\n\n- Der Kellner legt das Besteck neben dem \nTeller. \n-Er setzt sich neben mich. \n\nneben \n\n-Die Bäkerei liegt neben dem Supermarkt. \n-Neben ihrem Studium arbeitet er als \nKellnerin. \n-Neben der Hausarbeit muss meine Mutter \nmeine Oma betreuen. \n\nhinter"
          },
          {
            "page": 18,
            "text": "حركة \n\n\nثبات \n\n\nحركة \n\n\nzwischen \n\n-Er stellt die Flasche zwischen den Teller \nund das Glas. \n-Das Kind fällt zwischen den Stuhl die \nKommode. \n\n- Stell das Fahrrad hinter das Haus. \n-Die Gewinschaft stellt sich hinter die \nMitglieder \n-Er hat uns hinter das Licht geführt. \n\n-Das Fahrrad steht hinter dem Haus. \n-Die Angestelltern stehen hinter diesen \nKollegen. \n-Wir sind hinter dem Mond."
          },
          {
            "page": 19,
            "text": "ثبات \n\n\nحركة \n\n\n▪ Das Flugzeug fliegt über Kuwait. \n▪ Der Sportler sprang über die 2-Meter-Latte. \n▪ Die Kinder liefen über die Straße und dann die \nBrücke.يعدي عبر – يعبر \n▪ Wir fahren von Frankfurt über München nach Wien. \nعبر – من خلال \n▪ Den ganzen Tag über hat er gearbeitet.طوال مدة \n▪ Die Bauer beiten haben über einen Monat \ngedauert.يفوق – يتجاوز – طالت \n▪ Sie ist über 80 Jahre alt. فوق \n▪ Das geht über meine Kräfte.يفوق \n▪ Sein Vortrag über Ägypten war interessant. \n▪محاضرته عن مصر كانت شيقة \n\nüber \n\n-Der Stuhl steht zwischen dem Schrank \nund dem Herd. \n-Zwischen dem 2 und 44 Mai möchte ich \nnach Deutschland reisen. \n-Der Botschafter vermittelt zwischen der \nRegierungen. \n-Zwischen den Zeilen lesen. \n-Zwischen Tur und Angel stehen."
          },
          {
            "page": 20,
            "text": "ثبات \n\n\nحركة \n\n\nثبات \n\n\n-Die Maus kriecht schnell unter das Sofa.يزحف \n-Etwas unter den Teppich kehren.يهمل شيء \n-Etwas unter Kontrolle bringen.يسيطر علي \n-Etwas unter Hand kaufen / verkaufen. يبيع او \nيشتري شيء سرا \nunter \n\n-Die Katze sitzt unter dem Tisch.تحت \n-Sein Lohn liegt unter 1000 €. \n-Die Kinder unter 10 Jahren dürfen nicht rauchen. \n-Zum Glück war unter dem Reisenden ein Arzt.مابين \nunter anderem من ضمن \n-Unter diesen Umständen. في ظل هذة الظروف \nEs ist unmöglich, unter solchen Verhältnissen zu \narbeiten.في ظل هذة الظروف \n-Unter großen Schwierigkeiten.في ظل صعوبات \n-Er steht unter Alkoholeinfluss تحت تأثير \n\n-Die Lampe hängt über dem Tisch. \n-Das Bild hängt über dem Klavier."
          },
          {
            "page": 21,
            "text": "حركة \n\n\nثبات \n\n\n1)Ergänzen Sie Die folgenden Sätze mit den Wörtern rechts: \no Wir sitzen schon in ________________ Auto. das \no Er geht über _________________ Straße. die \no Stell die Schuhe unter _________________ Bett! das \nvor \n-Stell bitte den Mülleimer vor die Tür! \n-Beim Gähnen soll man die Hand vor den \nMund halten عند التوبان لابد ان نضع اليد امام \nالانف \n\n-Das Auto steht vor dem Haus.امام \n-Vor mir standen viele Menschen. \n-Vor München gab es einen Unfall. \n-Er hat vor einer Stunde angerufen.قبل \n-Er muss vor der Prüfung viel lernen. \nVor بسبب الغضب/ Vor Freude من - بسبب السعادة \n/ Vor Fruchtبسبب الخوف \nVor Gericht stehenيحاكم /Vor allen Dingen. في \nالمقام الاول"
          },
          {
            "page": 22,
            "text": "o Wir sitzen vor _____________________ Kindern. unser \no Wer kommt in __________________ August? der \no Sie wohnt in ___________________ Schweiz. die \no An __________________ Mittwoch fliege ich ab. der \no Geh in ____________________ Haus. das \no Schwimm ihr immer in ___________________ Fluss. dieser \no Wann fährst du in _____________________ Türkei. die \no In _____________________ Sommer haben wir Ferien. der \no Er besuchte uns vor __________________ Monat. ein \no Warum gehst du an __________________ Küchenfenster? das \no Ich legte den Löffel neben _______________ Teller? dein \no Er steht zwischen __________________ Brüdern. sein \no Sie steht hinter ___________________ Fabrik. jene \no An ___________________ Abend bin ich müde. der \no Dürfen wir in ____________________ Theater? das \no Stell dich neben __________________ Eltern! dein \no Sein Kopf ist unter ___________________ Kissen. das \no Warst du schon in ___________________ Irak? der \no Setz dich nicht auf __________________ Koffer! mein \no Es liegt zwischen ___________________ Zeitungen. ihr \no In__________________ Irak ist es wieder warm. der \no Warum geht er hinter ____________________ Museum? das \no Er legte es auf _____________ Tisch. der \no Ich bin in _________________ Kaufhaus. ein \no Es liegt unter ____________________ Bett. euer \no Sie sitzt auf ___________________ Mantel. mein \no Setz dich hinter _________________ Freundin! dein \no Das Haus ist neben _________________ Park. jener"
          },
          {
            "page": 23,
            "text": "o Stell es vor ________________ Garage. unser \no Setzt euch in _________________ Auto. das \no Wir sind in ________________ Vereinigten Staaten. die \no Bist du in _______________ Küche? die \n2)Bilden Sie bitte Sätze einmal im Akkusativ und einmal im Dativ: \no Das Zimmer \nZ.B. Ich gehe ins Zimmer. \nIch bin im Zimmer \no Der Bahnhof \n_______________________________________________________________ \n_____________________________________________________________ \no Das Badezimmer \n________________________________________________________________ \n_______________________________________________________________ \no Das Kino \n______________________________________________________________ \n______________________________________________________________ \no Der Zirkus \n_______________________________________________________________ \n_____________________________________________________________ \no Die Stadt \n______________________________________________________________ \n_______________________________________________________________ \no Das Geschäft \n____________________________________________________________ \n_____________________________________________________________ \no Die Garage \n___________________________________________________________ \n____________________________________________________________ \no Die Vorlesung \n____________________________________________________________ \n_______________________________________________________________ \no Der Hausflur \n______________________________________________________________ \n_______________________________________________________________ \no Die Küche \n______________________________________________________________ \n_______________________________________________________________ \no Die Kirche \n______________________________________________________________"
          },
          {
            "page": 24,
            "text": "______________________________________________________________ \no Die Moschee \n_______________________________________________________________ \n_____________________________________________________________ \no Der Keller \n______________________________________________________________ \n_______________________________________________________________ \no Die Klasse \n______________________________________________________________ \n_______________________________________________________________ \no Das Kaufhaus \n______________________________________________________________ \n________________________________________________________________ \no Die Diele \n______________________________________________________________ \n______________________________________________________________ \no Das Theater \n______________________________________________________________ \n______________________________________________________________ \no Das Schwimmbad \n______________________________________________________________ \n______________________________________________________________ \no Die Turnhalle \n_______________________________________________________________ \n_______________________________________________________________ \no Der Iran \n_____________________________________________________________ \n______________________________________________________________ \no Die Türkei \n_______________________________________________________________ \n_______________________________________________________________ \no Das Bett \n_______________________________________________________________ \n_______________________________________________________________ \no Das Büro \n____________________________________________________________ \n____________________________________________________________ \no Das Zentrum \n________________________________________________________________ \n____________________________________________________________ \no Die Universität \n_____________________________________________________________"
          },
          {
            "page": 25,
            "text": "______________________________________________________________ \no Die Schule \n_____________________________________________________________ \n______________________________________________________________ \no Der Sprachkurs \n_______________________________________________________________ \n_______________________________________________________________ \no Der Marktplatz \n_______________________________________________________________ \n________________________________________________________________ \no Die Bäckerei \n________________________________________________________________ \n_______________________________________________________________ \no Der Balkon \n________________________________________________________________ \n________________________________________________________________ \no Das Wohnzimmer \n________________________________________________________________ \n_______________________________________________________________ \no Die Gaststätte \n______________________________________________________________ \n______________________________________________________________ \no Die Straße \n________________________________________________________________ \n_______________________________________________________________ \no Der Zahnarzt \n_____________________________________________________________ \n_____________________________________________________________ \no Das Krankenhaus \n___________________________________________________________ \n________________________________________________________________ \no Der Garten \n______________________________________________________________ \n______________________________________________________________ \no Der Urlaub \n______________________________________________________________ \n_______________________________________________________________ \no Der Augenarzt \n_______________________________________________________________ \n_______________________________________________________________ \n\n3)Ergänzen Sie bitte:"
          },
          {
            "page": 26,
            "text": "1. Er legt die Zeitung auf _________________ (der) Schreibtisch. \n2. Sie legt das Besteck in _________________ (die) Schublade. \n3. Ihr legt die Wäsche in _________________ (der) Kleiderschrank. \n4. Du legst den Teppich auf ______________ (der) Fußboden. \n5. Ich lege die Wurst auf _________________ (der) Kühlschrank. \n6. Wir legen seine Sachen auf ______________ (das) Bett. \n7. Er stellt die Stehlampe in ________________ (die) Ecke. \n8. Du stellst den Tisch vor _________________ (das) Sofa. \n9. Er stellt die Stühle an __________________ (der) Tisch. \n10. Wir stellen das Sofa an _________________ (die) Wand. \n11. Sie stellen die Blumen an _________________ (das) Fenster. \n12. Er stellt die Pflanze auf _________________ (der) Tisch. \n13. Die Mutter setzt das Kind auf ________________ (der) Stuhl. \n14. Kurt setzt sich auf _________________ (das) Sofa. \n15. Fritz setzt den Vogel in _________________ (der) Käfig. \n16. Sie setzt die Kinder auf _________________ (der) Rücksitz. \n17. Wir setzen uns in ________________ (der) Garten. \n18. Du setzt dich auf _________________ (das) Fahrrad. \n19. Jupp hängt das Bild neben ________________ (das) Regal. \n20. Du hängst dein Kleid in _________________ (der) Kleiderschrank. \n21. Ich hänge die Lampe an _________________ (die) Decke. \n22. Er hängt die Landkarte über _________________ (der) Tisch. \n23. Sie hängen alle Bilder an _________________ (die) Wand. \n24. Wir hängen unser Mantel in ______________ (die) Garderobe. \n25. Er steckt den Brief in ___________________ (der) Briefumschlag. \n26. Du steckst den Schlüssel in _____________ (das) Schloss. \n27. Sie steckt ihr Geld in __________________ (die) Geldbörse. \n28. Ich stecke den Stecker in ________________ (die) Steckdose."
          },
          {
            "page": 27,
            "text": "29. Peter steckt die Eintrittskarte in _______________(seine) Jackentasche \n30. Paula steckt ihren Führerschein in ______________ (ihre) Brieftasche. \n4)Interview mit der Polizei. Füllen Sie die Lücken mit den richtigen Phrasen ein. \nPolizei: Sie haben also den Alarm gehört. Was haben Sie dann gemacht? \nMax: Ich bin sofort _______________________ (1) (into the room) gegangen. \nWim: Nein, Max, du bist _________________ (2) (behind the door) gegangen. \nMax: Na, auf jeden Fall war dort ein Mann. Er hat ________________(3) (at the window) \ngestanden. \nPolizei: Und was haben Sie dann getan? \nMax: Der Dieb ist ____________________(4) (between these tables) gelaufen. Ich habe ihn \nverfolgt (=followed). \nWim: Max, du spinnst! Du bist _____________________ (5) (on the ground [=Boden, m.] \nbehind the door) geblieben. Du hattest ja so große Angst! \nPolizei: Wie hat der Dieb ausgesehen? \nMax: Er war etwa vierzig Jahre alt. Er hatte rotes Haar und eine lange Narbe (=scar) \n_____________________________________(6) (under one eye). \nPolizei: Was hat er gestohlen? \nMax: Eine billige Kuckucksuhr, die dort _____________________(7) (on the wall) gehangen \nhat, _____________________________(8) (above the stairs). \nWim: Max, das ist nicht richtig! Es war eine kostbare astronomische Uhr, die hier \n_____________________________________(9) (on the table) gestanden hat, \n______________________________(10) (next to this bottle). \nPolizei: Wie hat der Dieb das Zimmer verlassen (=leave)? \nMax: Er hat einen Augenblick da drüben _____________________(11) (in front of the \nwindow) gestanden. Dann ist er plötzlich _________________(12) (up to the door) gerannt \nund ist weggelaufen. \nWim: Max, du redest Unsinn! Er hat einen Stuhl geholt, hat ihn _____(13) (under the window) \ngestellt und ist _______________(14) (on top of the chair) geklettert (=climbed). Dann ist er \n________ (15) (through the window) hinausgesprungen. \n5)Schreiben Sie die richtigen Endungen, Pronomen, oder Artikeln in die Lücken."
          },
          {
            "page": 28,
            "text": "1. Das Flugzeug fliegt über mein_______ Kopf (m.)! \n2. Die Familie Selicke wohnt über unser_______ Wohnung. \n3. Ich schreibe 'ich mag Deutsch' an d_______ Tafel. \n4. Der Satz 'ich mag Deutsch' steht an d_______ Tafel. \n5. Ein schwarzer Hund läuft hinter ein_______ Baum. \n6. Es gibt ein weißes Haus hinter d_______ Bahnhof. \n7. Meine Freundin geht heute in d_______ Getränkeladen (m.). \n8. Meine Mutter kauft immer Saft in d_______ Getränkeladen. \n9. Die Katze rennt neben d_______ Zaun (=fence, m.). \n10. Der Schneemann steht neben d_______ Zaun. \n11. Der Verkäufer geht zwischen d_______ Fahrräder (pl.). \n12. Ein Ball liegt zwischen d_______ Fahrräder______. \n13. Die Ratten wohnen unter mein_______ Haus. \n14. Die U-Bahn fährt unter mein_______ Straße. \n15. Das Buch liegt vor _____________ (ich) auf dem Tisch. \n16. Meine Kusine stellt das Essen vor _____________ (ich). \n17. Ich stelle den Wein auf d_______ Tisch. \n18. Die Maus liegt auf d_______ Boden (=m.) und schläft. \n6)Wo oder Wohin? Und mit welcher Präposition? \n1. _______ liegt mein Deutschbuch? -- Es liegt __ _____ Boden (m) dort. \n2. ______________ habe ich mein Deutschbuch gelegt? -- Du hast es _________ __________ \nBoden gelegt. \n3._____ sollen wir heute Abend gehen? -- Gehen wir _____ ______ Restaurant! \n4. ____________ sollen wir heute Abend essen? -- Wir können _________ __________ \nRestaurant essen. \n5. ______________ hast du das Poster gehängt? -- Ich habe es _________ __________ Wand \ngehängt. \n6. ______________ hast du deine Jacke gekauft? -- Ich habe sie _________ __________ \nKaufhaus gekauft."
          },
          {
            "page": 29,
            "text": "7. ______________ kann man hier gute Musik hören? -- Das Orchester spielt _________ \n__________ Konzertsaal (m). \n8. ______________ fließt (=to flow) der Mississippi? -- Er fließt _________ __________ Ozean \n(m). \n9. ______________ spielen die Badgers am Samstag? -- Sie spielen _________ __________ \nStadion. \n\n\n7)sehen Sie ein Bild. Schreiben Sie 6 Sätze, um das Bild zu beschreiben. Benutzen Sie \nmindestens 3 der folgenden Verben und 3 der folgenden Präpositionen. \n\nVerben \nliegen \nlegen \nstehen \nstellen \nsitzen \nsetzen \nhängen \nPräpositionen \nan \nauf \nhinter \nin \nneben \nüber \nunter \nvor \nzwischen \n\n1. ____________________________________________________________ \n2. ___________________________________________________________ \n3. ____________________________________________________________ \n4. ____________________________________________________________"
          },
          {
            "page": 30,
            "text": "5. ____________________________________________________________ \n6. _____________________________________________________________ \n\n8)Ergänzen Sie die Sätze mit den richtigen Verben und Präpositionen. \nlegen • liegen • setzen • sitzen • stehen • stellen • an • auf • \nhinter • in • neben • über • unter • vor • zwischen \n\n\n1. Das Schwein \n________________ \ndem Tisch. \n2. Ich _________ \ndie Uhr________ \ndas Regal. \n3. Der Regenschirm \n_____________ \nder Ecke. \n\n\n4. Das Buch \n____________ dem \nSofa. \n5. Der Mantel \n___________ \n____der Tür. \n6. Ich ___________ \nden Papierkorb \n_________ die \nTafel."
          },
          {
            "page": 31,
            "text": "7. Der Hund \n_______________ der \nTür. \n8. Ich __________ \nden Besen _____ \nden Schrank. \n9. Die Tasse \n________________ \ndem Tisch. \n\n10. Das Bild \n____________________ \nden Fenstern. \n11. Ich \n_________die \nZigaretten \n_______den Tisch. \n12. Ich \n___________ den \nTeddybär \n_________ den \nStuhl. \n\n13. Ich \n_____________den \nTeddybär ___________ \ndas Bett. \n14. Eine Socke \n_____ ________ \ndem Bett. \n15. Ich \n__________den \nKuchen \n____________ den \nTisch."
          }
        ],
        "answerPages": [
          {
            "page": 32,
            "text": "Die Lösungen: \n\nÜbung 1 \n1) dem 2) die 3) das 4) unseren 5) dem 6) der 7) dem 8) das 9) diesen 10) die 11) dem 12) einem 13) \ndas 14) deinen 15) seinen 16) jener 17) dem 18) das 19) deine 20) dem 21) dem 22) meinen 23) ihren \n24) dem 25) das 26) den 27) einem 28) eurem 29) meinem 30) deine 31) jenem 32) unsere 33) das 34) \nder 35) der \n\nÜbung 2 \n1) Ich gehe in den Bahnhof. / Ich bin in dem(im) Bahnhof. 2) Ich gehe in das(ins) Badezimmer. / Ich bin \nin dem(im) Badezimmer. 3) Ich gehe in das(ins) Kino. / Ich bin in dem Kino. 4) Ich gehe in den Zirkus. / \nIch bin in dem(im) Zirkus. 5) Ich gehe in die Stadt. / Ich bin in der Stadt. 6) Ich gehe in das Geschäft. / \nIch bin in dem(im) Geschäft. 7) Ich gehe in die Garage. / Ich bin in der Garage. 8) Ich gehe in die \nVorlesung. / Ich bin in der Vorlesung. 9) Ich gehe in den Hausflur. / Ich bin in dem(im) Hausflur. 10) Ich \ngehe in die Küche. / Ich bin in der Küche. 11) Ich gehe in die Kirche. / Ich bin in der Kirche. 12) Ich gehe \nin die Moschee. / Ich bin in der Moschee. 13) Ich gehe in den Keller. / Ich bin in dem(im) Keller. 14) Ich \ngehe in die Klasse. / Ich bin in der Klasse. 15) Ich gehe in das Kaufhaus. / Ich bin in dem(im) Kaufhaus. \n16) Ich gehe in die Diele. / Ich bin in der Diele. 17) Ich gehe in das Theater. / Ich bin in dem(im) Theater. \n18) Ich gehe in das Schwimmbad. / Ich bin in dem(im) Schwimmbad. 19) Ich gehe in die Turnhalle. / Ich \nbin in der Turnhalle. 20) Ich fahre in den Iran. / Ich bin in dem(im) Iran. 21) Ich fahre in die Türkei. / Ich \nbin in der Türkei 22) Ich gehe in das(ins) Bett. / Ich bin in dem(im) Bett. 23) Ich gehe in das Büro. / Ich \nbin in dem(im) Büro. 24) Ich gehe in das Zentrum. / Ich bin in dem Zentrum. 25) Ich gehe in die \nUniversität. / Ich bin in der Universität. 26) Ich gehe in die Schule. / Ich bin in der Schule. 27) Ich gehe in \nden Sprachkurs. / Ich bin in dem Sprachkurs. 28) Ich gehe in den Marktplatz. / Ich bin in dem \nMarktplatz. 29) Ich gehe in die Bäckerei. / Ich bin in der Bäckerei. 30) Ich gehe in den Balkon. / Ich bin \nin dem Balkon. 31) Ich gehe in das Wohnzimmer. / Ich bin in dem Wohnzimmer. 32) Ich gehe in die \nGaststätte. / Ich bin in der Gaststätte. 33) Ich gehe auf die Straße. / Ich bin auf der Straße. 34) Ich gehe \nin den Zahnarzt. / Ich bin in dem Zahnarzt. 35) Ich gehe in das Krankenhaus. / Ich bin in dem \nKrankenhaus. 36) Ich gehe in den Garten. / Ich bin in dem Garten. 37) Ich gehe in den Urlaub. / Ich bin \nin dem Urlaub. 38) Ich gehe in den Augenarzt. / Ich bin in dem Augenarzt. \n\nÜbung 3 \n1) den 2) die 3) den 4) den 5) den 6) das 7) die 8) das 9) den 10) die 11) das 12) den 13) den 14) das 15) \nden 16) den 17) den 18) das 19) das 20) den 21) die 22) den 23) die 24) die 25) den 26) das 27) die 28) \ndie 29) seine 30) ihre \n\nÜbung 4 \n1) in das Zimmer 2) hinter die Tür 3) an dem(am) Fenster 4) zwischen diese Tische 5) auf dem Boden \nhinter der Tür 6) unter einem Auge 7) an der Wand 8) über den Treppen 9) auf dem Tisch 10) neben \ndieser Flasche 11) vor das Fenster 12) an die Tür 13) unter das Fenster 14) auf den Stuhl 15) über das \nFenster \nÜbung 5 \n1) meinen 2) unserer 3) die 4) der 5) einen 6) dem 7) den 8) dem 9) den 10) dem 11) die 12) den - n 13) \nmeinem 14) meine 15) mir 16) mich 17) den 18) dem"
          },
          {
            "page": 33,
            "text": "Übung 6 \n1) Wo - auf dem 2) Wohin – auf den 3) Wohin – in das 4) Wo - in dem 5) Wo – an die 6) Wo - auf dem \n7) Wo - in dem 8) Wohin – in den 9) Wo - an dem \n\nÜbung 7 \n1) Ein Mann steht auf dem Dach eines Gebäudes. 2) Eine Katze steht auf dem Dach eines Gebäudes. 3) \nEin Flugzeug fliegt über den Dach des Gebäudes. 4) Ein Auto steht hinter dem Gebäude. 5) Eine frau \ntritt in die Metzgerei ein. 6) Ein Hund läuft auf die Straße. \n\nÜbung 8 \n1) liegt - unter 2) hänge – über das Bücherregel 3) hängt – an 4) liegt - neben 5) hängt - an 6) stelle - \nunter 7) sitzt - vor 8) stelle - in 9) liegt - auf 10) hängt - zwischen 11) lege – auf 12) setzt - auf 13) lege - \nauf 14) steht - unter 15) lege - auf"
          }
        ]
      },
      {
        "folge": "Folge 3",
        "title": "Genitiv",
        "printedPageStart": 34,
        "printedPageEnd": 48,
        "sourcePages": [
          {
            "page": 34,
            "text": "Nom Der Das die (Sing.) die (Pl.) \nAkk. den das die die \nDat. dem dem der den+ -----n \nGenitiv des____(e)s des_____(e)s der der \n\n\nNom ein ein eine (Sing.) Pl.xxx \nAkk. einen ein eine ------ \nDat. einem einem einer -----+n \nGenitiv eines_____(e)s eines______(e)s einer ------- \n\n\n❖ Die Tasche des Lehrers المدرس شنطة -Herr Müllers Hose ist kurz \n❖ Das Hemd des Lehrers ist rot. المدرس قميص -Ulis Hose ist kurz. \n❖ Die Krawatte des Lehrers ist rot. المدرس كرافتة -Ahmeds Stift ist braun. \nDas ist der Lehrer. \nEr heißt Uli Müller."
          },
          {
            "page": 35,
            "text": "❖ Die Hose von Herr Müller ist rot \n❖ Die Tasche von Uli ist rot. \nاذا كان الأسم منتهي بحرف اضع لها في اخرها فقط- \nZ.B. Ist das Hans’ Auto? \n-اذا كانتالكلمة تنتهي بهذة الحروف اضع له \nZ.B Grases Fußes Netzes \nWessen Tasche ist das? \n❖ Die ist die Tasche des Lehrers. \n❖ Das ist seine Tasche. \n❖ Die Tasche gehört dem Lehrer (ihm)"
          },
          {
            "page": 36,
            "text": "Das ist die Lehrerin. \nSie heißt Lisa Schiller. \n\n❖ Die Haare der Lehrerin المدرسة شعر -Frau Schillers Brille \n❖ Die Schuhe der Lehrerin. المدرسة حذاء -Lisas Brille ist schön. \n❖ Der Rock der Lehrerin ist rot. المدرسة جيبة \n❖ Die Tafel der Lehrerin ist grün. المدرسة سبورة \n❖ Die Brille von Frau Schiller ist schwarz. \n❖ Die Brille von Lisa ist schön. \nاذا كان الأسم منتهي بحرف اضع لها في اخرها فقط- \nIst das Iris’ Brille? \nWessen Buch ist das? \n❖ Das ist das Buch der Lehrerin. \n❖ Das ist ihr Buch. \n❖ Das Buch gehört der Lehrerin."
          },
          {
            "page": 37,
            "text": "❖ Der Pulli des /eines Mädchens الفتاة بلوفر -Marias Pulli ist weiß. \n❖ Das Haar des /eines Mädchens ist gelb. -Marias Haar ist schön. \n❖ Die Schuhe des Mädchens sind rot. -Marias Schuhe sind rot. \n❖ Das Haar von dem Mädchen ist schön. \n❖ Das Haar von Maria ist schön. \n❖ Die Schuhe von dem Mädchen sind rot. \n\nWessen Schuhe sind das? \n❖ Das sind die Schuhe des Mädchens. \n❖ Das sind die Schuhe Marias. \n❖ Die Schuhe gehören dem Mädchen (Maria) \nDas ist das Mädchen. \nDas Mädchen heißt Maria. \n\n\n❖ Die Kleider der Kinder sind bunt. \n❖ Die Schuhe der Kinder sind klein. \nDas sind Kinder. \nDie Kinder sind nett.."
          },
          {
            "page": 38,
            "text": "❖ Die Schuhe von den Kindern sind klein. \n\nWessen Kleider sind das ? \n❖ Das sind die Kleider der Kinder. \n• Die Nummer meiner Mutter ist 012003303209 \n• Das Auto deines Vaters. \n• Er braucht die Hilfe seines Bruders \n• Sie mag den Freund ihrer Tochter. \n• Das ist die Praxis unseres Arztes \n• Das Ende des / eines Films (von dem Film)war gut. \n• Die Geschichte des / eines Landes (von dem Land) ist interessant. \n• Die Schnellheit des / eines Autos (von dem Auto) ist 250 kmm /h. \n• Die Hauptstadt der Bundesrepublik (von der Bundesrepublik) ist Berlin. \n• Die Mehrheit der Stimmen (von der Stimmen) ist gegen Krieg. \n• Der Anfang der Woche (von der Woche) ist langweilig. \n• Die Tür des / eines Zimmers (von dem Zimmer) ist kaputt."
          },
          {
            "page": 39,
            "text": "1)Schreiben Sie den Artikel in der richtigen Form! \n1. Das Kleid ____________________( e Schwester) ist kurz. \n2. Das Hemd _____________________( r Großvater) ist kariert. \n3. Die Halbschuhe_______________________( Udo) sind schmutzig. \n4. Die Sandalen ____________________(r Onkel) sind braun. \n5. Das Abendkleid _____________________( e Tante) ist schön. \n\n2)Formen Sie die Sätze um! \n1. Karl hat ein Jeanshemd. Das ist __________________ \n2. Die Eltern haben ein Auto. _______________________ \n3. Die Donau hat schöne Brücken. _________________________ \n4. Das Haus hat einen Garten. ____________________________ \n5. Die Lehrerin hat einen Ring. ___________________________ \n\n3)Formen Sie die Ausdrücke um! \n1. Peters Buch : das Buch von Peter \n2. das Heft von Petra: \n3. die Arbeit von dem Vater: \n4. das Tuch von dem Tisch: \n5. der Bleistift von den Schülern: \n6. Udos Schwester: \n\n4)Bilde Fragen! \nZ.B. Das ist das Haus von Klara. Wessen Haus ist das? \n1. _____________________________________________________________? \nDort kommt der Freund von Franz. \n2. ____________________________________________________________? \nEr spricht mit dem Mitschüler seiner Schwester. \n3. ______________________________________________________________? \nDas Essen der Mutter ist sehr gut. \n4. _____________________________________________________________? \nDas Haus meiner Großeltern ist schon sehr alt. \n\n5)Sagen Sie es anders \nDas ist die Telefonnummer meiner Mutter von meiner Mutter \n1. seines Vaters von __________________"
          },
          {
            "page": 40,
            "text": "2. ihres Chefs ______________________ \n3. unserer Schule _______________________ \n4. deines Kollegen ________________________ \n5. der Reinigung _______________________ \n6. des Rathauses _______________________ \n7. unserer Nachbarn _______________________ \nder Bibliothek von der Bibliothek \n8. ________________________________ von meinem Vermieter \n9. ________________________________ vom Gasthaus Schmidt \n10. ________________________________ von einem Restaurant \n11. ________________________________ vom Café Fischer \n12. ________________________________ von unserem Haus \n13. ________________________________ von unserem Arzt \n14. ________________________________ von euren Nachbarn \n15. ________________________________ vom Nationalmuseum \n\n\n6)Gebrauchen Sie die in Klammern stehenden Wörter in richtiger Form. \n1. Die Studenten lernen die Bedeutungen ______________(die Wörter). \n2. Er braucht die Hilfe _________________________(die Mutter). \n3. Die Sprechstunde ___________________(der Arzt) beginnt um 8 Uhr. \n4. Die Freunde _______________(unsere Söhne) kommen oft zu Besuch. \n5. Sie diktiert uns die Telefonnummer _________________ (ihr Büro). \n6. Die Fenster ___________________ (das Zimmer) gehen in den Hof. \n7. Er versteht einige Sätze _______________________(der Text) nicht. \n8. Meiner Tochter gefällt das Spiel_________________(diese Geigerin). \n9. Das Kind nennt die Tage _________________________ (die Woche). \n10. Wir hören die Lieder _________________________ (das Jahr) \n\n7)Schreiben Sie die Genitiv-Formen von folgenden Substantiven: \n1. der Flur ________________ 11. das Cafe ________________ \n2. das Waschbecken _____________ 12.der Monat _______________ \n3. das Wohnzimmer ______________ 13. das Hotel _____________ \n4. das Fenster _________________ 14. der Platz _____________ \n5. der Teppich ________________ 15. das Dach ____________ \n6. das Handtuch _______________ 16. der Fluss __________ \n7. der Bücherschrank ____________ 17. das Gesetz ______________ \n8. das Auto ____________________ 18. das Salz _________________ \n9. der Mantel __________________ 19. der Gruß _____________ \n10. das Telefon ________________ 20. das Amt ______________"
          },
          {
            "page": 41,
            "text": "8)Bilden Sie die Wortgruppen nach dem Muster. \nZ.B. Das Hupen/ das Auto → das Hupen des Autos \n1. die Stimme/ der Mann _____________________________________ \n2. das Singen/ der Vogel_______________________________________ \n3. das Bellen/ der Hund________________________________________ \n4. das Laufen/ das Krokodil_____________________________________ \n5. das Brummen/ der Motor____________________________________ \n6. das Ticken/ der Wecker ____________________________________ \n7. das Weinen/ ein Kind ______________________________________ \n8. die Rede/ ein Chef _______________________________________ \n9. die Hauptstadt/ ein Land ________________________________ \n10. der Ratschlag/ ein Freund_________________________________ \n11. der Liebesbrief/ eine Frau __________________________________ \n12. die Straßen/ eine Stadt ____________________________________ \n13. die Mitarbeiter/ unsere Firma _______________________________ \n14. das Buch/ meine Tochter____________________________________ \n15. das Haus/ die Tante ________________________________________ \n16. die Jahre/ die Jugend _______________________________________ \n17. die Blätter/ die Eiche ______________________________________ \n18. der Leiter/ die Firma ____________________________________ \n19. der Artikel/ die Zeitung __________________________________ \n20. die Arbeit/ die Kollegen _________________________________ \n21. die Party/ die Freunde _____________________________________ \n22. die Versammlung/ die Aktionäre ___________________________ \n23. die Besprechung / die Pläne __________________________________ \n24. das Treffen/ die Chefs _______________________________________ \n25. die Sammlung/ die Bilder __________________________________ \n26. Bücher/ Lehrerin _________________________________________ \n27. Auto/ Arzt _______________________________________________ \n28. Wörter/ Satz _____________________________________________ \n29. Räder/ Fahrrad _____________________________________________ \n30. Blumen/ Garten __________________________________________ \n31. Dörfer/ Tal ______________________________________________ \n32. Dialekte/ Region _________________________________________ \n33. Sprachen/ Schweiz _________________________________________ \n34. Gefahren/ Strassen _______________________________________ \n\n9)Setzen Sie die eingeklammerten Vokabeln im Genitiv ein. \n1. Wir kommen am Ende ____________________ (die Woche). \n2. Die Aussprache ___________________(meine Studenten) ist sehr gut."
          },
          {
            "page": 42,
            "text": "3. Ich besuche dich Anfang ____________________ (dieser Monat). \n4. Die Angestellten _________________ (unsere Firma verdienen genug). \n5. Die Nase _____________________ (die Affen) sehen lustig aus. \n6. Die Liebe _________________ (seine Mutter) hat ihm dabei geholfen. \n7. Die Stimme __________________ (der Mann) hat mich bezaubert. \n8. Wir haben über den letzten Vertrag ______(unsere Firma) gesprochen. \n9. Er will das Haus ________________ (sein Onkel) erben. \n10. Die Lüge __________________ (der Sohn) geht ihr auf die Nerven. \n11. Warum willst du die Briefe _____________(dein Freund) nicht zeigen? \n12. Er kommt mit dem Auto __________________ (seine Frau). \n13. Wir arbeiten bei der Firma _____________________ (unsere Eltern). \n14. Wo hast du den Sohn ______________ (der Millionär) kennen gelernt? \n\n10)Setzen Sie die eingeklammerten Wörter im Genitiv ein. Sagen Sie dann, was Sie aus \ndiesem Text erfahren haben. \nWarum heißen die Tage _______________ (1) (die Woche) Sonntag, Montag, Dienstag, \nMittwoch, Donnerstag, Freitag, Sonnabend? Diese Wörter sind sehr alt. Die Menschen \n________________ (2) (das Altertum) glaubten an viele Götter, und deshalb tragen die Tage \ndie Namen_____________ (3) (die Götter). \nSonntag ist der Tag ______________ (4) (die Sonne). Montag ist der Tag ____________ (5) \n(der Mond). Dienstag hat den Namen ______________________ (6) (der germanische \nKriegsgott) – Zio (Tius). Donnerstag hat den Namen ____________________ (7) (der Gott) \nDonar. Es ist der Gott __________________(8) (der Donner). Der Freitag hat den Namen \n______________(9) (die Göttin) ______________(10) (die Liebe) – Freia. \nAber Sonnabend ist der Tag vor dem Sonntag. Nach dem Sonnabend kommt der Sonntag. \nAber Mittwoch ist die Mitte _____________(11) (die Woche). Vor dem Mittwoch sind drei \nTage und nach dem Mittwoch kommen noch drei Tage. Dann beginnt eine neue Woche. \n\n11)Bilden Sie Sätze. Das Beispiel hilft Ihnen: \nZ.B. Das ist das Auto meines Vaters. \n1.Das ist das Strickzeug ____________________________________. \n2.Das sind die Brille ________________________________________. \n3.Das ist das Geschenk _____________________________________. \n4.Das ist der Ball ____________________________________________. \n5.Das ist das Buch ___________________________________________. \n6.Das ist das Käfig ___________________________________________. \n7.Das ist der Hut ____________________________________________. \n8.Das ist die Zeitung ________________________________________. \n9.Das ist die Halskette ______________________________________. \n10.Das ist die Puppe ________________________________________. \n11.Das ist das Blatt __________________________________________."
          },
          {
            "page": 43,
            "text": "12.Das ist das Sofa ___________________________________________. \n12)Was ist richtig? \n1.Das Dach ________ist braun. \na.das Hauses b.des Hauses \n2.Das ist ____________Tochter. \na.euere b.eure \n3.Das ist das Buch__________Maria. \na.von b.aus \n4.Die Soldaten _______________sind stolz. \na.der Mutter b.die Mutter \n5.Das sind die Kinder__________Geschwister, \na.meiner b.meinen \n13)Bilden Sie Sätze: \nBeispiel : Sie putzt den Boden von der Küche. ... den Boden der Küche ........ \n2. Ich lese die Zeitung von meinem Vater. ....... die Zeitung meines Vaters ....... \n3. Der Lehrer verteilt die Aufgaben von den Schülern. \n______________________________________________________________ \n4. Ich bewundere die Farben von einem Bild. \n___________________________________________________________ \n5. Ich höre den I-Pod von einem Freund. \n_____________________________________________________________ \n6. Wir spazieren durch die Strasse von einem Dorf. \n_____________________________________________________________ \n7. Die Leute spazieren am Ufer von dem See entlang. \n______________________________________________________________ \n9. Das sind die Autos von den Lehrern. \n__________________________________________________________ \n\n14) Schreiben Sie die Genitiv-Formen von folgenden Substantiven: \nBeispiel: das Geschenk von Marlene \n......... Marlenes Geschenk ................................................... \n1. der Aufsatz von Martin _______________________________________ \n2. das Comicheft von Max ________________________________________ \n3. das Pferd von Sabine ________________________________________ \n4. der Computer von Sara ______________________________________ \n5. das T-Shirt von Udo ___________________________________________ \n6. die Gitarre von Carlos Santana \n____________________________________________________________ \n7. die Sympathie von Barack Obama \n____________________________________________________"
          },
          {
            "page": 44,
            "text": "8. die Tore von Lionel Messi \n______________________________________________________ \n15)Setzen Sie die eingeklammerten Vokabeln im Genitiv ein. \n1. Das Ende ________________________ war gut. (der Film) \n2. Das Bellen ______________________ stört mich. (dein Hund) \n3. Die Schule _____________________ ist eine Privatschule. (mein Neffe) \n4. Ende ________________________ bekommen wir Geld. (der Monat) \n5. Das Kreuz _________________ ist im südlichen Halbkugel. (der Süden) \n6. Das Schiff _____________________ ist gesunken. (dieser Matrose) \n7. Der Pilot ______________________ fliegt schon lange. (der Flugzeug) \n8. Das Jagdgebiet ________________________ ist bedroht. (ein Löwe) \n9. Die Freude ____________________________ war riesig. (das Kind) \n10. Die Geschichte ___________________ ist interessant. (unser Land) \n11. Die Vorbereitung _________________ dauern lange.(mein Geburtstag) \n12. Die Schnellheit _______________________ ist 260km/h. (das Auto) \n13. Die Mutter ____________________ ist sehr berühmt. (das Mädchen) \n14. Das Ende _____________________ ist nah. (die Welt) \n15. Die Haupstadt ___________________ ist Berlin. (die Bundesrepublik) \n16. Ein Viertel _______________ lebt in grosser Armut. (die Menschheit) \n17. Anfang ______________ habe ich keine Lust auf Arbeit. (die Woche) \n18. Die Meinung _________________kommt gar nicht in Frage. (die Leute) \n19. Die Mehrheit ____________ist gegen Gewalt und Krieg. (die Stimmen) \n20. Der Protest ________________wird nicht akzeptiert.(die Stundenten) \n21. Die Zukunft _____________________ ist wichtig. (unsere Kinder) \n22. Das Haus _____________________ ist riesengross. (seine Eltern) \n\n16)Setzen Sie die eingeklammerten Vokabeln im Genitiv ein und bilden eine Frage. \nZ.B. Frage: Wessen Auto ist das? Das ist das Auto des Mathelehrers \n1. ____________________________________________________________? \nDas Auto _____________________ ist kaputt. (meine Mutter) \n2. ____________________________________________________________? \nDie Telefonnummer ________________________ ist 87 43 69. (sein Freund) \n3. _____________________________________________________________? \nIch warte auf die Abfahrt _____________________________ .(der Zug) \n4. ____________________________________________________________? \nDer Garten ___________________________ ist sehr schön. (meine Eltern) \n5. ____________________________________________________________? \nWir gehen gern durch die Strassen ___________________.(die Altstadt) \n6. ____________________________________________________________? \nIch fahre mit dem Auto _____________________. (der Junge) \n7. ____________________________________________________________?"
          },
          {
            "page": 45,
            "text": "Das Leben ________________________ ist nicht leicht (die Menschen) \n8. ____________________________________________________________? \nDer Hund _________________ ist sehr lebhaft. (mein Neffe) \n\n17)Setzen Sie die eingeklammerten Vokabeln im Genitiv ein. \n1. Der Russel (der Elefant) ist sehr lang. _________________________ \n2. Das Bein (der Sportler) tut weh.___________________________. \n3. Die Knochen (der Arm) ist gebrochen._____________________. \n4. Die Lippen (der Mund) sind zu dick._______________________. \n5. Die Tochter (der Sklave) ist hübsch.___________________________ \n6. Der Vater (mein Neffe) kommt heute zur Besuch._________________ \n7. Das Gewehr (der Soldat) schiesst nicht so gut._____________________ \n8. Ich gehe Mitte (das Jahr) ___________________________in Urlaub. \n9. Die Verschmutzung (das Meer) ______________ wird immer schlimmer. \n10. Die Reifen (das Auto)_________________________________ sind neu. \n11. Die Tür (das Klassenzimmer) _______________________ ist geschlossen. \n12. Der Sattel (das Pferd)_________________ ist aus echtem Leder gemacht. \n13. Der Ort (die Handlung) ______________ ist nicht bekannt. \n14.Die Mehrheit (die Stimmen) ________________ist für die Grünen. \n15.Der Protest ( die Studenten)_______________ wird nicht aktzeptiert. \n16.Das Ende ( die Liebe)_______________________ ist immer traurig. \n17. Der Erfolg (die Arbeit) ____________________ lohnt sich doch. \n18. Anfang ( die Woche ) _____________________ schreiben wir Tests. \n19. Die Beantwortung (die Frage) ________________ ist nicht einfach. \n\n18) Beantworte die Fragen! Achte auf die Wortstellung! \n1. Wessen Koffer steht auf dem Bahnsteig? / r Gast \n_____________________________________________________________ \n2. Wessen Auto parkt neben dem Kaufhaus? / e Biologielehrerin \n_____________________________________________________________ \n3. Wessen Foto hängt in deinem Zimmer? / mein Lieblingssäger \n_______________________________________________________________ \n4. Wessen Hemd hast du heute an? / Onkel Otto \n_______________________________________________________________ \n5. Wessen Fußball hast du im Garten gefunden. / die Kinder \n______________________________________________________________ \n6. Wessen Gedichte habt ihr gelernt? / Lessing \n_____________________________________________________________ \n\n19)Schreibe die bestimmten Artikel (des – der – des - der pl.) zu jedem Nomen:"
          },
          {
            "page": 46,
            "text": "Des Fahrrads 7. Familie \n1. Clowns 8. Films \n2. Figuren 9. Tages \n3. Elefanten (1) 10. Zähne \n4. Uhren 11. Fingers \n5. Person 12. Pos \n6. Mädchens 13. Lollis (1) \n\n20)Schreibe nun die unbestimmten Artikeln zu diesen Nomen: Alle sind im Singular! \n1. Rades 8. Familie \n2. Clowns 9. Films \n3. Figur 10. Tages \n4. Elefanten 11. Zahnes \n5. Uhr 12. Fingers \n6. Person 13. Post \n7. Mädchens 14. Fotos \n\n21)Benutze die bestimmten Artikel (des - der - des ), um die Sätze zu vervollständigen: \n1. Monika kauft die Uhr ______ Onkels. \n2. Luis setzt sich auf den Stuhl _____ Tante. \n3. Wir sehen das Mädchen ____ Mutter im Kino. \n4. Deine Mama gibt dir den Lolli ______ Bruders. \n5. Ich finde den Hund ______ Films sehr lustig. \n6. Herr Peterson fährt das Fahrrad _____ Schwester."
          }
        ],
        "answerPages": [
          {
            "page": 46,
            "text": "Die Lösungen: \nÜbung 1 \n1) der Schwester 2) des Großvaters 3) von Udo 4) des Onkels 5) der Tante \nÜbung 2"
          },
          {
            "page": 47,
            "text": "1) Das ist das Jeanshemd von Karl. 2) Das ist das Auto der Eltern. 3) Diese sind die schönen Brücken der \nDonau. 4) Das ist der Garten des Hauses. 5) Das ist der Ring der Lehrerin. \nÜbung 3 \n1) Petras Heft 2) die Arbeit des Vaters 3) das Tuch des Tisches 4) der Bleistift der Schülern 5) die \nSchwester von Udo \nÜbung 4 \n1) Wessen Freund kommt dort? 2) Wessen Mitschüler spricht er? 3) Wessen essen ist sehr gut? 4) \nWessen Haus ist schon sehr alt? \nÜbung 5 \n1) von seinem Vater 2) von ihrem Chef 3) von unserer Schule 4) von deinem Kollegen 5) von der \nReinigung 6) von dem Rathaus 7) von unserer Nachbarn 8) meines Vermieters 9) des Gasthauses \nSchmidt 10) eines Restaurants 11) des Cafés Fischer 12) unseres Hauses 13) unseres Arztes 14) eurer \nNachbarn 15) des Nationalmuseums \nÜbung 6 \n1) der Wörter 2) der Mutter 3) des Arztes 4) unserer Söhne 5) ihres Büros 6) des Zimmers 7) des Textes \n8) dieser Geigerin 9) der Woche 10) des Jahres \nÜbung 7 \n1) des Flures 2) des Waschbeckens 3) des Wohnzimmers 4) des Fensters 5) des Teppichs 6) des \nHandtuchs 7) des Bücherschranks 8) des Autos 9) des Mantels 10) des Telefons 11) des Cafés 12) des \nMonats 13) des Hotels 14) des Platzes 15) des Dachs 16) des Flusses 17) des Gesetzes 18) des Salzes \n19) des Grußes 20) des Amtes \nÜbung 8 \n1) die Stimmer des Manns 2) das Singen des Vogels 3) das Bellen des Hundes 4) das Laufen des \nKrokodils 5) das Brummen des Motors 6) das Ticken des Weckers 7) das Weinen eines Kindes 8) die \nRede eines Chefs 9) die Hauptstadt eines Landes 10) der Ratschlag eines Freunds 11) der Leibesbrief \neiner Frau 12) die Straßen einer Stadt 13) die Mitarbeiter unserer Firma 14) das Buch meiner Tochter \n15) das Haus der Tante 16) die Jahre der Jugend 17) die Blätter der Eiche 18) der Leiter der Firma 19) \nder Artikel der Zeitung 20) die Arbeit der Kollegen 21) die Party der Freunde 22) die Versammlung der \nAktionäre 23) die Besprechung der Pläne 24) das Treffen der Chefs 25) die Sammlung der Bilder 26) \nBücher der Lehrerin 27) Auto des Arztes 28) Wörter des Satzes 29) Räder des Fahrrads 30) Blumen des \nGartens 31) Dörfer des Tales 32) Dialekte der Region 33) Sprachen der Schweiz 34) Gefahren der \nStraßen \nÜbung 9 \n1) der Woche 2) meiner Studenten 3) dieses Monats 4) unserer Firma 5) der Affen 6) seiner Mutter 7) \ndes Manns 8) unserer Firma 9) seines Onkels 10) des Sohns 11) deines Freunds 12) seiner Frau 13) \nunserer Eltern 14) des Millionärs \nÜbung 10 \n1) der Woche 2) des Altertums 3) der Götter 4) der Sonne 5) des Monds 6) des germanischen \nKriegsgottes 7) des Gottes 8) des Donners 9) der Göttin 10) der Liebe 11) der Woche \nÜbung 11 \n1) meiner Mutter 2) meines Bruders 3) meiner Freundin 4) unseres Teams 5) meines Freunds 6) des \nVögeles 7) meines Onkels 8) der Tante 9) meiner Tochter 10) des Kindes 11) des Baumes 12) des \nWohnzimmers \nÜbung 12 \n1) des Hauses 2) eure 3) von 4) der Mutter 5) meiner \nÜbung 13"
          },
          {
            "page": 48,
            "text": "3) die Aufgaben der Schülern 4) die Farben des Bildes 5) den I-Pod des Freunds 6) die Straße des Dorfs \n7) am Ufer des Sees 8) die Autos der Lehrern \nÜbung 14 \n1) Martins Aufsatz 2) Maxes Comicheft 3) Sabines Pferd 4) Saras Computer 5) Udos T-Shirt 6) Carlos \nSantanas Gitarre 7) Barack Obamas Sympathie 8) Lionel Messis Tore \nÜbung 15 \n1) des Filmes 2) deines Hundes 3) meines Neffes 4) des Monats 5) des Südens 6) dieses Matroses 7) des \nFlugzeugs 8) eines Löwes 9) des Kindes 10) unseres Landes 11) meines Geburtstags 12) des Autos 13) \ndes Mädchens 14) der Welt 15) der Bundesrepublik 16) der Menschheit 17) der Woche 18) der Leute \n19) der Stimmen 20) der Studenten 21) unserer Kinder 22) seiner Eltern \nÜbung 16 \n1) Wessen Auto ist kaputt? Das Auto meiner Mutter ist kaputt. 2) Wessen Telefonnummer ist 87 43 \n69? Die Telefonnummer seines Freunds ist 87 43 69. 3) Wessen Abfahrt wartest du darauf? Ich warte \nauf die Abfahrt des Zugs. 4) Wessen Garten ist sehr schön? Der Garten meiner Eltern ist sehr schön. 5) \nWessen Straßen gehen wir gern dadurch? Wir gehen gern durch die Straßen der Altstadt. 6) Wessen \nAuto fährst du? Ich fahre mit dem Auto des Jungs. 7) Wessen Leben ist nicht leicht? Das Leben der \nMenschen ist nicht leicht. 8) Wessen Hund ist sehr lebhaft? Der Hund meines Neffes ist sehr lebhaft. \nÜbung 17 \n1) des Elefants 2) des Sportlers 3) des Arms 4) des Mundes 5) des Sklaves 6) meines Neffes 7) des \nSoldats 8) des Jahres 9) des Meers 10) des Autos 11) des Klassenzimmers 12) des Pferds 13) der \nHandlung 14) der Stimmen 15) der Studenten 16) der Liebe 17) der Arbeit 18) der Woche 19) der Frage \nÜbung 18 \n1) Der Koffer des Gastes steht auf dem Bahnsteig. 2) Das Auto der Biologielehrerin parkt neben dem \nKaufhaus. 3) Das Foto meines Lieblingssägers hängt in deinem Zimmer. 4) Ich habe heute das Hemd \ndes Onkels Otto an. 5) Ich habe Fußball der Kinder im Garten gefunden. 6) Wir haben Gedichte von \nLessing gelernt. \nÜbung 19 \n1) des / der 2) der 3) der 4) der 5) der 6) des 7) der 8) des 9) des 10) der 11) des 12) des 13) des \nÜbung 20 \n1) des 2) des 3) der 4) der 5) der 6) der 7) des 8) der 9) des 10) des 11) des 12) des 13) der 14) des \nÜbung 21 \n1) des 2) der 3) der 4) des 5) des 6) der"
          }
        ]
      },
      {
        "folge": "Folge 4",
        "title": "Die vier Kasus",
        "printedPageStart": 49,
        "printedPageEnd": 53,
        "sourcePages": [
          {
            "page": 49,
            "text": "Die Artikel : \ndie \n------ \nmeine \nsie \ndie \nein \nmeine \nsie \ndas \nein \nmein \nes \nder \nein \nmein \ner \nNominativ \ndie \n------- \nmeine \nsie \ndie \neine \nmeine \nsie \ndas \nein \nmein \nes \nden \neinen \nmeinen \nihn \nAkkusativ \nden + n \n------- + n \nmeinen + n \nihnen \nder \neiner \nmeiner \nihr \ndem \neinem \nmeinem \nihm \ndem \neinem \nmeinem \nihm \nDativ \nder \n------- \nmeiner \nder \neiner \nmeiner \ndes + s \neines + s \nmeines + s \ndes + s \neines + s \nmeines + s \nGenitiv"
          },
          {
            "page": 50,
            "text": "Die Personalpronomen \n\n\nDie Possessivartikel \nwessen wem wen wer Fragewort \nNominativ Akkusativ Dativ \nich mich mir \ndu dich dir \ner ihn ihm \nes es ihm \nsie sie ihr \nwir uns uns \nihr euch euch \nSie Sie Ihnen \nsie sie ihnen \nmein \ndein \nsein \nsein \nihr \nIch \ndu \ner \nes \nsie"
          },
          {
            "page": 51,
            "text": "Beispiele \nDer Mann isst Pizza. \nDer Mann fragt den Mann. \nDer Mann hilft dem Mann \nDas Auto des Mannes ist schnell. \n\nDie Verben \nNominativ \nSein heißen werden bleiben \n\nAkkusativ \nVerben des Machens machen lesen essen \nVerben mit (be) im \nAnfang bekommen \nVerben mit (er) im \nAnfang erklären \nVerben mit (ver) im \nAnfang verkaufen \nVerben mit (zer) im \nAnfang zerstören \nunser \neuer \nihr \nIhr \nwir \nihr \nsie \nSie"
          },
          {
            "page": 52,
            "text": "Die Präpositionen \nAkkusativ \nfür ohne durch \num entlang gegen \n\nDativ \naus von zu \nnach seit bei \nmit gegenüber \n\nDativ – Akkusativ \nin an Auf \nüber unter Vor \nhinter neben Zwischen \n\nBeispiele: \nDie Frau / das Mädchen / die Kinder \nDie Frau trinkt eine Cole (wer) \nPeter besucht / beantwortet die Frau (wen) \nWir danken der Frau (wem) \nDie Tasche der Frau ist grün (wessen) \n\nDas Mädchen spielt Klavier (wer) \nIch suche das Mädchen (wen) \nDativ \ndenken helfen gratulieren"
          },
          {
            "page": 53,
            "text": "Die Mutter gratuliert dem Mädchen (wem) \nDas Kleid des Mädchens ist schön (wessen) \n\nIch spiele Fußball \nDer Trainer besucht mich \nDie Mitspieler helfen mir \nMein Ball ist bunt"
          }
        ],
        "answerPages": []
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "von ihrem Chef",
          "an",
          "unter einem Auge",
          "unsere"
        ],
        "answer": "an"
      },
      {
        "id": "q-2",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 1 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Woche",
          "dem",
          "der Frage",
          "an"
        ],
        "answer": "an"
      },
      {
        "id": "q-3",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 1 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "auf",
          "Wo - in dem",
          "dem",
          "Wo - liegt"
        ],
        "answer": "auf"
      },
      {
        "id": "q-4",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 1 · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Südens",
          "des Fensters",
          "an",
          "liegt - unter"
        ],
        "answer": "an"
      },
      {
        "id": "q-5",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 2 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Barack Obamas Sympathie",
          "an",
          "dem",
          "lege - auf"
        ],
        "answer": "dem"
      },
      {
        "id": "q-6",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 3 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Dame geht an das Fenster",
          "der Frage",
          "lege - auf",
          "die"
        ],
        "answer": "Die Dame geht an das Fenster"
      },
      {
        "id": "q-7",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 3 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Frage",
          "Ich werfe die Zeitung neben den Stuhl",
          "das Buch meiner Tochter",
          "der Mutter"
        ],
        "answer": "Ich werfe die Zeitung neben den Stuhl"
      },
      {
        "id": "q-8",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 4 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Arbeit der Kollegen",
          "stelle - in",
          "am Ufer des Sees",
          "auf dem"
        ],
        "answer": "auf dem"
      },
      {
        "id": "q-9",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 5 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "Ich gehe in das Theater. / Ich bin in dem(im) Theater",
          "den",
          "der Frage"
        ],
        "answer": "dem"
      },
      {
        "id": "q-10",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 5 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Auto des Arztes",
          "sie",
          "dem",
          "von ihrem Chef"
        ],
        "answer": "sie"
      },
      {
        "id": "q-11",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 5 · item 16",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "des",
          "das",
          "des Manns"
        ],
        "answer": "dem"
      },
      {
        "id": "q-12",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 6 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "an",
          "des",
          "an der"
        ],
        "answer": "an der"
      },
      {
        "id": "q-13",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 6 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "an seinem",
          "Ich gehe in die Bäckerei. / Ich bin in der Bäckerei",
          "an",
          "des Südens"
        ],
        "answer": "an seinem"
      },
      {
        "id": "q-14",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 7 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Klassenzimmers",
          "steht",
          "des",
          "der"
        ],
        "answer": "steht"
      },
      {
        "id": "q-15",
        "prompt": "Folge 1: Wechselpräpositionen: an/auf and the wo?/wohin? idea · Übung 8 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wo - liegt",
          "von ihrem Chef",
          "das Buch meiner Tochter",
          "Ich gehe in das Theater. / Ich bin in dem(im) Theater"
        ],
        "answer": "Wo - liegt"
      },
      {
        "id": "q-16",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das",
          "den",
          "dem",
          "des Klassenzimmers"
        ],
        "answer": "dem"
      },
      {
        "id": "q-17",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 1 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das Tuch des Tisches",
          "der Mutter",
          "dem",
          "Ich gehe in die Garage. / Ich bin in der Garage"
        ],
        "answer": "dem"
      },
      {
        "id": "q-18",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 1 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das",
          "am Ufer des Sees",
          "den",
          "von ihrem Chef"
        ],
        "answer": "das"
      },
      {
        "id": "q-19",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 1 · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "an",
          "der Mutter",
          "Ich gehe in die Garage. / Ich bin in der Garage",
          "deine"
        ],
        "answer": "deine"
      },
      {
        "id": "q-20",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 1 · item 25",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "den",
          "meines Bruders",
          "das",
          "die Arbeit der Kollegen"
        ],
        "answer": "das"
      },
      {
        "id": "q-21",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 1 · item 32",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des",
          "unsere",
          "Wo - auf dem",
          "des Autos"
        ],
        "answer": "unsere"
      },
      {
        "id": "q-22",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 2 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Fensters",
          "steht",
          "Ich gehe in die Garage. / Ich bin in der Garage",
          "das"
        ],
        "answer": "Ich gehe in die Garage. / Ich bin in der Garage"
      },
      {
        "id": "q-23",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 2 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich gehe in das Theater. / Ich bin in dem(im) Theater",
          "deine",
          "dieser Geigerin",
          "des Millionärs"
        ],
        "answer": "Ich gehe in das Theater. / Ich bin in dem(im) Theater"
      },
      {
        "id": "q-24",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 2 · item 29",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "auf dem",
          "Ich gehe in die Bäckerei. / Ich bin in der Bäckerei",
          "deine",
          "die"
        ],
        "answer": "Ich gehe in die Bäckerei. / Ich bin in der Bäckerei"
      },
      {
        "id": "q-25",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das Ticken des Weckers",
          "den",
          "des Cafés",
          "des Manns"
        ],
        "answer": "den"
      },
      {
        "id": "q-26",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 3 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "den",
          "der Mutter",
          "des",
          "des Cafés"
        ],
        "answer": "den"
      },
      {
        "id": "q-27",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 3 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Frage",
          "deine",
          "Die Dame geht an das Fenster",
          "den"
        ],
        "answer": "den"
      },
      {
        "id": "q-28",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 3 · item 22",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "den",
          "der Leute",
          "an",
          "Barack Obamas Sympathie"
        ],
        "answer": "den"
      },
      {
        "id": "q-29",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 3 · item 28",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unter einem Auge",
          "des Südens",
          "Wo - auf dem",
          "die"
        ],
        "answer": "die"
      },
      {
        "id": "q-30",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 4 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unter einem Auge",
          "dem",
          "das Tuch des Tisches",
          "den"
        ],
        "answer": "unter einem Auge"
      },
      {
        "id": "q-31",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 4 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unter das Fenster",
          "des Autos",
          "des",
          "auf dem"
        ],
        "answer": "unter das Fenster"
      },
      {
        "id": "q-32",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 5 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die",
          "Ich werfe die Zeitung neben den Stuhl",
          "einen",
          "auf"
        ],
        "answer": "einen"
      },
      {
        "id": "q-33",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 5 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "den",
          "die",
          "das Buch meiner Tochter",
          "des Manns"
        ],
        "answer": "die"
      },
      {
        "id": "q-34",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 6 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "meines Bruders",
          "Wo - auf dem",
          "des Klassenzimmers",
          "unter das Fenster"
        ],
        "answer": "Wo - auf dem"
      },
      {
        "id": "q-35",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 6 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des",
          "an der",
          "den",
          "Wo - in dem"
        ],
        "answer": "Wo - in dem"
      },
      {
        "id": "q-36",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 8 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "den",
          "des Grußes",
          "liegt - unter",
          "die"
        ],
        "answer": "liegt - unter"
      },
      {
        "id": "q-37",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 8 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "stelle - in",
          "der Woche",
          "auf",
          "die Arbeit der Kollegen"
        ],
        "answer": "stelle - in"
      },
      {
        "id": "q-38",
        "prompt": "Folge 2: More Wechselpräpositionen: in, neben, hinter, zwischen, über, unter, vor · Übung 8 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "der",
          "das Buch meiner Tochter",
          "lege - auf"
        ],
        "answer": "lege - auf"
      },
      {
        "id": "q-39",
        "prompt": "Folge 3: Genitiv · Übung 2 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Millionärs",
          "Das ist das Jeanshemd von Karl",
          "das Buch meiner Tochter",
          "steht"
        ],
        "answer": "Das ist das Jeanshemd von Karl"
      },
      {
        "id": "q-40",
        "prompt": "Folge 3: Genitiv · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "den",
          "das Tuch des Tisches",
          "der Frage",
          "an"
        ],
        "answer": "das Tuch des Tisches"
      },
      {
        "id": "q-41",
        "prompt": "Folge 3: Genitiv · Übung 5 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das ist das Jeanshemd von Karl",
          "des Autos",
          "der Mutter",
          "von ihrem Chef"
        ],
        "answer": "von ihrem Chef"
      },
      {
        "id": "q-42",
        "prompt": "Folge 3: Genitiv · Übung 5 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Mutter",
          "eines Restaurants",
          "liegt - unter",
          "dem"
        ],
        "answer": "eines Restaurants"
      },
      {
        "id": "q-43",
        "prompt": "Folge 3: Genitiv · Übung 6 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "einen",
          "der",
          "unsere",
          "der Mutter"
        ],
        "answer": "der Mutter"
      },
      {
        "id": "q-44",
        "prompt": "Folge 3: Genitiv · Übung 6 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich werfe die Zeitung neben den Stuhl",
          "dieser Geigerin",
          "den",
          "meines Bruders"
        ],
        "answer": "dieser Geigerin"
      },
      {
        "id": "q-45",
        "prompt": "Folge 3: Genitiv · Übung 7 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "meiner Tochter",
          "des Fensters",
          "Auto des Arztes",
          "lege - auf"
        ],
        "answer": "des Fensters"
      },
      {
        "id": "q-46",
        "prompt": "Folge 3: Genitiv · Übung 7 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Cafés",
          "des",
          "dieser Geigerin",
          "den"
        ],
        "answer": "des Cafés"
      },
      {
        "id": "q-47",
        "prompt": "Folge 3: Genitiv · Übung 7 · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "die",
          "des Grußes",
          "liegt - unter"
        ],
        "answer": "des Grußes"
      },
      {
        "id": "q-48",
        "prompt": "Folge 3: Genitiv · Übung 8 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der",
          "das Ticken des Weckers",
          "sie",
          "das Buch meiner Tochter"
        ],
        "answer": "das Ticken des Weckers"
      },
      {
        "id": "q-49",
        "prompt": "Folge 3: Genitiv · Übung 8 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "am Ufer des Sees",
          "an",
          "das Buch meiner Tochter",
          "Wo - auf dem"
        ],
        "answer": "das Buch meiner Tochter"
      },
      {
        "id": "q-50",
        "prompt": "Folge 3: Genitiv · Übung 8 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Arbeit der Kollegen",
          "sie",
          "Ich gehe in das Theater. / Ich bin in dem(im) Theater",
          "der Frage"
        ],
        "answer": "die Arbeit der Kollegen"
      },
      {
        "id": "q-51",
        "prompt": "Folge 3: Genitiv · Übung 8 · item 27",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Auto des Arztes",
          "des Fensters",
          "dem",
          "unsere"
        ],
        "answer": "Auto des Arztes"
      },
      {
        "id": "q-52",
        "prompt": "Folge 3: Genitiv · Übung 9 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Woche",
          "steht",
          "das",
          "dem"
        ],
        "answer": "der Woche"
      },
      {
        "id": "q-53",
        "prompt": "Folge 3: Genitiv · Übung 9 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "am Ufer des Sees",
          "dieser Geigerin",
          "unsere",
          "des Manns"
        ],
        "answer": "des Manns"
      },
      {
        "id": "q-54",
        "prompt": "Folge 3: Genitiv · Übung 9 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Millionärs",
          "des",
          "einen",
          "das"
        ],
        "answer": "des Millionärs"
      },
      {
        "id": "q-55",
        "prompt": "Folge 3: Genitiv · Übung 10 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unter einem Auge",
          "das",
          "den",
          "des Gottes"
        ],
        "answer": "des Gottes"
      },
      {
        "id": "q-56",
        "prompt": "Folge 3: Genitiv · Übung 11 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das",
          "meines Bruders",
          "von ihrem Chef",
          "des Grußes"
        ],
        "answer": "meines Bruders"
      },
      {
        "id": "q-57",
        "prompt": "Folge 3: Genitiv · Übung 11 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "eines Restaurants",
          "meiner Tochter",
          "das Buch meiner Tochter",
          "deine"
        ],
        "answer": "meiner Tochter"
      },
      {
        "id": "q-58",
        "prompt": "Folge 3: Genitiv · Übung 12 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Woche",
          "dem",
          "meiner Tochter",
          "der Mutter"
        ],
        "answer": "der Mutter"
      },
      {
        "id": "q-59",
        "prompt": "Folge 3: Genitiv · Übung 13 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "der Mutter",
          "an seinem",
          "am Ufer des Sees"
        ],
        "answer": "am Ufer des Sees"
      },
      {
        "id": "q-60",
        "prompt": "Folge 3: Genitiv · Übung 14 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Barack Obamas Sympathie",
          "des Gottes",
          "einen",
          "an"
        ],
        "answer": "Barack Obamas Sympathie"
      },
      {
        "id": "q-61",
        "prompt": "Folge 3: Genitiv · Übung 15 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich gehe in die Garage. / Ich bin in der Garage",
          "des Südens",
          "Das ist das Jeanshemd von Karl",
          "eines Restaurants"
        ],
        "answer": "des Südens"
      },
      {
        "id": "q-62",
        "prompt": "Folge 3: Genitiv · Übung 15 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des",
          "des Fensters",
          "des Autos",
          "den"
        ],
        "answer": "des Autos"
      },
      {
        "id": "q-63",
        "prompt": "Folge 3: Genitiv · Übung 15 · item 18",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sie",
          "des Mundes",
          "des Südens",
          "der Leute"
        ],
        "answer": "der Leute"
      },
      {
        "id": "q-64",
        "prompt": "Folge 3: Genitiv · Übung 16 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Gottes",
          "an",
          "Wessen Garten ist sehr schön? Der Garten meiner Eltern ist sehr schön",
          "des Fensters"
        ],
        "answer": "Wessen Garten ist sehr schön? Der Garten meiner Eltern ist sehr schön"
      },
      {
        "id": "q-65",
        "prompt": "Folge 3: Genitiv · Übung 17 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Cafés",
          "Ich werfe die Zeitung neben den Stuhl",
          "des Mundes",
          "des Südens"
        ],
        "answer": "des Mundes"
      },
      {
        "id": "q-66",
        "prompt": "Folge 3: Genitiv · Übung 17 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "des Klassenzimmers",
          "unsere",
          "Ich gehe in das Theater. / Ich bin in dem(im) Theater",
          "der Leute"
        ],
        "answer": "des Klassenzimmers"
      },
      {
        "id": "q-67",
        "prompt": "Folge 3: Genitiv · Übung 17 · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "der Frage",
          "an",
          "meiner Tochter"
        ],
        "answer": "der Frage"
      },
      {
        "id": "q-68",
        "prompt": "Folge 3: Genitiv · Übung 19 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der",
          "des Klassenzimmers",
          "auf dem",
          "Wo - auf dem"
        ],
        "answer": "der"
      },
      {
        "id": "q-69",
        "prompt": "Folge 3: Genitiv · Übung 19 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das Buch meiner Tochter",
          "den",
          "des",
          "Auto des Arztes"
        ],
        "answer": "des"
      },
      {
        "id": "q-70",
        "prompt": "Folge 3: Genitiv · Übung 20 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Frage",
          "unsere",
          "Wo - liegt",
          "des"
        ],
        "answer": "des"
      },
      {
        "id": "q-71",
        "prompt": "Folge 3: Genitiv · Übung 20 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das ist das Jeanshemd von Karl",
          "unter das Fenster",
          "den",
          "der"
        ],
        "answer": "der"
      },
      {
        "id": "q-72",
        "prompt": "Folge 3: Genitiv · Übung 20 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "stelle - in",
          "des",
          "unter einem Auge",
          "an"
        ],
        "answer": "des"
      }
    ],
    "sourcePageCount": 46,
    "answerPageCount": 7
  },
  {
    "id": "adjektive-komparation",
    "title": "Adjective Declension, Comparison & Describing People",
    "source": "Folge 5-12",
    "pages": "PDF pages 54-102",
    "summary": "Source workbook material from Folge 5-12: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 5",
        "title": "Adjektivdeklination I",
        "printedPageStart": 54,
        "printedPageEnd": 63,
        "sourcePages": [
          {
            "page": 54,
            "text": "Kasus der(mein) das(mein) die(sing.meine) die(pl.meine) \nNom. ____ e ____ e ____ e ____ en \nAkk. ____ en ____ e ____ e ____ en \n\n\n Der alte Stuhl ist schön. \n Er kauft den roten Stuhl. \n Sie braucht den modernen Drachen. \n\n Das schnelle Auto ist BMW. \n Das blaue Auto fährt schnell. \n Das große Regal ist praktisch. \n Das neue Haus liegt in Amerika \n Das alte Faxgerät ist noch gut. \n\n Die grüne Tasche kostet 100 €. \n Die alte Brille ist kaputt. \n Die neue Lampe leuchtet gut. \n Die deutsche Mannschaft. \n\n Ich kaufe die nützlichen Bücher \n Die schnellen Autos sind teuer. \n Die grünen Taschen sind gut. \n Wir kaufen die gelben Tische. \n."
          },
          {
            "page": 55,
            "text": "Kasus ein (der) ein (das) eine (die) ****(die.pl.) \nNom. ____ er ____ es ____ e ____ e \nAkk. ____ en ____ es ____ e ____ e \n\n Das ist ein roter Stuhl. \n Hier ist mein neuer Stuhl. \n Er kauft einen neuen Stift. \n Sie braucht einen großen Tisch. \n Ich benutze einen praktischen PC. \n\n Das ist ein schnelles Auto. \n Lisa kauft ein gebrauchtes Handy. \n Ich lese ein interessantes Buch. \n Mark braucht ein großes Regal. \n Wir kaufen ein neues Haus. \n\n\n Das ist eine grüne Tasche. \n Mona möchte eine schöne Uhr. \n Wir kaufen eine neue Lampe. \n Bayern ist eine starke Mannschaft. \n\n\n Das sind bunte Bücher. \n Hier sind rote Stühle. \n Wir brauchen neue Stühle. \n Anna hat schöne Lampen."
          },
          {
            "page": 56,
            "text": "Kasus ein (der) ein (das) eine (die) ****(die.pl.) \nNom. der schöne Mann \nein schöner Mann \ndas tolle Mädchen \nein tolles Mädchen \ndie hübsche Frau \neine hünsche Frau \ndie schicken Schuhe \nschicke Schuhe \nAkk. den schönen Mann \neinen schönen Mann \ndas tolle Mädchen \nein tolles Mädchen \ndie hübsche Frau \neine hünsche Frau \ndie schicken Schuhe \nschicke Schuhe \nDativ dem schönen Mann \neinem schönen Mann \ndem tollen Mädchen \neinem tollen Mädchen \nder hübschen Frau \neiner hünschen Frau \nden schicken Schuhe \nschicken Schuhe \n\n Schöne Frauen lieben die starken Männer. \n Dort liegt der große Hut, das kaputte Fahrrad. \n Ich nehme das grüne Kleid und die schwarze Bluse. \n Ein freundlicher Mann, ein lustiges Kind, keine/meine nette Frau. \n Ich möchte keinen starken Kaffee, ein großes Wasser, einen leckeren \nKuchen. \n Peter ist ein sympatischer Junge . \n Lisa ist ein hübsches Mädchen. \n Frau Schulz ist eine kluge Frau. \n Herr Shehata ist ein guter Mensch. \n Ich esse keine süße Schokolade. \n Du bist mein bester Feund. \n Das ist unser (ein) neues Haus. \n Das ist eine kurze Geschichte. \n Ich trage einen schweren Koffer. \n Lisa hat eine scharfe Zunge. \n Er trägt eine enge Hose. \n Das ist ein langer Weg."
          },
          {
            "page": 57,
            "text": "1)Ergänzen Sie bitte die Lücken: \n1 \nDas ist ein toll____ (1) Auto. Der alt____(2) Motor läuft noch gut. Die rot__(3) Sitzbänke sind \naus weich____(4) Leder. Das Auto hat eine sportlich____(5) Karosserie und ein groß____(6) \n\n Er hat seinen bequemen Sessel verkauft. \n Wir besuchen unsere alte Oma. \n Wir treffen seinen klugen Vater. \n Herr Shehata wiederholt einen langen Satz. \n Ich zeichne ein buntes Bild. \n Lisa kocht eine leckere Suppe. \n Paul trinkt einen heißen Tee. \n Ich höre ein schönes Lied. \n Peter kauft ein \n teures Auto. \n\nEinige wenige Adjektive sind in ihrer Deklination unregelmäßig. \nDazu gehören: \n• hoch: der hohe Baum, die hohen Bäume, das hohe Haus, die \nhohen Häuser, ... \n• dunkel: das dunkle Zimmer, die dunklen Zimmer, der dunkle \nRaum, ... \n• teuer: das teure Auto, die teuren Autos, der teure Mantel, die \nteuren Mäntel, ... \n• sauer: der saure Wein, die sauren Weine, die saure Gurke, die \nsauren Gurken,"
          },
          {
            "page": 58,
            "text": "Dachfenster. Die neu____(7) Stoßstangen glänzen. Teur____(8) Extras sind eingebaut: \nautomatisch____(9) Fensterheber, ein Störungsfrei_____(10) Radio, ein verstellbar____(11) \nLenkrad, eine stark____(12) Heizung und bequem____(13) Liegesitze. Das schön_____(14) \nAuto hat ein rot____(15) Dach und grün_____(16) Türen. Und es ist unverkäuflich! \n2 \nViel_____ (1) groß_____ (2) Menschen haben viel_____ (3) Probleme: Klein_____ (4) Türen, \nkurz_____ (5) Betten, niedrig_____ (6) Decken, schmal______ (7) Sitze und eng_____ (8) \nZimmer. Aber auch ein klein_____ (9) Mensch hat es nicht leicht. Wenn er ein schwer_____ \n(10) Buch aus einem hoh_____ (11) Regal holen will, braucht er eine klein_____ (12) Leiter \noder einen stabil______ (13) Stuhl. Nur wenig_____ (14) Menschen haben wenig_____ (15 ) \nProbleme; Kein Mensch hat gar kein_____ (16) Probleme. Die meisten Menschen haben \nviel_____ (17) Probleme \n\n2)Ergänze die Endungen \n1. der klein____ Hafen 2. das langsam____ Auto \n3. die kurz______ Hose. 4. die elegant______ Schuhe \n5. der schön______ Palast 6. die dick_____ Dame. \n7. der nett______ Lehrer 8. das groß______ Museum \n3)Ergänzen Sie bitte: \nHier ist ein___ (1) attraktiv___ (2) Mann und ein sehr \nberühmt___(3) Schauspieler. Er ist schlank___ (4) und \ngroß___(5), hat strahlendblau___ (6) Augen und \nbrünett___ (7) Haare. Auf dies___ (8) Bild trägt er \nein___ (9) schwarz___ (10) Hut, ein___ (11) hell___ \n(12) Lederjacke mit zwei groß___ (13) Brusttaschen, \nein___ (14) kariert___ (15) Hemd, ein___ (16) breit___ \n(17) Ledergürtel und ein___ (18) dunkl___ (19) Hose. \nHinter d___ (20) Mann steht sein___ (21) braun___ \n(22) Pferd. Er ist gerade im „Wild___ (23) Westen“ \nAmerikas. \n\n4)Wie ist die richtige Adjektivform? \n1. Susanne liest gerade ein __________ (dick) Buch. Es gefällt ihr sehr gut, denn \nes ist sehr ______________ (spannend). \n2. Die Kinder haben in der Schule sehr ____________ (schön) Bilder gemalt. \n3. Ich besuche am Wochenende meine ____________ (alt) Großmutter. \n4. Der Stadtpark ist sehr ____________ (groß). \n5. Ich brauche dringend einen ______________ (neu) Mantel. Mein ___________ (alt)"
          },
          {
            "page": 59,
            "text": "Mantel ist schon ganz ____________ (kaputt). \n6. Dieser Schreibtisch kostet nur 25 Euro, er ist nicht ____________ (teuer). \n7. Die Mutter erzählt den Kindern am Abend eine __________ (schön), _____________ \n(lang) Geschichte. \n8. Morgen muss ich ein __________ (schwer) Paket von der Post abholen. \n9. Meine __________ (neu) Wohnung ist sehr ____________ (hell) und __________ \n(gemütlich). \n5)Setzen Sie bitte die richtigen Endungen ein \n1. Die fleißig____ Studenten lernen den ganz____ Tag. \n2. Das war ein wunderbar____ Film! \n3. Der Test ist schwer. Diese kompliziert____ Frage kann ich nicht beantworten. \n4. Unsere nett____ Nachbarn haben seit zwei Wochen ein süß____ Baby. \n5. Für kalt____ Wintertage brauchst du eine warm____ Jacke. \n6. Aus meiner kaputt____ Dusche kommt nur kalt____ Wasser! \n7. Meine Schwester hat braun____ Haare und grün____ Augen. \n8. Woher hast du diese schön____ Tasche? \n9. Er spielt nicht oft mit anderen klein____ Kindern. \n10. So schön____ bunt____ Blumen möchte ich auch auf meinem Balkon haben! \n6)Ergänzen Sie bitte die Sätze \n1. Das ist aber ein ___________ (schön) Tisch! Ja, aber leider ist er sehr \n___________ (teuer). \n2. Ist Ihre Tochter noch immer ___________ (krank)? \n3. Die ________ (alt) Bänke im Park sind sehr ___________ (unbequem) und \n___________ (hart). \n4. Deine Küche gefällt mir. Sie ist ___________ (klein), aber sehr ___________ \n(praktisch). \n5. Das ___________ (weiß) Hemd, die ___________ (schwarz) Hose und der \n___________ (grau) Mantel passen sehr gut zusammen. \n6. Ich mag keine ___________ (braun) Schuhe. ___________ (schwarz) \nSchuhe gefallen mir besser. \n7. Ich mag meine ___________ (neu) Kollegin sehr. Sie ist ___________ \n(kompetent) und sehr ___________ (nett). \n\n7)Wählen Sie die richtige Lösung aus! \n1-Ich bekomme ............. Bier und ................. Kaffee. \na) einen kalten ............... einen heißen \nb) ein kaltes ................ein heißes \nc) einen kalten .............ein heißes \nd) ein kaltes ............... einen heißen \n1- Mein ............... Mantel ist schöner als dein ............... Kleid. \na) schwarze ................... grüner"
          },
          {
            "page": 60,
            "text": "b) schwarzer .................. grünes \nc) schwarzer .................. grüne \nd) schwarzes .................. grüner \n3- In meinem Zimmer gibt es ................................................. . \na) ein großer Tisch und ein kleines Bett \nb) ein großes Tisch und ein kleiner Bett \nc) einen großen Tisch und ein kleines Bett \nd) einer großer Tisch und ei kleines Bett \n8)Ergänzen Sie bitte: \n1. \n\n\n9)Ergänzen Sie bitte: \n2. \n\n\n10)Ergänze! \n1. Dieser Hut ist sehr modern. Ja, das ist ein ____________ Hut. \n2. Dieses Haus ist wirklich schön. Ja, das ist ein _____________ Haus. \n3. Die Hose ist so billig! Ja, _______________________ \n4. Dieses Hemd ist ziemlich teuer. Ja, __________________________ \n5. Findest du diese Schuhe elegant? Nein, das sind kein_________________ \n\nPortugal ist das ideal_______ (1) Reiseziel, wenn man einen schönen \nUrlaub haben möchte. Die wunderbar______ (2) Strände und die \nmalerisch______(3), alt_____(4) Häfen warten auf diejenigen, die \nMeer und Sonne genießen wollen. Das schön______ (5) Wetter gibt \ndem Aktivurlauber die Möglichkeit, Sport zu treiben. \nIn Lissabon kann man durch die Straßen bummeln oder einfach mit \nder alt______ (6) Straßenbahn fahren. In Portugal kann man einen \nunvergesslichen Urlaub verbringen. \nHeute geht der dünn____ (1) Tim mit der schön_____ (2) Bibi spazieren. Aber er \nhat dieses groß___ (3) Problem: er weiß nicht, was er anziehen soll. Zuerst zieht \ner die neu______ (4) Jeans und das neu____ (5) T-Shirt an. Dann zieht er die \ngrau____ (6) Hose an, aber der nett_____ (7) Mecki ist dagegen. Der eng____ \n(8) Anzug passt nicht. Die weiß____(9) Jacke und die schwarz____ (10) Hose \nstehen ihm auch schlecht. Mecki findet die geblümt_____ (11) Shorts \nschrecklich. Mecki und Rufus finden die gestreift____(12) Jacke fantastisch, \naber sie passt nicht zu den geblümt____ (13) Shorts. Bibi kommt und ist \nzufrieden. Der arm_____ (14) Tim bleibt zu Hause. Bibi geht weg."
          },
          {
            "page": 61,
            "text": "11)Ergänzen Sie bitte: \n1 \n\nder Rock ist grün 10 der Schal ist grün \nA- der grün….. Rock \nist teuer…. \nA. der grün….. Schal \nist warm…… \nB- Hier ist ein…. \ngrün….. Rock. \nB. hier ist ein….. \ngrün…… Schal \nC- Ich kaufe ein….. \ngrün…… Rock. \nC. ich kaufe ein….. \ngrün….. Schal \n2 der Pullover ist rot 11 die Socken sind billig \nA. der rot …. \nPullover ist billiger…. \nA. die billig…… \nSocken sind alt….. \nB. Hier ist ein…. \nrot….. Pullover. \nB. hier sind billig….. \nSocken \nC. Ich kaufe ein….. \nrot…… Pullover. \nC. ich kaufe die \nbillig….. Socken \n3 der Sportanzug ist \ngrün. \n12 die Jacke ist grau \nA. der grün….. \nSportanzug ist \nsportlich…. \nA. die grau…… Jacke \nist teuer….. \nB. Hier ist ein…. \ngrün….. Sportanzug. \nB. hier ist ein….. \ngrau….. Jacke. \nC. Ich kaufe ein….. \ngrün…… Sportanzug . \nC. ich kaufe ein….. \ngrau…… Jacke. \n4 die Krawatte ist gelb 13 das T-Shirt ist rot \nA. die gelb….. \nKrawatte ist klein…. \nA. das rot….. T-Shirt \nist modern \nB.Hier ist ein…. \ngelb….. Krawatte. \nB. hier ist ein…… \nrot…… T-Shirt \nC. Ich kaufe ein….. \ngelb…… Krawatte. \nC. ich kaufe ein ….. \nrot…… T-Shirt \n5 das Hemd ist blau 14 der Schlafanzug ist \nneu \nA. das blau….. Hemd \nist klassisch…. \nA. der neu….. \nSchlafanzug ist rosa."
          },
          {
            "page": 62,
            "text": "B. hier ist ein….. \nblau….. Hemd. \nB. hier ist ein…… \nneu…… Schlafanzug \nC. ich kaufe ein…… \nblau…… Hemd. \nC. ich kaufe ein…… \nneu…… Schlafanzug \n6 die Stiefel sind grau 15 die Pantoffeln sind \nblau \nA. die grau….. Stiefel \nsind teuer…. \nA. die blau….. \nPantoffeln sind \nschön…. \nB. Hier sind grau….. \nStiefel. \nB. hier sind blau….. \nPantoffeln. \nC. Ich kaufe die \ngrau….. Stiefel. \nC. ich kaufe die \nblau….. Pantoffeln \n7 der Hut ist gelb 16 der Gürtel ist braun \nA. der gelb….. Hut ist \nschön…. \nA. der braun….. \nGürtel ist dünn….. \nB. hier ist ein…. \ngelb….. Hut \nB. hier ist ein….. \nbraun….. Gürtel \nC. ich kaufe ein….. \ngelb….. Hut \nC. ich kaufe ein…… \nbraun…… Gürtel \n8 die Bluse ist weiß 17 die Mütze ist rot \nA. die weiß….. Bluse \nist eng….. \nA. die rot….. Mütze \nist warm….. \nB. hier ist ein….. \nweiß….. Bluse \nB. hier ist ein….. \nrot…… Mütze \nC. ich kaufe ein….. \nweiß….. Bluse \nC. ich kaufe ein….. \nrot….. Mütze \n9 das Kleid ist violet 18 der Mantel ist \nschwarz \nA. das violett….. Kleid \nist modisch….. \nA. der schwarz…… \nMantel ist elegant…… \nB. hier ist ein…… \nmodisch……. Kleid \nB. hier ist ein….. \nschwarz…… Mantel \nC. Ich kaufe ein..... \nneu......Kleid \nC. Ich kaufe ein..... \nschwarz..... Mantel."
          },
          {
            "page": 63,
            "text": "12)Ergänzen Sie bitte:\n1. ein teu_____ (teuer) Kleid \n2. keine süß____ Schokolade \n3. mein best_____ Freund \n4. welch ein schön_____ Leben \n5. ihre lieblich______ Katzen \n6. ein solcher nett _____ Mann \n7. keine leicht____ Aufgaben \n8. unser neu_____ Haus \n9. was für ein hoh____ Gebäude \n10. ein sauber____ Zimmer \n11. so ein bunt____ Spielzeug \n12. deine bequem____ Schuhe \n13. kein schlecht____ Vater \n14. ihr elegant____ Rock \n15. eine kurz____ Geschichte \n16. was für eine rot____ Nase \n\n17. deine offen_____ Antwort \n18. euer dick____ Buch \n19. keine heilbar____ Krankheit \n20. was für ein schnell____ \nMotorrad \n21. so ein warm____ Mantel \n22. eine sau_____ (sauer) Zitrone \n23. was für ein schön____ Paar \n24. seine bös____ Nachbarn \n25. solch ein groß___ \nDurcheinander \n26. keine leer____ Tassen \n27. mein musikalisch____ Kind \n28. kein interessant____ Film \n29. ein heik_____ (heikel) Thema \n30. solch ein praktisch____ \nWerkzeug \n31. ein beschäftigt____ Rentner \n32. deine fleißig____ Töchter \n33. eine beruhigend____ Farbe"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 6",
        "title": "Adjektivdeklination II",
        "printedPageStart": 64,
        "printedPageEnd": 69,
        "sourcePages": [
          {
            "page": 64,
            "text": "13)Ergänzen Sie bitte: \n\nÜbe! II. Akkusativ \n1. Die Mutter hat ein..…. süß____ \nKuchen gebacken. \n2. Otto braucht kein…... neu____ \nTisch. \n3. Mein Vater liest dein…... \ninteressant____ Brief. \n4. Wir besuchen unser…… alt____ \nOma. \n5. Mein Sohn hat ein...... fein____ \nEis gegessen. \n6. Kennst du mein…… neu____ \nFreund? \n7. Er hat sein…… bequem____ \nSessel verkauft. \n8. Hört ihr ein…… schön____ Lied? \n9. Anna macht ihr..…. \nschwierig____ Hausaufgabe. \n10. Herr Schmidt holt ein…… \nfein____ Wein. \n11. Die Oma sucht ihr…… rund____ \nBrille. \n12. Ihr schaut ein..…. wertvoll____ \nGemälde an. \n13. Wir treffen sein…… klug____ \nVater. \n14. Lisa trägt mein…… dick____ \nPullover. \n15. Die Lehrerin hat ein…… \nlang____ Satz wiederholt. \n16. Ich zeichne ein..…. bunt____ \nBild. \n17. Wir laden unser…… lieb____ \nTante ein. \n18. Der Direktor hört ein…… \nbegabt______ Schauspieler an. \n19. Sie hat ein…… lecker____ Suppe \ngekocht. \n20. Brigitte hat ein…… kurz____ \nGedicht geschrieben. \n21. Er möchte kein…… teu____ \n(teuer) Auto. \n22. Wo finde ich ein…... gut____ \nRestaurant? \n23. Angelika heiratete ein…. \nreich____ Mann. \n24. Paul trank ein…… heiß____ Tee. \n25. Sie nimmt ein…… klein____ \nKoffer mit. \n26. Ich habe ein…… groß____ \nGeschenk bekommen. \n27. Ihr habt ein…… jung____ Hund. \n28. Geben Sie bitte mein…… \nblau____ Bluse zurück! \n29. Der Lehrer erklärt ein…… \nkompliziert____ Aufgabe. \n30. Ich habe mein……. lustig____ \nOnkel mitgebracht. \n31. Der Opernsänger singt ein…… \nbekannt____ Arie. \n32. Ich rufe ein…… fremd____ \nMechaniker an. \n33. Frau Bayer vermietet ein…... \nklein____ Zimmer."
          },
          {
            "page": 65,
            "text": "14)Was hat Ulrike in der Stadt gekauft? \ndie Hose / gestreift \nSie hat eine gestreifte Hose gekauft. \n1. der Rock / kurz \n_______________________________________________________________ \n2. das Kleid / geblümt \n_______________________________________________________________ \n3. die Weste / schwarz \n_______________________________________________________________ \n4. der Mantel / grau \n_______________________________________________________________ \n\n15)Ergänze die Adjektive \n1. Anja sieht immer sehr elegant aus. Sie trägt ein grau______ Kostüm, eine weiB____ Bluse \nund ein bunt_____ Halstuch. \n\n2. Auf dem Ladentisch liegen ein rot____ Pullover und eine gelb___ Hose. Ein rot____ \nPullover passt nicht zu einer gelb____ Hose. Oder? \n\n3. Ich habe ein kariert____ Hemd gekauft, aber jetzt bin ich ziemlich enttäuscht, weil es nicht \nzu meinem gestreift_____ Kostüm passt. \n\n4. Deine grün____ Jacke gefällt mir nicht. Sie ist zu kurz und passt nicht zu deinem \ngeblümt____ Kleid. \n\n16) Ergänze die Adjektive \n1. Gefunden: klein_____ grau_____ Katze (f). \n2. Gefunden: groß_____ schwarz_____ Hund (m). \n3. Ich habe blond_____ Haar (n) und grün_____ Augen (pl). \n4. Am Himmel gibt es weiß_____ Wolken (pl). \n5. In diesem Restaurant serviert man gut_____ französisch____Wein (m). \n6. Er hat einig_____ alt_____ Kassetten (pl) zu Hause. \n7. Zum Verkauf (=on sale): Frisch_____ Salat (m) und spanisch_____ Karotten (pl). \n\n8. Hast du meinen neu_____ Lehrer (m) getroffen? \n9. Ich komme aus einer klein_____ Stadt (f). \n10. Hast du die Frau mit dem grau_____ Hut (m) gesehen? \n11. Nach unseren lang_____ Vorlesungen (pl) sind wir immer müde. \n12. Wirst du dieser jung_____ Frau (f) bitte helfen (=dative verb)? \n13. Gestern bin ich durch den kühl_____ Wald (m) gelaufen. \n14. Welchen alt_____ Freund (m) hast du besucht?"
          },
          {
            "page": 66,
            "text": "15. Die Lehrerin hat jedem fleißig_____ Schüler (m) eine A gegeben. \n16. Ein nett_____ Mann (m) hat mir geholfen. \n17. Mein grün_____ Hemd (n) hängt dort. \n18. Unser alt_____ Großvater (m) wird heute 90. \n19. Ohne ein deutsch_____ Wörterbuch (n) ist das Leben schwer. \n20. Wir verkaufen unser alt_____ Haus (n). \n21. Sein alt_____ Vater (m) ist ein gut_____ Lehrer. \n22. Haben Sie Ihr schön_____ Bild (n) dabei? \n23. Das klein_____ Kind (n) sitzt auf dem Gras. \n24. Dieser alt_____ Mann (m) hat mit mir gesprochen. \n25. Ich habe keine alt_____ Frau (f) gesehen. \n26. Dieses klein_____ Café (n) ist sehr schön. \n27. Sie hat einen rot_____ Hut (m) gekauft. \n28. Im Zimmer habe ich laut_____ Musik gehört (f). \n29. Ich kann das ander_____ Buch (n) nicht finden. \n30. Ich habe dem klein_____ Kind (n) geholfen. \n31. Er denkt an sein warm_____ Bett (n). \n32. Ich habe viel_____ nett_____ Freunde (pl). \n33. Der klug_____ Arzt (m) hat mir geholfen. \n34. Bei schlecht_____ Wetter (n) bleibe ich zu Hause. \n35. Bei solchem gut_____ Wetter (n) sitzen wir draußen. \n36. Wo kann man hier frisch_____ Obst (n) kaufen? \n37. Kannst du mir mit dieser schwierig_____ Arbeit (f) helfen? \n38. Sie müssen die schmutzig_____ Autos (pl) waschen. \n39. Später möchte ich in einem groß_____ Haus (n) leben. \n40. Ein kaputt_____ Fernseher (m) ist in dem Zimmer. \n41. Die sauber_____ Straßen (pl) in dieser Stadt gefallen mir. \n42. Er schreibt den Brief mit freundlich_____ Grüßen (pl). \n43. Ich habe einen nett_____ Mitbewohner (m). \n44. Neu_____ Stifte (pl) schreiben besser. \n\n17)Ergänzen Sie bitte: \n1. Wo ist das neu_____ Sofa? \nWo ist mein_____ neu_____ Sofa? \n\n2. Wo ist der rot_____ Regenschirm? \nWo ist dein_____ rot_____ Regenschirm? \n\n3. Roberto hat ein_____ alt_____ Auto. \nRoberto hat ein_____ alt_____ Wagen. \n\n4. Wo liegt der schwarz_____ Mantel?"
          },
          {
            "page": 67,
            "text": "Wo liegt ihr_____ schwarz_____ Mantel? \n\n18)Ergänzen Sie bitte: \n1. Meine alt___ Uhr (f) funktioniert nicht mehr. \n2. Das ist sein letzt___ Brief (m). \n3. Hast du dieses toll___ Buch (n) gelesen? \n4. Wir fahren mit einem ander___ Schiff (n). \n5. Viel___ jung___ Menschen (pl) kommen aus klein___ Städten (pl). \n6. Ich helfe der nett___ alt___ Dame (f). \n7. Unsere neu___ Bücher (pl) sind schon da. \n8. Wollen Sie diesen braun___ Anzug (m)? \n9. Ich kaufe ein teuer___ Auto (n). \n10. Morgen bringe ich dir die ander___ Briefe (pl). \n11. Kommen Sie zu meinem neu___ Büro (n)! \n12. Das Buch hat einig___ gut___ Beispiele (pl). \n13. Wie schnell fährt der neu___ Zug (m)? \n\n19)Ergänzen Sie bitte: \nEs ist eine stürmisch___ (1) Nacht (f), und ich bin allein in meinem klein___ (2) Haus (n). Auf \neinmal höre ich einen laut___ (3) Krach (= bang, m) und alle die Lichter gehen aus. Es ist ein \nStromausfall (=power outage)! Ich finde eine gelb___ (4) Kerze (=candle, f), ich setze mich auf \ndas bequem___ (5) Sofa (n), und ich warte. \n\nNach einer Weile erkenne ich, dass eine komisch___ (6) Musik (f) aus dem ander___ Zimmer \n(n) kommt. Ich gehe mit meiner gelb___ (7) Kerze (f) in das ander___ (8) Zimmer (n). Dann \nsehe ich ihn -- einen Mann! Er ist ein klein___ (9) Mann (m) mit einem grün___ Hut (m) -- ein \nLeprechaun! Er hat eine sehr laut___ (10) Stimme (=voice, f). Ich renne auf ihn zu und will ihn \nfangen, aber er wirft ein groß___ (11) Buch (n) auf meinen Kopf, und ich falle zum Boden. \n\nDann wache ich auf, aber ich finde mich auf dem bequem___ (12) Sofa (n) wieder. “Ach!” \ndenke ich, “es war nur ein schlecht___ (13) Traum (=dream, m). Der klein___ (14) Mann (m) \nwar nur mein grün___ (15) Mantel (m), und die Musik war nur das offen___ (16) Fenster (n).” \nKomischerweise finde ich aber ein Buch auf dem Boden in meinem Schlafzimmer..."
          }
        ],
        "answerPages": [
          {
            "page": 68,
            "text": "Die Lösungen: \n\nÜbung 1 \n1 \n1) es 2) e 3) e 4) em 5) e 6) es 7) en 8) e 9) er 10) es 11) er 12) e 13) e 14) e 15) es 16) e \n2 \n1) e 2) e 3) e 4) e 5) e 6) e 7) e 8) e 9) er 10) es 11) en 12) e 13) en 14) e 15) e 16) e 17) e \n\nÜbung 2 \n1) e 2) e 3) e 4) en 5) e 6) e 7) e 8) e \n\nÜbung 3 \n1) - 2) er 3) er 4) - 5) - 6) e 7) e 8) es 9) en 10) en 11) e 12) e 13) en 14) - 15) es 16) en 17) en 18) e 19) e \n20) em 21) – 22) es 23) en \n\nÜbung 4 \n1) dickes - spannend 2) schöne 3) alte 4) groß 5) neuen – alter - Kaputt 6) teuer 7) schöne - lange 8) \nschweres 9) neue - hell - gemütlich \n\nÜbung 5 \n1) en - en 2) er 3) e 4) en - es 5) e – e 6) en - es 7) e - e 8) e 9) en 10) e – e \n\nÜbung 6 \n1) schöner - teuer 2) krank 3) alten - unbequem - hart 4) klein - praktisch 5) weiße – schwarze - graue \n6) braunen - schwarze 7) neue – kompetent - nett \n\nÜbung 7 \n1) d 2) b 3) c \n\nÜbung 8 \n1) e 2) en 3) en 4) en 5) e 6) en \n\nÜbung 9 \n1) e 2) en 3) e 4) e 5) e 6) e 7) e 8) e 9) e 10) e 11) en 12) e 13) en 14) e \n\nÜbung 10 \n1) moderner 2) schönes 3) das ist eine billige Hose 4) das ist ein teures Hemd 5) keine eleganten \nSchuhe \n\nÜbung 11 \n1) A. e - - B. - - er C. en - en 2) A. e - - B. - - er C. en - en 3) A. e - - B. - - er C. en - en 4) A. e - - B. e - e C. \ne – e 5) A. e - - B. - - es C. - - es 6) A. en - - B. e C. en 7) A. e - - B. - - er C. en - en 8) A. e - - B. e - e C. e – \ne 9) A. e - - B. - - es C. - - es 10) A. e - - B. - - er C. en - en 11) A. en - - B. e C. en 12) A. e - - B. e - e C. e – \ne 13) A. e - - B. - - es C. - - es 14) A. e - - B. - - er C. en - en 15) A. en - - B. e C. en 16) A. e - - B. - - er C. \nen - en 17) A. e - - B. e - e C. e – e 18) A. e - - B. - - er C. en - en"
          },
          {
            "page": 69,
            "text": "Übung 12 \n1) res 2) e 3) er 4) es 5) e 6) er 7) e 8) es 9) es 10) es 11) es 12) e 13) er 14) er 15) e 16) e 17) e 18) es \n19) e 20) es 21) er 22) saure 23) es 24) e 25) es 26) e 27) es 28) er 29) es 30) es 31) er 32) e 33) e \n\nÜbung 13 \n1) en - en 2) en - en 3) en - en 4) e – e 5) - - es 6) en - en 7) en - en 8) - - es 9) e - e 10) en - en 11) e - e \n12) - - es 13) en - en 14) en - en 15) en - en 16) - - es 17) e - e 18) en - en 19) e – e 20) - - es 21) - - teures \n22) - - gutes 23) en - en 24) en - en 25) en - en 26) - - es 27) en - en 28) e - e 29) e - e 30) en - en 31) e - \ne 32) en – en 33) - - es \n\nÜbung 14 \n1) Sie hat einen kurzen Rock gekauft. 2) Sie hat ein geblümtes Kleid gekauft. 3) Sie hat eine schwarze \nWeste gekauft. 4) Sie hat einen grauen Mantel gekauft. \n\nÜbung 15 \n1) es – e - es 2) er – e – er - e 3) es - en 4) e - es \n\nÜbung 16 \n1) e - e 2) er - er 3) es - e 4) e 5) en - en 6) e - e 7) er - e 8) en 9) en 10) en 11) en 12) en 13) en 14) en \n15) en 16) er 17) es 18) er 19) es 20) es 21) er- er 22) es 23) e 24) e 25) e 26) e 27) en 28) e 29) e 30) en \n31) es 32) e – e 33) e 34) em 35) em 36) es 37) en 38) en 39) en 40) es 41) en 42) en 43) en 44) e \n\nÜbung 17 \n1) e - - - es 2) e - - - er 3) - - es – en - en 4) e - - - er \n\nÜbung 18 \n1) e 2) er 3) e 4) en 5) e – e - en 6) en - en 7) en 8) en 9) teures 10) en 11) en 12) e - e 13) e \n\nÜbung 19 \n1) e 2) en 3) en 4) e 5) e 6) e 7) en 8) e 9) er 10) e 11) es 12) en 13) er 14) e 15) er 16) e"
          }
        ]
      },
      {
        "folge": "Folge 7",
        "title": "Komparation",
        "printedPageStart": 70,
        "printedPageEnd": 73,
        "sourcePages": [
          {
            "page": 70,
            "text": "Das Auto ist schnell. (Positiv) \nDer Zug ist schneller als das Auto. (Komperativ) \nDas Flugzeug ist am schnellsten. (Superlativ) \n\nUte ist klein. (Positiv) \nPetra ist kleiner. (Komperativ) \nLisa ist am kleinsten. (Superlativ) \n\nDie Schlange ist gefährlich. (Positiv) \nDas Krokodil ist gefährlicher als die Schlange. (Komperativ) \nDer Hai ist am gefährlichsten. (Superlativ) \n\nRegelmäßige Adjektive \n\nPositiv Komparativ Superlativ \nbillig billiger am billigsten \nreich reicher am reichsten \nhell heller am hellsten \nlangsam langsamer am langsamsten \n\nUnregelmäßige Adjektive \nPositiv Komparativ Superlativ \nalt älter am ältesten"
          },
          {
            "page": 71,
            "text": "arm ärmer am ärmsten \ngroß größer am größten \njung jünger am jüngsten \nkalt kälter am kältesten \nwarm wärmer am wärmsten \nschwach schwächer am schwächsten \nstark stärker am stärksten \nklug klüger am klügsten \ndumm dümmer am dümmsten \nkurz kürzer am kürzesten \nlang länger am längsten \n\ngut besser am besten \nhoch höher am höchsten \ngern lieber am liebsten \nviel / sehr mehr am meisten \nnah näher am nächsten \nteuer teurer am teuersten \ndunkel dunkler am dunkelsten \nsauer saurer am sauersten \n\nBeispiele: \n\nIn Ägypten ist es warm. \nIn Kuwait ist es wärmer."
          },
          {
            "page": 72,
            "text": "Diese Wohnung ist groß. \nDie andere ist größer. \n\nPetra findet den Frühling schön. \nIch finde den Sommer schöner. \nIch fahre gern ans Meer. \nIch fahre aber lieber in die Berge. \n\nPapier ist leichter als Metall. \nMeine Haare sind dunkler als deine Haare. \nDu fährst zu schnell. Fahr langsamer! \nDu isst zu viel. Iss weniger! \nDu sprichst zu laut. Sprich leiser! \nMeine liebe Frau, du bist unfreundlich zu mir. \nSei doch freundlicher! \nDas Kleid ist mir zu eng. Ich brauche es eine Nummer größer. \nJulia ist jünger als Lisa. \nHerr Klein verdient viel Geld. \nDer Chef verdient noch mehr. \n\n\n1-Bilden Sie den Komparativ. \n\nEin Motorrad ist teuer, aber dieses Auto hier ist teurer. \n\n1- Georg verdient viel, aber seine Schwester verdient……. \n2- Mein Hund ist lieb, aber Claudias Katze ist …… \n3- Alex spricht sehr gut Deutsch, aber seine Freundin spricht…….. \n4- Felix ist nicht so groβ. Jan ist…… \n5- Das Schloss Belvedere ist schön, aber Schloss Schönbrunn ist……. \n6- Der Sommer ist heiβ in Österreich, aber der Sommer in Australien ist…… \n7- Die Donau ist lang, aber ich glaube der Nil ist….. \n8- Frida läuft schnell, aber Silvia läuft……. \n\n2-Ergänzen Sie die Lücken mit dem Superlativ."
          },
          {
            "page": 73,
            "text": "Horrorfilme und Thrillers finde ich gut. Am besten finde ich Actionfilme. \n\n1- Saft und Tee trinke ich gern. Am ………… trinke ich Mineralwasser. \n2- Sandra kauft wenig Fleisch und Wurst. Am …….. kauft sie von den Süßigkeiten. \n3- Wir geben viel Geld für Lebensmittel aus. Am ………....Geld geben wir für die Miete aus. \n4- Eine Eigentumswohnung ist teuer, aber am ………………. ist ein Haus. \n5- Skifahren und Handball finde ich interessant, aber Tennis finde ich am………. \n\n3-Wie lautet die richtige Form? \nLivia trinkt lieber Kaffee als Tee, aber am liebsten trinkt sie Kakao. (gern) \n\n1- Im Frühling ist es ___________ als im Herbst, aber ___________________ ist es \nnatürlich im Sommer. (heiß) \n2- Susanne ist ___________ als ihre Schwester, aber Sarah ist ____________. (klein) \n3- Der neue Fall von Hercule Poirot ist viel ______________ als die anderen. (spannend) \n4- Äpfel schmecken________, aber Bananen schmecken ___________, und Ananas \nschmecken am _______________. (süß) \n5- Meine Kusine ist zwei Jahre ______________ als ich. (jung)"
          }
        ],
        "answerPages": [
          {
            "page": 73,
            "text": "Die Lösungen: \n\n1) 1. teurer 2. mehr 3. lieber 4. besser 5. größer 6. schöner 7. heißer 8. länger 9. Schneller \n2) 1. liebsten 2. wenigsten 3. meisten 4. teuersten 5. Interessantesten \n3) 1. heiß - heißesten 2. kleiner - kleinesten 3. spannender 4. süß - süßer -süßesten 5. jünger"
          }
        ]
      },
      {
        "folge": "Folge 8",
        "title": "Charakter und Eigenschaften I",
        "printedPageStart": 74,
        "printedPageEnd": 81,
        "sourcePages": [
          {
            "page": 74,
            "text": "008 - A2 - Charakter-Eigenschaften \nكيف تتحدث عن الصفات الشخصية للبشى \n\nnett \n= \nfreundlich \nلطيف \nودود \n\n\nunfreundlich \nkomisch \nblod \nغير ودود \nغريب الأطوار \nأحمق / \nسخيف \nhöflich مؤدب \n\nunhöflich غير مؤدب \n\nfleißig نشيط \n\nFaul كسول \n\nhumorvoll مرح humorlos كئيب \nkreativ مبدع \nunkreativ \nburokratisch \nنمط \nhilfsbereit شخص\nمتعاون \negoistisch \neigennützig \nأنان \n\nselbst bewußt \nشخص\nواثق من \nنفسه \nschüchtern – \nscheu خجول \n\nzuverlässig يعتمد\nعليه \nunzuverlässig لا يمكن\nالاعتماد عليه"
          },
          {
            "page": 75,
            "text": "ehrlich \naufrichtig \nأمير \n\nunehrlich خائن \n\nfriedlich مسالم \n\naggressive \nstreit \nعنيف \nصراع \n\nsympatisch شخص\nمري ح \nunsympatisch شخص غير\nمري ح \nglücklich - froh سعيد \nunglüklich \ntraurig \nحزين \nordentlich منظم \n\nunordentlich \nchaotisch \nغير منظم \nفوضوى \nintelligent \n= \nschlau \nذ \n\ndumm غب \n\ngeizig بخيل \n\ngroßzügig كريم \n\nnervös متوتر \n\nruhig هادى \n\nnachgiebig لير\nمطيع \n\nstur - \nhartnäckig عنيد"
          },
          {
            "page": 76,
            "text": "eifersüchtig غيور \n\ngleichgültig غير مبال \n\n\nÜbungen \nÜbung 1: Wählen Sie den richtigen Satz. \na) _ _ _ _ _ _ _ _ _ - faul – die Faulheit \nb) trauern - _ _ _ _ _ _ _- die Trauer \nc) helfen - _ _ _ _ _ _ _ _ _ _ _- d_ _ Hilfe. \nd) _ _ _ _ _ _ _ _ _ _ __ - die Eifersucht \ne) _ _ Arroganz-_ ____ __= eingeb_ _ _ _ \nf) _ _ _Großzügigkeit-_ _ _ _ _ _ _ _ _ \ng) bescheiden~ schü_ _ _ _ _ _ \nh) gesellig= soz_ _ _ _ _ \ni) lebhaft= m_ _ ter= leben_ _ _ \nj) nachtragend= rachsü_ _ _ ig \nk) _ _ _ _sam= g_ _ zig \nl) ambitiös= ehrgei_ _ _ \nm) lügnerisch= un_ _ _lich -> \nHypokrit= Heuchler \n1.Ich will nichts machen! \n2.Ich weine. \n3.Hier! Ein Geschenk für dich. \n4.Ich will viel erreichen! \n5.Ich sage die Wahrheit nicht. \n6.Ich bin belesen. \n7.Hmm...Ich frage mich...` \n8.Ich bin der Beste!! Ich kann es besser! \n9.Was kann ich für dich tun? \n10.Ich räume nur selten auf. \n11.Ich bin sehr unachtsam. Ich habe alle Gläser \nzerbrochen. \n12.Ich mache nur so, wie ich es will. \n13.Warum hat er mehr Geld als ich?"
          },
          {
            "page": 77,
            "text": "n) intelligent= _ _ _ g -> die _ _ _gheit= die \nIntelligenz \no) die Neugier- n_ _ _ _ _ _ _ _ \np) stur- die Stur_ _ _ _ \nq) flexibel= anp_ _ _ _ _ _ _ _ä_ _ _ \nr) sch_ _ _ pig= chaotisch -> _ _ _ \nUnordentlichkeit \ns) ungeschickt= tollpatschig= ungeübt \n\n\n14.Es gefällt mir, mit anderen Menschen in \nKontakt zu kommen. \n15.Ich habe Angst, mit anderen Personen zu \nsprechen. \n16. Ich bin froh. \n17. Ich gebe nur ganz wenig Geld aus. \n18. Ich kann nicht verzeihen. Ich räche mich an \nmeinen Feinden. \n19. Ich kann es auch anders machen. Es muss \nnicht alles so sein, wie ich mir schon vorgestellt \nhabe. \n\n\nÜbung 2: Lesen Sie die Aussagen und schreiben Sie das richtige Adjektiv \n1 \n\n\na b c d E F g H I J K l m n o p q r s \n\nIch esse gern und \nviel. Ich esse alles. Ich \nbin \n..................................."
          },
          {
            "page": 78,
            "text": "2 \n\n\n3 \n\n\n4 \n\n5 \n\n6 \n\nIch habe immer Angst. Alle \nsagen ich bin \n........................... \nBevor ich etwas mache, \ndenke ich lange. Ich \nhabe einen \n...................... \nCharakter. \nAlles irritiert mich. Ich \nbin .................. \nIch spreche nicht gern mit \nfremden Leuten. Ich bin \n............................ \nIch mache alle \nLeute lachen. Ich \nbin …………. \n........................."
          },
          {
            "page": 79,
            "text": "7 \n\n\n8 \n\n\n9 \n\n\n10 \n\n11 \n\n12 \n\n\nIch mag es nicht, wenn \nmein Mann mit einer \nanderen Frau \nspricht.Ich bin \n.............................. \nWenn ich mich verteidige, \nsagen die Leute ich bin \n.................................... \nIch kann meine \nProbleme nicht lösen. \nIch bin ......................... \nWenn mir jemand etwas \nschlechtes antut, verzeihe \nich nicht. Ich bin \n................................... \nIch will immer wissen, \nwas bei den Nachbarn \npassiert. Ich bin \n.................................... \n\nIch helfe gern. Ich bin \n.................................... \nneugierig – hilfsbereit – scheu – aggressiv - gierig – eifersüchtig – \nfeige – lustig – nervös - deprimiert – nachdenklich – rachesüchtig"
          },
          {
            "page": 80,
            "text": "Übung 3: Ergänzen Sie die Sätze. \n01. Wie ……………… du aus? \n02. Wie ……………… er aus? \n03. Sie sieht gut ……………. \n04. Er ………………. hübsch. \n05. …………….. groß bist du? \n06. Ich ……………… 1,74 Meter groß. \n07. Wie schwer …………………. du? \n08. Ich bin 64 Kilo …………………. \n09. Ich habe blonde, lange ……………. \n10. Er hat ………………… Bart. \n11. Wie ………….. deine/seine/ihre Augenfarbe? \n12. Er …………….. blaue Augen. \n13. Ich …………. eine Brille. \n14. Meine Freundin ………………. immer bequeme Klamotten. \n15. Ich ………………… , er ist sehr nett. \n16. Ich mag Lars. Ich finde ………………. sehr sympathisch. \n17. Ich mache gern Sport. Ich bin sehr ……………. \n18. Er macht nicht gern Sport. Er ist sehr ……………... \n19. Ich ……………. dich sehr nett. \n20. Wie ………………. du sie?"
          }
        ],
        "answerPages": [
          {
            "page": 80,
            "text": "Die Lösungen: \nÜbung 1: \na) 1 b) 2 c) 9 d) 15 e) 8 f) 3 g) 16 h) 14 i) 4 j) 18 k) 17 l) 12 m) 5 n)19 o) 13 p) 12 q) 19 \nr)10 s)11 \nÜbung 2:"
          },
          {
            "page": 81,
            "text": "1) gierig 2) feige 3) nachdenklichen 4) nervös 5) scheu 6) lustig 7) eifersüchtig 8) aggressiv 9) \ndeprimiert 10) rachesüchtig 11) neugierig 12) hilfsbereit \nÜbung 3: \n1) siehst 2) sieht 3) aus 4) ist 5) wie 6) bin 7) bist 8) schwer 9) Haare 10) einen 11) ist 12) hat 13) habe \n14) trägt 15) finde 16) ihn 17) sportlich 18) unsportlich 19) finde 20) findest"
          }
        ]
      },
      {
        "folge": "Folge 9",
        "title": "Charakter und Eigenschaften II",
        "printedPageStart": 82,
        "printedPageEnd": 86,
        "sourcePages": [
          {
            "page": 82,
            "text": "Folge: 009 – A2 – Die Eigenschaften"
          },
          {
            "page": 83,
            "text": "sachlich موضوع \n\nunsachlich \nemotional \nغير\nموضوع \nعاطق \nentschlossen عازم \n\nunentschlossen غير عازم \n\nimpulsiv مندفع \n\nbesonnen \ngelassen \nرازين \nهادى \nمستقل \n\nehrgeizig طموح \n\nfaul \nantriebslos \n\nعديم\nالرغبة \nوالدافع \n\nfrech \nunverschämt \ntaktlos \nوقح \nمعندوش \nذوق \n\ngeduldig صبور \n\nungeduldig غير صبور \n\nkontaktfreudig اجتماع \n\n\ntolerant متسامح"
          },
          {
            "page": 84,
            "text": "Beispiele: \n\n• Ich mag ehrliche Menschen \n• Aber ich mag keine unzuverlässigen Menschen \n• Ich wünsche mir tolerante Menschen \n• Ich schätze ………………….. \n• Ich respektiere ………………………. \n• Mir gefallen ehrliche Menschen \n\n➢ weil …………………. \n➢ denn …………………. \n\nÜbungen \n\nÜbung 1: Rekonstruieren Sie die Adjektive. \n1. gent – tel – in – li \n2. sichts – rück – los \n3. sig – un – läs – ver – zu \n4. kon – dig – freu – takt \n5. voll – ständ – ver – nis \n6. dig – dul – ge \n7. te – tisch – ma – sys \n8. täts – li – wusst – rea – be \nausgeglichen متوازن \n\n\nvorsichtig حريص \nmutig شجاع \n\nängstlich \nfeige \n\nخائف \nجبان"
          },
          {
            "page": 85,
            "text": "9. ma – lo – tisch – dip \n10. tig – fer – ei – süch \n\nÜbung 2: Beschreiben Sie das Bild \n\n_________________ \n\n\n________________ \n\n\n________________ \n\n_______________ \n\n\n_________________ \n\n_________________ \n\n_________________ \n\n_________________ \n\n__________________ \n\n___________________ \n\n\nÜbung 3: Wie heißt das Gegenteil? Wählen Sie aus. \nalte aufgeregte dicke dunkelhaarige fleißige hässliche interessantes \nkluger pessimistischer trauriges unfreundlicher unzufriedenes \n\n1. ein zufriedener Junge ein …………………. Mädchen \n2. ein neues Haus eine …………………. Wohnung"
          },
          {
            "page": 86,
            "text": "3. eine optimistische Frau ein …………………. Mann \n4. eine dumme Sekretärin ein …………………. Sekretär \n5. ein langweiliger Film ein …………………. Buch \n6. ein lustiges Ereignis ein …………………. Ereignis \n7. ein fauler Schüler eine ………………….. Schülerin \n8. ein schönes Gemälde eine …………………. Statue \n9. ein schlanker Herr eine …………………. Dame \n10. eine nette Kollegin ein …………………. Kollege \n11. ein blonder Student eine …………………. Studentin \n12. ein ruhiger Chef eine …………………. Chefin"
          }
        ],
        "answerPages": [
          {
            "page": 86,
            "text": "Die Lösungen \n\nÜbung 1 \n\n1) intelligent 2) rücksichtslos 3) unzuverlässig 4) kontaktfreudig 5) verständnisvoll 6) geduldig 7) \nsystematisch 8) realitätsbewusst 9) diplomatisch 10) Eifersüchtig \n\nÜbung 2 \n\n1) schön 2) hässlich 3) freundlich 4) unfreundlich 5) dick 6) dünn 7) sportlich 8) unsportlich 9) alt 10) jung \n\nÜbung 3 \n\n1) unzufriedenes 2) alte 3) pessimistischer 4) kluger 5) interessantes 6) trauriges 7) fleißige 8) hässliche \n9) dicke 10) unfreundlicher 11) dunkelhaarige 12) aufgeregte"
          }
        ]
      },
      {
        "folge": "Folge 10",
        "title": "Aussehen beschreiben I",
        "printedPageStart": 87,
        "printedPageEnd": 94,
        "sourcePages": [
          {
            "page": 87,
            "text": "Folge: 010/11/12- A2 - Charakter-Eigenschaften \nDeutsch Englisch Arabisch Deutsch Englisch Arabisch \nnett nice لطيف boshaft malicious خبيث\nحقود \nfreundlich friendly ودود aggressiv aggressive عدوان \nhöflich polite مهذب unhöflich impolite/rude وقح \npünktlich on time محافظ ع\nالمواعيد / \nمنضبط \nunpünktlich unpunctual غير محافظ \nعلى المواعيد \n/ غير \nمنضبط \nhumorvoll humorous فكه humorlos humourless عديم الفكاهة \nfleißig hard-working مجتهد faul lazy كسول \ngläubig religious/faithful مؤمن ungläubig irreligious كافر \nkreativ creative مبدع unkreativ uncreative غير مبدع \nhilfsbereit helpful مفيد gefährlich dangerous خطير \naltruistisch altruistic إثاري egoistisch selfish أنان \nselbstbewusst self-confident الوع الذان schüchtern Shy خجول \nzuverlässig reliable جدير بالثقة unzuverlässig unreliable غير جدير \nبالثقة \nehrlich honest صادق unehrlich dishonest غير أمير \nsympathisch sympathetic متعاطف unsympathisch unsympathetic غير متعاطف \nintelligent klug ذك dumm stupid غب \nfriedlich peaceful سلم\nمحب للسلام \ngewalttätig violent عنيف \nglücklich happy سعيد deprimiert depressed مكتئب \nbegeistert excited متحمس gelangweilt bored يشعر بالملل"
          },
          {
            "page": 88,
            "text": "Ruhig calm هادئ wütend angry غضبان \nfroh/fröhlich cheerful مبتهج\nمسرور \ntraurig sad حزين \ngemütlich cozy مري ح ungemütlich awkward غير مري ح \nlustig funny مرح griesgrämig grouchy عابس \nernst serious جاد komisch comic مضحك \nrisikofreudig venturesome مخاطر ängstlich scared خائف / حذر \nordentlich neat مُنظم unordentlich messy فوضوي \ngut good طيب böse evil شرير \nkonservativ conservative محافظ progressiv progressive غير محافظ \nتقدم \ngerecht fair عادل ungerecht unfair ظالم \nmutig brave شجاع feige coward جبان \nbegabt gifted موهوب unbegabt ungifted غير موهوب \nnachgiebig indulgent مطيع\nمتساهل \nstur stubborn عنيد/ \nمتعنت \ngroßzügig generous كريم / سخ geizig stingy بخيل \nromantisch romantic رومانس unromantisch unromantic غير رومانس \ninteressiert interested مهتم desinteressiert uninterested غير مهتم \nغير مبال \ngelassen serene هادئ / رزين nervös nervous عصب\nمتي فز \naufgeschlossen open-minded منفتح eifersüchtig jealous غيور \nbescheiden modest متواضع hochnäsig snooty متكي\nمتعجرف \nunbesorgt unworried غير قلق besorgt worried قَلِق"
          },
          {
            "page": 89,
            "text": "überrascht surprised مندهش vorbereitet prepared مستعد\nمتأهب \n\nAussehen-Eigenschaften \nDeutsch Englisch Arabisch Deutsch Englisch Arabisch \nalt aged كبير السن jung Young شاب \ndick thick سمير / بدين dünn thin نحيف \nhübsch pretty جميل hässlich ugly قبيح \nblond blond أشقر attraktiv attractive جذاب \nelegant schick أنيق schön beautiful جميل \nschlank slim رشيق\nممشوق \nالقوام \nsportlich athletic رياض \nklein small صغير groß big / old كبير الحجم \n\nKleidung-Eigenschaften \nDeutsch Englisch Arabisch Deutsch Englisch Arabisch \ndunkel dark غامق / داكن hell light فاتح \nteuer expensive غال billig cheap رخيص \nkurz short قصير lang long طويل \nneu new جديد alt pld قديم \nmodern modern حديث\nعصري \naltmodisch fashioned طراز قديم \nrot red أحمر braun brown بب \n\nHaare-Eigenschaften"
          },
          {
            "page": 90,
            "text": "Deutsch Englisch Arabisch Deutsch Englisch Arabisch \ndunkel dark غامق / داكن schwarzhaarig black-haired الشعر الأسود \nkurz short قصير langhaarig long haired طويل الشعر \nhell light فاتح blond blond أشقر \nrot red أحمر braun brown بب \nlang long طويل dicht thick سميك \nfein fine ناعم kräftig strong قوي \nkraus Kinky مجعد lockig curly الشعر الكيرل \n\netwas بعض السر ء nur / bloß فقط \nein bisschen قليلً mehr أكي \nüber أزيد من viel كثيرًا من \nfast تقريبًا genau بالضبط \netwa حوال ungefähr حوال / تقريبًا / قرابة \n\nBeispiele \nWie sieht Muhammed Salah aus? \nMuhammed Salah ist groß und schlank. Er \nist etwa 28 Jahre alt. Er hat schwarze Haare \nund hellbraune Haut. \n\nWie finden Sie Muhammed Salah? \nMuhammed Salah sieht schön, elegant und \nsportlich aus, finde ich. Ich glaube auch, er \nist begabt und nett."
          },
          {
            "page": 91,
            "text": "Wie sieht Muhammad Ali Clay aus? \nMuhammad Ali Clay sieht groß und kräftig \naus. Er hat schwarze Haare und dukele \nHaut. \n\nWie finden Sie Muhammad Ali Clay? \nMuhammad Ali Clay ist sportlich und \nbegabt. \n\n\nWie sieht Willard Smith aus? \nWillard Smith sieht groß und elegant aus. Er \nhat schwarze Haare und dunkele Haut. \n\nWie finden Sie Willard Smith? \nWillard Smith ist humorvoll und begabt. \n\nWie sieht Cristiano Ronaldo aus? \nCristiano Ronaldo sieht groß und schlank \naus. Er hat schwarze Haare und weiße Haut. \n\nWie finden Sie Cristiano Ronaldo? \nCristiano Ronaldo ist selbstbewusst und \nbegabt."
          },
          {
            "page": 92,
            "text": "Wie sieht Angela Merkel aus? \nAngela Merkel sieht groß und ein bisschen \ndick aus. Sie hat blonde Haare und weiße \nHaut. \n\nWie finden Sie Cristiano Ronaldo? \nAngela Merkel ist selbstbewusst und \nzuverlässig. \n\n\nLesen Sie! Dann antworten Sie die Frage! \n\nPerson 1 \nAlso, ich bin Clown von Beruf und 62 Jahre alt. Sehr groß bin ich nicht: 1 Meter 60. Aber ich \nbin ziemlich schlank: Ich wiege nur 61 Kilo. \nPerson 2 \nMein Beruf ist Koch. Das mache ich schon seit 10 Jahren. Ich koche und esse aber immer noch \ngern. Deshalb muss ich auf mein Gewicht aufpassen. Vor drei Jahren hatte ich über 80 Kilo, \naber jetzt wiege ich 75 Kilo bei einer Größe von 1 Meter 76. Letzte Woche hatte ich \nGeburtstag, da bin ich 29 Jahre alt geworden. \nPerson 3"
          },
          {
            "page": 93,
            "text": "Nach meinem Examen an der Universität Tübingen bin ich Pfarrer geworden. Jetzt bin ich 42. \nIch bin 1 Meter 82 groß, aber ich wiege nur 69 Kilo. Ich kann essen, was ich will, ich werde \nnicht dicker - Gott sei Dank! \nPerson 4 \nIch möchte gern schlanker sein, denn ich wiege 67 Kilo und bin 1 Meter 65 groß. Aber ich esse \nsehr gern, und in meinem Beruf als Sekretärin muss ich den ganzen Tag sitzen. Ich bin 45 Jahre \nalt, aber ich glaube, ich sehe älter aus. \nPerson 5 \nIch muss mein Gewicht ständig kontrollieren. Zurzeit wiege ich 56 Kilo. Schlank sein ist für \nmeinen Beruf wichtig. Ich bin nämlich Fotomodell. Seit zwölf Jahren mache ich diesen Job. \nJetzt bin ich 32. \nPerson 6 \nIch bin Verkäuferin und arbeite seit zwei Jahren in einem großen Kaufhaus. Ich bin 22 Jahre \nalt. Ich bin 1 Meter 60 groß und wiege etwa 52 Kilo. \n(1) Was glauben Sie: Wer ist wer? Diskutieren Sie Ihre Lösung im Kurs. \nSehen Sie die drei Bilder eine Minute lang genau an. Dann antworten Sie. \n\n\n(2) Hier sehen Sie Teile der Gesichter. Was gehört zu Bild A, was zu Bild B und was zu Bild C? \n\nrund ____________ \n\ngroß ____________ \n\ngroß ____________ \n\nblau ____________"
          },
          {
            "page": 94,
            "text": "oval ____________ \n\nklein ____________ \n\nklein ____________ \n\nbraun ____________ \n\nschmal \n____________ \n\nlang ____________ \n\nschmal \n____________ \n\nschwarz \n____________ \n\nFamilienbilder \nWas hat der Sohn vom Vater, was hat er \nvon der Mutter? \nDen langen Hals und den großen Mund \nhat er von der Mutter. \nDie große Nase hat er vom Vater. \nDas schmale Gesicht hat er von der \nMutter. Die kurzen Beine und die dünnen \nArme hat er vom Vater. \n\n\n(3) Was haben die Kinder hier von Vater und Mutter?"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 11",
        "title": "Aussehen beschreiben II",
        "printedPageStart": 95,
        "printedPageEnd": 99,
        "sourcePages": [
          {
            "page": 95,
            "text": "Der neue Freund \na) Lesen Sie! Und dann antworten Sie die Fragen! \nAnne: Du, Helga hat einen neuen Freund. Sie sagt, er ist einfach fantastisch. Ein wunderbarer \nMann - groß und schlank, sehr attraktiv. \nEva: Attraktiv, ach ja? \nAnne: Ja, und so nett, immer ruhig und freundlich. \nEva: So, so. Ruhig und freundlich ist er. \nAnne: Ja. Und Helga sagt, er ist sehr intelligent. Er weiß einfach alles. \nEva: So? Anne: Ja. Und elegant ist er auch. Immer gut angezogen. \nEva: Elegant ist er? Interessant. \nAnne: Jaja. Und sehr sportlich, sagt Helga \nEva: Jetzt sag ich dir mal was: Dieser Supermann ist klein und dick, und Sport hat er noch nie \ngemocht! \nAnne: Was? \nEva: Ja - und außerdem ist er meistens unfreundlich und nervös! \nAnne: Was? \nEva: Ja. Und intelligent ist er auch nicht. Im Gegenteil, ich finde, er ist ziemlich \ndumm. \nAnne: Oh! \nEva: Und elegant soll er sein? Ich habe ihn nur in alten Hosen gesehen. \nAnne: Ja, warum - ich meine, woher kennst du ihn denn? \nEva: Wir waren fünf Jahre verheiratet. \n\n(4) Was ist richtig? \na) Der neue Freund von Helga"
          },
          {
            "page": 96,
            "text": " war Evas Ehemann. \n war Evas Freund. \n ist Evas Freund. \nb) Was sagen Anne und Eva? \nUnterstreichen Sie die richtigen Adjektive. \nAnne sagt: \nDer neue Freund von Helga ist... \nsehr dumm/attraktiv/nett/unsportlich/ ruhig/freundlich. \nEva sagt: \nEr ist... \nintelligent/groß/dick/klein/nervös/ elegant/sportlich."
          }
        ],
        "answerPages": [
          {
            "page": 96,
            "text": "Die Lösungen \nÜbung 1 \n1) Peter 2) Klaus 3) Hans 4) Uta 5) Brigitte 6) Eva \nÜbung 2 \nrundes Gesicht / Bild C; ovales Gesicht / Bild B; schmales Gesicht/Bild A große Nase / Bild C; kleine \nNase / Bild B; lange Nase / Bild A großer Mund / Bild B; kleiner Mund / Bild C; schmaler Mund / Bild A \nblaue Augen/Bild B; braune Augen/Bild A; schwarze Augen /Bild C \n\nÜbung 3 \nBild links vom Vater: die roten Haare, die kleinen Ohren, die langen Beine, die großen Füße von der \nMutter: die grünen Augen, den kurzen Hals, die langen/schmalen Finger/ die großen Hände, den \nkleinen Mund \nBild Mitte vom Vater: die gelben/blonden Haare, die lange Nase, die großen Hände / die langen \nFinger, die großen Ohren von der Mutter: den großen Mund, die blauen Augen, die kurzen Beine, den \nlangen Hals \nBild rechts vom Vater: die dicke/große Nase, die braunen Augen, die langen Zähne, die dicken/ großen \nHände, den schmalen Mund von der Mutter: die schwarzen Haare, die kleinen Ohren, die großen Füße, \ndie dicken Arme \nÜbung 4 \na) war Evas Ehemann b) Anne sagt: Der neue Freund von Helga ist attraktiv, nett, ruhig und freundlich \nEva sagt: Er ist klein, dick, nervös."
          },
          {
            "page": 97,
            "text": "Übungen \n(1) Was findet man bei einem Menschen normalerweise positiv, was negativ? \nnett lustig sympathisch dumm intelligent \nfreundlich langweilig unsympathisch hässlich \nattraktiv ruhig hübsch schön schlank dick \nkomisch nervös gemütlich unfreundlich \npositiv negativ \n\n\n(2) Was passt nicht? \na) nett - freundlich - sympathisch - hübsch \nb) schlank - intelligent - groß - blond \nc) alt - dick - dünn - schlank \nd) blond - langhaarig - attraktiv - schwarzhaarig \ne) hässlich - hübsch - schön - attraktiv \nf) nervös - ruhig - gemütlich - jung \ng) nett - komisch - unsympathisch - unfreundlich \n\n(3) Finden\" oder „aussehen\" oder „sein\"? Was passt? \na) Jens ___________ ich langweilig \n___________. \nb) Vera ___________ sympathisch \n___________. \nc) Anna ___________ blond ___________. \nd) Gerd ___________ ich attraktiv \n___________. \ne) Ute ___________ intelligent ___________. \nf) Paul ___________ 30 Jahre alt ___________. \ng) Vera ___________ 1 Meter 64 groß \n___________. \nh) Gerd ___________ traurig ___________. \ni) Paul ___________ ich hässlich ___________. \n\n(4) Was passt? Ergänzen Sie?"
          },
          {
            "page": 98,
            "text": "a) Karin ist ________________ größer als Renate. \nb) Karin ist ________________ 10 Zentimeter kleiner als Nadine. \nc) Sonja ist ________________ 2 Zentimeter größer als Nadine. \nd) Christa ist _________________ größer als Nadine. \ne) Nadine ist _________________ als 10 Zentimeter größer als Karin. \nf) Nadine ist ________________ 10 Zentimeter größer als Karin. \ng) Christa ist ________________ 30 Zentimeter größer als Renate. \nh) Christa ist ________________ 14 Zentimeter größer als Sonja. \n\n(5) Was ist typisch für...? \na) Arnold Schwarzenegger \nArme: stark ________________________ \nSchultern: breit ________________________ \nAugen: schmal ________________________ \nFigur: attraktiv ________________________ \nb) Danny de Vito \nBeine: kurz die kurzen Beine_______ \nBauch: dick der______________________ \nGesicht: rund ________________________ \nHände: klein ________________________"
          },
          {
            "page": 99,
            "text": "c) Naomi Campbell \nBeine: lang ________________________ \nHaut: braun ________________________ \nMund: groß ________________________ \nFigur: schlank ________________________ \n\nd) Harry Potter \nBrille: rund ________________________ \nNase: klein ________________________ \nHaare: schwarz ________________________ \nKopf: klug ________________________ \n\n\n(6) Was passt nicht? \na) Gesicht: schmal - rund - stark - breit \nb) Augen: groß - klein - schmal - schlank \nc) Nase: rund - lang - breit - kurz - dick - klein \nd) Beine: lang - dünn - schlank - groß - dick - kurz \ne) Mensch: groß - kurz - klein - schlank - dünn - dick \n(7) Beschreiben Sie die Personen."
          }
        ]
      },
      {
        "folge": "Folge 12",
        "title": "Fotobeschreibung",
        "printedPageStart": 100,
        "printedPageEnd": 102,
        "sourcePages": [
          {
            "page": 100,
            "text": "a) Er hat einen dicken Bauch. \n_________________________ Beine. \n_________________________ Füße. \n_________________________ Haare. \n_________________________ Brille. \n_________________________ Gesicht \n_________________________ Nase. \n_________________________ Mund. \nb) Sein Bauch ist dich. \nSeine Beine sind \n_________________________ \nSeine Füße sind \n_________________________ \nSeine Haare sind \n_________________________ \nSeine Brille ist \n_________________________ \nSein Gesicht ist \n_________________________ \nSeine Nase ist \n_________________________ \nSein Mund ist \n_________________________"
          },
          {
            "page": 101,
            "text": "c) Sie hat ______________________ Haare. \n_________________________________ \nNase. \n_________________________________ \nMund. \n_________________________________ \nBeine. \n_________________________________ \nGesicht \n_________________________________ \nFüße. \n_________________________________ \nHals. \n\nd) Ihre Ohren sind \n_________________________ \nIhre Haare sind \n_________________________ \nIhre Nase ist \n_________________________ \nIhr Mund ist \n_________________________ \nIhre Beine sind \n_________________________ \nIhr Gesicht ist \n_________________________"
          },
          {
            "page": 102,
            "text": "Ihre Füße sind \n_________________________ \nIhr Hals ist \n_________________________"
          }
        ],
        "answerPages": [
          {
            "page": 102,
            "text": "Die Lösungen: \nÜbung 1 \npositiv: nett, lustig, sympathisch, intelligent, freundlich, attraktiv, ruhig, hübsch, schön, schlank, \ngemütlich \nnegativ: dumm, langweilig, unsympathisch, hässlich, dick, komisch, nervös, unfreundlich \nÜbung 2 \na) hübsch b) intelligent c) alt d) attraktiv e) hässlich f) jung g) nett \nÜbung 3 \na) finde - b) ist.-/ sieht aus c) ist - d) finde. - e) ist .-/ sieht aus f) ist. g) ist :- h) ist .-/ sieht aus i) finde \nÜbung 4 \na) ein bisschen/etwas b) über (etwa/ungefähr) c) nur/bloß (genau) d) viel e) mehr f) über g) fast h) \ngenau \nÜbung 5 \na) die starken Arme die breiten Schultern die schmalen Augen die attraktive Figur b) der dicke Bauch \ndas runde Gesicht die kleinen Hände. die braune Haut c) die langen Beine die braune Haut. der große \nMund die schlanke Figur d) die runde Brille die kleine Nase - die schwarzen Haare . der kluge Kopf \nÜbung 6 \na) stark b) schlank c) rund d) groß e) kurz \nÜbung 7 \n14. a)... einen dicken Bauch. ... kurze Beine.... große Füße. ... kurze Haare.... eine runde Brille. ... ein \nschmales Gesicht. ... eine lange (große) Nase. ... einen kleinen Mund. \nb) Sein Bauch ist dick. ... kurz.. groß.... kurz. ... rund. ... schmal. ... lang (groß). ... klein. \nc) lange Haare. ... eine kleine Nase. ... einen schmalen Mund. ... lange Beine. ... ein rundes Gesicht. ... \nkleine Füße. ... einen dicken Hals. \nd) Ihre Ohren sind groß. ... lang. ... klein. ... schmal. ... lang.... rund. ... klein. ... dick."
          }
        ]
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "hilfsbereit",
          "wenigsten",
          "es",
          "4"
        ],
        "answer": "es"
      },
      {
        "id": "q-2",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 1 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "en - en",
          "ist -",
          "er - e"
        ],
        "answer": "es"
      },
      {
        "id": "q-3",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 1 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "er - er",
          "e",
          "es",
          "en"
        ],
        "answer": "e"
      },
      {
        "id": "q-4",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 1 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en",
          "er",
          "13",
          "e"
        ],
        "answer": "e"
      },
      {
        "id": "q-5",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 1 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "hässlich",
          "en",
          "Eva"
        ],
        "answer": "e"
      },
      {
        "id": "q-6",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 1 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en - en",
          "en",
          "e",
          "gierig"
        ],
        "answer": "en"
      },
      {
        "id": "q-7",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 2 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "hat",
          "er - er",
          "wenigsten"
        ],
        "answer": "e"
      },
      {
        "id": "q-8",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en - en",
          "finde",
          "schöne",
          "-"
        ],
        "answer": "-"
      },
      {
        "id": "q-9",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 3 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "schöner - teuer",
          "eifersüchtig",
          "unzufriedenes"
        ],
        "answer": "e"
      },
      {
        "id": "q-10",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 3 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "hat",
          "e",
          "en",
          "stark"
        ],
        "answer": "en"
      },
      {
        "id": "q-11",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 3 · item 18",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "hilfsbereit",
          "es",
          "mehr"
        ],
        "answer": "e"
      },
      {
        "id": "q-12",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 4 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "schöne - lange",
          "eifersüchtig",
          "schöne",
          "- - teures"
        ],
        "answer": "schöne"
      },
      {
        "id": "q-13",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 4 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en",
          "schöne - lange",
          "e",
          "er"
        ],
        "answer": "schöne - lange"
      },
      {
        "id": "q-14",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 5 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en - en",
          "er",
          "e – e",
          "unzufriedenes"
        ],
        "answer": "e – e"
      },
      {
        "id": "q-15",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 6 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en - en",
          "en",
          "schöner - teuer",
          "e"
        ],
        "answer": "schöner - teuer"
      },
      {
        "id": "q-16",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 7 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Sie hat einen kurzen Rock gekauft",
          "er - er",
          "hässlich",
          "d"
        ],
        "answer": "d"
      },
      {
        "id": "q-17",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 8 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "er - er",
          "Sie hat einen kurzen Rock gekauft",
          "es"
        ],
        "answer": "e"
      },
      {
        "id": "q-18",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 9 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en",
          "e",
          "mehr",
          "gierig"
        ],
        "answer": "e"
      },
      {
        "id": "q-19",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 9 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "schöne - lange",
          "er",
          "en",
          "es"
        ],
        "answer": "en"
      },
      {
        "id": "q-20",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 10 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das ist eine billige Hose",
          "er",
          "e",
          "em"
        ],
        "answer": "das ist eine billige Hose"
      },
      {
        "id": "q-21",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 11 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "A. en - - B. e C. en",
          "-",
          "mehr"
        ],
        "answer": "A. en - - B. e C. en"
      },
      {
        "id": "q-22",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 11 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A. e - - B. - - es C. - - es",
          "e",
          "eifersüchtig",
          "das ist eine billige Hose"
        ],
        "answer": "A. e - - B. - - es C. - - es"
      },
      {
        "id": "q-23",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 12 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en",
          "d",
          "A. en - - B. e C. en",
          "er"
        ],
        "answer": "er"
      },
      {
        "id": "q-24",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 12 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "d",
          "es",
          "stark",
          "wenigsten"
        ],
        "answer": "es"
      },
      {
        "id": "q-25",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 12 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "hat",
          "Eva",
          "das ist eine billige Hose",
          "er"
        ],
        "answer": "er"
      },
      {
        "id": "q-26",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 12 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A. e - - B. - - es C. - - es",
          "wenigsten",
          "e",
          "es"
        ],
        "answer": "es"
      },
      {
        "id": "q-27",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 12 · item 25",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "dick",
          "Sie hat einen kurzen Rock gekauft",
          "e"
        ],
        "answer": "es"
      },
      {
        "id": "q-28",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 12 · item 31",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "d",
          "er",
          "bin",
          "gierig"
        ],
        "answer": "er"
      },
      {
        "id": "q-29",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 13 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "sportlich",
          "- - teures",
          "e – e"
        ],
        "answer": "e – e"
      },
      {
        "id": "q-30",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 13 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en - en",
          "ist -",
          "e – e",
          "es"
        ],
        "answer": "en - en"
      },
      {
        "id": "q-31",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 13 · item 16",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "-",
          "- - es",
          "bin",
          "er"
        ],
        "answer": "- - es"
      },
      {
        "id": "q-32",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 13 · item 21",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "er - er",
          "en - en",
          "- - teures"
        ],
        "answer": "- - teures"
      },
      {
        "id": "q-33",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 13 · item 27",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A. e - - B. - - es C. - - es",
          "en - en",
          "dick",
          "schöne - lange"
        ],
        "answer": "en - en"
      },
      {
        "id": "q-34",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 14 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "13",
          "Sie hat einen kurzen Rock gekauft",
          "en - en",
          "en"
        ],
        "answer": "Sie hat einen kurzen Rock gekauft"
      },
      {
        "id": "q-35",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "- - teures",
          "es",
          "- - es – en - en",
          "er - er"
        ],
        "answer": "er - er"
      },
      {
        "id": "q-36",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "er - e",
          "e",
          "er",
          "en"
        ],
        "answer": "er - e"
      },
      {
        "id": "q-37",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sportlich",
          "er - er",
          "-",
          "en"
        ],
        "answer": "en"
      },
      {
        "id": "q-38",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "en - en",
          "unzuverlässig",
          "sportlich"
        ],
        "answer": "es"
      },
      {
        "id": "q-39",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 24",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "e – e",
          "e",
          "eifersüchtig"
        ],
        "answer": "e"
      },
      {
        "id": "q-40",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 30",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unzufriedenes",
          "unzuverlässig",
          "e - e",
          "en"
        ],
        "answer": "en"
      },
      {
        "id": "q-41",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 35",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A. en - - B. e C. en",
          "em",
          "e",
          "er - er"
        ],
        "answer": "em"
      },
      {
        "id": "q-42",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 16 · item 41",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das ist eine billige Hose",
          "-",
          "en",
          "en - en"
        ],
        "answer": "en"
      },
      {
        "id": "q-43",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 17 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "- - es – en - en",
          "es",
          "-",
          "bin"
        ],
        "answer": "- - es – en - en"
      },
      {
        "id": "q-44",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 18 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e – e",
          "bin",
          "en - en",
          "e"
        ],
        "answer": "en - en"
      },
      {
        "id": "q-45",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 18 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sportlich",
          "Peter",
          "e - e",
          "hilfsbereit"
        ],
        "answer": "e - e"
      },
      {
        "id": "q-46",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 19 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "schöner",
          "e",
          "hat"
        ],
        "answer": "e"
      },
      {
        "id": "q-47",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 19 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "fleißige",
          "es",
          "e",
          "e - e"
        ],
        "answer": "es"
      },
      {
        "id": "q-48",
        "prompt": "Folge 6: Adjektivdeklination II · Übung 19 · item 16",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "er",
          "er - er",
          "A. en - - B. e C. en"
        ],
        "answer": "e"
      },
      {
        "id": "q-49",
        "prompt": "Folge 7: Komparation · Answer key · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "bin",
          "mehr",
          "en",
          "schöner"
        ],
        "answer": "schöner"
      },
      {
        "id": "q-50",
        "prompt": "Folge 7: Komparation · Answer key · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "er",
          "en",
          "wenigsten",
          "e"
        ],
        "answer": "wenigsten"
      },
      {
        "id": "q-51",
        "prompt": "Folge 7: Komparation · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "spannender",
          "- - es – en - en",
          "A. en - - B. e C. en",
          "e – e"
        ],
        "answer": "spannender"
      },
      {
        "id": "q-52",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 1 · item d",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "15",
          "Peter",
          "er - e",
          "en - en"
        ],
        "answer": "15"
      },
      {
        "id": "q-53",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 1 · item i",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "4",
          "es",
          "spannender",
          "Peter"
        ],
        "answer": "4"
      },
      {
        "id": "q-54",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 1 · item o",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "13",
          "en",
          "schöner",
          "A. e - - B. - - es C. - - es"
        ],
        "answer": "13"
      },
      {
        "id": "q-55",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 2 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "hat",
          "schöne - lange",
          "gierig",
          "em"
        ],
        "answer": "gierig"
      },
      {
        "id": "q-56",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 2 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "eifersüchtig",
          "e",
          "en",
          "finde"
        ],
        "answer": "eifersüchtig"
      },
      {
        "id": "q-57",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 2 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "gierig",
          "Peter",
          "en",
          "hilfsbereit"
        ],
        "answer": "hilfsbereit"
      },
      {
        "id": "q-58",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 3 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unzufriedenes",
          "fleißige",
          "Peter",
          "bin"
        ],
        "answer": "bin"
      },
      {
        "id": "q-59",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 3 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "hat",
          "Peter",
          "stark",
          "en"
        ],
        "answer": "hat"
      },
      {
        "id": "q-60",
        "prompt": "Folge 8: Charakter und Eigenschaften I · Übung 3 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "eifersüchtig",
          "sportlich",
          "er - e",
          "es"
        ],
        "answer": "sportlich"
      },
      {
        "id": "q-61",
        "prompt": "Folge 9: Charakter und Eigenschaften II · Übung 1 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "realitätsbewusst",
          "e",
          "unzuverlässig",
          "es"
        ],
        "answer": "unzuverlässig"
      },
      {
        "id": "q-62",
        "prompt": "Folge 9: Charakter und Eigenschaften II · Übung 1 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "er",
          "realitätsbewusst",
          "em",
          "unzufriedenes"
        ],
        "answer": "realitätsbewusst"
      },
      {
        "id": "q-63",
        "prompt": "Folge 9: Charakter und Eigenschaften II · Übung 2 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dick",
          "finde",
          "unzuverlässig",
          "15"
        ],
        "answer": "dick"
      },
      {
        "id": "q-64",
        "prompt": "Folge 9: Charakter und Eigenschaften II · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unzufriedenes",
          "e",
          "en",
          "hat"
        ],
        "answer": "unzufriedenes"
      },
      {
        "id": "q-65",
        "prompt": "Folge 9: Charakter und Eigenschaften II · Übung 3 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "bin",
          "fleißige",
          "- - teures",
          "- - es"
        ],
        "answer": "fleißige"
      },
      {
        "id": "q-66",
        "prompt": "Folge 11: Aussehen beschreiben II · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Peter",
          "es",
          "en",
          "schöne"
        ],
        "answer": "Peter"
      },
      {
        "id": "q-67",
        "prompt": "Folge 11: Aussehen beschreiben II · Übung 1 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e – e",
          "Eva",
          "hilfsbereit",
          "13"
        ],
        "answer": "Eva"
      },
      {
        "id": "q-68",
        "prompt": "Folge 12: Fotobeschreibung · Übung 2 · item e",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es",
          "Eva",
          "hässlich",
          "realitätsbewusst"
        ],
        "answer": "hässlich"
      },
      {
        "id": "q-69",
        "prompt": "Folge 12: Fotobeschreibung · Übung 3 · item c",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "er - er",
          "spannender",
          "e",
          "ist -"
        ],
        "answer": "ist -"
      },
      {
        "id": "q-70",
        "prompt": "Folge 12: Fotobeschreibung · Übung 3 · item i",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en",
          "finde",
          "er",
          "en - en"
        ],
        "answer": "finde"
      },
      {
        "id": "q-71",
        "prompt": "Folge 12: Fotobeschreibung · Übung 4 · item e",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en - en",
          "spannender",
          "stark",
          "mehr"
        ],
        "answer": "mehr"
      },
      {
        "id": "q-72",
        "prompt": "Folge 12: Fotobeschreibung · Übung 6 · item a",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "en",
          "hilfsbereit",
          "fleißige",
          "stark"
        ],
        "answer": "stark"
      }
    ],
    "sourcePageCount": 43,
    "answerPageCount": 11
  },
  {
    "id": "stadt-schule-beruf",
    "title": "City/Land, School, Jobs & Work",
    "source": "Folge 13-19",
    "pages": "PDF pages 103-149",
    "summary": "Source workbook material from Folge 13-19: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 13",
        "title": "Stadt und Land",
        "printedPageStart": 103,
        "printedPageEnd": 106,
        "sourcePages": [
          {
            "page": 103,
            "text": "Folge: 013 - A2 - Stadt vs. Land \nIn der Stadt – Auf dem Land \n\n\nDas Leben الحياة gut جيد schlecht شيء \nDie Lebensqualität جودةالحياة groß كبير klein صغير \nDie wohnverhältnisse العلاقة السكنية hoch مرتفع niedrig منخفض \nDie wohnungen und Häuser البيوت والمنازل gering قليل viel كثير \nDie Mieten – \ndie Menschen \nالإيجار \n\nselten نادر lang / kurz طويل\nقصير \nDie Einkaufs möglichkeiten إمكانيات التسوق freundlich لطيف unfreundlich \nDer verkehe – \ndie Natur \nالمرور \nالطبيعة \nsauber نظيف schmutzig متسخ \nDie stimmung – \ndie Luft – \nAnfahrtzeit zur Arbeit \nالجو العام \nالهواء \nوقت الذهاب للعمل \nlangweilig ممل interessant مثير \nDie Gefahren für die kinder المخاطر للأطفال ruhig هادى laut ضجيج \nDie medizinische versorgung الرعاية الصحية nah قريب weit بعيد \nÜbungen \n\nÜbung 1: Welches Wort fehlt? Schreib es auf die Linie! \naber dem eine ins keinen Stadt \nalles den im kaum man trotzdem"
          },
          {
            "page": 104,
            "text": "auf Dorf in keine sehr viele \n\nAuf dem Lande vs. in der Stadt \nDie Großstadt ist natürlich ganz anders als ein Dorf. Dort verkehren (1) ………………… Fahrzeuge: \nBusse, Straßenbahnen, Taxis, Autos, Motor- und Fahrräder, (2) ……………. Budapest sogar die U-\nBahn. \nDie Luft in einer Stadt ist nicht so rein, die vielen Abgase verschmutzen die Luft. Man findet (3) \n………………….. Grünanlagen, Parks oder große Spielplätze für Kinder. Hier leben (4) ………………….. \nviele Menschen und alle beeilen sich. Die Mieten sind sehr hoch, (5) ……………………….wohnen \nviele Menschen gern in Großstädten. In der Großstadt bleibt (6) ……………….. anonym. \nIn einem Dorf kennt jeder jeden. Das kann gut, (7)………………….. auch schlecht sein. In einem \nHochhaus kennt man seinen Nachbarn oft nicht. Die Menschen sind misstrauisch \ngegeneinander, sie haben (8) ………………… Zeit füreinander. In einer Stadt kann man aber \nschneller und leichter eine Arbeitsstelle finden. In einem Dorf ist es nicht immer so einfach. \nViele müssen jeden Tag in die nächstliegende (9) ……………… pendeln. In der Großstadt gibt es \nmehrere Betriebe, Fabriken, Unternehmen, Bür os, wo man leicht Arbeit finden kann. \nAußerdem gibt es hier viele kulturelle Möglichkeiten. Viele Kinos, Theater, Museen und \nKulturhäuser warten (10) …………… die Interessenten. Man kann in eine Galerie oder (11) \n………………. Konzert gehen. Das Angebot und die Aus wahl in (12) Geschäften sind erstklassig. \nMan bekommt wirklich (13) ……………….. was man braucht. Ein Vorteil der Großstadt ist noch, \ndass man hier (14) …………………. Reihe von Schulen findet."
          },
          {
            "page": 105,
            "text": "Übung 2: Die Vorteile und Nachteile des Lebens in der Stadt und auf dem Land \n\n\n- .… Tag ins Kino. \n− …… ist laut. \n− .….. ist ruhig. \n− .. um sich herum. \n− ... keine Staus. \n− ……. ein Auto fahren \n− ... keine Ruhe. \n− …… Möglichkeiten sind gut \n− ... keinen Garten. \n− ... daher ist die Luft nicht so gut. \n− ... ist besser als in der Stadt. \n− ... sich noch untereinander. \n− …. so viele Einkaufsmöglichkeiten \n− ….. ist in erreichbarer Nähe. \n− ... etwas zu unternehmen. \n− ……… mal einkaufen gehen."
          }
        ],
        "answerPages": [
          {
            "page": 105,
            "text": "Die Lösungen: \n\nÜbung 1 \nStadt / Vorteile \n-Man kann schnell ………………………. \n-Man hat mehr Möglichkeiten ……… \n-Man kann jeden ………………………. \n-Der Verkehrs ……………………………. \n-In der Stadt zu wohnen ist unheimlich \npraktisch Kino, Theater, Arzte, Läden, \nweiterführende Schulen, alles \n………………………. \n\nStadt / Nachteile \n-Es gibt ………………………. \n-Meist hat man ………………………. \n-Man hat größere Umweltbelastung, \n-Man hat nie so richtig……………… \nLand / Vorteile \nVorteile: \n-Es gibt ………………………. \n-Die Luft ist ………………………. \n-Die Leute kennen ………………………. \n-Es gibt ………………………. \n\nLand / Nachteile \n-Es gibt kein/e/en ………………………. \n-Man hat nicht so viele Menschen ... \n-Man braucht ………………………."
          },
          {
            "page": 106,
            "text": "1) viele 2) in 3) sehr 4) mehr 5) trozdem 6) man 7) aber 8) keine 9) stadt 10) auf 11) ins 12) den 13) \nalles 14) eine \nÜbung 2 \nStadt / Vorteile \nMan kann schnell ein Auto fahren. \nMan hat mehr Möglichkeiten etwas zu unternehmen \nMan kann jeden Mal einkaufen gehen \nDes Verkehres ist besser als in der Stadt \nIn der Stadt zu wohnen ist unheimlich praktisch Kino, Theater, Arzte, Läden, weiterführende Schulen, \nalles um sich herum \nStadt / Nachteile \nEs ist laut \nMeist hat man keine Ruhe \nMan hat größere Umweltbelastung, daher ist die Luft nicht so gut \nLand / Vorteile \nEs ist ruhig \nDie Leute kennen sich noch untereinander \nEs gibt keine Staus \nLand / Nachteile \nEs gibt keinen Garten \nMan hat nicht so viele Menschen um sich herum \nMan braucht so viele Einkaufsmöglichkeiten"
          }
        ]
      },
      {
        "folge": "Folge 14",
        "title": "Schule",
        "printedPageStart": 107,
        "printedPageEnd": 117,
        "sourcePages": [
          {
            "page": 107,
            "text": "Unterrichtحصة\nدراسية \n\nSportرياضة \n\nStundenplanجدول\nالحصص \n\nBleistiftقلم رصاص \n\nKugelschreiberقلم\nحي جاف \n\nZirkelبرجل \n\n\nFach, Fächerمادة\nدراسية \n\nKlassenzimmer,-\nفصل \n\nKursbuchكتاب \n\nArbeitsbuchكتاب\nتدريبات \n\nHeftكراسة \n\nLineal مسطرة \n\nKlasse, n فصل \nReligionslehre,n \nالتعليم الديب ي \nEthikعلم الاخلاق \nPhysikفير ياء \nChemieكيمياء \nBiologieاحياء \nGeschichteتاري خ \nGeografie جغرافيا \nMathematikحساب \nInformatikالمعلوميات \nWirtschaftslehre علم\nالاقتصاد \nRechtslehre القانون \nKunsterziehung \nتربية فنية \nMusikموسيق ي"
          },
          {
            "page": 108,
            "text": "Spitzerبراية \n\nRucksack شنطة ظهر \n\nRadiergummiاستيكة \nErdkundeجغرافيا \nSozialkundeالعلوم\nالاجتماعية \nHaushalt und Ernährung \nالاسرة والتغذية \nStunde حصة دراسية \nMappeفايل \n\n\n1. sehr gutجيد جدا \n2. gutجيد \n3. befriedigendحسن \n4. ausreichendمقبول \n5. mangelhaftضعيف \n6. ungenügendراسب"
          },
          {
            "page": 109,
            "text": "Mark war ein schlechter Schüler. Sein Lieblingsfach war \nSport. Mark hatte Problem in Physik und Chemie. Er hat sich \nmehr für Fußball interessiert. Die Schule hat ihm keinen Spaß \ngemacht. \nLisa ist eine gute Schülerin. Sie findet Sprachen sehr \ninteressant. Sie möchte später Journalistin werden. Sie \ninteressiert sich für Frauenmode und Reisen. \n• Wann fängt die Schule am Morgen an? - Um 7:30 Uhr. \n• Wann hört der Unterricht auf? - Um 8:35. \n• Was sind deine Lieblingsfächer? - Deutsch, Mathe, Physik. \n• Hast du Mathe am Mittwoch? - Nein. \n• Wie viele Stunden hast du pro Woche? - 24 Stunden. \n• Machst du die Hausaufgaben? - Ja. \n• Hast du Angst vor Prüfungen? - Ja. \n• Wie oft hast du Deutsch? - 4 Stunden pro Woche. \n• Welche Fremdsprachen lernst du? -Deutsch und Französisch. \n• Wer gibt guten Unterricht? -Herr Shehata. \n• In welchen Fächern schreiben Sie gute Noten? -Deutsch und \nChemie."
          },
          {
            "page": 110,
            "text": "Ergänzen Sie den Dialog \n\nMax: Guten Morgen! \nStefan: ______________________________________! \nMax: _________________________________________? \nStefan: Die erste Stunde fängt um 7:50 an. \nMax:__________________________________________? \nStefan: Um 8:35. \nMax: ___________________________________________? \nStefan: Ja, am Dienstag habe ich Englisch . \n2.Ergänzen Sie bitte mit \n(Was, in, Wie oft, Wann, vor, Wie viele, auf, Wer, Machen, Welche) \n1. ____________________ Stunden hast du pro Woche? - 24 Stunden \n2. ____________________ die Schüler die Hausaufgaben? -Ja. \n3. Ich habe Angst _____________ Prüfungen. \n4. ________________ fängt die Schule an? -Um 7:30 Uhr. \n5. _____________________ hast du Mathe? - 5 Stunden pro Woche. \n6. _____________________ Fremdensprache lernst du? - Deutsch. \n7. ______________________ gibt guten Unterricht? - Herr Shehata. \n8. ______________________ sind deine Lieblingsfächer? - Mathe, Chemie, Physik. \n9. Wann hört der Unterricht ________________? - Um 10:5 Uhr. \n10-___________ welchen Fächern bekommst du gute Noten? - Mathe und Deutsch. \n3.Ergänze den Dialog: \nTanja: \n_________________________________________! \nKatrin: Guten Morgen! \nTanja: \n_________________________________________? \nKatrin: Ich habe 28 Stunden pro Woche. \nTanja: \n_________________________________________? \nTanja: \n________________________________________? \nKatrin: Deutsch und Französisch. \nTanja: \n________________________________________? \nKatrin: Herr Mohammad Shehata. \nTanja: \n_______________________________________?"
          },
          {
            "page": 111,
            "text": "Katrin: Ich habe 5 Stunden Physik pro Woche. Katrin: Ja, ich mache die Hausaugaben. \n\n\n4.Wählen Sie aus: \n\n\n5.Wie heißen die Schulfächer? Ergänze! \n\nMa___________ik\nEr____________de Re_________on Ch____________ \n der Computerraum  \n der Turnsaal  \n der Zeichensaal  \n der Medienraum  \n der Kopierraum  \n das Lehrerzimmer  \n der Physiksaal  \n die Garderobe  \n das Klo (die Toilette)  \n die Direktion  \n die Klasse  \n die Bibliothek  \n der Gang  \n die Stiege  \n1 \n2 \n3 \n4 \n5 \n6 \n7 \n8 \n9 \n10 \n11 \n12 \n13 \n14"
          },
          {
            "page": 112,
            "text": "Sp______________ Mu____________ _______________sch \n\n\nGe_____________chte K_____________t Inf________________ik \n\n\nPh_________________ Bi_____________ie De_________________ \n\n\n6.Ordne die Tätigkeiten den Bildern zu! \nreiten – Rad fahren – schwimmen – Volleyball spielen – Fußball spielen – fernsehen \n– im Internet surfen – Tennis spielen – Musik hören – Bücher lesen – Schach spielen \n– im Chor singen – Computer spielen"
          },
          {
            "page": 113,
            "text": "__________________ ____________ ____________ \n\n\n______________________ ______________________ ____________________ \n___________________ \n\n\n_______________________ __________________________\n___________________________"
          },
          {
            "page": 114,
            "text": "___________________________ \n_________________________________ _______________________ \n7.Ergänzen Sie bitte: \n1. Welche Fächer hast du gehasst? ....................................................................... \n2. Mein Lieblingsfach war …......................................................... \n3. Meine Lieblingsfächer waren …................................................................... \n4. Ich habe (immer) \n….........................................................…...............................................gehasst. \n5. Mein Lieblingslehrer in der Grundschule war …......................................................... \n6. Mein Lieblingslehrer in der Oberschule war …......................................................... \n8. Bilde die richtigen Sätze und beantworte die Fragen! \n1) hast/wann/du/Sport? \n___________________________________________________________________________? \n………………………………………………………………………………………………….. \n2) du/Erdkunde/hast/wann? \n___________________________________________________________________________? \n………………………………………………………………………………………………....... \n3) Wann/fern/du/siehst? \n_____________________________________________________________________ ______? \n………………………………………………………………………………………………….. \n4) Wann/Volleyball/du/spielst? \n___________________________________________________________________________? \n………………………………………………………………………………………………….. \n\n5) Wann/Rad/fährst/du? \n___________________________________________________________________________? \n………………………………………………………………………………………………....... \n\n6) reitest/du/wann? \n___________________________________________________________________________? \n………………………………………………………………………………………………….. \n9.Wie heißen die Wörter? Bilden sie ein Wort!"
          },
          {
            "page": 115,
            "text": "(REIN – FE – NO – KLAS – DI – KIN – SE – BE – TIZ – GAR – HAUS – AUF – \nGA – TOR – DER – TEN – REK) \n1. die Arbeit, die Schüler zu Hause machen sollen: Hausaufgaben \n2. den besuchen die Kinder, bevor sie in die Schule gehen: \n______________________ \n3. so sagt man zum Leiter eines Gymnasiums: \n______________________ \n4. etwas, das man aufgeschrieben hat: \n______________________ \n5. eine Gruppe von Kindern, die gemeinsam Unterricht hat: ______________________ \n\n10.Ergänzen Sie. Achten Sie auf die korrekte Form. \nPeter: Frau Schmidt, können wir die (1.) Grammatik in Deutsch wiederholen? \nLehrerin: Heute (2.) ________________ wir die Grammatik. Wir schreiben bald einen (3.) \n________________. \nPaul: Frau Schmidt, ich habe viele (4.) __________ zu den Aufgaben. Können Sie die Texte \nnoch einmal (5.) ___________? \nLehrerin: Wir werden in dieser (6.) _________ über alle Texte sprechen. \nPaul: Ich möchte nicht so viele (7.) _________ machen. Ich möchte keine schlechte (8) \n_________ in Deutsch. \nLehrerin: Keine Angst, der Test ist nicht (9.) __________. \n\n\n11.Was passt nicht? \n1. Der Text ist ....... schwierig – einfach – schnell \n2. Die Lösung war ...... laut – richtig – falsch \n3. Sie spricht die Sprache ... gut – perfekt – schwer \n4. Ich kann ...... Italienisch. Etwas – leise – ein bisschen \n5. Das Ergebnis des Tests ist ... Positiv – negativ – schnell"
          },
          {
            "page": 116,
            "text": "12. Ergänzen Sie. Achten Sie bei Verben auf die korrekte Form. \n(Aussprechen – Wort – Punkte (Pl.) – Muttersprache – schaffen – sagen \nBestanden – Kenntnisse (Pl.) – Wörterbuch – vergessen – korigieren \nBuchstabieren – wiederholen – verstehen) \n1. Ich habe den Deutschtest korrigiert. Alle haben die Prüfung b_____. \n2. Frau Rall, ich habe das W_____ nicht verstanden. Können Sie es noch einmal \nb_________? \n3. Ich habe den Satz nicht v_________. Können Sie es noch einmal w__________? \n4. Können Sie mir s_______, wo das W__________ ist? \n5. Ich habe v_________, wie man das Wort auf Englisch a__________. \n6. Meine M____________ ist Polnisch. Ich habe auch k_________ in Deutsch und \nEnglisch. \n7. Sie brauchen 40 P________. Dann haben Sie die Prüfung g________."
          }
        ],
        "answerPages": [
          {
            "page": 116,
            "text": "Die Lösungen: \nÜbung 1 \n1) Guten Morgen! 2) Wann fängt die erste Stunde an? 3) Wann hört die erste Stunde auf? 4) Hast du \nam Dienstag Englisch? \nÜbung 2 \n1) Wie viele 2) Machen 3) vor 4) Wann 5) Wie oft 6) Welche 7) Wer 8) Was 9) auf 10) In \nÜbung 3 \n1) Guten Morgen! 2) Wie viele Stunden hast du pro Woche 3) Wie oft hast du Physik 4) Was sind deine \nLieblingsfächer 5) Wer gibt guten Unterricht? 6) Machst du die Hausaufgaben? \n\n\nÜbung 4 \n1) die Klasse 2) der Turnsaal 3) die Bibliothek 4) das Lehrerzimmer 5) der Computerraum 6) das Klo (die \nToilette) 7) der Gang 8) der Physiksaal 9) der Kopierraum 10) die Garderobe 11) der Zeichensaal 12) \ndie Direktion 13) der Medienraum 14) die Stiege \nÜbung 5 \n1) Mathematik 2) Erkunde 3) Religion 4) Chemie 5) Sport 6) Musik 7) Englisch 8) Geschichte 9) Kunst \n10) Informatik 11) Physik 12) Biologie 13) Deutsch \nÜbung 6"
          },
          {
            "page": 117,
            "text": "1) im Chor singen 2) Musik hören 3) im Internet surfen 4) fernsehen 5) Bücher lesen 6) reiten 7) Tennis \nspielen 8) Fußball spielen 9) Volleyball spielen 10) schwimmen 11) Schach spielen 12) Computer spielen \n13) Rad fahren \nÜbung 7 \n1) Ich hasse Erkunde 2) Deutsch 3) Deutsch und Englisch 4) Physik 5) Ibrahim Ahmad 6) Mustafa \n\n\nÜbung 8 \n1) Wann hast du Sport? Jeden Mittwoch habe ich Sport. 2) Wann hast du Erkunde? Ich habe Erkunde \nam Dienstag 3) Wann siehst du fern? Am Wochenende sehe ich fern. 4) Wann spielst du Volleyball? \nAm Samstag spiele ich Volleyball. 5) Wann fährst du Rad? Jeden Tag fahre ich Rad. 6) Wann reitest \ndu? Am Sontag reite ich. \nÜbung 9 \n2) KIN - Kindergarten 3) DI - Direktor 4) NO - Notiz 5) KLAS - Klasse \nÜbung 10 \n2) üben 3) Test 4) Fragen 5) erklären 6) Stunde 7) Fehler 8) Note 9) schwer \nÜbung 11 \n2) laut 3) schwer 4) leise 5) schnell \nÜbung 12 \n1) bestanden 2) Wort - buchstabieren 3) verstanden - wiederholen 4) sagen - Wörterbuch 5) vergessen \n– ausspricht 6) Muttersprache – Kenntnisse 7) Punkte - geschafft"
          }
        ]
      },
      {
        "folge": "Folge 15",
        "title": "Schulsystem",
        "printedPageStart": 118,
        "printedPageEnd": 119,
        "sourcePages": [
          {
            "page": 118,
            "text": "Orientierungsstufe \n\n\nKindergarten (الحضانة ) \nab 3 Jahre \n\nGrundschule (المدرسة الابتدائية) \nab 6/7 Jahre 1 – 4 Klasse \nHauptschule \n(المدرسة الإعدادية) \n5 / 6 Jahre \n5 – 10 Klasse \nRealschule \n(المدرسة الإعدادية \nالمتخصصة ) \n6 Jahre \n5 – 10 Klasse \nGesamtschule \n(المدرسة الشاملة) \nGymnasium \n(الثانوية العامة) \n8 / 9 Jahre \n5 – 12 / 13 \nKlasse \nSchulpflichtالتعليم الإلزامي"
          },
          {
            "page": 119,
            "text": "Fachoberschule \n(Fachabitur) \nثانوية عاملة متخصصة \nFachgymnasium \nثانوية متخصصة \nGymnasiale \nOberstufe \nBis 12 / 13 \nKlasse \nBerufsschule \n\nlehre \nFachhochschule \n(معهد عالي متخصص) \n\nUniversität \n(الجامعة)"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 16",
        "title": "Berufe",
        "printedPageStart": 120,
        "printedPageEnd": 139,
        "sourcePages": [
          {
            "page": 120,
            "text": "Lehrer \n\n\nArzt, Ärzte \n\n\nIngenieur, e \n\n\nBuchhalter,en \n\n\nRechtsanwaltمحام \nProgrammierer Übersetzer, \nDolmetscher Jurist,en Rechtsanwälte \n\n\nPolizist Feuerwehrmann Buchhalterمحاسب Künstlerفنان \n\n\nModerator, en Journalist,en Schriftsteller,enكاتب \nAutor,en Sekretär,e \n\n\nSteuerberaterمستشارض \nرائب Schauspieler Regisseur,e Musiker \nWas sind Sie von Beruf? \nIch arbeite als ..... / Ich bin ....."
          },
          {
            "page": 121,
            "text": "Sänger Kinderarzt Graphikdesigner Händler \n\n\nBrieftäger \n\n\nPilot Postbote,n Kameramann Friseur,e=Frisör,e \n\n\nKoch,Köche Bäcker Kellner Arbeiterعامل \n\n\nBauarbeiter Krankenpfleger Krankenschwester,n Gärtner \n\n\nBauer=Landwirt,e \n\n\nTöpfer Laborant Kapitän"
          },
          {
            "page": 122,
            "text": "Klempner \n\n\nElektriker \n\n\nFahrer=Chauffeur \n\n\nMechaniker \n\n\nFlugbegleiter \n\n\nFleischer / Metzger \n\n\nPriester \n\n\nNonne,n \n\n\nHallo. Mein Name ist Mohamed Shehata. Ich \nkomme aus Ägypten. Ich bin Übersetzer und \nDolmetscher. Ich übersetze Dokumente aus \ndem Deutschen ins Arabisch und umgekehrt. \nManchmal dolmetsche ich auch beim \nGericht."
          },
          {
            "page": 123,
            "text": "Guten Tag. Ich heiße Manfred Schneider. Ich \nbin 38 Jahre alt. Ich habe Medizin in Berlin \nstudiert. Ich arbeite jetzt im \nUniversitätsklinikum Stuttgart. Ich behandle \nkranke Menschen. \nIch heiße Lisa Müller. Ich wohne in Bonn. \nIch bin in Bonn auch zur Schule gegangen. \nNach der Schule habe ich eine Ausbildung \nzur Sekretärin gemacht. Jetzt arbeite ich als \nSekretärin bei der Firma Siemens. Ich muss \nTermine für meinen Chef vereinbaren. \nEmails lesen, schreiben und beantworten. \nIch muss auch mit Kunden telefonieren."
          },
          {
            "page": 124,
            "text": "1)Schreiben Sie einen Aufsatz über Ihren Beruf \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n\n2) Wer arbeitet wo? Verbinde! \n1. der Arzt a. bei der Post \n2. der Bauer b. im Büro \n3. der Bäcker c. im Taxi \n4. der Briefträger d. in der Bäckerei \n5. der Taxifahrer e. in der Küche \n6. die Frisörin f. im Krankenhaus \n7. der Kellner g. im Frisörsalon \n8. der Lehrer h. in der Möbelfabrik \n9. der Koch i. auf der Polizeistation \n10. der Mechaniker j. auf dem Feld, im Stall \n11. der Polizist k. in der Tierarztpraxis \n12. die Sekretärin l.im Restaurant"
          },
          {
            "page": 125,
            "text": "3)Welche Berufe sind das? \nA)1.Sie arbeitet an der Kasse im Supermarkt. Die ............................ \n2.Er kontrolliert die Autofahrer. Der ............................ \n3.Sie plant Häuser. _____ ........................ \n4.Er fliegt Flugzeuge bei Iberia. _____ ........................ \n5.Sie macht das Essen. _____ .......................... \n6.Er putzt, kocht, betreut die Kinder... _____ ........................ \n7.Sie operiert Tiere. _____ ........................ \n8.Er arbeitet in der Schule. _____ ......................... \n9.Sie hilft bei Katastrophen. _____ ......................... \n10.Er schneidet Haare. _____ ........................ \n11.Sie bringt das Essen im Restaurant. _____ ........................ \n12.Er repariert das Auto. _____ ........................ \n13.Sie arbeitet beim Militär. _____ ......................... \n14.Er macht Fotos. _____ ........................ \n15.Sie produziert Kartoffeln... _____ ........................ \n16.Er verkauft Steaks, Koteletts, Wurst... _____ ........................ \n17.Sie macht Möbel. _____ ........................ \n18.Er spielt im Orchester. _____ ........................ \n19.Sie schreibt E-Mails, ordnet Papiere... _____ ....................... \n20.Er ist Spezialist für Computer. _____ ....................... \n21.Sie backt Brot, Brötchen, Apfelkuchen... _____ .......................... \n22.Er macht Filme. _____ ........................ \n23.Sie trainiert Sportler. _____ ........................ \n13. der Tischler m.in der Schule \n14. der Tierarzt n.an der Baustelle \n15. der Bauarbeiter o.in der Werkstatt \n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"
          },
          {
            "page": 126,
            "text": "24.Sie verkauft Brillen. _____ ........................ \n25.Er bringt die Post: Briefe, Postkarten... _____ ........................ \n26.Sie betreut kleine Kinder. _____ ......................... \n27.Er transportiert Personen. _____ ........................ \n28.Sie betreut Kranke im Hospital. _____ ......................... \n29.Er verkauft Medikamente. _____ ........................ \n30.Sie pflegt den Garten. _____ ........................ \n31.Er massiert Patienten. _____ ........................ \n32.Sie schreibt Bücher. _____ ......................... \n33.Er macht Fenster. _____ .......................... \n34.Sie malt. _____ .......................... \n35.Er macht Interviews, schreibt Artikel... _____ ........................... \n4) Was macht er / sie? \n1.Autor: Er hat Ideen und .... \n2.Optikerin: Sie... \n3.Tierarzt: ________________________________________________ \n4.Apothekerin: __________________________________________ \n5.Lehrerin: ________________________________________________ \n6.Fleischerin: ________________________________________________ \n7.Informatiker: __________________________________________ \n8.Bäcker: _________________________________________________ \n9.Tischlerin: _________________________________________________ \n10.Gärtner: _________________________________________________ \n11.Architekt: _________________________________________________ \n12.Bauer: __________________________________________________ \n13.Ärztin: __________________________________________________ \n14.Kellner: __________________________________________________ \n15.Koch: __________________________________________________ \n16.Automechaniker: ____________________________________________ \n\n5)Wählen Sie aus: \n\n\n2 \n15 \n14 \n1 \n16 \n12 \n11 \n13"
          },
          {
            "page": 127,
            "text": "6)Suchen Sie nach den Berufen: \n\n\n1. Elektriker \n2. Gärtner \n3. Dachdecker \n4. Installateur \n5. Automechaniker \n6. Busfahrer \n7. Friseur \n8. Tierpfleger \n9. Straßenarbeiter \n10. Bäcker \n11. Maurer \n12. Uhrmacher \n13. Fliesenleger \n14. Landwirt \n15. Fotograf \n16. Maler \n3 \n4 \n5 \n8 \n9 \n7 \n1 2 3 4 \n10 \n6"
          },
          {
            "page": 128,
            "text": "7)A)Schreiben Sie die Berufe in der femininen Form und die jeweiligen Pluralformen: \nMaskulin: Plural: Feminin: Plural: \nder Sekretär die Sekretäre die Sekretärin die Sekretärinnen \n1. der Kellner ...................... ........................ ................................ \n2. der Bankangestellter .............. ......................... ................................. \n3. der Musiker ........................ .......................... ................................. \n4. der Arzt ........................ ............................ .............................. \n5. der Kaufmann ........................ ............................ ........................... \n6. der Friseur ........................ ............................ ............................ \n5 6 7 8 \n9 10 11 12 \n13 14 15 16"
          },
          {
            "page": 129,
            "text": "7. der Taxifahrer ......................... ............................ ............................. \n8. der Lehrer ......................... ............................ .............................. \n9. der Automechaniker .................. ............................ ............................. \n10. der Pilot .......................... ............................ ............................. \n11. der Verkäufer .......................... ............................ ............................. \n12. der Krankenpfleger ..................... die Krankenschwester ....................... \n13. der Bäcker .......................... ............................... .......................... \n14. der Programmierer ......................... ............................... ........................... \n8) Ordnen Sie die Begriffe: \ndie Werkstatt – das Krankenhaus – die Computer - die Gäste – die Brötchen – Autos \nreparieren – Supermarkt – Kranke betreuen (cuidar) – waschen, schneiden, fönen – das \nFlugzeug – die Firma – die Bank – die Passagiere – schreiben – der Stau – die Schüler – die \nGitarre – das Konto – die Haare – telefonieren – die Abteilung – der Flughafen – Kunden \nbetreuen (cuidar/atender) – der Unterricht – die Reise – die Medikamente – die Operation – \nNachts aufstehen – die Getränke und das Essen – das Internet – das Brot – die Geschäfte – \netwas verkaufen (Lebensmittel, Bekleidung) – backen – der Biergarten – das Restaurant – die \nSchere – die Papiere – die Bücher – die Konzerte – der Terminkalender – fliegen – das Geld – \nder Verkehr – der Patient \n\n1.Sekretärin:................................................................................................................ ...................\n........................... \n2. Kellner:……………………………………………………………………………………………………………………… \n3. Bankangestellter:……………………………………………………………………………………………………..… \n4.Musiker:................................................................................................................... ...................\n.............................. \n\n9)Wo arbeiten Sie? Ergänzen Sie: \n1. Arzt .......................... Polizei \n2. Lehrer ......................... Krankenhaus \n3. Polizist ........................ Garten \n4. Krankenschwester .................................. Praxis \n5. Sekretärin ............................... Geschäft"
          },
          {
            "page": 130,
            "text": "6. Trainer ............................ Konditorei \n7. Schauspieler ............................. Metzgerei \n8. Bäcker ............................ Theater \n9. Friseur ........................... Schule \n10. Metzger ............................ Büro \n11. Schreiner ......................... Stadium \n12. Gärtner ......................... Schiff \n13. Koch ......................... Autowerkstatt \n14. Kapitän ......................... Hotel \n15. Blumenhändler......................... Restaurant \n16. Konditor........................... Blumengeschäft \n17. Mechaniker ................... Schreinerei \n18. Reiseleiter .......................... Friseursalon \n19. Verkäufer .......................... Bäckerei \n10)Antworten Sie: \n\n1.Was möchtest du werden? Warum? \n________________________________________________________________ \n________________________________________________________________ \n2.Was ist dein Vater von Beruf? \n________________________________________________________________ \n3.Was ist deine Mutter von Beruf? \n________________________________________________________________ \n4.Wer untersucht Patienten? \n________________________________________________________________ \n5.Wer repariert Autos? \n________________________________________________________________ \n6.Wer behandelt kranke Tiere? \n________________________________________________________________ \n7.Wer schreibt Bücher? \n________________________________________________________________ \n8.Wer schreibt Gedichte? \n________________________________________________________________ \n11)Schreiben Sie die Definitionen:"
          },
          {
            "page": 131,
            "text": "1. Näht Kleidung für andere Leute ( ) \n2. Repariert und instaliert Wasserrohre ( ) \n3. Massiert verkrampfte Muskeln ( ) \n4. Zeichnet Pläne für Häuser und Gebäude ( ) \n5. Repariert Autos und Motorräder ( ) \n6. Regelt den Straβenverkehr und verhaftet Verbrecher ( ) \n7. Löscht Feuer und Brände, rettet Katzen aus Bäumen ( ) \n8. Schreibt Briefe und erledigt Aufträge und Telefongespräche für den Chef ( ) \n9. Kocht viele gute Gerichte und Desserts ( ) \n10. Koordiniert Schauspieler und Techniker bei Filmaufnahme ( ) \n12)Was passt zusammen? \n1. Programmierer a. Löwe \n2. Musiker b. Taxi \n3. Putzfrau c. Computer \n4. Reporter d. Steckdose \n5. Fotomodell e. Experiment \n6. Fotograf f. Flugzeug \n7. Elektriker g. Märchen \n8. Wissenschaftler h. Klavier \n9. Ingenieur i. wischen \n10. Pilot j. Interview \n11. Taxifahrer k. Kleid \n12. Dompteur l. Haus \n13. Kindergärtnerin m. Kamera \n\n1 2 3 4 5 6 7 8 9 10 11 12 13 \n\n\n13)Was passt zusammen? \n1.Lionell Mesi a. Maler \n2.Pablo Picasso b. Tennisspieler \n3.Madonna c. Fotomodell"
          },
          {
            "page": 132,
            "text": "4.Rudolf Nureyev d. Regisseur \n5.Steven Spielberg e. Fußballspieler \n6.Herman Hesse f. Tänzer \n7.Albert Einstein g. Autor \n8.Brad Pitt h. Sängerin \n9.Heidi Klum i. Wissenschaftler \n10.Roger Federer j. Schauspieler \n\n14)Ergänzen Sie die Tabelle: \nBERUF \n\nÜBERSETZUNG \nMännlich weiblich \n1. der Arbeiter \n\n2. der Lehrer \ndie Lehrerin \n3. der Kindergärtner \n\n4. der Schuldirektor \n\n5. der Arzt \n\n6. der Zahnarzt \n\n1 2 3 4 5 6 7 8 9 10"
          },
          {
            "page": 133,
            "text": "7. der Krankenpfleger \ndie Krankenschwester \n8. der Altenpfleger \n\n9. der Tierarzt / Veterinär \n\n10. der Ökologe \n\n11. der Briefträger / Postbote \n\n12. der Kellner \n\n13. der Frisör \n\n14. der Schauspieler \n\n15. der Musiker \n\n16. der Sänger \n\n17. der Kameramann \n\n18. der Graphikdesigner \n\n19. der Designer \n\n20. der Architekt"
          },
          {
            "page": 134,
            "text": "21. der Programmierer \n\n22. der Händler \n\n23. der Verkäufer \n\n24. der Landwirt / Bauer \n\n25. der Gärtner \n\n26. der Koch \n\n27. der Konditor \n\n28. der Bäcker \n\n29. der Florist \n\n30. der Ingenieur \n\n31. der Übersetzer \n\n32. der Jurist \n\n33. der Anwalt (Rechtsanwalt) \n\n34. der Tischler"
          },
          {
            "page": 135,
            "text": "35. der Polizist \n\n36. der Feuerwehrmann \n\n37. der Schneider \n\n38. der Mechaniker \n\n39. der Buchhalter \n\n40. der Flugbegleiter \n\n41. der Fahrer / Chauffeur \n\n42. der Sportler \n\n43. der Künstler \n\n44. der Maler \n\n45. der Moderator \n\n46. der Maurer \n\n47. der Bauarbeiter \n\n48. der Journalist"
          },
          {
            "page": 136,
            "text": "49. der Schriftsteller \n\n50. der Berater \n\n51. der Priester \n\n52. - \ndie Nonne \n15)Machen Sie bitte Dialoge: \n1)Sprich mit deiner Freundin/ mit deinem Freund über deine Zukunftspläne: was du werden \nmöchtest und warum? \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n2)Du arbeitest als………(wähle einen Beruf!) und bist zufrieden mit deiner Arbeit. Sprich mit \ndeinem Freund /deiner Freundin darüber, warum! \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n\n3)Du arbeitest als………(wähle einen Beruf!) und bist unzufrieden mit deiner Arbeit. Sprich mit \ndeinem Freund /deiner Freundin darüber, warum! \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________ \n________________________________________________________________"
          }
        ],
        "answerPages": [
          {
            "page": 136,
            "text": "Die Lösungen:"
          },
          {
            "page": 137,
            "text": "Übung 1 \nHallo, mein Name ist Nesma Muhammad. Ich komme aus Ägypten. Ich bin Übersetzerin und \nDeutschlehrerin und Arabischlehrerin. Ich übersetze Dokumente aus dem Deutschen ins Arabisch und \numgekehrt. Ich lehre die deutsche Sprache für die Araber und arabische Sprache für Ausländer. \nÜbung 2 \n1) f 2) n 3) d 4) a 5) c 6) g 7) l 8) m 9) e 10) o 11) i 12) b 13) h 14) k 15) j \nÜbung 3 \n1) Kassiererin 2) Hauptfahrer 3) Architektin 4) Der Pilot 5) Die Köchin 6) Hausmann 7) Die Tierärztin 8) \nDer Lehrer 9) Die Feuerwehrfrau 10) Der Frisör 11) die Kellnerin 12) Der Mechaniker 13) Die Militärin \n14) Der Photographer 15) Die Bauerin 16) Der Fleischer / Metzger 17) Die Tischlerin 18) Der Musiker \n19) Die Sekretärin 20) Der Programmierer / Informatiker 21) Die Bäckerin 22) Der Filmproduzent 23) \nDie Trainerin 24) Die Optikerin 25) Der Briefträger 26) Die Erzieherin 27) Der Fahrer 28) Die \nKrankenpflegerin 29) Der Apotheker 30) Die Gärtnerin 31) Der Masseur 32) Die Autorin 33) Der Tischler \n34) Die Malerin / Künstlerin 35) Der Interviewer \nÜbung 4 \n1) schreibt Bücher 2) Sie verkauft Brillen. 3) Er operiert Tiere.4) Sie verkauft Medikamente 5) Sie \narbeitet in der Schule. 6) Sie verkauft Steaks, Koteletts, Wurst...7) Er ist Spezialist für Computer. 8) Er \nbackt Brot, Brötchen, Apfelkuchen 9) Sie macht Möbel. 10) Er pflegt den Garten. 11) Er plant Häuser. \n12) Er produziert Kartoffeln. 13) Sie behandelt die Patienten. 14) Er bringt das Essen im Restaurant. 15) \nEr macht das Essen. 16) Er repariert die Autos. \n\nÜbung 5 \n1) Automechaniker 2) Dachdecker 3) Gärtner 4) Maler 5) Installateur 6) Fliesenleger 7) Tierpfleger 8) \nUhrmacher 9) Bäcker 10) Busfahrer 11) Landwirt 12) Maurer 13) Elektriker 14) Straßenarbeiter 15) \nFotograf 16) Friseur \nÜbung 6 \n1) Elektriker 2) Gärtner 3) Dachdecker 4) Installateur 5) Automechaniker 6) Busfahrer 7) Friseur 8) \nTierpfleger 9) Straßenarbeiter 10) Bäcker 11) Maurer 12) Uhrmacher 13) Fliesenleger 14) Landwirt 15) \nFotograf 16) Maler \nÜbung 7 \n1) Kellner - Kellnerin - Kellnerinnen 2) Bankangestellten – Bankangestellte Bankangestellten 3) \nMusiker – Musikerin - Musikerinnen 4) Ärzte – Ärztin - Ärztinnen 5) Kaufmänner – Kauffrau - \nKauffrauen 6) Friseure - Friseurin - Friseurinnen 7) Taxifahrer – Taxifahrerin - Taxifahrerinnen 8) \nLehrer – Lehrerin - Lehrerinnen 9) Automechaniker – Automechanikerin - Automechanikerinnen 10) \nPiloten – Pilotin - Pilotinnen 11) Verkäufer – Verkäuferin - Verkäuferinnen 12) Krankenpfleger - \nKrankenschwestern 13) Bäcker – Bäckerin - Bäckerinnen 14) Programmierer – Programmiererin - \nProgrammiererinnen \n\nÜbung 8 \n1) Sekretärin: die Computer - die Firma – die Bank - schreiben – telefonieren - die Papiere 2) Kellner: \ndie Gäste - die Getränke und das Essen - das Brot - das Restaurant - die Brötchen 3) Bankangestellter:"
          },
          {
            "page": 138,
            "text": "die Bank - das Konto - Kunden betreuen -telefonieren - das Geld 4) Musiker: die Gitarre - der Unterricht \n- die Konzerte \nÜbung 9 \n1) Praxis 2) Schule 3) Polizei 4) Krankenhaus 5) Büro 6) Stadium 7) Theater 8) Bäckerei 9) Friseursalon \n10) Metzgerei 11) Schreinerei 12) Garten 13) Restaurant 14) Schiff 15) Blumengeschäft 16) \nKonditorei 17) Autowerkstatt 18) Hotel 19) Geschäft \nÜbung 10 \n1) Ich möchte eine Ärztin werden, weil ich die Patienten behandeln möchte. 2) Mein Vater ist Händler \nvon Beruf 3) Meine Mutter ist Hausfrau. 4) Ärztinnen und Ärzte untersuchen die Patienten. 5) \nMechaniker 6) Tierarzt 7) Autor 8) Dichter \nÜbung 11 \n1) Schneider 2) Installateur 3) Masseur 4) Architekt 5) Mechaniker 6) Verkehrspolizist 7) \nFeuerwehrmann 8) Sekretär 9) Konditor 10) Filmregisseur \nÜbung 12 \n1) Computer 2) Klavier 3) wischen 4) Interview 5) Kleid 6) Kamera 7) Steckdose 8) Experiment 9) Haus \n10) Flugzeug 11) Taxi 12) Löwe 13) Märchen \nÜbung 13 \n1) Fußballspieler 2) Maler 3) Sängerin 4) Tänzer 5) Regisseur 6) Autor 7) Wissenschaftler 8) \nSchauspieler 9) Fotomodell 10) Tennisspieler \nÜbung 14 \n1) die Arbeiterin – عامل / عاملة 2) معلم / معلمة3) Kindergärtnerin – مرن ي / مربية ف ي روضة الأطفال 4) \nSchuldirektorin – مدير / مديرة مدرسة 5) Ärztin – طبيب / طبيبة 6) Die Zahnärztin طبيب / طبيبة أسنان 7) ممرض \nممرضة 8) Die Altenpflegerin راع / راعية مسنير 9) Die Tierärztin / Veterinärinطبيب بيطري/ طبي بة بيطرية 10) \nDie Ökologin عالم بيئة / عالمة بيئة 11) Die Briefträgerin / Postbotin ساع الي يد / ساعية الي يد 12) Die Kellnerin \nجرسون / جرسونة 13) Die Frisörin مصفف شعر / مصففة شعر 14) Die Schauspielerin ممثل / ممثلة 15) Die \nMusikerinفنان موسيق / فنانة موسيقية 16) Die Sängerin مطرب / مطربة 17) Die Kamerafrau - مصور سينمان \nمصورة سينمائية 18) Die Graphikdesignerin - مهندس / مهندسة جرافيك 19) Die Designerin - مصمم / مصممة 20) \nDie Architektin - مهندس معماري / مهندسة معمارية 21) Die Programmiererin - مي مج / مي مجة 22) Die Händlerin \n- تاجر / تاجرة 23) Die Verkäuferin - بائع / بائعة 24) Die Landwirtin / Bauerin - مزارع / مزارعة 25) Die Gärtnerin \n- بستان / عاملة بالحديقة 26) Die Köchin - طاه / طباخة 27) Die Konditorin - صانع / صانعة الحلويات 28) Die \nBäckerin - خباز / خبازة 29) Die Floristin - بائع / بائعة الزهور 30) Die Ingenieurin - مهندس / مهندسة 31) Die \nÜbersetzerin - مي جم / مي جمة 32) Die Juristin - محام / محامية 33) Die Anwaltin - محام / محامية 34) Die \nTischlerin - نجار / نجارة 35) Die Polizistin - شرط / شرطية 36) Die Feuerwehrfrau - رجل الإطفاء / سيدة الإطفاء \n37) Die Schneiderin - ترزي / ترزية 38) Die Mechanikerin - ميكانيك / ميكانيكية 39) Die Buchhalterin - محاسب \nمحاسبة 40) Die Flugbegleiterin - مضيف / مضيفة طيران 41) Die Fahrerin / Chauffeurin - سائق / سائقة سيارة 42) \nDie Sportlerin - رياض / رياضية 43) Die Künstlerin - فنان / فنانة 44) Die Malerin - رسام / رسامة 45) Die \nModeratorin - مقدم / مقدمة برامج 46) Die Maurerin - رجل البناء / سيدة البناء 47) Die Bauarbeiterin -رجل البناء\nسيدة البناء 48) Die Journalistin - صحق / صفحية 49) Die Schriftstellerin - كاتب / كاتبة 50) Die Beraterin - \nمستشار / مستشارة 51) Die Priesterin - كاهن / كاهنة 52) Der Mönch – راهب / راهبة \n\nÜbung 15"
          },
          {
            "page": 139,
            "text": "1) Hallo Tina, wie geht es dir? Heute möchte ich mit dir über meine Zukunftspläne sprechen. Ich \nmöchte eine Ärztin werden. Dieser Beruf ist der beste Beruf. Die Ärztinnen untersuchen die Patienten, \ndann behandeln sie und versuchen sie zu helfen. Sie versuchen immer, Schmerzen der Patienten zu \nreduzieren. Und jetzt schreib mir, was deine Zukunftspläne sind! \n\n2) Hallo Peter, wie geht es dir? Heute möchte ich mit dir über meinen Beruf sprechen. Ich bin ein \nÜbersetzer von Beruf. Dieser Beruf ist toll. Ich habe eine Fremdsprache gelernt. Und jetzt übersetze ich \nins Deutsche und auch von Deutschen ins Arabisch. Das macht mich so glücklich, weil ich immer neue \nWörter, Kulturen, Sitten und Traditionen. Ich bin zufrieden damit. \n\n3) Hallo Petra, wie geht es dir? Leider bin ich nicht gut. Jetzt arbeite ich als Kundenberaterin. Ich bin \nnicht zufrieden damit. Dieser Beruf ist stressig und anstrengend. Wir erhalten täglich viele Anrufe und \ndie Kunden sind meistens wütend. So versuche ich, nach anderem Beruf zu suchen."
          }
        ]
      },
      {
        "folge": "Folge 17",
        "title": "Arbeit und Studium",
        "printedPageStart": 140,
        "printedPageEnd": 145,
        "sourcePages": [
          {
            "page": 140,
            "text": "Guten Tag, ist es hier frei? \nJa, nimm doch Platz. \nHallo, ich bin Markus. \nIch bin Lisa. \nWo und wann bist du geboren, Lisa \nIch bin am 01.10.1980 geboren. \nHast du studiert, Lisa? \nNein, ich habe eine Ausbildung als Sekretärin \ngemacht. \nUnd du Markus, hast du auch Ausbildung \ngemacht? \nNein, ich bin in Frankfurt zur Schule gegangen. \nIch habe dort mein Abitur gemacht. Dann habe \nBetriebswirtschaftslehre (BWL) studiert. Ich \narbeite jetzt bei der Firma Siemens in München."
          },
          {
            "page": 141,
            "text": "Lisa, was musst du auf der Arbeit machen? \nAls Sekretärin muss ich viele Emails lesen, \nschreiben und beantworten. Ich muss auch mit \nKunden telefonieren und Termine für den Chef \nvereinbaren. Manchmal muss ich für die Gäste Tee \nmachen oder Kaffee kochen \nMarkus, wo wohnst du? \nIch wohne jetzt in München. Die Wohnung liegt \nzentral. Ich bin sehr zufrieden. \n\nMein Mann ist (un) zufrieden mit der Arbeit, weil er \nviel Geld verdienen \nnicht arbeiten müssen \nreich sein / wenig Arbeit haben \neinen schönen Beruf haben \nviele Länder sehen"
          },
          {
            "page": 142,
            "text": "eine anstrengende Arbeit haben \nkeine Freizeit \nkeinen Urlaub haben \nnachts arbeiten müssen \nviel Arbeit \nschmutzige Arbeit haben \nschlechte Arbeitszeiten haben \nChefs unsympathisch sein. \n\nsicherer Arbeitsplatz \nguter verdienst \nsoziale Sicherheit \ninteressante Arbeit \nnette, gute Kollegen \nleichte Arbeit – kurze Fahrt \ngute Karriere - Chancen \nPrestige / Ansehen \nViel Freizeit"
          },
          {
            "page": 143,
            "text": "1.Wie ist deine Arbeit? Ergänzen Sie das Gegenteil: \n(schlecht – langweilig – schwer – unangenehm) \n1. Meine Arbeit ist gut bezahlt. -Meine Arbeit ist schlecht bezahlt. \n2. Mein Job ist interessant. -Mein Job ist _______________. \n3. Meine Arbeit ist leicht. -Meine Arbeit ist _____________. \n4. Meine Kollegen sind angenehm. -Meine Kollegen sind __________. \n2.Wo arbeitest du? Ergänzen Sie. Achten Sie bei Verben auf die korrekte Form: \n(Universität – arbeitslos – studieren – arbeiten bei – arbeiten als – sein – sein bei) \n1. Wo arbeitest du? –Ich arbeite als Taxifahrer bei der Firma Schulz. \n2. Wo arbeiten Sie? –Ich ________ ________ Lehrerin in einer Grundschule. \n3. Was sind Sie von Beruf? –Ich ______________ Sekretärin. \n4. Bist du mit dem Studium schon fertig? –Nein, ich ________________ noch. \n5. Bist du noch Student? –Nein, ich ______________ jetzt _______________ der Firma \nMüller. \n6. Hast du einen Arbeitsplatz? –Nein, im Moment bin ich ____________________. \nAm wichtigsten finde ich _________ \nwichtig / unwichtig finde ich _________ \n\nDie Arbeit muss unbedingt interessant \nDie Kollegen müssen auf jeden Fall nett sein"
          },
          {
            "page": 144,
            "text": "7. Willst du später Arzt werden? –Nein, ich möchte nicht an die _________________ \n3.Wie heißen die Wörter? Es gibt einen Lesetrick. \n1. Frau Müller arbeitet in einem (tfähcseG) Geschäft für Haushaltswaren. \n2. Mein Bruder hat sich mit einer (ttatskreW) selbständig gemacht. \n3. Die (amriF) _____________ BMW produziert auch Motoräder. \n4. Ich möchte nicht in der ( kirbaF) ______________ arbeiten. Ich arbeite lieber im (orüB). \n5. Die Arbeit in der (ehcnarbesieR) ______________ macht mir viel Spaß. \n4.Ergänzen Sie. Achten Sie bei Verben auf die korrekte Form: \n(Arbeit – Kollegen (Pl.) – studieren – Lohn – Bibliothek – bekommen – Wochenende – \nverdienen) \nMarkus Müller möchte später (1.) studieren und Ingenieur werden. Zuerst will er Geld für das \nStudium (2.) __________. Er hat sich bei einer (3.) ___________ beworben und die Stelle (4.) \n___________. Die (5.) __________ macht ihm viel Spaß. Er hat einen netten Chef und nette \n(6.) __________. Sein (7.) __________ ist nicht hoch, aber der Job ist sehr interessant. Gut ist \nauch, dass Markus am (8.) _________ immer frei hat. \n(Stress – Firma – Vertrag – kündigen – finden – wechseln – vorstellen) \nLisa Schuster hat ihren Arbeitsplatz (9.) ___________. Sie hat neuen Jahre bei der (10.) \n__________ Schuster als Sekretärin gearbeitet. Die Arbeit war schwierig und es gab oft (11.) \n___________ mit den Kollegen. Vor zwei Wochen hat sie (12.) __________. Über eine \nStellenanzeige hat sie eine neue Arbeit (13.) __________. Sie hat sich bei der Firma Keller \nbeworben und (14.) __________ . Dort hat sie sofort einen neuen (15.) __________ \nbekommen. \n5.Wie heißen die Wörter? Es gibt einen Lesetrick. \n1. Kann ich eine (eipok) Kopie des Dokuments auf deinem (rereipoK) ________ machen? \n2. Könntest du mir die (ietaD) auf Diskette (nrehciepS) ___________?"
          },
          {
            "page": 145,
            "text": "3. Kann ich bei dir eine (liaM-E) _________ verschicken? \nDas (tenretnl) _________ geht nicht \n4. Du musst auf diese (etsaT) __________ drücken, um das Computerprogramm zu \n(netrats) ___________ \n5. Mit Strg + a kann man Texte (nereikram) _________ und mit Strg + c (nereipok) \n__________ \n6. Ich kann die Dokumente nicht (nekcurdsua) __________, der Drucker funktioniert \nnicht."
          }
        ],
        "answerPages": [
          {
            "page": 145,
            "text": "Die Lösungen: \nÜbung 1 \n2) langweilig 3) schwer 4) unangenehm \nÜbung 2 \n2) arbeite als 3) bin 4) studiere 5) bin - bei 6) arbeitslos 7) Universität \nÜbung 3 \n2) Werkstatt 3) Firma 4) Fabrik 5) Büro 6) Reisebranche \nÜbung 4 \n2) verdienen 3) Bibliothek 4) bekommen 5) Arbeit 6) Kollegen 7) Lohn 8) Wochenende 9) \ngewechselt 10) Firma 11) Stress 12) gekündigt 13) gefunden 14) vorgestellt 15) Vertrag \nÜbung 5 \n1) Kopie - Kopierer 2) Datei - speichern 3) E-Mail – Internet 4) Taste - starten 5) markieren - \nkopieren 6) ausdrucken"
          }
        ]
      },
      {
        "folge": "Folge 18",
        "title": "Stellenangebote",
        "printedPageStart": 146,
        "printedPageEnd": 147,
        "sourcePages": [
          {
            "page": 146,
            "text": "Anzeige \n\nFür unsere Apotheke mit nettem Team suchen wir ab sofort eine(n) Apotheker(in) in \nTeilzeit oder Vollzeit. \nRichten Sie bitte Ihre Bewerbungen an: \nFür unsere Firma suchen wir zum 1.08.2008 eine/n Sekretär/in \nIhr Profil: Sie sind gewohnt, engagiert und zeitlich flexibel und besitzen \nOrganisationstalent. Sie beherrschen den Umgang mit Internet und MS-Office. \n\n\nDie Stellenangebote إعلانات الوظائف \nDie schnelle Auffassungsgabe سرعة البديهة \nDie Belastbarkeit القدرة على التحمل \nDie Zuverlässigkeit يمكن الاعتماد عليه \nein sicheres und freundliches Auftreten حضور واثق ولطيف \nDie Vergütung المعاش \nDer Lohn - das Gehalt الراتب \nDie Fort- und Weiterbildung مواصلة التعلم \nangenehmes Arbeitsumfeld جو عمل لطيف \nsich bewerben يتقدم لوظيفة \n\n\nArzt/Ärztin in Teilzeit Ihre Qualifikation:"
          },
          {
            "page": 147,
            "text": "• Sie sind approbierter Arzt. \n• Sie zeigen Verantwortungs- und Einsatzbereitschaft. \n• Sie sind kommunikationsfähig. \n\nwir bieten: \n\n• geregelte Arbeitszeit \n• keinen Nachtdienst \n• Keine Rufbereitschaft \n• gutes Gehalt \n• Urlaubsgeld \n• optimalen Arbeitsplatz \n\n\nFirma Siemens \nPersonalabteilung \nSteinstr. 5,80359 München \n\n05.05.2016 \n\nBewerbung als Sekretärin \n\nSehr geehrte Damen und Herren, \nich bewerbe mich hiermit um die Stelle als Sekretärin in Ihre Firma. Ich bin seit 2010 bei der \nFirma X tätig. Ich möchte gerne selbständiger arbeiten und suche deshalb eine neue Stelle \nmit interessanten Aufgaben. Ich freue mich auf eine baldige Antwort. \n\nMit freundlichen Grüßen (MFG) \nPeter Müller"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 19",
        "title": "Über den Beruf sprechen",
        "printedPageStart": 148,
        "printedPageEnd": 149,
        "sourcePages": [
          {
            "page": 148,
            "text": "• Was sind Sie von Beruf? \n• Was machen Sie beruflich? \n• Welchen Beruf üben Sie aus? \n\n❖ Ich bin Physiker – Politiker. \n❖ Ich bin in der Exportbranche. \n❖ Ich bin im Computergeschäft. \n❖ Ich arbeite bei einem Importgeschäft. \n❖ Ich arbeite bei einem Unternehmen. \n❖ Ich bin verantwortlich für …………….. \n❖ Ich bin Zuständig für …………….. \n❖ Ich bin im Marketing für …………….. \n❖ Ich bin in der Verwaltung-Buchhaltung \n❖ Ich bin in der Abteilung für …………….. \n❖ Ich leite die Personalabteilung. \n❖ Ich betreue die Kunden. \n\nGMBH Aktion Gesellschaft AG \n\n❖ Ich mache nach meiner Ausbildung. \n❖ Ich bin nach Azubi. \n❖ Ich mache ein Praktikum bei der Siemens. \n❖ Ich bin seit einem Jahr arbeitslos. \n❖ Ich bin auf Arbeitssuche. \n❖ Ich bin im Ruhestand. \n❖ Ich bin Rentner. \n❖ Ich bin zu hause bei den Kundern. \n❖ Ich pflege meine Mutter /meine Kinder."
          },
          {
            "page": 149,
            "text": "❖ Ich mache mich selbständig/freiberuflich. \n❖ Ich bin Herr Müller ist freiberuflicher Lehrer. \n❖ Ich habe meine eigene Firma. \n❖ Ich habe mein eigenes Geschäft. \n❖ Ich arbeite Vollzeit/Teilzeit. \n❖ Ich habe Teilzeitstelle. \n\nMögen Sie Ihre Arbeit? \nMacht Ihnen die Arbeit Spaß? \nSind Sie zufrieden mit der Arbeit? \n\n❖ Ich arbeite gern in meiner Firma. \n❖ Meine Arbeit ist eine Herausforderung für mich. \n❖ Meine Arbeit ist sehr befriedigend. \n❖ Die Arbeit ist ziemlich sehr stressig/anstrengend. \n❖ Sei froh, dass du überhaupt Arbeit hast! \n❖ Such dir einen anderen Job! \n❖ Ich bin froh und kann arbeiten. \n❖ Was verlang ich mehr. \n❖ Wir leben, um zu arbeiten. \n❖ Arbeiten und nicht verzweifeln. \n\n➢ Die Arbeit hält drei große Übel fern: \nDie Langweile, das Laster und die Not. \n❖ Arbeite Klug, nicht hart!"
          }
        ],
        "answerPages": []
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 13: Stadt und Land · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Hausmann",
          "viele",
          "Die Altenpflegerin راع / راعية مسنير",
          "der Gang"
        ],
        "answer": "viele"
      },
      {
        "id": "q-2",
        "prompt": "Folge 13: Stadt und Land · Übung 1 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Optikerin",
          "trozdem",
          "Automechaniker",
          "Stress"
        ],
        "answer": "trozdem"
      },
      {
        "id": "q-3",
        "prompt": "Folge 13: Stadt und Land · Übung 1 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Lehrer – Lehrerin - Lehrerinnen",
          "auf",
          "trozdem",
          "Die Maurerin - رجل البناء / سيدة البناء"
        ],
        "answer": "auf"
      },
      {
        "id": "q-4",
        "prompt": "Folge 13: Stadt und Land · Übung 1 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Welche",
          "verdienen",
          "eine",
          "Maurer"
        ],
        "answer": "eine"
      },
      {
        "id": "q-5",
        "prompt": "Folge 14: Schule · Übung 2 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "studiere",
          "Machen",
          "Kamera",
          "Installateur"
        ],
        "answer": "Machen"
      },
      {
        "id": "q-6",
        "prompt": "Folge 14: Schule · Übung 2 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Der Interviewer",
          "Die Polizistin - شرط / شرطية",
          "Welche",
          "d"
        ],
        "answer": "Welche"
      },
      {
        "id": "q-7",
        "prompt": "Folge 14: Schule · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Guten Morgen!",
          "die Kellnerin",
          "Der Interviewer",
          "Der Programmierer / Informatiker"
        ],
        "answer": "Guten Morgen!"
      },
      {
        "id": "q-8",
        "prompt": "Folge 14: Schule · Übung 4 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "b",
          "die Direktion",
          "der Turnsaal",
          "Die Gärtnerin"
        ],
        "answer": "der Turnsaal"
      },
      {
        "id": "q-9",
        "prompt": "Folge 14: Schule · Übung 4 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Erkunde",
          "Installateur",
          "der Gang",
          "Die Optikerin"
        ],
        "answer": "der Gang"
      },
      {
        "id": "q-10",
        "prompt": "Folge 14: Schule · Übung 4 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Direktion",
          "Note",
          "Welche",
          "Der Interviewer"
        ],
        "answer": "die Direktion"
      },
      {
        "id": "q-11",
        "prompt": "Folge 14: Schule · Übung 5 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Friseur",
          "Erkunde",
          "Feuerwehrmann",
          "Machen"
        ],
        "answer": "Erkunde"
      },
      {
        "id": "q-12",
        "prompt": "Folge 14: Schule · Übung 5 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Büro",
          "Englisch",
          "verdienen",
          "Lehrer – Lehrerin - Lehrerinnen"
        ],
        "answer": "Englisch"
      },
      {
        "id": "q-13",
        "prompt": "Folge 14: Schule · Übung 5 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Biologie",
          "der Turnsaal",
          "Erkunde",
          "Die Konditorin - صانع / صانعة الحلويات"
        ],
        "answer": "Biologie"
      },
      {
        "id": "q-14",
        "prompt": "Folge 14: Schule · Übung 6 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Flugbegleiterin - مضيف / مضيفة طيران",
          "Landwirt",
          "im Internet surfen",
          "Die Optikerin"
        ],
        "answer": "im Internet surfen"
      },
      {
        "id": "q-15",
        "prompt": "Folge 14: Schule · Übung 6 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Volleyball spielen",
          "sagen - Wörterbuch",
          "Metzgerei",
          "Erkunde"
        ],
        "answer": "Volleyball spielen"
      },
      {
        "id": "q-16",
        "prompt": "Folge 14: Schule · Übung 6 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Dachdecker",
          "Rad fahren",
          "eine",
          "Die Bauerin"
        ],
        "answer": "Rad fahren"
      },
      {
        "id": "q-17",
        "prompt": "Folge 14: Schule · Übung 7 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Feuerwehrmann",
          "Landwirt",
          "Ibrahim Ahmad",
          "Straßenarbeiter"
        ],
        "answer": "Ibrahim Ahmad"
      },
      {
        "id": "q-18",
        "prompt": "Folge 14: Schule · Übung 9 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Dachdecker",
          "DI - Direktor",
          "Tierarzt",
          "Automechaniker"
        ],
        "answer": "DI - Direktor"
      },
      {
        "id": "q-19",
        "prompt": "Folge 14: Schule · Übung 10 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "l",
          "Test",
          "Guten Morgen!",
          "Geschäft"
        ],
        "answer": "Test"
      },
      {
        "id": "q-20",
        "prompt": "Folge 14: Schule · Übung 10 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Maler",
          "Die Polizistin - شرط / شرطية",
          "Die Bauerin",
          "Note"
        ],
        "answer": "Note"
      },
      {
        "id": "q-21",
        "prompt": "Folge 14: Schule · Übung 11 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Landwirt",
          "leise",
          "Taxi",
          "Kamera"
        ],
        "answer": "leise"
      },
      {
        "id": "q-22",
        "prompt": "Folge 14: Schule · Übung 12 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Architektin - مهندس معماري / مهندسة معمارية",
          "sagen - Wörterbuch",
          "die Kellnerin",
          "die Direktion"
        ],
        "answer": "sagen - Wörterbuch"
      },
      {
        "id": "q-23",
        "prompt": "Folge 16: Berufe · Übung 2 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "d",
          "Feuerwehrmann",
          "langweilig",
          "Installateur"
        ],
        "answer": "d"
      },
      {
        "id": "q-24",
        "prompt": "Folge 16: Berufe · Übung 2 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "l",
          "Büro",
          "Tierpfleger",
          "verdienen"
        ],
        "answer": "l"
      },
      {
        "id": "q-25",
        "prompt": "Folge 16: Berufe · Übung 2 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "b",
          "die Kellnerin",
          "verdienen",
          "Taxi"
        ],
        "answer": "b"
      },
      {
        "id": "q-26",
        "prompt": "Folge 16: Berufe · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Feuerwehrmann",
          "Kassiererin",
          "Die Konditorin - صانع / صانعة الحلويات",
          "Guten Morgen!"
        ],
        "answer": "Kassiererin"
      },
      {
        "id": "q-27",
        "prompt": "Folge 16: Berufe · Übung 3 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "verdienen",
          "Taxi",
          "Landwirt",
          "Hausmann"
        ],
        "answer": "Hausmann"
      },
      {
        "id": "q-28",
        "prompt": "Folge 16: Berufe · Übung 3 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "l",
          "Der Interviewer",
          "Die Architektin - مهندس معماري / مهندسة معمارية",
          "die Kellnerin"
        ],
        "answer": "die Kellnerin"
      },
      {
        "id": "q-29",
        "prompt": "Folge 16: Berufe · Übung 3 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Bauerin",
          "Lohn",
          "معلم / معلمة3) Kindergärtnerin – مرن ي / مربية ف ي روضة الأطفال",
          "Maler"
        ],
        "answer": "Die Bauerin"
      },
      {
        "id": "q-30",
        "prompt": "Folge 16: Berufe · Übung 3 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "langweilig",
          "sagen - Wörterbuch",
          "Volleyball spielen",
          "Der Programmierer / Informatiker"
        ],
        "answer": "Der Programmierer / Informatiker"
      },
      {
        "id": "q-31",
        "prompt": "Folge 16: Berufe · Übung 3 · item 24",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Gärtnerin",
          "Ibrahim Ahmad",
          "Die Optikerin",
          "Erkunde"
        ],
        "answer": "Die Optikerin"
      },
      {
        "id": "q-32",
        "prompt": "Folge 16: Berufe · Übung 3 · item 30",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Gärtnerin",
          "auf",
          "leise",
          "Lohn"
        ],
        "answer": "Die Gärtnerin"
      },
      {
        "id": "q-33",
        "prompt": "Folge 16: Berufe · Übung 3 · item 35",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Maler",
          "Der Interviewer",
          "معلم / معلمة3) Kindergärtnerin – مرن ي / مربية ف ي روضة الأطفال",
          "Erkunde"
        ],
        "answer": "Der Interviewer"
      },
      {
        "id": "q-34",
        "prompt": "Folge 16: Berufe · Übung 4 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Kopie - Kopierer",
          "Maurer",
          "Sie verkauft Steaks, Koteletts, Wurst...7) Er ist Spezialist für Computer",
          "Der Programmierer / Informatiker"
        ],
        "answer": "Sie verkauft Steaks, Koteletts, Wurst...7) Er ist Spezialist für Computer"
      },
      {
        "id": "q-35",
        "prompt": "Folge 16: Berufe · Übung 4 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Machen",
          "verdienen",
          "Tierpfleger",
          "Sie behandelt die Patienten"
        ],
        "answer": "Sie behandelt die Patienten"
      },
      {
        "id": "q-36",
        "prompt": "Folge 16: Berufe · Übung 5 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Praxis",
          "eine",
          "Dachdecker",
          "viele"
        ],
        "answer": "Dachdecker"
      },
      {
        "id": "q-37",
        "prompt": "Folge 16: Berufe · Übung 5 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Bauerin",
          "Die Polizistin - شرط / شرطية",
          "Tierpfleger",
          "Sie behandelt die Patienten"
        ],
        "answer": "Tierpfleger"
      },
      {
        "id": "q-38",
        "prompt": "Folge 16: Berufe · Übung 5 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Dachdecker",
          "Maurer",
          "Die Flugbegleiterin - مضيف / مضيفة طيران",
          "Der Interviewer"
        ],
        "answer": "Maurer"
      },
      {
        "id": "q-39",
        "prompt": "Folge 16: Berufe · Übung 5 · item 16",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Feuerwehrmann",
          "Friseur",
          "leise",
          "Stress"
        ],
        "answer": "Friseur"
      },
      {
        "id": "q-40",
        "prompt": "Folge 16: Berufe · Übung 6 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Test",
          "Automechaniker",
          "der Gang",
          "Landwirt"
        ],
        "answer": "Automechaniker"
      },
      {
        "id": "q-41",
        "prompt": "Folge 16: Berufe · Übung 6 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Taxi",
          "Test",
          "Klavier",
          "Straßenarbeiter"
        ],
        "answer": "Straßenarbeiter"
      },
      {
        "id": "q-42",
        "prompt": "Folge 16: Berufe · Übung 6 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Stress",
          "Taxi",
          "Landwirt",
          "Lehrer – Lehrerin - Lehrerinnen"
        ],
        "answer": "Landwirt"
      },
      {
        "id": "q-43",
        "prompt": "Folge 16: Berufe · Übung 7 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "auf",
          "Musiker – Musikerin - Musikerinnen",
          "Der Interviewer",
          "Metzgerei"
        ],
        "answer": "Musiker – Musikerin - Musikerinnen"
      },
      {
        "id": "q-44",
        "prompt": "Folge 16: Berufe · Übung 7 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Metzgerei",
          "studiere",
          "Straßenarbeiter",
          "Lehrer – Lehrerin - Lehrerinnen"
        ],
        "answer": "Lehrer – Lehrerin - Lehrerinnen"
      },
      {
        "id": "q-45",
        "prompt": "Folge 16: Berufe · Übung 9 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ibrahim Ahmad",
          "auf",
          "Die Altenpflegerin راع / راعية مسنير",
          "Praxis"
        ],
        "answer": "Praxis"
      },
      {
        "id": "q-46",
        "prompt": "Folge 16: Berufe · Übung 9 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Kassiererin",
          "Maurer",
          "der Gang",
          "Büro"
        ],
        "answer": "Büro"
      },
      {
        "id": "q-47",
        "prompt": "Folge 16: Berufe · Übung 9 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Automechaniker",
          "Metzgerei",
          "Hausmann",
          "Die Altenpflegerin راع / راعية مسنير"
        ],
        "answer": "Metzgerei"
      },
      {
        "id": "q-48",
        "prompt": "Folge 16: Berufe · Übung 9 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Rad fahren",
          "Praxis",
          "Blumengeschäft",
          "Straßenarbeiter"
        ],
        "answer": "Blumengeschäft"
      },
      {
        "id": "q-49",
        "prompt": "Folge 16: Berufe · Übung 9 · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "im Internet surfen",
          "Geschäft",
          "Büro",
          "Kamera"
        ],
        "answer": "Geschäft"
      },
      {
        "id": "q-50",
        "prompt": "Folge 16: Berufe · Übung 10 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "langweilig",
          "Volleyball spielen",
          "Tierarzt",
          "Wissenschaftler"
        ],
        "answer": "Tierarzt"
      },
      {
        "id": "q-51",
        "prompt": "Folge 16: Berufe · Übung 11 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Gärtnerin",
          "l",
          "Installateur",
          "Die Architektin - مهندس معماري / مهندسة معمارية"
        ],
        "answer": "Installateur"
      },
      {
        "id": "q-52",
        "prompt": "Folge 16: Berufe · Übung 11 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Klavier",
          "Feuerwehrmann",
          "Stress",
          "Lohn"
        ],
        "answer": "Feuerwehrmann"
      },
      {
        "id": "q-53",
        "prompt": "Folge 16: Berufe · Übung 12 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Firma",
          "Wissenschaftler",
          "Klavier",
          "Die Konditorin - صانع / صانعة الحلويات"
        ],
        "answer": "Klavier"
      },
      {
        "id": "q-54",
        "prompt": "Folge 16: Berufe · Übung 12 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Kamera",
          "Englisch",
          "Die Bauerin",
          "Machen"
        ],
        "answer": "Kamera"
      },
      {
        "id": "q-55",
        "prompt": "Folge 16: Berufe · Übung 12 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Taxi",
          "Note",
          "Welche",
          "Dachdecker"
        ],
        "answer": "Taxi"
      },
      {
        "id": "q-56",
        "prompt": "Folge 16: Berufe · Übung 13 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Guten Morgen!",
          "معلم / معلمة3) Kindergärtnerin – مرن ي / مربية ف ي روضة الأطفال",
          "Biologie",
          "Maler"
        ],
        "answer": "Maler"
      },
      {
        "id": "q-57",
        "prompt": "Folge 16: Berufe · Übung 13 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Flugbegleiterin - مضيف / مضيفة طيران",
          "Wissenschaftler",
          "Volleyball spielen",
          "Hausmann"
        ],
        "answer": "Wissenschaftler"
      },
      {
        "id": "q-58",
        "prompt": "Folge 16: Berufe · Übung 14 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Blumengeschäft",
          "auf",
          "معلم / معلمة3) Kindergärtnerin – مرن ي / مربية ف ي روضة الأطفال",
          "Die Konditorin - صانع / صانعة الحلويات"
        ],
        "answer": "معلم / معلمة3) Kindergärtnerin – مرن ي / مربية ف ي روضة الأطفال"
      },
      {
        "id": "q-59",
        "prompt": "Folge 16: Berufe · Übung 14 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "viele",
          "auf",
          "Automechaniker",
          "Die Altenpflegerin راع / راعية مسنير"
        ],
        "answer": "Die Altenpflegerin راع / راعية مسنير"
      },
      {
        "id": "q-60",
        "prompt": "Folge 16: Berufe · Übung 14 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Hausmann",
          "Taxi",
          "Die Schauspielerin ممثل / ممثلة",
          "eine"
        ],
        "answer": "Die Schauspielerin ممثل / ممثلة"
      },
      {
        "id": "q-61",
        "prompt": "Folge 16: Berufe · Übung 14 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Dachdecker",
          "Die Architektin - مهندس معماري / مهندسة معمارية",
          "verdienen",
          "Der Programmierer / Informatiker"
        ],
        "answer": "Die Architektin - مهندس معماري / مهندسة معمارية"
      },
      {
        "id": "q-62",
        "prompt": "Folge 16: Berufe · Übung 14 · item 27",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Friseur",
          "Die Konditorin - صانع / صانعة الحلويات",
          "verdienen",
          "studiere"
        ],
        "answer": "Die Konditorin - صانع / صانعة الحلويات"
      },
      {
        "id": "q-63",
        "prompt": "Folge 16: Berufe · Übung 14 · item 35",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Polizistin - شرط / شرطية",
          "Feuerwehrmann",
          "Kopie - Kopierer",
          "viele"
        ],
        "answer": "Die Polizistin - شرط / شرطية"
      },
      {
        "id": "q-64",
        "prompt": "Folge 16: Berufe · Übung 14 · item 40",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Kopie - Kopierer",
          "Die Schauspielerin ممثل / ممثلة",
          "Die Maurerin - رجل البناء / سيدة البناء",
          "Die Flugbegleiterin - مضيف / مضيفة طيران"
        ],
        "answer": "Die Flugbegleiterin - مضيف / مضيفة طيران"
      },
      {
        "id": "q-65",
        "prompt": "Folge 16: Berufe · Übung 14 · item 46",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Bauerin",
          "Die Konditorin - صانع / صانعة الحلويات",
          "Die Maurerin - رجل البناء / سيدة البناء",
          "Biologie"
        ],
        "answer": "Die Maurerin - رجل البناء / سيدة البناء"
      },
      {
        "id": "q-66",
        "prompt": "Folge 17: Arbeit und Studium · Übung 1 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "langweilig",
          "leise",
          "Hausmann",
          "Der Interviewer"
        ],
        "answer": "langweilig"
      },
      {
        "id": "q-67",
        "prompt": "Folge 17: Arbeit und Studium · Übung 2 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Der Interviewer",
          "studiere",
          "Friseur",
          "die Kellnerin"
        ],
        "answer": "studiere"
      },
      {
        "id": "q-68",
        "prompt": "Folge 17: Arbeit und Studium · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Schauspielerin ممثل / ممثلة",
          "Firma",
          "der Gang",
          "Welche"
        ],
        "answer": "Firma"
      },
      {
        "id": "q-69",
        "prompt": "Folge 17: Arbeit und Studium · Übung 4 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Maurer",
          "verdienen",
          "Der Programmierer / Informatiker",
          "Die Altenpflegerin راع / راعية مسنير"
        ],
        "answer": "verdienen"
      },
      {
        "id": "q-70",
        "prompt": "Folge 17: Arbeit und Studium · Übung 4 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Englisch",
          "Lohn",
          "Metzgerei",
          "Kamera"
        ],
        "answer": "Lohn"
      },
      {
        "id": "q-71",
        "prompt": "Folge 17: Arbeit und Studium · Übung 4 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Musiker – Musikerin - Musikerinnen",
          "Dachdecker",
          "Stress",
          "Die Konditorin - صانع / صانعة الحلويات"
        ],
        "answer": "Stress"
      },
      {
        "id": "q-72",
        "prompt": "Folge 17: Arbeit und Studium · Übung 5 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wissenschaftler",
          "Die Altenpflegerin راع / راعية مسنير",
          "eine",
          "Kopie - Kopierer"
        ],
        "answer": "Kopie - Kopierer"
      }
    ],
    "sourcePageCount": 42,
    "answerPageCount": 9
  },
  {
    "id": "praeteritum-konjunktiv",
    "title": "Präteritum, Modal Past & Konjunktiv II",
    "source": "Folge 20-25",
    "pages": "PDF pages 150-224",
    "summary": "Source workbook material from Folge 20-25: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 20",
        "title": "Präteritum I",
        "printedPageStart": 150,
        "printedPageEnd": 159,
        "sourcePages": [
          {
            "page": 150,
            "text": "➢ Die schwachen Verben ändern den Vokal im Stamm nicht. \nلا يتغير الحرف المتحرك الموجود ف أصل الفعل \n➢ Die regelmäßigen Endungen im Präteritum werden mit Stamm des Verbs+ (–t ) \ngebildet. \nإضافة النهاياتإل أصل الفعل قبل .t لتكوين صيغة الماض يتم بإضافة \n\n\nPronomen regelmäβige Verben unregelmäβige Verben \nich - te \ndu - test - st \ner,sie,es - te \nwir - ten - en \nihr - tet - t \nSie,sie - ten - en \nDie Verben \nPronomen \n\nmachen \n\nhören \n\nspielen \n\nglauben \nich Machte hörte spielte glaubte \ndu machtest hörtest spieltest glaubtest"
          },
          {
            "page": 151,
            "text": "➢ Wenn das Verb mit d oder t endet, wird das Präteritum mit Stamm des Verbs+ (et) \ngebildet \n.إل أصل الفعل قبل إضاف النهاية et نضيف t, d إذا إنتهى أصل الفعل ب \n➢ Dieselbe Regel gilt auch für Verben, deren Stamm auf m oder n endet, aber nur, \nwenn ein anderer Konsonant (nicht r) davorsteht. \ner,sie,es machte hörte spielte glaubte \nwir machten hörten spielten glaubten \nihr machtet hörtet spieltet glaubtet \nSie,sie machten hörten spielten glaubten \nBeispiele \nIch mache eine Reise. Präsens \nIch habe eine Reise gemacht. Perfekt \nIch machte eine Reise. Präteritum \n\nMark hört die Nachrichten. Präsens \nMark hat die Nachrichten gehört. Perfekt \nMark hörte die Nachrichten. Präteritum \n\nBayern spielt gestern gegen Real Madrid. Präsens \nBayern hat gestern gegen Real Madrid gespielt. Perfekt \nBayern spielte gestern gegen Real Madrid. Präteritum \n\nDie Verben \nPronomen arbeiten Landen kommen fahren \nich arbeitete landete kam fuhr \ndu arbeitetest landetest kamst fuhrst \ner,sie,es arbeitete landete kam fuhr"
          },
          {
            "page": 152,
            "text": "Wir haben schönes \nWetter. \nWir haben gestern schönes \nWetter gehabt. \nWir hatten gestern schönes \nWetter. \nLisa ist in Amerika. Lisa ist letztes Jahr in \nAmerika gewesen. \nLisa war letztes Jahr in \nAmerika. \nMama kocht leckere \nSuppe. \nMama hat leckere Suppe \ngekocht. \nMama kochte leckere \nSuppe. \nMark fragt den Lehrer. Mark hat den Lehrer gefragt. Mark fragte den Lehrer. \nFatima macht ihre \nHausaufgaben. \nFatima hat vor den Ferien \níhre Hausaufgaben gemacht. \nFatima machte ihre \nHausaufgaben. \nIch wohne in Hamburg. Ich habe früher in Hamburg \ngewohnt. \nIch wohnte in Hamburg. \nEr versteht die Lehrerin \nnicht \nEr hat die Lehrerin nicht \nverstanden. \nEr verstand die Lehrerin \nnicht. \nwir arbeiteten landeten kamen fuhren \nihr arbeitetet landetet kamt fuhrt \nSie,sie arbeiteten landeten kamen fuhren"
          },
          {
            "page": 153,
            "text": "Ich laufe schnell nach \nHause. \nIch bin gestern schnell nach \nHause gelaufen. \nGestern lief ich schnell nach \nHause. \nMaria hilft ihrer Oma. Maria hat ihrer Oma \ngeholfen. \nMaria Half ihrer Oma \nDas Ehepaar bekommt ein \nBaby. \nDas Ehepaar hat ein Baby \nbekommen. \nDas Ehepaar beka´´´´ ein \nBaby. \nBayern verliert gegen \nManchester. \nBayern hat gegen \nManchester verloren. \nBayern verlor gegen \nManchester \nPeter holt ein Glas aus der \nKüche. \nPeter hat ein Glas aus der \nKüche geholt. \nPeter holte ein Glas aus der \nKüche. \nDie Mutter ruft die Kinder. Die Mutter hat die Kinder \ngerufen. \nDie Mutter rief die Kinder. \nWir sprechen über die \nUmwelt. \nWir haben über die Umwelt \ngesprochen. \nWir sprachen über die \nUmwelt. \nAhmed wird ein \nberühmter Arzt. \nAhmed ist ein berühmter \nArzt geworden. \nAhmed wurde ein \nberühmter Arzt. \nEr bleibt eine Woche im \nBett. \nEr ist eine Woche im Bett \ngeblieben. \nEr blieb eine Woche im \nBett. \nFinn schreibt den Text. Finn hat den Text \ngeschrieben. \nFinn schrieb den Text. \nWeißt du das? haben Sie das gewusst? Wußtest du das? \nAl-Ahli gewinnt gegen \nZamalek. \nAl-Ahli hat gegen Zamalek \ngewonnen. \nAl-Ahli gewann gegen \nZamalek. \nIch sehe den Film im \nFersehen. \nIch habe den Film im \nFernsehen gesehen. \nIch sah den Film im \nFernsehen"
          },
          {
            "page": 154,
            "text": "Mein Mann kommt spät \nnach Hause. \nMein Mann ist spät nach \nHause gekommen \nMein Mann kam spät nach \nHause. \nIch kenne den \nSchauspieler. \nIch habe den Schauspieler \ngekannt. \nIch kannte den \nSchauspieler. \nMeine Schwester heiratet \nnächste Woche. \nMeine Schwester hat gestern \ngeheiratet. \nMeine Schwester heiratete \ngestern. \nAli besteht die Prüfung. Ali hat die Prüfung \nbestanden. \nAli bestand die Prüfung. \n\n\nPronomen sein (waren) haben (hatten) \nich war hatte \ndu warst hattest \ner, es, sie war hatte \nwir waren hatten \nihr wart hattet \nsie, Sie waren hatten \nBeispiele \n Ich bin im Kino. Präsens \n Ich bin im Kino gewesen. Perfekt \n Ich war im Kino. Präteritum \n\n Ich habe ein Handy. Präsens \n Ich habe ein Handy gehabt. Perfekt \n Ich hatte ein Handy. Präteritum"
          },
          {
            "page": 155,
            "text": "Infintiv Präteritum \ndürfen (darf) durfte \nkönnen (kann) konnte \nmögen (mag) mochte \nmüssen (muss) musste \nsollen (soll) sollte \nwollen (will) wollte \n\n\nInfinitiv Präteritum \nkaufen kaufte \nhören hörte \nlernen lernte \nerklären erklärte \nspielen spielte \nmachen machte \nschicken schickte \nbesuchen besuchte \nfragen fragte \nverkaufen verkaufte \nwohnen wohnte"
          },
          {
            "page": 156,
            "text": "sagen sagte \nfeiern feierte \nsparen sparte \nzahlen zahlte \nbesichtigen besichtigte \nreisen reiste \nmalen malte \nkochen kochte \nbrauchen brauchte \nrudern ruderte \nübernachten übernachtete \nheiraten heiratete \nüberreden überredete \nbilden bildete \nwarten wartete \nerzählen erzählte \nlieben liebte \nleben lebte \n\n\nInfinitiv Präteritum"
          },
          {
            "page": 157,
            "text": "abbiegen bog ab \nanfangen (fängt an) fing an \nbacken bakte/ buk \nbeginnen begann \nbetrügen betrog \nbeweisen bewies \nbewerben (bewirbt) bewarb \nbitten bat \nbleiben blieb \nbraten (brät) briet \nbrechen (bricht) brach \nbrennen brannte \nbringen brachte \ndenken dachte \nempfehlen (empfiehlt) empfahl \nentscheiden entschied \nerschrecken (erschrickt) erschreckte \nessen (isst) aß \nfahren (fährt) fuhr \nfallen (fällt) fiel \nfinden fand"
          },
          {
            "page": 158,
            "text": "fliegen flog \nfließen floss \nfressen (frisst) fraß \ngeben gab \ngehen gang \ngelingen gelang \ngelten (gilt) galt \ngeschehen (geschieht) geschah \ngewinnen gewann \nhalten (hält) hielt \nheben hob \nheißen hieß \nhelfen (hilft) half \nkennen kannte \nkommen kam \nladen (lädt) lud \nlassen (lässt) ließ \nlaufen (läuft) lief \nleiden litt \nleihen lieh \nlesen (liest) las"
          },
          {
            "page": 159,
            "text": "messen (misst) maß \nnehmen nahm \nnennen nannte \nraten (rät) riet \nriechen roch \nrufen rief \nscheinen schien \nschieben schob \nschlafen (schläft) schlief \nschlagen (schlägt) schlug \nschließen schloss \nschneiden schnitt \nschreiben schrieb \nschweigen schwieg \nschwimmen schwamm \nsehen (sieht) sah \nsenden sandte \nsendete \nsigen sang \nsinken sank \nsprechen (spricht) sprach"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 21",
        "title": "Präteritum II",
        "printedPageStart": 160,
        "printedPageEnd": 169,
        "sourcePages": [
          {
            "page": 160,
            "text": "springen sprang \nstehlen stahl \nsteigen stieg \nsterben (stirbt) starb \nstreiten stritt \ntragen (trägt) trug \ntreffen (trifft) traf \ntreiben trieb \n*treten (tritt) trat \ntrinken trank \ntun tat \nüberweisen überwies \nverbieten verbot \nverbinden verband \nvergessen (vergisst) vergaß \nvergleichen verglich \nverlieren verlor \nverzeihen verzieh \nwachsen (wächst) wuchs \nwaschen (wäscht) wusch \nwandte"
          },
          {
            "page": 161,
            "text": "**wenden wendete \nwerden (wird) wurde \nwissen (weiß) wusste \n***ziehen zog \nzwingen zwang \n\n\n1.Konjugier die Verben im Präteritum \nEs war das Jahr 1284. Hameln (sein) . . . . . . . . . . . . . (1) eine Stadt an der Weser. Dort (geben) \n. . . . . . . . . . . . . (2) es viele Ratten. Die Ratten (fressen) . . . . . . . . . . . . . . . (3) das Essen der \nMenschen. Die Leute (versuchen) . . . . . . . . . . . . . . . (4), die Ratten zu fangen. Aber immer \nmehr Ratten (kommen) . . . . . . . . . . . . . . (5). in die Stadt. Die Leute (wissen) . . . . . . . . . . . . . . . \n. (6) nicht mehr, was sie tun (sollen) . . . . . . . . . . . . . . . (7) Für jede tote Ratte (geben) . . . . . . . . \n. . . . (8) es eine Belohnung. Da (kommen) . . . . . . . . . . . (9). ein \nseltsamer Mann in die Stadt. Seine Kleider (sein) . . . . . . . . . . . . . . . (10) \nganz bunt, deshalb (nennen) . . . . . . . . . . . . . . . (11) ihn die Leute \n„Buntling“. Der Mann (sagen) . . . . . . . . . . . . . . . (12): „Ich bin ein \nRattenfänger. Wenn ihr mir hundert Goldstücke bezahlt, fange ich alle \nRatten!“ Die Einwohner von Hameln (sein) . . . . . . . . . . . . . . . (13) damit \neinverstanden und (akzeptieren) . . . . . . . . . . . . . . (14) . Der Mann \n(holen) . . . . . . . . . . . . . . . . . . (15) eine Flöte aus seiner Tasche und (an/fangen) . . . . . . . . . . . . . \n. . (16) zu spielen. Jetzt (kommen) . . . . . . . . . . . . . . . (17) alle Ratten aus den Häusern. Sie \n(setzen) . . . . . . . . . . . . . . . (18) sich zu ihm und (hören) . . . . . . . . . . . . . . . (19) ihm zu. Die \nMusik (gefallen) . . . . . . . . . . . . . (20) ihnen. Als alle Ratten bei dem Mann (sein) . . . . . . . . . . . . \n. . . (21) , (gehen) . . . . . . . . . . . . . . . (22) er langsam zum Fluss. Er (spielen) . . . . . . . . . . . . . . . \n(23) immer die gleiche Melodie. Die Ratten (folgen) . . . . . . . . . . . . . (24) ihm. Da das Wasser \nimmer tiefer (werden) . . . . . . . . (25) , (können) . . . . . . . . . . . . . . . . (26) bald die Ratten nicht \nmehr schwimmen und (ertrinken) . . . . . . . . . . . . . . . (27) im Fluss. Von da an (geben) . . . . . . . . \n. . . . . . . (28) es keine Ratten mehr in Hameln, und die Leute (freuen) . . . . . . . . . . . . . . . (29) \nsich, aber sie (ärgern) . . . . . . . . . . . . . . . (30) sich auch. Sie (ärgern) . . . . . . . . . . . . . . . . . . (31) \nsich, weil sie die hundert Goldstücke bezahlen (sollen) . . . . . . . . . . . . . . . (32)Sie (haben) . . . . . \n. . . . . . . . . . (33) nicht geglaubt, dass der Mann alle Ratten fangen könnte. Deshalb (sagen) . . ."
          },
          {
            "page": 162,
            "text": ". . . . . . . . . . . . (34) sie: „Hundert Goldstücke sind zu viel Geld für deine Arbeit. Du hast ja nur \nein bisschen Musik gemacht. Hier hast du ein Goldstück. Wenn du damit nicht zufrieden bist, \nkannst du die Ratten ja wieder zu uns schicken!“ Der Mann (ärgern) . . . . . . . . . . . . . . (35) sich, \nweil die Leute nicht ehrlich (sein) . . . . . . . . (36) Er (sagen) . . . . . . . . . . . . (37): „Warum wollt \nihr die hundert Goldstücke nicht bezahlen? Habe ich nicht alle Ratten gefangen? Ihr seid \nschlechte Menschen. Ich will euer Geld nicht. Ich schenke es euch!“ Dann (weg/gehen) . . . . . . \n. . . . . . . . . er . . . . . . . . (38) Am 26. Juni, morgens um sieben Uhr, (kommen) . . . . . . . . . . . . . . . \n(39) er wieder nach Hameln. Diesmal (aus/sehen) . . . . . . . . . . . . . . . . . . . . . er wie ein Jäger . . \n. . . . (40).Er (haben) . . . . . . . . . . . . (41) ein schreckliches Gesicht. Auf dem Kopf (haben) . . . . . \n. . . . . . (42) er einen großen Hut. Der Mann (holen) . . . . . . . . . . . (43) eine Flöte aus seiner \nTasche und (an/fangen) . . . . . . . . . . (44) zu spielen. Da (locken) . . . . . . . . . . . . . . . (45) er \naber keine Ratten. Aus den Häusern (kommen) . . . . . . . . . . . . . . . (46) alle Kinder zu ihm. Sie \n(setzen) . . . . . . . . . . . . . . . (47) sich zu ihm und (zu/hören) . . . . . . . . . . . . . . . ihm . . . . . . . . \n(48) Die Musik (gefallen) . . . . . . . . . . . . . . . (49) ihnen. Als alle Kinder bei ihm (sein) . . . . . . . . . \n. . . . . . (50) , (gehen) . . . . . . . . . . . . . . . (51) er langsam mit ihnen aus der Stadt. Er (gehen) . . . \n. . . . . . . . . . . . (52) mit ihnen in den Poppenberg. Ein Kindermädchen (sehen) . . . . . . . . . . . . . . \n. (53) , wie der Mann mit den Kindern (weg/gehen) . . . . . . . . . . . . . . . (54) , und (erzählen) . . . \n. . . . . . . . . . . . (55) die Geschichte in der Stadt. Alle Eltern (sein) . . . . . . . . . . . . . . . (56) traurig. \nSie (suchen) . . . . . . . . . . . . . . . (57) die Kinder, sie (rufen) . . . . . . . . . . . . . . . (58) die Kinder. \nDie Männer (suchen) . . . . . . . . . . . . . (59) mit Booten und Pferden nach den Kindern, aber sie \n(finden) . . . . . . . . . . . . . . . (60) sie nicht. Insgesamt (sein) . . . . . . . . . . . . . . . (61) \nhundertdreißig Kinder verschwunden. \n\n2.Ergänzen Sie die Tabelle: \nPRÄSENS PRÄTERITUM PERFEKT \n0. Ich habe Zeit Ich hatte Zeit. Ich habe Zeit gehabt. \n1. Wo ist Peter? \n2. Sonja war zu Hause. \n3. Wir sind zu spät gekommen. \n4. Ich spiele Tennis. \n5. Wir hatten Spaß. \n6. Ihr habt Mittagessen \ngekocht. \n7. Wer kommt zu dir? \n8. Das war kein Handy. \n9. Markus ist zu Hause \ngeblieben. \n10. Er arbeitet viel. \n11. Es ist Sommer gewesen. \n12. Ich gehe nach Hause."
          },
          {
            "page": 163,
            "text": "3.Kriminalpolizei. Bitte sagen Sie uns alles, was Sie über den toten Alten wissen. Sprechen \nSie im Präteritum, dann können wir gleich das Protokoll schreiben. \n\n\nEr war schon drei Wochen in unser___ (1) Hotel. Einmal (bitten) __________ (2) er mi___(3), \nih___ (4) zu heiraten. Er (bieten) __________(5) mi___ (6) 50.000€. Aber ich (brauchen) \n__________(7) sein Geld nicht. Er (brechen) __________ (8) immer die Rosen im Garten ab \nund (bringen) __________ (9) sie mir. Ich (denken) __________(10): \n“Himmelherrgottsakrament, der Teufel soll ihn holen!”. \nAber ich (danken) __________ (11) ih___(12). Er (kennen) __________ (13) niemanden im \nHotel. In der letzten Woche (können) __________(14) er nicht mehr im Garten \nspazierengehen. Er (liegen) __________ (15) stundenlang im Bett, (lesen) ______ (16) ein \nBuch mit de___ (17) Titel “Ich liebe dich” und (lassen) __________ (18) die Lampe die ganze \nNacht an. \nOft (sitzen) __________ (19) er auch ____ (20) Fenster, (sehen) __________ (21) auf das \nMeer und (essen) __________ (22) Pralinen. Ich (mögen) __________ (23) nicht allein in \nsein Zimmer gehen, aber ich (machen) __________ (24) ihm jeden Tag das Bett. \nVor zwei Tagen (schreiben) __________ (25) er sein Testament, und gestern nacht (schreien) \n__________ (26) er: “Hilfe! Ein Gespenst! Mehr Licht!” Ich (warten) __________(27), bis der \nNachtportier (kommen) __________(28), und wir (gehen) __________ (29) hinauf. Aber da \n(sein) __________ (30) er schon tot. \n\n4.Setze die Präteritumformen der Modalverben „wollen“, „können“, „dürfen“, „müssen“ \nein! Es gibt mehrere Lösungen! \n1. Ich ………………………. leider früh nach Hause. \n2. Meine Mutter ………………………….. immer pünktlich sein. \n3. Wir …………………………. ins Theater sofort losfahren. \n4. Erika ……………………….. noch fünf Minuten bleiben. \n5. Ottos Auto ist kaputt, er ……………………. den Bus nehmen. \n6. ………………… eure Tante nicht mit euch kommen? \n7. Sie …………….. leider nicht, sie ………………… lange arbeiten. \n8. Das kleine Kind ………………….. nicht allein nach Hause gehen."
          },
          {
            "page": 164,
            "text": "5.Setze die Präteritumformen der obigen Modalverben in die kurze Geschichte! \nEr …………………… (1) das Mädchen kennenlernen, das er in der Straßenbahn gesehen hatte. \nDas Mädchen stieg aber immer vor ihm aus, so …………………..(2) er nicht mit ihm sprechen. \nEr……………………..(3) nämlich pünktlich in der Schule sein. Er ………………………..(4) sich natürlich \nnicht verspäten. \n\n6.Setze die Präteritum Formen der Verben ein! \nHerr Bergmann…………………………… (1) (sein) Tierarzt von Beruf. Er …………………………………(2) \n(haben) immer viele Patienten, so …………………….. (3) (gehen) er jeden Abend müde nach \nHause. Am Freitag ………………………..(4) (passieren) etwas Komisches. Viele Tiere \n…………………………(5) (warten) noch im Wartezimmer auf die Behandlung. Da ………………………(6) \n(kommen) ein großer Bernhardiner, er ………………………(7) (müssen) nämlich die jährliche \nImpfung bekommen. Als der Hund an der Reihe ……………………….(8) (sein) und \n……………………….(9) (erblicken) die Spritze in der Hand des Arztes, ……………………….(10) \n(bekommen) er große Angst und ……………………………..(11) (laufen) weg. In zwei Stunden \n…………………………….(12) (kommen) die ganze Familie zusammen und …………………….(13) \n(schleppen) den Bernhardiner mit. Nur so ………………………………(14) (können) Herr Bergmann \nihm die Impfung geben! \n\n7.Ergänze die folgenden Sätze mit den konjugierten Formen der Hilfs- und \nModalitätsverben. \n1. Mein Freund (sein) _______________ bei mir in den Ferien. \n2. Wir (haben) __________________ schönes Wetter. \n3. Ich (können) __________________ lange Fahrradtouren machen. \n4. Meine Schwester (dürfen) ___________________ nicht allein ausgehen. \n5. Wo (sein) __________________ du im August? \n6. Meine Eltern (wollen) __________________ ins Ausland fliegen. \n7. (sein) ________________ das Wetter schön? \n8. Wir (müssen) _________________ zu Hause bleiben. \n9. Meine Oma (mögen) __________________ die Reise nicht. \n10. (wollen) _________________ du ins Kino gehen? \n11. Mein Cousin (haben) _____________________ zwei Wochen Ferien. \n12. Die Kinder (können) _____________________ nicht baden. \n13. Ich (wollen) ___________________ in der Natur wandern. \n14. Sabrina (können) _____________________ Berlin besichtigen. \n15. Ich (werden) __________________ rot wegen der Sonne. \n16. Der Zug (haben) _________________ zwei Stunden Verspätung. \n17. Veronika (müssen) _________________ in einem Zelt schlafen. \n18. Die Reise (werden) _________________ zu einer Katastrophe. \n19. Nach dem Konzert (sollen) _________________ ich warten."
          },
          {
            "page": 165,
            "text": "20. Wir (dürfen) __________________ am Abend nicht lange draußen bleiben. \n21. Ich (sein) _______________ in einer Jugendherberge. \n22. Du (müssen) ___________________ ein bisschen arbeiten. \n23. Sam (können) __________________ die Bekanntschaft von neuen Freunden machen. \n24. In der Villa (haben) __________________ wir ein Schwimmbad und ein Sprudelbecken. \n25. Das Essen im Restaurant (sein) _________________ schrecklich. \n26. Ihr (haben) __________________ nicht genug Zeit zum Besichtigen. \n27. Der Strand (sein) _______________ wunderschön. \n28. Leo war krank und (müssen) _______________ leider im Bett bleiben. \n29. Ich (haben) _________________ keine Zeit, Postkarten zu schreiben. \n30. Klaus (wollen) ___________________ unbedingt Toulouse besichtigen. \n\n8.Bilde Sätze im Präteritum! \n1. baden, Sommer, viel, im, ich, die See, in \n________________________________________________________________ \n2. warum, du, gestern, kommen, zu, wir, nicht? \n________________________________________________________________ \n3. Paul, seine Mutter, bei, die Hausarbeit, helfen \n________________________________________________________________ \n4. wir, gestern, in, schreiben, Mathe, ein Test \n________________________________________________________________ \n5. bleiben, ihr, bei, die Großeltern, zehn, Tag \n________________________________________________________________ \n\n9.Ergänzen Sie mit: \n(Laufen, bleiben, kommen, spielen, gehen, holen, rufen, schlafen, sein, haben, kochen, \nsingen, Sprechen, nehmen, wohnen, werden, bleiben, verstehen, helfen, schreiben, wissen, \nsehen, Verlieren, machen, fallen, stehen, fragen, kennen, reden, bekommen) \n1. Gestern __________ ich schnell nach Hause. \n2. Ich ___________ lange in der Schule . \n3. Meine Freunde ______________ um 10 Uhr. \n4. Die Kinder _______________im Zimmer. \n5. Petra ________ um sieben Uhr zur Schule. \n6. Ich ________ ein Glas aus der Küche. \n7. Mutter__________ die Kinder. \n8. ____________ du lange? \n9. Hans _________ gestern bei uns. \n10. Wir ___________ nicht viel Zeit. \n11. Sie ___________ sehr gut. \n12. Eva _________ in Englisch. \n13. Sie ____________ über mich."
          },
          {
            "page": 166,
            "text": "14. Peter ____________ ein Stück Torte. \n15. Frau Meier __________ in Augsburg. \n16. Simone __________ 20 Jahre alt. \n17. __________ du gestern lange? \n18. Er _______________ sie nicht. \n19. Silke _________ ihrer Oma. \n20. Ich ____________ diesen Text. \n21. _________ du das? \n22. Ich _______ noch nie seine Schwester. \n23. Max ______ das Spiel \n24. Sie ____________ das Mittagessen. \n25. Monika _______ die Treppe runter. \n26. Er __________ in der Reihe. \n27. Wir _____________ den Lehrer. \n28. Ulrike ____________ ihn. \n29. Die Kinder _____________ im Garten \n30. Martin_____________ viel Post. \n\n\n10.Schreib die Sätze im Präteritum! \n1. __________________________________________________________ \nIch stehe um 7 Uhr auf. \n2. __________________________________________________________ \nWann geht ihr heute(!) ins Theater? \n3. __________________________________________________________ \nMeine Freunde fliegen im April ins Ausland. \n4. __________________________________________________________ \nWir sprechen nicht so gut Italienisch. \n5. __________________________________________________________ \nSie fahren mit dem Fahrrad zur Schule. \n6. __________________________________________________________ \n\n11.Setzen Sie in Klammern stehende Verben ins Präteritum ein: \nHerr Auer (wohnen) __________ (1) draußen vor der Stadt in einem Vorort. Täglich (fahren) \n__________ (2) er mit dem Vorortzug in die Stadt zu seinem Büro. Meistens (haben) \n__________(3) er am Morgen wenig Zeit, denn er (aufstehen) __________ gerne \nspät__________ (4). \nAuch heute (müssen) __________ (5) Herr Auer rasch aus dem Haus. An der Haustür \n(anziehen) __________ schnell den Mantel __________(6). Dann (wollen) __________ (7) \nschon fortgehen. Aber seine Frau (bringen) __________(8) ihm noch einen Brief. (Vergessen) \n__________ (9) ihn nicht! (Einwerfen) __________ ihn bitte am Bahnhof __________(10)!"
          },
          {
            "page": 167,
            "text": "Tante Erna (müssen) __________(11) ihn morgen bekommen. Schon (sein) __________(12) \nHerr Auer auf der Straße und (laufen) __________ (13) zum Bahnhof. \nAber er (vergessen) __________ (14) den Brief doch. Im Zug (kaufen) __________ (15) er eine \nZeitung. In der Stadt (steigen) __________ (16) er aus dem Zug und (verlassen) __________ \n(17) den Bahnhof. Plötzlich (klopfen) __________ (18) ihm ein Herr auf die Schulter. „Denken \nSie an den Brief?“ (sagen) __________(19) der Unbekannte. Herr Auer (gehen) __________ \n(20) zum nächsten Briefkasten. Unterwegs aber (rufen) __________(21) wieder ein Fremder \nhinter ihm: „(Vergessen) __________ (22) Sie Ihren Brief nicht!“ \nHerr Auer (einwerfen) __________ den Brief __________(23) und (gehen) __________ (24) \nzur Haltestelle. Im Bus (fragen) __________ (25) eine Dame freundlich: „Ist der Brief schon \nfort?“ Herr Auer (ansehen) __________ die Frau verwundert __________(26). „Mein Gott, \nwoher (wissen) __________ (27) denn alle Leute von dem Brief? Er (liegen) ______ ____ (28) \ndoch schon im Briefkasten!“ \nDa (lachen) __________(29) die Dame. „Dann (können) __________ (30) ich den Zettel von \nIhrem Mantel abnehmen“. \nAuf dem Zettel (stehen) __________(31): „Sagen Sie bitte meinem Mann, er (sollen) \n__________ (32) den Brief einwerfen!“ \n\n12.A).Marion Weber erzählt aus ihrer Jugend. Ergänze die Verben im Präteritum. \nMit 16 Jahren ____________________(1) (sein) ich Friseurin. Ich __________________ (2) \n(muss) 10 Stunden oder mehr am Tag arbeiten. Nur am Sonntag _______________ (3) (sein) \nich frei. Sonntags __________________ (4) (fahren) ich oft zu meinen Großeltern oder ich \n____________________ (5) (treffen) mich mit meinen Freundinnen. Wir \n___________________ (6) (gehen) dann aufs Land oder wir _______________________ (7) \n(unternehmen) etwas lustiges in der Stadt. Ab und zu _______________________ (8) (treffen) \nwir uns im Café und ______________________ (9) (trinken) Kaffee und \n___________________ (10) (essen) Kuchen. Im Café ______________________ wir viele \nneue Leute ___________________ (11) (kennenlernen). Es _____________ (12) (sein) eine \nschöne Zeit. Es ___________________ (13) (geben) noch keine Handys. Wir \n____________________ (14) (haben) viel Spaß und wir ___________________ (15) (lachen) \nviel. Einmal im Monat _________________ (16) (gehen) wir ins Kino und \n_______________________ (17) (sehen) uns den neusten Film an. \n\nB) Richtig oder Falsch? \nRICHTIG FALSCH \n1. Marion Weber war Friseurin \n2. Sie musste mindestens 10 Stunden arbeiten. \n3. Sie hatte keine Freundinnen. \n4. Sonntags besuchte sie ihre Großeltern. \n5. Marion verbrachte eine schöne Zeit."
          },
          {
            "page": 168,
            "text": "6. Oft benutzte sie ihr Handy. \n7. Einmal in der Woche ging sie ins Kino. \n8. Es gab nie neue Filme."
          }
        ],
        "answerPages": [
          {
            "page": 168,
            "text": "Die Lösungen: \nÜbung 1 \n1) war 2) gab 3) fraßen 4) versuchten, 5) kamen 6) wussten 7) sollten 8) gab 9) kam 10) waren 11) \nnannten 12) sagte 13) waren 14) akzeptierten 15)holte 16) fing an 17) kamen 18) setzten 19) hörten \n20) gefiel 21) waren 22) ging 23) spielte 24) folgten 25) wurde 26) konnten 27) ertranken 28) gab 29) \nfreuten 30) ärgerten 31) ärgerten 32) sollten 33) hatten 34) sagten 35) ärgerte 36) waren 37) sagte \n38) ging – weg 39) kam 40) sah – aus 41) hatte 42) hatte 43 holte 44) fing an 45) lockte 46) kamen \n47) setzten 48) hörten zu 49) gefiel 50) waren 51) ging 52) ging 53) sah 54) wegging 55) erzählte 56) \nwaren 57)suchten 58) riefen 59) suchten 60) fanden 61) waren \nÜbung 2 \n1) Wo war Peter? Wo ist Peter gewesen? 2) Sonja ist zu Hause. Sonja ist zu Hause gewesen. 3) Wir \nkommen zu spät. Wir kamen zu spät. 4) Ich spielte Tennis. Ich habe Tennis gespielt. 5) Wir haben Spaß. \nWir haben Spaß gehabt. 6) Ihr kocht Mittagessen. Ihr kochtet Mittagessen. 7) Wer kam zu dir? Wer ist \nzu dir gekommen? 8) Das ist kein Handy. Das ist kein Handy gewesen. 9) Markus bleibt zu Hause. \nMarkus blieb zu Hause. 10) Er arbeitete viel. Er hat viel gearbeitet. 11) Es ist Sommer. Es war Sommer \n12) Ich ging nach Hause. Ich bin nach Hause gegangen. \nÜbung 3 \n1) em 2) bat 3) ch 4) n 5) bot 6) ch 7) brauchte 8) brach 9) brachte 10) dachte 11) dankte 12) m 13) \nkannte 14) konnte 15) lag 16) las 17) m 18) ließ 19) saß 20) am 21) sah 22) aß 23) mochte 24) \nmachte 25) schrieb 26) schrie 27) wartete 28) kam 29) gingen 30) war \nÜbung 4 \n1) musste 2) wollte 3) mussten/konnten 4) konnte/ wollte/ durfte 5) musste 6) Durfte/ Konnte/ Wollte \n7) kann - musste 8) durfte \nÜbung 5 \n1) wollte 2) konnte 3) musste 4) durfte \nÜbung 6 \n1) war 2) hatte 3) ging 4) passierte 5) warteten 6) kam 7) musste 8) war 9) erblickte 10) bekam 11) lief \n12) kam 13) schleppte 14) konnte \nÜbung 7 \n1)war 2) hatten 3) konnte 4) durfte 5) warst 6) wollten 7) War 8) mussten 9) mochte 10) Wolltest 11) \nhatte 12) konnten 13) wollte 14) konnte 15) wurde 16) hatte 17) musste 18) wurde 19) sollte 20) \ndurften 21) war 22) musstest 23) konnte 24) hatten 25) war 26) hattet 27 war 28) war – musste 29) \nhatte 30) wollte \nÜbung 8 \n1) ich badete viel in die See im Sommer. 2) Warum kommst du gestern zu uns nicht? 3) Paul half seiner \nMutter bei der Hausarbeit. 4) Wir schrieben gestern einen Test in Mathe. 5) Ihr bliebt bei den \nGroßeltern zehn Tag. \nÜbung 9"
          },
          {
            "page": 169,
            "text": "1) kam 2) schrieb 3) riefen 4) waren 5) ging 6) holte 7) sang 8) liefst 9) blieb 10) hatten 11) wurden 12) \nsprach 13) redete 14) nahm 15) wohnte 16) wurde 17) schliefst 18) wusste 19) half 20) verstand 21) \nmachtest 22) sah 23) verlor 24) kochte 25) fiel 26) standen 27) fragten 28) kannte 29) spielten 30) \nbekam \nÜbung 10 \n1) Ich stand um 7 Uhr auf. 2) Wann gingt ihr heute(!) ins Theater? 3) Meine Freunde flogen im April ins \nAusland. 4) Wir sprachen nicht so gut Italienisch. 5) Sie fuhren mit dem Fahrrad zur Schule. \nÜbung 11 \n1) wohnte 2) fuhr 3) hatte 4) stand - auf 5) musste 6) zog an 7) wollte 8) brachte 9) vergaß 10) warf ein \n11) musste 12) war 13) lief 14) vergaß 15) kaufte 16) stieg 17) verließ 18) klopfte 19) sagte 20) ging \n21) rief 22) vergaßen 23) warf ein 24) ging 25) fragte 26) sah an 27) wussten 28) lag 29) lachte 30) \nkonnte 31) stand 32) sollte \nÜbung 12 \n1) war 2) musste 3) war 4) fuhr 5) traf 6) gingen 7) unternahmen 8) trafen 9) tranken 10) aßen 11) \nlernten kennen 12) war 13) gab 14) hatten 15) lachten 16) gingen 17) sahen \nB \n1) richtig 2) richtg 3) falsch 4) richtg 5) richtg 6) falsch 7) falsch 8) falsch"
          }
        ]
      },
      {
        "folge": "Folge 22",
        "title": "dass und ob",
        "printedPageStart": 170,
        "printedPageEnd": 179,
        "sourcePages": [
          {
            "page": 170,
            "text": "Sub. + verb + Ergänzung, dass + sub. + Ergänzung + Verb \nZ.B. Es ist schön, dass du heute kommst. \n\nDas Verb im dass-Satz kommt am Ende des Satzes und konjugiert mit \ndem Subjekt. \n\n\n Es ist schön, dass du heute kommst. \n Es ist schade, dass du jetzt gehst. \n Es ist erfreulich, dass lisa geheiratet hat. \n Es ist erlaubt, dass man hier raucht. \n Es ist nötig / wichtig, dass wir den Armen helfen. \n Es ist richtig, dass Mark die Prüfung bestanden hat. \n Es ist falsch, dass Mark die Prüfung bestanden hat. \n Es ist verständlich, dass Kinder früh ins Bett gehen sollen. \n Es ist möglich, dass Ahmed nicht mehr raucht. \n Es ist wahr, dass Manuela ihren Mann ihren Mann verlassen hat. \n Es freut mich, dass er wieder Arbeit hat. \n Es ärgert mich, dass du immer spät kommst. \n Es gefällt mir, dass du den Zimmer aufräumst. \n Es tut mir Leid, dass du deinen Job verloren hast. \n Es wundert mich nicht, dass der Junge Drogen nimmt. \n Stimmt es, dass Bayern das Spiel verloren hat? \n Freut es dich, dass du jetzt in Deutschland studiert?"
          },
          {
            "page": 171,
            "text": " Ich weiß, dass Lisa heute heiratet. \n Weißt du schon, dass der Krieg zu Ende ist. \n Warum sagst du nicht, dass du mich liebst. \n Ich sage immer doch, dass ich dich liebe. \n Er teilt mit, dass sein Vater gestorben ist. \n Maria meint, dass die Hose zu kurz ist. \n Ich glaube, dass Gott existiert. \n Er denkt, dass Deutsch leicht ist. \n Die Frau behauptet, dass der Dieb lügt. \n Ich hoffe, dass mein Visum akzeptiert wird. \n Ich vermute, dass meine Frau mein Handy versteckt hat. \n Ich befürchte, dass die Reise teurer weden. \n Ich nehme an, dass meine Tochter Fieber hat. \n Der Lehrer antwortet, dass die Schüler die Hausaufgaben machen. \n Hast du gehört, dass Ahly morgen gegen Zamalek spielt. \n Hast du gesehen, dass Ronaldo drei Tore geschossen hat. \n Ich verspreche euch, dass wir nächstes Jahr nach Amerika reisen. \n Ich habe vergessen, dass Oma heute Geburtstag hat."
          },
          {
            "page": 172,
            "text": "Sub. + verb + Ergänzung, ob + sub. + Ergänzung + Verb \nZ.B. Ich weiß aber nicht, ob Lisa glücklich ist. \n\nDas Verb im dass-Satz kommt am Ende des Satzes und \nkonjugiert mit dem Subjekt \n\n\n1- Bitte folgende Sätze zu ergänzen : \n\n1. Thomas möchte wissen, ....... wir ihn im Juni besuchen . \n2. Unsere Eltern wissen, ....... wir sie lieben . \n3. Ich habe ihm gesagt, ....... meine Tochter krank ist . \n4. Der Arzt hat gefragt, ....... sein Patient Fieber hat . \n5. Mein Lehrer ist sicher, ....... ich meine Prüfung problemlos ablege . \n6. Ich möchte erfahren, ....... er wirklich Manuela geheiratet hat . \n7. Deine Schwester ist überzeugt, ....... sie schöne Geschenke bekommt . \n8. Seid ihr sicher, ....... ihr kein Hilfe braucht ? \n9. Eure Kinder haben gefragt, ....... ich am Samstag zu Besuch komme . \n10. Der Lehrer weiβ, ....... diese Klassenarbeit schwer ist . \n11. Wir möchten fragen, ....... dein Auto wieder beim Mechaniker steht . \n12. Der Sportler weiβ, ....... er jeden Tag trainieren muss . \n13. Diese Schüler sind nicht sicher, ....... sie in Mathe gute Noten erhalten. \n14. Ihre Oma fragt, ....... ihre Enkelkinder pünktlich kommen ."
          },
          {
            "page": 173,
            "text": "15. Ich informiere meine Freunde, ....... ich bald ins Ausland fahre . \n16. Gestern hat er gefragt, ...... ich ihn mag . \n17. Alle wissen, ....... Markus neues Auto gekauft hat . \n18. Wir wollen erfahren, ....... unsere Vorschläge unserem Chef gefallen . \n19. Elke ist sicher, ....... ihr Projekt am besten ist. \n20. Meine Mama weiβ schon, ....... unser Hund entlaufen ist. \n\n2- Bilde Sätze mit dass \n1. das / dass / ist / zu / Buch / teuer \nMein Bruder sagt, \n__________________________________________________________________________ \n2. ist / Reiten / dass / gefährlich \nIch bin sicher, \n__________________________________________________________________________ \n3. macht / Kochen / dass / Spaß \nWir finden, \n__________________________________________________________________________ \n4. ich / habe / genug / nicht / dass / gelernt \nDie Lehrerin meint, \n__________________________________________________________________________ \n5. du / dass / bist / gekommen \nIch bin froh, \n__________________________________________________________________________ \n6. du / hast / dass / so viele / in der Arbeit / Probleme \nEs tut mir leid, \n__________________________________________________________________________ \n7. du / dass / zu / kannst / kommen / zur Party \nIch freue mich, \n__________________________________________________________________________ \n8. dir / geht / dass / es / besser / wieder \nIch bin froh, \n__________________________________________________________________________ \n9. wir / dass / müssen / heute / schreiben / Kontrollarbeit \nIch bin sauer, \n__________________________________________________________________________ \n10. sind / unsere Freunde / dass / gut / in New York / angekommen \nWir hoffen, \n__________________________________________________________________________ \n3- Was sagt er? \nZ.B. „Ich mag Fußball.” Er sagt, dass er Fußball mag."
          },
          {
            "page": 174,
            "text": "1. „Ich habe Hunger” Er sagt, \n______________________________________________________________ \n2. „Das ist mein Wörterbuch.” Er sagt, \n____________________________________________________ \n3. „Ich heiße John.” Er sagt, \n________________________________________________________________ \n4. „Ich bin sehr müde.” Er sagt, \n___________________________________________________________ \n5. „Ich fahre morgen nach Deutschland.” Er sagt, \n________________________________________ \n6. „Ich habe sehr viel Hausarbeit.” Er sagt, \n______________________________________________ \n7. „Ich muss die Arbeit fertig machen.” Er sagt, \n__________________________________________ \n8. „Ich lese dieses Buch” Er sagt, \n__________________________________________________________ \n9. „Ich bin gestern spazieren gegangen” Er sagt, \n_________________________________________ \n10. „Ich habe meine Freundin angerufen” Er sagt, \n________________________________________ \n\n4- Mach Sätze mit dass. Schau dir das Beispiel an. \nZ.B. 0. Er denkt, dass Deutsch super ist. \n1. Deutsch ist super. \n___________________________________________________________________________ \n2. Jeans sind schick. \n___________________________________________________________________________ \n3. Schlank ist prima. \n___________________________________________________________________________ \n4. Biologie macht Spaß. \n___________________________________________________________________________ \n5. Das Bild ist schön. \n___________________________________________________________________________ \n6. Discos sind toll. \n___________________________________________________________________________ \n7. Kleine Kinder dürfen nicht viel fernsehen. \n___________________________________________________________________________ \n8. Ich muss jetzt nach Hause gehen. \n___________________________________________________________________________"
          },
          {
            "page": 175,
            "text": "9. Melanie wird bestimmt zur Geburtstagsparty kommen. \n___________________________________________________________________________ \n10. Sport ist gesund. \n___________________________________________________________________________ \n11. Rolfs neue Freundin ist eingebildet. \n___________________________________________________________________________ \n12. Peter hat zu wenig für Englisch gelernt. \n___________________________________________________________________________ \n\n5- Forme die Sätze um \nIch glaube, dass …. / Sie denkt, dass .... / Er weiß, dass .... / Wir hoffen, dass ... \nEs tut ihr leid, dass ... / Es freut uns, dass .... \nZ.B. 0.Sie hat ihr Handy verloren. \nIch glaube, dass sie ihr Handy verloren hat. \n1. Sie sind zu Fuß gegangen. \n___________________________________________________________________________ \n2. Meine Großmutter ist bald wieder gesund. \n___________________________________________________________________________ \n3. Sie besucht einen Informatikkurs. \n___________________________________________________________________________ \n4. Er muss viel Grammatik in Deutsch lernen. \n___________________________________________________________________________ \n5. Er ist zu spät gekommen. \n__________________________________________________________________________ \n6. Das Buch gehört Maria. \n___________________________________________________________________________ \n7. Die Schüler passen im Unterricht gut auf. \n___________________________________________________________________________ \n8. Sie hat die Prüfung nicht geschafft. \n___________________________________________________________________________ \n9. Sie haben eine gute Note in der Mathearbeit bekommen. \n___________________________________________________________________________ \n\n6- Bilden Sie Sätze mit dass: \n1. Rita glaubt das. Obst ist gesund \n___________________________________________________________________________ \n2. Ich meine das. Unser Chemielehrer ist Spitze. \n___________________________________________________________________________ \n3. Meine Mutter ist überzeugt.Mein Bruder lernt nichts. \n___________________________________________________________________________"
          },
          {
            "page": 176,
            "text": "4. Ich glaube das.Das Leben im Dorf ist langweilig. \n___________________________________________________________________________ \n5. Anna findet das.Ihre Eltern sind sehr streng. \n___________________________________________________________________________ \n6. Torsten sagt das.Er wird nie heiraten. \n___________________________________________________________________________ \n7. Dirk glaubt das.Alle Politiker lügen. \n___________________________________________________________________________ \n8. Mein Vater glaubt das.Meine Mutter kocht nicht so gut wie meine Oma. \n___________________________________________________________________________ \n\n7- Bilden Sie Sätze mit dass (Nebensatz): \n\nBsp: Ich glaube, dass… /Markus fliegt nach Berlin. \nIch glaube, dass Markus nach Berlin fliegt. \n1) Martin meint, dass…/ Urlaub in der Türkei ist schön. \nMartin meint, dass_________________________________________________________ \n2) Mein Mann glaubt, dass / Ausstellungen sind langweilig. \nMein Mann glaubt, dass____________________________________________________ \n3) Die Schweizer glauben, dass…/ Vier Wochen Ferien sind genug. \nDie Schweizer glauben, dass_________________________________________________ \n8- Schreiben Sie diese Sätze als dass-Sätze \nZ.B. 0. Ihre Schwester arbeitet in Basel. (glauben) \nIch glaube, dass ihre Schwester in Basel arbeitet. \n1. Er kommt aus Brasilien. (wissen) \n___________________________________________________________________________ \n2. Sie sind zu spät gekommen. (mich ärgern) \n___________________________________________________________________________ \n3. Marcel fliegt heute Nachmittag nach London. (sagen) \n___________________________________________________________________________ \n4. Er hat mir die Brieftasche gestohlen. (vermuten) \n___________________________________________________________________________ \n6. Wir gehen morgen in die Ferien. (freuen) \n___________________________________________________________________________ \n7. Du kommst mich besuchen. (schön)"
          },
          {
            "page": 177,
            "text": "___________________________________________________________________________ \n8. Ich habe meine Schlüssel gefunden. (höchste Zeit) \n___________________________________________________________________________ \n9. Jetzt ist Feierabend! (gut) \n___________________________________________________________________________ \n10. Die Sommerferien kommen. (es wird Zeit) \n\n___________________________________________________________________________ \n9.Bilden Sie dass-Sätze. \nZ.B. 0. Es ist schön + du – anrufen (Perfekt) \nEs ist schön, dass du angerufen hast. \n1. Wir freuen uns + nach München – Sie – fahren – nächsten Monat \nWir freuen uns, \n_________________________________________________________________________\n\n2. Es ist gut + mich – Sie – informieren (perfekt) – rechtzeitig \nEs ist gut, \n_________________________________________________________________________\n\n3. Wir hoffen + gefallen – Ihnen – uns – hier – bei – es – in der Firma \nWir hoffen, \n_________________________________________________________________________ \n\n4. Sie haben nicht gewusst + stattfinden (Perfekt) – dieses Seminar – letztes Jahr – auch \nSie haben nicht gewusst, \n_______________________________________________________________________ \n\n5. Der Chef möchte + ich – für zwei – reservieren – einen Tisch – Personen – im Restaurant \nDer Chef möchte, \n_________________________________________________________________________ \n\n6. Die Kollegin sagt + verlieren (Perfekt) – sie – die Unterlagen \nDie Kollegin sagt, \n_________________________________________________________________________ \n\n7. Ich habe ihm gesagt + bis Freitag – der Lieferant – unterschreiben – den Vertrag – müssen \nIch habe ihm gesagt, \n________________________________________________________________________"
          }
        ],
        "answerPages": [
          {
            "page": 177,
            "text": "Die Lösungen:"
          },
          {
            "page": 178,
            "text": "Übung 1 \n1.ob 2.dass 3. dass 4.ob 5.dass 6. ob 7.dass 8. dass 9.ob 10.dass 11.ob 12.dass 13.ob 14.ob \n15.dass 16. ob 17.dass 18. ob 19.dass 20.dass \nÜbung 2 \n1) Mein Bruder sagt, dass das Buch zu teuer ist. 2) Ich bin sicher, dass Reiten gefährlich ist. 3) Wir \nfinden, dass Kochen Spaß macht. 4) Die Lehrerin meint, dass ich nicht genug gelernt habe. 5) Ich bin \nfroh, dass du gekommen bist. 6) Es tut mir leid, dass du so viele Probleme in der Arbeit hast. 7) Ich \nfreue mich, dass du zur Party kommen kannst. 8) Ich bin froh, dass es dir wieder besser geht. 9) Ich bin \nsauer, dass wir heute Kontrollarbeit schreiben müssen. 10) Wir hoffen, dass unsere Freunde gut in New \nYork angekommen sind. \nÜbung 3 \n1) dass er Hunger hat. 2) dass das sein Wörterbuch ist. 3) dass er John heißt. 4) dass er sehr müde ist. \n5) dass er morgen nach Deutschland fährt. 6) dass er sehr viel Hausarbeit hat. 7) dass er die Arbeit \nfertig machen muss. 8) dass er dieses Buch liest. 9) dass er gestern spazieren gegangen ist. 9) dass er \nseine Freundin angerufen hat. \nÜbung 4 \n2) Er glaubt, dass Jeans schick sind. 3) Er sagt, dass Schlank prima ist. 4) Sie denkt, dass Biologie Spaß \nmacht. 5) Er denkt, dass das Bild schön ist. 6) Er sagt, dass Discos toll sind. 7) Er glaubt, dass kleine \nKinder nicht viel fernsehen dürfen. 8) Sie sagt, dass sie jetzt nach Hause gehen muss. 9) Er sagt, dass \nMelanie bestimmt zur Geburtstagsparty kommen wird. 10) Er denkt, dass Sport gesund ist. 11)Sie \nsagte, dass Rolfs neue Freundin eingebildet ist. 12) Er sagt, dass Peter zu wenig für Englisch gelernt \nhat. \nÜbung 5 \n1) Ich glaube, dass sie zu Fuß gegangen sind. 2) Ich hoffe, dass meine Großmutter bald wieder gesund \nist. 3) Ich glaube, dass sie einen Informatikkurs besucht hat. 4) Er weiß, dass er viel Grammatik in \nDeutsch lernen muss. 5) Es tut ihr leid, dass er zu spät gekommen ist. 6) Ich glaube, dass das Buch \nMaria gehört. 7) Es freut uns, dass die Schüler im Unterricht gut aufpassen. 8) Es tut ihr leid, dass sie \ndie Prüfung nicht geschafft hat. 9) Es freut uns, dass sie eine gute Note in der Mathearbeit bekommen \nhaben. \nÜbung 6 \n1) Rita glaubt, dass Obst gesund ist. 2) Ich meine, dass unser Chemielehrer Spitze ist. 3) Meine Mutter \nist überzeugt, dass mein Bruder nichts lernt. 4) Ich glaube, dass das Leben im Dorf langweilig ist. 5) \nAnna findet, dass ihre Eltern sehr streng sind. 6) Torsten sagt, dass er nie heiraten wird. 7) Dirk glaubt, \ndass alle Politiker lügen. 8) Mein Vater glaubt, dass meine Mutter nicht so gut wie meine Oma kocht. \nÜbung 7 \n1) Martin meint, dass Urlaub in der Türkei schön ist. 2) Mein Mann glaubt, dass Ausstellungen \nlangweilig sind. 3) Die Schweizer glauben, dass vier Wochen Ferien genug sind. \nÜbung 8 \n1) Ich weiß, dass er aus Brasilien kommt. 2) Ich ärgere mich, dass sie zu spät gekommen sind. 3) Ich \nsage, dass Marcel heute Nachmittag nach London fliegt. 4) Ich vermute, dass er mir die Brieftasche \ngestohlen hat. 5) Ich freue mich, dass wir morgen in die Ferien gehen. 6) Es ist schön, dass du mich \nbesuchen kommst. 7) Es ist höchste Zeit, dass ich meine Schlüssel gefunden habe 8) Es ist gut, dass \njetzt Feierabend ist! 9) Es wird Zeit, dass die Sommerferien kommen. \nÜbung 9 \n1) Wir freuen uns, dass Sie nächsten Monat nach München fahren. 2) Es ist gut, dass Sie mich \nrechtzeitig informiert haben. 3) Wir hoffen, dass es Ihnen bei uns hier in der Firma gefallen. 4) Sie"
          },
          {
            "page": 179,
            "text": "haben nicht gewusst, dass dieses Seminar letztes Jahr auch stattgefunden hat. 5) Der Chef möchte, \ndass ich einen Tisch im Restaurant für zwei Personen reserviere 6) Die Kollegin sagt, dass sie die \nUnterlagen verloren hat. 7) Ich habe ihm gesagt, dass der Lieferant den Vertrag bis Freitag \nunterschreiben muss."
          }
        ]
      },
      {
        "folge": "Folge 23",
        "title": "Modalverben im Präteritum",
        "printedPageStart": 180,
        "printedPageEnd": 191,
        "sourcePages": [
          {
            "page": 180,
            "text": "1. Position 2. Position letzte Position \n\n\n......................... Modalverb ............................................ Vollverb \n\n\nPro. Müssen dürfen sollen können wollen mögen \nich muss darf soll kann will mag \ndu musst darfst sollst kannst willst magst \ner muss darf soll kann will mag \nwir müssen dürfen sollen können wollen mögen \nihr müsst dürft sollt könnt wollt mögt \nsie/Sie müssen dürfen sollen können wollen mögen"
          },
          {
            "page": 181,
            "text": "Pro. \n(wollen) \nwollten \n(sollen) \nsollten \n(müssen) \nmussten \n(dürfen) \ndurften \n(können) \nkonnten \n(mögen) \nmochten \nich wollte sollte musste durfte konnte mochte \ndu wolltest solltest musstest durftest konntest mochtest \ner,sie,es wollte sollte musste durfte konnte mochte \nwir wollten sollten mussten durften konnten mochten \nihr wolltet solltet musstet durftet konntet mochtet \n\n• Ich kann schwimmen. \n• Ich kann nich reiten. \n• Im Unterricht muss ich arbeiten. \n• Zu Hause muss ich nicht jeden Tag spülen. \n• Ich darf jeden Tag 30 Minuten am Computer spielen. \n• Ich darf nicht in die Disko gehen."
          },
          {
            "page": 182,
            "text": "sie, Sie wollten sollten mussten durften konnten mochten \n• Ich durfte früher kein Eis essen. \n• Mona konnte vor drei Jahren kein Deutsch sprechen. \n• Anna musste gestern zum Arzt gehen. \n• Markus wollte früher Lisa heiraten. \n• Mein Bruder mochte früher keinen Fisch essen. \n• Ich sollte weniger essen. \n• Ich mochte die Hitze von Kuwait nicht. \n\n• Ich durfte gestern ins Kino gehen. \n• Max wollte immer nach China reisen. \n• Wir mussten gestern drei Stunden warten. \n• Messi konnte sehr gut Fußball spielen. \n• Paul sollte gestern zu Hause bleiben. \n• Ich durfte gestern in dieser Straße nicht parken. \n\n• Herr Shehata wollte immer Dolmetscher werden, aber er konnte nicht \nlange in diesem Beruf bleiben. Deshalb musste er den Beruf wechseln. \n• Wahdan wollte eigentlich nicht Landwirt werden, aber er musste, denn \nseine Eltern haben einen Bauernhof. \n\n• Ich hatte gestern schlechte Laune. Ich konnte nicht lernen. \n• Sie mochte nie Süßigkeiten essen. \n• Vor dem Spiel sollten die Spieler gut trainieren."
          },
          {
            "page": 183,
            "text": "1.Setzen Sie das richtige Modalverb im Präteritum ein: \n1. Mit 6 Jahren ____________ ich groß sein. \n2. Mit 14 Jahren ___________ sie pünktlich zu Hause sein. \n3. Mit 18 Jahren ___________ du Auto fahren. \n4. Mit 21 Jahren ___________ wir die Welt sehen. \n5. Was _____________ du mit 18 Jahren? \n6. Mein Bruder ____________ immer alles machen. \n2.Bilden Sie Sätze im Präteritum aus gegebenen Wörtern! \n1.Ursula – müssen – gehen – zum Frisör \n___________________________________________________________________________ \n\n2.Tamara – wollen – kaufen – einen neuen Tisch \n___________________________________________________________________________ \n\n3.Wir – dürfen – nach Frankreich – fahren \n___________________________________________________________________________ \n\n4.Der Zahnarzt – müssen – Frau Beier - zu - gehen. \n___________________________________________________________________________ \n\n5. fahren – können – mit dem Bus – Anja \n___________________________________________________________________________ \n\n6.viel essen – Ich – nicht – dürfen \n___________________________________________________________________________ \n\n3.Bilde Sätze im Präteritum! \n\n1. wollen, er, nach, fahren, Österreich \n_______________________________________________________________________ \n2. müssen, das Telefonbuch, suchen, ich \n_______________________________________________________________________ \n\n3. mögen , Eis essen , wir"
          },
          {
            "page": 184,
            "text": "_______________________________________________________________________ \n4. sollen, ihr, einen Moment, warten \n_______________________________________________________________________ \n5. dürfen, du, gehen, ins Kino, \n_______________________________________________________________________ \n4. Welches Modalverb fehlt? Ein Modalverb kannst du mehrmals benutzen! \n1. Du ____________________ mir deinen Füller geben \n2. Ich ___________________ gestern nicht meine Freundin besuchen. \n3. Wir ___________________ früher um 9 Uhr schlafen gehen. \n4. Er ____________________ immer zu Hause frühstücken. \n5. Sie ____________________ ihren Eltern helfen. \n6. Ihr ____________________ in der Nacht gut schlafen. \n5.Setze das richtige Modalverb ein: \n1. Wir waren spät. Wir _________________ gehen. \n2. Ich ____________ nicht ins Kino gehen. Ich ___________ noch lernen. \n3. Peter hat eine schlechte Note in Mathe bekommen. Er ____________ noch viel üben. \n4. In den Ferien ________________ wir ans Meer fahren. \n5. Du ______________ diesen Film sehen. \n\n6.Wähle das richtige Wort aus! \n1. Meine Schwester____________ schwimmen. \na) konnte b) durfte c) wollte \n2. Ihr_____________hier bleiben \na) konntet b) durftet c) wolltet \n3. Ich ______________ meinen Eltern bei der Hausarbeit helfen. \na) musste b) möchte c) wollte \n4. Du ________________ mit uns ins Kino gehen. \na) konntest b) wolltest c) durftest \n5. Wir _________________ gestern auf den Spielplatz Handball spielen. \na) möchten b) durften c) konnten \n6. Du ______________ die Hausaufgabe schreiben. \na) konntest b) wolltest c) musstest \n7. Du _____________ noch einen Apfelsaft trinken. \na) wolltest b) möchtest c) solltest \n8. Ich _________________ dir bei der Hausaufgabe helfen. \na) möchte b) konnte c) wollte \n\n7.Setze das richtige Modalverb im Präteritumein: \n1.) Du _________________ mehr Obst und Gemüse essen."
          },
          {
            "page": 185,
            "text": "2.) Wir __________________ schon gehen. \n3.) Sie ____________________ langsamer fahren \n4.) Was ___________________ du noch gestern machen? \n5.) Als ich in der Schule war, _________________ Ich viel lernen. \n6.) Wann ___________________ ich dich anrufen? \n7.) Warum __________________ du zum Arzt gehen? \n\n8.Schreibe selbst Sätze im Präteritum! \n1. (Ich/ dürfen/ gehen/ in/ das Kino/ nie/ allein) \n_____________________________________________________________________ \n2. (Du/ können/ schwimmen/ in/ der See/ mit/ 6 Jahre) \n_____________________________________________________________________ \n3. (Martin/ müssen/ helfen/ in/ der Garten/ immer) \n_____________________________________________________________________ \n4. (Meine Eltern/ dürfen/ reisen/ in/ das Ausland/ lange Zeit/ nicht) \n_____________________________________________________________________ \n5. (Meine Schwester/ müssen/ arbeiten/ fast nie/ zu Hause.) \n_____________________________________________________________________ \n6. (Ich/ sollen/ machen/ früher/ sauber/ der Stall.) \n_____________________________________________________________________ \n7. Mein Bruder/ können/ füttern/ ganz allein/ der Hund.) \n_____________________________________________________________________ \n\n9.Formuliere Sätze bzw. Fragen:(Präteritum) \n1.möchten – ich – nach England – fahren \n_________________________________________________________ \n2.die Frau – müssen – arbeiten – hart \n________________________________________________________ \n3.rauchen - man – hier – dürfen – ? \n_________________________________________________________ \n4.ins Kino – können – wir – gehen - gestern ? \n_________________________________________________________ \n5.laufen - können – du – 10 Kilometer – ? \n_________________________________________________________ \n6.das Kind – gehen - dürfen – allein ? \n_________________________________________________________ \n7.Kaffee – möchten – keinen - mehr – trinken – er \n_________________________________________________________ \n8.müssen – Ihr – schon – gehen ."
          },
          {
            "page": 186,
            "text": "_________________________________________________________ \n\n10. Der Arzt hat gesagt, … \n1. ich s_____ nicht so viel Schokolade essen. \n2. du s_____ nicht rauchen. \n3. er s_____ mehr Sport machen. \n4. Kristina s_____ im Bett bleiben. \n5. wir s_____ keinen Kaffee trinken. \n6. ihr s_____ viel Wasser trinken. \n7. Sie s_____ letzte Woche kommen \n11.Ergänzen Sie bitte (möchten, wollen, sollen, müssen, dürfen, können)Präteritum \n1. Εlke ________ zum Geburtstag ein Fahrrad. \n2. ________ ich hier rauchen? \n3. Peter __________ letzte Woche um 10 Uhr zum Arbeitsamt (= OAΕΔ). Er hatte einen Termin. \n4. Ich hatte Hunger. Ich _________ eine Wurst mit Pommes essen. \n5. Der Arzt hat gesagt, ich ________ leicht essen. \n6. Mein Auto war kaputt. Ich _________ ein neues Auto kaufen. \n7. Eleni ________ keinen Fisch. \n8. Im September __________ ich einen Ausflug machen. \n9. Hier war das Parken verboten. Hier ________ Sie nicht parken! \n10. Ich ________ gestern früh aufstehen. \n11. Mein Papagei _______ schon sehr gut Englisch, aber er ________ noch Deutsch lernen. \n12.Setze das richtige Modalverb ein(Präteritum): \n1. (müssen) Ich __________________ gestern um sechs da sein. \n2. (möchten) Was __________________ ihr essen? \n3. (dürfen) __________________ du später zur Party? \n4. (können) Maria __________________ die Hausaufgaben nicht machen. \n5. (sollen) Uwe __________________ die Karten holen \n6. (müssen) Wir __________________ Karten spielen. \n7. (möchten) Sie (pl.) __________________ Pizza! \n8. (dürfen)Sie (s.) __________________ nach Hause gehen"
          },
          {
            "page": 187,
            "text": "9. (können) Jan und Jena __________________ gut Fuβball spielen. \n10. (sollen) Wir __________________ zum Kaufhaus gehen? \n11. (wollen) Er __________________ Musikhören? \n13.Setzt die Modalverben im Präteritum ein! \n1. Ich hatte schlechte Laune. Ich (können)…………… nicht lernen. \n2. Ich hatte Schlusstest in der Schule. Ich (müssen)…………. mich gut darauf vorbereiten. \n3. Sie hatte achtunddreißig Grad Fieber. Sie (dürfen) ……………… nicht draußen gehen. \n4. Den ganzen Tag hat es geregnet. Wir (können)………. nicht laufen gehen. \n5. Vor den Wettbewerben (sollen)………. die Teilnehmer viel trainieren. \n6. (wollen)……….. du früher Arzt werden? \n7. Er fragte seine Mutter, ob er in die Disco gehen (dürfen)……………? \n8. Sie (mögen)…….... nie die Süßigkeiten essen. \n9. Die kleinen Kinder (dürfen) ……… dem Fremden die Tür nicht öffnen. \n10. Letzten Freitag (müssen)…….. du zum HNO-Arzt gehen. \n11. Ihr ...............(wollen) mich im Gebirge besuchen. \n12. Warum (wollen)……. sie(Pl.) nach Spanien nicht mit dem Flugzeug fliegen? \n\n14. Konjugieren Sie das Modalverb und bilden Sie Sätze. \n1. können / ihr / schwimmen / gut \n__________________________________________________________________________ \n2. du / können / helfen / mir \n__________________________________________________________________________ \n3. wir / von 9 bis 18 Uhr / arbeiten / müssen \n__________________________________________________________________________ \n4. müssen / ihr / schreiben / viele Emails \n__________________________________________________________________________ \n5. können / machen / eine Reise/ ich \n__________________________________________________________________________ \n6. ich / gestern / müssen / gehen / ins Büro \n__________________________________________________________________________"
          },
          {
            "page": 188,
            "text": "15.Bilde Sätze aus gegebenen Wörtern (Präteritum)! \n1. wollen / machen / ihr / in Italien / eine Reise \n_____________________________________________________________________ \n2. müssen / bleiben / du / zu Hause / gestern/. \n_____________________________________________________________________ \n3. können / kommen / Eva / nicht / letzte Woche/ . \n_____________________________________________________________________ \n4. dürfen / gehen / Anna und Peter / ins Kino /nicht / . \n_____________________________________________________________________ \n\n16. Ergänzen Sie bitte: \n1.) Ich ___________________ nicht Ski fahren, aber ich _____________ es lernen. \n2.) Peter ________________ ins Theater nicht gehen. Er hat keine Lust. \n3.) Du _________________ nicht kommen. Du __________________ Englisch lernen. \n4.) Ich ___________________ nach Hause gehen. \n5.) Wir __________________ Spanisch lernen. Wir ____________________ einen \nSpanischkurs machen. \n6.) Ihr _________________________ noch nicht Auto fahren. Ihr wart zu jung. \n7.) Wir ______________________ nicht kommen. Wir hatten viele Hausaufgaben. \n8.) Sie ______________________ gut Gitarre spielen. \n\n\n17.Ergänzen Sie das Modalverb in der richtigen Form im Präteritum. \n\nmöchten: Ich ___________________ keinen Kaffee trinken. \nDu ___________________ Pizza essen. \nEr ___________________ lieber Rotwein trinken. \nWir ___________________ ins Theater gehen. \nIhr ___________________ ein Buch lesen. \nSie ___________________ für den Test lernen."
          },
          {
            "page": 189,
            "text": "können: Ich ___________________ nicht so früh aufstehen \nDu ___________________ Klavier spielen und singen. \nEr ___________________ Deutsch verstehen. \nWir ___________________ Musik hören. \nIhr ___________________ kein Fleisch essen. \nSie ___________________ den Chef anrufen. \n\nmüssen: Ich ___________________ gestern arbeiten. \nDu ___________________ nie Hausaufgaben machen. \nEr ___________________ sein Zimmer aufräumen. \nWir ___________________ einen neuen Computer kaufen. \nIhr ___________________ einen Termin beim Arzt machen. \nSie ___________________ alles essen. \n\ndürfen: Ich ___________________ heute Morgen in die Disco gehen. ☺ \nDu ___________________ allein ins Kino gehen. \nEr ___________________ das Wörterbuch benutzen. \nWir ___________________ nicht laut sprechen. \nIhr ___________________ ausschlafen. \nSie ___________________ nicht Auto fahren Er hat Bier getrunken. \n\nwollen: Ich ___________________ Französisch lernen. \nDu ___________________ nach Italien fahren. \nEr ___________________ das Buch von Nietzsche kaufen. \nWir ___________________ schlafen! \nIhr ___________________ immer Eis essen. \nSie ___________________ ins gestern Konzert gehen."
          }
        ],
        "answerPages": [
          {
            "page": 189,
            "text": "Die Lösungen: \nÜbung 1 \n1) mochte 2) musste 3) durftest 4) konnten 5) konntest 6) durfte \nÜbung 2 \n1) Ursula musste zum Frisör gehen. 2) Tamara wollte einen neuen Tisch kaufen. 3) Wir durften nach \nFrankreich fahren. 4) Frau Beier musste zum Zahnarzt gehen. 5) Anja konnte mit dem Bus fahren. 6) \nIch durfte nicht viel essen. \nÜbung 3 \n1) Er wollte nach Österreich fahren. 2) Ich musste das Telefonbuch suchen. 3) wir mochten Eis essen. 4) \nIhr solltet einen Moment warten. 5) Du durftest ins Kino gehen."
          },
          {
            "page": 190,
            "text": "Übung 4 \n1) durftest 2) konnte 3) mussten 4) sollte 5) musste 6) solltet \nÜbung 5 \n1) sollten 2) konnte - sollte 3) sollte 4) mussten 5) durftest \nÜbung 6 \n1) konnte 2) durftet 3) musste 4) konntest 5) möchten 6) musstest 7) solltest 8) konnte \nÜbung 7 \n1) solltest. 2) mussten 3) mussten 4) musstest 5) sollte 6) konnte 7) musstest. \nÜbung 8 \n1) Ich durfte nie allein ins Kino gehen. 2) Du konntest in der See mit 6 Jahre schwimmen. 3) Martin \nmusste in dem Garten immer helfen. 4) Meine Eltern durften nicht lange Zeit ins Ausland reisen. 5) \nMeine Schwester musste fast nie zu Hause arbeiten. 6) Ich sollte den Stall früher sauber machen. 7) \nMein Bruder konnte den Hund ganz allein füttern. \n\nÜbung 9 \n1) Ich mochte nach England fahren. 2) Die Frau musste hart arbeiten. 3) Durfte man hier rauchen? 4) \nKonnten wir gestern ins Kino gehen? 5) Konntest du 10 Kilometer laufen? 6) Durfte das Kind allein \ngehen? 7) Er mochte keinen Kaffee mehr trinken. 8) Ihr musstet schon gehen. \nÜbung 10 \n1) sollte 2) solltest 3) sollte 4) sollte 5) sollten 6) solltet 7) sollten/ sollte \nÜbung 11 \n1) wollte 2) Durfte 3) sollte 4) mochte 5) musste 6) musste 7) mochte 8) wollte 9) durften 10) sollte. 11) \nkonnte - sollte \nÜbung 12 \n1) musste 2) mochtet 3) durftest 4) konnte 5) sollte 6) mussten 7) mochten 8) durfte 9) konnten 10) \nsollten 11) wollte \nÜbung 13 \n1) konnte 2) musste 3) durfte 4) konnten 5) sollten 6) Wolltest 7) durfte 8) mochte 9) durften 10) \nmusstest 11) wolltet 12) wollten \nÜbung 14 \n1) Ihr konntet gut schwimmen. 2) Du konntest mir helfen. 3) Wir mussten von 9 bis 18 Uhr arbeiten 4) \nIhr musstet viele Emails schreiben. 5) Ich konnte eine Reise machen. 6) Ich musste gestern ins Büro \ngehen. \nÜbung 15 \n1) Ihr wolltet eine Reise in Italien machen. 2) Du musstest gestern zu Hause bleiben. 3) Eva konnte \nletzte Woche nicht kommen. 4) Anna und Peter durften ins Kino nicht gehen. \nÜbung 16 \n1) konnte - sollte. 2) wollte 3) durftest - solltest 4) musste 5) wollten – sollten 6) durftet 7) konnten 8) \nkonnte \nÜbung 17"
          },
          {
            "page": 191,
            "text": "1) mochte 2) mochtest 3) mochte 4) mochten 5) mochtet 6) mochten \n1) konnte 2) konntest 3) konnte 4) konnten 5) konntet 6) konnten \n1) musste 2) musstest 3) musste 4) mussten 5) musstet 6) mussten \n1) durfte 2) durftest 3) durfte 4) durften 5) durftet 6) durften \n1) wollte 2) wolltest 3) wollte 4) wollten 5) wolltet 6) wollten"
          }
        ]
      },
      {
        "folge": "Folge 24",
        "title": "Konjunktiv II I",
        "printedPageStart": 192,
        "printedPageEnd": 206,
        "sourcePages": [
          {
            "page": 192,
            "text": "-Irreale Welt -Phantasie - Träume -Wünsche -irreale Bedingungen -Höflichkeit\n\nIndikativ Konjunktiv II \nIch bin arm. \n\nIch bin in Afrika. \nWäre ich doch reich! \nWenn ich doch reich wäre! \nWäre ich doch in Amerika! \nWenn ich in Amerika wäre! \nIch habe Nokia. \n\nIch habe Toyota. \nHätte ich doch ein I-Phone! \nWenn ich ein I-Phone hätte! \nHätte ich einen Porsche! \nWenn ich einen Porsche hätte! \nIch esse Foul. \nWürde ich doch Kebab essen! \nWenn ich Kebab essen würde! \nPro. Sein Konj. haben Konj. würden"
          },
          {
            "page": 193,
            "text": "☻ Ich wäre gern König. \n☻ Er wäre gern Millionär. \n☻ Peter wäre gern ein berühmter Schauspieler. \n☻ Omar wäre gern Ronaldo. \n☻ Ich wäre gern mein eigener Chef. \n\n☻ Ich hätte gern ein großes Haus. \n☻ Lisa hätte gern ein tolles Auto. \n☻ Markus hätte gern eine schöne Frau. \n☻ Markus hätte gern viel Geld. \n\n\n☻ Ich würde gern einmal nach Amerika reisen. \n☻ Ich würde gern ein Buch schreiben. \n☻ Ich würde gern den Koran auswendig lernen. \n☻ Ich würde gern mehr Sport machen. \n\n\nIch bin wäre habe hätte würde \nDu bist wärst hast hättest würdest \ner/es/sie ist wäre hat hätte würde \nWir sind wären haben hätten würden \nIhr seid wäret habt hättet würdet \nsie/Sie sind wären haben hätten würden"
          },
          {
            "page": 194,
            "text": "☻ Ich würde mein eigenes Leben leben. \n☻ Ich würde nicht viel arbeiten. \n☻ Ich würde meine Gefühle mehr ausdrücken. \n☻ Ich würde den Kontakt zu meinen Freunden aufrechterhalten \n☻ Ich würde glücklicher leben. \n\n☻ Es ist kalt: Wenn es warm wäre! \n☻ Gold ist teuer: Wenn Gold billig wäre! \n☻ Lisa ist zu dünn: Wenn Lisa doch dicker wäre! \n\n\n→ Lisa hat ein Auto, aber sie hätte gern mehr Autos. \n→ Lisa macht jedes Jahr zwei Wochen Urlaub, aber sie würde gern noch \nmehr Urlaub machen. \n→ Lisa verdient gut, aber sie würde gern noch mehr verdienen. \n→ Lisa hat zwei Häuser, aber sie hätte gern noch mehr Häuser. \n→ Lisa schläft jeden Tag 8 Stunden, aber sie würde gern mehr schlafen. \n→ Lisa ist sehr schön, aber sie wäre gern noch schöner. \n→ Lisa spricht zwei Sprachen, aber sie würde gern noch mehr Sprachen \nsprechen. \n→ Lisa geht oft einkaufen, aber sie würde gern noch öfter einkaufen gehen. \n→ Lisa sieht gut aus, aber sie würde gern besser aussehen. \n→ Lisa liest viel, aber sie würde gern noch mehr lesen. \n→ Lisa treibt viel Sport, aber sie würde gern noch mehr Sport treiben."
          },
          {
            "page": 195,
            "text": "1- Ergänzen Sie WÜRDEN. \n1.) Ich ____________ nach München reisen, aber ich habe kein Geld dabei. \n2.) Paulo ___________ heute Abend eine Show sehen, aber ich bin sehr müde. \n3.) Mein Bruder __________ einen Wagen kaufen, aber er hat keinen Führerschein. \n4.) Wir __________ _ am Samstagabend ins Kino gehen, aber wir haben viele \nHausaufgaben. \n5.) Matthias und Anja ____________ die Mathematik-Hausaufgaben machen, aber sie haben \nnicht das Buch dabei. Sie haben es in der Schule vergessen."
          },
          {
            "page": 196,
            "text": "2.Ergänze die Sätze mit den gegebenen Ausdrücken. \n\n\nWenn ich älter \nwäre, \n…………………………………\n…………………………………\n…………………………………\n……… \n\nWenn ich Urlaub \nhätte, \n…………………………………… \n…………………………………… \n\nWenn heute \nSonntag wäre, \n……………………………\n…………………………… \n\nWenn ich \nkönnte, \n……………………………\n…………………………… \nWenn ich Geld \nhätte, \n.................... \n……………………………\n… \n\nWenn ich beim Lotto \ngewinnen würde, \n…………………………………………………\n…………………………………………………\n…… \n\nEine Karotte essen – Amerikanischen Fußball \nspielen – Klamotten kaufen – ein Haus kaufen – \nmit meiner Familie spazieren gehen – ein Eis essen \n– nach Majorca fliegen – Fußball spielen – angeln \n– Baseball spielen – baden – ein Auto und ein Haus \nkaufen -"
          },
          {
            "page": 197,
            "text": "3. Bilde irreale Wunschsätze! \nMeine Suppe ist völlig versalzen. - Wenn meine Suppe doch nicht so versalzen wäre! \n1.) Der Kellner kommt nicht. \n_______________________________________________________________________________________________________ \n2.) Niemand bringt uns die Speisekarte. \n_______________________________________________________________________________________________________ \n3.) Keiner nimmt unsere Getränkebestellung auf. \n_______________________________________________________________________________________________________ \n4.) In diesem Lokal geht alles viel zu langsam. \n__________________________________________________________________________________________________ \n5.) Der Braten schmeckt einfach nicht. \nWenn ich \nnicht lernen \nsollte, \n……………. \n………………………\n… \n\nWenn ich Zeit \nhätte, ………………… \n………………………………… \n\nWenn ich \nmehr Geld \nhätte, \n.………………………\n… \n…………………………\n…………………………\n. \n\nWenn ich Ferien \nhätte, \n………………………………………\n………………………………………\n………"
          },
          {
            "page": 198,
            "text": "_______________________________________________________________________________________________________ \n6.) Die Kartoffeln sind trocken. \n_______________________________________________________________________________________________________ \n7.) Das Gemüse sieht fürchterlich aus. \n_______________________________________________________________________________________________________ \n8.) In den anderen Restaurants haben wir keinen Platz mehr bekommen. \n_______________________________________________________________________________________________________ \n9.) Die Bedienung hier macht einen total desinteressierten Eindruck. \n_______________________________________________________________________________________________________ \n10.) Der andere Kellner spricht nur Dialekt. \n_______________________________________________________________________________________________________ \n4.Bilde irreale Bedingungssätze! \n1.) Wenn ich Astronaut wäre, ____________________________________________________ \n2.) Wenn ich Russisch könnte, ___________________________________________________ \n3.) _____________________________________________________, wenn ich 30 Jahre wäre. \n4.) Wäre ich der Chef meiner Frau, ________________________________________________ \n5.) Wäre ich unsterblich, ________________________________________________________ \n5. als ob – Welche Form ist richtig? \n1.) Der Maurer arbeitete so langsam, als ob er betrunken gewesen……. \na. wären b. wäre c. hätte \n2.) Die Pfarrerin redet so unkonzentriert, als ob sie die ganze Nacht nicht geschlafen…… \na. hätte b. wäre c. würde \n3.) Die Möbel sind alle so winzig, als ob sie für ein Kind……. \na. wären b. sein würde c. wäre \n4.) Die Kinder telefonieren so lange, als ob das Telefonieren umsonst ……….. \na. wäre b. sie c. ist"
          },
          {
            "page": 199,
            "text": "5.) Die Musiker spielen so schlecht, als ob sie keine Noten lesen………… \na. können b. könnten c. konnten \n6. Die folgenden Sätze im Indikativ sind korrekt. Eine Bitte klingt aber höflicher im \nKonjunktiv II. Ändern Sie bitte! \n1.)Machen Sie mir eine Freude? \n_______________________________________________________________________________________________ \n2.)Sind Sie so nett, meiner schwangeren Frau den Platz zu überlassen? \n________________________________________________________________________________________________ \n3.) Können Sie mir bitte helfen: Das Schließfach scheint kaputt zu sein. \n_________________________________________________________________________________________________ \n4.)Rufen Sie in einer halben Stunde noch mal an? \n_________________________________________________________________________________________________ \n5.)Tun Sie das wirklich für mich? \n__________________________________________________________________________________________________ \n7. Bilde Sätze mit” wenn doch/nur”! \nWir haben nicht viel Geld. Wenn wir doch viel Geld hätten! \n1. Ich bin nicht reich. \n___________________________________________________________________________________________ \n2. Peter ist nicht gesund. \n__________________________________________________________________________________________ \n3. Du hast keine Wohnung. \n____________________________________________________________________________________________ \n4. Wir haben keine Kinokarte. \n____________________________________________________________________________________________ \n5. Ihr seid nicht gut in Mathe. \n____________________________________________________________________________________________ \n6. Du bist nicht freundlich. \n____________________________________________________________________________________________ \n7. Ich habe keinen Freund. \n_____________________________________________________________________________________________ \n8. Die Kinder haben keine Lust. \n_____________________________________________________________________________________________"
          },
          {
            "page": 200,
            "text": "8.Schreib die Sätze in den Konjunktiv um! Benutze die „würde- Form”! \nWenn ich die Hausaufgabe schreibe, höre ich Musik. \n\nWenn ich die Hausaufgabe schreiben würde, würde ich Musik hören. \n1. Ich mache eine Weltreise, wenn ich im Lotto gewinne. \n______________________________________________________________________________________________________ \n2. Wenn es regnet, bleiben wir zu Hause. \n______________________________________________________________________________________________________ \n\n3. Wenn du am Wochenende kommst, gehen wir wandern. \n______________________________________________________________________________________________________ \n\n4. Wenn ihr gut lernt, bekommt ihr einen CD-Player. \n______________________________________________________________________________________________________ \n5. Wenn sie mehr Geld verdienen, kaufen sie ein neues Haus. \n______________________________________________________________________________________________________ \n\n\n9.Bilde Sätze in KonjunktivII! \nich, besser, lernen, mögen \nIch möchte besser lernen. \n1. wir, essen, ein Eis ,dürfen \n___________________________________________________________________________________________ \n2. besser, Deutsch, du,sprechen,müssen \n____________________________________________________________________________________________ \n3. die Großeltern, besuchen, die Kinder \n_____________________________________________________________________________________________ \n4. bestehen, die Prüfung, gut, ihr \n____________________________________________________________________________________________ \n5. ich, mehr,schlafen,wollen \n_____________________________________________________________________________________________ \n\n10.Ergänzen Sie( Manchmal gibt es mehrere Lösungen): \n\n1...................meine Oma hier! \n2.Wenn ich Glück......................!"
          },
          {
            "page": 201,
            "text": "3.......................ihr hier arbeiten? \n4..........du mir helfen würdest,....................ich dir dankbar. \n5..................er auf Oma aufpassen? \n6……………….sie ein Ferienhaus. \n..............sie dort bleiben. \n7………….deiner Stelle,............... ich \nmehr arbeiten. \n8...............du gern nach Paris fahren? \n9.Er benimmt sich,...............er ein König................. \n10................Lisa Peter heiraten,............. \nbeide sehr glücklich. \n\n11.Bilden Sie mehrere Sätze mit .... WÜRDEN.... , ABER ..... . \n1- Wein trinken \n____________________________________________________________________________________________________ \n2- nach Spanien fliegen \n____________________________________________________________________________________________________ \n3- meine Groβeltern besuchen \n____________________________________________________________________________________________________ \n4- einen Kuchen backen \n____________________________________________________________________________________________________5- \nein Buch lesen \n____________________________________________________________________________________________________ \n6- heute Abend reisen \n____________________________________________________________________________________________________ \n7- eine Wohnung kaufen \n____________________________________________________________________________________________________ \n8- eine E-Mail schreiben \n____________________________________________________________________________________________________ \n\n12.Bilden Sie Sätze: \nZum Beispiel: Ich esse eine Tafel Schokolade. \nSusanna würde auch gerne eine Tafel Schokolade essen. \n1) Unser Onkel lebt in Deutschland. \nWir __________________________________________________________________________________________ . \n2) Pauls Schwester tanzt mit einem attaktiven Mann. \nGerda ________________________________________________________________________________________ . \n3) Mein Sohn studiert an der Volkshochschule."
          },
          {
            "page": 202,
            "text": "Ich ____________________________________________________________________________________________ . \n4) Heute abend essen wir Pizza. \nMeine Mutter __________________________________________________________________________________ . \n5) Raul lernt Englisch. \nLudwig _________________________________________________________________________________________ . \n6) Die Nichte von Paula spricht Italienisch. \nInge _____________________________________________________________________________________________ . \n7) Dieses Jahr kaufe ich einen neuen Wagen. \nRoberto ________________________________________________________________________________________ . \n8) Wir möchten eine Wohnung in der Nähe mieten. \nIch ______________________________________________________________________________________________ . \n9) Nächste Woche gehen wir ins Kino. \nMein Mann ______________________________________________________________________________________ . \n10) Meine Schwester möchte eine Katze kaufen. \nPeter ____________________________________________________________________________________________ \n11) Mirella kauft jetzt ein neues Fahrrad ein. \nMein Sohn ______________________________________________________________________________________ \n12) Ich besuche heute Abend Erna. \nMichelle ________________________________________________________________________________________ . \n13) Ich backe einen Kuchen. \nMathias __________________________________________________________________________________________ \n14) Tanja geht auf die Universität. \nIch _______________________________________________________________________________________________ \n15) Anja fliegt dieses Wochenende nach Brasilien. \nPatrick ___________________________________________________________________________________________ \n16) Wir fahren nach Lindau \nIch _______________________________________________________________________________________________ \n\n13.Ergänzen Sie die Sätze: \n1.) Wenn ich reich wäre, würde ich __________________________________________ . \n2.) Wenn mein Brüder verheiratet wäre, ____________________________________ . \n3.) Wenn meine Eltern bei mir wären, _______________________________________ . \n4.) Wenn Anja ein Kind wäre, ________________________________________________ . \n5.) Wenn ihr zu Hause wärt, __________________________________________________ . \n6.) Wenn ich ledig wäre, _______________________________________________________ . \n7.) Wenn das Wetter heute schön wäre _______________________________________ ."
          },
          {
            "page": 203,
            "text": "8.) Wenn ich nicht verspätet wäre, ____________________________________________ . \n9.) Wenn meine Mutter nicht sehr nervös wäre, ______________________________ . \n10.) Wenn meine Eltern noch leben würden, ___________________________________. \n\n14. Schreiben Sie Sätze mit WÜRDEN. \n\n\n1) ______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n_ . \n\n2) ______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n_ . \n\n3) ______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n\n4) ______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n_ . \n\n5) ______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n_ ."
          },
          {
            "page": 204,
            "text": "6) ____________________________________________________________________________________________________\n____________________________________________________________________________________________________\n__."
          }
        ],
        "answerPages": [
          {
            "page": 204,
            "text": "Die Lösungen: \n1- 1. Ich würde nach München reisen, aber ich habe kein Geld dabei. \n2. Paulo würde heute Abend eine Show sehen, aber ich bin sehr müde. \n3. Mein Bruder würde einen Wagen kaufen, aber er hat keinen Führerschein. \n4. Wir würden am Samstagabend ins Kino gehen, aber wir haben viele Hausaufgaben. \n5. Matthias und Anja würden die Mathematik-Hausaufgaben machen, aber sie haben nicht das Buch \ndabei. Sie haben es in der Schule vergessen. \n\n2- 1. Wenn ich älter wäre, würde ich amerikanischen Fußball spielen. \n2. Wenn ich Urlaub hätte, würde ich nach Majorca fliegen. \n3. Wenn heute Sonntag wäre, würde ich mit meiner Familie spazieren gehen. \n4. Wenn ich könnte, würde ich eine Karotte essen. \n5. Wenn ich Geld hätte, würde ich Klamotten kaufen. \n6. Wenn ich beim Lotto gewinnen würde, würde ich ein Haus kaufen. \n7. Wenn ich mehr Geld hätte, würde ich ein Haus und ein Auto kaufen. \n8. Wenn ich nicht lernen sollte, würde ich ein Eis essen. \n9. Wenn ich Zeit hätte, würde ich Fußball spielen. \n10. Wenn ich Ferien hätte, würde ich angeln, baden und Baseball spielen. \n\n3- 1. Der Kellner würde kommen. \n2. Jemand würde uns die Speisekarte bringen. \n3. Jemand/Einer würde unsere Getränkebestellung aufnehmen. \n4. In diesem Lokal würde alles viel zu schnell gehen. \n5. Der Braten würde einfach schmecken. \n6. Die Kartoffeln wäre frisch. \n7. Das Gemüse würde schön aussehen. \n8. Im Restaurant hätten wir einen Platz mehr bekommen. \n9. Die Bedienung hier würde einen total interessierten Eindruck machen. \n10. Der andere Kellner würde mehrere Dialekte sprechen. \n\n4- 1. Wenn ich Astronaut wäre, würde ich Raumfahrzeug kaufen \n2. Wenn ich Russisch könnte, würde ich Russland fliegen \n3. Ich würde heiraten, wenn ich 30 Jahre wäre. \n4. Wäre ich der Chef meiner Frau, würde ich ihr einen Urlaub gönnen \n5. Wäre ich unsterblich, würde ich alles machen. \n\n5- 1. B 2. A 3. A 4. A 5. B"
          },
          {
            "page": 205,
            "text": "6- 1.Würden Sie mir eine Freude Machen? \n2. Wären Sie so nett, meiner schwangeren Frau den Platz zu überlassen? \n3. Könnten Sie mir bitte helfen: Das Schließfach scheint kaputt zu sein. \n4. Würden Sie in einer halben Stunde noch mal anrufen? \n5. Würden Sie das wirklich für mich tun? \n\n7- \n1. Wenn ich doch reich wäre. \n2. Wenn Peter doch gesund wäre. \n3. Wenn du nur eine Wohnung hättest. \n4. Wenn wir nur eine Kinokarte hätten. \n5. Wenn ihr doch gut in Mathe wären. \n6. Wenn du doch freundlich wärst. \n7. Wenn ich nur einen Freund hätte. \n8. Wenn die Kinder doch die Lust hätten. \n\n8- \n1. Wenn ich im Lotto gewinnen würde, würde ich eine Weltreise machen. \n2. Wenn es regnen würde, würden wir zu Hause bleiben. \n3. Wenn du am Wochenende kommen würdest, würden wir wandern gehen. \n4. Wenn ihr gut lernen würdet, würdet ihr einen CD-Player bekommen. \n5. Wenn sie mehr Geld verdienen würden, würden sie ein neues Haus kaufen. \n\n9- \n1. Wir dürften ein Eis essen. \n2. Deutsch müsstest du besser sprechen. \n3. die Kinder sollten die Großeltern besuchen. \n4. Ihr müsstet die Prüfung gut bestehen. \n5. Ich wollte mehr schlafen. \n\n10- \n1.Wäre 2. Hätte 3. Würdet 4. Wenn – wäre 5. Würden 6. Hätte – Würde 7. Hätte – würde 8. Würdest 9. \nwenn – wäre 10. Würde -wäre \n\n11- 1. Ich würde Wein trinken, aber er ist Haram. \n2. Ich würde nach Spanien fliegen, aber ich kann spanisch sprechen. \n3. Ich würde meine Groβeltern besuchen, aber ich habe Keine Zeit. \n4. Ich würde einen Kuchen backen, aber ich habe kein Zucker. \n5. Ich würde ein Buch lesen, aber meine Augen tut mir leid. \n6. Ich würde heute Abend reisen, aber mein Auto ist kaputt. \n7. Ich würde eine Wohnung kaufen, aber ich habe Kein Geld. \n8. Ich würde eine E-Mail schreiben, aber Handyakku ist leer."
          },
          {
            "page": 206,
            "text": "12- \n1. Wir würden gern auch in Deutschland leben. \n2. Gerda würde gern auch mit einem attaktiven Mann tanzen. \n3. Ich würde gern auch an der Volkshochschule studieren. \n4. Meine Mutter würde gern auch heute abend Pizza essen. \n5. Ludwig würde gern auch Englisch lernen. \n6. Inge würde gern auch Italienisch sprechen. \n7. Roberto würde auch dieses Jahr einen neuen Wagen kaufen. \n8. Ich möchte auch eine Wohnung in der Nähe mieten. \n9. Mein Mann würde auch nächste Woche ins Kino gehen. \n10. Peter möchte auch gern eine Katze kaufen. \n11. Mein Sohn würde auch jetzt ein neues Fahrrad einkaufen. \n12. Michelle würde auch heute Abend Erna besuchen. \n13. Mathias würde gern auch einen Kuchen backen. \n14. Ich würde auch auf die Universität gehen. \n15. Patrick würde auch dieses Wochenende nach Brasilien fliegen. \n16. Ich würde gern auch nach Lindau fahren. \n\n13- \n1. Wenn ich reich wäre, würde ich ein Auto kaufen \n2. Wenn mein Brüder verheiratet wäre, wäre er gücklich. \n3. Wenn meine Eltern bei mir wären, würden wir zusammen essen. \n4. Wenn Anja ein Kind wäre, würde sie viele spielen. \n5. Wenn ihr zu Hause wärt, würdet viel schlafen \n6. Wenn ich ledig wäre, würden ich mit meinen Freunden spazieren gehen. \n7. Wenn das Wetter heute schön wäre, würde ich rausgehen. \n8. Wenn ich nicht verspätet wäre, wäre ich glücklich. \n9. Wenn meine Mutter nicht sehr nervös wäre, würde gesunde Mahlzeiten kochen. \n10. Wenn meine Eltern noch leben würden, würde ich ihnen umarmen."
          }
        ]
      },
      {
        "folge": "Folge 25",
        "title": "Konjunktiv II II",
        "printedPageStart": 207,
        "printedPageEnd": 224,
        "sourcePages": [
          {
            "page": 207,
            "text": "➢ Ich besuche dich. Ich habe Zeit. (wenn) \nIch besuche dich, wenn ich Zeit habe. Indikativ \nIch würde dich besuchen, wenn ich Zeit hätte. \nWenn ich Zeit hätte, würde ich dich besuchen. Konjunktiv II \n\n➢ Markus hat kein Geld. Lisa heiratet ihn nicht. (wenn) \nLisa sagt zu Markus: Wenn du viel Geld hast, heirate ich dich. Indikativ \nWenn Markus viel Geld hätte, würde Lisa ihn heiraten. \nLisa würde Markus heiraten, wenn er viel Geld hätte. Konjunktiv II \n\n\n➢ Bayern München gewinnt. Die Spieler besser spielen. (wenn) \nBayern München gewinnt morgen, wenn die Spieler besser spielen. \nBayern würde morgen gewinnen, wenn die Spieler besser spielen würden. \n\n\nWenn ich Zeit habe, besuche ich meinen Freund. \nWenn ich Zeit hätte, würde ich meinen Freund besuchen. \n\nWenn Gomez nicht krank ist, spielt er mit. \nWenn Gomez nicht krank wäre, würde er mit spielen. \n\nWenn ich reich bin, mache ich eine Weltreise. \nWenn ich reich wäre, würde ich eine Weltreise machen. \n\nWenn ich nach Paris reise, besuche ich den Eiffel-Turm. \nWenn ich nach Paris reisen würde, würde ich den Eiffel-Turm besuchen."
          },
          {
            "page": 208,
            "text": "Wenn der Schüler besser lernt, besteht er die Prüfung. \nWenn der Schüler besser lernen würde, würde er die Prüfung bestehen. \n\nWenn ich genug Geld habe, kaufe ich ein neues Auto. \nWenn ich genug Geld hätte, würde ich ein neues Auto kaufen. \n\n\nZ.B. \n3 Cola! \nBringen Sie 3 Cola! \nWürden Sie bitte 3 Cola bringen! \nKönnten Sie bitte 3 Cola bringen! \nSiezen duzen Wir können duzen \n\n\nOhne Verb Tür zu! Sehr unfreundlich \nImperativ Mach die Tür zu! Sehr unfreundlich \nMach bitte die Tür zu! \nFrage Machst du bitte die Tür zu? \nKannst du bitte die Tür zumachen? \nPronomen können Könnten \nich \nkann könnte \ndu \nkannst könntest \ner, es, sie \nkann könnte \nwir \nkönnen könnten \nihr \nkönnt könntet \nsie, Sie \nkönnen könnten"
          },
          {
            "page": 209,
            "text": "Konjunktiv II \nFrage \nWärst du so nett und machst die Tür zu? \nWürdest du bitte die Tür zumachen? \nKonjunktiv II / Modalverben \nKönntest du bitte die Tür zumachen? \nKönntest du bitte mir die Tasche geben? \n\n\n➢ Einen Tisch für 4 Personen. (haben) \nHätten Sie einen Tisch für 4 Personen. \n\n➢ Wir wollen einen Tisch am Fenster. (können) \nKönnten wir einen Tisch am Fenster haben? \n\n➢ Bringen Sie uns bitte das Menü? \nWürden Sie uns bitte das Menü bringen? \n\n➢ Empfehlen Sie uns etwas? (können) \nKönnten Sie uns etwas empfehlen? \n\n➢ Einen Aschenbecher für uns. (haben) \nHätten Sie einen Aschenbecher für uns? \n\n➢ Könnten Sie mir sagen, wo die Toilette ist? \n\n➢ Könnten wir bitte zahlen?"
          },
          {
            "page": 210,
            "text": "1.Bilden Sie höfliche Fragen! \n\n1. Schließen Sie bitte die Tür! (können) \n________________________________________________________________ \n2. Holen Sie die Unterlagen zu diesem Fall aus dem Archiv! (Gefallen tun) \n________________________________________________________________ \n3. Verbinden Sie mich bitte mit Herrn Maier! (werden) \n________________________________________________________________ \n4. Kochen Sie mir einen Kaffee! (Umstände bereiten) \n________________________________________________________________ \n5. Verlassen Sie den Raum für eine Minute! (dürfen) \n________________________________________________________________ \n6. Warten Sie draußen! (nett sein) \n________________________________________________________________ \n7. Bring unseren Gast ins Hotel! (Gefallen tun) \n\n➢ Hätten Sie noch einen Platz frei im Auto? \n\n➢ Könnten/ Würden Sie mich zum Flughafen mitnehmen? \n\n➢ Würden Sie mir den Gefallen tun und mich zum Flughafen mitnehmen? \n\n➢ Könnten Sie bitte die Tür schließen? \n\n➢ Würden Sie mich bitte mit Herrn Shehata verbinden? \n\n➢ Wären Sie so nett und würden draußen warten! \n\n➢ Könntest / Würdest du bitte dein Zimmer aufräumen!"
          },
          {
            "page": 211,
            "text": "________________________________________________________________ \n8. Räumt heute Abend den Seminarraum auf! (können) \n________________________________________________________________ \n9. Sag den anderen nichts über unser Gespräch! (dürfen) \n________________________________________________________________ \n10. Sagt den Kollegen Bescheid! (nett sein) \n________________________________________________________________ \n11. Mach bitte die Tür hinter dir zu! (werden) \n________________________________________________________________ \n2. Formulieren Sie höflicher: \n1. Einen Tisch für 4 Personen! (haben) \n_________________________________________________________________ \n2. Wir wollen einen Tisch am Fenster. (können) \n_________________________________________________________________ \n3. Bringen Sie uns bitte die Speisekarte! (werden) \n_________________________________________________________________ \n4. Empfehlen Sie uns etwas! (können) \n_________________________________________________________________ \n5. Einen Aschenbecher für uns! (haben) \n_________________________________________________________________ \n6. Bringen Sie uns noch einen zweiten Teller! (nett sein) \n_________________________________________________________________ \n7. Sagen Sie mir, wo die Toiletten sind! (können) \n_________________________________________________________________ \n8. Packen Sie uns das übrig gebliebene Essen ein! (Umstände) \n_________________________________________________________________ \n9. Zahlen, bitte! (können) \n_________________________________________________________________ \n\n3.Bilde irreale Wunschsätze! a) Gegenwart/ b) Vergangenheit \n1. Wenn das Kind doch (spielen). \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n2. Wenn der Hund doch (folgen). \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__"
          },
          {
            "page": 212,
            "text": "3. Wenn sie mir doch das Kleid (kaufen) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n4. Wenn er doch seine Vokabel (lernen) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n5. Wenn es doch nicht (regnen) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n6. Wenn der Handwerker doch den Schaden (reparieren) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n7. Wenn er doch nicht soviel (fragen) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n8. Wenn sie doch ein Telegramm (schicken) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n9. Wenn er doch (kommen). \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n10. Wenn sie doch die Zeitung (bringen) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n11. Wenn er doch besser (schreiben) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n12. Wenn die Schüler doch nicht so faul (sein)."
          },
          {
            "page": 213,
            "text": "______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n13. Wenn wir doch nach Hause gehen (dürfen) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n14. Wenn er doch nicht (vergessen) \n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________ \n15. Wenn wir doch viel Geld (haben) \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n16. Wenn das Kind doch (essen). \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n\n4. Bilde irreale Bedingungssätze! \na) Gegenwart \nb) Vergangenheit \n1. Wenn Edgar nicht krank ist, kann er mitspielen. \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n2. Ich mache eine große Reise, wenn ich reich bin. \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n3. Was machst du, wenn du ein Filmstar bist? \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n4. Wenn wir nach London fahren, besuche ich den Tower."
          },
          {
            "page": 214,
            "text": "______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n\n5. Wenn der Student fleißig arbeitet, kann er die Prüfung bestehen. \n______________________________________________________________________________________________________\n______________________________________________________________________________________________________\n__ \n6. Ich sehe den Film noch einmal an, wenn er mir gefällt. \n______________________________________________________________________________________________________\n__________________________________________________________________________________________________ \n\n5.Wiederhole die folgenden Sätze ohne \"wenn\": \n1. Wenn er pünktlich gekommen wäre, hätten wir mit der Arbeit beginnen können. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n2. Sie könnte eine berühmte Pianistin werden, wenn sie fleißiger übte. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n3. Wenn der Arzt nicht eingegriffen hätte, wäre der Patient gestorben. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n4. Er hätte mich gegrüßt, wenn er mich erkannt hätte. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n5. Wenn es nicht regnete, gingen wir spazieren. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n6. Ich würde das Bild kaufen, wenn ich Platz dafür hätte. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n7. Wenn er eine Brille trüge, brauchte er seine Augen nicht so anzustrengen. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________"
          },
          {
            "page": 215,
            "text": "8. Die Menschen wären glücklich, wenn es keinen Krieg gäbe. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n9. Wenn es stark schneite, könnten wir Schi fahren. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n10. Ich würde sofort antworten, wenn Elke schriebe. \n_______________________________________________________________________________________________________\n___________________________________________________________________________________________________ \n\n6.Schreiben Sie -höfliche Bitten -in der „Du”- oder -„Sie”-Form. Verwenden Sie„könnt-\n” und„würd-”. \n1.Unterschreiben Sie hier! \n________________________________________________________________________________________________ \n2. Komm mal her! \n________________________________________________________________________________________________ \n3. Lesen Sie den Text! \n_________________________________________________________________________________________________ \n4. Mach das Licht an! \n_________________________________________________________________________________________________ \n5. Sprechen Sie langsamer! \n_________________________________________________________________________________________________ \n6. Sei ruhig! \n_________________________________________________________________________________________________ \n7. Hilf mir mal! \n__________________________________________________________________________________________________ \n8. Rufen Sie später noch einmal an! \n__________________________________________________________________________________________________ \n\n\n7.Bilde höfliche Fragen mit dem Konjunktiv II. \n\n1. Kann ich bitte Feuer haben? \n_______________________________________________________________________________________ ? \n2. Darf ich Sie um Auskunft bitten? \n_______________________________________________________________________________________ ? \n3. Werden Sie mir behilflich sein? \n________________________________________________________________________________________ ? \n4. Können Sie mir Ihren Kugelschreiber leihen? \n________________________________________________________________________________________ ? \n5. Schließen Sie bitte die Tür!"
          },
          {
            "page": 216,
            "text": "________________________________________________________________________________________ ! \n6. Reichen Sie mir bitte den Zucker! \n________________________________________________________________________________________ ! \n7. Können Sie 1000 Euro wechseln? \n________________________________________________________________________________________ ? \n8. Kommen Sie heute Nachmittag in mein Büro! \n________________________________________________________________________________________ ! \n9. Wollen Sie noch ein Glas Bier? \n________________________________________________________________________________________ ? \n10. Darf ich Sie um einen Gefallen bitten? \n________________________________________________________________________________________ ? \n\n\n8. Formulieren Sie höfliche Bitten im Konjunktiv II. \n1. ________________ Sie mir sagen, wie spät es ist? (können) \n2. _______________du mir diesen Aufsatz kopieren? (werden) \n3. ________________Sie nächste Woche Zeit für mich? (haben) \n4. _______________ Sie bitte die Tür schließen? (werden) \n5. _______________ ich das Fenster öffnen? (dürfen) \n6. _______________du mir beim Umzug helfen? (können) \n7. ______________ ihr mir die Aufgabe nochmal erklären, bitte? (werden) \n8. Joachim, ________________ ich dein Auto nehmen? (können) \n9. ________________ ihr mir den Artikel vorlesen, Kinder? (können) \n10. _______________Sie so freundlich und _____________ mir helfen? (sein, werden) \n\n9.Ergänzen Sie: \nMusik leiser drehen) 1. Würden ________________.? \n(mir einen Kaffee machen) 2. Könnten _________________.? \n(mir die Zeitung geben) 3. Würden ___________________.? \n(mir Ihren Stift leihen) 4. Könnten _____________________.? \n(das Fenster schließen) 5. Würden _____________________ .? \n(leiser sein) 6. Würden _________________.?"
          },
          {
            "page": 217,
            "text": "10-Bilden Sie Wunschsätze. \n\nHier ist es so kalt. Hier wäre es warm. \n1- Hier ist es so dunkel. \n2- Warum singt er so laut? \n3- Der Wein schmeckt schlecht. \n4- Das Mädchen ist so klein. \n5- Ute bleibt heute nicht bei mir. \n6- Warum fährt er so langsam? \n7- Klaus hat keine Freundin. \n8- Der Bus fährt so spät ab. \n9- Klaus hat keine Freundin. \n10- Der Bus fährt so spät ab. \n\n11- Bilden Sie die Sätze: \n\nDas Geld liegt nicht in der Schublade. Ich finde es nicht. \nWenn das Geld in der Schublade liegen würde, würde ich es finden. \n1 Johannes ist sehr faul. Er kann die schwere Prüfung nicht bestehen. \n2 Ich bekomme eine Lohnerhöhung. Ich suche mir keinen neuen Job. \n3 Der Schiedsrichter pfeift nicht. Es gibt keinen Elfmeter. \n4 Heute ist das Wetter sehr schlecht. Ich gehe nicht spazieren. \n5 Der Zug ist mal wieder unpünktlich. Herr Leu kommt zu spät zur Arbeit. \n6 Der Autofahrer fährt zu schnell. Er muss eine Geldstrafe zahlen. \n7 Herr Mau sieht Frau Lau nicht. Er grüßt sie nicht. \n8 Oliver ist noch sehr klein. Er kann nicht über die Mauer klettern."
          },
          {
            "page": 218,
            "text": "9 Hans macht seine Hausaufgaben nicht. Deshalb darf er heute nicht ins Kino \ngehen. \n10 Es hat seit Monaten nicht geregnet. Flüsse und Seen sind ausgetrocknet. \n\n\n12- Könnte, wäre, hätte oder würde? Ergänzen Sie die Verben in der richtigen Form. \nManchmal sind mehrere Lösungen möglich Aussprachehilfe. \n1. Auf der Straße \nEntschuldigung, könnten Sie mir sagen, wie ich zur Schillerstraße komme? \nVerzeihung, ......... Sie von uns ein Foto machen? \nEntschuldigung, ………. Sie zwei Euro für mich? \n2. Im Restaurant ........ Sie mir die Speisekarte bringen? \nWelches Gericht………. Sie mir empfehlen? \nIch ................ gern die Tagessuppe. \nIch............... gern zahlen. \n3. Im Deutschkurs \n................ du bitte langsamer sprechen? \n……………….Sie so nett, den Satz zu wiederholen? \n………...... ihr eine Fotokopie für mich? \n..................Sie dieses Wort an die Tafel schreiben? \n4. im Geschäft \n………….Sie mir den Katalog zeigen? \n................ Sie Kleingeld? \n............. ich mit Kreditkarte zahlen? \nIch………………. das Kleid gerne anprobieren. \n\n\n13.Bilden Sie Sätze. \n\n• Anna: Ich kann die Flasche nicht öffnen, (du - die Flasche - öffnen) \nKönntest/Würdest du die Flasche öffnen? \n\n1. Conrad: Ich brauche Hilfe. (Sie-mir-helfen) \n2. Dora: Ich möchte Eis essen, aber ich habe meine Geldbörse vergessen, (ihr - haben - \nvielleicht - Geld für mich) \n3. Norbert: Ich kenne den Weg zum Hauptbahnhof nicht. (Sie- mir-den Weg -zeigen) \n4. Fiona: Ich kann nicht Chinesisch, (du - diese Gebrauchsanweisung - ins Deutsche - \nübersetzen) \n5. Oswald: Ich habe keinen Wecker. (Sie - mich -um 7 Uhr - wecken) \n6. Dieter: Mein Fahrrad ist kaputt, (du -es- reparieren) \n7. Tamara: Mein Koffer ist sehr schwer. (Sie - meinen Koffer - tragen) \n8. Gudrun: Otto kommt heute an. (du - ihn - abholen)"
          },
          {
            "page": 219,
            "text": "9. Johann: Ich habe einen Tisch gekauft. Ich muss ihn nach Hause bringen, (ihr - mir - euer \nAuto - leihen) \n10. Tanja: Ich muss arbeiten, (du - einkaufen – gehen) \n\n14)Rita organisiert eine Party. Sie hat viel zu tun und bittet um Hilfe. \n\n• Konrad - das Geschirr abspülen \n\"Rita sagt zu Konrad: Könntest/Würdest du bitte das Geschirr abspülen? \n\n1. Beate und Rudi - Getränke kaufen Rita sagt: .... ......................... \n2. Sie - den Kuchen bestellen .................................................................................. \n3. Laura - CDs mitbringen ........................................................................... \n4. Joseph und Katja - Brötchen machen ................................................................................. \n5. Sie - Gläser auf den Tisch stellen .............. \n6. Mama - uns beim Saubermachen helfen ......................................................... ................... \n7. Bruno - den Teppich aufrollen ................................................................................. \n8. Olga und Paula - einige Stühle auf die Terrasse bringen .............................. \n\n15) Wünsche. Formulieren Sie die Wünsche von Annemarie wie im Beispiel. \n\n• Deutsch lernen Wenn Oskar doch endlich .. \nDeutsch lernen würde! \n1. anrufen ............................................. \n2. immer pünktlich sein ................................... .......... \n3. öfter nachdenken ............................................. \n4. mehr Zeit für mich haben ........... \n5.mehr Sport treiben ............................ . \n6.eine große Erfindung machen ....................................... \n7.für mich ein Liebesgedicht schreiben ........................... ................. \n8. nicht mehr nach anderen Frauen gucken ........................................... \n9. fünf Kilo abnehmen ............................................ \n10. kochen können ............................................. \n11. mal aufräumen ....................... \n12. selbst seine Sachen waschen ................................... \n13. vorsichtiger fahren .......................... \n14. ein bisschen Geld sparen ……………… \n16)Formulieren Sie irreale Bedingungssätze und antworten Sie wie im Beispiel. \n\n• Wenn ich Zeit/Lust hätte ... • Wenn ich reich wäre ... • Wenn ... ; \n• Kaufst du mir diese Tasche von Chanel? \n\nWenn ich reich wäre, würde ich dir die Tasche kaufen – \naber leider bin ich nicht reich."
          },
          {
            "page": 220,
            "text": "1. Übersetzt du den Brief ins Japanische? \nWenn ich Japanisch könnte, ...................................... \n2. Kommst du heute mit mir in die Oper? \n............................................................................................... \n3. Lädst du mich auf eine Kreuzfahrt in die Karibik ein? \n................................................................................. \n4. Kochst du für mich heute Abend etwas Leckeres? \n........................................................................................................ \n5. Druckst du die Dokumente für mich aus? \n................................................................................................................ \n6. Passt du heute auf die Kinder auf? ......................................................................... \n7. Würden Sie die Arbeit von Frau Krause zusätzlich erledigen? \n…………………………………………………………………………………………….. \n\n17) Was passt? Ergänzen Sie die Sätze. Manchmal gibt es mehrere Lösungen. \n\nmeinem Chef die Meinung sagen • nicht mehr arbeiten • einen Roman schreiben • kein \nFastfood mehr essen • immer im Stau stehen • jeden Tag spazieren gehen • öfter ins Kino \ngehen • mich erholen • besser Deutsch sprechen • Wenn ich Zeit hätte, \n\n\n➢ Wenn ich Zeit hätte, würde ich öfter ins Kino gehen. \n1. Wenn ich reich wäre, \n2. Wenn ich mehr Fantasie hätte, \n3. Wenn ich mehr Mut hätte, \n4. Wenn ich einen Hund hätte, \n5. Wenn ich besser kochen könnte, \n6. Wenn ich einen deutschen Freund hätte, \n7. Wenn ich ein Auto hätte, \n8. Wenn ich jetzt im Urlaub wäre, \n\n18)Ergänzen Sie in dem Telefongespräch könnten, würden, wären und hätten in der \nrichtigen Form. \n\nRezeptionist: Wohnzentrum „Chic\", guten Tag. Was kann ich für Sie tun? \nHerr Stein: Hier ist Erich Stein...................... ich bitte Frau Kaiser sprechen? \nRezeptionist: Einen Moment bitte, ich verbinde Sie. \nFrau Kaiser: Kaiser. \nHerr Stein: Guten Tag, Frau Kaiser, hier ist Erich Stein von der Firma Möbel-Design. Ich \n..................... gern mit Ihnen einen Termin vereinbaren. \nFrau Kaiser: Ah, Herr Stein! Ich habe Ihren Anruf schon erwartet. Es geht um die neue \nMöbelkollektion, richtig?"
          },
          {
            "page": 221,
            "text": "Herr Stein: Ja, genau. Ich ..................... Ihnen gerne unsere neuen Wohnzimmermöbel \nvorstellen. \nFrau Kaiser: Wie ..................... es nächste Woche? ..................... Sie am Dienstag Zeit? \nHerr Stein: Nein, das tut mir leid, am Dienstag habe ich schon einen anderen Termin. Der \nMittwoch ..................... mir lieber. \nFrau Kaiser: Mittwoch ..., ja Mittwoch ..................... prima. Treffen wir uns in meinem \nBüro?......................Sie um 10.00 Uhr hier sein? \nHerr Stein: Ja, das schaffe ich. Ich bin um 10.00 Uhr da. \nFrau Kaiser: Gut, dann sehen wir uns nächste Woche."
          }
        ],
        "answerPages": [
          {
            "page": 221,
            "text": "Die Lösungen: \n\n1) Könnten Sie bitte die Tür schließen? 2.Würden Sie mir (bitte) den Gefallen tun und die \nUnterlagen zu diesem Fall aus dem Archiv holen? /, die Unterlagen zu diesem Fall aus dem \nArchiv zu holen? 3. Würden Sie mich bitte mit Herrn Maier verbinden?4.Würde es Ihnen \nUmstände bereiten, mir einen Kaffee zu kochen? 5.Dürfte ich Sie bitten, für eine Minute den \nRaum zu verlassen? 6. Würden Sie so nett sein und draußen warten? /Würden Sie so nett \nsein und warten Sie draußen? /Würden Sie so nett sein, draußen zu warten? 7.Würdest du \nmir den Gefallen tun und unseren Gast ins Hotel bringen? / Würdest du mir den Gefallen tun, \nunseren Gast ins Hotel zu bringen?8.Könntet ihr heute Abend den Seminarraum aufräumen? \n9.Dürfte ich dich bitten, den anderen nichts über unser Gespräch zu sagen?10.Würdet ihr so \nnett sein und den Kollegen Bescheid sagen? /Würdet ihr so nett sein und sagt den Kollegen \nBescheid? / Würdet ihr so nett sein, den Kollegen Bescheid zu sagen?11.Würdest du bitte die \nTür hinter dir zu machen? \n\n2) 1.Hätten Sie noch einen Tisch für 4 Personen?2.Könnten wir einen Tisch am Fenster haben?3. \nWürden Sie uns bitte die Speisekarte bringen?4.Könnten Sie uns etwas empfehlen? 5.Hätten \nSie (vielleicht) einen Aschenbecher für uns? 6.Würden/Könnten Sie so nett sein und uns noch \neinen zweiten Teller bringen? Würden/Könnten Sie so nett sein und bringen uns noch einen \nzweiten Teller? 7.Könnten Sie mir sagen, wo die Toiletten sind? 8.Würde es Ihnen Umstände \nmachen, uns das übrig gebliebene Essen einzupacken? 9.Könnten wir/ Könnte ich bitte \nzahlen? \n\n3) 1. Wenn das Kind doch (spielen). - Wenn das Kind doch spielte (= spielen würde)! – Wenn das \nKind doch gespielt hätte! 2. Wenn der Hund doch (folgen). – Wenn der Hund doch folgte! – \nWenn der Hund doch gefolgt hätte! 3. Wenn sie mir doch das Kleid (kaufen) – Wenn sie mir \ndas Kleid doch kauften! – Wenn sie mir das Kleid doch gekauft hätten!4. Wenn er doch seine \nVokabel (lernen) – Wenn er doch seine Vokabel lernte! – Wenn er doch seine Vokabel gelernt \nhätte! 5. Wenn es doch nicht (regnen) – Wenn es doch nicht regnete! – Wenn es doch nicht \ngeregnet hätte! 6. Wenn der Handwerker doch den Schaden (reparieren) – Wenn der \nHandwerker doch den Schaden reparierte! – Wenn der Handwerker den Schaden doch \nrepariert hätte! 7. Wenn er doch nicht so viel (fragen) – Wenn er doch nicht so viel fragte! –"
          },
          {
            "page": 222,
            "text": "Wenn er doch nicht so viel gefragt hätte! 8. Wenn sie doch ein Telegramm (schicken) – Wenn \nsie doch ein Telegramm schickten! – Wenn sie doch ein Telegramm geschickt hätten! 9. \nWenn er doch (kommen). – Wenn er doch käme! – Wenn er doch gekommen wäre! 10. Wenn \nsie doch die Zeitung (bringen) – Wenn sie doch die Zeitung brächten! – Wenn sie doch die \nZeitung gebracht hätten! 11. Wenn er doch besser (schreiben) – Wenn er doch besser \nschriebe! – Wenn er doch besser geschrieben hätte! 12. Wenn die Schüler doch nicht so faul \n(sein). – Wenn die Schüler doch nicht so faul wären! – Wenn die Schüler doch nicht so faul \ngewesen wären! 13. Wenn wir doch nach Hause gehen (dürfen) – Wenn wir doch nach Hause \ngehen dürften! – Wenn wir doch nach Hause gehen hätten dürfen! 14. Wenn er doch nicht \n(vergessen) – Wenn er doch nicht vergäße! – Wenn er doch nicht vergessen hätte! 15. Wenn \nwir doch viel Geld (haben) – Wenn wir doch viel Geld hätten! – Wenn wir doch viel Geld \ngehabt hätten! 16. Wenn das Kind doch (essen). – Wenn das Kind doch äße! – Wenn das Kind \ndoch essen würde! \n\n4) 1. Wenn Edgar nicht krank ist, kann er mitspielen. – Wenn Edgar nicht krank wäre, könnte er \nmitspielen. - Wenn Edgar nicht krank gewesen wäre, hätte er mitspielen können.2. Ich \nmache eine große Reise, wenn ich reich bin. – Wenn ich reich wäre, würde ich eine große \nReise machen. – Wenn ich reich gewesen wäre, hätte ich eine große Reise gemacht. 3. Was \nmachst du, wenn du ein Filmstar bist? – Was würdest du machen, wenn du ein Filmstar \nwärst? –Was hättest du gemacht, wenn du ein Filmstar gewesen wärst? 4. Wenn wir nach \nLondon fahren, besuche ich den Tower. – Wenn wir nach London fahren würden, würde ich \nden Tower besuchen. – Wenn wir nach London gefahren wären, hätte ich den Tower \nbesucht. 5. Wenn der Student fleißig arbeitet, kann er die Prüfung bestehen. – Wenn der \nStudent fleißig arbeiten würde, könnte er die Prüfung bestehen. – Wenn der Student fleißig \ngearbeitet hätte, hätte er die Prüfung bestehen können. 6. Ich sehe den Film noch einmal an, \nwenn er mir gefällt. - Ich würde den Film noch einmal ansehen, wenn er mir gefiele. – Ich \nhätte den Film noch einmal angesehen, wenn er mir gefallen hätte. \n\n5) 1. Wäre er pünktlich gekommen, hätten wir mit der Arbeit beginnen können. 2. Sie könnte \neine berühmte Pianistin werden, würde sie fleißiger üben. 3.Hätte der Arzt nicht \neingegriffen, wäre der Patient gestorben. 4. Er hätte mich gegrüßt, hätte er mich erkannt. 5. \nWürde es nicht regnen, gingen wir spazieren.6. Ich würde das Bild kaufen, hätte ich Platz \ndafür. 7. Trüge er eine Brille (= würde er eine Brille tragen), brauchte er seine Augen nicht so \nanzustrengen. 8. Die Menschen wären glücklich, gäbe es keinen Krieg. 9. Schneite es stark (= \nwürde es stark schneien), könnten wir Schi fahren. 10. Ich würde sofort antworten, würde \nElke schreiben. \n\n6) 1. Könnten/Würden Sie hier unterschreiben? 2. Könntest/Würdest du mal herkommen? 3. \nKönnten/Würden Sie den Text lesen? 4. Könntest/Würdest du das Licht anmachen? 5."
          },
          {
            "page": 223,
            "text": "Könnten/Würden Sie bitte langsamer sprechen? 6. Könntest/Würdest du bitte ruhig sein? 7. \nKönntest/Würdest du mir mal helfen? 8. Könnten/Würden Sie später noch einmal anrufen? \n\n7) 1.Könnte ich bitte Feuer haben?2.Dürfte ich Sie um Auskunft bitten? 3.Würden Sie mir \nbehilflich sein?4.Könnten Sie mir Ihren Kugelschreiber leihen?5.Könnten/Würden Sie bitte \ndie Tür schließen!6.Würden Sie mir bitte den Zucker reichen!7.Könnten Sie 1000 Euro \nwechseln? 8.Würden Sie heute Nachmittag in mein Büro kommen!9.Wollten Sie noch ein \nGlas Bier?10. Dürfte ich Sie um einen Gefallen bitten? \n\n\n8) 1. könnten 2. Würdest 3. Hätten 4. Würden 5. Dürfte 6. Könntest 7. Würdet 8. Könnte 9. \nKönntet 10. Wären – Würden \n\n9) 1. Würden Sie Musik leiser drehen? 2. Könnten Sie mir einen Kaffee machen? 3. Würden Sie \nmir die Zeitung geben? 4. Könnten Sie mir Ihren Stift leihen? 5. Würden Sie das Fenster \nschließen?6. Würden Sie leiser sein? \n\n10) 1. Wenn es hier doch nur heller wäre! 2. Wenn er doch nur leiser singen würde! 3. Wenn der \nWein doch nur besser schmecken würde! 4. Wenn die Aufgabe doch nur einfacher wäre! 5. \nWenn das Mädchen doch nur größer wäre! 6. Wenn er doch nur die Tür nicht zugemacht \nhätte! 7. Wenn Ute heute doch nur bei mir bleiben würde! 8. Wenn er doch nur schneller \nfahren würde! 9. Wenn Klaus doch nur eine Freundin hätte! 10. Wenn der Bus doch nur \nfrüher abfahren würde! \n\n11) 1.Wenn Johann es fleißiger wäre, könnte er die schwere Prüfung bestehen. 2. Wenn ich keine \nLohn Erhöhung bekommen würde, würde ich mir einen neuen Job suchen. 3. Wenn der \nSchiedsrichter pfeifen würde, würde es einen Elf Meter geben. 4. Wenn das Wetter heute \nbesser wäre, würde ich spazieren gehen. 5. Wenn der Zug pünktlicher wäre, würde Herr Leu \nnicht zu spät zur Arbeit kommen. 6. Wenn der Auto Fahrer langsamer fahren würde, müsste \ner keine Geld Strafe zahlen. 7. Wenn Herr Mau Frau Lau sehen würde, würde er sie grüßen. \n8. Wenn Oliver größer wäre, könnte er über die Mauer klettern. 9. Wenn Hans seine \nHausaufgaben machen würde, dürfte er heute ins Kino gehen. 10. Wenn es geregnet hätte, \nwären Flüsse und Seen nicht ausgetrocknet. \n\n12) 1. könnten/würden, hätten 2. Könnten/Würden, könnten/würden, hätte, würde 3. \nKönntest/Würdest, Wären, Hättet, Könnten/Würden 4. Könnten/Würden, Hätte \n\n13) 1. Könnten/Würden Sie mir helfen? 2. Hättet ihr vielleicht (etwas) Geld für mich? 3. \nKönnten/Würden Sie mir den Weg zeigen? 4. Könntest/Würdest du diese \nGebrauchsanweisung ins Deutsche übersetzen? 5. Könnten/Würden Sie mich um 7 Uhr"
          },
          {
            "page": 224,
            "text": "wecken? 6. Könntest/Würdest du es reparieren? 7. Könnten/ Würden Sie meinen Koffer \ntragen? 8. Könntest/Würdest du ihn abholen? 9. Könntet/Würdet ihr mir euer Auto leihen? \n10. Könntest/Würdest du einkaufen gehen? \n\n14) 1. Könntet/Würdet ihr bitte Getränke kaufen? 2. Könnten/Würden Sie den Kuchen bestellen? \n3. Könntest/Würdest du CDs mitbringen? 4. Könntet/ Würdet ihr Brötchen machen? 5. \nKönnten/Würden Sie Gläser auf den Tisch stellen? 6. Könntest/Würdest du uns beim \nSaubermachen helfen? 7. Könntest/Würdest du den Teppich aufrollen? 8. Könntet/Würdet \nihr einige Stühle auf die Terrasse bringen? \n\n15) 1. anrufen würde 2. immer pünktlich wäre 3. öfter nachdenken würde 4. mehr Zeit für mich \nhätte 5. mehr Sport treiben würde 6. eine große Erfindung machen würde 7. für mich ein \nLiebesgedicht schreiben würde 8. nicht mehr nach ändern Frauen gucken würde 9. fünf Kilo \nabnehmen würde 10. kochen könnte 11. mal aufräumen würde 12. selbst seine Sachen \nwaschen würde 13. vorsichtiger fahren würde 14. ein bisschen Geld sparen würde. \n\n16) 1. Wenn ich Japanisch könnte, würde ich den Brief ins Japanische übersetzen - aber leider \nkann ich kein Japanisch. 2. Wenn ich eine Eintrittskarte hätte, würde ich heute mit dir in die \nOper kommen - aber leider habe ich keine Eintrittskarte. 3. Wenn ich reich wäre, würde ich \ndich auf eine Kreuzfahrt in die Karibik einladen - aber leider bin ich nicht reich. 4. Wenn ich \nZeit hätte, würde ich für dich heute Abend etwas Leckeres kochen - aber leider habe ich keine \nZeit. 5. Wenn mein Drucker funktionieren würde, würde ich die Dokumente für dich \nausdrucken - aber leider funktioniert mein Drucker nicht. 6. Wenn ich Lust hätte, würde ich \nheute auf die Kinder aufpassen - aber leider habe ich keine Lust. 7. Wenn sie eine nette \nKollegin wäre, würde ich die Arbeit von Frau Krause zusätzlich erledigen - aber leider ist sie \nkeine nette Kollegin. \n\n17) 1. würde ich nicht mehr arbeiten. 2. würde ich einen Roman schreiben. 3. würde ich meinem \nChef die Meinung sagen. 4. würde ich jeden Tag spazieren gehen. 5. würde ich kein Fastfood \nmehr essen. 6. würde ich besser Deutsch sprechen. 7. würde ich immer im Stau stehen. 8. \nwürde ich mich erholen. \n\n18) Könnte, würde, würde, wäre, Hätten, wäre, wäre, Könnten/Würden"
          }
        ]
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "unternahmen",
          "konnte/ wollte/ durfte",
          "war"
        ],
        "answer": "war"
      },
      {
        "id": "q-2",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "kam",
          "lachten",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind",
          "falsch"
        ],
        "answer": "kam"
      },
      {
        "id": "q-3",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "durfte",
          "Roberto würde auch dieses Jahr einen neuen Wagen kaufen",
          "konnten",
          "kamen"
        ],
        "answer": "kamen"
      },
      {
        "id": "q-4",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 26",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "nahm",
          "Die Bedienung hier würde einen total interessierten Eindruck machen",
          "mussten",
          "konnten"
        ],
        "answer": "konnten"
      },
      {
        "id": "q-5",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 34",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Er glaubt, dass Jeans schick sind",
          "sollten/ sollte",
          "sagten",
          "falsch"
        ],
        "answer": "sagten"
      },
      {
        "id": "q-6",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 44",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "fing an",
          "wollten",
          "Die Bedienung hier würde einen total interessierten Eindruck machen",
          "Frau Beier musste zum Zahnarzt gehen"
        ],
        "answer": "fing an"
      },
      {
        "id": "q-7",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 52",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "konnten",
          "sollten/ sollte",
          "ging"
        ],
        "answer": "ging"
      },
      {
        "id": "q-8",
        "prompt": "Folge 21: Präteritum II · Übung 1 · item 61",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wollte",
          "solltest",
          "Ich stand um 7 Uhr auf",
          "waren"
        ],
        "answer": "waren"
      },
      {
        "id": "q-9",
        "prompt": "Folge 21: Präteritum II · Übung 2 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich ging nach Hause. Ich bin nach Hause gegangen",
          "vorsichtiger fahren würde",
          "konnten",
          "mussten"
        ],
        "answer": "Ich ging nach Hause. Ich bin nach Hause gegangen"
      },
      {
        "id": "q-10",
        "prompt": "Folge 21: Präteritum II · Übung 3 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "durftest",
          "brachte",
          "Wenn ich Zeit hätte, würde ich Fußball spielen",
          "Wenn ihr doch gut in Mathe wären"
        ],
        "answer": "brachte"
      },
      {
        "id": "q-11",
        "prompt": "Folge 21: Präteritum II · Übung 3 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Hätte – würde",
          "m",
          "Die Bedienung hier würde einen total interessierten Eindruck machen",
          "Könntest/Würdest du ihn abholen?"
        ],
        "answer": "m"
      },
      {
        "id": "q-12",
        "prompt": "Folge 21: Präteritum II · Übung 3 · item 26",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Könnten/Würden Sie später noch einmal anrufen?",
          "m",
          "schrie",
          "wollten"
        ],
        "answer": "schrie"
      },
      {
        "id": "q-13",
        "prompt": "Folge 21: Präteritum II · Übung 4 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "konnten",
          "konnte/ wollte/ durfte",
          "durften",
          "wollten"
        ],
        "answer": "konnte/ wollte/ durfte"
      },
      {
        "id": "q-14",
        "prompt": "Folge 21: Präteritum II · Übung 5 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vorsichtiger fahren würde",
          "sollten/ sollte",
          "durfte",
          "konnte"
        ],
        "answer": "durfte"
      },
      {
        "id": "q-15",
        "prompt": "Folge 21: Präteritum II · Übung 6 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "konnten",
          "erblickte",
          "schrie",
          "Ich würde heute Abend reisen, aber mein Auto ist kaputt"
        ],
        "answer": "erblickte"
      },
      {
        "id": "q-16",
        "prompt": "Folge 21: Präteritum II · Übung 7 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "ging",
          "kamen",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind",
          "konnte"
        ],
        "answer": "konnte"
      },
      {
        "id": "q-17",
        "prompt": "Folge 21: Präteritum II · Übung 7 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dass",
          "konnten",
          "Wenn ich reich wäre, würde ich ein Auto kaufen",
          "sagten"
        ],
        "answer": "konnten"
      },
      {
        "id": "q-18",
        "prompt": "Folge 21: Präteritum II · Übung 7 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "solltest",
          "durften",
          "mussten",
          "durftest"
        ],
        "answer": "durften"
      },
      {
        "id": "q-19",
        "prompt": "Folge 21: Präteritum II · Übung 7 · item 30",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dass",
          "wollte",
          "brachte",
          "Du konntest in der See mit 6 Jahre schwimmen"
        ],
        "answer": "wollte"
      },
      {
        "id": "q-20",
        "prompt": "Folge 21: Präteritum II · Übung 9 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Er mochte keinen Kaffee mehr trinken",
          "konnte",
          "Wenn ich reich wäre, würde ich ein Auto kaufen",
          "ging"
        ],
        "answer": "ging"
      },
      {
        "id": "q-21",
        "prompt": "Folge 21: Präteritum II · Übung 9 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "durften",
          "Es tut ihr leid, dass er zu spät gekommen ist",
          "mussten",
          "nahm"
        ],
        "answer": "nahm"
      },
      {
        "id": "q-22",
        "prompt": "Folge 21: Präteritum II · Übung 9 · item 22",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "ging",
          "sah",
          "Er glaubt, dass Jeans schick sind"
        ],
        "answer": "sah"
      },
      {
        "id": "q-23",
        "prompt": "Folge 21: Präteritum II · Übung 10 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "ging",
          "1. Wenn es hier doch nur heller wäre!",
          "konnten",
          "Ich stand um 7 Uhr auf"
        ],
        "answer": "Ich stand um 7 Uhr auf"
      },
      {
        "id": "q-24",
        "prompt": "Folge 21: Präteritum II · Übung 11 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "musste",
          "Wenn ich Zeit hätte, würde ich Fußball spielen",
          "vergaß",
          "mussten"
        ],
        "answer": "musste"
      },
      {
        "id": "q-25",
        "prompt": "Folge 21: Präteritum II · Übung 11 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "falsch",
          "mochte",
          "vergaß",
          "1. anrufen würde"
        ],
        "answer": "vergaß"
      },
      {
        "id": "q-26",
        "prompt": "Folge 21: Präteritum II · Übung 11 · item 22",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich bin froh, dass es dir wieder besser geht",
          "m",
          "vergaß",
          "vergaßen"
        ],
        "answer": "vergaßen"
      },
      {
        "id": "q-27",
        "prompt": "Folge 21: Präteritum II · Übung 11 · item 30",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "musste",
          "konnte",
          "vergaßen",
          "Wenn ich älter wäre, würde ich amerikanischen Fußball spielen"
        ],
        "answer": "konnte"
      },
      {
        "id": "q-28",
        "prompt": "Folge 21: Präteritum II · Übung 12 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "konnte - sollte",
          "Roberto würde auch dieses Jahr einen neuen Wagen kaufen",
          "unternahmen",
          "konnte"
        ],
        "answer": "unternahmen"
      },
      {
        "id": "q-29",
        "prompt": "Folge 21: Präteritum II · Übung 12 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "konnte",
          "lachten",
          "Frau Beier musste zum Zahnarzt gehen",
          "Wenn ich Zeit hätte, würde ich Fußball spielen"
        ],
        "answer": "lachten"
      },
      {
        "id": "q-30",
        "prompt": "Folge 21: Präteritum II · Übung 12 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind",
          "lachten",
          "falsch"
        ],
        "answer": "falsch"
      },
      {
        "id": "q-31",
        "prompt": "Folge 22: dass und ob · Übung 1 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dass",
          "unternahmen",
          "solltest",
          "vergaßen"
        ],
        "answer": "dass"
      },
      {
        "id": "q-32",
        "prompt": "Folge 22: dass und ob · Übung 1 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. könnten/würden, hätten",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind",
          "dass",
          "konnte"
        ],
        "answer": "dass"
      },
      {
        "id": "q-33",
        "prompt": "Folge 22: dass und ob · Übung 2 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich Zeit hätte, würde ich Fußball spielen",
          "wolltest",
          "sah",
          "Ich bin froh, dass es dir wieder besser geht"
        ],
        "answer": "Ich bin froh, dass es dir wieder besser geht"
      },
      {
        "id": "q-34",
        "prompt": "Folge 22: dass und ob · Übung 4 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wollten",
          "mochte",
          "Er glaubt, dass Jeans schick sind",
          "nahm"
        ],
        "answer": "Er glaubt, dass Jeans schick sind"
      },
      {
        "id": "q-35",
        "prompt": "Folge 22: dass und ob · Übung 5 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "Hätte – würde",
          "Es tut ihr leid, dass er zu spät gekommen ist",
          "waren"
        ],
        "answer": "Es tut ihr leid, dass er zu spät gekommen ist"
      },
      {
        "id": "q-36",
        "prompt": "Folge 22: dass und ob · Übung 7 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vergaßen",
          "vergaß",
          "kam",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind"
        ],
        "answer": "Die Schweizer glauben, dass vier Wochen Ferien genug sind"
      },
      {
        "id": "q-37",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Es tut ihr leid, dass er zu spät gekommen ist",
          "vergaß",
          "wolltest",
          "mochte"
        ],
        "answer": "mochte"
      },
      {
        "id": "q-38",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 2 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Du konntest in der See mit 6 Jahre schwimmen",
          "wollte",
          "Frau Beier musste zum Zahnarzt gehen",
          "wolltest"
        ],
        "answer": "Frau Beier musste zum Zahnarzt gehen"
      },
      {
        "id": "q-39",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 4 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "dass",
          "durftest",
          "1. Wenn es hier doch nur heller wäre!"
        ],
        "answer": "mussten"
      },
      {
        "id": "q-40",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 5 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "durftest",
          "wollte",
          "durfte",
          "lachten"
        ],
        "answer": "durftest"
      },
      {
        "id": "q-41",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 7 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "nahm",
          "konnte - sollte",
          "musste",
          "solltest"
        ],
        "answer": "solltest"
      },
      {
        "id": "q-42",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 8 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "lachten",
          "Es tut ihr leid, dass er zu spät gekommen ist",
          "Du konntest in der See mit 6 Jahre schwimmen",
          "Ich bin froh, dass es dir wieder besser geht"
        ],
        "answer": "Du konntest in der See mit 6 Jahre schwimmen"
      },
      {
        "id": "q-43",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 9 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "solltest",
          "konnten",
          "Er mochte keinen Kaffee mehr trinken",
          "durftest"
        ],
        "answer": "Er mochte keinen Kaffee mehr trinken"
      },
      {
        "id": "q-44",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 10 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich Zeit hätte, würde ich Fußball spielen",
          "sollten/ sollte",
          "1. anrufen würde",
          "konnten"
        ],
        "answer": "sollten/ sollte"
      },
      {
        "id": "q-45",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 11 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "durften",
          "konnte",
          "konnten",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind"
        ],
        "answer": "durften"
      },
      {
        "id": "q-46",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 12 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dass",
          "mussten",
          "durften",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind"
        ],
        "answer": "mussten"
      },
      {
        "id": "q-47",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 13 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "unternahmen",
          "1. könnten/würden, hätten",
          "Könntest/Würdest du ihn abholen?",
          "konnten"
        ],
        "answer": "konnten"
      },
      {
        "id": "q-48",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 13 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "durfte",
          "wollten",
          "Er mochte keinen Kaffee mehr trinken",
          "Roberto würde auch dieses Jahr einen neuen Wagen kaufen"
        ],
        "answer": "wollten"
      },
      {
        "id": "q-49",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 16 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Roberto würde auch dieses Jahr einen neuen Wagen kaufen",
          "Ich bin froh, dass es dir wieder besser geht",
          "konnte - sollte",
          "konnte"
        ],
        "answer": "konnte - sollte"
      },
      {
        "id": "q-50",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 17 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "waren",
          "mochte",
          "durften",
          "1. Wenn es hier doch nur heller wäre!"
        ],
        "answer": "mochte"
      },
      {
        "id": "q-51",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 17 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Deutsch müsstest du besser sprechen",
          "vergaßen",
          "sollten/ sollte",
          "konnte"
        ],
        "answer": "konnte"
      },
      {
        "id": "q-52",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 17 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mussten",
          "waren",
          "wollte",
          "durften"
        ],
        "answer": "mussten"
      },
      {
        "id": "q-53",
        "prompt": "Folge 23: Modalverben im Präteritum · Übung 17 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wolltest",
          "konnte",
          "dass",
          "mochte"
        ],
        "answer": "wolltest"
      },
      {
        "id": "q-54",
        "prompt": "Folge 24: Konjunktiv II I · Übung 2 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich älter wäre, würde ich amerikanischen Fußball spielen",
          "Wenn ich reich wäre, würde ich ein Auto kaufen",
          "konnte",
          "brachte"
        ],
        "answer": "Wenn ich älter wäre, würde ich amerikanischen Fußball spielen"
      },
      {
        "id": "q-55",
        "prompt": "Folge 24: Konjunktiv II I · Übung 2 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich älter wäre, würde ich amerikanischen Fußball spielen",
          "konnten",
          "Wenn ihr doch gut in Mathe wären",
          "Wenn ich Zeit hätte, würde ich Fußball spielen"
        ],
        "answer": "Wenn ich Zeit hätte, würde ich Fußball spielen"
      },
      {
        "id": "q-56",
        "prompt": "Folge 24: Konjunktiv II I · Übung 3 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Bedienung hier würde einen total interessierten Eindruck machen",
          "durfte",
          "ging",
          "Frau Beier musste zum Zahnarzt gehen"
        ],
        "answer": "Die Bedienung hier würde einen total interessierten Eindruck machen"
      },
      {
        "id": "q-57",
        "prompt": "Folge 24: Konjunktiv II I · Übung 5 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "sollten/ sollte",
          "Hätte – würde",
          "brachte"
        ],
        "answer": "A"
      },
      {
        "id": "q-58",
        "prompt": "Folge 24: Konjunktiv II I · Übung 7 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mochte",
          "Wenn ihr doch gut in Mathe wären",
          "erblickte",
          "Wenn ich Zeit hätte, würde ich Fußball spielen"
        ],
        "answer": "Wenn ihr doch gut in Mathe wären"
      },
      {
        "id": "q-59",
        "prompt": "Folge 24: Konjunktiv II I · Übung 9 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "konnten",
          "Deutsch müsstest du besser sprechen",
          "Wenn ich älter wäre, würde ich amerikanischen Fußball spielen",
          "m"
        ],
        "answer": "Deutsch müsstest du besser sprechen"
      },
      {
        "id": "q-60",
        "prompt": "Folge 24: Konjunktiv II I · Übung 10 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "konnte",
          "Hätte – würde",
          "Es tut ihr leid, dass er zu spät gekommen ist"
        ],
        "answer": "Hätte – würde"
      },
      {
        "id": "q-61",
        "prompt": "Folge 24: Konjunktiv II I · Übung 11 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Menschen wären glücklich, gäbe es keinen Krieg",
          "Ich würde heute Abend reisen, aber mein Auto ist kaputt",
          "mochte",
          "durften"
        ],
        "answer": "Ich würde heute Abend reisen, aber mein Auto ist kaputt"
      },
      {
        "id": "q-62",
        "prompt": "Folge 24: Konjunktiv II I · Übung 12 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "konnte",
          "ging",
          "Roberto würde auch dieses Jahr einen neuen Wagen kaufen",
          "schrie"
        ],
        "answer": "Roberto würde auch dieses Jahr einen neuen Wagen kaufen"
      },
      {
        "id": "q-63",
        "prompt": "Folge 24: Konjunktiv II I · Übung 13 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich reich wäre, würde ich ein Auto kaufen",
          "sah",
          "Die Schweizer glauben, dass vier Wochen Ferien genug sind",
          "konnte/ wollte/ durfte"
        ],
        "answer": "Wenn ich reich wäre, würde ich ein Auto kaufen"
      },
      {
        "id": "q-64",
        "prompt": "Folge 24: Konjunktiv II I · Übung 13 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dass",
          "Wenn meine Mutter nicht sehr nervös wäre, würde gesunde Mahlzeiten kochen",
          "Er glaubt, dass Jeans schick sind",
          "Es tut ihr leid, dass er zu spät gekommen ist"
        ],
        "answer": "Wenn meine Mutter nicht sehr nervös wäre, würde gesunde Mahlzeiten kochen"
      },
      {
        "id": "q-65",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Menschen wären glücklich, gäbe es keinen Krieg",
          "mochte",
          "konnte/ wollte/ durfte",
          "durftest"
        ],
        "answer": "Die Menschen wären glücklich, gäbe es keinen Krieg"
      },
      {
        "id": "q-66",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Könnten/Würden Sie später noch einmal anrufen?",
          "solltest",
          "durften",
          "durfte"
        ],
        "answer": "Könnten/Würden Sie später noch einmal anrufen?"
      },
      {
        "id": "q-67",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wolltest",
          "Könntest/Würdest du ihn abholen?",
          "Würdet",
          "mussten"
        ],
        "answer": "Würdet"
      },
      {
        "id": "q-68",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "nahm",
          "Könnten/Würden Sie später noch einmal anrufen?",
          "1. Wenn es hier doch nur heller wäre!",
          "solltest"
        ],
        "answer": "1. Wenn es hier doch nur heller wäre!"
      },
      {
        "id": "q-69",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. könnten/würden, hätten",
          "konnte/ wollte/ durfte",
          "konnte",
          "mussten"
        ],
        "answer": "1. könnten/würden, hätten"
      },
      {
        "id": "q-70",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Deutsch müsstest du besser sprechen",
          "kamen",
          "Könntest/Würdest du ihn abholen?",
          "Er glaubt, dass Jeans schick sind"
        ],
        "answer": "Könntest/Würdest du ihn abholen?"
      },
      {
        "id": "q-71",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. anrufen würde",
          "brachte",
          "konnten",
          "Wenn ich reich wäre, würde ich ein Auto kaufen"
        ],
        "answer": "1. anrufen würde"
      },
      {
        "id": "q-72",
        "prompt": "Folge 25: Konjunktiv II II · Answer key · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vorsichtiger fahren würde",
          "durften",
          "dass",
          "konnte - sollte"
        ],
        "answer": "vorsichtiger fahren würde"
      }
    ],
    "sourcePageCount": 65,
    "answerPageCount": 15
  },
  {
    "id": "reflexiv-infinitiv-wenn-als",
    "title": "Reflexive Verbs, Infinitiv mit zu, wenn/als",
    "source": "Folge 26-30",
    "pages": "PDF pages 225-255",
    "summary": "Source workbook material from Folge 26-30: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 26",
        "title": "Reflexive Verben",
        "printedPageStart": 225,
        "printedPageEnd": 233,
        "sourcePages": [
          {
            "page": 225,
            "text": "haben immer “sich” vor der Infinitivform \n“sich” ist das Relativpronomen \nDas Relativpronomen verändert sich mit dem Subjekt \n\n\ndas Verb die Bedeutung die Beispiele \nsich ausziehen يخلع ثيابه Ich ziehe mich aus. \nsich rasieren يحلق Du rasierst dich. \nsich duschen تحمم Er duscht sich. \nsich waschen يغسل Das Kind wäscht sich. \nsich abtrocknen جفف Maria trocknet sich ab. \nmich \ndich \nsich \nsich \nsich \nuns \neuch \nsich \nsich \nich \ndu \ner \nes \nsie \nwir \nihr \nsie \nSie \nReflexivpronomen \nIch kämme mich wir kämmen uns \nDu kämmst dich ihr kämmt euch \nEr/sie/es kämmt sich sie / Sie kämmen sich"
          },
          {
            "page": 226,
            "text": "sich anziehen يرتدي ملابسة Wir ziehen uns an. \nsich umziehen يبدل ملابسة Ihr zieht euch um. \nsich kämmen يشح شعرة Petra kämmt sich. \nsich schminken تضع مكياج Lisa schminkt sich \nsich eincremen وضع كريم علىي البشىة Sie müssen sich eincremen \nsich fühlen يشعر Ich fühle mich gut / nicht gut. \nsich schämen يخجل Du schämst dich. \nsich freuen يفرح Sie freut sich auf unseren Besuch. \nsich erholen يستجم Sie müssen sich erholen. \nsich ausruhen يسي خ ي Sie müssen sich ausruhen. \nsich ärgern ي غ ضب Warum musst du dich ärgern? \nsich aufregen ينفعل Mein Vater hat sich aufgeregt. \nverspäten يتأخر Der Zug verspätet sich. \nsich anmelden يسجل Ich melde mich bei meinem Freund \nan. \nsich treffen يتقابل Sie trifft sich heute mit ihrem \nFreund. \nsich beschweren يشتكي Die Gäste beschweren sich über das \nZimmer \nsich bedanken يشكر Meine Mutter bedankt sich für das \nGeschenk."
          },
          {
            "page": 227,
            "text": "sich interessieren يهتم ب Lambert interessiert sich für Politik. \nsich verlieben يغرم ب Markus hat sich in Lisa verliebt. \nsich streiten يتشاجر Markus und Lisa streiten sich. \nsich trennen ينفصل– يفي ق Markus und Lisa haben sich \ngetrennt. \nsich erkälten يصاب بالي د Ich habe mich gestern erkältet. \nsich entscheiden يقرر Er entscheidet sich für Deutschland. \nsich erinnern يتذكر Ich erinnere mich an unseren \nUrlaub. \nsich gewöhnen يعتاد علىي Wir gewöhnen uns an den Lärm. \nsich auskennen يعرف طريقة الي Er kennt sich gut in Berlin aus. \nsich entschuldigen يعتذر Sie entschuldigt sich bei dem \nLehrer. \nsich anstrengen Ihr musst euch anstrengen. \nsich kümmern يعتب ي ب Die Mutter kümmert sich um ihre \nKinder. \n\n\n1. Welche Verben fehlen in dem Satz? Ergänze sie! \n(sich waschen, sich interessieren, sich schminken, sich streiten, sich verlieben \nsich rasieren, sich freuen, sich kämmen) \n1. ______________________ du dich auf die Sommerferien? \n2. Ich ____________________ mich für die Geschichte."
          },
          {
            "page": 228,
            "text": "3. Uwe und Jörg _____________________ sich den ganzen Tag. \n4. Ich glaube, Ralf ________________ sich in Erika. \n5. Thomas hat so kurze Haare, er muss sich nicht __________________ \n6. ___________________ du dir die Hände vor dem Essen? \n7. Mein Vater _____________________ sich jeden Morgen. \n8. Die Frauen ____________________ sich gern. \n2.Bilde Sätze aus den gegebenen Wörtern! Pass auf die Reflexivpronomen! \ndu sich interessieren für (Akk) das Wochenende \nmeine Tante sich streiten im Badezimmer \nwir sich freuen über/auf (Akk) immer \ndie Mädchen sich kämmen die Literatur \nein Junge sich lieben mit dem roten Handtuch \nich sich waschen jeden Tag \nihr sich abtrocknen schon zwei Wochen \n1. __________________________________________________________ \n2. __________________________________________________________ \n3. __________________________________________________________ \n4. __________________________________________________________ \n5. __________________________________________________________ \n6. __________________________________________________________ \n7. __________________________________________________________ \n3.Ergänze bitte: \n1. Er stellt _________ seinem Freund vor. \n2. Du interessierst _______ für das Programm. \n3. Er fühlt ________ nicht wohl. \n4. Vor dem Essen sollt ihr _____ die Hände waschen. \n5. Der Lehrer ärgert _________ über meine Noten. \n6. Wir interessieren _____________ für Mode und Models. \n7. Die Schüler unterhalten ____________ über das Thema. \n8. Mein Freund stellt ____________ vor. \n9. Ich freue __________ über meine Geburtstagsparty. \n10. Meine Mutter kümmert ___________ um mich. \n4.Ergänzen Sie bitte: \n(sich vorstellen – sich interessieren – sich entschuldigen – sich putzen – sich verbrennen – \nsich anschauen – sich fürchten) \n1. Hast du _____ die Zähne ____________? \n2. Ich möchte _____ für meine Verspätung _________________. \n3. Ich habe _____ die linke Hand ____________. \n4. ____________ du ______ vor der Dunkelheit? \n5. __________ _____ die Aufgabe bitte genau ___! \n6. Kannst du _____ ___________, nie wieder im Internet zu surfen?"
          },
          {
            "page": 229,
            "text": "7. Ich ______________ _____ für die Politik. \n5.Schreibe die Nummer neben das Bild! \n\n\n6.Ergänze die Sätze mit den angegebenen Wörtern! \n(s. setzen, s. vorstellen, s. treffen s. entschuldigen, s. schämen s. verabschieden) \n1. Wir _______ ____ um 19.45 Uhr vor dem Kino. \n2. Ich _______ ____ wegen der schlechten Noten. \n3. Hans _______ ____an den Tisch. \n4. Du _________ ____ für das Benehmen. \n\n\n5 \n9 \n14 \n6 \ns. schminken \ns. rasieren \ns. waschen \ns. verabschieden \ns. interessieren \ns. anziehen \ns. schlecht fühlen \ns. ausruhen/s. erholen \ns. sonnen \ns. duschen \ns. amüsieren \ns. ärgern \ns. kämmen \ns. freuen \ns. beschäftigen \ns. die Zähne putzen \n1 2 3 \n4 \n7 8 \n10 11 \n13 \n12 \n15 16"
          },
          {
            "page": 230,
            "text": "5. Wir gehen nach Hause. Wir___________ ____. \n6. __________ Sie ____ ____!! \n7. Bilde Sätze! \n1. s.ärgern, warum, immer, du \n________________________________________________________________ \n2. s.wundern, deine, Antwort,über, ich \n________________________________________________________________ \n3. wir, s.freuen, schon, die Party, auf \n________________________________________________________________ \n4. Die Dame,s.irren,jetzt \n________________________________________________________________ \n5. die Haare, s.waschen,ihr, am Abend \n________________________________________________________________ \n8.Ergänze die Sätze mit Reflexivpronomen! \n1. Peter kämmt _____ im Badezimmer. \n2. Oma kämmt______ die Haare. \n3. Warum stellst du _____ nicht vor? \n4. Du stellst _____ deine Zukunft vor. \n5. Ich gehe ins Kino. Ich ziehe _____ schön an. \n6. Ich ziehe _____ eine Jacke an. \n7. Ihr wascht ________. \n8. Ihr wascht _____das Gesicht. \n9. Wir schminken ______vor der Party. \n10. Wir schminken _____die Augen. \n11. Opa und Vati rasieren ____. \n12. Opa und Vati rasieren _____ den Bart. \n9.Ergänzen Sie bitte: \n1 Ich freue __________ über meine Geburtstagsparty. \n2 Mein Vater ärgert _________ über meine Noten. \n3 Ich lese viel und gern. Ich kann ________ viel merken. \n4 Ihr interessiert _______ für Sport. \n5 Ich habe ______ wieder neue Klamotten gekauft. \n6 Du musst _________ beeilen, sonst werden wir ________ wieder verspäten. \n7 Ich genieße die Ferien. Ich sehe ____ alle Spielfilme an. \n8 Sie schämt _______ unter der Dusche. \n9 Unser Nachbar liegt seit Tagen im Bett. Er fühlt ________ nicht wohl. \n10. Vor dem Essen sollst du _____ die Hände waschen. \n10.Wähle die richtige Antwort! \n1. Ich ziehe _____________________ schnell an. \na) mich"
          },
          {
            "page": 231,
            "text": "b) mir \n2. Du ziehst _____________________ einen Mantel an. \na) dich \nb) dir \n3. Meine Tochter wäscht ____________________ gründlich. \na) dich \nb) sich \n4. Ich setze _____________________ die Brille auf. \na) mich \nb) mir \n5. Wir setzen _____________________ ans Fenster. \na) uns \nb) mir \n6. Ich schminke ___________________ jeden Tag. \na) mich \nb) mir \n7. Du schminkst __________________ nur die Augen. \na) dich \nb) dir \n11.Ergänzen Sie Reflexivverben \nVor dem Essen _____ ich _____ (1) immer die Hände. Viele Leute _____ _____ (2) abends, nur \nwenige morgens. Wie lange _____ du _____ (3) die Zähne? Wir _____ _____ (4) in der Disko \nimmer gut. Es tut mir leid – ich möchte _____ bei dir _____ (5). Wir _____ _____ (6) morgen \nAbend in der Stadt im Café Anna. Die Kinder _____ _____ (7) immer viel auf die Weihnachten. \nJohann _____ _____ (8) mit seinem Kollegen den ganzen Tag über das Problem. \n12. Schreib das richtige Reflexivpronomen. \n1. Ich putze _____________________ die Zähne. \n2. Du wäschst ______________________ um 7 Uhr. \n3. Die Dame schminkt ______________________ jeden Morgen. \n4. Vor dem Essen wäschst du ____________________ die Hände. \n5. Wir kämmen ________________________ jeden Tag. \n6. Der Mann rasiert __________________________ fünf Mal pro Woche. \n7. Jonas und Lina ziehen ________________________ um halb acht an. \n13.Ergänzen Sie die Sätze mit passenden Verben in richtiger Form! \ns. ausruhen, s. ärgern, s. bedanken, s. beeilen, s. entscheiden, s. erinnern, s. erkälten, s. \nfühlen, s. gewöhne, s. irren, s. kümmern, s. setzen, s. streiten, s. umziehen, s. unterhalten, s. \nverabschieden, s. verändern, s. verlaufen, s. verletzen, s. verlieben, s. verspäten, s. \nvorstellen, s. wundern \n1. …………………. ……… nicht immer über alle Kleinigkeiten! \n2. Am Wochenende hatte Vati viel zu tun, er konnte ............ nicht..................... \n3. Am Zug stehen viele Leute, die ............. von einander ........................wollen."
          },
          {
            "page": 232,
            "text": "4. Bei dem Unfall gestern haben ..................... 8 Leute schwer ......................... \n5. Die Eltern wurden bestraft, weil sie ........ nicht um ihre Kinder .......... haben. \n6. Die Gäste haben .......... bequem .........., und jetzt warten sie auf den Kaffee. \n7. Die Musik ist zu laut, so können wir ............... nicht ............................. \n8. Die Polizei suchte tagelang das Kind, das ............... im Wald ................... hat. \n9. Du .................... ..............., wenn du meinst, dass ich so viel Geld verdiene. \n10. Du hast ..................... sehr ............................., ich habe dich kaum erkannt. \n11. Du warst gestern so leicht angezogen, deshalb hast du ............... ........... \n12. Hast du ................... schon ............................, wohin du im Sommer fährst ? \n13. Ich möchte .............. recht herzlich für die Überraschung ........................ . \n14. Ich möchte ............... vor der Party .................... ich will elegant aussehen. \n15. Kinder, .............................. ......................, sonst verpassen wir den Zug. \n16. Meine Damen und Herren, ich möchte .... .........., ich heiße Roland Fischer. \n17. Meine Freunde ......... ...... schon wieder, in welches Kino wir gehen sollen. \n18. Petra ........................... .............. nicht mehr an ihre erste Liebe. \n19. Warum ..... ihr........ so, ich habe gesagt, dass ich ein neues Auto gekauft habe. \n20. Wie ......................... Sie .................. auf Ihrem neuen Arbeitsplatz? \n21. Wieso konntest du .................. in einen solchen blöden Mann ..................? \n22. Wir können ................ an den Smog und Lärm in der Stadt nicht.................. \n23. Wir müssen noch auf Peter warten, er .................... ............... immer. \n\n14.Ergänze die Reflexivpronomen! \n1. Freust du ………….. über das Geschenk? \n2. Wer interessiert …………. für den Sport? \n3. Wir waschen ………….……. die Hände. \n4. Die Mädchen kämmen ………….. lange. \n5. Ich trockne ……………… sorgfältig ab. \n6. Streitet ihr ………………….…. immer?"
          }
        ],
        "answerPages": [
          {
            "page": 232,
            "text": "Die Lösungen: \nÜbung 1 \n1) Freust 2) interessiere 3) streiten 4) verliebt 5) rasieren 6) Wäschst 7) kämmt 8) schminken \nÜbung 2 \n1) Freust du dich über/ auf das Wochenende? 2) Meine Tante kämmt sich immer. 3) Wir waschen uns \nim Badezimmer. 4) Die Mädchen interessieren sich für die Literatur. 5) Ich trockne mich mit dem roten \nHandtuch ab. 6) Ein Junge und ein Mädchen lieben sich schon zwei Wochen. 7) Streitet ihr euch jeden \nTag? \nÜbung 3 \n1) sich 2) dich 3) sich 4) euch 5) sich 6) uns 7) sich 8) sich 9) mich 10) sich \nÜbung 4 \n1) dich putzen 2) mich entschuldigen 3) mich verbrennen 4) dich fürchten 5) sich anschauen 6) dich \nverbrennen 7) mich interessieren"
          },
          {
            "page": 233,
            "text": "Übung 5 \n1) s. duschen 2) s. die Zähne putzen 3) s. verabschieden 4) s. rasieren 5) s. freuen 6) s. interessieren 7) \ns. anziehen 8) s. schminken 9) s. kämmen 10) s. ärgern 11) s. ausruhen/s. erholen 12) s. schlecht fühlen \n13) s. sonnen 14) s. amüsieren 15) s. beschäftigen 16) s. waschen \nÜbung 6 \n1) treffen uns 2) schäme mich 3) setzt sich 4) entschuldigst dich 5) verabschieden uns 6) Stellen sich vor \nÜbung 7 \n1) Warum ärgerst du dich immer? 2) Ich wundere mich über deine Antwort. 3) Wir freuen uns schon \nauf die Party. 4) Die Dame irrt sich jetzt. 5) Ihr wascht euch die Haare am Abend. \nÜbung 8 \n1) sich 2) sich 3) dich 4) dich 5) mich 6) mich 7) euch 8) euch 9) uns 10) uns 11) sich 12) sich \nÜbung 9 \n1) mich 2) sich 3) mich 4) euch 5) mich 6) dich - uns 7) mich 8) sich 9) sich 10) dich \nÜbung 10 \n1) mich 2) dir 3) sich 4) mir 5) uns 6) mich 7) dir \nÜbung 11 \n1) wasche - mich 2) duschen - sich 3) putzt – dich 4) fühlen – sich 5) mich - entschuldigen 6) treffen - \nuns 7) freuen - sich 8) unterhaltet - sich \nÜbung 12 \n1) mir 2) dich 3) sich 4) dir 5) uns 6) sich 7) sich \nÜbung 13 \n1) Ärgere dich 2) sich - ausruhen 3) sich verabschieden 4) sich – verletzt 5) sich - gekümmert 6) sich - \ngefühlt 7) uns - unterhalten 8) sich – verlaufen 9) irrst dich 10) dich verändert 11) dich erkältet 12) dich \nentschieden 13) mich bedanken 14) mich umziehen 15) beeilt euch 16) mich vorstellen 17) streiten sich \n18) erinnert sich 19) wundert euch 20) setzen sich 21) dich verlieben 22) uns gewöhnen 23) verspätet \nsich \nÜbung 14 \n1) dich 2) sich 3) uns 4) sich 5) mich 6) euch"
          }
        ]
      },
      {
        "folge": "Folge 27",
        "title": "Infinitiv mit zu I",
        "printedPageStart": 234,
        "printedPageEnd": 237,
        "sourcePages": [
          {
            "page": 234,
            "text": "Infinitivkonstruktionen haben kein Subjekt. Es entfällt. \n“zu” kommt nach Wendung, Verben und Adjektiven. \n1- Bestimmte Verben \n2- Haben + Nomen \n3- Konstruktion mit es + Adjektiv oder Nomen \nDas Verb steht am Ende im Infinitiv. \n\nInfinitivkonstruktionen können sich entweder auf eine Person oder Sache im \nHauptsatz beziehen. \n\n\n“zu” und das Verb wird getrennt außer trennbare Verben geschrieben. \n\n\n1- Bestimmte Verben \n\n\nIch versuche, selbst mein Auto zu reparieren. \nIch habe keine Lust, die Hausaufgabe zu machen. \nEs ist verbot, im Krankenhaus zu rauchen. \nIch rate Ihnen, noch einmal über alles nachzudenken. \nIch habe keine Zeit, das alles zu übernehmen. \nEs ist unsere Pflicht, Sie vollständig aufzuklären. \n\n Ich rate Ihnen, die gesunde Mahlzeit zu essen. \n Ich finde es, die Hausarbeit allein zu machen. \n Ich versuche, selbst mein Auto zu reparieren. \n Ich bitte dich, die Tür zu schließen. \n Mein Vater erlaubt mir, nach Deutschland zu fliegen. \n Sie hat vor, B1 zu machen. \n Ich bemühe mich, die Prüfung zu bestehen."
          },
          {
            "page": 235,
            "text": "2- Haben + Nomen \n\n\n3- Konstruktion mit es \n\n\n Ich habe Keine Zeit, die Wäsche zu waschen. \n Ich habe keine Lust, heute zu kochen. \n Ich habe Angst davor, der See zu schwimmen. \n Ich habe Interesse, dieses Buch zu lesen. \n Er hat den Wunsch, meine Wohnung neu zu streichen. \n Sie hat die Absicht, dieses Jahr nach Amerika zu reisen. \n Sie haben ihrer Spaß dabei, Fußball zu gucken. \n Ich habe das Problem, immer spät aufzustehen. \n\n Es ist nicht leicht, so schnell eine Entscheidung zu treffen. \n Es ist unsere Pflicht, Sie vollständig aufzuklären. \n Es ist toll, mit meinen Kindern zu sitzen. \n Es ist mir eine Freude, dich wieder zu sehen. \n Es ist schwer, das Fenster zuzumachen."
          },
          {
            "page": 236,
            "text": "1) Was passt zusammen? Verbinden Sie. \n\n1. In diesem Restaurant ist es nicht erlaubt, a) weniger fernzusehen und mehr zu lesen. \n2. Ich verspreche dir, b) mit dem Handy zu telefonieren. \n3. Bitte hör auf, c) dich vom Bahnhof abzuholen. \n4. Ich habe leider keine Zeit, d) immer mein Zimmer aufzuräumen. \n5. Es ist schwer, e) mich 20-mal am Tag anzurufen! \n6. Ich empfehle dir, f) alle Aufgaben richtig zu lösen. \n\n2) Frau Müller ist gestresst. Sie hat für verschiedene Dinge keine Zeit. Bilden Sie Sätze wie \nim Beispiel. \n\n➢ den Brief übersetzen. Frau Müller hat heute keine Zeit, den Berief zu übersetzen. \n\n1. die Fahrtkostenabrechnung machen. \n---------------------------------------------------------------------------------------------------------------------- \n2. die Gäste vom Bahnhof abholen. \n---------------------------------------------------------------------------------------------------------------------- \n3. alle E-Mails beantworten. \n---------------------------------------------------------------------------------------------------------------------- \n4. ein Flugticket für den Chef buchen. \n---------------------------------------------------------------------------------------------------------------------- \n5. die Besprechungsunterlagen kopieren. \n---------------------------------------------------------------------------------------------------------------------- \n6. für alle Kaffee kochen. \n---------------------------------------------------------------------------------------------------------------------- \n7. Einladungen zur Weihnachtsfeier schreiben. \n---------------------------------------------------------------------------------------------------------------------- \n8. in die Kantine essen gehen. \n---------------------------------------------------------------------------------------------------------------------- \n9. die neue Kollegin begrüßen. \n---------------------------------------------------------------------------------------------------------------------- \n\n3) Maikel macht seiner Freundin Versprechungen. \n\n➢ Ich verspreche dir, dass ich immer pünktlich nach Hause komme. \nIch verspreche dir, immer pünktlich nach Hause zu kommen. \n\n1. Ich verspreche dir, dass ich dir im Haushalt helfe. \n------------------------------------------------------------------------------------------------------------------------------"
          },
          {
            "page": 237,
            "text": "2. Ich verspreche dir, dass ich dreimal in der Woche das Abendessen koche. \n------------------------------------------------------------------------------------------------------------------------------ \n3. Ich verspreche dir, dass ich dich jeden Tag fünfmal anrufe. \n------------------------------------------------------------------------------------------------------------------------------ \n4. Ich verspreche dir, dass ich weniger Zeit mit meinen Freunden verbringe. \n------------------------------------------------------------------------------------------------------------------------------ \n5. Ich verspreche dir, dass ich dir immer zuhöre. \n------------------------------------------------------------------------------------------------------------------------------ \n6. Ich verspreche dir, dass ich dir jede Woche Blumen schenke. \n------------------------------------------------------------------------------------------------------------------------------ \n7. Ich verspreche dir, dass ich zu deiner Mutter immer nett bin. \n------------------------------------------------------------------------------------------------------------------------------ \n8. Ich verspreche dir, dass ich vorsichtiger fahre. \n------------------------------------------------------------------------------------------------------------------------------ \n\n\n4) Das ist Ahmed. Was erlauben ihm seine Eltern und was nicht? Bilden Sie Sätze wie im \nBeispiel. \n\n➢ nach 22 Uhr fernsehen: nein \n\nAhmed darf nicht nach 22 Uhr fernsehen. \nDie Eltern erlauben Ahmed nicht, nach 22 Uhr fernzusehen. \n\n1. Saxofon-Stunden nehmen: ja \n----------------------------------------------------------------------------------------------------------------- \n2. abends zu Hause Saxofon spielen: nein \n----------------------------------------------------------------------------------------------------------------- \n3. sich ein neues Handy kaufen: nein \n----------------------------------------------------------------------------------------------------------------- \n4. nach der Schule zu seinem Freund gehen: ja \n----------------------------------------------------------------------------------------------------------------- \n5. bei seinem Freund übernachten: nein \n----------------------------------------------------------------------------------------------------------------- \n6. in den Ferien an einem einwöchigen Musikkurs teilnehmen: ja \n----------------------------------------------------------------------------------------------------------------- \n\n\n5) Bilden Sie Sätze wie im Beispiel. \n➢ Carla: die Absicht haben - das Auto verkaufen \nCarla hat die Absicht, das Auto zu verkaufen."
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 28",
        "title": "Infinitiv mit zu II",
        "printedPageStart": 238,
        "printedPageEnd": 240,
        "sourcePages": [
          {
            "page": 238,
            "text": "➢ Carla: Lust haben - heute Abend – ausgehen. \n-------------------------------------------------------------------------------------------------------------------------------------- \n➢ Carla: den Auftrag haben - am Wochenende - zu einer Konferenz - nach Paris – fahren. \n-------------------------------------------------------------------------------------------------------------------------------------- \n➢ Carla: Vorhaben - ihren Urlaub im Ausland verbringen. \n-------------------------------------------------------------------------------------------------------------------------------------- \n➢ Carla: mal wieder - den Wunsch haben - die Wohnung umräumen. \n-------------------------------------------------------------------------------------------------------------------------------------- \n➢ Carla: es - Spaß machen - Englisch lernen. \n-------------------------------------------------------------------------------------------------------------------------------------- \n➢ Beenden Sie die Sätze! \n\n1. Am Wochenende habe ich Zeit____________________________________________ \n2. Für mich ist es schwierig_________________________________________________ \n3. In der Bibliothek ist es verboten___________________________________________ \n4. Ich habe in den letzten drei Wochen versucht________________________________ \n5. Wenn es warm ist, habe ich Lust___________________________________________ \n6. In den Bergen ist es gefährlich____________________________________________ \n7. Alle Leute haben das Recht_______________________________________________ \n8. Bevor man eine Reise macht, ist es wichtig, _________________________________ \n9. In vielen islamischen Ländern ist es nicht erlaubt_____________________________ \n\n➢ Bilden Sie Infinitivsätze. \n\n\nBsp. Der Sohn wird seine Mutter nie wieder anlügen. Das hat er ihr versprochen. \nDer Sohn hat der Mutter versprochen, sie nie wieder anzulügen. \n1 In der Wohnung darf man keine Hunde halten. Das ist verboten. \n2 Georg gibt das Rauchen auf. Seine Frau hat ihn endlich dazu überreden können. \n3 Der Vorgesetzte will seine Mitarbeiter dazu zwingen, dass sie täglich Überstunden \nleisten. \n4 Ilona hat ihren Gatten darum gebeten, dass er seine kranke Schwiegermutter \nbesucht. \n5 Du brauchst mir bei den Hausaufgaben nicht zu helfen. Das ist nicht nötig. \n6 Hilde ist davon überzeugt, dass sie ohne Probleme die Prüfung besteht. \n7 Fräulein Hings ist es peinlich, dass sie permanent zum Tanzen aufgefordert wird."
          },
          {
            "page": 239,
            "text": "8 Ärgere dich nicht! Dafür gibt es keinen Grund. \n9 Silke wollte 3 kg abnehmen. Sie hat es versucht. \n10 Horst möchte von Kiel nach München wandern. Das hat er vor. \n\n➢ Bilden Sie aus den vorgegebenen Sätzen Infinitivsätze. \nBsp. Der kleine Sebastian will die Gorillas füttern. Das ist aber nicht erlaubt. \nEs ist nicht erlaubt, die Gorillas zu füttern. \n1 Eines Tages wird Holger seine Traumfrau finden. Er ist immer noch davon überzeugt. \n2 Die Wahrheit wird man nicht herausfinden. Das halten viele für unmöglich. \n3 Herr Spöker könnte vielleicht seinen Arbeitsplatz verlieren. Davor hat er Angst. \n4 Frau Radlerwitz fährt nicht gern Rad. Das macht ihr keinen Spaß. \n5 Alfons repariert das Fahrrad nicht. Dafür hat er heute keine Zeit. \n6 Herr Klüngel möchte nicht versetzt werden. Darum bittet er seinen Chef. \n7 Marianne Schuster will nach Australien auswandern. Das hat sie vor. \n8 Übermorgen fliegen wir für drei Wochen nach Spanien. Darauf freuen wir uns. \n9 Ich kann seinen Lamborghini für 3.000 Euro kaufen. Das hat er mir angeboten. \n10 Mein Mann soll keinen Alkohol mehr trinken. Das fällt ihm sehr schwer."
          }
        ],
        "answerPages": [
          {
            "page": 239,
            "text": "Die Lösungen: \n1) 1.b 2.d 3.e 4.c 5.f 6.a \n\n2) 1. die Fahrtkostenabrechnung zu machen. 2. die Gäste vom Bahnhof abzuholen. 3. alle E-Mails zu \nbeantworten. 4. ein Flugticket für den Chef zu buchen. 5. die Besprechungsunterlagen zu kopieren. 6. \nfür alle Kaffee zu kochen. 7. Einladungen zur Weihnachtsfeier zu schreiben. 8. in die Kantine essen zu \ngehen. 9. die neue Kollegin zu begrüßen. \n\n3) 1. Ich verspreche dir, dir im Haushalt zu helfen. 2. Ich verspreche dir, dreimal in der Woche das \nAbendessen zu kochen. 3. Ich verspreche dir, dich jeden Tag fünfmal anzurufen. 4. Ich verspreche dir, \nweniger Zeit mit meinen Freunden zu verbringen. 5. Ich verspreche dir, dir immer zuzuhören. 6. Ich \nverspreche dir, dir jede Woche Blumen zu schenken. 7. Ich verspreche dir, zu deiner Mutter immer nett \nzu sein."
          },
          {
            "page": 240,
            "text": "4) 1. Ahmed darf Saxofon-Stunden nehmen. Die Eltern erlauben Ahmed, Saxofon-Stunden zu nehmen. 2. \nAhmed darf abends zu Hause nicht Saxofon spielen. Die Eltern erlauben Ahmed nicht, abends zu Hause \nSaxofon zu spielen. 3. Ahmed darf sich kein neues Handy kaufen. Die Eltern erlauben Ahmed nicht, sich \nein neues Handy zu kaufen. 4. Ahmed darf nach der Schule zu seinem Freund gehen. Die Eltern erlauben \nAhmed, nach der Schule zu seinem Freund zu gehen. 5. Ahmed darf nicht bei seinem Freund \nübernachten. Die Eltern erlauben Ahmed nicht, bei seinem Freund zu übernachten. \n6. Ahmed darf in den Ferien an einem einwöchigen Musikkurs teilnehmen. Die Eltern erlauben Ahmed, \nin den Ferien an einem einwöchigen Musikkurs teilzunehmen. \n\n5) 1. Carla hat Lust, heute Abend auszugehen. 2. Carla hat den Auftrag, am Wochenende zu einer \nKonferenz nach Paris zu fahren. 3. Carla hat vor, ihren Urlaub im Ausland zu verbringen. 4. Carla hat \nmal wieder den Wunsch, die Wohnung umzuräumen. 5. Carla macht es Spaß, Englisch zu lernen. \n\n6) 1.Fußball zu spielen. 2.die Hausaufgabe allein zu machen. 3. laut zu sprechen. 4. die gesunde \nMahzeit zu essen. 5. spazieren zu gehen. 6. allein zu klettern. 7. früh zu verheiraten. 8. ein Ticket \nzu buchen. 9. Alkohol zu trinken. \n\n\n7) 1. Es ist verboten, in der Wohnung Hunde zu halten. 2. Seine Frau hat Georg endlich dazu \nüberreden können, das Rauchen aufzugeben. 3. Der Vorgesetzte will seine Mitarbeiter dazu \nzwingen, täglich Überstunden zu leisten. 4. Ilona hat ihren Gatten darum gebeten, seine kranke \nSchwiegermutter zu besuchen. 5. Es ist nicht nötig, mir beiden Hausaufgaben zu helfen. 6. Hilde \nist davon überzeugt, ohne Probleme die Prüfung zu schaffen. 7. Fräulein Hings ist es peinlich, \npermanent zum Tanzen aufgefordert zu werden. 8. Es gibt keinen Grund, sich zu ärgern. 9. Silke \nhat versucht, 3 kg abzunehmen. 10. Horst hat vor, von Kiel nach München zu wandern. \n\n8) 1. Holger ist immer noch davon überzeugt, eines Tages seine Traumfrau zu finden. 2. Viele halten \nes für unmöglich, die Wahrheit herauszufinden. 3.Herr Spöker hat Angst davor, seinen \nArbeitsplatz zu verlieren. 4. Es macht Frau Radlerwitz keinen Spaß, Rad zu fahren. 5. Alfons hat \nheute keine Zeit, das Fahrrad zu reparieren. 6. Herr Klüngel bittet seinen Chef darum, nicht \nversetzt zu werden. 7. Marianne Schuster hat vor, nach Australien auszuwandern. 8. Wir freuen \nuns darauf, übermorgen für drei Wochen nach Spanien zu fliegen. 9. Er hat mir angeboten, \nseinen Lamborghini für 3.000 Euro zu kaufen. 10. Es fällt meinem Mann sehr schwer, keinen \nAlkohol mehr zu trinken."
          }
        ]
      },
      {
        "folge": "Folge 29",
        "title": "wenn und als",
        "printedPageStart": 241,
        "printedPageEnd": 252,
        "sourcePages": [
          {
            "page": 241,
            "text": "Sub. + verb + Ergänzung, wenn + sub.+ Ergänzung + Verb \nZ.B. Ich besuche dich, wenn ich Zeit habe. \nWenn + Sub. + Ergänzung + Verb, Verb+ sub. + Ergänzung \nZ.B. Wenn ich Zeit habe, besuche ich dich. \nIm Nebensatz mit wenn steht das Verb am Ende und \nkonjugiert mit dem Subjekt \n\n\n1. Finn, wann besuchst du mich? \n2. Wann gehst du schwimmen? \n3. Wann bekommst du gute Noten? \n4. Mama, wann kochst du? \n5. Wann hat das Baby geweint? \n\n1. Ich besuche dich, wenn ich Zeit habe. \n2. Ich gehe schwemmen, wenn das Wetter schön ist. \nich schwimmen. gehe, istdas Wetter schön Wenn \n3. (Immer) wenn ich lerne, bekomme ich gute Noten. \n4. Ich koche, wenn du nach Hause kommst. \n5. Das Baby hat immer geweint, wenn es Hunger hatte."
          },
          {
            "page": 242,
            "text": "☺ Wenn das Wetter morgen schlecht ist, \nbleiben wir zu Hause. \n\n☺ Lisa hört immer Musik, wenn sie lernt. \n\n☺ Kommst du mit, wenn ich deine Mutter \nvom Flughafen abholen. \n\n☺ Wenn ich Zeit habe, lese ich gern. \n\n☺ Schaffen mir, immer, wenn ich Hilfe \nbrauchte. \n\n☺ Ich bin immer gleich einkaufen \ngegangen, wenn ich Geld bekommen \nhabe."
          },
          {
            "page": 243,
            "text": "Sub. + verb + Ergänzung, als + sub.+ Ergänzung+Verb \nZ.B. Mein Vater ist gestorben, als als ich jung war. \nAls + Sub. + Ergänzung + Verb, Verb + sub. + Ergänzung \nZ.B. Als ich jung war, spielte ich Fußball. \n\nIm Nebensatz mit als steht das Verb am Ende und konjugiert \nmit dem Subjekt \n\n\n1. Wann ist dein Vater gestorben? \n2. Wann hast du in Hamburg studiert? \n3. Wann bist du nach Amerika geflogen? \n\n\n1. Mein Vater ist gestorben, als ich jung war. \n2. Ich habe in Hamburg studiert , als ich 21 Jahre war. \n3. ich bin nach Amerika geflogen, als ich jung war."
          },
          {
            "page": 244,
            "text": "☺ Als Peter von seinem Unfall erzählte, \nhörten alle zu. \n\n☺ Als mein Bruder sein Examen hatte, \nwar er schon 27 Jahre alt. \n\n☺ Wo hast du immer deine Ferien \nverbracht, als du Kind warst? \n\n☺ Lisa war sehr froh, als sie den Brief \nvon Markus bekommen hat. \n\n☺ Als ich Kind war, durfte ich nicht \nfernsehen. \n\n☺ Ich war sehr traurig, als mein \nGroßvater gestorben ist."
          },
          {
            "page": 245,
            "text": "1- Verbinde die Sätze mit wenn: \n\n0. Das Wetter ist schön. Ich gehe schwimmen. \nWenn das Wetter schön ist, gehe ich schwimmen. \n1. Er macht eine Party. Er besteht die Prüfung. \n_____________________________________________________________________________________________ \n2. Du hast Lust. Du kannst zu mir kommen. \n______________________________________________________________________________________________ \n3. Das Wetter ist schlecht. Wir bleiben zu Hause. \n______________________________________________________________________________________________ \n4. Ich fahre in die Stadt. Ich bin fertig. \n_____________________________________________________________________________________________ \n5. Du bekommst gute Noten. Du lernst viel. \n______________________________________________________________________________________________ \n6. Sie kommen. Sie haben Zeit. \n______________________________________________________________________________________________ \n\n2- Antworte mit wenn: \n\n0. Wann fährst du in die Berge? (die Ferien, beginnen) \nWenn die Ferien beginnen, fahre ich in die Berge. \n1. Wann gehst du tanzen? (du, mitkommen) \n______________________________________________________________________________________________ \n2. Wann fliegst du nach Australien? (die Eltern, das Ticket bezahlen) \n_______________________________________________________________________________________________ \n3. Wann fährt er langsam? (Schnee, geben) \n__________________________________________________________________________________________ \n4. Wann fährt Eva nach Italien? (ihr Freund Mario, heiraten) \n____________________________________________________________________________________________ \n5. Wann lernt ihr viel? (wir, eine Klassenarbeit schreiben). \n____________________________________________________________________________________________ \n6. Wann geht sie ins Kino? (sie, keine Schule, haben) \n_____________________________________________________________________________________________"
          },
          {
            "page": 246,
            "text": "3- Was machen Sie, wenn .............. ? \n1. Was machen Sie, wenn Sie traurig sind? \n____________________________________________________________________________________ \n2. Was machen Sie, wenn Sie verliebt sind? \n____________________________________________________________________________________ \n3. Was machen Sie, wenn Sie krank sind? \n____________________________________________________________________________________ \n4. Was machen Sie, wenn Sie nervös sind? \n____________________________________________________________________________________ \n5. Was machen Sie, wenn Sie im Restaurant bezahlen wollen aber sie haben Ihr Geld \nvergessen? \n_____________________________________________________________________________________ \n6. Was machen Sie, wenn Sie abnehmen wollen? \n_____________________________________________________________________________________ \n7. Was machen Sie, wenn Sie Kopfschmerzen haben? \n_____________________________________________________________________________________ \n8. Was machen Sie, wenn Sie Geburtstag haben? \n_____________________________________________________________________________________ \n9. Was machen Sie, wenn Ihr Nachbar laut Musik hört? \n_____________________________________________________________________________________ \n10. Was machen Sie, wenn Sie Liebeskummer haben? \n______________________________________________________________________________________ \n\n4. Bilden Sie Sätze mit diesen Bildern: \n1. \n\n\n___________________________________________________________________________________________________ \n2."
          },
          {
            "page": 247,
            "text": "_____________________________________________________________________________________________________ \n3. \n\n_____________________________________________________________________________________________________ \n4. \n\n_____________________________________________________________________________________________ \n5. \n\n_______________________________________________________________________________________________ \n5. Bilden Sie Sätze mit wenn: \nZ.B. 0. Ich telefoniere mit Maria. Ich vermisse sie."
          },
          {
            "page": 248,
            "text": "Ich telefoniere Maria, wenn ich sie vermisse. \n1. Ich lerne jeden Tag eine halbe Stunde Deutsch. Meine Note wird besser. \n_______________________________________________________________________________________ \n2. Ich lese österreichische Zeitungen. Ich verstehe besser Deutsch. \n________________________________________________________________________________________ \n3. Ich höre deutschsprachige Musik. Ich kann Maria besser verstehen. \n_________________________________________________________________________________________ \n4. Ich spreche mit meiner Mutter. Sie versteht mich. \n__________________________________________________________________________________________ \n5. Ich helfe im Haushalt. Meine Mutter freut sich. \n__________________________________________________________________________________________ \n6. Ich trage Zeitungen aus. Ich kann meine Handyrechnung selbst bezahlen. \n___________________________________________________________________________________________ \n7. Ich kann meine Handyrechnung selbst bezahlen. Ich kann oft mit Maria \ntelefonieren. \n____________________________________________________________________________________________ \n8. Ich spiele wieder Fußball. Ich verbringe mehr Zeit mit meinen Freunden. \n_____________________________________________________________________________________________ \n9. Ich verbringe mehr Zeit mit meinen Freunden. Ich vermisse Maria weniger. \n______________________________________________________________________________________________ \n6.Setzen Sie das korrekte Wort in die Lücken ein! \n1. _______ich viel Zeit habe, koche ich gern richtig. \n2. _______ kommst du jeden Abend nach Hause? \n3. ________ ich noch bei meinem alten Job gearbeitet habe, bin ich immer erst um 21.00 \nUhr nach Hause gekommen. \n4. Aber jetzt ist es viel besser, ich kann nach Hause gehen, _______ ich will. \n5. _______ ich keine Lust zum Kochen habe, hole ich mir eine Pizza vom Italiener. \n6. Ich habe schon gerne Pizza gegessen, _______ ich noch ein Kind war. \n7. Sag mal, seit _________ wohnst du eigentlich in Dublin? \n8. Ich bin hierhergekommen, ________ ich mit dem Studium fertig war. \n9. Und _________ bist du hierhergekommen? \n10. Ich weiß gar nicht mehr, _________ ich genau gekommen bin, ich glaube vor 15 Jahren. \n11. _________ ich keine Arbeit mehr habe, werde ich sicher in ein anderes Land gehen. \n12. Was willst du machen, _________ du deinen Job verlierst? \n7.Bilden Sie selbst Sätze! (Wählen Sie “wenn” oder “als”) \n1. Ich koche gerne mit Freunden, ... (viel Zeit/ ich/ haben/ wenn) \n____________________________________________________________________________________________ \n2. Wenn/ als ich den ganzen Tag nur wenig esse, ... (mir/ gehen/es/ nicht gut) \n____________________________________________________________________________________________ \n3. Wenn/ als meine Mutter Geburtstag hat, … (einen Kuchen/ backen/ ich/ ihr) \n____________________________________________________________________________________________ \n4. Wenn/ als ich nervös bin, … (viel Schokolade/ ich essen)"
          },
          {
            "page": 249,
            "text": "____________________________________________________________________________________________ \n5. Ich trinke immer Tee mit Zitrone, … (eine Erkältung/ wenn/als/ haben/ ich) \n____________________________________________________________________________________________ \n6. Wenn/ als ich nicht schlafen kann, … (ein Buch/ ich/ lesen) \n____________________________________________________________________________________________ \n7. Wenn/als ich noch klein war, (nicht kochen/ müssen/ ich) \n____________________________________________________________________________________________ \n8. Ich bin gleich einkaufen gegangen, … (wenn/als/ Geld/ bekommen/ ich) \n_____________________________________________________________________________________________ \n9. Wenn/als ich noch in der Schule war, … (Hausaufgaben/ jeden Tag/ müssen/ ich \nmachen) \n_____________________________________________________________________________________________ \n10. Wenn/als es Sommer ist, … (sein/ rot/ meine Lieblingsfarbe) \n_____________________________________________________________________________________________ \n11. Wenn/als es Winter ist, … (ich/ mögen/ dunkle Farben/ lieber) \n_____________________________________________________________________________________________ \n\n8. „ALS“ oder „WENN“ ? Wählen Sie aus: \n1. ___________________ ich 8 Jahre alt war, schenkte mir meine Mutter eine Katze. \n2. ___________________ ich zu spät bin, laufe ich immer zur Schule \n3. Mein Bruder war immer da, ______________________________ ich ihn brauchte. \n4. __________________ sie sah, dass sie eine gute Note bekommen hatte, freute sie sich. \n5. ___________ Kind las ich immer Comics, _________ich traurig war \n6. Ich wurde sehr traurig, __________________ mein Großvater uns verließ. \n7. _________________ ich ein Kind war, durfte ich nicht fernsehen. \n8. Kommen Sie zu mir, ______________________ Sie noch Fragen haben. \n9. _______________________ ich jünger war, wollte ich nicht mit Männern sprechen. \n10. ______________________ ich ein Baby war, hatte ich noch keine Geschwister. \n\n9. Setzen Sie „wenn“ oder „als“ ein! \n1. …………………. es morgen immer noch regnet, bleiben wir nicht länger hier. \n2. …………………. Stephan von seinem Unfall erzählte, hörten alle zu. \n3. Clara hört immer Musik, …………………. sie Vokabeln lernt. \n4. …………………. ich mein Examen habe, mache ich erst mal eine lange Reise. \n5. …………………. mein Bruder sein Examen hatte, war er schon 27 Jahre alt. \n6. …………………. du mehr Obst und Gemüse essen würdest, wärst du nicht so oft \nerkältet. \n7. Wir fangen schon mal ohne dich an, …………………. du nicht früher kommen kannst."
          },
          {
            "page": 250,
            "text": "8. Sie warteten immer noch, …………………. er endlich anrief. \n9. Kommt ihr mit, …………………. ich die Konzertkarten besorge? \n10. Wo hast du immer die Ferien verbracht, …………………. du ein Kind warst? \n11. Ruf mich an, …………………. du wieder in Kassel bist. \n12. Sie halfen mir immer, …………………. ich Hilfe brauchte. \n13. Wir könnten ins Kino gehen, …………………. du willst. \n14. Sie war sehr froh, …………………. sie den Brief erhielt. \n15. Schreibt uns, …………………. ihr Lust dazu habt. \n16. er nicht bald kommt, …………………. gehe ich alleine. \n10.Bilde Sätze mit “als”! \n1. schon gut sprechen können \n_________________________________________________________________________________________ \n2. in die Schule kommen \n__________________________________________________________________________________________ \n3. schwimmen lernen \n___________________________________________________________________________________________ \n4. in ein anderes Land umziehen \n_________________________________________________________________________________________ \n5. eine neue Sprache sprechen können \n__________________________________________________________________________________________ \n6. sich zum ersten Mal verlieben \n__________________________________________________________________________________________ \n7. alleine auf ein Konzert gehen \n__________________________________________________________________________________________ \n8. zum ersten Mal Urlaub mit Freunden machen \n___________________________________________________________________________________________ \n9. das erste Bier trinken dürfen \n___________________________________________________________________________________________ \n\n11.Mach diese Sätze fertig! \n1. Wir gehen ins Kino, wenn…. \n___________________________________________________________________________________________ \n2. Ich küsse dich, wenn… \n___________________________________________________________________________________________ \n3. Ich kaufe Bananen, wenn… \n___________________________________________________________________________________________ \n4. Wir stehen nicht auf, wenn…"
          },
          {
            "page": 251,
            "text": "___________________________________________________________________________________________ \n5. Wir haben kein Geld, wenn…. \n___________________________________________________________________________________________ \n6. Ich treffe mit meiner Freundin, wenn: \n____________________________________________________________________________________________"
          }
        ],
        "answerPages": [
          {
            "page": 251,
            "text": "Die Lösungen: \nÜbung 1 \n1) Er macht eine Party, wenn er die Prüfung besteht. 2) Du kannst zu mir kommen, wenn du Lust hast. \n3) Wir bleiben zu Hause, wenn das Wetter schlecht ist. 4) Ich fahre in die Stadt, wenn ich fertig bin. 5) \nDu bekommst gute Noten, wenn du viel lernst. 6) Sie kommen, wenn Sie Zeit haben. \nÜbung 2 \n1) Ich gehe tanzen, wenn du mitkommst. 2) Ich fliege nach Australien, wenn die Eltern das Ticket \nbezahlen. 3) Er fährt langsam, wenn es Schnee gibt. 4) Eva fährt nach Italien, wenn ihr Freund Mario \nheiratet. 5) Wenn wir eine Klassenarbeit schreiben, lernen wir viel. 6) Sie geht ins Kino, wenn sie keine \nSchule hat \nÜbung 3 \n1) Wenn ich traurig bin, gehe ich spazieren. 2) Wenn ich verliebt bin, denke ich an dieser Person. 3) \nWenn ich krank bin, bleibe ich zu Hause. 4) Wenn ich nervös bin, gehe ich draußen. 5) Wenn ich im \nRestaurant bezahlen will, aber ich habe mein Geld vergessen, bezahle ich per Kreditkarte. 6) wenn ich \nabnehmen will, mache ich Diät 7) Wenn ich Kopfschmerzen habe, nehme ich Schmerzmittel ein. 8) \nWenn ich Geburtstag habe, feiere ich. 9) Wenn mein Nachbar laut Musik hört, gehe ich zu ihm und \nbitte darum, dass er leise Musik hört. 10) Wenn ich Liebeskummer habe, weine ich \nÜbung 4 \n1) Wenn ich kalt fühle, trage ich einen Schal. 2) Wenn es regnet, halte ich den Regenschirm über den \nKopf. 3) Wenn es den Schlamm auf dem Boden gibt, trage ich einen Stiefel. 4) Wenn die Sonne sehr \nheiß ist, trage ich eine Sonnenbrille. 5) Wenn es zu kalt ist, ziehe ich eine Jacke. \nÜbung 5 \n1) Wenn ich jeden Tag eine halbe Stunde Deutsch lerne, wird meine Note besser. 2) Wenn ich \nösterreichische Zeitungen lese, verstehe ich besser Deutsch. 3) Wenn ich deutschsprachige Musik höre, \nkann ich Maria besser verstehen. 4) Wenn ich mit meiner Mutter spreche, versteht sie mich. 5) Wenn \nich im Haushalt helfe, freut meine Mutter sich. 6) Wenn ich Zeitungen austrage, kann ich meine \nHandyrechnung selbst bezahlen. 7) Wenn ich meine Handyrechnung selbst bezahlen kann, kann ich oft"
          },
          {
            "page": 252,
            "text": "mit Maria telefonieren. 8) Wenn ich wieder Fußball spiele, verbringe ich mehr Zeit mit meinen \nFreunden. 9) Wenn ich mehr Zeit mit meinen Freunden verbringe. vermisse ich Maria weniger. \nÜbung 6 \n1) Wenn 2) wann 3) als 4) wenn 5) wenn 6) als 7) wann 8) als 9) wann 10) wann 11) wenn 12) wenn \n\nÜbung 7 \n1) ,wenn ich viel zeit habe. 2) wenn – geht es mir nicht gut. 3) wenn – backe ich ihr einen Kuchen. 4) \nwenn – esse ich viel Schokolade. 5) wenn ich eine Erkältung habe. 6) wenn – lese ich ein Buch. 7) als – \nmuss ich nicht kochen. 8) wenn ich Geld bekomme. 9) als –muss ich Hausaufgaben jeden Tag machen. \n10) Wenn – ist meine Lieblingsfarbe rot. 11) Wenn – mag ich dunkle Farben lieber. \nÜbung 8 \n1) als 2) wenn 3) als 4) als 5) als. 6) als 7) als 8) wenn 9) als 10) als \nÜbung 9 \n1) Wenn 2) als 3) wenn 4) wenn 5) als 6) wenn 7) wenn 8) als 9) wenn 10) als 11) wenn 12) als 13) \nwenn 14) als 15) wenn 16) wenn \nÜbung 10 \n1) Als wir viel Deutsch hörten, konnten wir gut sprechen. 2) Als er in die Schule kam, war er 6 Jahre alt. \n3) Als sie Kind war, konnte sie schwimmen lernen 4) Als wir Kinder waren, zogen wir in ein anderes \nLand um. 5) Als ich in der Schule war, konnte ich eine neue Sprache sprechen. 6) Als ich Kind war, \nverliebte ich mich zum ersten Mal verlieben. 7) Als ich ein Kind war, durfte ich alleine auf ein Konzert \nnicht gehen. 8) Als ich in der Schule war, machte ich zum ersten Mal Urlaub mit Freunden. 9) Als ich \nUrlaub mit meinen Freunden machte, durfte ich das erste Bier trinken. \nÜbung 11 \n1) Wir gehen ins Kino, wenn wir Zeit haben. 2) Ich küsse dich, wenn wir heiraten 3) Ich kaufe Bananen, \nwenn ich Hunger habe. 4) Wir stehen nicht auf, wenn wir keine Schule haben. 5) Wir haben kein Geld, \nwenn wir einkaufen gehen und zurückkommen. 6) Wenn ich mit meiner Freundin treffe, bin ich sehr \nfroh."
          }
        ]
      },
      {
        "folge": "Folge 30",
        "title": "Ich bin glücklich, wenn ...",
        "printedPageStart": 253,
        "printedPageEnd": 255,
        "sourcePages": [
          {
            "page": 253,
            "text": "Was macht mich glücklich? \n• Ich fühle mich gut, wenn ………………………………………… \n• Ich bin glücklich / zufrieden, wenn ………………………… \n\n\nMusik hören \nnichts tun müssen \n\n\nein Projekt erfolgreich \nbeenden \n\nmit der Familie feiern \n\neine interessante Arbeit \nhaben \n\nmit Freunden reden \n\nein leckeres Essen kochen \n\nein gutes Buch lesen \nDeutschunterricht haben \n\ndie Sonne scheint \nbald in den Urlaub fahren \n\n\neinkaufen gehen \nGeld / Gehalt bekommen \n\nden Menschen helfen \n\nSport treiben \ngesund sein \nein interessantes Hobby haben"
          },
          {
            "page": 254,
            "text": "……………………………………………………………………………………………………………………………………………………………… \n……………………………………………………………………………………………………………………………………………………………… \n……………………………………………………………………………………………………………………………………………………………… \nWas macht mich unglücklich? \n• Ich fühle mich schlecht, wenn ………………………………………… \n• Ich bin unglücklich / unzufrieden, wenn ………………………… \n\n\nschlechte Noten in der Schule \nbekommen \n\nviel Arbeit haben \n\nnegative Erlebnisse haben \n\nallein sein \n\nkrank/verletzt sein \n\nStreit mit Freunden/Familie haben \n\nStress haben"
          },
          {
            "page": 255,
            "text": "……………………………………………………………………………………………………………………………………………………………… \n……………………………………………………………………………………………………………………………………………………………… \n……………………………………………………………………………………………………………………………………………………………… \n……………………………………………………………………………………………………………………………………………………………… \n\nIch fühle mich gut, wenn ich Sport treibe. / Ich fühle mich gut, wenn ich gesund bin. / Ich fühle mich \ngut, wenn ich Musik höre. / Ich fühle mich gut, wenn ich eine interessante Arbeit habe. / Ich fühle \nmich gut, wenn ich ein Projekt erfolgreich beende. / Ich fühle mich gut, wenn ich einkaufen gehe. / \nIch fühle mich gut, wenn ich ein gutes Buch lese. / Ich fühle mich gut, wenn ich Deutschunterricht \nhabe. / Ich bin glücklich / zufrieden, wenn die Sonne scheint. / Ich bin glücklich / zufrieden, wenn \nich bald in den Urlaub fahre. / Ich bin glücklich / zufrieden, wenn ich den Menschen helfe. / Ich bin \nglücklich / zufrieden, wenn ich mit meinen Freunden rede. / Ich bin glücklich / zufrieden, wenn ich \nein leckeres Essen koche. / Ich bin glücklich / zufrieden, wenn ich mit der Familie feiere. \n\nIch fühle mich schlecht, wenn ich krank / verletzt bin. / Ich fühle mich schlecht, wenn ich schlechte \nNoten in der Schule bekomme. / Ich fühle mich schlecht, wenn ich negative Erlebnisse habe. / Ich \nfühle mich schlecht, wenn ich viel Arbeit habe. / Ich bin unglücklich / unzufrieden, wenn ich Stress \nhabe. / Ich bin unglücklich / unzufrieden, wenn ich Streit mit Freunden/Familie habe. / Ich bin \nunglücklich / unzufrieden, wenn ich allein bin."
          }
        ],
        "answerPages": []
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 26: Reflexive Verben · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "freuen - sich",
          "Wenn es zu kalt ist, ziehe ich eine Jacke",
          "Freust",
          "als"
        ],
        "answer": "Freust"
      },
      {
        "id": "q-2",
        "prompt": "Folge 26: Reflexive Verben · Übung 1 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "verliebt",
          "mich",
          "s. interessieren",
          "als"
        ],
        "answer": "verliebt"
      },
      {
        "id": "q-3",
        "prompt": "Folge 26: Reflexive Verben · Übung 1 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Stellen sich vor",
          "kämmt",
          "dich",
          "als"
        ],
        "answer": "kämmt"
      },
      {
        "id": "q-4",
        "prompt": "Folge 26: Reflexive Verben · Übung 2 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Ich verspreche dir, dir im Haushalt zu helfen",
          "f",
          "dich",
          "Meine Tante kämmt sich immer"
        ],
        "answer": "Meine Tante kämmt sich immer"
      },
      {
        "id": "q-5",
        "prompt": "Folge 26: Reflexive Verben · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn",
          "mich",
          "sich",
          "Als er in die Schule kam, war er 6 Jahre alt"
        ],
        "answer": "sich"
      },
      {
        "id": "q-6",
        "prompt": "Folge 26: Reflexive Verben · Übung 3 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "000 Euro zu kaufen",
          "wenn",
          "als",
          "sich"
        ],
        "answer": "sich"
      },
      {
        "id": "q-7",
        "prompt": "Folge 26: Reflexive Verben · Übung 3 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich putzen",
          "als",
          "sich",
          "mich"
        ],
        "answer": "sich"
      },
      {
        "id": "q-8",
        "prompt": "Folge 26: Reflexive Verben · Übung 4 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1.b",
          "mich",
          "dich putzen",
          "sich"
        ],
        "answer": "dich putzen"
      },
      {
        "id": "q-9",
        "prompt": "Folge 26: Reflexive Verben · Übung 4 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "als",
          "Wenn ich traurig bin, gehe ich spazieren",
          "dich",
          "dich fürchten"
        ],
        "answer": "dich fürchten"
      },
      {
        "id": "q-10",
        "prompt": "Folge 26: Reflexive Verben · Übung 5 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "irrst dich",
          "s. verabschieden",
          "mich bedanken",
          "sich"
        ],
        "answer": "s. verabschieden"
      },
      {
        "id": "q-11",
        "prompt": "Folge 26: Reflexive Verben · Übung 5 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "s. interessieren",
          "Wenn es zu kalt ist, ziehe ich eine Jacke",
          "setzen sich",
          "wenn – lese ich ein Buch"
        ],
        "answer": "s. interessieren"
      },
      {
        "id": "q-12",
        "prompt": "Folge 26: Reflexive Verben · Übung 5 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "s. kämmen",
          "für alle Kaffee zu kochen",
          "mich",
          "Wenn es zu kalt ist, ziehe ich eine Jacke"
        ],
        "answer": "s. kämmen"
      },
      {
        "id": "q-13",
        "prompt": "Folge 26: Reflexive Verben · Übung 5 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "als",
          "s. schlecht fühlen",
          "Freust",
          "die Hausaufgabe allein zu machen"
        ],
        "answer": "s. schlecht fühlen"
      },
      {
        "id": "q-14",
        "prompt": "Folge 26: Reflexive Verben · Übung 5 · item 16",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "Wenn ich nervös bin, gehe ich draußen",
          "s. waschen",
          "Als er in die Schule kam, war er 6 Jahre alt"
        ],
        "answer": "s. waschen"
      },
      {
        "id": "q-15",
        "prompt": "Folge 26: Reflexive Verben · Übung 6 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn – ist meine Lieblingsfarbe rot",
          "setzt sich",
          "Freust",
          "Stellen sich vor"
        ],
        "answer": "setzt sich"
      },
      {
        "id": "q-16",
        "prompt": "Folge 26: Reflexive Verben · Übung 6 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn",
          "als",
          "Wenn – ist meine Lieblingsfarbe rot",
          "Stellen sich vor"
        ],
        "answer": "Stellen sich vor"
      },
      {
        "id": "q-17",
        "prompt": "Folge 26: Reflexive Verben · Übung 7 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wir bleiben zu Hause, wenn das Wetter schlecht ist",
          "Sie kommen, wenn Sie Zeit haben",
          "Die Dame irrt sich jetzt",
          "wenn"
        ],
        "answer": "Die Dame irrt sich jetzt"
      },
      {
        "id": "q-18",
        "prompt": "Folge 26: Reflexive Verben · Übung 8 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "mich",
          "putzt – dich",
          "streiten sich"
        ],
        "answer": "dich"
      },
      {
        "id": "q-19",
        "prompt": "Folge 26: Reflexive Verben · Übung 8 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mich",
          "sich - ausruhen",
          "s. schlecht fühlen",
          "sich"
        ],
        "answer": "mich"
      },
      {
        "id": "q-20",
        "prompt": "Folge 26: Reflexive Verben · Übung 8 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn",
          "uns",
          "1. Es ist verboten, in der Wohnung Hunde zu halten",
          "s. verabschieden"
        ],
        "answer": "uns"
      },
      {
        "id": "q-21",
        "prompt": "Folge 26: Reflexive Verben · Übung 8 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "als",
          "Wir bleiben zu Hause, wenn das Wetter schlecht ist",
          "wann",
          "sich"
        ],
        "answer": "sich"
      },
      {
        "id": "q-22",
        "prompt": "Folge 26: Reflexive Verben · Übung 9 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mich",
          "Stellen sich vor",
          "Wenn ich nervös bin, gehe ich draußen",
          "Wenn es zu kalt ist, ziehe ich eine Jacke"
        ],
        "answer": "mich"
      },
      {
        "id": "q-23",
        "prompt": "Folge 26: Reflexive Verben · Übung 9 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wir bleiben zu Hause, wenn das Wetter schlecht ist",
          "sich",
          "mich",
          "setzen sich"
        ],
        "answer": "mich"
      },
      {
        "id": "q-24",
        "prompt": "Folge 26: Reflexive Verben · Übung 9 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "uns",
          "dich",
          "Wenn es zu kalt ist, ziehe ich eine Jacke"
        ],
        "answer": "dich"
      },
      {
        "id": "q-25",
        "prompt": "Folge 26: Reflexive Verben · Übung 10 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "wann",
          "als",
          "Die Dame irrt sich jetzt"
        ],
        "answer": "sich"
      },
      {
        "id": "q-26",
        "prompt": "Folge 26: Reflexive Verben · Übung 10 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn – lese ich ein Buch",
          "sich",
          "mich",
          "sich - ausruhen"
        ],
        "answer": "mich"
      },
      {
        "id": "q-27",
        "prompt": "Folge 26: Reflexive Verben · Übung 11 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "als",
          "putzt – dich",
          "kämmt"
        ],
        "answer": "putzt – dich"
      },
      {
        "id": "q-28",
        "prompt": "Folge 26: Reflexive Verben · Übung 11 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "freuen - sich",
          "kämmt",
          "allein zu klettern",
          "sich - ausruhen"
        ],
        "answer": "freuen - sich"
      },
      {
        "id": "q-29",
        "prompt": "Folge 26: Reflexive Verben · Übung 12 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "wenn",
          "wann",
          "freuen - sich"
        ],
        "answer": "dich"
      },
      {
        "id": "q-30",
        "prompt": "Folge 26: Reflexive Verben · Übung 12 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "Als er in die Schule kam, war er 6 Jahre alt",
          "uns",
          "sich"
        ],
        "answer": "uns"
      },
      {
        "id": "q-31",
        "prompt": "Folge 26: Reflexive Verben · Übung 13 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich nervös bin, gehe ich draußen",
          "mich",
          "sich - ausruhen",
          "putzt – dich"
        ],
        "answer": "sich - ausruhen"
      },
      {
        "id": "q-32",
        "prompt": "Folge 26: Reflexive Verben · Übung 13 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich - gekümmert",
          "s. schlecht fühlen",
          "als",
          "wann"
        ],
        "answer": "sich - gekümmert"
      },
      {
        "id": "q-33",
        "prompt": "Folge 26: Reflexive Verben · Übung 13 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Stellen sich vor",
          "dich",
          "irrst dich",
          "s. interessieren"
        ],
        "answer": "irrst dich"
      },
      {
        "id": "q-34",
        "prompt": "Folge 26: Reflexive Verben · Übung 13 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Freust",
          "sich",
          "mich bedanken",
          "s. kämmen"
        ],
        "answer": "mich bedanken"
      },
      {
        "id": "q-35",
        "prompt": "Folge 26: Reflexive Verben · Übung 13 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "allein zu klettern",
          "streiten sich",
          "Als er in die Schule kam, war er 6 Jahre alt",
          "s. schlecht fühlen"
        ],
        "answer": "streiten sich"
      },
      {
        "id": "q-36",
        "prompt": "Folge 26: Reflexive Verben · Übung 13 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "setzen sich",
          "wenn",
          "uns",
          "dich"
        ],
        "answer": "setzen sich"
      },
      {
        "id": "q-37",
        "prompt": "Folge 26: Reflexive Verben · Übung 14 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich nervös bin, gehe ich draußen",
          "uns",
          "dich",
          "sich"
        ],
        "answer": "dich"
      },
      {
        "id": "q-38",
        "prompt": "Folge 26: Reflexive Verben · Übung 14 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "setzen sich",
          "Wir bleiben zu Hause, wenn das Wetter schlecht ist",
          "sich",
          "wenn"
        ],
        "answer": "sich"
      },
      {
        "id": "q-39",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "1.b",
          "uns",
          "als"
        ],
        "answer": "1.b"
      },
      {
        "id": "q-40",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "f",
          "Stellen sich vor",
          "Wenn – ist meine Lieblingsfarbe rot",
          "sich"
        ],
        "answer": "f"
      },
      {
        "id": "q-41",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Gäste vom Bahnhof abzuholen",
          "dich putzen",
          "setzen sich",
          "sich"
        ],
        "answer": "die Gäste vom Bahnhof abzuholen"
      },
      {
        "id": "q-42",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "wenn – geht es mir nicht gut",
          "mich",
          "für alle Kaffee zu kochen"
        ],
        "answer": "für alle Kaffee zu kochen"
      },
      {
        "id": "q-43",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "1. Ich verspreche dir, dir im Haushalt zu helfen",
          "Stellen sich vor",
          "mich bedanken"
        ],
        "answer": "1. Ich verspreche dir, dir im Haushalt zu helfen"
      },
      {
        "id": "q-44",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "Wenn ich Liebeskummer habe, weine ich",
          "Carla hat vor, ihren Urlaub im Ausland zu verbringen",
          "f"
        ],
        "answer": "Carla hat vor, ihren Urlaub im Ausland zu verbringen"
      },
      {
        "id": "q-45",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mich",
          "die Hausaufgabe allein zu machen",
          "wenn",
          "sich"
        ],
        "answer": "die Hausaufgabe allein zu machen"
      },
      {
        "id": "q-46",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "allein zu klettern",
          "wenn",
          "s. schlecht fühlen",
          "für alle Kaffee zu kochen"
        ],
        "answer": "allein zu klettern"
      },
      {
        "id": "q-47",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Es ist verboten, in der Wohnung Hunde zu halten",
          "Meine Tante kämmt sich immer",
          "Carla hat vor, ihren Urlaub im Ausland zu verbringen",
          "dich"
        ],
        "answer": "1. Es ist verboten, in der Wohnung Hunde zu halten"
      },
      {
        "id": "q-48",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Holger ist immer noch davon überzeugt, eines Tages seine Traumfrau zu finden",
          "1.b",
          "verliebt",
          "sich - ausruhen"
        ],
        "answer": "1. Holger ist immer noch davon überzeugt, eines Tages seine Traumfrau zu finden"
      },
      {
        "id": "q-49",
        "prompt": "Folge 28: Infinitiv mit zu II · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "die Gäste vom Bahnhof abzuholen",
          "Als er in die Schule kam, war er 6 Jahre alt",
          "000 Euro zu kaufen"
        ],
        "answer": "000 Euro zu kaufen"
      },
      {
        "id": "q-50",
        "prompt": "Folge 29: wenn und als · Übung 1 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "f",
          "als",
          "setzen sich",
          "Wir bleiben zu Hause, wenn das Wetter schlecht ist"
        ],
        "answer": "Wir bleiben zu Hause, wenn das Wetter schlecht ist"
      },
      {
        "id": "q-51",
        "prompt": "Folge 29: wenn und als · Übung 1 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Sie kommen, wenn Sie Zeit haben",
          "dich",
          "dich fürchten",
          "1. Es ist verboten, in der Wohnung Hunde zu halten"
        ],
        "answer": "Sie kommen, wenn Sie Zeit haben"
      },
      {
        "id": "q-52",
        "prompt": "Folge 29: wenn und als · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn ich traurig bin, gehe ich spazieren",
          "dich",
          "s. verabschieden",
          "Stellen sich vor"
        ],
        "answer": "Wenn ich traurig bin, gehe ich spazieren"
      },
      {
        "id": "q-53",
        "prompt": "Folge 29: wenn und als · Übung 3 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "Meine Tante kämmt sich immer",
          "Wir bleiben zu Hause, wenn das Wetter schlecht ist",
          "Wenn ich nervös bin, gehe ich draußen"
        ],
        "answer": "Wenn ich nervös bin, gehe ich draußen"
      },
      {
        "id": "q-54",
        "prompt": "Folge 29: wenn und als · Übung 3 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich - ausruhen",
          "wann",
          "Wenn ich Liebeskummer habe, weine ich",
          "als"
        ],
        "answer": "Wenn ich Liebeskummer habe, weine ich"
      },
      {
        "id": "q-55",
        "prompt": "Folge 29: wenn und als · Übung 4 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "s. interessieren",
          "Wenn es zu kalt ist, ziehe ich eine Jacke",
          "Als er in die Schule kam, war er 6 Jahre alt",
          "Wenn ich traurig bin, gehe ich spazieren"
        ],
        "answer": "Wenn es zu kalt ist, ziehe ich eine Jacke"
      },
      {
        "id": "q-56",
        "prompt": "Folge 29: wenn und als · Übung 5 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Hausaufgabe allein zu machen",
          "Wenn es zu kalt ist, ziehe ich eine Jacke",
          "Wenn ich mehr Zeit mit meinen Freunden verbringe. vermisse ich Maria weniger",
          "Wenn ich Liebeskummer habe, weine ich"
        ],
        "answer": "Wenn ich mehr Zeit mit meinen Freunden verbringe. vermisse ich Maria weniger"
      },
      {
        "id": "q-57",
        "prompt": "Folge 29: wenn und als · Übung 6 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn – geht es mir nicht gut",
          "sich",
          "wenn",
          "s. interessieren"
        ],
        "answer": "wenn"
      },
      {
        "id": "q-58",
        "prompt": "Folge 29: wenn und als · Übung 6 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Meine Tante kämmt sich immer",
          "wenn – lese ich ein Buch",
          "Freust",
          "wann"
        ],
        "answer": "wann"
      },
      {
        "id": "q-59",
        "prompt": "Folge 29: wenn und als · Übung 6 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wann",
          "Wenn ich nervös bin, gehe ich draußen",
          "verliebt",
          "Sie kommen, wenn Sie Zeit haben"
        ],
        "answer": "wann"
      },
      {
        "id": "q-60",
        "prompt": "Folge 29: wenn und als · Übung 7 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sich",
          "wenn – geht es mir nicht gut",
          "dich",
          "wenn"
        ],
        "answer": "wenn – geht es mir nicht gut"
      },
      {
        "id": "q-61",
        "prompt": "Folge 29: wenn und als · Übung 7 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wenn es zu kalt ist, ziehe ich eine Jacke",
          "wenn – lese ich ein Buch",
          "s. schlecht fühlen",
          "Die Dame irrt sich jetzt"
        ],
        "answer": "wenn – lese ich ein Buch"
      },
      {
        "id": "q-62",
        "prompt": "Folge 29: wenn und als · Übung 7 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "wenn",
          "Wenn – ist meine Lieblingsfarbe rot",
          "als"
        ],
        "answer": "Wenn – ist meine Lieblingsfarbe rot"
      },
      {
        "id": "q-63",
        "prompt": "Folge 29: wenn und als · Übung 8 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "setzt sich",
          "mich bedanken",
          "wenn",
          "wenn – lese ich ein Buch"
        ],
        "answer": "wenn"
      },
      {
        "id": "q-64",
        "prompt": "Folge 29: wenn und als · Übung 8 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn",
          "als",
          "sich",
          "dich"
        ],
        "answer": "als"
      },
      {
        "id": "q-65",
        "prompt": "Folge 29: wenn und als · Übung 8 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "000 Euro zu kaufen",
          "mich",
          "sich",
          "als"
        ],
        "answer": "als"
      },
      {
        "id": "q-66",
        "prompt": "Folge 29: wenn und als · Übung 9 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn – geht es mir nicht gut",
          "s. kämmen",
          "als",
          "irrst dich"
        ],
        "answer": "als"
      },
      {
        "id": "q-67",
        "prompt": "Folge 29: wenn und als · Übung 9 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "als",
          "s. waschen",
          "sich",
          "allein zu klettern"
        ],
        "answer": "als"
      },
      {
        "id": "q-68",
        "prompt": "Folge 29: wenn und als · Übung 9 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wenn",
          "s. waschen",
          "als",
          "wenn – lese ich ein Buch"
        ],
        "answer": "als"
      },
      {
        "id": "q-69",
        "prompt": "Folge 29: wenn und als · Übung 9 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dich",
          "als",
          "irrst dich",
          "1.b"
        ],
        "answer": "als"
      },
      {
        "id": "q-70",
        "prompt": "Folge 29: wenn und als · Übung 9 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "irrst dich",
          "000 Euro zu kaufen",
          "wenn",
          "f"
        ],
        "answer": "wenn"
      },
      {
        "id": "q-71",
        "prompt": "Folge 29: wenn und als · Übung 10 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Als er in die Schule kam, war er 6 Jahre alt",
          "1.b",
          "als",
          "putzt – dich"
        ],
        "answer": "Als er in die Schule kam, war er 6 Jahre alt"
      },
      {
        "id": "q-72",
        "prompt": "Folge 29: wenn und als · Übung 10 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Als ich in der Schule war, machte ich zum ersten Mal Urlaub mit Freunden",
          "f",
          "wenn",
          "Wenn ich Liebeskummer habe, weine ich"
        ],
        "answer": "Als ich in der Schule war, machte ich zum ersten Mal Urlaub mit Freunden"
      }
    ],
    "sourcePageCount": 28,
    "answerPageCount": 6
  },
  {
    "id": "werden-passiv-relativ-kasusverben",
    "title": "werden, Passive, Relative Clauses & Case Verbs",
    "source": "Folge 31-38",
    "pages": "PDF pages 256-300",
    "summary": "Source workbook material from Folge 31-38: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 31",
        "title": "werden als Vollverb",
        "printedPageStart": 256,
        "printedPageEnd": 259,
        "sourcePages": [
          {
            "page": 256,
            "text": "Beispiele \n\na. Peter studiert Medizin. Er wird Arzt. \nb. Maria studiert Jura. Sie wird Rechtsanwältin. \nc. Lisa, was möchtest du werden? Ich möchte Ingenieurin werden. \nd. Stefan ist Vater geworden. Paul ist Mutter geworden. \ne. Er wurde Deutscher. Er hat einen deutschen Pass bekommen. \nf. Mein Traum ist Wirklichkeit geworden. Sie wurde Seine Frau. \ng. Aus seiner Liebe wurde Hass. Die Sache wurde zu einem Skandal. \nh. Was ist aus Maradona geworden? Was soll aus dir werden? \ni. Aus diesem Plan wird nichts. Das Kind ist zum Mann geworden. \nj. Meine Oma ist heute 100 geworden. \n\nWerden \nPro. werden wurden \nIch werde wurde \nDu wirst wurdest \ner,sie,es wird wurde \nWir werden wurden \nIhr werdet wurdet \nsie, Sie werden wurden \nBemerkung \nDas Verb “werden“ \nkommt mit sein im \nPerfekt. \nz.ß Er ist Lehrer \ngeworden."
          },
          {
            "page": 257,
            "text": "1- Suche die Passende Form des Hilfsverbs: \nhat * haben * ist * sind * wird * werden \n\n1- Anna und Pia ___________ immer viel Glück. \n2- Das ___________ schon das zweite Mal, dass du zu spät kommst. \n3- Heidi und Fritz ___________ nicht zu Hause. \n4- Die beiden ___________ nämlich verreist. \n5- Julia und ihre Familie ___________ mitkommen. \n6- Das Buch ___________ leider nur geliehen. \n7- Karin und Günther ___________ wirklich gute Freunde. \n8- Daran ___________ niemand Schuld. \n9- Nur Oma ___________ sich freuen. \n10- Oje! Das ___________ aber Pech! \n11- Ohne Computer ___________ die Kinder viel Zeit. \n12- Sie ___________ dann viel lesen. \n13- Ob Vater daran schon gedacht ___________ ? \n14- Die Kinder ___________ alles versucht. \n15- Alle ___________ glücklich nach Hause kommen. \n16- Unser Vater ___________ heute besonders gut aufgelegt. \n17- Die Leute ___________ nur bis morgen bleiben. \n18- Ein eigenes Klavier ___________ Klaus nicht. \n19- Morgen ___________ das Wetter hoffentlich wieder besser. \n20- Heute ___________ es nämlich besonders schlecht. \n\n2- Ergänzen Sie mit „sein“ , „heißen“ oder „werden“ ! \n1- Wer _______________ bitte am Apparat? \n2- Hier ______________ Herr Stein. \n3- Frau Kräutz ______________ schon Lehrerin. \n4- Ich ______________ Elektriker von Beruf. \n5- Sie studiert auch. Sie ______________ Schneiderin. \n6- Wie ______________ du? ______________ du Verena? \n7- Dieses Jahr ______________ ich verheiratet."
          },
          {
            "page": 258,
            "text": "8- Wie ______________ Herr Stein? ______________ er sympathisch? \n9- Ich ______________ auch nett und jung. \n10- Und wie _________ Frau Bräutel? ______________ sie freundlich? \n11- Deine Kinder ______________ auch freundlich und hübsch. \n12- Herr Thomas, wie ______________ Ihr Sohn? \n13- Morgen ______________ ich vierzig Jahre alt. \n14- ______________ Sie ledig oder verheiratet? \n15- Mein Bruder lernt noch. Er ______________ Mechaniker. \n16- Du studierst schon so lange. Was ______________ du denn? \n17- Mein Vater _________ Egon und meine Mutter ______________ Helga. \n18- Das _________ unser neuer Direktor, er ______________ Herr Bettich. \n19- Wie ______________ Ihr Name, bitte? \n20- Meine Schwester ______________ dieses Jahr Mathematiklehrerin. \n\n3- Bilden Sie die folgenden Sätze im Perfekt. \n\n\n1- Sie wird Mutter. \n2- Er wird Lehrer. \n3- Er wird Ägypter. Er bekommt der ägyptische Pass. \n4- Es wird Kalt. \n5- Er wird krank. \n6- Das wird leicht. \n\n\n4-Bilden Sie die folgenden Sätze im Präteritum \n\n\n1- Es ist schwer geworden. \n2- Er wird böse. \n3- Es wird 10 Uhr. \n4- Es wird regnerisch. \n5- Morgen wird es ein Jahr seit unserer Hochzeit. \n6- Mir wird es langweilig. \n7- Mir ist es übel geworden. \n8- Das ist anders geworden."
          }
        ],
        "answerPages": [
          {
            "page": 259,
            "text": "Die Lösungen: \n\n1) 1.Anna und Pia haben immer viel Glück. 2. Das ist schon das zweite Mal, dass du zu spät kommst. \n3.Heidi und Fritz sind nicht zu Hause. 4.Die beiden sind nämlich verreist. 5.Julia und ihre Familie \nwerden mitkommen. 6. Das Buch ist leider nur geliehen. 7. Karin und Günther sind wirklich gute \nFreunde. 8. Daran hat niemand Schuld. 9. Nur Oma wird sich freuen. 10.Oje! Das ist aber Pech! 11. \nOhne Computer haben die Kinder viel Zeit. 12. Sie werden dann viel lesen. 13. Ob Vater daran schon \ngedacht hat? 14. Die Kinder haben alles versucht. 15. Alle werden glücklich nach Hause kommen. \n16. Unser Vater ist heute besonders gut aufgelegt. 17. Die Leute werden nur bis morgen bleiben. 18. \nEin eigenes Klavier hat Klaus nicht. 19. Morgen wird das Wetter hoffentlich wieder besser. 20. Heute \nist es nämlich besonders schlecht. \n\n\n2) 1. ist 2. ist 3. wird 4. bin 5. wird 6. heißt /Heißt 7. werde 8. Wird/ Ist (Wird) 9. Werde (bin) 10. \nwird/ Ist (Wird) 11.werden(sind) 12. wird 13. bin 14. Sind 15. wird 16. wirst 17. ist / ist 18. wird / ist \n19. sind 20. Wird \n\n\n3)Sie ist Mutter geworden. 2. Er ist Lehrer geworden. 3. Er ist Ägypter geworden. Er hat der \nägyptische Pass bekommt 4. Es ist kalt geworden. 5. Er ist krank geworden. 6. Das ist leicht \ngeworden. \n\n4)1.Es wurde schwer. 2. Er wurde böse. 3. Es wurde 10 Uhr. 4. Es wurde regnerisch. 5.Morgen wurde \nes ein Jahr seit unserer Hochzeit. 6. Mir wurde es langweilig. 7. Mir wurde es übel. 8. Das wurde \nanders."
          }
        ]
      },
      {
        "folge": "Folge 32",
        "title": "Passiv",
        "printedPageStart": 260,
        "printedPageEnd": 266,
        "sourcePages": [
          {
            "page": 260,
            "text": "➢ Das Passiv bildet man wie folgt: \n\nwerden + Partizip II \n\nPosition 1 werden Mittelfeld Partizip II \nDas Haus wird schon seit über 3 \nJahren von Herrn Hut \nrenoviert. \nIn Bayern wird täglich sehr viel Bier getrunken. \nDie Bilder werden ab Mittwoch in der \nKunstgalerie \nverkauft. \nDie Schulkinder werden in der Schule vom \nSchularzt \nuntersucht. \n\n\nAktivsatz Passivsatz \nDer Bauarbeiter baut Häuser. Häuser werden gebaut. \nDer Ober bringt gleich den Nachtisch. Gleich wird der Nachtisch gebracht. \nDer Tierarzt operiert den Hund. Der Hund wird operiert. \n\n\nSetzen Sie folgende Aktivsätze ins Passiv. Bilden Sie die Sätze. \n\n\n. \n1 Simon liebt Michaela. \n2 Jens bringt die Bücher zurück."
          },
          {
            "page": 261,
            "text": "3 Die Männer tragen den schweren Schrank. \n4 Die Krankenschwester hilft dem Arzt. \n5 In München trinkt man viel Bier. \n\n\n2-Formulieren Sie Fragen und antworten Sie wie im Beispiel. \n\n➢ 1961: die Berliner Mauer - bauen \nWann wurde die Berlin er Mauer gebaut? \nDie Berliner Mauer wurde 1961 gebaut. \n\n1. 1949: die Bundesrepublik Deutschland - gründen \n2. 1.1.2002: der Euro als Zahlungsmittel - einführen \n3. 1492: Amerika - entdecken \n4. 1886: der Fernseher - erfinden \n5. 1963: John F. Kennedy - ermorden \n\n\n3) Vergangenheit. Aktiv oder Passiv? Markieren Sie die richtige Lösung. \n\nAktiv Passiv \n• Angela M. wurde 1954 geboren. X \n\n1. Sie studierte Physik. \n2. Später wurde sie Politikerin. \n3. Sie wurde zur ersten Bundeskanzlerin gewählt. \n4. Letzte Woche besuchte sie Frankreich. \n5. Sie wurde vom französischen Staatspräsidenten empfangen. \n6. Nach dem Empfang wurde sie zum Essen eingeladen. \n\n\n4) Formulieren Sie Fragen wie im Beispiel. \n\n➢ das Büro - renovieren \nWann wird das Büro endlich renoviert? \n\n1. der Brief - beantworten \n2. das Paket-abholen \n3. das Zimmer vom Chef – aufräumen \n4. die neuen Drucker - liefern"
          },
          {
            "page": 262,
            "text": "5. das Kollegium - informieren \n6. der Artikel – veröffentlichen \n7. die Preise-senken \n8. das Gehalt-erhöhen \n\n5) Formulieren Sie Sätze wie im Beispiel \n\n➢ der Text - korrigieren \ner Text wird sofort korrigiert \n\n1. der Computer – reparieren \n2. das Problem – lösen \n3. die Unterlagen - kopieren \n4. die E-Mail - verschicken \n5. die Tickets - bestellen \n6. die Rechnung – bezahlen \n7. das Ersatzteil – einbauen \n8. das Datum – ändern \n9. der Termin – bestätigen \n\n\n6) Was geschieht mit………………..? \n\n• Das Bett ……………………….. ……………………………… . \n• Die Fenster …………………. ………………………………. . \n• Der Teppich ………………… ………………………………. . \n• Die Briefe …………………… ………………………….… . \n• Die Katze ……………………. ………………………………. \n• Ich ………………………….. ……………………………..….. . \n\n7) BILDE DIE PASSIVSÄTZE! \n\n1) Ich esse den Kuchen. Der Kuchen wird von mir gegessen. \n2) Die Mutter kauft ein Brot. Ein Brot wird von der Mutter gekauft. \n3) Er putzt das Fenster. Das Fenster wird von ihm geputzt. \n4) Wir lernen Deutsch. Deutsch wird von uns gelernt. \n5) Die Frau kocht Reis. …………………………………………………………………………… \n6) Die Männer bauen das Haus. ………………………………………………………………………… \n7) Ihr räumt das Zimmer auf. …………………………………………………………………………… \n8) Sie rufen den Freund an. ………………………………………………………………………… \n9) Ich frage die Lehrerin. …………………………………………………………………………… \n10) Sie wäscht die Wäsche. …………………………………………………………………………… \nwird gemacht \nwird gesaugt \nwerden geputzt \nwird gefüttert \nwerden geschrieben \nwerde begrüßt"
          },
          {
            "page": 263,
            "text": "11) Er schaut den Film an. ...………………………………………………………………………… \n12) Sie frisiert das Kind. ...………………………………………………………………………… \n13) Ihr malt ein Bild. …………………………………………………………………………… \n14) Er repariert das Auto. .………………………………………………………………………… \n15) Wir machen die Aufgabe. ..……………………………………………………………………… \n16) Ich ziehe die Bluse an. ..……………………………………………………………………… \n17) Du ziehst den Mantel aus. ……………………………………………………………………… \n18) Er schaltet den Computer ein. ……………………………………………………………………… \n19) Ich gieße die Blumen. ……………………………………………………………………… \n20) Ich schneide das Brot. ………………………………………………………………………… \n8) BILDE DIE PASSIVSÄTZE! \n\n1. Der Sportler gewinnt eine Goldmedaille. …………………………………………………………… \n2. Meine Mutter liest täglich die Zeitung. ……………………………………………………………… \n3. Mein Vater kauft ein neues Auto …………………………………………………….……………… \n4. Meine Schwester sucht das Heft. …………………………………………………….……………… \n5. Otto schreibt die Aufgaben. …………………………………………………….……………….. \n6. Heute besuche ich meine Großmutter. …………………………………………………….…… \n7. Der Techniker repariert einen Computer. …………………………………………………….……… \n8. Der Mann fotografiert den Musiker. …………………………………………………….…………… \n9. Petra föhnt Marias Haar. ……………………………………………………………….…………… \n10. Erika schließt die Tür. …………………………………………………………..…….…………….. \n11. Die Deutschen lesen oft Romane. ……………………………………………………………….…… \n12. Unser Nachbar verkauft ein altes Haus. …………………………………………………….……… \n13. Das Volk wählt eine neue Regierung. …………………………………………………….………… \n14. Peter schreibt einen Aufsatz. …………………………………………………….…….……… \n15. Sein Vater kocht die Suppe. ……………………………………………………….…….…… \n16. Meine Eltern planen eine Reise. …………………………………………………………..…….… \n17. Man raucht hier viel. ………………………………………………………..……….……………….."
          },
          {
            "page": 264,
            "text": "9) Schreib die Sätze im Passiv. \n\n\ndie Bücher Präsens – das Essen Präsens – ich Perfekt – das Haus \n\n\nIch das Auto das Bild Ihr \n\n\ndie Kekse das Haus der Koffer das Fenster \n\n\ndas Kleid das Gemüse die Wäsche der Dieb \nlesen – reparieren – nähen – vorbereiten – backen – packen – festnehmen – schlagen - zerstören – \nernten – fragen – fotografieren – bauen – waschen – schließen"
          }
        ],
        "answerPages": [
          {
            "page": 265,
            "text": "Die lösungen: \n\n1) 1. Michaela wird von Simon geliebt. 2. Die Bücher werden zurückgebracht. 3. Der schwere \nSchrank wird getragen. 4. Dem Arzt wird geholfen. 5. In München wird viel Bier getrunken. \n\n2) 1.Wann wurde die Bundesrepublik Deutsch gegründet? Die Bundesrepublik Deutschland \nwurde 1949 gegründet. 2. Wann wurde der Euro als Zahlungsmittel eingeführt? Der Euro \nwurde am 1.1.2002 als Zahlungsmittel eingeführt. 3. Wann wurde Amerika entdeckt? \nAmerika wurde 1492 entdeckt. 4. Wann wurde der Fernseher erfunden? Der Fernseher \nwurde 1886 erfunden. 5. Wann wurde John F. Kennedy ermordet? John F. Kennedy wurde \n1963 ermordet. \n\n3) 1. Aktiv 2. Aktiv 3. Passiv 4. Aktiv 5. Passiv 6. Passiv \n\n4) 1. Wann wird der Brief endlich beantwortet? 2. Wann wird das Paket endlich abgeholt? 3. \nWann wird das Zimmer vom Chef endlich aufgeräumt? 4. Wann werden die neuen Drucker \nendlich geliefert? 5. Wann wird das Kollegium endlich informiert? 6. Wann wird der Artikel \nendlich veröffentlicht? 7. Wann werden die Preise endlich gesenkt? 8. Wann wird das Gehalt \nendlich erhöht? \n\n5) 1. Der Computer wird sofort repariert. 2. Das Problem wird sofort gelöst. 3. Die Unterlagen \nwerden sofort kopiert. 4. Die E-Mail wird sofort verschickt. 5. Die Tickets werden sofort \nbestellt. 6. Die Rechnung wird sofort bezahlt. 7. Das Ersatzteil wird sofort eingebaut. 8. Das \nDatum wird sofort geändert. 9. Der Termin wird sofort bestätigt. \n\n6) 1.Das Bett wird gemacht. 2.Die Fenster werden geputzt. 3.Der Teppich wird gesaugt. 4.Die \nBriefe werden geschrieben. 5.Die Katze wird gefüttert. 6.Ich werde begrüßt. \n\n\n7) 1. Der Kuchen wird von mir gegessen. 2. Ein Brot wird von der Mutter gekauft. 3. Das Fenster \nwird von ihm geputzt. 4. Deutsch wird von uns gelernt. 5. Das Reis wird gekocht. 6. Das Haus \nwird gebaut. 7. Das Zimmer wird aufgeräumt. 8. Der Freund wird angerufen. 9. Die Lehrerin \nwird gefragt. 10. Die Wäsche wird gewaschen. 11. Der Film wird geschaut. 12. Das Kind wird \nfrisiert. 13. Ein Bild wird gemalt. 14. Das Auto wird repariert. 15. Die Aufgabe werden \ngemacht. 16. Die Bluse wird angezogen. 17. Der Mantel wird ausgezogen. 18. Der Computer \nwird eingeschaltet. 19. Die Blumen werden genossen. 20.Das Brot wird geschnitten. \n\n8) 1. Eine Goldmedaille wird gewonnen. 2. Die Zeitung wird täglich gelesen. 3. Ein neues Auto \nwird gekauft. 4. Das Heft wird gesucht. 5. Die Aufgaben werden geschrieben. 6. Meine \nGroßmutter wird besucht. 7. Der Computer wird repariert. 8. Der Musiker wird fotografiert. \n9. Marias Haar wird geföhnt. 10. Dir Tür wird geschlossen. 11. Die Romane werden gelesen. \n12. Eine altes Haus wird verkauft. 13.eine neue Regierung wird gewählt. 14. Einen Aufsatz \nwird geschrieben. 15. Die Suppe wird gekocht. 16. Eine Reise wird geplant. 17. Hier wird viel \ngeraucht."
          },
          {
            "page": 266,
            "text": "9) Die Bücher werden gelesen. / Das Essen wird gekocht. / Das Kind wird geschlagen. / Das \nHaus ist zerstört worden. / Ich werde gefragt. / Das Auto wird repariert. / Das Bild wird \ngemalt. / Ihr werdet fotografiert. / Die Kekes werden gekocht. / Das Haus wird gebaut. / Der \nKoffer wird gepackt. / Das Fenster wird geschlossen. / Das Kleid wird genäht / Das Gemüse \nwird geerntet. / Die Wäsche wird gewaschen. / Der Dieb wird festgenommen."
          }
        ]
      },
      {
        "folge": "Folge 33",
        "title": "weil-Sätze: Der Anfang ist schwer",
        "printedPageStart": 267,
        "printedPageEnd": 267,
        "sourcePages": [
          {
            "page": 267,
            "text": "Der Anfang in Deutschland ist schwer: \n\nFares, warum bist du traurig in Deutschland? \n\n• Weil ich hier allein bin. Weil meine Eltern noch in Syrien sind. \n• Weil meine Frau und Kinder nicht kommen dürfen. \n• Weil ich hier keine Freunde habe. \n\nWarum wohnst du außerhalb Hamburgs? \n\n• Weil die Mieten im Stadtzentrum teuer sind. \n• Weil ich kein Zimmer in der Stadt gefunden habe. \n\nIch bin aber glücklich in Deutschland, weil ich in einem sicheren Land bin. \n• , weil ich hier leben und studieren darf. \n• , weil es keinen Krieg in Deutschland gibt. \n\nWarum lernt laila Deutsch? \n\n• Weil sie Deutschland arbeiten möchte. \n• Weil ihr Mann aus der Schurz kommt. \n• Weil sie gerne Fremdsprachen lernt. \n\nWarum kauft ihr immer samstags ein? \n\n• Weil die Geschäfte sonntags zu haben. \n\nWarum gehst du früh ins Bett? \n\n• Weil ich früh aufstehen möchte."
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 34",
        "title": "Pannen im Alltag",
        "printedPageStart": 268,
        "printedPageEnd": 268,
        "sourcePages": [
          {
            "page": 268,
            "text": "Fares und seine Freunde erzählen über ihre Pannen: \n\nHallo Fares, was ist denn los? \n\nso ein Mist! verdammt! \n\nWas ist passiert? \n\nIch habe heute mein Handy in der U-Bahn vergessen. \n\nOh! Das klingt aber nicht gut. Was hast du gemacht? \n\nZum Glück hat eine Frau es gefunden und im Fundbüro abgegeben. \n\nSchatz, ich habe meinen Auto-Schlüssel vergessen. Ich habe das erst bemerkt. Ich komme 20 \nMinuten später. \n\nAlles klar, bis dann! \n\nLetztes Jahr war ich im Urlaub in Ägypten und habe dort meine Geldbörse verloren. \n\nSo ein Pech! Mit Papieren und Geldkarte? \n\nJa, alles war weg. Ich musste alles neu beantragen und meine Bankkarte sperren lassen. \n\nHeute früh bin ich mit dem Chef zusammengestoßen. Ich habe ihn gar nicht gesehen. \n\nWie peinlich! \n\n\nErzählen Sie uns über Ihre Alltags-Pannen …………"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 35",
        "title": "Lesen: Umzug und Perfekt",
        "printedPageStart": 269,
        "printedPageEnd": 269,
        "sourcePages": [
          {
            "page": 269,
            "text": "Der Umzug \n(Gestern bin ich umgezogen) \n\n\nGestern war Feres nach dem Umzug sehr müde und konnte seine Sachen nicht \nauspacken. Fares hat seine Frau angerufen und ihr erzählt, dass er eine neue \nWohnung gefunden hat. Seine Nachbarn haben die ganze Nacht laut gefeiert und \nMusik gehört. Er ist aber trotzdem sofort eingeschlafen spät aufgestanden. Zuerst hat \ner sich gewaschen und rasiert. Dann hat er gebetet und gefrühstückt. \n\n\nSchreiben Sie eine E-Mail an Ihren Freund Finn. \nErzählen Sie ihm über folgende Punkte. \n\n1- neue Wohnung-Umzug \n2- Wohnung beschreiben \n3- Laden Sie Finn ein. \n\n\nLieber Finn, \nich habe endlich eine Wohnung gefunden und bin letzte Woche umgezogen. \nJetzt wohne ich im Stadtteil Barmbek in Hamburg (HH). Die Wg. hat drei \nZimmer: ein Wohnzimmer, ein Kinderzimmer und ein Gästezimmer. Sie kostet \nnur 600 Euro pro Monat. Wann besuchst du mich? Ich habe nun genug Platz. \nwir können uns Hamburg anschauen. \n\nSchöne Grüße \nDein Fares"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 36",
        "title": "Relativsätze Nominativ",
        "printedPageStart": 270,
        "printedPageEnd": 275,
        "sourcePages": [
          {
            "page": 270,
            "text": "Relativsätze im Nominativ: \n• Das ist der Mann \n\n• Der Mann ist mit meiner Tante verlobt \n\n➢ Das ist der Mann, der mit meiner Tante verlobt ist. \n\n1- Ergänzen Sie im Nominativ: \n1. Dieses Mädchen, ..............................sehr gut malt, möchte Malerin werden. \n2. Der Sportler, ..............................viel trainiert, wird die Medaille gewinnen. \n3. Das ist die Frau, .............................. Mathe unterrichtet. \n4. Das sind die Eltern von Martin, .............................. in Köln arbeiten. \n5. Das ist Peter, ..............................mit Dieter Tennis spielt."
          },
          {
            "page": 271,
            "text": "Relativsätze im Akkusativ: \n➢ Herman Hesse hat das Buch geschrieben \n➢ Ich lese zurzeit das Buch. \n➢ Herman Hesse hat das Buch geschrieben, das ich zurzeit \nlese. \n\n2- Ergänzen Sie im Akkusativ: \n1. Mein Opa, ..............................ich oft besuche, wohnt in Dresden. \n2. Der Film, .............................. Katja gesehen hat, war total langweilig. \n3. Das ist die blaue Bluse, .............................. ich gestern gekauft habe. \n4. Das Heft, .............................. ich verloren habe ist grün. \n5. Das sind meine Freunde, .............................. ich eingeladen habe. \n\nRelativsätze im Dativ: \n• Mein Freund ist Gärtner von Beruf. \n• Ich helfe heute meinem Freund \n➢ Mein Freund, dem ich heute helfe, ist Gärtner von Beruf. \n\n3- Ergänzen Sie im Dativ: \n1. Rita, .............................. ich mein Auto geliehen habe, fährt immer vorsichtig. \n2. Torsten, .............................. seine Oma ein Märchen erzählt, ist 5Jahre alt. \n3. Nora, .............................. ich ein Kochbuch schenke, kocht gern. \n4. Meine Geschwister, ..............................Fußball gefällt, gehen jeden Sonntag auf den Fußballplatz. \n5. Linda, .............................. Pizza schmeckt, ist dick. \n\nRelativsätze im Genitiv: \n• Mein Bruder hilft ihr oft. \n• Die Frau meines Bruders arbeitet bei einer Firma"
          },
          {
            "page": 272,
            "text": "➢ Mein Bruder, dessen Frau bei einer Firma arbeitet, hilft ihr \noft. \n4- Ergänzen Sie im Genitiv: \n1. Das ist mein Hund, .............................. Haus im Garten ist. \n2. Das ist Madonna, .............................. Fans begeistert sind. \n3. Beate, .............................. Tasche gestohlen ist, ist nervös. \n4. Das Auto, .............................. Motor nicht funktioniert, muss operiert werden. \n5. Meine Großeltern, .............................. Haus in München ist, möchten umziehen. \n\n5- Was fehlt hier? \n\n1. In London, .............................. Kerstin wohnt, regnet es oft. \n2. Die Frau, .............................. mein Onkel verheiratet ist, kommt aus Spanien. \n3. Das ist die Wohnung, .............................. ich umziehen möchte. \n4. Das ist meine Freundin, .............................. ich am Samstag ins Theater gehe. \n5. Meine Tante, ..............................ich wohne, ist ganz lieb. \n6. Ich fahre nach Italien, ..............................Olga auch gefahren ist. \n6- Ergänze Sie die Relativpronomen. \n\n0- Der See ist morgens wunderschön. \nDas ist der See, der morgens wunderschön ist. \na) Der Berg ist abends sehr gefährlich. \nDas ist der Berg, ____________________________________________________ . \nb) Der Wald ist immer dunkel. \nDas ist der Wald, ____________________________________________________ . \nc) Der Fluss ist sehr schön. \nDas ist der Fluss, ____________________________________________________ . \nd) Die Wohnung ist zu klein. \nDas ist die Wohnung, _________________________________________________ . \ne) Der Bus ist groß."
          },
          {
            "page": 273,
            "text": "Das ist der Bus, _____________________________________________________ . \nf) Das Buch ist ein bisschen kompliziert. \nDas ist das Buch, ____________________________________________________ . \ng) Diese Frau unterrichtet Mathematik. \nDas ist die Frau, _____________________________________________________ . \nh) Dieser Mann spielt Tennis mit Klaus. \nDas ist der Mann, ____________________________________________________ . \n\n7- Verbinden Sie die Sätze mit den richtigen Relativpronomen. \n0- Das Buch ist teuer. Es kostet zehn Euro. \nDas Buch, das zehn Euro kostet, ist sehr teuer. \na) Die Frauen sind sehr müde. Sie warten schon so lange hier. \n_________________________________________________________________ . \nb) Der Hut liegt im Schrank. Er ist sehr alt. \n_________________________________________________________________ . \nc) Der Arzt ist sehr gut. Er arbeitet in Hannover. \n_________________________________________________________________ . \nd) Die Zeitschrift ist sehr interessant. Ich habe sie am Morgen gekauft. \n_________________________________________________________________ . \ne) Die Übungen waren erfolgreich. Meine Schüler mögen sie sehr. \n_________________________________________________________________ . \nf) Mein Onkel ist 51 Jahre alt. Er kommt heute um drei Uhr an. \n_________________________________________________________________ . \ng) Die neue Lehrerin sieht sehr intelligent aus. Sie unterrichtet Deutsch und Latein. \n_________________________________________________________________ . \nh) Paul liegt im Bett. Er ist sehr Krank. \n_________________________________________________________________ . \n8- Schreiben Sie wie im Beispiel. \n0- Hier wohnt meine Nachbarin. Sie hat bei Pannen immer Glück. \nHier wohnt meine Nachbarin, die bei Pannen immer Glück hat. \na) Das ist mein neuer Nachbar. Er hat oft viel Arbeit. \n_________________________________________________________________ . \nb) Das ist meine Tante. Sie hat es immer eilig."
          },
          {
            "page": 274,
            "text": "_________________________________________________________________ . \nc) Das ist meine Schwester. Sie hat manchmal ungewöhnliche Ideen. \n_________________________________________________________________ . \nd) Das ist mein Onkel. Er hat immer Pech mit seinem alten Wagen. \n_________________________________________________________________ . \ne) Das ist mein neuer Lehrer. Er macht immer das Unmögliche möglich. \n_________________________________________________________________ . \nf) Das ist mein Cousin Klaus. Er macht nie seine Hausaufgaben. \n_________________________________________________________________ . \ng) Das ist meine Kollegin Anja. Sie vergisst immer ihre Hausaufgaben zu machen. \n_________________________________________________________________ . \nh) Das ist mein bester Freund Claudio. Er ruft mich jeden Tag an. \n_________________________________________________________________ . \n\n9- Schreiben Sie wie im Beispiel. \nEin Mann sitzt auf dem Balkon und isst eine Pizza. \nDer Mann, der auf dem Balkon sitzt, isst eine Pizza. \nDer Mann, der eine Pizza isst, sitzt auf dem Balkon. \n\na) Eine Frau liegt auf dem Sofa und streichelt ihre Katze. \nDie Frau, __________________________________________________________ . \nDie Frau, __________________________________________________________ . \nb) Ein Kind steht unter der Dusche und wäscht sich. \nDas Kind, __________________________________________________________ . \nDas Kind, __________________________________________________________ . \nc) Ein Junge spielt Fuβball und ist sehr glücklich. \nDer Junge, _________________________________________________________ . \nDer Junge, _________________________________________________________ . \nd) Ein Hotel liegt direkt an einem See und hat viele Zimmer. \nDas Hotel, _________________________________________________________ ."
          },
          {
            "page": 275,
            "text": "Das Hotel, _________________________________________________________ . \ne) Ein Mann wartet geduldig und liest eine Zeitung. \nDer Mann, _________________________________________________________ . \nDer Mann, _________________________________________________________ . \n\n10- Was tun diese Leute ? – Formulieren Sie Relativsätze. \n0- ein Babysitter / Person, auf kleine Kinder aufpassen \nEin Babysitter ist eine Person, die auf kleine Kinder aufpasst. \na) ein Fotograf / jemand, Fotos machen. \n_________________________________________________________________ . \nb) ein Professor / Person, an der Universität unterrichten. \n_________________________________________________________________ . \nc) eine Köchin / Frau, Essen zubereiten. \n_________________________________________________________________ . \nd) ein Medizinstudent / Mann, Medizin studieren. \n_________________________________________________________________ . \ne) ein Student / Mann, an der Universität studieren. \n_________________________________________________________________ . \nf) eine Ärztin / Frau, im Krankenhaus arbeiten. \n_________________________________________________________________ . \ng) Tierarzt / Mann, die Tiere aufpassen. \n_________________________________________________________________ . \n11- Formulieren Sie Relativsätze wie im Beispiel. \n0- Utta sucht einen Mann, ● er schenkt ihr Blumen und Schokolade. \nUtta sucht einen Mann, der ihr Blumen und Schokolade schenkt. \n\na) Paul sucht eine Frau, ● sie möchte heiraten. \n● sie mag reisen. \n_______________________________________________________________ . \n_______________________________________________________________ . \nb) Ich suche einen Partner, ● er geht mit mir auf den Fuβballplatz."
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 37",
        "title": "Relativsätze Akkusativ",
        "printedPageStart": 276,
        "printedPageEnd": 281,
        "sourcePages": [
          {
            "page": 276,
            "text": "● er hat viel Humor. \n_______________________________________________________________ . \n_______________________________________________________________ . \nc) Uwe sucht eine Frau, ●mit ihm drei Kinder haben können. \n●sie vertraut ihm. \n_______________________________________________________________ . \n_______________________________________________________________ . \nd) Ich will eine Wohnung, ●sie ist sehr groβ und gemütlich. \n●sie kostet nicht viel. \n_______________________________________________________________ . \n_______________________________________________________________ . \n\n12- Relativsätze \n1.- Das ist der Computer. Der Computer denkt für den Menschen. \n\n2.- Das ist der Computer. Man erfand den Computer 1946 in Amerika. \n\n3.- Das ist die Tasche. Ich habe die Tasche zum Geburtstag bekommen. \n\n4.- Das ist das Mäppchen. In dem Mäppchen ist mein Füller. \n\n5.- Das ist die Glühbirne. Die Glühbirne gibt Licht. \n\n6.- Das sind die Impfungen. Man erfand die Impfungen im 19. Jahrhundert in Europa. \n\n7.- Das ist der Kuli. Ich schreibe mit dem Kuli alle Tests."
          },
          {
            "page": 277,
            "text": "8.- Das ist das Dach. Auf dem Dach steht ein Vogel. \n\n9.- Das sind die Sportschuhe. Ich turne immer mit den Sportschuhen. \n\n10.- Das ist der Baum. Aus dem Baum kann man Blätter herstellen. \n\n11.- Das ist die Hose. Die Hose trage ich immer am Sonntag gern. \n\n12.- Das ist der MP3. In dem MP3 habe ich zweitausend Lieder. \n\n\n13- Setze die Relativpronomen ein! \n1. Der Lehrer fragte mich nach dem Schüler, ……………….. Mutter schwer erkrankte. \n2. Die Ausländer, ……………….. wir geholfen haben, haben uns gedankt. \n3. Gestern habe ich eine Frau gesehen, …………………………. Namen ich mich nicht erinnern kann. \n4. Ich erfuhr es von einem Mann, ……………….. ich gestern angerufen habe. \n5. Man zeigte mir Bücher, ………………….. ich schon viel hörte. \n6. Ich habe eine Neuigkeit, ………………… Sie vielleicht interessiert. \n7. …………… den Ernst der Lage nicht begreift, ……………….. ist nicht zu helfen. \n8. Ich möchte keine Wohnung, ………………… Fenster nach Norden gehen. \n9. Alle, ………………………… ich gesprochen habe, sind gegen die Entscheidung. \n10. Wir sind nach Hamburg gefahren, ……………. ………. Hafen wir begeistert waren. \n11. Wir sind ans Meer gefahren, …………… an Ozean grenzt. \n12. Die Zeitung, …………………….. das stand, ist von gestern. \n13. Sie gehört zu den Menschen, …………….. neugierte Fragen mich stören. \n14. Was soll ich mit einem Koffer anfangen, ……………… Schloss kaputt ist? \n15. Weißt du vielleicht die Seite, ………………….. dieser Satz stand. \n16. Der Mann, ……………… Haus gestern abgebrannt ist, wohnt jetzt bei seinen Eltern. \n17. Das Wort, …………………….. er sich halten sollte, hat er gebrochen. \n18. Man begann mit der Frage, …………… alle gefürchtet haben. \n19. Der Krieg, ………………….. man hörte, passierte weit weg von hier. \n20. Die Tatsachen, …………………. nachgedacht hat, waren für das Experiment wichtig. \n21. Der Junge, …………………. Mutter gestorben ist, war elf Jahre alt. \n22. Die Blumen, ……………….. ich bekommen habe, waren schön. \n23. Das Buch, …………… ich so viel Zeit gewidmet habe, war interessant. \n24. Der Patient, ………………… operiert wurde, hat sein Bein verloren. \n25. Meine Tante, ……………….. Mann in der Türkei gearbeitet hat, wohnt in Italien."
          },
          {
            "page": 278,
            "text": "26. Wir können uns an das Mädchen, ………………… Martin sich verliebt hat, nicht erinnern. \n27. Man brachte ihn ins Krankenhaus, …………… ………. man viel Gutes sprach. \n28. Er wurde von einem berühmten Arzt operiert, ……………… nicht weit von uns wohnt. \n29. Die Frau, ………………. das Geld gestohlen wurde, kenne ich persönlich. \n30. Der Dieb, ……………… ich gestern in einem Laden gesehen habe, wurde festgenommen. \n\n14- Bilde Relativsätze! \n1. Die Zeitung ist interessant. Ich habe sie gestern gekauft. \n…………………………………………………………………………………………………………………………………………………………… \n2. Das ist Herr Meier. Seine Tochter ist sieben Jahre alt. \n…………………………………………………………………………………………………………………………………………………………… \n3. Wie heißt die Frau? Er hat sich in diese Frau verliebt. \n…………………………………………………………………………………………………………………………………………………………… \n4. Die Zuschauer klatschen Beifall. Ihnen hat das Theaterstück gefallen. \n…………………………………………………………………………………………………………………………………………………………… \n5. Wo ist das Auto? Ich habe nach dem Auto früher gefragt. \n…………………………………………………………………………………………………………………………………………………………… \n6. Das Experiment sind erfolgreich verlaufen. Er berichtete uns über die Experimente. \n…………………………………………………………………………………………………………………………………………………………... \n7. Der Geiger musste das Konzert absagen. Sein Instrument ist gestohlen worden. \n……………………………………………………………………………………………………………………………………………………………. \n8. Die ausländischen Touristen haben sich bei uns bedankt. Wir haben ihnen geholfen. \n……………………………………………………………………………………………………………………………………………………………. \n9. Die Verkäuferin verlor ihre Arbeit. Man hat ihr mehrere Diebstähle vorgeworfen. \n…………………………………………………………………………………………………………………………………….……………………… \n10. Die Studenten fahren ins Urlaub. Das Examen der Studenten ist abgeschlossen. \n……………………………………………………………………………………………………………………………………………………………. \n11. Seine Eltern sind Rentner. Ich habe in dem Haus seiner Eltern die Ferien verbracht. \n……………………………………………………………………………………………………………………………………………………………. \n12. Die Fußballspieler gaben ihr Letzteres. Sie wurden von den Zuschauern ausgepfiffen. \n…………………………………………………………………………………………………………………………………………………………… \n13. Ich habe mit Peter gesprochen. Ich war über sein Benehmen in der Schule verärgert. \n…………………………………………………………………………………………………………………………………………………………… \n14. Das ist die Mutter von Jan. Ich habe mit ihr vor kurzem gesprochen. \n…………………………………………………………………………………………………………………………………………………………… \n15. Die Unfälle haben sich gestern ereignet. Ich habe dir von den Unfällen erzählt."
          },
          {
            "page": 279,
            "text": "……………………………………………………………………………………………………………………………………………………………. \n16. Die Frau arbeitet in einer großen Firma. Ich unterrichte ihr Kind in Deutsch. \n……………………………………………………………………………………………………………………………………………………………."
          }
        ],
        "answerPages": [
          {
            "page": 279,
            "text": "Die Lösungen: \n1- 1.das 2.der 3.die 4.die 5.der \n2- 1.den 2.den 3.die 4.das 5.die \n3- 1.der 2.dem 3.der 4.denen 5.der \n4- 1.dessen 2.deren 3.deren 4.dessen 5.deren \n5- 1.in dem 2.die 3.in die 4.mit der 5.bei der 6.wonach \n\n6- a. Das ist der Berg, der abends sehr gefährlich ist. \nb. Das ist der Wald, der immer dunkel ist. \nc. Das ist der Fluss, der sehr schön ist. \nd. Das ist die Wohnung, die zu klein ist. \ne. Das ist der Bus, der groß ist. \nf. Das ist das Buch, das ein bisschen kompliziert ist. \ng. Das ist die Frau, die Mathematik unterrichtet \nh. Das ist der Mann, der Tennis mit Klaus spielt. \n\n\n7- \na. Die Frauen, die sehr müde sind, warten schon so lange hier \nb. Der Hut, der im Schrank liegt, ist sehr alt. \nc. Der Arzt, der sehr gut ist, arbeitet in Hannover \nd. Die Zeitschrift, die sehr interessant ist, habe ich sie am Morgen gekauft. \ne. Die Übungen, die erfolgreich waren, mögen meine Schüler sie sehr. \nf. Mein Onkel, der 51 Jahre alt ist, kommt heute um drei Uhr an. \ng. Die neue Lehrerin, die sehr intelligent aussieht, unterrichtet Deutsch und Latein. \nh. Paul, der im Bett liegt, ist sehr krank. \n\n8- \na. Das ist mein neuer Nachbar, der oft viel Arbeit hat. \nb. Das ist meine Tante, die es immer eilig hat. \nc. Das ist meine Schwester, die manchmal ungewöhnliche Ideen hat. \nd. Das ist mein Onkel, der immer Pech mit seinem alten Wagen hat. \ne. Das ist mein neuer Lehrer, der immer das Unmögliche möglich macht. \nf. Das ist mein Cousin Klaus, der nie seine Hausaufgaben macht. \ng. Das ist meine Kollegin Anja, die immer vergisst, ihre Hausaufgaben zu machen. \nh. Das ist mein bester Freund Claudio, der mich jeden Tag anruft. \n\n9- A. Die Frau, die auf dem Sofa liegt, streichelt ihre Katze."
          },
          {
            "page": 280,
            "text": "Die Frau, die ihre Katze streichelt, liegt auf dem Sofa. \nb. Das Kind, das unter der Dusche steht, wäscht sich. \nDas Kind, das sich wäscht, steht unter der Dusche. \nc. Der Junge, der Fuβball spielt, ist sehr glücklich. \nDer Junge, der sehr glücklich ist, spielt Fuβball. \nd. Das Hotel, das direkt an einem See liegt, hat viele Zimmer. \nDas Hotel, das viele Zimmer hat, liegt direkt an einem See. \ne. Der Mann, der geduldig wartet, liest eine Zeitung. \nDer Mann, der eine Zeitung liest, wartet geduldig. \n\n10- \na. Ein Fotograf ist jemand, der die Fotos macht. \nb. Ein Professor ist eine Person, die an der Universität unterrichtet. \nc. Eine Köchin ist eine Frau, die das Essen zubereitet. \nd. Ein Medizinstudent ist ein Mann, der die Medizin studiert. \ne. Ein Student ist ein Mann, der an der Universität studiert. \nf. Eine Ärztin ist eine Frau, die im Krankhaus arbeitet. \ng. Ein Tierarzt ist ein Mann, der auf die Tiere aufpasst. \n\n11- a. Paul sucht eine Frau, die heiraten möchte. - Paul sucht eine Frau, die reisen mag. \nb. Ich suche einen Partner, der mit mir auf den Fußballplatz geht.- Ich suche einen Partner, \nder viel Humor hat. \nc.Uwe sucht eine Frau, die mit ihm drei Kinder haben kann. - Uwe sucht eine Frau, die ihm \nvertraut. \nd. Ich will eine Wohnung, die sehr groß und gemütlich ist. - Ich will eine Wohnung, die nicht \nviel kostet. \n\n12- 1. Das ist der Computer, der für den Menschen denkt. \n2. Das ist der Computer, den man 1946 in Amerika erfand. \n3. Das ist die Tasche, die ich zum Geburtstag bekommen habe. \n4. Das ist das Mäppchen, in dem mein Füller ist. \n5. Das ist die Glühbirne, die Licht gibt. \n6. Das sind die Impfungen, die man im 19. Jahrhundert in Europa erfand. \n7. Das ist der Kuli, mit dem ich alle Tests schreibe. \n8. Das ist das Dach, auf dem ein Vogel steht. \n9. Das sind die Sportschuhe, mit den ich immer turne. \n10. Das ist der Baum, aus dem man Blätter herstellen kann. \n11. Das ist die Hose, die ich immer am Sonntag gern trage. \n12. Das ist der MP3, in dem ich zweitausend Lieder habe. \n\n13- 1.dessen 2.der 3.deren 4.den 5.die 6.für die 7.Wer-dem 8.deren 9.was 10. von dessen 11.das \n12.die 13. deren 14. dessen 15.die 16.dessen 17.das 18.die 19.von dem / den 20.die \n21.dessen 22.die 23.dem 24.den 25.deren 26.desen 27. über das 28.der 29.die 30.den"
          },
          {
            "page": 281,
            "text": "14- \n\n1. Die Zeitung ist interessant, die ich gestern gekauft habe. \n2. Das ist Herr Meier, dessen Tochter sieben Jahre alt ist. \n3. Wie heißt die Frau, in die er verliebt hat? \n4. Die Zuschauer klatschen Beifall, denen das Theaterstück gefallen hat. \n5. Wo ist das Auto, nach dem ich früher gefragt habe. \n6. Die Experiment sind erfolgreich verlaufen, über die er uns berichtete. \n7. Der Geiger musste das Konzert absagen, dessen Instrument gestohlen worden ist. \n8. Die ausländischen Touristen haben sich bei uns bedankt, denen wir geholfen haben. \n9. Die Verkäuferin verlor ihre Arbeit, der man mehrere Diebstähle vorgeworfen hat. \n10. Die Studenten fahren ins Urlaub, deren Examen abgeschlossen ist. \n11. Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe. \n12. Die Fußballspieler gaben ihr Letzteres, die von den Zuschauern ausgepfiffen wurden. \n13. Ich habe mit Peter gesprochen, über dessen Benehmen ich in der Schule verärgert war. \n14. Das ist die Mutter von Jan, mit der ich vor kurzem gesprochen habe. \n15. Die Unfälle haben sich gestern ereignet, von den ich dir erzählt habe. \n16. Die Frau arbeitet in einer großen Firma, deren Kind ich in Deutsch unterrichte."
          }
        ]
      },
      {
        "folge": "Folge 38",
        "title": "Verben mit Akkusativ und Dativ",
        "printedPageStart": 282,
        "printedPageEnd": 300,
        "sourcePages": [
          {
            "page": 282,
            "text": "abholen Kannst du mich bitte vom Flughafen abholen? \nanrufen Bitte rufen Sie mich in 15 Minuten an! \nbauen Er baut ein großes Haus am See. \nbeantworten Sie beantwortet ihre E-Mails viel zu langsam. \nbearbeiten Bearbeiten Sie bitte die folgenden Aufgaben. \nbedienen Der Kellner bedient einen Kunden. \nbeeinflussen Die Demonstranten möchten das Wahlergebnis beeinflussen. \nbekämpfen Wir haben die Schädlinge erfolgreich bekämpft. \nbenutzen Wir benutzen den kleinen Raum als Abstellkammer. \nbestehen Ich habe meine Prüfung bestanden. \nbesuchen Jedes Wochenende besucht Luis seine Familie. \nbezahlen Ich bezahle die Rechnung heute. \nbrauchen Ich brauche eine warme Jacke, weil es draußen kalt ist. \nempfangen Die Rezeptionistin empfängt die ankommenden Gäste. \nentwickeln Unser Unternehmen entwickelt Firmensoftware. \nerhalten Wir haben Ihre Bestellung erhalten. \nerwarten Am Wochenende habe ich keine Zeit, weil wir Besuch erwarten. \nessen Morgens zum Frühstück esse ich einen Apfel. \nfinden Wie finden Sie unsere Veranstaltung? \nVerben mit AKK"
          },
          {
            "page": 283,
            "text": "genießen Manuela genießt ihren Urlaub. \ngründen Mit 30 Jahren möchte ich eine Familie gründen. \nhaben Haben Sie auch einen Kühlschrank im Angebot. \nhinterlassen Bitte hinterlassen Sie Ihre Nachricht nach dem Signalton. \nholen Ich gehe kurz Brötchen holen. \nhören Welche Musik hörst du gern? \nkennen Er kennt sie schon seit dem Kindergarten. \nkennenlernen Ich haben ihn vor etwa einem Monat kennengelernt. \nkochen Andre und Emilia kochen einen Eintopf. \nkopieren Die Schülerin kopiert die Seiten aus dem Lehrbuch. \nlesen Welchen Roman liest du momentan? \nlieben Sie liebt ihren Sohn über alles. \nlösen Die Schüler können die Aufgabe nicht lösen. \nmögen Ich mag meinen Nachbarn nicht. \nnehmen Ich nehme den Bus. \nplanen Wir planen einen Ausflug mit unserer Schulklasse. \npräsentieren Frau Kluge präsentiert ihr neues Kurskonzept. \nrespektieren Wir respektieren die Meinung unserer Mitmenschen. \nriechen Sie riecht den Duft von Lavendel. \nschließen Bitte schließen Sie die Tür nach Verlassen des Raumes. \nsehen Der Lektor hat einen Tippfehler gesehen. \nspeichern Hast du die Dokumente gespeichert. \nstehlen Jemand hat mein Fahrrad gestohlen. \nstören Er stört seinen Kollegen bei der Arbeit."
          },
          {
            "page": 284,
            "text": "suchen Suchst du immer noch eine Wohnung am See? \ntrinken Sie trinkt den Holundersaft am liebsten mit Eis. \nuntersuchen Der Arzt untersucht gerade einen Patienten. \nverarbeiten Einige Unternehmen verarbeiten personenbezogene Daten. \nvereinbaren Können wir heute einen Termin vereinbaren? \nvergessen Du hast schon wieder meinen Geburtstag vergessen. \nverstehen Ich verstehe diese Sprache leider nicht. \nvorbereiten Die Lehrerin bereitet ihren Unterricht vor. \nwürzen Sie würzt die Gemüsesuppe. \nöffnen Öffnen Sie bitte das Fenster? \nübersetzen Sie hat den ganzen Text auf Chinesisch übersetzt. \n\n\nabraten Er rät ihr von ihrem Vorhaben ab. \nabsagen Ich muss dir leider für heute Abend absagen. \nähneln Sie ähnelt ihrer Mutter sehr. \nantworten Antwortest du mir noch? \nausweichen Warum weichst du mir immer aus? \nbefehlen Die Lehrerin befiehlt ihm, seine Hausaufgaben zu machen. \nbegegnen Frodo begegnet einem unheimlichen Wesen. \nbeistehen In guten und schlechten Zeiten stand er ihr bei. \nVerben mit Dativ"
          },
          {
            "page": 285,
            "text": "danken Ich danke dir. \ndienen Das Volk diente ihrem König. \ndrohen Dem Unternehmen drohen Sanktionen. \neinfallen Was fällt Ihnen ein? \nentgegenkommen Ich kann Ihnen mit dem Preis ein wenig entgegenkommen. \nfehlen Mir fehlen die Worte. \nfolgen Folgen Sie mir ins Paradies. \ngefallen Die Wohnung gefällt mir. \ngehorchen Der Hund gehorcht seinen Herrchen nicht. \ngehören Wem gehört das Buch? \ngelingen Das gelingt uns nicht oft. \ngenügen Ein kleines Zimmer genügt ihr. \nglauben Wir glauben ihm nicht. \ngratulieren Sie gratuliert ihm zum Geburtstag. \nguttun Der Urlaub wird dir guttun. \nhelfen Können Sie mir bitte helfen? \nhinterherlaufen Er ist mir die ganze Zeit hinterhergelaufen. \nes geht Es geht mit sehr gut. \nmissfallen Der Gedanke missfiel ihr. \nmisslingen Das Essen ist mir misslungen. \nsich nähern Der Rettungswagen näherte sich dem Unglücksort. \nnachlaufen Warum laufen Sie mir ständig nach? \nnützen Die Gebrauchsanleitung nützt mir nichts. \npassen Die Hose passt mir nicht. Sie ist viel zu eng."
          },
          {
            "page": 286,
            "text": "passieren Mir ist etwas ganz Doofes passiert. \nraten Wozu rätst du mir? \nreichen Reicht dir eine einfache Kopie? \nschaden Die Steueraffäre schadet seinem Image. \nschmecken Schmeckt euch das Essen? \nstehen Die Jacke steht dir nicht. \ntrauen Ich traue ihm kein Wort! \n\nVerben mit Dativ und Akkusativ: \n\nEine Person → im Dativ \nEine Sache → im Akkusativ \nVerb Beispiel \nA1 auf|machen Kannst du (mir) bitte die Tür aufmachen? \nA1 erklären Können Sie (mir) den Akkusativ erklären? \nA1 geben Der Mann gibt der Frau die Blumen. \nA1 machen Machst du (mir) einen Tee? \nA1 sagen Warum hast du (mir) das gesagt? \nA1 schreiben Schreibst du (deiner Schwester) eine Geburtstagskarte? \nA1 zeigen Zeig mir bitte deine Hausaufgaben. \nA2 an|bieten Darf ich Ihnen einen Kaffee anbieten? \nA2 aus|leihen Kannst du (mir) dein Wörterbuch ausleihen? \nA2 aus|suchen Du suchst (dir) immer die teuersten Sachen aus! \nA2 aus|ziehen Max zieht (seinem Sohn) die Hose aus."
          },
          {
            "page": 287,
            "text": "Verb Beispiel \nA2 beantworten Warum beantwortest du (mir) meine Frage nicht? \nA2 bestellen Ich habe (dir) einen Kaffee bestellt. \nA2 bringen Er bringt ihr ein Glas Wasser. \nA2 empfehlen -ie- Ich kann (Ihnen) die Currywurst empfehlen. \nA2 erzählen Mein Opa hat (mir) immer Geschichten erzählt. \nA2 glauben Ich glaube dir (deine Geschichte) nicht. \nA2 holen Holst du (mir) bitte einen Kaffee? \nA2 kaufen Du kaufst (dir) die Schuhe für 300€? \nA2 kochen Kochst du (mir) mein Lieblingsessen? \nA2 leihen Kannst du mir dein Wörterbuch leihen? \nA2 malen Malst du (mir) ein Bild? \nA2 mit|bringen Bringst du (mir) einen Kaffee mit? \nA2 nennen Kannst du (mir) bitte deinen Namen nennen? \nA2 reservieren Reservierst du (uns) bitte 2 Plätze? Wir kommen später. \nA2 schenken Ich schenke meiner Schwester einen Hund. \nA2 schneiden Soll ich (dir) noch ein Stück Käse abschneiden? \nA2 schulden Du schuldest mir noch 10 Euro. \nA2 verdienen Ich habe (mir) den Urlaub wirklich verdient. \nA2 verkaufen Ich verkaufe (dir) mein Auto nicht. \nA2 wünschen Ich wünsche dir alles Gute zum Geburtstag. \nA2 zurück|zahlen Hast du (ihm) deine Schulden schon zurückgezahlt? \nB1 ab|schneiden Soll ich (dir) noch ein Stück Käse abschneiden? \nB1 bei|bringen Der Lehrer bringt uns die deutsche Sprache bei."
          },
          {
            "page": 288,
            "text": "1- Passende Verben einsetzen. \n1 Mein Vater ……….. jeden Tag ………… Flasche Bier. \n2 Sylvia…………..schon seit drei Wochen ………….Diät. \n3 Der Mann ……………..schon wieder ……………..Zigarette. \n4 Frau Haller ………….nur ……………Bruder. \n5 Meine Schwester ……………abends gern …………..Buch. \n6 Sabine ………… …………….neuen Tisch. \n7 Ich …………….. heute Abend ……………Freundin von mir. \n8 Das Kind ……….. ……………Apfel. \n9 Der Bäcker ………. ……….Kuchen. \n10 Thomas ………… gerade ………….. Cd von den Prinzen. \n\n2- Ergänzungsfragen stellen \n\nFragen Sie zuerst nach dem Subjekt und dann nach dem Akkusativobjekt. \nAussagesatz W-Frage Verb Mittelfeld / Ende \nMichael isst eine Birne. Wer isst eine Birne? \nWas isst Michael? \n11a Heike liebt Heiko. \n11b \n12a Die Hausfrau kocht eine \nSuppe."
          },
          {
            "page": 289,
            "text": "12b \n13a Sabine schließt das Fenster. \n13b \n14a Unser Chef hat Glück. \n14b \n15a Die Kinder lernen \nSchwimmen. \n15b \n16a Der Junge versteht es nicht. \n16b \n17a Die Mädchen trinken Wasser. \n17b \n18a Ludwig schreibt einen Brief. \n18b \n19a Udo und Kai grüßen mich \nnicht. \n19b \n20a Doris putzt die Treppe nicht. \n20b \n\n\n3- Sätze bauen. \n\n\n4- Ordnen Sie die Satzglieder. Konjugieren Sie die Verben. Deklinieren Sie die Artikel. \nSubjekt Verb Akkusativobjekt \nDas Mädchen/ein Kuli/brauchen Das Mädchen braucht einen Kuli."
          },
          {
            "page": 290,
            "text": "21 Der Junge/ein Bleistift/stehlen \n22 Johannes/die Tafel/putzen \n23 Karin/die Aufgabe/nicht/verstehen \n24 Der Sohn/sein Vater/fragen \n25 Elvira/keine Geschwister/haben \n26 Fridolin/sein Bruder/suchen \n27 Das Kind/ein Ball/kaufen \n28 Marco/der Wagen/waschen \n29 Kai/seine Hausaufgaben/machen \n30 Er/ein Vogel/sehen \n\n4) Passende Verben einsetzen. \n\nSetzen Sie passende Verben ein. \nantworten, danken, fehlen, gefallen, gehören, glauben, gratulieren, helfen, sagen, schmecken \n1 Deutschland gefällt mir sehr gut. Aber meine Heimat und meine Freunde ………..mir \nsehr. \n2 Ich ………. Ihnen für Ihre Hilfe. \n3 Sigrid hat heute Geburtstag. Wir müssen ihr …………. . \n4 Am Wochenende wollen wir umziehen. Kannst du uns dabei ………… ? \n5 Der Lehrer fragt den Schüler. Aber er ………….. ihm nicht. \n6 Deine Obsttorte ………….. meinem Mann außerordentlich gut. \n7 Martin lügt immer. Ich …………… ihm kein einziges Wort mehr. \n8 Von wem ist das Buch? Astrid, ………….. es dir? \n9 Das Kleid ist wirklich sehr hübsch. Es ……….mir sehr gut. \n\n10 Warum …………. du mir eigentlich dauernd die Unwahrheit?"
          },
          {
            "page": 291,
            "text": "5- Ergänzungsfragen stellen. \nFragen Sie zuerst nach dem Subjekt und dann nach dem Objekt. \nAussagesatz W-Frage Verb Ergänzung / \nNegation \nAnnette hilft uns nicht. Wer hilft euch nicht? \nWem hilft Annette nicht? \n11a Das Hemd passt Ulf nicht. \n11b \n12a Knödel schmecken ihm nicht. \n12b \n13a Das Buch gefällt mir. \n13b \n14a Ich vertraue dir nicht. \n14b \n15a Die Nachbarn helfen uns. \n15b \n16a Eva verzeiht mir nicht. \n16b"
          },
          {
            "page": 292,
            "text": "17a Der Kuchen misslingt Silke. \n17b \n18a Achim ähnelt seiner Mutter. \n18b \n19a Das Geld nützt mir nichts. \n19b \n20a Der Junge liebt meine Tochter. \n20b \n\n6- Artikel deklinieren. \nDeklinieren Sie die Artikel. Bleibt ein Feld frei, machen Sie bitte ein Minuszeichen ( - ). \n21 D……….deutsche Bier schmeckt unser…………Gästen besonders gut. \n22 Warum widersprechen d………. Schüler ihr………. Lehrerin? \n23 Gefällt dein………… Freundin dein………Eltern? \n24 Gefallen dein………..neuen Schuhe dein……….Freund? \n25 Gehört d……….rote Fahrrad d……….neuen Studentin? \n26 D……….neue Kleid passt mein………Frau nicht. \n27 Dein……… Worte tun mein………Seele gut."
          },
          {
            "page": 293,
            "text": "28 Warum will dein……….Hund dein………Frau nicht gehorchen? \n29 Mein…………..Sohn tun sein………..Augen weh. \n30 D………. Männern will d………..Frau nicht antworten. \n\n7- Verb-Ergänzungen einsetzen. \nWählen Sie aus. \n1 Warum helft nicht? (du ihm / ich euch / ihr mir / er sich \n/ Sie uns) \n2 Ich kaufe . (ihm es / ihr sie / es ihm / sie es / \nmir es) \n3 Gehört nicht? (das dir / es dich / er mich / sie es / \nes sie) \n4 Warum wollen drohen? ( wir uns / Sie ihn / es ihm / Sie mir \n/ es -) \n5 Wie geht ? (ich ihn / er - / es ihr / Ihnen - / es \nsie / sie mich) \n6 Ähnelt ? (sie ihm / sie ihn / er es / wir euch \n/ du mir / es -) \n7 Sagst ab? (sie dir / sie - / es mir / du ihr / ich \nihm / er -) \n8 Wünschst du ? (dich es / mich ihn / ihn mich / mir \n- / es dir / sie -) \n9 Kannst du geben? (mir das / euch ihnen / es dir / sie - \n/ mich - / Ihnen -) \n10 Sie glaubt nicht. (ihn ihm / sie ihr / euch ihn / es mir \n/ ihn -)"
          },
          {
            "page": 294,
            "text": "8- Fragen beantworten. \nGibst du dem Lehrer das Buch? \nJa, ich gebe es ihm. \n1 Schenkt unsere Mutter unserem Vater diese Uhr? \nJa, \n2 Könnt ihr mir morgen euer Auto leihen? \nJa, \n3 Herr Haller, können Sie uns unsere Fragen beantworten? \nJa, \n4 Kannst du mir den Brief übersetzen? \nJa, \n5 Können Sie mir das Restaurant empfehlen? \nJa, \n6 Tut dir auch der Kopf weh? \nJa, \n7 Schmecken Ihnen Thüringer Bratwürste? \nJa,"
          },
          {
            "page": 295,
            "text": "8 Gehört das gestohlene Fahrrad Fräulein Hildegard? \nJa, \n9 Kannst du mir morgen Abend helfen? \nJa, \n10 Möchten Sie heute Abend mit mir tanzen gehen? \nJa, \n\n9- Schreibe Beispielsätze! \nEine Person → im Dativ \nEine Sache → im Akkusativ \nVerb - Infinitiv Subjekt - \nNominativ \nkonjugiertes Verb Dativ Akkusativ trennbares \nPräfix \n1. anbieten \n2. aufmachen \n3. beantworten \n4. bieten \n5. bringen \n6. empfehlen \n7. erklären \n8. erzählen \n9. geben \n10. glauben \n11. holen"
          },
          {
            "page": 296,
            "text": "12. kaufen \n13. kochen \n14. leihen \n15. liefern \n16. machen \n17. malen \n18. mitteilen \n19. senden \n20. stehlen \n21. verkaufen \n22. vermieten \n23. verraten \n24. verschreiben \n25. versprechen \n26. verzeihen \n27. vorlesen \n28. vorschlagen \n29. vorstellen \n30. wünschen \n31. zeigen \n\nverben mit dem Akkusativ: \n• nehmen, trinken, essen, möchten \n• wollen, besuchen, anrufen \n• fragen, suchen, wecken, einladen \n• hören, lieben, mögen, haben, aufräumen, finden"
          },
          {
            "page": 297,
            "text": "10- Bilde bitte Sätze! \n1) nehmen – ich – der rote Pullover \n2) trinken – er – der Kaffee \n3) möchten – meine Eltern – ein neues Haus \n4) besuchen – wir – am Wochenende – meine Oma \n5) wecken – meine Mutter – jeden Morgen – ich – um 07.00 Uhr \n6) haben – meine Freunde – eine gute Note in Deutsch \n7) anrufen – mein Freund - seine Freundin - jeden Abend \n8) einladen – Sonja – die ganze Klasse – auf die Party \n9) hören – ich – der Professor – nicht \n10) suchen- wir – seit drei Stunden – mein Handy \n11) lieben – ich –du \n12) aufräumen- Martin – nie – sein Zimmer \n\nVerben mit dem Dativ: \n\n• helfen- gefallen – gehören – antworten \n• passen – gratulieren – schmecken – stehen \n• danken- vertrauen – schaden – fehlen \n\n11- Bilde bitte Sätze! \n\n1) fehlen – meine Mutter – ich \n2) gefallen – das Auto – mein Vater \n3) gehören – der Stift – mein Freund \n4) gratulieren – wir – die Großmutter –zum Geburtstag \n5) stehen – der Rock – ich -?"
          },
          {
            "page": 298,
            "text": "6) passen –die Schuhe – ich \n7) antworten – der Student – können – der Professor – nicht \n8) schmecken – das Essen – der Gast \n9) danken – der Tourist – der Reiseführer \n10) schaden – Rauchen –die Gesundheit \n11) vertrauen – ich- meine Mutter – immer nur \n12) helfen – der Schüler – sein Groβvater – beim Einkaufen"
          }
        ],
        "answerPages": [
          {
            "page": 298,
            "text": "Die Lösungen: \n\n1- 1.trinkt- eine 2.macht - eine 3. raucht - eine 4. hat - einen 5. liest - ein 6. braucht - einen 7. \nbesuche - eine 8. isst - einen 9. backt - einen 10. hört – eine \n\n2- 11a. Wer liebt Heiko? 11b. Wen liebt Heike? 12a. Wer kocht eine Suppe? 12b. Was kocht die \nHausfrau? 13a. Wer schließt das Fenster? 13b. Was schließt Sabine? 14a. Wer hat Glück? \n14b. Was hat euer Chef? 15a. Wer lernt Schwimmen? 15b. Was lernen die Kinder? 16a. Wer \nversteht es nicht? 16b. Was versteht der Junge nicht? 17a. Wer trinkt Wasser? 17b. Was \ntrinken die Mädchen? 18a. Wer schreibt einen Brief? 18b. Was schreibt Ludwig? 19a. Wer \ngrüßt dich nicht? 19b. Wen grüßen Udo und Kai nicht? 20a. Wer putzt die Treppe nicht? 20b. \nWas putzt Doris nicht? \n\n3- 21. Der Junge stiehlt einen Bleistift. 22. Johannes putzt die Tafel. 23. Karin versteht die \nAufgabe nicht. 24. Der Sohn fragt seinen Vater. 25. Elvira hat keine Geschwister. 26. Fridolin \nsucht seinen Bruder. 27. Das Kind kauft einen Ball. 28. Marco wäscht den Wagen. 29. Kai \nmacht seine Hausaufgaben. 30. Er sieht einen Vogel. \n\n4- 1. fehlen 2. danke 3. gratulieren 4. helfen 5. antwortet 6. schmeckt 7. glaube 8. gehört 9. \ngefällt 10. Sagst \n\n5- 11a. Was passt Ulf nicht? 11b. Wem passt das Hemd nicht? 12a. Was schmeckt ihm nicht? \n12b. Wem schmecken Knödel nicht? 13a. Was gefällt dir? 13b. Wem gefällt das Buch? 14a. \nWer vertraut mir nicht? 14b. Wem vertraust du nicht? 15a. Wer hilft euch? 15b. Wem helfen \ndie Nachbarn? 16a. Wer verzeiht dir nicht? 16b. Wem verzeiht Eva nicht? 17a. Was misslingt \nSilke? 17b. Wem misslingt der Kuchen? 18a. Wer ähnelt seiner Mutter? 18b. Wem ähnelt \nAchim? 19a. Was nützt dir nichts? 19b. Was nützt dir nichts? 20a. Wer liebt deine Tochter? \n20b. Wen liebt der Junge? \n\n6- 21. 21. Das - unseren 22. die -ihrer 23. deine - deinen 24. deine - deinem 25. das - der 26. Das \n- meiner 27. Deine - meiner 28. -- deiner 29. Meinem - seine 30. Den – die"
          },
          {
            "page": 299,
            "text": "7- 1. ihr mir 2.es ihm 3. das dir 4. Sie mir 5. es ihr 6. sie ihm 7. du ihr 8. es dir 9. mir das 10. es \nmir \n\n8- 1. sie schenkt sie ihm 2. wir können es dir morgen leihen. 3. ich kann sie Ihnen beantworten. \n4. ich kann ihn dir übersetzen. 5. ich kann es ihnen empfehlen. 6. er tut mir auch weh. 7. sie \nschmecken mir. 8. es gehört ihr. 9. ich kann dir morgen Abend helfen. 10. ich möchte heute \nAbend mit Ihnen tanzen gehen. \n\n9- \n\nVerb - Infinitiv Subjekt - \nNominativ \nkonjugiertes \nVerb \nDativ Akkusativ trennbares \nPräfix \n1. anbieten Die Kellnerin bietet dem Gast ein Wasser an. \n2. aufmachen Die Mutter macht dem Kind die Flasche auf. \n3. beantworten Ich beantworte Ihnen Ihre Fragen. - \n4. bieten Diese Firma bietet mir eine Arbeit. - \n5. bringen Der Kellner bringt den Gästen das Besteck. - \n6. empfehlen Ich empfehle dir dieses Café. - \n7. erklären Der Fahrer erklärt den Fahrgästen den Weg. - \n8. erzählen Die Oma erzählt ihren Enkeln ein Märchen. - \n9. geben Er gibt seiner Freundin den Autoschlüssel. \n10. glauben Ich glaube dir die Geschichte. - \n11. holen Die Kollegin holt uns einen Kaffee. - \n12. kaufen Die Mutter kauft ihrem Kind einen Pullover. - \n13. kochen Die Mutter kocht ihren Kindern eine Suppe. - \n14. leihen Ich leihe meinem Freund einen Euro. - \n15. liefern Die Spedition liefert mir einen Esstisch. - \n16. machen Ich mache meiner Kollegin einen Tee. - \n17. malen Die Enkelin malt ihrem Opa ein Bild. - \n18. mitteilen Ich teile der Bank die Adressänderung mit. \n19. senden Sie sendet mir eine Postkarte. - \n20. stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -"
          },
          {
            "page": 300,
            "text": "21. verkaufen Ich verkaufe dir mein Auto. - \n22. vermieten Frau Müller vermietet dem Nachbarn ihre Garage. - \n23. verraten Ich verrate dir ein Geheimnis. - \n24. verschreiben Der Arzt verschreibt den Patienten Medikamente. - \n25. versprechen Der Mann verspricht der Frau eine Überraschung. - \n26. verzeihen Die Frau verzeiht dem Mann den Fehler. - \n27. vorlesen Der Opa liest der Enkelin ein Gedicht vor. \n28. vorschlagen Der Händler schlägt uns einen Preis vor. \n29. vorstellen Manuel stellt seinen Eltern seine Freundin vor. \n30. wünschen Wir wünschen euch alles Gute. - \n31. zeigen Die Oma zeigt dem Kind ein Foto. - \n\n\n10- 1.Ich nehme den roten Pullover 2. Er trinkt den Kaffee. 3.Meine Eltern möchten ein neues \nHaus 4. Wir besuchen meine Oma am Wochenende. 5. Ich wecke meine Mutter jeden \nMorgen um 07:00 Uhr 6. Meine Mutter haben eine gute Note in Deutsch 7. Mein Freund ruft \nseine Freundin jeden Abend an. / Seine Freundin ruft meinen Freund jeden Abend an. 8. \nSonja lädt die ganze Klasse auf die Party ein. 9. Ich höre nicht den Professor. 10. Wir suchen \nmein Handy seit drei Stunden. 11. Ich liebe dich. 12. Martin räumt sein Zimmer nie auf. \n11- 1.Ich fehle meiner Mutter. 2.Das Auto gefällt meinem Vater. 3.Der Stift gehört meinem \nFreund. 4. Wir gratulieren der Großmutter zum Geburtstag. 5. Ich stehe dem Rock. 6. Die \nSchuhe passen mir. 7. Der Professor kann nicht dem Student antworten. 8. Das Essen schmeckt \ndem Gast. 9. Der Tourist dankt dem Reiseführer. 10. Rauchen schädt der Gesundheit. 11. Ich \nvertraue immer nur meiner Mutter. 12. Der Schüler hilft seinem Großvater beim Einkaufen."
          }
        ]
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Deine - meiner",
          "helfen",
          "1.Anna und Pia haben immer viel Glück",
          "Eine altes Haus wird verkauft"
        ],
        "answer": "1.Anna und Pia haben immer viel Glück"
      },
      {
        "id": "q-2",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die beiden sind nämlich verreist",
          "Sonja lädt die ganze Klasse auf die Party ein",
          "Das Reis wird gekocht",
          "dessen"
        ],
        "answer": "Die beiden sind nämlich verreist"
      },
      {
        "id": "q-3",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "helfen",
          "Oje! Das ist aber Pech!",
          "wird",
          "1.2002 als Zahlungsmittel eingeführt"
        ],
        "answer": "Oje! Das ist aber Pech!"
      },
      {
        "id": "q-4",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wann werden die Preise endlich gesenkt?",
          "Das sind die Sportschuhe, mit den ich immer turne",
          "Alle werden glücklich nach Hause kommen",
          "1.2002 als Zahlungsmittel eingeführt"
        ],
        "answer": "Alle werden glücklich nach Hause kommen"
      },
      {
        "id": "q-5",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Morgen wird das Wetter hoffentlich wieder besser",
          "Die Zuschauer klatschen Beifall, denen das Theaterstück gefallen hat",
          "dessen",
          "kaufen Die Mutter kauft ihrem Kind einen Pullover. -"
        ],
        "answer": "Morgen wird das Wetter hoffentlich wieder besser"
      },
      {
        "id": "q-6",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "bin",
          "dessen",
          "deren",
          "Die Unfälle haben sich gestern ereignet, von den ich dir erzählt habe"
        ],
        "answer": "bin"
      },
      {
        "id": "q-7",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "ich kann ihn dir übersetzen",
          "sie ihm",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -",
          "Wird/ Ist (Wird)"
        ],
        "answer": "Wird/ Ist (Wird)"
      },
      {
        "id": "q-8",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Deine - meiner",
          "werden(sind)",
          "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe",
          "die"
        ],
        "answer": "werden(sind)"
      },
      {
        "id": "q-9",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -",
          "deren",
          "Oje! Das ist aber Pech!",
          "wird"
        ],
        "answer": "wird"
      },
      {
        "id": "q-10",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 19",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "sind",
          "Eine altes Haus wird verkauft",
          "kaufen Die Mutter kauft ihrem Kind einen Pullover. -"
        ],
        "answer": "sind"
      },
      {
        "id": "q-11",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es ihm",
          "ich kann dir morgen Abend helfen",
          "Marco wäscht den Wagen",
          "Es ist kalt geworden"
        ],
        "answer": "Es ist kalt geworden"
      },
      {
        "id": "q-12",
        "prompt": "Folge 31: werden als Vollverb · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der",
          "1.Anna und Pia haben immer viel Glück",
          "Es wurde 10 Uhr",
          "Ich fehle meiner Mutter"
        ],
        "answer": "Es wurde 10 Uhr"
      },
      {
        "id": "q-13",
        "prompt": "Folge 32: Passiv · Answer key · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -",
          "1. Michaela wird von Simon geliebt",
          "ich kann ihn dir übersetzen"
        ],
        "answer": "1. Michaela wird von Simon geliebt"
      },
      {
        "id": "q-14",
        "prompt": "Folge 32: Passiv · Answer key · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "ich kann dir morgen Abend helfen",
          "1.2002 als Zahlungsmittel eingeführt",
          "Es wurde 10 Uhr",
          "Die beiden sind nämlich verreist"
        ],
        "answer": "1.2002 als Zahlungsmittel eingeführt"
      },
      {
        "id": "q-15",
        "prompt": "Folge 32: Passiv · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Alle werden glücklich nach Hause kommen",
          "Passiv",
          "machen Ich mache meiner Kollegin einen Tee. -",
          "erzählen Die Oma erzählt ihren Enkeln ein Märchen. -"
        ],
        "answer": "Passiv"
      },
      {
        "id": "q-16",
        "prompt": "Folge 32: Passiv · Answer key · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die",
          "1. Wann wird der Brief endlich beantwortet?",
          "Die Zeitung wird täglich gelesen",
          "mit der"
        ],
        "answer": "1. Wann wird der Brief endlich beantwortet?"
      },
      {
        "id": "q-17",
        "prompt": "Folge 32: Passiv · Answer key · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wann werden die Preise endlich gesenkt?",
          "werden(sind)",
          "ich kann dir morgen Abend helfen",
          "sie ihm"
        ],
        "answer": "Wann werden die Preise endlich gesenkt?"
      },
      {
        "id": "q-18",
        "prompt": "Folge 32: Passiv · Answer key · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Zeitung wird täglich gelesen",
          "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe",
          "dessen",
          "Die Rechnung wird sofort bezahlt"
        ],
        "answer": "Die Rechnung wird sofort bezahlt"
      },
      {
        "id": "q-19",
        "prompt": "Folge 32: Passiv · Answer key · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Johannes putzt die Tafel",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -",
          "wird",
          "Die Fenster werden geputzt"
        ],
        "answer": "Die Fenster werden geputzt"
      },
      {
        "id": "q-20",
        "prompt": "Folge 32: Passiv · Answer key · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "glaube",
          "Das Reis wird gekocht",
          "1. Der Kuchen wird von mir gegessen",
          "Es ist kalt geworden"
        ],
        "answer": "1. Der Kuchen wird von mir gegessen"
      },
      {
        "id": "q-21",
        "prompt": "Folge 32: Passiv · Answer key · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sie ihm",
          "1.2002 als Zahlungsmittel eingeführt",
          "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe",
          "Das Reis wird gekocht"
        ],
        "answer": "Das Reis wird gekocht"
      },
      {
        "id": "q-22",
        "prompt": "Folge 32: Passiv · Answer key · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "bieten Diese Firma bietet mir eine Arbeit. -",
          "Deine - meiner",
          "Passiv",
          "Der Film wird geschaut"
        ],
        "answer": "Der Film wird geschaut"
      },
      {
        "id": "q-23",
        "prompt": "Folge 32: Passiv · Answer key · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Michaela wird von Simon geliebt",
          "Morgen wird das Wetter hoffentlich wieder besser",
          "der",
          "Der Mantel wird ausgezogen"
        ],
        "answer": "Der Mantel wird ausgezogen"
      },
      {
        "id": "q-24",
        "prompt": "Folge 32: Passiv · Answer key · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Zeitung wird täglich gelesen",
          "Ich fehle meiner Mutter",
          "sie schenkt sie ihm",
          "Das sind die Impfungen, die man im"
        ],
        "answer": "Die Zeitung wird täglich gelesen"
      },
      {
        "id": "q-25",
        "prompt": "Folge 32: Passiv · Answer key · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der",
          "1.2002 als Zahlungsmittel eingeführt",
          "Der Musiker wird fotografiert",
          "deren"
        ],
        "answer": "Der Musiker wird fotografiert"
      },
      {
        "id": "q-26",
        "prompt": "Folge 32: Passiv · Answer key · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Eine altes Haus wird verkauft",
          "das",
          "Deine - meiner",
          "wird"
        ],
        "answer": "Eine altes Haus wird verkauft"
      },
      {
        "id": "q-27",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Michaela wird von Simon geliebt",
          "verraten Ich verrate dir ein Geheimnis. -",
          "helfen",
          "das"
        ],
        "answer": "das"
      },
      {
        "id": "q-28",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 1 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "ich kann dir morgen Abend helfen",
          "Die beiden sind nämlich verreist",
          "das",
          "die"
        ],
        "answer": "die"
      },
      {
        "id": "q-29",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 2 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Fenster werden geputzt",
          "die",
          "Marco wäscht den Wagen",
          "mit der"
        ],
        "answer": "die"
      },
      {
        "id": "q-30",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 3 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Wann wird der Brief endlich beantwortet?",
          "die",
          "dem",
          "erzählen Die Oma erzählt ihren Enkeln ein Märchen. -"
        ],
        "answer": "dem"
      },
      {
        "id": "q-31",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 4 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wird/ Ist (Wird)",
          "Wann werden die Preise endlich gesenkt?",
          "dessen",
          "kaufen Die Mutter kauft ihrem Kind einen Pullover. -"
        ],
        "answer": "dessen"
      },
      {
        "id": "q-32",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 4 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "deren",
          "mit der",
          "Wird/ Ist (Wird)",
          "Morgen wird das Wetter hoffentlich wieder besser"
        ],
        "answer": "deren"
      },
      {
        "id": "q-33",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 5 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Michaela wird von Simon geliebt",
          "vorlesen Der Opa liest der Enkelin ein Gedicht vor",
          "mit der",
          "1. Wann wird der Brief endlich beantwortet?"
        ],
        "answer": "mit der"
      },
      {
        "id": "q-34",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 12 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die",
          "Die beiden sind nämlich verreist",
          "Das ist der Computer, den man 1946 in Amerika erfand",
          "Wann werden die Preise endlich gesenkt?"
        ],
        "answer": "Das ist der Computer, den man 1946 in Amerika erfand"
      },
      {
        "id": "q-35",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 12 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Rechnung wird sofort bezahlt",
          "Das sind die Impfungen, die man im",
          "sie ihm",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -"
        ],
        "answer": "Das sind die Impfungen, die man im"
      },
      {
        "id": "q-36",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 12 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das Reis wird gekocht",
          "Das sind die Sportschuhe, mit den ich immer turne",
          "deren",
          "Deine - meiner"
        ],
        "answer": "Das sind die Sportschuhe, mit den ich immer turne"
      },
      {
        "id": "q-37",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der",
          "Das sind die Impfungen, die man im",
          "Die Zeitung wird täglich gelesen",
          "kaufen Die Mutter kauft ihrem Kind einen Pullover. -"
        ],
        "answer": "der"
      },
      {
        "id": "q-38",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dessen",
          "für die",
          "Der Professor kann nicht dem Student antworten",
          "Die Unfälle haben sich gestern ereignet, von den ich dir erzählt habe"
        ],
        "answer": "für die"
      },
      {
        "id": "q-39",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Zuschauer klatschen Beifall, denen das Theaterstück gefallen hat",
          "von dessen",
          "1. Michaela wird von Simon geliebt",
          "Morgen wird das Wetter hoffentlich wieder besser"
        ],
        "answer": "von dessen"
      },
      {
        "id": "q-40",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die -ihrer",
          "dessen",
          "Sonja lädt die ganze Klasse auf die Party ein",
          "helfen"
        ],
        "answer": "dessen"
      },
      {
        "id": "q-41",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Oje! Das ist aber Pech!",
          "das",
          "sie schenkt sie ihm",
          "Sonja lädt die ganze Klasse auf die Party ein"
        ],
        "answer": "das"
      },
      {
        "id": "q-42",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 21",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich fehle meiner Mutter",
          "Morgen wird das Wetter hoffentlich wieder besser",
          "dessen",
          "Die beiden sind nämlich verreist"
        ],
        "answer": "dessen"
      },
      {
        "id": "q-43",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 25",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "es ihm",
          "Das Reis wird gekocht",
          "deren",
          "für die"
        ],
        "answer": "deren"
      },
      {
        "id": "q-44",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 13 · item 29",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "raucht - eine",
          "Wann werden die Preise endlich gesenkt?",
          "sie schenkt sie ihm",
          "die"
        ],
        "answer": "die"
      },
      {
        "id": "q-45",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 14 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "werden(sind)",
          "Die Zuschauer klatschen Beifall, denen das Theaterstück gefallen hat",
          "bin",
          "1.Anna und Pia haben immer viel Glück"
        ],
        "answer": "Die Zuschauer klatschen Beifall, denen das Theaterstück gefallen hat"
      },
      {
        "id": "q-46",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 14 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die -ihrer",
          "Die ausländischen Touristen haben sich bei uns bedankt, denen wir geholfen haben",
          "deren",
          "Es wurde 10 Uhr"
        ],
        "answer": "Die ausländischen Touristen haben sich bei uns bedankt, denen wir geholfen haben"
      },
      {
        "id": "q-47",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 14 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Fenster werden geputzt",
          "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe",
          "Wird/ Ist (Wird)",
          "Morgen wird das Wetter hoffentlich wieder besser"
        ],
        "answer": "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe"
      },
      {
        "id": "q-48",
        "prompt": "Folge 37: Relativsätze Akkusativ · Übung 14 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "deren",
          "Passiv",
          "ich kann dir morgen Abend helfen",
          "Die Unfälle haben sich gestern ereignet, von den ich dir erzählt habe"
        ],
        "answer": "Die Unfälle haben sich gestern ereignet, von den ich dir erzählt habe"
      },
      {
        "id": "q-49",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 1 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "raucht - eine",
          "deren",
          "das",
          "für die"
        ],
        "answer": "raucht - eine"
      },
      {
        "id": "q-50",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 1 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dessen",
          "Deine - meiner",
          "machen Ich mache meiner Kollegin einen Tee. -",
          "besuche - eine"
        ],
        "answer": "besuche - eine"
      },
      {
        "id": "q-51",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 3 · item 22",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Passiv",
          "dessen",
          "Johannes putzt die Tafel",
          "1. Wann wird der Brief endlich beantwortet?"
        ],
        "answer": "Johannes putzt die Tafel"
      },
      {
        "id": "q-52",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 3 · item 28",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1. Wann wird der Brief endlich beantwortet?",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -",
          "Marco wäscht den Wagen",
          "das"
        ],
        "answer": "Marco wäscht den Wagen"
      },
      {
        "id": "q-53",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 4 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vorlesen Der Opa liest der Enkelin ein Gedicht vor",
          "dessen",
          "helfen",
          "Es wurde 10 Uhr"
        ],
        "answer": "helfen"
      },
      {
        "id": "q-54",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 4 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sie schenkt sie ihm",
          "dessen",
          "glaube",
          "dem"
        ],
        "answer": "glaube"
      },
      {
        "id": "q-55",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 6 · item 22",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die",
          "Das sind die Sportschuhe, mit den ich immer turne",
          "die -ihrer",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -"
        ],
        "answer": "die -ihrer"
      },
      {
        "id": "q-56",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 6 · item 27",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "wird",
          "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe",
          "Deine - meiner",
          "dessen"
        ],
        "answer": "Deine - meiner"
      },
      {
        "id": "q-57",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 7 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Morgen wird das Wetter hoffentlich wieder besser",
          "das",
          "es ihm",
          "Das ist der Computer, den man 1946 in Amerika erfand"
        ],
        "answer": "es ihm"
      },
      {
        "id": "q-58",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 7 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "sie ihm",
          "bieten Diese Firma bietet mir eine Arbeit. -",
          "raucht - eine",
          "Marco wäscht den Wagen"
        ],
        "answer": "sie ihm"
      },
      {
        "id": "q-59",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 8 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich fehle meiner Mutter",
          "Die Fenster werden geputzt",
          "sie schenkt sie ihm",
          "Passiv"
        ],
        "answer": "sie schenkt sie ihm"
      },
      {
        "id": "q-60",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 8 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "1.2002 als Zahlungsmittel eingeführt",
          "für die",
          "ich kann ihn dir übersetzen",
          "1.Anna und Pia haben immer viel Glück"
        ],
        "answer": "ich kann ihn dir übersetzen"
      },
      {
        "id": "q-61",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 8 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "bin",
          "dessen",
          "ich kann dir morgen Abend helfen",
          "deren"
        ],
        "answer": "ich kann dir morgen Abend helfen"
      },
      {
        "id": "q-62",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "machen Ich mache meiner Kollegin einen Tee. -",
          "Das sind die Impfungen, die man im",
          "bieten Diese Firma bietet mir eine Arbeit. -",
          "das"
        ],
        "answer": "bieten Diese Firma bietet mir eine Arbeit. -"
      },
      {
        "id": "q-63",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "erzählen Die Oma erzählt ihren Enkeln ein Märchen. -",
          "Das Reis wird gekocht",
          "der",
          "die -ihrer"
        ],
        "answer": "erzählen Die Oma erzählt ihren Enkeln ein Märchen. -"
      },
      {
        "id": "q-64",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "das",
          "Morgen wird das Wetter hoffentlich wieder besser",
          "dem",
          "kaufen Die Mutter kauft ihrem Kind einen Pullover. -"
        ],
        "answer": "kaufen Die Mutter kauft ihrem Kind einen Pullover. -"
      },
      {
        "id": "q-65",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 16",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "machen Ich mache meiner Kollegin einen Tee. -",
          "sie ihm",
          "raucht - eine",
          "es ihm"
        ],
        "answer": "machen Ich mache meiner Kollegin einen Tee. -"
      },
      {
        "id": "q-66",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 20",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "verraten Ich verrate dir ein Geheimnis. -",
          "Oje! Das ist aber Pech!",
          "Seine Eltern sind Rentner, in deren Haus ich die Ferien verbracht habe",
          "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -"
        ],
        "answer": "stehlen Ein Dieb stiehlt den Leuten den Geldbeutel. -"
      },
      {
        "id": "q-67",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 23",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "deren",
          "Wird/ Ist (Wird)",
          "Die Zeitung wird täglich gelesen",
          "verraten Ich verrate dir ein Geheimnis. -"
        ],
        "answer": "verraten Ich verrate dir ein Geheimnis. -"
      },
      {
        "id": "q-68",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 9 · item 27",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "dem",
          "vorlesen Der Opa liest der Enkelin ein Gedicht vor",
          "Johannes putzt die Tafel",
          "wird"
        ],
        "answer": "vorlesen Der Opa liest der Enkelin ein Gedicht vor"
      },
      {
        "id": "q-69",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 10 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Der Musiker wird fotografiert",
          "1. Wann wird der Brief endlich beantwortet?",
          "Ich nehme den roten Pullover",
          "dem"
        ],
        "answer": "Ich nehme den roten Pullover"
      },
      {
        "id": "q-70",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 10 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das sind die Sportschuhe, mit den ich immer turne",
          "das",
          "die",
          "Sonja lädt die ganze Klasse auf die Party ein"
        ],
        "answer": "Sonja lädt die ganze Klasse auf die Party ein"
      },
      {
        "id": "q-71",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 11 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die",
          "Wann werden die Preise endlich gesenkt?",
          "ich kann ihn dir übersetzen",
          "Ich fehle meiner Mutter"
        ],
        "answer": "Ich fehle meiner Mutter"
      },
      {
        "id": "q-72",
        "prompt": "Folge 38: Verben mit Akkusativ und Dativ · Übung 11 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "raucht - eine",
          "Die Rechnung wird sofort bezahlt",
          "dessen",
          "Der Professor kann nicht dem Student antworten"
        ],
        "answer": "Der Professor kann nicht dem Student antworten"
      }
    ],
    "sourcePageCount": 38,
    "answerPageCount": 9
  },
  {
    "id": "alltag-familie-hobbys-einladung",
    "title": "Daily Life, Family, Hobbies & Invitations",
    "source": "Folge 39-45",
    "pages": "PDF pages 301-349",
    "summary": "Source workbook material from Folge 39-45: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 39",
        "title": "Glück und Zufriedenheit",
        "printedPageStart": 301,
        "printedPageEnd": 302,
        "sourcePages": [
          {
            "page": 301,
            "text": "Faktoren für Glück und Zufriedenheit \nViele Studien zum Thema „ Glück“ zeigen, dass die Gesundheit einen \nsehr großen Einfluss auf die Zufriedenheit der Menschen hat. Sie zählt \nzu den wichtigsten Glücksfaktoren. Aber auch die materielle Seite des \nLebens spielt eine Rolle. Das Sprichwort ,,Geld macht nicht glücklich\" \nstimmt nur zum Teil, denn die materielle Sicherheit ist eine \nVoraussetzung für Zufriedenheit. Nach Meinung der Wissenschaftler \nliegt das materielle Glückslimit bei rund 60 000 Euro \nJahreseinkommen. \n\nWenn man mehr Geld verdient, wird man nicht glücklicher. \nAußerdem brauchen wir für ein glückliches Leben einen festen \nPartner, eine liebevolle Familie und gute Freunde. Am glücklichsten \nfühlen sich die Menschen in einer dauerhaften Beziehung, sagen die \nGlücksforscher. Zu Gesundheit, materieller Sicherheit, Partnerschaft \nund Familie kommt noch ein weiterer Faktor: eine sinnvolle Tätigkeit. \nDas kann der Beruf sein, eine ehrenamtliche Tätigkeit oder ein Hobby. \nInsgesamt bestimmen diese und andere Glücksfaktore n 50 Prozent \ndes Glücksgefühls, die anderen 50 Prozent bestimmen unsere Gene. \n\n\nعوامل Die Faktoren \nسعادة Glück \nرضا Die Zufriedenheit \nاظهروأشار zeigen"
          },
          {
            "page": 302,
            "text": "تأثير Der Einfluss \nيؤثر على Beeinflussen \nتعد من zählen zu \nتلعب دور spielt eine Rolle \nيصح stimmen \nشرط Die Voraussetzung \nيقع عند liegen bei \nدخل سنوي Das Jahreseinkommen \nيربح verdienen \nيحتاج brauchen \nيشعر fühlen sich \nباحث السعادة Der Glücksforscher \nشراكة او علاقة تشاركية Die Partnerschaft \nحدد Bestimmen \nنشاط وعمل Die Tätigkeit \nالجينات Das Gen"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 40",
        "title": "Hochzeit in Deutschland",
        "printedPageStart": 303,
        "printedPageEnd": 305,
        "sourcePages": [
          {
            "page": 303,
            "text": "Hochzeit: Informationen über Heiraten in Deutschland \n\n➢ Vor der Hochzeit \n\n• Vor der Hochzeit sind die Paare in Deutschland im Durchschnitt 4,7 Jahre \nzusammen. \n• In der Regel macht der Mann der Frau einen Heiratsantrag, manchmal ist \nes umgekehrt. \n• Ein sehr alter und bekannter Brauch ist der Polterabend. Am Abend vor der \nHochzeit feiert das zukünftige Brautpaar zusammen mit Verwandten, \nFreunden und Kollegen. Die Gäste bringen altes Geschirr mit und \nzerschlagen es vor der Tür. Der Lärm soll die bösen Geister vertreiben und \ndas kaputte Geschirr soll dem Brautpaar Glück bringen. \n\n➢ Die Hochzeitsfeier \n\n• Die meisten Hochzeitsfeiern in Deutschland haben etwa 20 bis 50 Gäste. Es \ngibt natürlich auch größere und kleinere Hochzeitsfeiern. \n• Für die Hochzeitsfeier werden durchschnittlich 10 000 Euro ausgegeben. \n• Der Höhepunkt der meisten Hochzeitsfeiern ist die Hochzeitstorte. Das \nBrautpaar schneidet die Hochzeitstorte gemeinsam mit einem Messer an. \n• Als Hochzeitsgeschenk wird Geld immer beliebter. Weil viele Paare schon \nvor der Hochzeit zusammenleben, brauchen Sie kein Geschirr oder Besteck \nmehr. \n\n➢ Die Trauung \n\n• Die Trauung erfolgt auf dem Standesamt. Viele Paare heiraten danach noch \neinmal in der Kirche. Bei der standesamtlichen Trauung sind normalerweise \nzwei Trauzeugen dabei, eine/einer für die Braut, eine/einer für den \nBräutigam."
          },
          {
            "page": 304,
            "text": "• In Deutschland ist die Braut durchschnittlich 30,5 Jahre, der Bräutigam 33,5 \nJahre alt. Das Heiratsalter ist in den letzten Jahren gestiegen. \n• 64 Prozent der Deutschen heiraten, weil sie die Partnerin/den Partner \nlieben. Etwa 40 Prozent heiraten eher aus finanziellen Gründen. \n\n➢ Nach der Hochzeit \n\nJetzt kommen die schlechten Nachrichten: \n• Ehepaare bleiben in Deutschland im Durchschnitt nur 14 Jahre zusammen. \n• Etwa 45 Prozent der Ehen halten nicht. Aber es gibt Hoffnung: Die \nScheidungsquote ist in den letzten Jahren gesunken. Sie lag zwischen 2005 \nund 2011 noch bei rund 50 Prozent. \n\n• 3. von Amts wegen in einer staatlichen od. kirchlichen Zeremonie ehelich verbinden: der \nStandesbeamte, Pfarrer hat das Paar getraut; sich t. lassen. \n\nIch kann mir keinen anderen Menschen mehr an meiner Seite vorstellen. \nUnd jetzt, wo ich nun weiß, dass ich den Rest meines Lebens mit Dir verbringen möchte, kann ich \nes gar nicht mehr abwarten, dass der Rest meines Lebens beginnt! \nWillst du meine Frau/ mein Mann werden? \n\nطلب الزواج Der Heiratsantrag \nعادة وعرف Der Brauch \nزوجين Das Brautpaar \nاحتفل feiern \nأطباق واواني Das Geschirr \nحطم zerschlagen \nروح Der Geister \nابعد واخرج vertreiben \nصرف ausgeben \nذروة وقمة Der Höhepunkt"
          },
          {
            "page": 305,
            "text": "تورتة الزفاف Die Hochzeitstorte \nبدأ في التقطيع anschneiden \nحدث وصار erfolgen \nمصلحة الأحوال المدنية Das Standesamt \nشهود عقد الزفاف Die Trauzeugen \nعروسة Die Braut \nعريس Der Bräutigam \nنسبة الطلاق Die Scheidungsquote \nصمد halten"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 41",
        "title": "Familie",
        "printedPageStart": 306,
        "printedPageEnd": 311,
        "sourcePages": [
          {
            "page": 306,
            "text": "306"
          },
          {
            "page": 307,
            "text": "307"
          },
          {
            "page": 308,
            "text": "Die Familie Radler \n\nHier ist die Familie Radler. Die Radlers wohnen in \nBremen. Heute ist Sonntag und alle sind zu Hause. Rechts sitzt \nder Vater. Er heißt Klaus. Er ist Automechaniker von Beruf. Die \nMutter sitzt in der Mitte. Sie heißt Hanna. Sie ist Apothekerin. \nHerr Radler und Frau Radler sind 40 und 37 Jahre alt und haben \nzwei Kinder. Der Sohn heißt Stefan. Er ist 12 Jahre alt. Die \nTochter heißt Bärbel. Sie ist 7 Jahre alt. Der Bruder und die \nSchwester sind Schüler. Sie spielen gern mit Bello. Das ist \nStefans und Bärbels Hund. \nDer Großvater und die Großmutter wohn en nicht in \nBremen. Sie wohnen in Hamburg, aber sie besuchen ihre Kinder oft. Sie sind die Eltern von Klaus. Die \nGroßeltern heißen Regine und Otto. Die Kinder telefonieren oft mit Oma und Opa. In Hamburg wohnen \nauch Stefans und Bärbels Tante und Onkel. Die Tante heißt Sigrid. Der Onkel heißt Sebastian. \n1. Wer ist wer in der Familie Radler? \nfemininum maskulinum Plural \nHanna \nRegine \nBärbel \nSigrid \ndie Mutter Klaus \nOtto \nStefan \nSebastian \nHanna und Klaus \nRegine und Otto \nBärbel und \nStefan \n\n\n2. Wessen? Schreiben Sie es anders. \na) Die Mutter von Hanna = _Hannas Mutter____________________________ \nb) Der Vater von Lisa = ____________________________________________ \nc) Der Freund von Michael = __________________________________________ \nd) Die Freundin von Kurt = ___________________________________________ \ne) Die Familie von Stefan = ____________________________________________ \nf) Die Großeltern von Bärbel = ___________________________________________ \n\n3. Ergänzen Sie ist oder sind."
          },
          {
            "page": 309,
            "text": "a) Das _________ Stefans Vater. Er __________ Automechaniker. \nb) __________ das deine Eltern? \nc) Regine und Otto ___________ die Eltern von Klaus. \nd) Frau Radler _____________ Apothekerin. \ne) Stefan und Bärbel _____________ Geschwister. \nf) Mein Bruder __________ ein Schüler. \ng) __________ das dein Opa? \n\n4. Lernen Sie die Wörter in Paaren. \n\nb. Der Vater und die Mutter \nc. Der Sohn und ………………. \nd. Der Bruder und………………. \ne. Der Großvater und………………. \nf. Der Onkel und………………. \ng. Die Schwester und………………. \nh. Die Tante und………………. \ni. Die Mutter und………………. \nj. Die Tochter und………………. \nk. Die Oma und………………. \n\n5. mein oder meine? \n__________ Vater, ______________ Mutter, _____________ Schwester, _______________ Bruder, \n______________ Tante, _____________Oma, ______________ Großeltern, _______________ Onkel, \n_______________Kind, _______________ Sohn, _______ _______Tochter, ______________ Kinder, \n______________ Eltern, _______________ Familie. \n6. Ich habe… \n12. Ich habe __________ große Familie. Ich habe _____________ Vater. Er heißt Günter und ist 50 \nJahre alt. Mein Vater ist Ingenieur. \n13. Ich habe ___________ Mutter, _________ heißt Angela und sie ist auch 50. Sie ist Zahnärztin. \n14. Ich habe ___________ Geschwister. Mein Bruder heißt Andreas, ________ ist Student, er ist \nschon 23 Jahre alt. Meine Schwester ___________ Karin, sie 18. Sie lernt Bürokauffrau. Und \nich bin Claudia, ich ______ 20 Jahre alt, und ich studiere Englisch und Spanisch. \n7. \nIch und meine Familie. \nHallo, ich heiße Christina Maier. Ich habe eine große Familie. Meine Eltern heißen Thomas und \nSophie. Der Vater ist 42 Jahre alt, die Mutter ist 40 Jahre alt. Ich habe noch eine Schwester Anke, sie ist \n13. Ich mag Freunde treffen, wir gehen oft in die Disc o zusammen, sehen fern, manchmal gehen ins \nCafe´. Montags und donnerstags gehe ich ins Schwimmbad. Ich schwimme schon 3 Jahre. Das ist mein \nHobby."
          },
          {
            "page": 310,
            "text": "Meine Schwester sammelt Poster von Musikern und schreibt lustige Geschichten. Sie sind toll. \nMein Vater hat auch ein Hobby. Er sitzt stundenlang vor dem Computer und programmiert. Er kocht \nauch sehr gut. Im Sommer machen wir immer Gartenpartys und er grillt. Das ist so lecker! \nMeine Mutter mag fernsehen. Sie sieht sehr gerne Serien. Aber sie treibt auch Sport. Das sind \nLeichtathletik und Yoga. \nWir haben noch eine Katze und einen Papagei. Der Papagei wohnt im Käfig, aber manchmal \nfliegt. Er spricht komisch und ist sehr lustig. Die Katze heißt Minni, sie ist schon 8 Jahre alt und schläft \nimmer. Manchmal fängt sie aber Mäuse. Ich habe meine Tiere sehr gern! \n\n1) Stimmt das? \n1. Christina hat kein Hobby. R F \n2. Die Mutter sieht gern fern. R F \n3. Der Vater mag Politik. R F \n4. Christinas Schwester macht Yoga. R F \n5. Christina geht jeden Tag ins Cafe´. R F \n6. Anke grillt toll. R F \n7. Die Katze wohnt im Käfig. R F \n8. Ihr Papagei kann fliegen und sprechen. R F \n2) Was passt? \n1- ein Hobby a-sitzen \n2-Sport b-haben \n3-Spielfilme c-schreiben \n4-ins Schwimmbad d-wohnen \n5-Poster e-treffen \n6-Geschichten f-sammeln \n7-Freunde g-treiben \n8-vor dem Computer k-gehen \n9-im Käfig i-sehen"
          }
        ],
        "answerPages": [
          {
            "page": 311,
            "text": "Die Lösungen: \n1- Regine die Großmutter - Bärbel die Tochter – Sigrid die Tante - Klaus der Vater - Otto \nGroßvater - Stefan der Sohn – Sebastian der Onkel – Hanna und klaus die Eltern - Regine \nund Otto die Großeltern - Bärbel und Stefan die Geschwister \n\n2- b.Lisas Vater c. Michaels Freund d. Kurts Freundin e. Stefans Familie f. Bärbels Großeltern \n3- a.ist-ist b.sind c.sind d.ist e.sind f.ist g.ist \n4- 1.die Mutter 2. die Tochter 3.die Schwester 4. die Großmutter 5.die Tante 6.der Bruder \n7.der Onkel 8.der Vater 9.der Sohn 10.der Opa \n5- Der -die -die -der -die -die -die- der- das- der – die – die- die- die \n6- 1.eine – ein 2.eine – sie 3.die – er – heißt - bin \n7- 1/ 1.F 2. R 3. F 4. F 5.F 6. F 7. F 8. R \n2/ 1 ein Hobby haben 2. Sport treiben 3. Spielfilme sehen 4. Ins Schwimmbad gehen 5.. \nPoster sammeln 6. Geschichten schreiben 7. Freunde treffen 8. Vor dem Computer sitzen \n9. Im käfig wohnen"
          }
        ]
      },
      {
        "folge": "Folge 42",
        "title": "Hobbys",
        "printedPageStart": 312,
        "printedPageEnd": 337,
        "sourcePages": [
          {
            "page": 312,
            "text": "malen \nzeichnen \nfotografieren \nAuto fahren \nwandern \nMusik hören \neinkaufen \nFußball spielen \nSport treiben \nFremdsprachen lernen \nKurs besuchen \nkochen \nlesen \nيلون \nيرسم \nيصور \nيسوق السيارة \nيتجول في الغابة \nيسمع موسيقي \nيتسوق \nيلعب كرة قدم \nيمارس رياضة \nيتعلم لغات اجنبية \nيشارك في كورس \nيطبخ \nيقرأ \nيشاهد تليفزيون"
          },
          {
            "page": 313,
            "text": "fernsehen \nMünzen \nBriefmarken sammeln \nmit dem Handy spielen \nFreunde besuchen \nim Garten arbeiten. \nيجمع العملات المعدنية \nيجمع الطوابع البريدية \nيلعب بالموبايل \nيزور الاصدقاء \nيشتغل في الحديقة \n\n\nDie Wörter die Bedeutung der Satz \nsich interessieren für يهتم ب -Ich interessiere mich für Musik. \nInteresse an .... haben لديه اهتمام ب -Ich habe Interesse an Musik. \nKlavier / Gitarre \n(Instrument) spielen \nاداة –يعزف جيتار \nموسيقية \n-Ich spiele Klavier. \nins Konzert / in die Oper \ngehen \nيذهب الي الحفلة -Ich gehe ins Konzert von Amr \nDiab \n-Ich gehe in die Oper. \nein Konzert geben يقيم حفلة موسيقية -Mohamed Monier gibt ein Konzert \nin Libanon. \nErfolg haben وفق -نجح -Herr Shehata hat Erfolg."
          },
          {
            "page": 314,
            "text": "Erfolg feiern يحتفل بنجاح -Elisa feiert ihren Erfolg. \n\n\nDas Wort die Bedeutung der Satz \nfotografieren mit Kamera \n/ mit Fotoapparat \nيصور بالكاميرا -Ich fotografiere mit Kamera. \n-Ich fotografiere mit Fotoapparat. \nfotografieren = machen يصور -Ich fotografiere. \n-Ich mache Fotos. \nzeigen يعرض –يفرج -Ich spiele Klavier. \nsich ansehen يشاهد -Lisa sieht die Bilder an. \n\n\nDas Wort die Bedeutung der Satz \nins Kino gehen يصور بالكاميرا Ich gehe Morgen ins Kino. \neinen Film sehen يصور Er sieht einen Film im Kino. \nlaufen يشاهد -Der Film Titanic läuft im Kino."
          },
          {
            "page": 315,
            "text": "Zuschauer مشاهد Ein Film hat viele Zuschauer. \nauswählen يختار Wähl einen Film aus! \nerzählen يحكي Der Film erzählt die Geschichte von \nRonaldo \n\n\nARD ZDF \ndas Wort die Bedeutung das Wort die Bedeutung \nder Sport الرياضة der Film, e فيلم \nder Sender القناة der Spielfilm, e فيلم \nder Ratgeber برنامج يقدم نصائح der Liebesfilm فيلم حب \ndas Programm برنامج der Actionfilm فيلم اكشن \ndie Nachricht, en الاخبار der Abenteuerfilm فيلم مغامرات \ndie Politik السياسة der Dokumenterfilm فيلم تسجيلي \ndie Wirtschaft الاقتصاد der Zeichentrickfilm فيلم رسوم متحركة \ndie Kultur \nSendung \nبرنامج ثقافي der Tierfilm فيلم عن الحيوانات \ndie Bildung التعليم der Krimifilm فيلم بوليسي"
          },
          {
            "page": 316,
            "text": "die Serie,n مسلسل das Theaterstück, e مسرحية \ndie Sendung برنامج die Komödie فيلم كوميدي \ndie Reportage, n ريبورتاج die Werbung, en اعلانات \ndie Talkshow, s برنامج حواري Tagesschau برنامج اخبارى \n\n\n-Mein Vater sieht gern die \nNachrichten. \n-Der Sport ist wichtig für die \nGesundheit. \n-Die Sendung ist interessant. \n-Ich sehe jeden Tag die Serie \n-Dieser Sender heißt Aljazeera \nSender. \n-Das Programm ist um 3: 00 Uhr \n-Der Mann spricht immer über die \nPolitik. \n-Ich finde Reportage langweilig. \n-Meine Frau sieht immer die \nTalkshows. \n-Die Bildung ist Wichtig für den \nGeist. \n-Wir müssen Ratgeber Sendung \nsehen. \n-Die Kultur Sendung ist nützlich. \n-Ich sehe gern Liebesfilm, , \nAbenteuerfilm, Tierfilm \nDokumentarfilm, Zeichentrickfilm, \nder Zeichentrickfilm. \n-Am liebsten sehe ich Tagesschau, \nTheaterstück, Komödie. \n-Ich sehe nicht gern Actionfilm, \nKrimifilm, Werbung."
          },
          {
            "page": 317,
            "text": "Ich bin der Meinung, Fernsehen macht \ndie Familie kaputt. \nIch bin der Meinung, Fernsehen macht \ndie Jugendlichen passiv, dumm aggressiv. \nIch bin der Meinung, Fernsehen macht \ndie Kinder nervös. \nIch bin anderer Meinung, Fernsehen ist \ninteressant und wichtig für Erwachsene und \nStudenten. \nMan kann sich über die Welt \ninformieren. \nMan kann informative Sendungen sehen."
          },
          {
            "page": 318,
            "text": "Ich bin der Meinung, Fernsehen macht die \nFamilie kaputt. \nIch bin der Meinung, Fernsehen macht die \nJugendlichen passiv, dumm aggressiv. \nIch bin der Meinung, Fernsehen macht die \nKinder nervös. \nIch bin anderer Meinung, Fernsehen ist \ninteressant und wichtig für Erwachsene und \nStudenten. \nMan kann sich über die Welt informieren. \nMan kann informative Sendungen sehen."
          },
          {
            "page": 319,
            "text": "Hier sieht man ein witziges Foto: zwei Hauskatzen schauen eine Fernsehsendung. \nDie größere Katze ist heller als die kleinere, aber beide sind Miezekatzen. Sie \nsitzen vor dem Bildschirm und \ninteressieren sich sehr für das \nProgramm. Sie sehen bestimmt eine \nTiersendung über Haustieren, auf dem \nBildschirm ist eben ein Hamster zu \nsehen. Es gibt spezielle Kanäl e, die nur \nTier und Naturfilme senden. Meiner \nMeinung nach können die Katzen den \nInhalt des Films nicht verstehen, sie \nbeobachten nur die knallenden Farben \nund Scheine. Das ist wie ein Spiel für sie. \nDie Natursendungen interessieren mich \nauch sehr. \n\n\nOft ist zu sehen, dass sehr kleine Babys \nvor der Glotze sitzen, wie hier auf dem \nFoto. Viele Eltern denken, dass es am \nbesten ist, Ruhe zu haben. So muss man \nnicht auf das Kind aufpassen, es sitzt \nruhig und sieht fern. Diese Meinung \nfinde ich falsch: die Elt ern sollen wissen, was die Kinder sehen, ihre Fragen \nbeantworten. Einige Tier-, Natur- und Zeichentrickfilme sind gut und unterhaltsam. \nAber ein Kind so allein vor dem Bildschirm lassen ist ein großer Fehler. Man soll die \nbesten Programme auswählen und manchmal mit den Kindern zusammen fernsehen."
          },
          {
            "page": 320,
            "text": "• Es fehlt der Pfeffer. \n• Es hat kein Gewürz. \n• Das ist doch immer dasselbe. \n• Quizsendungen finde ich langweilig. \n• Ich kann alles finden, was mich interessiert. \n• Charmante Moderatoren. \n• \n\n\n• Immer nur Sport, Politik, Krimis, Werbungen……… \n\n\n• Ratgeber \n• Dokumentarfilme \n• geistreiche Sendungen……… \n\n\n• über die langweiligen, schlechten Sendungen \n• über die Moderatoren \n• über die idiotischen Krimis"
          },
          {
            "page": 321,
            "text": "• über viel Gewalt \n\n\n• für Politik, für Wirtschaft \n• für Werbefernsehen \n• für Geschichte \n\n\n• auf die Dokumentarfilme \n• auf die technische Sendungen \n• auf die Tierfilme \n\n\n• über den neuesten französischen Film \n• darüber, der mir unter die Haut geht! \n\n\n• abendliche Sendezeit passt am liebsten in meinen Tag"
          },
          {
            "page": 322,
            "text": "1.Beantworte die Fragen mit einem ganzen Satz! \na. Siehst du gern die Sportsendungen? \n_______________________________________________________________________________________ \nb. Wie lange siehst du fern täglich? \n______________________________________________________________________________________ \nc. Was sind deine Lieblingssendungen? \n______________________________________________________________________________________ \nd. Magst du die Krimis oder die Tierfilme? \n______________________________________________________________________________________ \ne. Was sehen deine Mutter und dein Vater am liebsten? \n_______________________________________________________________________________________ \n\n2.Bilde Sätze aus den gegebenen Wörtern nach dem Beispiel! \nBeispiel: schicken- ich – ein Brief /A/– die Großeltern /D/ \nIch schicke den Großeltern einen Brief. \na. ich – geben – mein Freund – den neuesten Film \n_____________________________________________________________________________________"
          },
          {
            "page": 323,
            "text": "b. wir – kaufen – unsere Eltern – zwei Kinokarten \n_____________________________________________________________________________________ \nc. er – lesen – seine Freundin – die Fernsehzeitung \n_____________________________________________________________________________________ \nd. ihr – schenken – das Kind – eine DVD \n____________________________________________________________________________________ \n3. \n\n\nIM SOMMER \nan einem sonnigen Tag an einem regnerischen Tag \n\n\n1. ____________________________________________________________________________ \n2. ____________________________________________________________________________ \n3. ____________________________________________________________________________ \n1 stricken \n2 Tischtennis \nspielen \n3 zeichnen \n4 schwimmen \n5 Rad fahren \n6 Federball \nspielen \n7Camping machen \n8 Schach spielen"
          },
          {
            "page": 324,
            "text": "4. ____________________________________________________________________________ \n5. ____________________________________________________________________________ \n6. ____________________________________________________________________________ \n7. _____________________________________________________________________________ \n8. _____________________________________________________________________________ \n\n\nIM WINTER \ndrinnen draußen \n\n\n1. ____________________________________________________________________________ \n2. ____________________________________________________________________________ \n3. ____________________________________________________________________________ \n1 Eishockey \nspielen \n2 Karten \nspielen \n3 Ski fahren \n4 lesen \n5 Musik hören \n6 eislaufen \n7 mit dem \nSpielzeug \nspielen \n8 Schlitten \nfahren"
          },
          {
            "page": 325,
            "text": "4. ____________________________________________________________________________ \n5. ____________________________________________________________________________ \n6. ____________________________________________________________________________ \n7. _____________________________________________________________________________ \n8. _____________________________________________________________________________ \n4. \nWähle eins von den drei Bildern und schreib eine Bildbeschreibung in etwa 6 -8 \nSätzen! \n\n\nA."
          },
          {
            "page": 326,
            "text": "_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_______________________________________________________________________________________________________\n_____________________________________________________________________________________ \n5.Forme die Satze ins Präteritum, Perfekt um! \na. Er sieht immer zu viel Krimis \n_____________________________________________________________________________________________ \n_____________________________________________________________________________________________ \nb. Wir haben wenig Freizeit zum Fernsehen. \n_____________________________________________________________________________________________ \n_____________________________________________________________________________________________ \nc. Du isst immer etwas beim Fernsehen. \n_____________________________________________________________________________________________ \n_____________________________________________________________________________________________ \nd. Die Familie kauft ein nagelneues Fernsehgerät. \n_____________________________________________________________________________________________ \n_____________________________________________________________________________________________ \ne. Am Samstag ist eine gute Sendung um 10 Uhr. \n_____________________________________________________________________________________________ \n____________________________________________________________________________________________ \n6.Ergänze den Text mit den angegebenen Wörtern!"
          },
          {
            "page": 327,
            "text": "In _______ (1)Freizeit lese ich, reite ich und ______(2) ich Aerobic im Allgemeinen. Ich war \n___ (3)Jahre alt, als ich mit dem _________(4) angefangen habe. Ich gehe 2mal in der \n_________(5)reiten. Mein _________(6) ist sehr nett, manchmal aber auch _______.(7) Mein \n_______ (8)heißt Lara, Wenn ich nicht _________, (9)dann mache ich nachmittags Aerobic. \nSeit der _________ (10)Klasse treibe ich diese ____________. (11)Meinen Trainer mag ich sehr. \nViermal _____(12)Woche habe ich Training. Es ist im allgemeinen sehr _______________. \n(13)Seit 3 _______(14) treibe ich Sport professionell. Mit meinem __________(15) haben wir \nschon mehrmals _________(16) gewonnen. \n\n7.Gruppiere die Freizeitaktivitäten! \nMeine Freizeit verbringe ich am liebsten mit meinen \nFreunden. Am liebsten machen wir sportliche \nAktivitäten zusammen: wir gehen joggen, wir fahren \nRad, fahren Motorrad, wir spielen Straßenfußball, \nwir spielen im Sommer Strandvolleyball, wir gehen \nBillard spielen, wir fahren Skateboard. Im Sommer, \nwenn es heiß ist, gehen wir am liebsten zum Strand. \nHier stehen uns Erlebnisbecken, Whirlpool, \nWellenbad, Sprungbrett, Rutsche zur Verfügung. Am \nWochenende gehen wir imme r zusammen aus. \nSamstags gehen wir in die Disco, wo wir uns bis zu \nden Morgenstunden unterhalten, tanzen. Sehr gern \ngehen wir ins Kino, ins Theater oder ins Konzert. \n\n\nHansa Park Sierksdorf \nSport Sommer Wochenende \n\nWoche — meiner — Reiten — pro — Sportart — Serien — Jahren — Trainer — \nneunten — Pokal — Pferd — Team — reite — mache — 5 — anstrengend __ \nstreng"
          },
          {
            "page": 328,
            "text": "Große Abenteu er, 1)___ Wissenswertes, Spaß in 2)____ neuen Dimension erwarten Sie in \nDeutschlands einzigem Erlebnispark am Meer. Der Hansa Park ist in 3)___ einer Stunde \n4)___Hamburg aus erreichbar. \nEs 5)____ über 125 Attraktionen - davon über 35 Fahrattraktionen - in 11 Themenwelten \n6)___ entdecken, z.B. „Die Glocke“, weltweit einmaliger Flug - und Drehspaß 7)___ \nAdrenalinfans, „Torre del Mar“, das 8)___ Flugkarussell der Welt, die Wasser-Bobbahn „Rio \nDorado“ , einmalig in Deutschland .Viele 9)___ Attraktionen 10)____ a ber auch speziell für \nunsere 11)____ Gäste und für Familien mit Kindern konzipiert. „Dr. Livingstone’s Safari -\nFlug“, der „Indian River“ sind nur 12)____ 13)_____ beliebtesten Stationen. \nDie Shows im HANSA-PARK3 \nVerspielte Seelöwen spritzen Sie nass. Und unser Ballett zaubert 14)____ Traum aus Farben \nund Licht. Die Bühne ist der Ort 15)___ Mutigen und Schönen. Sie tauchen ein – in das Herz \nder Magie! \n8.Was ist richtig? Suche das richtige Wort und kreuze es an! \n1. a) viel b) viele \n2. a) einem b) einer \n3. a) nur b) erst \n4. a) in b) von \n5. a) gibt b) sind \n6. a) - b) zu \n7. a) zu b) für \n8. a) größte b) größten \n9. a) unseren b) unserer \n10.a) sind b) ist \n11.a) kleine b) kleinen \n12.a) einige b) eigene \n13.a) unserer b) unseren \n14.a) ein b) einen \n15.a) der b) den"
          },
          {
            "page": 329,
            "text": "9. \n\n\n1. \n2. \n\n7. \n\n3. \n\n6. \n\n4. \n\n11\n. \n\n5. \n\n8. \n\n10\n. \n\n9. \n\n13\n."
          },
          {
            "page": 330,
            "text": "Sportsendung \nAbenteuerfilm \nComedy \nFamilienserie \nJugendsendung \nKrimi \nMusiksendung \nNachrichten \nQuizsendung \nRomantischer Film \nScience-Fiction \nSeifenoper \nSerie \nShow \n12\n. \n\n16\n. \n\n14\n. \n\n15\n."
          },
          {
            "page": 331,
            "text": "A) Odnen Sie zu. \n\nB) Was siehst du gern? \n----------------------------------------------------------------------------------------------------------\n----------------------------------------------------- \nC) Was ist dein Lieblingsprogramm? \n-----------------------------------------------------------------------------------------------------------------\n------------------------------------------ \n\n10.Bilde Sätze: \n1. Frank/gern Fußball spielen: \n………………………………………………………….........................................…………………………….………... \n2. Lilli/gern Bücher lesen: \n…………………………………………………………………………...........................................………………………. \n3. Tim/gern in den Bergen wandern: \n………………………………………………………………………………………………….......................................... \n4. Klara/gern / im Internet / surfen: \n………………………………………………………………………………………………….......................................... \n5. Robert/gern Gitarre spielen: \n………………………………………………………………………………………………….......................................... \n6. Sarah/gern Flamenco tanzen: \n………………………………………………………………………………………………..........................................…. \n7. Brigitte/gern Rollschuh laufen: \nSpielfilm \nTiersendung \nWissenschaftssendung \nZeichentrickfilm"
          },
          {
            "page": 332,
            "text": "…………………………………………………………………………………………………......................................... \n8. Lukas/gern Fleisch und Würstchen grillen: \n………………………………………………………………………………………………........................................…. \n9. Lena/gern Schmetterlinge sammeln: \n…………………………………………………………………………………………………......................................... \n10. Max/gern Tennis spielen: \n………………………………………………………………………………………………….......................................... \n11. Laura/gern Scrabble spielen: \n…………………………………………………………………………………………………......................................... \n12. Jan/gern im Bach angeln: \n…………………………………………………………………………………………………........................................ \n13. David/gern snowboarden: \n……………………………………………………………………………………….……….................................. \n14. Emma/gern Korbball spielen: \n…………………………………………………………………………………………………............................... \n15. Paul/gern fotografieren: \n…………………………………………………………………………………………………................................. \n16. Anna/gern Pullover und Schals stricken: \n………………………………………………………………………………………………….................................. \n17. Fabian/gern Golf spielen: \n………………………………………………………………………………………………….................................. \n18. Leonie/gern Würfelspiele spielen: \n…………………………………………………………………………………………………................................. \n19. Johanna/gern mit ihren Kindern basteln: \n…………………………………………………………………………………………………................................."
          },
          {
            "page": 333,
            "text": "20. Julian/gern Theater spielen: \n…………………………………………………………………………………………………................................. \n21. Lisa/gern Kuchen backen: \n……………………………………………………………………………………….…………............................... ... \n22. Florian/gern den Garten pflegen: \n……………………………………………………………………………………….…………. \n23. Sofia/gern im Stadtzentrum shoppen: \n………………………………………………………………………………………… \n24. Felix/gern Musik hören: \n…………………………………………………………………………………………. \n11.Kreuze an! \n1. Schaut ihr gerne Fernsehen? \n*Ja. *Nein. \n2. Was schaut ihr euch im Fernsehen an? \n* Filme *Nachrichten *Sendungen, Serien \n*Reportagen *Sportsendungen *Talkshows *…………………. \n3. Wie oft schaut ihr Fernsehen? \n*Jeden Tag *3-4 Mal/Woche *1-2 Mal/Woche * nie \n4. Wie viel Zeit verbringt ihr vor dem Fernseher? \n*mehr als 3 Stunden/Tag *2-3 Stunden/Tag *1 Stunde/Tag \n*6-8 Stunden/Woche *4-6 Stunden/Woche *………………….. \n5. Welche sind die guten, welche die schlechten Seiten vom Fernsehen? \n+ -"
          },
          {
            "page": 334,
            "text": "12.Leseverständnis \nFernsehen: Unterhaltung mit Nebenwirkungen \nFernsehen ist informativ und unterhaltend; deshalb haben auch schon Kinder einen \neigenen Fernseher in ihrem Zimmer. Doch was ist mit schlechten Noten in der Schule, \noder spätere gesundheitliche Probleme, die daraufhin zurückzuführen sind? Es lohnt sich, \ndie Vor-und Nachteile des Fernsehens einmal genauer anzuschauen. \nEinerseits kann fernsehen bei häufigem Konsum zu schlechten Noten \nführen. Die Kinder verbringen nur noch Zeit vor dem Fernseher und \nvernachlässigen ihre Hausaufgaben. Außerdem werden bei vielen \nprivaten Sendern unrealistische und brutale Filme ausgestrahlt, durch \ndie man aggressiv werden bzw. ein falsches Bild von der Realität \nbekommen kann. \nDie Schauspieler im Fernsehen werden häufig auch als „Ideale“ \ndargestellt, was dazu führen kann, das Jugendliche diesen Idealen nacheifern, dass sie z.B. \nnichts mehr essen, da sie sich ‚zu dick‘ fühlen. \nDes Weiteren kann häufiges Fernsehen auch \ngesundheitliche Probleme hervorrufen. Da man sich vor \ndem Fernseher nicht bewegt, kommt es bei vielen \nMenschen zu Rückenproblemen oder gar Übergewicht. \nZum Beispiel wiegen nahezu 1/3 der 9 bis 12-jährigen \nzu viel für ihr Alter. Kein Wunder, wenn Kinder ca. 3 Stunden am Wochenende und 2 \nStunden während der Woche fernsehen. \nNicht weniger zu beachten ist, dass man Kontakte verlieren kann, oder sie sich \nverschlechtern können. Das kommt daher, da man nur noch vor dem Fernseher sitzt, \nanstatt etwas mit Freunden zu unternehmen. \nAndererseits ist fernsehen informativ und bildend. Nachrichtensender zeigen uns \nstündlich, was es in der Welt neues gibt, und was um uns herum geschieht. \nEs gibt auch sehr informative Sendungen. Beispielsweise zeigen sie, wie Produkte \nhergestellt sind, weisen uns daraufhin welche \nschädlichen Stoffe sie beinhalten können, etc. \nDarüber hinaus dient fernsehen zur Entspannung \nund Ablenkung des Alltags. Man muss sich dabei \nnicht anstrengen und kann den Alltag für einen \nMoment lang einfach vergessen."
          },
          {
            "page": 335,
            "text": "Fragen zum Text \n1. Kann fernsehen schädlich für die Gesundheit sein? \n2. Welche weiteren Nachteile hat das Fernsehen? \n3. Welche sind die positiven Seiten des Fernsehens?"
          }
        ],
        "answerPages": [
          {
            "page": 335,
            "text": "Die Lösungen: \n\n1- a.Ja, ich sehe gern die Sportsendungen. b.Ich sehe täglich zwei Stunden fern. \nc.Meine Lieblingssendung ist Kultur Sendung. d.Ich mag lieber die Tierfilme. \ne.Meine Eltern sehen lieber die Talkshows. \n\n2- A. ich gebe meinem Freund den neuesten Film. b. wir kaufen unseren Eltern zwei \nKinokarten. C. er liest seiner Freundin die Fernsehzeitung. D. ihr schenkt dem Kind eine \nDVD. \n\n3- IM SOMMER \n1.Rad fahren 2. Schwimmen 3. Tischtennis spielen 4. Camping machen \n5. Schach spielen 6. Federball spielen 7. zeichnen 8. Stricken \nIM WINTER \n1.Karten spielen 2. Lesen 3. Musik hören 4. mit dem Spielzeug spielen 5. eislaufen 6. Ski \nfahren7. Schlitten fahren 8. Eishockey spielen"
          },
          {
            "page": 336,
            "text": "4- Erstes Foto hinweist auf eine kleine Familie. Sie sehen einen lustigen Film. Die kleine \nFamilie besteht aus 4 Personen ein Vater, eine Mutter, ein Sohn und eine Tochter. Sie \nsitzen im Wohnzimmer auf dem Sofa. Sie essen Popcorn. Und sie lächeln. \n\n5- a. Er hat immer zu viel Krimis gesehen. /Er sah immer zu viel Krimis. B. Wir haben wenig \nFreizeit zum Fernsehen gehabt. / Wir hatten wenig Freizeit zum Fernsehen. C. Du hast \nimmer etwas beim Fernsehen gegessen. / Du aß immer etwas beim Fernsehen. D. Die \nFamilie hat ein nagelneues Fernsehgerät gekauft. / Die Familie kaufte ein nagelneues \nFernsehgerät. E. Am Samstag ist eine gute Sendung um 10 Uhr gewiesen. / Am Samstag \nwar eine gute Sendung um 10 Uhr. \n6- 1- meiner 2. mache 3. 5 4. Reiten 5. Woche 6. Pferd 7. streng 8. Trainer 9. reite 10. \nneunten 11. Sportart 12. pro 13. anstrengend 14. Jahren 15. Team 16. Pokal \n7- Sport joggen, fahren Rad, fahren Motorrad, spielen Straßenfußball) \nSommer (spielen Strandvolleyball, Billard spielen, fahren Skateboard, gehen zum Strand. \nHier stehen uns Erlebnisbecken, Whirlpool, Wellenbad, Sprungbrett, Rutsche zur \nVerfügung) \nWochenende (gehen in die Disco, unterhalten, tanzen, gehen ins Kino, ins Theater oder \nins Konzert) \n8- 1.a 2. B 3. a 4. B 5. a 6. B 7. B 8. a 9. a 10. a 11. B 12. a 13. B 14. B 15. a \n9- \n10- 1. Frank spielt gern Fußball. 2. Lilli liest gern die Bücher. 3. Tim wandert gern in den \nBergen. 4. Klara surft gern im Internet. 5. Robert spielt gern Gitarre. 6. Sarah tanzet gern \nFlamenco. 7. Brigitte läuft gern mit den Rollschuhen. 8. Lukas grillt gern Fleisch und \nWürstchen. 9. Lena sammelt gern Schmetterlinge. 10. Max spielt gern Tennis. 11. Laura \nspielt gern Scrabble. 12. Jan angelt gern im Bach. 13. David snowboardet gern. 14. Emma \nspielt gern Korbbal. 15. Paul fotografiert gern. 16. Anna strickt gern Pullover und Schals. \n17. Fabian spielt gern Golf. 18. Leonie spielt gern Würfelspiele. 19. Johanna bastelt gern \nmit ihren Kindern. 20. Julian spielt gern Theater. 21. Lisa backt gern Kucken. 22. Florian \npflegt gern den Garten. 23. Sofia shoppt gern im Stadtzentrum. 24. Felix hört gern Musik. \n11- 5- Vorteile: neus über die Welt wissen – Entspannung \nNachteile: verbringen viel Zeit vor dem Fernseher – führen zur gesundheitlichen probleme \n\n12- 1. Des Weiteren kann häufiges Fernsehen auch gesundheitliche Probleme hervorrufen. \nDa man sich vor dem Fernseher nicht bewegt, kommt es bei vielen Menschen zu \nRückenproblemen oder gar Übergewicht. Zum Beispiel wiegen nahezu 1/3 der 9 bis 12-\njährigen zu viel für ihr Alter. \n2. Fernsehen kann bei häufigem Konsum zu schlechten Noten führen. Die Kinder \nverbringen nur noch Zeit vor dem Fernseher und vernachlässigen ihre Hausaufgaben. \nAußerdem werden bei vielen privaten Sendern unrealistische und brutale Filme"
          },
          {
            "page": 337,
            "text": "ausgestrahlt, durch die man aggressiv werden bzw. ein falsches Bild von der Realität \nbekommen kann. \n3.Fernsehen ist informativ und bildend. Nachrichtensender zeigen uns stündlich, was es \nin der Welt neues gibt, und was um uns herum geschieht. \nEs gibt auch sehr informative Sendungen. Beispielsweise zeigen sie, wie Produkte \nhergestellt sind, weisen uns daraufhin welche schädlichen Stoffe sie beinhalten können, \netc. \nDarüber hinaus dient fernsehen zur Entspannung und Ablenkung des Alltags. Man muss \nsich dabei nicht anstrengen und kann den Alltag für einen Moment lang einfach \nvergessen."
          }
        ]
      },
      {
        "folge": "Folge 43",
        "title": "Kausalsätze: weil, denn, deshalb",
        "printedPageStart": 338,
        "printedPageEnd": 345,
        "sourcePages": [
          {
            "page": 338,
            "text": "Hauptsatz 1 \nHauptsatz 2 (Grund) \nPosition 0 Position 1 Verb Mittelf. / Ende \nHeute geht Karl nicht zur Arbeit. Er ist sehr krank. \nHeute geht Karl nicht zur Arbeit, denn er ist sehr krank. \nIch esse jetzt. ich habe Hunger. \nIch esse jetzt, denn ich habe Hunger. \nEr trinkt nichts. Er hat keinen Durst. \nEr trinkt nichts, denn er hat keinen Durst. \nHauptsatz \nNebensatz (Grund) \nKonjunktion Position 1 Mittelf. Verb \nHeute geht Karl nicht zur Arbeit, weil Er sehr krank ist. \nIch esse jetzt, weil Ich Hunger habe. \nEr trinkt nichts, weil Er Keinen Durst hat. \nLisa kommt spät, weil sie den Zug vepasst hat. \nMohammed kann nicht spielen, weil Er sein Bein gebrochen hat."
          },
          {
            "page": 339,
            "text": "Nebensatz (Grund) Hauptsatz \nKonjunktion Subj. Mittelf. Verb Verb Subj. Mittelf. \nWeil karl sehr krank ist, geht er heute nicht zur \nArbeit. \nWeil ich Hunger habe, esse ich jetzt. \nWeil er Keinen Durst hat, trinkt er nichts. \nWeil sie den Zug vepasst hat, kommt er spät. \nWeil er sein Bein gebrochen \nhat, \nkann er nicht spielen. \nHauptsatz 1 (Grund) \nHauptsatz 2(Folge) \nPosition 0 Position 1 Verb Mittelf. / Ende \nHeute geht Karl nicht zur Arbeit. Er ist sehr krank. \nKarl ist sehr krank, deshalb geht er heute nicht zur Arbeit. \nIch esse jetzt. Ich habe Hunger. \nIch habe Hunger, deshalb esse ich jetzt. \nLisa kommt spät. Sie hat den Zug verpasst. \nLisa hat den Zug verpasst, deshalb kommt sie spät."
          },
          {
            "page": 340,
            "text": "Die Sätze \n\n\n1- Bilden Sie die Sätze \n\n• Ich kann nicht zur Party kommen. . . . . . . . . . . . . ………………. . . . . . . . . . \n\n➔ 1. mein Kind krank sein \n➔ 2. einen Arzttermin haben \n➔ 3. Umzug haben \n➔ 4. Termin beim Amt haben \n➔ 5. meinen Eltern helfen müssen \n➔ 6. meine Wohnung renovieren --- 7. in meine Heimat fahren \n\n\nÜbung: 7. in meine Heimat fahren \n\n▪ denn: Ich kann nicht zur Party kommen, denn ich fahre in meine Heimat. \n▪ deshalb: Ich fahre in meine Heimat, deshalb kann ich nicht kommen. \nIch kann nicht zur Party \nkommen, denn Ich fahre in meine Heimat. \nIch fahre in meine Heimat, deshalb kann ich nicht kommen. \nIch kann nicht zur Party \nkommen, \n\nweil Ich ich in meine \nHeimat fahre . \nEr kann nicht ins Kino gehen, denn Er hat sein Geld vergessen. \nEr hat sein Geld vergessen, deshalb kann er nicht ins Kino \ngehen. \nEr kann nicht ins Kino gehen, weil Er sein Geld vergessen hat."
          },
          {
            "page": 341,
            "text": "▪ weil: Ich kann nicht zur Party kommen, weil ich in meine Heimat fahre. \n\n1. denn: . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . … . . . . . . . . . . . . . . . . . . . . . . . . ………………. . . . . . . . . . . \ndeshalb: . . . . . . . . . . . . . . . . . . . . . . . . . . . . …..… . . . . . . . . . . . . . . . . . . . . . . . . ……………… . . . . . . . . . . . . . . \nweil: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . . . . . . . . ……………………….. . . . . . . . . . . \n2. denn: . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . … . . . . . . . . . . . . . . . . . . . . . . . . ………………. . . . . . . . . . . \ndeshalb: . . . . . . . . . . . . . . . . . . . . . . . . . . . . …..… . . . . . . . . . . . . . . . . . . . . . . . . ……………… . . . . . . . . . . . . . . \nweil: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . . . . . . . . ……………………….. . . . . . . . . . . \n3. denn: . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . … . . . . . . . . . . . . . . . . . . . . . . . . ………………. . . . . . . . . . . \ndeshalb: . . . . . . . . . . . . . . . . . . . . . . . . . . . . …..… . . . . . . . . . . . . . . . . . . . . . . . . ……………… . . . . . . . . . . . . . . \nweil: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . . . . . . . . ……………………….. . . . . . . . . . . \n4.denn: . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . … . . . . . . . . . . . . . . . . . . . . . . . . ………………. . . . . . . . . . . \ndeshalb: . . . . . . . . . . . . . . . . . . . . . . . . . . . . …..… . . . . . . . . . . . . . . . . . . . . . . . . ……………… . . . . . . . . . . . . . . \nweil: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . . . . . . . . ……………………….. . . . . . . . . . . \n\n5.denn: . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . … . . . . . . . . . . . . . . . . . . . . . . . . ………………. . . . . . . . . . . \ndeshalb: . . . . . . . . . . . . . . . . . . . . . . . . . . . . …..… . . . . . . . . . . . . . . . . . . . . . . . . ……………… . . . . . . . . . . . . . . \nweil: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . . . . . . . . ……………………….. . . . . . . . . . . \n\n6.denn: . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . … . . . . . . . . . . . . . . . . . . . . . . . . ………………. . . . . . . . . . . \ndeshalb: . . . . . . . . . . . . . . . . . . . . . . . . . . . . …..… . . . . . . . . . . . . . . . . . . . . . . . . ……………… . . . . . . . . . . . . . . \nweil: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ……. . . . . . . . . . . . . . . . . . . . . ……………………….. . . . . . . . . . . \n\n\n2- Bilde richtige Sätze! \n\n(1) Jakob kann nicht schlafen, deshalb (er Milch trinken) ………………………………………………… \n(2) Steffi ist sehr nett, deshalb (Tim sie kennen möchten) ………………………………………………. \n(3) Die Prüfung ist sehr schwierig, deshalb (wir viel lernen müssen) ………………...………………… \n(4) Ulrich braucht ein neues Auto, deshalb (er sehr viel arbeiten) ……………………………………… \n(5) Sie hat um 7 Uhr morgens Unterricht, deshalb (sie sehr früh aufstehen) ………………………… \n(6) Der Kühlschrank ist leer, deshalb (wir im Supermarkt einkaufen) ………………………………… \n(7) Ich möchte mit meiner Freundin reden, deshalb (ich sie anrufen) ………………………………… \n\n3- Wie geht es weiter?"
          },
          {
            "page": 342,
            "text": "(8) Ich bin müde, deshalb………………………………………………………………………………………… \n(9) Ich brauche Geld, deshalb…………………………………………………………………………………… \n(10) Ich bin froh, deshalb……………………………………………………………………………………… \n(11) Er ist reich, deshalb……………………………………………………………………………………… \n(12) Ich habe kein Auto, deshalb…………………………………………………………………………… \n(13) Wir haben morgen keine Schule, deshalb…………………………………………………………… \n(14) Ich habe kein Appetit, deshalb……………………………………………………………………….… \n(15) Ich spiele gern Fußball, deshalb……………………………………………………………………… \n(16) Ich brauche eine neue Jeans, deshalb………………………………………………………………… \n(17) Ich habe nicht deine Telefonnummer, deshalb…………………………………………………... \n(18) Maria mag ihn überhaupt nicht, deshalb…………………………………………………………… \n(19) Peter will in Deutschland studieren, deshalb……………………………………………………… \n(20) Lisa möchte ein neues Auto kaufen, deshalb ……………………………………………………… \n\n\n4- Schreiben Sie die Sätze noch einmal. Benutzen Sie dabei „weil“. \n\n(1) Ich bin traurig. Ich bin krank \n……………………………………………………………………………………………………………………… \n(2) Die Musik stört mich. Sie ist sehr laut. \n……………………………………………………………………………………………………………………… \n(3) Das Essen schmeckt mir nicht. Es ist zu salzig. \n……………………………………………………………………………………………………………………… \n(4) Morgen kann ich nicht zur Schule gehen. Ich habe einen Termin beim Arzt. \n……………………………………………………………………………………………….…………………… \n(5) Thomas ist sauer auf mich. Ich habe ihn gestern nicht angerufen. \n……………………………………………………………………………………………………………………… \n(6) Sie muss ein Geschenk kaufen. Ihr Mann hat morgen Geburtstag. \n……………………………………………………………………………………………………………………… \n(7) Meine Eltern haben einen neuen Fernseher gekauft. Der alte Fernseher ist kaputt. \n……………………………………………………………………………………………………………………… \n(8) Ich gehe ins Büro. Ich brauche eine Bescheinigung \n……………………………………………………………………………………………………………………… \n(9) Er kommt später. Er hat seine U-Bahn verpasst."
          },
          {
            "page": 343,
            "text": "……………………………………………………………………………………………………………………… \n(10) Sie lernt zurzeit sehr viel. Sie schreibt morgen einen Test. \n……………………………………………………………………………………………………………………… \n\n\n5- Bilden Sie Sätze und verbinden Sie die Sätze mit deshalb wie im Beispiel. \n\n➢ Martin und seine Freunde - für Fußball - sich interessieren \nsie - jeden Samstag gemeinsam - die Sportschau - sehen \n\n✓ Martin und seine Freunde interessieren sich für Fußball, deshalb sehen sie jeden Samstag \ngemeinsam die Sportschau. \n\n1- Gerda - Krimis - mögen \nsie - keine Krimiserie – verpassen. \n……………………………………………………………………………………………………………………… \n\n2- Mathildes Hobby - Gartenarbeit – sein. \nsie - Sendungen über Landschaftsgestaltung - sehr interessant – finden. \n……………………………………………………………………………………………………………………… \n\n3- Georg - für Biologie und Erdkunde - sich interessieren. \nbei ihm - immer Discovery Channel – laufen. \n……………………………………………………………………………………………………………………… \n\n4- Karl - Zeichentrickfilme – mögen. \ner - den Fernseher - nur vormittags – einschalten. \n……………………………………………………………………………………………………………………… \n\n5- Paula - über die Ereignisse in der Welt - sich informieren. \nsie - jeden Abend - die Tagesschau - sich ansehen. \n……………………………………………………………………………………………………………………… \n\n6- Kathrin - Romantikerin – sein. \nsie - gern Liebesfilme mit Happy End – sehen. \n……………………………………………………………………………………………………………………… \n\n7- Laura - alle Fernsehsendungen – mögen. \nsie - immer vor dem Fernseher – sitzen. \n……………………………………………………………………………………………………………………… \n6- Was ist der Grund? Bilden Sie die Sätze mit weil."
          },
          {
            "page": 344,
            "text": "✓ Warum hast du so gute Laune? \nIch kann nächstes Jahr eine Weltreise machen. \n\n❖ Ich habe so gute Laune, weil ich nächstes Jahr eine Weltreise machen kann. \n\n1- Ich muss heute nicht arbeiten. ................................................................................................................ \n2- Mein Chef ist heute nicht da. .................................................................................................................. \n3- Der Deutschkurs fällt heute aus. ............................................................................................................ \n4- Das Semester ist zu Ende. ......................................................................................................................... \n5- Ich habe im Lotto gewonnen. .................................................................................................................. \n6- Ich habe eine neue Stelle gefunden. ..................................................................................................... \n7- Ich habe meine Sprachprüfung bestanden. ........................................................................................ \n8- Ich habe mich verliebt. ............................................................................................................................."
          }
        ],
        "answerPages": [
          {
            "page": 344,
            "text": "Die Lösungen: \n\n1- 1. denn: Ich kann nicht zur Party kommen, denn mein Kind ist krank. \ndeshalb: Mein Kind ist krank, deshalb kann ich nicht kommen. \nweil: Ich kann nicht zur Party kommen, weil mein Kind krank ist. \n2. denn: Ich kann nicht zur Party kommen, denn ich habe einen Arzttermin. \ndeshalb: Ich habe einen Arzttermin, deshalb kann ich nicht kommen. \nweil: Ich kann nicht zur Party kommen, weil ich einen Arzttermin habe. \n3. denn: Ich kann nicht zur Party kommen, denn ich habe Umzug. \ndeshalb: Ich habe Umzug, deshalb kann ich nicht kommen. \nweil: Ich kann nicht zur Party kommen, weil ich Umzug habe. \n4. denn: Ich kann nicht zur Party kommen, denn ich habe einen Termin beim Arzt. \ndeshalb: Ich habe einen Termin beim Arzt, deshalb kann ich nicht kommen. \nweil: Ich kann nicht zur Party kommen, weil ich einen Termin beim Arzt habe. \n5. denn: Ich kann nicht zur Party kommen, denn ich muss meinen Eltern helfen. \ndeshalb: Ich muss meinen Eltern helfen, deshalb kann ich nicht kommen. \nweil: Ich kann nicht zur Party kommen, weil ich meinen Eltern helfen muss. \n6. denn: Ich kann nicht zur Party kommen, denn ich renoviere meine Wohnung. \ndeshalb: Ich renoviere meine Wohnung, deshalb kann ich nicht kommen. \nweil: Ich kann nicht zur Party kommen, weil ich meine Wohnung renoviere. \n\n2- 1. Jakob kann nicht schlafen, deshalb trinkt er Milch. \n2.Steffi ist sehr nett, deshalb möchte Tim sie kennenlernen. \n3.Die Prüfung ist sehr schwierig, deshalb müssen wir viel lernen. \n4.Ulrich braucht ein neues Auto, deshalb arbeitet er sehr viel. \n5.Sie hat um 7 Uhr morgens Unterricht, deshalb steht sie sehr früh auf. \n6.Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein. \n7.Ich möchte mit meiner Freundin reden, deshalb rufe ich sie an. \n\n\n3- (keine Lösungen) \n4- 1. Ich bin traurig, weil ich krank bin. \n2.Die Musik stört mich, weil sie sehr laut ist."
          },
          {
            "page": 345,
            "text": "3.Das Essen schmeckt mir nicht, weil es zu salzig ist. \n4. Morgen kann ich nicht zur Schule gehen, weil ich einen Termin beim Arzt habe. \n5. Thomas ist sauer auf mich, weil ich ihn gestern nicht angerufen habe. \n6. Sie muss ein Geschenk kaufen, weil ihr Mann morgen Geburtstag hat. \n7. Meine Eltern haben einen neuen Fernseher gekauft, weil der alte Fernseher kaputt ist. \n8. Ich gehe ins Büro, weil ich eine Bescheinigung brauche. \n9. Er kommt später, weil er seine U-Bahn verpasst hat. \n10. Sie lernt zurzeit sehr viel, weil sie morgen einen Test schreibt. \n\n\n5- 1.Gerda mag Krimis, deshalb verpasst sie keine Krimiserie. \n2.Mathildes Hobby ist Gartenarbeit, deshalb findet sie Sendungen über Landschaftsgestaltung sehr \ninteressant. \n3.Georg interessiert sich für Biologie und Erdkunde, deshalb läuft bei ihm immer Discovery Channel. \n4. Karl mag Zeichentrickfilme, deshalb schaltet er den Fernseher nur vormittags ein. \n5. Paula informiert sich über die Ereignisse in der Welt, deshalb sieht sie sich jeden Abend die \nTagesschau an. \n6. Kathrin ist Romantikerin, deshalb sieht sie gern Liebesfilme mit Happy End. \n7. Laura mag alle Fernsehsendungen, deshalb sitzt sie immer vor dem Fernseher. \n\n\n6- 1 . weil ich heute nicht arbeiten muss. 2. weil mein Chef heute nicht da ist. 3. weil der Deutschkurs \nheute ausfällt. 4. weil das Semester zu Ende ist. 5. weil ich im Lotto gewonnen habe. 6. weil ich eine \nneue Stelle gefunden habe. 7. weil ich meine Sprachprüfung bestanden habe. 8. weil ich mich verliebt \nhabe."
          }
        ]
      },
      {
        "folge": "Folge 44",
        "title": "Auf Einladungen antworten",
        "printedPageStart": 346,
        "printedPageEnd": 347,
        "sourcePages": [
          {
            "page": 346,
            "text": "Lieber Richard, \n\nich möchte dich zu meinem Geburtstag einladen. Die Party ist am Freitag, den 13. \nApril um 18.00 Uhr. Wir feiern im „Café Starbucks“ in der Schillerstr. 15, \nHamburg. Bitte schreibe mir eine Nachricht, ob du kommen kannst. \n\nLiebe Grüße \nSara \n\n\nDanke \n• Ich habe die Einladung bekommen, \ndanke / vielen Dank! \n• Danke für die Einladung. \n• Wir haben uns über die Einladung \nsehr gefreut. \n• Vielen Dank, dass du an mich \ngedacht hast. \n• Ich wünsche dir/euch"
          },
          {
            "page": 347,
            "text": "Liebe Sara, \nvielen Dank für deine Einladung.... \n\n\nZusagen \n• Ich komme wirklich gern. \n• Ich komme bestimmt. \n• Soll ich etwas mitbringen? \n• Was wünschst du dir denn? \nAbsagen \no Es tut mir leid, aber ich muss ……………………………. \no Ich habe leider nicht frei. Ich muss …………………… \no Ich kann leider nicht kommen \no Ich hoffe, dass du auf mich nicht böse bist, aber ich muss viel \nlernen. \no Sei bitte nicht böse auf mich \no Ich bedauere es sehr, aber …………."
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 45",
        "title": "Kaufhaus-Informationen",
        "printedPageStart": 348,
        "printedPageEnd": 349,
        "sourcePages": [
          {
            "page": 348,
            "text": "4. Stock • Restaurant – Café \n• Kundenservice \n• Toiletten = Kunden–WC \n• Sportartikel = Sportkleidung \n• Möbel – Lampen \n3. Stock \n\n• Haushaltswaren \n• Tisch- und Bettwäsche \n• Handtücher \n• Spielwaren = Spielzeug \n2. Stock \n\n• Computer / TV / DVD \n• Audio – Foto – Musik \n• Elektrozubehör \n• Unterhaltungselektronik \n1. Stock \n\n• Herrenmode – Herrenbekleidung \n• Herrenschuhe \n• Herren-Unterwäsche \n• Kinderbekleidung \nErdgeschoss \n\n• Damenmode – Damenbekleidung \n• Schmuck – Uhren – Kosmetik \n• Damenschuhe \n• Damen-Unterwäsche \n• Lederwaren"
          },
          {
            "page": 349,
            "text": "Untergeschoss \n\n• Lebensmittel – Getränke \n• EC-Automat \n• Schreibwaren – Bücher \n• Zeitungen – Zeitschriften \n• Reisebüro \n\nSie sind im Kaufhaus und suchen verschiedene Dinge. Sehen Sie die Informationstafel an. \nWo finden Sie was? \n\n1. Ihr Vater braucht einen neuen Mantel für den Winter. \n________________________________________________ \n2. Ihre Mutter hat Geburtstag, Sie möchten Ihr einen neuen Ring schenken. \n________________________________________________ \n3. Für Ihren Drucker brachen Sie Papier. \n________________________________________________ \n4. Sie sind hungrig und möchten etwas zu Mittag essen. \n________________________________________________ \n5. Ihre kleine Schwester (7Jahre) kommt in die Schule. Sie wollen ihr ein Kleid schenken. \n_________________________________________________ \n6. Ihre Freunde kommen am Abend zum Essen. Sie wollen etwas Leckeres kochen. \n________________________________________ \n7. Ihr Neffe spielt gern Fußball und wünscht sich neue Schuhe für sein nächstes Spiel."
          }
        ],
        "answerPages": [
          {
            "page": 349,
            "text": "Die Lösungen: \n1. 1. Stock 2. Erdgeschoss 3. Untergeschoss 4. 4. Stock 5. 1.Stock 6. Untergeschoss 7. 1. Stock"
          }
        ]
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 41: Familie · Übung 4 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Mutter",
          "Fabian spielt gern Golf",
          "Team",
          "Camping machen"
        ],
        "answer": "die Mutter"
      },
      {
        "id": "q-2",
        "prompt": "Folge 41: Familie · Übung 4 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Prüfung ist sehr schwierig, deshalb müssen wir viel lernen",
          "die Tochter",
          "Leonie spielt gern Würfelspiele",
          "Sie hat um 7 Uhr morgens Unterricht, deshalb steht sie sehr früh auf"
        ],
        "answer": "die Tochter"
      },
      {
        "id": "q-3",
        "prompt": "Folge 41: Familie · Übung 4 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Großmutter",
          "Schlitten fahren",
          "Die Prüfung ist sehr schwierig, deshalb müssen wir viel lernen",
          "B"
        ],
        "answer": "die Großmutter"
      },
      {
        "id": "q-4",
        "prompt": "Folge 41: Familie · Übung 4 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "F",
          "die Tante",
          "mit dem Spielzeug spielen",
          "neunten"
        ],
        "answer": "die Tante"
      },
      {
        "id": "q-5",
        "prompt": "Folge 41: Familie · Übung 4 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Onkel",
          "Ich gehe ins Büro, weil ich eine Bescheinigung brauche",
          "Die Prüfung ist sehr schwierig, deshalb müssen wir viel lernen",
          "die Tochter"
        ],
        "answer": "der Onkel"
      },
      {
        "id": "q-6",
        "prompt": "Folge 41: Familie · Übung 4 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Jakob kann nicht schlafen, deshalb trinkt er Milch",
          "Karten spielen",
          "B",
          "der Sohn"
        ],
        "answer": "der Sohn"
      },
      {
        "id": "q-7",
        "prompt": "Folge 41: Familie · Übung 4 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "R",
          "Lesen",
          "der Opa"
        ],
        "answer": "der Opa"
      },
      {
        "id": "q-8",
        "prompt": "Folge 41: Familie · Übung 6 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ins Schwimmbad gehen",
          "eine – sie",
          "Reiten",
          "die Großmutter"
        ],
        "answer": "eine – sie"
      },
      {
        "id": "q-9",
        "prompt": "Folge 41: Familie · Übung 7 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "neunten",
          "die Tante",
          "Max spielt gern Tennis",
          "F"
        ],
        "answer": "F"
      },
      {
        "id": "q-10",
        "prompt": "Folge 41: Familie · Übung 7 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "Thomas ist sauer auf mich, weil ich ihn gestern nicht angerufen habe",
          "R",
          "neunten"
        ],
        "answer": "R"
      },
      {
        "id": "q-11",
        "prompt": "Folge 41: Familie · Übung 7 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Tochter",
          "a",
          "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein",
          "F"
        ],
        "answer": "F"
      },
      {
        "id": "q-12",
        "prompt": "Folge 41: Familie · Übung 7 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "F",
          "die Tante",
          "Im käfig wohnen",
          "B"
        ],
        "answer": "F"
      },
      {
        "id": "q-13",
        "prompt": "Folge 41: Familie · Übung 7 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "reite",
          "Fabian spielt gern Golf",
          "F",
          "Untergeschoss"
        ],
        "answer": "F"
      },
      {
        "id": "q-14",
        "prompt": "Folge 41: Familie · Übung 7 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Gerda mag Krimis, deshalb verpasst sie keine Krimiserie",
          "die Tochter",
          "Team",
          "Spielfilme sehen"
        ],
        "answer": "Spielfilme sehen"
      },
      {
        "id": "q-15",
        "prompt": "Folge 41: Familie · Übung 7 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Untergeschoss",
          "die Großmutter",
          "Ins Schwimmbad gehen",
          "a"
        ],
        "answer": "Ins Schwimmbad gehen"
      },
      {
        "id": "q-16",
        "prompt": "Folge 41: Familie · Übung 7 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "mit dem Spielzeug spielen",
          "Lesen",
          "Freunde treffen"
        ],
        "answer": "Freunde treffen"
      },
      {
        "id": "q-17",
        "prompt": "Folge 41: Familie · Übung 7 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Im käfig wohnen",
          "neunten",
          "Team",
          "Ich gehe ins Büro, weil ich eine Bescheinigung brauche"
        ],
        "answer": "Im käfig wohnen"
      },
      {
        "id": "q-18",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "David snowboardet gern",
          "a",
          "Rad fahren"
        ],
        "answer": "Rad fahren"
      },
      {
        "id": "q-19",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Fabian spielt gern Golf",
          "eine – sie",
          "Tischtennis spielen",
          "Karten spielen"
        ],
        "answer": "Tischtennis spielen"
      },
      {
        "id": "q-20",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Untergeschoss",
          "Camping machen",
          "eine – sie",
          "Das Essen schmeckt mir nicht, weil es zu salzig ist"
        ],
        "answer": "Camping machen"
      },
      {
        "id": "q-21",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Federball spielen",
          "F",
          "Felix hört gern Musik",
          "Reiten"
        ],
        "answer": "Federball spielen"
      },
      {
        "id": "q-22",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mache",
          "Karten spielen",
          "Schlitten fahren",
          "Leonie spielt gern Würfelspiele"
        ],
        "answer": "Karten spielen"
      },
      {
        "id": "q-23",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "David snowboardet gern",
          "Lesen",
          "Lisa backt gern Kucken",
          "die Tochter"
        ],
        "answer": "Lesen"
      },
      {
        "id": "q-24",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "pro",
          "1. Stock",
          "Ich gehe ins Büro, weil ich eine Bescheinigung brauche",
          "mit dem Spielzeug spielen"
        ],
        "answer": "mit dem Spielzeug spielen"
      },
      {
        "id": "q-25",
        "prompt": "Folge 42: Hobbys · Übung 3 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Schlitten fahren",
          "weil das Semester zu Ende ist",
          "Das Essen schmeckt mir nicht, weil es zu salzig ist",
          "Karten spielen"
        ],
        "answer": "Schlitten fahren"
      },
      {
        "id": "q-26",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das Essen schmeckt mir nicht, weil es zu salzig ist",
          "mache",
          "F",
          "Schlitten fahren"
        ],
        "answer": "mache"
      },
      {
        "id": "q-27",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Reiten",
          "Schlitten fahren",
          "F",
          "Woche"
        ],
        "answer": "Reiten"
      },
      {
        "id": "q-28",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Tischtennis spielen",
          "Felix hört gern Musik",
          "Woche",
          "Reiten"
        ],
        "answer": "Woche"
      },
      {
        "id": "q-29",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Musik stört mich, weil sie sehr laut ist",
          "streng",
          "reite",
          "David snowboardet gern"
        ],
        "answer": "streng"
      },
      {
        "id": "q-30",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "1. Stock",
          "reite",
          "der Onkel"
        ],
        "answer": "reite"
      },
      {
        "id": "q-31",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "neunten",
          "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein",
          "Die Musik stört mich, weil sie sehr laut ist",
          "Jakob kann nicht schlafen, deshalb trinkt er Milch"
        ],
        "answer": "neunten"
      },
      {
        "id": "q-32",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "Im käfig wohnen",
          "pro",
          "Robert spielt gern Gitarre"
        ],
        "answer": "pro"
      },
      {
        "id": "q-33",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Jahren",
          "Max spielt gern Tennis",
          "weil ich im Lotto gewonnen habe",
          "Camping machen"
        ],
        "answer": "Jahren"
      },
      {
        "id": "q-34",
        "prompt": "Folge 42: Hobbys · Übung 1 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "mit dem Spielzeug spielen",
          "der Opa",
          "Team",
          "B"
        ],
        "answer": "Team"
      },
      {
        "id": "q-35",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "Federball spielen",
          "reite",
          "die Tochter"
        ],
        "answer": "a"
      },
      {
        "id": "q-36",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Sie hat um 7 Uhr morgens Unterricht, deshalb steht sie sehr früh auf",
          "Karten spielen",
          "Fabian spielt gern Golf",
          "B"
        ],
        "answer": "B"
      },
      {
        "id": "q-37",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das Essen schmeckt mir nicht, weil es zu salzig ist",
          "B",
          "F",
          "Lesen"
        ],
        "answer": "B"
      },
      {
        "id": "q-38",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "David snowboardet gern",
          "B",
          "Max spielt gern Tennis"
        ],
        "answer": "B"
      },
      {
        "id": "q-39",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "weil ich im Lotto gewonnen habe",
          "pro",
          "Untergeschoss"
        ],
        "answer": "B"
      },
      {
        "id": "q-40",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "der Sohn",
          "Gerda mag Krimis, deshalb verpasst sie keine Krimiserie",
          "a",
          "B"
        ],
        "answer": "a"
      },
      {
        "id": "q-41",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "F",
          "pro",
          "Ich gehe ins Büro, weil ich eine Bescheinigung brauche",
          "B"
        ],
        "answer": "B"
      },
      {
        "id": "q-42",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "streng",
          "Lilli liest gern die Bücher",
          "Schlitten fahren"
        ],
        "answer": "a"
      },
      {
        "id": "q-43",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "streng",
          "F",
          "Karten spielen"
        ],
        "answer": "B"
      },
      {
        "id": "q-44",
        "prompt": "Folge 42: Hobbys · Übung 8 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "Brigitte läuft gern mit den Rollschuhen",
          "Camping machen",
          "Im käfig wohnen"
        ],
        "answer": "a"
      },
      {
        "id": "q-45",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Das Essen schmeckt mir nicht, weil es zu salzig ist",
          "Leonie spielt gern Würfelspiele",
          "weil ich im Lotto gewonnen habe",
          "Lilli liest gern die Bücher"
        ],
        "answer": "Lilli liest gern die Bücher"
      },
      {
        "id": "q-46",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Reiten",
          "4. Stock",
          "streng",
          "Robert spielt gern Gitarre"
        ],
        "answer": "Robert spielt gern Gitarre"
      },
      {
        "id": "q-47",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Brigitte läuft gern mit den Rollschuhen",
          "B",
          "Thomas ist sauer auf mich, weil ich ihn gestern nicht angerufen habe",
          "F"
        ],
        "answer": "Brigitte läuft gern mit den Rollschuhen"
      },
      {
        "id": "q-48",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Leonie spielt gern Würfelspiele",
          "Paul fotografiert gern",
          "Max spielt gern Tennis",
          "B"
        ],
        "answer": "Max spielt gern Tennis"
      },
      {
        "id": "q-49",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "B",
          "David snowboardet gern",
          "eine – sie"
        ],
        "answer": "David snowboardet gern"
      },
      {
        "id": "q-50",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "weil ich heute nicht arbeiten muss",
          "Gerda mag Krimis, deshalb verpasst sie keine Krimiserie",
          "Paul fotografiert gern",
          "Brigitte läuft gern mit den Rollschuhen"
        ],
        "answer": "Paul fotografiert gern"
      },
      {
        "id": "q-51",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 17",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Die Musik stört mich, weil sie sehr laut ist",
          "Fabian spielt gern Golf",
          "der Opa",
          "Untergeschoss"
        ],
        "answer": "Fabian spielt gern Golf"
      },
      {
        "id": "q-52",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 18",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Leonie spielt gern Würfelspiele",
          "mit dem Spielzeug spielen",
          "weil ich heute nicht arbeiten muss",
          "F"
        ],
        "answer": "Leonie spielt gern Würfelspiele"
      },
      {
        "id": "q-53",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 21",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Sie hat um 7 Uhr morgens Unterricht, deshalb steht sie sehr früh auf",
          "F",
          "Lisa backt gern Kucken",
          "Felix hört gern Musik"
        ],
        "answer": "Lisa backt gern Kucken"
      },
      {
        "id": "q-54",
        "prompt": "Folge 42: Hobbys · Übung 10 · item 24",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Felix hört gern Musik",
          "Robert spielt gern Gitarre",
          "Camping machen",
          "Untergeschoss"
        ],
        "answer": "Felix hört gern Musik"
      },
      {
        "id": "q-55",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 2 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "die Tante",
          "Jahren",
          "a",
          "Jakob kann nicht schlafen, deshalb trinkt er Milch"
        ],
        "answer": "Jakob kann nicht schlafen, deshalb trinkt er Milch"
      },
      {
        "id": "q-56",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 2 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "Die Prüfung ist sehr schwierig, deshalb müssen wir viel lernen",
          "Tischtennis spielen",
          "Spielfilme sehen"
        ],
        "answer": "Die Prüfung ist sehr schwierig, deshalb müssen wir viel lernen"
      },
      {
        "id": "q-57",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 2 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Lesen",
          "Sie hat um 7 Uhr morgens Unterricht, deshalb steht sie sehr früh auf",
          "der Onkel",
          "F"
        ],
        "answer": "Sie hat um 7 Uhr morgens Unterricht, deshalb steht sie sehr früh auf"
      },
      {
        "id": "q-58",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 2 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Jahren",
          "die Mutter",
          "Federball spielen",
          "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein"
        ],
        "answer": "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein"
      },
      {
        "id": "q-59",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 4 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Freunde treffen",
          "Die Musik stört mich, weil sie sehr laut ist",
          "Felix hört gern Musik",
          "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein"
        ],
        "answer": "Die Musik stört mich, weil sie sehr laut ist"
      },
      {
        "id": "q-60",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 4 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Karten spielen",
          "Das Essen schmeckt mir nicht, weil es zu salzig ist",
          "Fabian spielt gern Golf",
          "Felix hört gern Musik"
        ],
        "answer": "Das Essen schmeckt mir nicht, weil es zu salzig ist"
      },
      {
        "id": "q-61",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 4 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Leonie spielt gern Würfelspiele",
          "pro",
          "Thomas ist sauer auf mich, weil ich ihn gestern nicht angerufen habe",
          "Team"
        ],
        "answer": "Thomas ist sauer auf mich, weil ich ihn gestern nicht angerufen habe"
      },
      {
        "id": "q-62",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 4 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "eine – sie",
          "der Onkel",
          "Lisa backt gern Kucken",
          "Meine Eltern haben einen neuen Fernseher gekauft, weil der alte Fernseher kaputt ist"
        ],
        "answer": "Meine Eltern haben einen neuen Fernseher gekauft, weil der alte Fernseher kaputt ist"
      },
      {
        "id": "q-63",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 4 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "weil das Semester zu Ende ist",
          "a",
          "B",
          "Ich gehe ins Büro, weil ich eine Bescheinigung brauche"
        ],
        "answer": "Ich gehe ins Büro, weil ich eine Bescheinigung brauche"
      },
      {
        "id": "q-64",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 5 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "Gerda mag Krimis, deshalb verpasst sie keine Krimiserie",
          "weil ich im Lotto gewonnen habe",
          "Camping machen"
        ],
        "answer": "Gerda mag Krimis, deshalb verpasst sie keine Krimiserie"
      },
      {
        "id": "q-65",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 5 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Woche",
          "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein",
          "weil ich im Lotto gewonnen habe",
          "Kathrin ist Romantikerin, deshalb sieht sie gern Liebesfilme mit Happy End"
        ],
        "answer": "Kathrin ist Romantikerin, deshalb sieht sie gern Liebesfilme mit Happy End"
      },
      {
        "id": "q-66",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 6 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Paul fotografiert gern",
          "Lesen",
          "weil ich heute nicht arbeiten muss",
          "F"
        ],
        "answer": "weil ich heute nicht arbeiten muss"
      },
      {
        "id": "q-67",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 6 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "weil das Semester zu Ende ist",
          "Brigitte läuft gern mit den Rollschuhen",
          "Reiten",
          "Lisa backt gern Kucken"
        ],
        "answer": "weil das Semester zu Ende ist"
      },
      {
        "id": "q-68",
        "prompt": "Folge 43: Kausalsätze: weil, denn, deshalb · Übung 6 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Der Kühlschrank ist leer, deshalb kaufen wir im Supermarkt ein",
          "mache",
          "R",
          "weil ich im Lotto gewonnen habe"
        ],
        "answer": "weil ich im Lotto gewonnen habe"
      },
      {
        "id": "q-69",
        "prompt": "Folge 45: Kaufhaus-Informationen · Answer key · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Max spielt gern Tennis",
          "Karten spielen",
          "1. Stock",
          "Ins Schwimmbad gehen"
        ],
        "answer": "1. Stock"
      },
      {
        "id": "q-70",
        "prompt": "Folge 45: Kaufhaus-Informationen · Answer key · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "weil das Semester zu Ende ist",
          "Ins Schwimmbad gehen",
          "streng",
          "Untergeschoss"
        ],
        "answer": "Untergeschoss"
      },
      {
        "id": "q-71",
        "prompt": "Folge 45: Kaufhaus-Informationen · Answer key · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "4. Stock",
          "Jahren",
          "der Onkel",
          "B"
        ],
        "answer": "4. Stock"
      },
      {
        "id": "q-72",
        "prompt": "Folge 45: Kaufhaus-Informationen · Answer key · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Untergeschoss",
          "Tischtennis spielen",
          "Jakob kann nicht schlafen, deshalb trinkt er Milch",
          "weil ich im Lotto gewonnen habe"
        ],
        "answer": "Untergeschoss"
      }
    ],
    "sourcePageCount": 45,
    "answerPageCount": 7
  },
  {
    "id": "beruf-computer-sport",
    "title": "Work Values, Office Tasks, Computer/Internet & Sport",
    "source": "Folge 46-50",
    "pages": "PDF pages 350-358",
    "summary": "Source workbook material from Folge 46-50: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 46",
        "title": "Was ist im Beruf wichtig?",
        "printedPageStart": 350,
        "printedPageEnd": 350,
        "sourcePages": [
          {
            "page": 350,
            "text": "Was finden Sie im Büro am wichtigsten:"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 47",
        "title": "Computer und Internet",
        "printedPageStart": 351,
        "printedPageEnd": 352,
        "sourcePages": [
          {
            "page": 351,
            "text": "351"
          },
          {
            "page": 352,
            "text": "352"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 48",
        "title": "Geschäftsbriefe",
        "printedPageStart": 353,
        "printedPageEnd": 355,
        "sourcePages": [
          {
            "page": 353,
            "text": "Absender \n\n\nDatum \n\n\nEmfänger \n\n\nBetreff \n\n\nAnrede \n\n\nText \n\n\nGroßformel \n\n\nUnterschrift \n\n\nAnrede \n\n- Sehr geehrte Damen und Herren \n- Sehr geehrte Frau …., \n- Sehr geehrter Herr ….,"
          },
          {
            "page": 354,
            "text": "danken \n\n- Vielen Dank für ...... \n- Vielen Dank für Ihr Schreiben / Ihre E-Mail vom 01.08.2020 \n- Vielen Dank, dass Sie uns Ihre neue Software vorstellen möchten \n\neinen Termin vorschlagen \n\n- Die folgenden Termine kann ich Ihnen anbieten/vorschlagen: ... \n- Ich hoffe, dass Ihnen die Termine passen. \n- Wann passt es Ihnen am besten? - Geben Sie mir bitte bis zum ... \nBescheid. \n- Passt es Ihnen auch am ...? \n\n\neinen Termin zusagen \n\n- Der ... passt mir sehr gut. Ich komme um ... zu Ihnen. \n- Ich freue mich auf ein interessantes Gespräch mit Ihnen. \n\n\neinen Termin absagen / verschieben \n\n- Bitte entschuldigen Sie, dass ich den Termin absagen muss. \n- Ich würde gern kommen, aber ... \n- Ich bin seit gestern krank und muss leider unseren Termin verschieben. \n\nGruß \n\n- Mit freundlichen Grüßen"
          },
          {
            "page": 355,
            "text": "Schreiben Sie E-Mail Sie möchten im Kurs B2 anmelden \n\nDu musst folgendes beachten: \n\n- Kurs B2 ab 13.04. anmelden \n– Vormittag, Nachmittag oder am Abend? \n\n\nBeispiel: \n\nXaver Manschi \nStadtplatz 7 \n94341 Salching \n\nIFP \nRana Witter \nBahnhofstraße 14 \n94315 Staubing \nStaubing, 28.02.2019 \n\nAnmeldung zum B2 - Kurs \n\nSehr geehrte Frau Witter, \n\nich möchte mich für den B2 - Kurs, ab 13.04.2019 anmelden. \nIch möchte gerne in den Kurs am Nachmittag. \nVielen Dank. \n\nFreundliche Grüße \n\nVorname Name"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 49",
        "title": "Tätigkeiten im Büro",
        "printedPageStart": 356,
        "printedPageEnd": 356,
        "sourcePages": [
          {
            "page": 356,
            "text": "Im Büro \n\nüber Tätigkeiten im Büro berichten:"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 50",
        "title": "Interessen und Sport",
        "printedPageStart": 357,
        "printedPageEnd": 358,
        "sourcePages": [
          {
            "page": 357,
            "text": "Haben Sie ein Hobby? \nWelche Hobbys haben Sie? \n\n• Ich schaue gerne Filme mir gerne Filme (Serien) an. \n• Ich höre gerne Musik Ich fahre gern Rad. \n• Ich spiele Tennis, Fußball, Golf, Basket ball. \n• Ich gehe gern schwimmen. \n• Ich gehe gern ins Fitnessstudio. \n• Ich gehe gerne aus. \n• Ich treffe mich gern mit meinen Freunden im Café. \n• Ich lese viel. Ich lese nicht oft. \n• Ich schlafe aus. \n• Ich sammle Briefmarken, Münzen. \n• Ich finde Fußball spannend langweilig. \n• In meiner Freizeit mache ich ........ \n• In meiner Freizeit lege ich die Füße hoch. \n• Ich gehe oft auf Flohmärkte. \n• Ich verbringe viel Zeit auf Facebook /Skype (mit Tanzen / Lesen) \n• Ich verbringe viel Zeit vor dem Fernseher / Computer. \n• Ich interessiere mich für Sport. \n• Ich bin süchtig nach Playstation. \n• In meiner Freizeit erhole ich mich. \n• Wenn ich frei habe, ruhe ich mich aus. \n• Wenn ich Zeit habe, entspanne ich mich. \n• (Fernsehen, Radio hören, Bücher lesen gehören zu den beliebtesten Freizeitaktivität der \nDeutschen) \n• Viele Bürger beschäftigen sich heute mit dem Handy. \n• Die Deutschen gehen gern ins Kino, Theater, Konzert. \n• Caffè trinken und Kuchen essen sind auch Hobbys. \n\nJetzt bist du daran. Was machst du in deiner Freizeit? Schreib 10 Zielen über deine \nHobbys! \n\nIn meiner Freizeit besuche ich meine Familie. Ich spiele auch Fußball mit meinen Freunden. Ich \nverbringe viel Zeit vor dem Computer. Ich bin süchtig nach Spielen. Manchmal gehe ich mit meiner \nFreundin ins Kino. Oder ich gehe ins Fitnessstudio. Aber am liebsten schlafe ich aus. Ich finde \nBücher Lesen langweilig."
          },
          {
            "page": 358,
            "text": "Machen Sie Sport? \nTreiben Sie Sport? \n\nInteressieren Sie sich für Sport? \nja, ich interessiere mich für die meisten Sportarten. \n\n• Ich spiele Tennis und jogge (Laufe) \n• Ich bin Sportler. \n• Ich bewege mich viel. \n• Hätten Sie Lust auf eine Runde Golf? \n• Ich spiele gut Fußball. \n• Ich spiele gern Schach. \n• wir gehen am Wochenende meistens wandern. \n• Ich gehe langlaufen. Ich gehe schwimmen. \n• Ich gehe joggen. \n• Ich gehe Ski fahren. \n\nWie oft gehen Sie ins Fitnessstudio? \nIch trainiere drei Mal in der Woche. \n\n• Ich laufe Marathon. \n• Am besten mache ich Sport draußen in der Natur. \n• Sport macht mir Spaß. \n• \nWas ist dein Lieblingssport? \nMein Lieblingssport ist Radfahren. \n\n• Markus ist sportlich X Lisa ist unsportlich. \n\nSchreiben Sie bitte einen Text (10 Zeilen) \n\n- Sind Sie ein sportlicher Mensch? \n- Wann machen Sie Sport? \n- Wie oft gehen Sie mit der Familie aus? \n- haben Sie Fahrrad? \n- Fahren Sie gern Rad? \n- Sind Sie Mitglied in einem Sportverein? \n- Warum macht man Sport?"
          }
        ],
        "answerPages": []
      }
    ],
    "interactiveQuestions": [],
    "sourcePageCount": 9,
    "answerPageCount": 0
  },
  {
    "id": "temporal-umzu-damit-bank",
    "title": "Time, Purpose Clauses, Money & Banking",
    "source": "Folge 51-55",
    "pages": "PDF pages 359-372",
    "summary": "Source workbook material from Folge 51-55: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 51",
        "title": "Temporale Präpositionen",
        "printedPageStart": 359,
        "printedPageEnd": 361,
        "sourcePages": [
          {
            "page": 359,
            "text": "Präposition Bedeutung Beispiel \nmit Akkusativ \ngegen ungenaue Uhrzeit Lisa kommt gegen Mittag. \num genaue Uhrzeit Ich gehe um 8.00 Uhr in die Schule. \nfür Zeitspanne Ich fahre für zehn Tage nach Ägypten \nüber länger als Ich arbeite über 10 Stunden pro Tag \nmit Dativ \nseit Vergangenheit bis jetzt Seit ihrer Hochzeit ist sie glücklich. \nbis Ende Markus wartet bis 10.00 Uhr. \nvon - bis Beginn und Ende Ich arbeite von 8.00 bis 14.00 Uhr. \naus zeitliche Herkunft Dieses Gebäude stammt aus dem 18. Jahrhundert. \nbei während Beim Essen sehen wir fern. \nab Start Ab sofort mache ich eine Diät. \nvon... an Startpunkt in der Zukunft Von morgen an, gehe ich früher schlafen. \nan Tag Am Sonntag fahre ich an den Strand. \nin zukünftiger Zeitpunkt In einer Woche habe ich eine Prüfung."
          },
          {
            "page": 360,
            "text": "in ungenaue Zeitdauer In den letzten Wochen war ich krank. \nnach nach etwas anderem Nach dem Unterricht esse ich zu Mittag. \nvor vor etwas anderem Vor dem Abendessen dusche ich. \nzwischen Beginn und Ende Zwischen dem 23. Dezember und dem 6. Januar haben \nwir Weihnachtsferien. \nMit Genetiv \nwährend gleichzeitig Während der Lehrer erklärt, müssen die Schüler \naufpassen. \ninnerhalb in einem bestimmten \nZeitraum \nInnerhalb einer Woche muss die Arbeit fertig sein. \naußerhalb nicht in einem bestimmten \nZeitraum \nAußerhalb der Bürostunden befindet sich niemand \nhier. \n\n(1) Ergänzen Sie die fehlenden Präpositionen. \n\n1. Der Unterricht beginnt _________ einer Stunde. \n2. Der Brief ist _________ drei Tagen hier angekommen. \n3. Die Schüler haben _________ 10.00 Uhr Unterricht. \n4. Alle Kinder sind _________ der Woche in der Schule. \n5. Ich habe _________ Tagen nicht gut geschlafen. \n6. Ich habe sie _________ zehn Jahren in Berlin getroffen. \n7. Der Zug kommt pünktlich _________ 20.00 Uhr. \n8. Lisa ist nicht da. Sie ist _________ drei Tagen in die Türkei gefahren. \n9. ____________ dem Gewitter wurde das Wetter kühler. \n10. Wir können _________ Sonntag ins Kino gehen. \n11. Es war dieses Jahr _________ August sehr regnerisch. \n12. Sie macht _________ Vormittag immer einen Spaziergang. \n13. Ich warte schon _________ einer Stunde. \n14. Wir treffen uns __________einer Stunde. \n15. _________dem Essen muss man die Hände waschen. \n\n(2) Wählen Sie die richtige Präposition. \n\n1. ....................... des Essens können wir über deine Pläne sprechen \na) in b) an c) während d) von \n2. Ich erwarte dich morgen ..................... 10h. \na) um b) in c) an d) zwischen \n3. Ich fahre .......................das Wochenende in die Berge \na) über b) an c) von d) vor \n4. Ich brauche Ihre Antwort ..........................einer Woche. \na) über b) innerhalb c) während d) an \n5. ...................... Kochen hört sie immer Musik."
          },
          {
            "page": 361,
            "text": "a) beim b) während c) in d) innerhalb \n6. ..................... dem 5. und 10. Mai fahre ich in Urlaub. \na) im b) an c) von d) zwischen \n7. Wir können ...............Abend in eine Kneipe gehen. \na) an b) am c) vor d) von \n8. Wohin gehst du ................... dem Unterricht? \na) von b) nach..........c) zwischen d) über \n9. Ich habe deinen Bruder .......... drei Wochen kennen gelernt. \na) seit b) von c) in d) vor \n10. Ich bin nicht sicher, wann der Zug ankommt. Ich glaube .................. sieben Uhr. \na) gegen b) um c) für d) während \n\n(3) Setze die passende temporale Präposition ein. \nam 4x - um 2x - ab 2x - seit - bis - vor einer - vor einem - vor dem - seit einem - seit einer - \nnach dem 2x - bei der - in einer 2x \n1. _______________ Stunde bin ich nach Hause gekommen. \n2. _______________ Stunde komme ich nach Hause. \n3. _________ letzter Woche habe ich eine neue Arbeit. \n4. _________ nächster Woche habe ich eine neue Arbeit. \n5. ____________ Monat bin ich umgezogen. \n6. _____________ Monat wohne ich in meiner neuen Wohnung. \n7. _________ Wochenende treffe ich meine Freunde. \n8. _________ 18 Uhr sind wir verabredet. \n9. Wann hast du Zeit. – Ich arbeite __________ 16 Uhr. Danach können wir uns treffen. \n- Oh, das ist schade. Ich muss ________ 17 Uhr arbeiten. Sollen wir uns morgen treffen? \n- Morgen geht leider nicht. Wie wäre es ________ Samstag? \n- ___________ Samstag ist super. Wie wäre es ____________ Frühstück, _________ \n11 Uhr? \n- Das finde ich gut. Dann haben wir viel Zeit. Ich muss erst ___________ Nachmittag \nwieder zu Hause sein. Wir bekommen Besuch von Freunden. \n10. Gestern habe ich zu viel gegessen. Deshalb bin ich ______________ Essen spazieren gegangen. \n11. Ich habe noch gar keinen Hunger. Ich glaube, ich gehe ____________ Essen noch spazieren. \n12. Wir haben ____________ Arbeit viel gelacht. \n13. Wo bleibst du? Ich warte schon ______ einer Stunde. \n14. Ich komme _______ einer Stunde zu dir nach Hause."
          }
        ],
        "answerPages": [
          {
            "page": 361,
            "text": "Die Lösungen: \n\n1- 1.in oder nach 2. vor 3. um 4. in 5. seit 6. vor 7. um 8. vor 9.nach 10. am 11. im 12. am 13. \nseit 14. in 15. Vor \n2- 1. C 2. A 3. A 4. B 5. A 6. D 7. B 8. B 9. A 10. A \n3- 1. vor einer 2. In einer 3. seit 4. ab 5. Vor einem 6. Seit einem 7. Am 8. Um 9. Bis – ab- am- \nam – nach dem – um – am 10. Nach dem 11. Vor dem 12. Bei der 13. Seit 14. In einer"
          }
        ]
      },
      {
        "folge": "Folge 52",
        "title": "um ... zu",
        "printedPageStart": 362,
        "printedPageEnd": 365,
        "sourcePages": [
          {
            "page": 362,
            "text": "Um ….. zu und damit → Absicht / Zweck \n\n\num… zu + Inf. → dasselbe Subjekt \n→ Nebensatz \n\nSubjekt Subjekt \n\nIch fahre mit dem Auto. Ich möchte am Bahnhof pünktlich sein. \n\nSubjekt Ohne Subjekt \n\nIch fahre mit dem Auto, um am Bahnhof pünktlich zu sein \n\nFrage → Warum/ wozu/ Weshalb \n\nWarum / Wozu / Weshalb fährst du mit dem Auto? \n\nSubjekt Subjekt \n\nSara spricht mit dem Lehrer. Sara erklärt dem Lehrer ihr Problem. \n\nSubjekt Ohne Subjekt \n\nSara spricht mit dem Lehrer, um ihm ihr Problem zu erklären \n\n\nIch mache eine Diät. \nIch möchte abnehmen. Ich mache eine Diät, um abzunehmen Warum machst du eine Diät?"
          },
          {
            "page": 363,
            "text": "damit → verschiedene Subjekte! \n→ Nebensatz \n\nSubjekt Subjekt \n\nIch rufe meinen Vater an. Er soll mich nächste Woche besuchen. \n\nSubjekt Subjekt \n\nIch rufe meinen Vater an, damit er mich nächste Woche besucht. \n\nSubjekt Subjekt \n\nSara spricht mit dem Lehrer. Der Lehrer soll ihr das Mathe Problem erklären \n\nSubjekt Subjekt \n\nSara spricht mit dem Lehrer, damit er ihr das Problem erklärt. \nIch bin nach München \ngekommen. \nIch will Deutsch lernen. \nIch bin nach München gekommen, um \nDeutsch zu lernen. \nWarum bist du nach \nMünchen gekommen? \nLisa geht morgen in die \nStadt. \nSie möchte sich neue \nSchuhe kaufen. \nLisa geht morgen in die Stadt, um sich \nneue Schuhe zu kaufen. \nWozu geht Lisa morgen in die \nStadt? \nIch gehe ins Reisebüro. \nIch möchte eine Reise \nbuchen. \nIch gehe ins Reisebüro, um eine Reise \nzu buchen. \nWarum gehst du in \nReisebüro? \nIch fahre nach Afrika. \nIch möchte Tiere \nfotografieren. \nIch fahre nach Afrika, um Tiere zu \nfotografieren. \nWeshalb fährst du nach \nAfrika? \nIch rufe den Arzt an. \nIch möchte einen Termin \nvereinbaren. \nIch rufe den Arzt an, um einen Termin \nzu vereinbaren. \nWozu rufst du den Arzt? \nIch lerne Deutsch. \nIch möchte in Deutschland \nstudieren. \n\nIch lerne Deutsch, um in Deutschland \nzu studieren \nWarum lernst du Deutsch?"
          },
          {
            "page": 364,
            "text": "1- Formulieren Sie Sätze mit damit oder um ….. zu. \n\n➢ Paolo lernt Deutsch, (in Deutschland - studieren) \nPaolo lernt Deutsch, um in Deutschland zu studieren. \n\n1- Ich bringe mein Auto in die Werkstatt, (es- dort- repariert werden) \n…………………………………………………………………………………………………………….............................. \n2- Christina lernt täglich 20 neue Wörter, (ihren Wortschatz- erweitern) \n…………………………………………………………………………………………………………….............................. \n3- Ich mache meine Wohnung sauber, (die Gäste – sich wohlfühlen) \n…………………………………………………………………………………………………………….............................. \nDie Mutter schickt ihren \nSohn in die Schuhe. \nEr soll dort lernen \n\nDie Mutter schickt ihren Sohn in die \nSchule, damit er dort lernen. \nWarum schickt die Mutter \nihren Sohn in die Schule? \nMichael hilft Sabina. \nSabina schreibt gute Noten. \nMichael hilft Sabina, damit Sabina gute \nNoten schreibt. \nWarum hilft Michael Sabina? \nDu musst mir helfen. \nIch komme sonst zu spät. \nDu musst mir helfen, damit ich nicht zu \nspät komme. \nWarum muss ich dir helfen?"
          },
          {
            "page": 365,
            "text": "4- Marita nimmt ein Schlafmittel, (besser – einschlafen können) \n…………………………………………………………………………………………………………….............................. \n5- Ich brauche eine Stunde Zeit, (auf den Kurs- sich gut vorbereiten können) \n…………………………………………………………………………………………………………….............................. \n6- Andreas macht den Fernseher aus, (Katja – ihre Hausaufgaben – machen können) \n……………………………………………………………………………………………………………...................... ........ \n7- Schenkst du mir ein Auto, (ich- nie mehr – mit der U-Bahn- fahren müssen)? \n…………………………………………………………………………………………………………….............................. \n\n2- „damit“ oder „um….. zu“ ? \n\nWozu lernen diese Menschen Deutsch? Bilden Sie Finalsätze. \n\n➢ Miriam \"Ich möchte eine indogermanische Sprache kennen lernen\" \n\n• Miriam lernt Deutsch, um eine indogermanische Sprache kennen zu lernen \n\n\n1- Jan „Meine Frau kann sich mit mir in ihrer Muttersprache unterhalten“ \n…………………………………………………………………………………………………………….............................. \n2- John „Mein Chef lässt mich endlich in Ruhe” \n…………………………………………………………………………………………………………….............................. \n3- Karol „Ich kann mit meinen deutschen Geschäftspartnern besser verhandeln“ \n…………………………………………………………………………………………………………….............................. \n4- Luigi „Meine Schwiegereltern freuen sich.“ \n…………………………………………………………………………………………………………….............................. \n5- Igor „ich kann meinen Lieblingsautor auf Deutsch lesen“ \n…………………………………………………………………………………………………………….............................. \n6- Sarah „Ich möchte in Österreich Medizin studieren.“ \n…………………………………………………………………………………………………………….............................. \n7- Robert „Ich kann einfacher mit deutschen Mädchen flirten.“ \n…………………………………………………………………………………………………………….............................. \n\n\n3- Verbinde die Sätze, verwende dabei damit oder um… zu + Infinitiv \n\n1. Wir beeilen uns. Wir wollen die Vorlesung nicht versäumen."
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 53",
        "title": "damit",
        "printedPageStart": 366,
        "printedPageEnd": 369,
        "sourcePages": [
          {
            "page": 366,
            "text": "___________________________________________________________________ \n2. Wir fahren in Urlaub. Die Kinder sollen viel an der frischen Luft sein. \n___________________________________________________________________ \n3. Der Student fragt den Professor. Er will alles verstehen. \n___________________________________________________________________ \n4. Das Mädchen geht ins Geschäft. Sie will Brot kaufen. \n___________________________________________________________________ \n5. Ich schicke meine Tochter für ein Jahr nach London. Sie lernt dort Englisch. \n___________________________________________________________________ \n6. Der Vater bleibt im Büro. Er will noch etwas arbeiten. \n___________________________________________________________________ \n7. Die Freunde fahren ans Meer. Sie wollen dort die Ferien verbringen. \n___________________________________________________________________ \n8. Karl muss seine E-Mails jeden Tag kontrollieren. Sie überfüllen seine Mailbox nicht. \n___________________________________________________________________ \n9. Das Hotelzimmer muss vor Mittag aufgeräumt werden. Die Gäste können sich wohl \nfühlen. \n___________________________________________________________________ \n10. Am Wochenende will ich zu Hause bleiben. Ich verbringe mehr Zeit mit meinen Kindern. \n__________________________________________________________________ \n\n4- Was passt zusammen? \na) Ich brauche Geld… \nb) Er spart… \nc) Eva arbeitet… \nd) Du hast ein Ferienjob… \ne) Ich arbeite in einem Tierheim… \n\n\n1-____ damit ich Erfahrung mit Tieren sammle. \n2- ____ um sich ein Auto zu kaufen. \n3- ____ damit du Geld verdienst. \n4- ____ um sich neue Klamotten zu kaufen. \n5- ____ um eine Reise zu bezahlen."
          },
          {
            "page": 367,
            "text": "5- Schreib auf, wozu Simon sein Taschengeld braucht: \n\n\n6- Bilde Sätze mit um…zu + Infinitiv: \na) Ich brauche Geld. Ich möchte eine neue Tasche kaufen. \nb) Sonja spart ihr Taschengeld. Sie will später nach Italien reisen. \nc) Er nimmt Nachhilfeunterricht. Er möchte gut in Deutsch sein. \nd) Sie hat ein Ferienjob. Sie möchte Geld verdienen. \ne) Du brauchst Geld. Du geht ins Kino. \n7- Bilde Sätze mit um..zu oder damit! \n(1) Wir fahren zum Bahnhof (die Gäste abholen) \n________________________________________________________ \n(2) Karl muss sich beeilen (sich nicht verspäten) \n_________________________________________________________ \n(3) Man isst viel Obst und Gemüse (gesund leben) \n_____________________________________________________ \n(4) Mutti ruft den Mechaniker (die Waschmaschine reparieren) \n_________________________________________________________ \n(5) Ich gebe dir ein Foto (nicht vergessen) \n_________________________________________________________ \n\n8- Was fehlt: um..zu oder damit? Ergänze die Sätze! \n\n1. Ich fahre in die Stadt,___einen neuen Fernseher___kaufen. \n2. Udo braucht ein Wörterbuch,___den Text übersetzen____können. \n3. Ilse holt Backpulver,____ihre Mutter Kuchen ____bäckt. \n4. Ich gehe zum Zahnarzt,___er mein Zahn ___plombiert. \nPizza bestellen € 5 \nMit Freunden ausgehen können € 15 \nHandy aufladen € 25 \nNeue Hose kaufen € 40"
          },
          {
            "page": 368,
            "text": "5. Die Eltern geben den Kinder Geld,___sie ins Kino gehen___können. \n9- Verbinde die Sätze mit um..zu oder damit! \n(1) Der Vater sucht überall seine Brille. Er will die Sportzeitung lesen. \n______________________________________________________________________ \n(2) Ich arbeite Tag und Nacht. Meine Familie kann besser leben. \n______________________________________________________________________ \n(3) Wir müssen die Flugtickets nach Spanien besorgen. Wir machen dort Urlaub. \n______________________________________________________________________ \n(4) Frau Müller schickt ihren Sohn ins Geschäft. Er soll Brot und Milch kaufen. \n______________________________________________________________________ \n(5) Paul und Karin gehen indi Bibliothek. Sie wollen sich die Pflichtliteratur ausleihen. \n\n\n10- Ergänze die Sätze! \n\n(1) Mein Bruder lernt Italienisch, um .................................................................................................................................... \n(2) Die Eltern arbeiten sehr viel, damit .................................................................................................................................... \n(3) Karl geht auf den Sportplatz, um .................................................................................................................................... \n(4) Der Vater repariert das Auto, damit .................................................................................................................................... \n(5) Ich lerne fleißig, um ...................................................................................................................................."
          }
        ],
        "answerPages": [
          {
            "page": 368,
            "text": "Die Lösungen: \n\n1- 1. Ich bringe mein Auto in die Werkstatt, damit es dort repariert wird. 2. Christina lernt täglich 20 \nneue Wörter, um ihren Wortschatz zu erweitern. 3. Ich mache meine Wohnung sauber, damit die \nGäste sich wohlfühlen. 4. Marita nimmt ein Schlafmittel, um besser einschlafen zu können. 5. Ich \nbrauche eine Stunde Zeit, um auf den Kurs sich gut vorbereiten zu können. 6. Andreas macht den \nFernseher aus, damit Katja ihre Hausaufgaben machen kann. 7. Schenkst du mir ein Auto, damit ich \nnie mehr mit der U-Bahn fahren muss? \n\n2- 1. Ich lerne spanisch, damit meine Frau sich mit mir in ihrer Muttersprache unterhalten kann. 2. Ich \nerledige meine Aufgabe, damit mein Chef mich endlich in Ruhe lässt. 3. Ich studi ere Psychologie, um \nmit meinen deutschen Geschäftspartnern besser zu verhandeln. 4. Ich gebe meinen Schwiegereltern"
          },
          {
            "page": 369,
            "text": "die Geschenke, damit sie sich freuen. 5. Ich lerne Deutsch, um mei nen Lieblingsautor auf Deutsch zu \nlesen. 6. Ich lerne Deutsch, um in Österreich Medizin zu studieren 7. Ich lerne Deutsch, um einfacher \nmit deutschen Mädchen zu flirten. \n\n3- 1.Wir beeilen uns, um die Vorlesung nicht zu versäumen. 2.Wir fahren in Urlaub, damit die Kinder viel \nan der frischen Luft sein zu sollen. 3.Der Student fragt den Professor, um alles zu verstehen. 4. Das \nMädchen geht ins Geschäft, um Brot zu kaufen. 5.Ich schicke meine Tochter für ein Jahr nach London, \ndamit sie dort Englisch lernt. 6. Der Vater bleibt im Büro, um noch etwas zu arbeiten. 7.Die Freunde \nfahren ans Meer, um dort die Ferien zu verbringen. 8.Karl muss seine E-Mails jeden Tag kontrollieren, \ndamit Sie seine Mailbox nicht überfüllen. 9. Das Hotelzimmer muss vor Mittag aufgeräumt werden, \ndamit die Gäste sich wohl fühlen. 10. Am Wochenende will ich zu Hause bleiben, um mehr Zeit mit \nmeinen Kindern zu verbringen. \n\n4- a)5 b)4 c)2 d)3 e)1 \n\n5- 1. Ich brauche 5 Euro, um Pizza zu bestellen. 2. Ich brauche 15 Euro, um mit Freunden auszugehen. 3. \nIch brauche 25 Euro, um Handy aufzuladen. 4. Ich brauche 40 Euro, um Neue Hose zu kaufen. \n\n6- a. Ich brauche Geld, um eine neue Tasche zu kaufen. B. Sonja spart ihr Taschengeld, um später \nnach Italien zu reisen. C. Er nimmt Nachhilfeunterricht, um gut in Deutsch zu sein. D. Sie hat \nein Ferienjob, um Geld zu verdienen. E. Du brauchst Geld, um ins Kino zu gehen. \n\n7- 1- Wir fahren zum Bahnhof, um die Gäste abzuholen. 2 - Karl muss sich beeilen, um sich nicht zu \nverspäten. 3- Man isst viel Obst und Gemüse, um gesund zu leben. 4 - Mutti ruft den Mechaniker, \ndamit er die Waschmaschine repariert. 5- Ich gebe dir ein Foto, um nicht zu vergessen. \n\n8- 1. um zu 2. um zu 3. damit 4. damit 5. um zu \n\n9- 1- Der Vater sucht überall seine Brille, um die Sportzeitung zu lesen. 2 - Ich arbeite Tag und Nacht, \ndamit Meine Familie besser leben kann. 3 - Wir müssen die Flugtickets nach Spanien besorgen, um \ndort Urlaub zu machen. 4- Frau Müller schickt ihren Sohn ins Geschäft, damit Er Brot und Milch kaufen \nsoll. 5- Paul und Karin gehen indi Bibliothek, um sich die Pflichtliteratur ausleihen zu wollen. \n\n10- 1.Mein Bruder lernt Italienisch, um nach Italien zu fliegen. 2. Die Eltern arbeiten sehr viel, damit wir \nbesser leben. 3. Karl geht auf den Sportplatz, um i hre Freundin zu treffen. 4. Der Vater repariert das \nAuto, damit seine Frau es fahren will. 5.Ich lerne fleißig, um die Prüfung zu bestehen."
          }
        ]
      },
      {
        "folge": "Folge 54",
        "title": "Geld und Banken",
        "printedPageStart": 370,
        "printedPageEnd": 371,
        "sourcePages": [
          {
            "page": 370,
            "text": "Das Geld \nausgeben صرف Das Ausgehen خروج \nDie Miete الإيجار Das Internet الاني نت \nDie Energie الطاقة Das Telefon التليفون \nDie Kommunikation, en الاتصال Die Nahrungsmittel مواد غذائية \nDas Benzin بي ين öffentliche Verkehrsmittel وسائل المواصلات \nDas Auto سيارة Das Getränk, e مشىوب \nDie Kleidung ملابس Die Bildung تعليم \nDas Reisen سفر Die Gesundheit الصحة \nDie Möbel الأثاث Der Lohn أجر وراتب \nDie Haushaltungsgräte الأجهزة المي لية Die Lohnerhöhung زيادة الرواتب \nDie Freizeit وقت الفراغ Das Gehalt الراتب \nDer Verkehr حركة المرور Das Einkommen دخل \nverdienen رب ح zahlen=bezahlen دفع وسدد \nsparen ادخر Die Sozialabgaben الضمانالاجتماعي \nBrutto إجمالي Netto صاف \nDie Steuer, n صر يبة Die Gebühr, en رسوم / إتاوة \nDie Rente معاش / تقاعد Das Finanzamt, er مصلحة الض ائب \nDas Einkaufen التسوق Der Konsum الاستهلاك \nDie Banken \nDas Konto, Konten حساب بنكي Sperren أغلق"
          },
          {
            "page": 371,
            "text": "Die Sparkasse, n صندوق توفير / بنك Die Währung, en عملة \nDas Girokonto صندوق جاري Der Wechselkurs سعر الضف \nEröffnen فتح Wechseln غير وبدل وحول \nEinzahlen أودع Umtauschen بدل وحول \nAbheben سحب Der Schein استمارة \nüberweisen حول المبلغ Die Überweisung تحويل \nDie Münze, n عملة معدنية Die Geldbörse, n محفظة النقود \nDas Bargeld أموال نقدية Das Kleingeld فكة \nDas Portmonee, s محفظة Aufnehmen سجل \nDas Darlehen قرض / سلفة Der Scheck شيك \neinlösen أسي د قيمة / فك Die Zinsen فوائد \nDie Anzahlung, en دفعة مقدمة / عربون Die Ersparnisse مدخرات \nDer Kontostand رصيد الحساب Der Kontoauszug كشف حساب بنكي \nDer Betrag مبلغ وقيمة Entnehmen سحب \nDas Sparbuch دفيتوفير Der Geldautomat ماكينة الضاف الآلي \n\n• Ich gebe viel / wenig / ein bisschen aus. \n• Ich verdiene viel / wenig Geld. \n• Ich kaufe oft / manchmal / regelmäßig ..... \n• Ich spare Geld / Energie. \n• Er gehe in die Rente. \n• Er bekommt eine Rente. \n• Er hat gutes Einkommen. \n• Ich möchte gern ein Konto eröffnen. \n• Er möchte 100 Euro einzahlen. \n• Formular ausfüllen \n• Möchten Sie Geld abheben. \n• Führen Sie Ihre Karte ein. \n• Geben Sie Ihre Geheimzahl ein dann drücken Sie Die Taste (Bestätigung). \n• Wählen Sie den Betrag. \n• Entnehmen Sie Ihre Karte! Ich möchte 100 Euro überweisen."
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 55",
        "title": "Konto eröffnen",
        "printedPageStart": 372,
        "printedPageEnd": 372,
        "sourcePages": [
          {
            "page": 372,
            "text": "Fares möchte ein Konto eröffnen \n\nA: Guten Tag, was kann ich für Sie tun? \nK: Guten Tag Mein Name ist Fares. Ich hätte gern ein paar Informationen. \n\nA: gerne. Sind Sie schon Kunde bei uns? \nK: Nein, aber ich möchte ein Konto eröffnen und habe einige Fragen. \n\nA: Ein Girokonto oder ein Sparkonto? \nK: Ähm, Entschuldigung. Ich kenne die deutschen Fachwörter nicht. was ist der Unterschied? \n\nA: Also, wenn Sie Geld anlegen (investieren oder sparen) möchten, dann können Sie das Geld auf \nSparkonto einzahlen. Da bekommen Sie Zinsen. \nK: Geld zu den Anlagen habe ich im Moment nicht. Ich bekomme meinen Lohn (Gehalt) und muss \ndie Miete überweisen. \n\nA: Dann brauchen Sie ein Girokonto. Haben Sie Ihnen Reisepass oder Ausweis dabei? \nK: Entschuldigen Sie, Wie sind denn Ihre Kondition? Muss ich für die Kontoführung Gebühren \nzahlen? \n\nA: Nicht immer. Wenn Sie zum Beispiel Geld online überweisen möchten, kostet das nichts. wenn \nSie aber ein Überweisungsformular (einen Beleg) am Schalter abgeben, kostet es 50 Cent. \nK: Bekomme ich auch eine EC-Karte? und was kostet die? \n\nA: Die kostet 10 Euro im Jahr. \nK: Also, dann möchte ich jetzt das Girokonto eröffnen und mich auch für das Online-Banking \nanmelden. \n\nAn einem Automaten Geld abheben: \n\n1- Führen Sie Ihre Karte ein. \n2- Geben Sie Ihre Geheimzahl ein. \n3- Drücken Sie die Taste Bestätigung. \n4- Wählen Sie den gewünschten Betrag. \n5- Bitte waten. \n6- Entnehmen Sie Ihre Karte."
          }
        ],
        "answerPages": []
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Vor einem",
          "Ich brauche 5 Euro, um Pizza zu bestellen",
          "seit",
          "in oder nach"
        ],
        "answer": "in oder nach"
      },
      {
        "id": "q-2",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "vor",
          "Marita nimmt ein Schlafmittel, um besser einschlafen zu können",
          "seit"
        ],
        "answer": "vor"
      },
      {
        "id": "q-3",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Vor einem",
          "im",
          "um",
          "A"
        ],
        "answer": "um"
      },
      {
        "id": "q-4",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "damit",
          "In einer",
          "vor",
          "in"
        ],
        "answer": "in"
      },
      {
        "id": "q-5",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "seit",
          "3",
          "damit",
          "Karl geht auf den Sportplatz, um i hre Freundin zu treffen"
        ],
        "answer": "seit"
      },
      {
        "id": "q-6",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "damit",
          "2",
          "Um",
          "vor"
        ],
        "answer": "vor"
      },
      {
        "id": "q-7",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "nach",
          "um",
          "5",
          "in"
        ],
        "answer": "um"
      },
      {
        "id": "q-8",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vor",
          "Am",
          "Karl geht auf den Sportplatz, um i hre Freundin zu treffen",
          "Ich lerne Deutsch, um in Österreich Medizin zu studieren"
        ],
        "answer": "vor"
      },
      {
        "id": "q-9",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich brauche 15 Euro, um mit Freunden auszugehen",
          "am",
          "vor",
          "nach"
        ],
        "answer": "nach"
      },
      {
        "id": "q-10",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "um zu",
          "A",
          "am",
          "vor"
        ],
        "answer": "am"
      },
      {
        "id": "q-11",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "In einer",
          "in",
          "im",
          "vor"
        ],
        "answer": "im"
      },
      {
        "id": "q-12",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Nach dem",
          "um zu",
          "B",
          "am"
        ],
        "answer": "am"
      },
      {
        "id": "q-13",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "nach",
          "um",
          "B",
          "seit"
        ],
        "answer": "seit"
      },
      {
        "id": "q-14",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Vor dem",
          "2",
          "In einer",
          "in"
        ],
        "answer": "in"
      },
      {
        "id": "q-15",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 1 · item 15",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "D",
          "Vor",
          "seit",
          "Ich lerne Deutsch, um in Österreich Medizin zu studieren"
        ],
        "answer": "Vor"
      },
      {
        "id": "q-16",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "seit",
          "C",
          "Mein Bruder lernt Italienisch, um nach Italien zu fliegen",
          "Ich lerne fleißig, um die Prüfung zu bestehen"
        ],
        "answer": "C"
      },
      {
        "id": "q-17",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vor einer",
          "Ich lerne fleißig, um die Prüfung zu bestehen",
          "A",
          "Nach dem"
        ],
        "answer": "A"
      },
      {
        "id": "q-18",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "Mein Bruder lernt Italienisch, um nach Italien zu fliegen",
          "vor",
          "2"
        ],
        "answer": "A"
      },
      {
        "id": "q-19",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich brauche 5 Euro, um Pizza zu bestellen",
          "seit",
          "Seit",
          "B"
        ],
        "answer": "B"
      },
      {
        "id": "q-20",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "C",
          "A",
          "Nach dem",
          "Mein Bruder lernt Italienisch, um nach Italien zu fliegen"
        ],
        "answer": "A"
      },
      {
        "id": "q-21",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "seit",
          "D",
          "in oder nach",
          "Ich brauche 25 Euro, um Handy aufzuladen"
        ],
        "answer": "D"
      },
      {
        "id": "q-22",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "5",
          "B",
          "A",
          "damit"
        ],
        "answer": "B"
      },
      {
        "id": "q-23",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "seit",
          "vor",
          "Vor",
          "B"
        ],
        "answer": "B"
      },
      {
        "id": "q-24",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 9",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "4",
          "A",
          "5",
          "B"
        ],
        "answer": "A"
      },
      {
        "id": "q-25",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 2 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich lerne fleißig, um die Prüfung zu bestehen",
          "A",
          "um",
          "Ich bringe mein Auto in die Werkstatt, damit es dort repariert wird"
        ],
        "answer": "A"
      },
      {
        "id": "q-26",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Seit",
          "vor einer",
          "am",
          "im"
        ],
        "answer": "vor einer"
      },
      {
        "id": "q-27",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "ab",
          "In einer",
          "A",
          "seit"
        ],
        "answer": "In einer"
      },
      {
        "id": "q-28",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "seit",
          "Vor",
          "damit",
          "in"
        ],
        "answer": "seit"
      },
      {
        "id": "q-29",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Bei der",
          "Ich brauche 15 Euro, um mit Freunden auszugehen",
          "Mein Bruder lernt Italienisch, um nach Italien zu fliegen",
          "ab"
        ],
        "answer": "ab"
      },
      {
        "id": "q-30",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich bringe mein Auto in die Werkstatt, damit es dort repariert wird",
          "Vor einem",
          "Um",
          "nach"
        ],
        "answer": "Vor einem"
      },
      {
        "id": "q-31",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "In einer",
          "Ich brauche 15 Euro, um mit Freunden auszugehen",
          "Seit einem",
          "Ich brauche 25 Euro, um Handy aufzuladen"
        ],
        "answer": "Seit einem"
      },
      {
        "id": "q-32",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich lerne fleißig, um die Prüfung zu bestehen",
          "A",
          "In einer",
          "Am"
        ],
        "answer": "Am"
      },
      {
        "id": "q-33",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "am",
          "A",
          "in",
          "Um"
        ],
        "answer": "Um"
      },
      {
        "id": "q-34",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 10",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "um zu",
          "A",
          "3",
          "Nach dem"
        ],
        "answer": "Nach dem"
      },
      {
        "id": "q-35",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 11",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vor einer",
          "In einer",
          "Vor dem",
          "seit"
        ],
        "answer": "Vor dem"
      },
      {
        "id": "q-36",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 12",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "D",
          "Karl geht auf den Sportplatz, um i hre Freundin zu treffen",
          "Bei der",
          "ab"
        ],
        "answer": "Bei der"
      },
      {
        "id": "q-37",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 13",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "vor",
          "Seit",
          "um zu"
        ],
        "answer": "Seit"
      },
      {
        "id": "q-38",
        "prompt": "Folge 51: Temporale Präpositionen · Übung 3 · item 14",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "4",
          "In einer",
          "D",
          "Ich lerne Deutsch, um in Österreich Medizin zu studieren"
        ],
        "answer": "In einer"
      },
      {
        "id": "q-39",
        "prompt": "Folge 53: damit · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Bei der",
          "Nach dem",
          "Seit",
          "Ich bringe mein Auto in die Werkstatt, damit es dort repariert wird"
        ],
        "answer": "Ich bringe mein Auto in die Werkstatt, damit es dort repariert wird"
      },
      {
        "id": "q-40",
        "prompt": "Folge 53: damit · Übung 1 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Marita nimmt ein Schlafmittel, um besser einschlafen zu können",
          "C",
          "im",
          "Vor"
        ],
        "answer": "Marita nimmt ein Schlafmittel, um besser einschlafen zu können"
      },
      {
        "id": "q-41",
        "prompt": "Folge 53: damit · Übung 2 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich lerne Deutsch, um in Österreich Medizin zu studieren",
          "Um",
          "Der Student fragt den Professor, um alles zu verstehen",
          "im"
        ],
        "answer": "Ich lerne Deutsch, um in Österreich Medizin zu studieren"
      },
      {
        "id": "q-42",
        "prompt": "Folge 53: damit · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wir beeilen uns, um die Vorlesung nicht zu versäumen",
          "vor",
          "um zu",
          "C"
        ],
        "answer": "Wir beeilen uns, um die Vorlesung nicht zu versäumen"
      },
      {
        "id": "q-43",
        "prompt": "Folge 53: damit · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Der Student fragt den Professor, um alles zu verstehen",
          "Vor einem",
          "A",
          "damit"
        ],
        "answer": "Der Student fragt den Professor, um alles zu verstehen"
      },
      {
        "id": "q-44",
        "prompt": "Folge 53: damit · Übung 3 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "vor",
          "ab",
          "nach",
          "Der Vater bleibt im Büro, um noch etwas zu arbeiten"
        ],
        "answer": "Der Vater bleibt im Büro, um noch etwas zu arbeiten"
      },
      {
        "id": "q-45",
        "prompt": "Folge 53: damit · Übung 4 · item a",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Vor einem",
          "Der Student fragt den Professor, um alles zu verstehen",
          "um",
          "5"
        ],
        "answer": "5"
      },
      {
        "id": "q-46",
        "prompt": "Folge 53: damit · Übung 4 · item b",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "B",
          "am",
          "nach",
          "4"
        ],
        "answer": "4"
      },
      {
        "id": "q-47",
        "prompt": "Folge 53: damit · Übung 4 · item c",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "2",
          "damit",
          "Ich brauche 25 Euro, um Handy aufzuladen",
          "Wir beeilen uns, um die Vorlesung nicht zu versäumen"
        ],
        "answer": "2"
      },
      {
        "id": "q-48",
        "prompt": "Folge 53: damit · Übung 4 · item d",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "3",
          "vor",
          "um",
          "Um"
        ],
        "answer": "3"
      },
      {
        "id": "q-49",
        "prompt": "Folge 53: damit · Übung 5 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich brauche 5 Euro, um Pizza zu bestellen",
          "um zu",
          "Bei der",
          "C"
        ],
        "answer": "Ich brauche 5 Euro, um Pizza zu bestellen"
      },
      {
        "id": "q-50",
        "prompt": "Folge 53: damit · Übung 5 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "3",
          "Ich brauche 15 Euro, um mit Freunden auszugehen",
          "B",
          "Mein Bruder lernt Italienisch, um nach Italien zu fliegen"
        ],
        "answer": "Ich brauche 15 Euro, um mit Freunden auszugehen"
      },
      {
        "id": "q-51",
        "prompt": "Folge 53: damit · Übung 5 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "In einer",
          "Ich brauche 25 Euro, um Handy aufzuladen",
          "Ich brauche 15 Euro, um mit Freunden auszugehen",
          "Vor einem"
        ],
        "answer": "Ich brauche 25 Euro, um Handy aufzuladen"
      },
      {
        "id": "q-52",
        "prompt": "Folge 53: damit · Übung 8 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Wir beeilen uns, um die Vorlesung nicht zu versäumen",
          "um zu",
          "Bei der",
          "In einer"
        ],
        "answer": "um zu"
      },
      {
        "id": "q-53",
        "prompt": "Folge 53: damit · Übung 8 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "Um",
          "Am",
          "um zu"
        ],
        "answer": "um zu"
      },
      {
        "id": "q-54",
        "prompt": "Folge 53: damit · Übung 8 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Ich brauche 15 Euro, um mit Freunden auszugehen",
          "Bei der",
          "A",
          "damit"
        ],
        "answer": "damit"
      },
      {
        "id": "q-55",
        "prompt": "Folge 53: damit · Übung 8 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "in",
          "In einer",
          "Seit",
          "damit"
        ],
        "answer": "damit"
      },
      {
        "id": "q-56",
        "prompt": "Folge 53: damit · Übung 10 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Mein Bruder lernt Italienisch, um nach Italien zu fliegen",
          "Der Vater bleibt im Büro, um noch etwas zu arbeiten",
          "2",
          "seit"
        ],
        "answer": "Mein Bruder lernt Italienisch, um nach Italien zu fliegen"
      },
      {
        "id": "q-57",
        "prompt": "Folge 53: damit · Übung 10 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "um",
          "damit",
          "Karl geht auf den Sportplatz, um i hre Freundin zu treffen",
          "seit"
        ],
        "answer": "Karl geht auf den Sportplatz, um i hre Freundin zu treffen"
      },
      {
        "id": "q-58",
        "prompt": "Folge 53: damit · Übung 10 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "A",
          "ab",
          "5",
          "Ich lerne fleißig, um die Prüfung zu bestehen"
        ],
        "answer": "Ich lerne fleißig, um die Prüfung zu bestehen"
      }
    ],
    "sourcePageCount": 13,
    "answerPageCount": 3
  },
  {
    "id": "kontaktanzeigen-welche",
    "title": "Contact Ads, welche & was für",
    "source": "Folge 56-57",
    "pages": "PDF pages 373-381",
    "summary": "Source workbook material from Folge 56-57: explanations, examples, numbered exercises, and hidden answer-key practice generated from the extracted Shehata PDF text.",
    "lessons": [
      {
        "folge": "Folge 56",
        "title": "Kontaktanzeigen",
        "printedPageStart": 373,
        "printedPageEnd": 376,
        "sourcePages": [
          {
            "page": 373,
            "text": "Kontaktanzeigen: \n\n\nEine 25-jährige, große, schöne und lustige, aber ziemlich arme Frau sucht einen älteren, reichen \nMann, um ihn zu heiraten. Ich mag ins Kino gehen, lesen und in der Disco tanzen. Mein Mann \nmuss ein großes Landhaus haben, so könnte ich viele Zimmer für meine Sachen haben. Wenn \ndu Geld hast, ist das Aussehen nicht so wichtig. Ich hoffe, dass ich dich bald finde! \n\n\nRobert sucht eine Frau zwischen 20 und 30 Jahren. Er ist 22 Jahre alt und seine Hobbys sind \nFußball und Basketball. Er ist sehr sportlich und hat ein sehr gutes Aussehen. Die Frau sollte \nauch Sport machen. aber es ist nicht wichtig, wie sie sieht. Wichtiger ist der Charakter. Wenn \nman liebenswürdig und hilfsbereit ist, ist alles Ok. Robert will vor allem zu Hause eine gute \nFrau haben und sie soll Ausstrahlung haben. Egal, ob sie braune, blaue oder grüne Augen hat. \nRobert glaubt also wirklich, dass er die Liebe seines Lebens findet. \n\n\nAnne sucht einem Mann, der älter als 21 ist, der intelligent, gutaussehend, freundlich und lustig \nist. Dieser Mann sollte blondes Haar und blaue Augen haben. Er sollte groß sein und eine volle \nStimme haben. \n\n\nBäuerin sucht Mann! \n\nAlte, hübsche Bäuerin hat Lust auf verrückte Beziehung. Ich liebe Kähe, das ist meine \nLeidenschaft. Gerne habe ich einen Mann, der schöne, dunkle, blaue Augen und lange Haare \nhat. Ruf mich heute noch an!"
          },
          {
            "page": 374,
            "text": "Ein Mann, 45 Jahre alt, Lehrer von Beruf, sehr kommunikativ und interessant, sucht eine Frau, \ndie gleich alt ist. Die Frau soll Geld haben, weil ich kein Geld habe, aber ich hoffe, dass das kein \nProblem für sie ist. Sie soll auch gut kochen können, weil das für mich sehr wichtig ist. Ich \nhoffe, dass ich eine schöne und gute Frau finden werde. \n\n\nHier sind die Kontaktanzeigen unserer Teilnehmer – sie sind natürlich nicht “real”, sondern eine \nfreie Schreibübung! Wir wollen in Wirklichkeit keine Partner suchen, sondern wir wollen üben, was \nwir gelernt haben! \n- Ich bin 25 und suche einen Er – nicht zu alt. Ich bin Lehrerin und tüchtig. Ich interessiere mich \nfür die Natur. Meine Augen sind grau und ich habe lange braune Haare – ich bin hübsch. Ich \nesse jedes gute Essen, aber hasse Käse. Ich warte auf meinen Traummann. \n\n\n- Ich bin intelligent und glücklich. Ich putze nie mein Fahrrad und sehe jeden Tag fern. Ich \nbetrete das Klassenzimmer sehr früh. Ich bin schlank und groß. Ich zerbreche immer meine \nHandschuhe. Meine Lieblingsfarbe ist rosa. Ich hasse meine Schwester. Ich spiele Klavier und \nich trage nie eine Krawatte. \n\n\n- Ich bin nett, lustig und ruhig. Ich trage schöne Kleidung und habe schöne Augen. Ich wasche \nimmer meine Kleidung und putze immer meine Schuhe. Ich spreche leise und vergesse nie \nmeine Termine- Ich rauche nicht und trinke keinen Alkohol. Ich esse viele Vitamine. Ich kann \nnicht Klavier spielen, aber ich kann gut kochen. Ich habe Willenskraft. Jeden Tag esse ich einen \nJoghurt und liebe warmes Wetter. Ich suche einen lustigen, intelligenten und guten Mann. Ruf \nmich jederzeit an! \n\n\n- Ich bin sehr schön und sehr intelligent. Ich kann sehr gut kochen und esse immer \nTomatensuppe. Am Geburtstag gehe ich nie ins Kino. Ich fahre immer sehr schnell Auto und \ntrage nie Cowboy-Hüte. Ich spiele kein Instrument aber ich singe immer in der Dusche, Ich \nsuche eine Person mit viel Geld für meine Kinder und mich. \n\n\n- Ich liebe Reisen. Ich esse jeden Tag einen Apfel. Meine Hobbys sind wandern und bergsteigen. \nIch vergesse alles in der Natur. Ich spreche mit den Vögeln und dem Himmel. Ich sehe \nSchönheit in der Natur. Ich habe einen freien Geist. Ich muss immer in die Berge. Ich liebe \nRegen, Schnee, Kälte und jedes Wetter. Aber ich möchte nicht in heißes Klima."
          },
          {
            "page": 375,
            "text": "- Ich bin sehr intelligent! Ich esse immer nur Schokolade und Bonbons und trinke Saft. Ich \nspreche drei Sprachen. Ich möchte an den Strand gehen. Ich will eine Frau zum Wäsche \nwaschen. Sie ist schlank. Ich spiele Computerspiele und sehe täglich fern. Komm in mein Herz! \nIch zerbreche nicht deins! \n\n- Ich brauche eine Frau, aber ich kann sie nicht finden. Ich bin 28 Jahre alt und komme aus \nSpanien. Ich esse immer nur Paella. Ich bin Sportlehrer, aber ich habe einen großen Bauch, \nbraune Augen und bin 1,50 groß. Ich trinke immer Bier. Ich möchte eine Frau: blond, groß, \nschön. Sie kann gut kochen und trägt immer Shorts oder Rock. Meine Lieblingsunterwäsche ist \nein Tanga. Ich hoffe, ich finde sie, das Alter ist egal! Bitte telefonieren Sie! P.S. Ich putze nie \nmeine Schuhe \n- Kontaktanzeige \n\n\na \n2 \n1 \nd \nc \nb \nEr sucht sie ... \nSie sucht ihn ..."
          },
          {
            "page": 376,
            "text": "3 4"
          }
        ],
        "answerPages": []
      },
      {
        "folge": "Folge 57",
        "title": "welche und was für",
        "printedPageStart": 377,
        "printedPageEnd": 381,
        "sourcePages": [
          {
            "page": 377,
            "text": "Liebling, ich brauche noch ein neues Kleid. \nA Was für ein Kleid brauchst du denn? Du hast doch schon so viele. \n□ Ich brauche ein neues Sommerkleid. \nA Du weißt doch, ich schenke dir alles, was du willst. Welches Kleid gefällt dir am besten? \n□ Dieses Kleid dort, das blaue. Das kostet auch nur die Hälfte. \n\nWas für ein Kleid ...? ein neues Sommerkleid \n\n\nFrageartikel unbestimmter Artikel \n\nWelches Kleid ...? dieses Kleid dort \n\n\nFrageartikel Demonstrativartikel"
          },
          {
            "page": 378,
            "text": "1- Was passt zusammen? Ordnen Sie zu. \n\n1. Was für ein Auto haben Sie gesehen? a) Ein sehr netter! Ich mag ihn \n2. Welche Schuhe meinten Sie? b) Die Süddeutsche. \n3. Welches Buch kannst du mir empfehlen? c) Lies dieses mal, es ist sehr spannend. \n4. Was für ein Haustier hat Oma jetzt? d) Ein grünes mit einem roten Dach. \n5. Was für ein Typ ist der neue Kollege? e) Die blauen mit der roten Schleife. \n6. Welche Zeitung hast du gelesen? f) Wieder eine Katze. \n\n\n2- Ergänzen Sie den Demonstrativartikel oder den Frageartikel in der richtigen Form. \nAussprachehilfe: Hören Sie"
          },
          {
            "page": 379,
            "text": "□ Sie waren zur Tatzeit vor dem Juweliergeschäft? \na Ja, und ich habe einen Mann gesehen, der in das Geschäft hineingegangen ist. \n□ ........................ Mann haben Sie denn gesehen? \nA Einen großen Mann, etwa 1,90 Meter. Er war kräftig und trug einen Mantel. \n□ ....................... Mantel trug der Mann? \na Einen langen schwarzen Mantel. \n□ .................................. Haarfarbe hatte der Mann? War er blond oder hatte er dunkle Haare? \nA Er war blond. \n□ Schauen Sie sich mal............................. Fotos hier an. Vielleicht erkennen Sieden Mann \nwieder. \na Also,........................ Mann hier könnte es sein.... Ich bin mir jetzt ganz sicher, das ist \ner.............................. Mann habe ich gesehen. \n\n3. In der Kunstausstellung \n\n□ Hast du das neue Bild von Leo Qualm schon gesehen? \na ..........................Bild meinst du? \n□ Na das dort. Wie findest du das Bild? \na Naja, ehrlich gesagt finde ich gerade Bild nicht so toll. Die anderen Bilder gefallen mir besser. \n\n\n3- Fragen im Hotel. Ergänzen Sie welch- oder was für ein in der richtigen Form. \n\n• Welches Zimmer nimmst du? Das linke oder das rechte? \n- Das linke. \n1................................. Zimmer möchten Sie? - Ein Doppelzimmer. \n2. In ..............................Stock befindet sich mein Zimmer? - Im ersten. \n3. ..................... Schlüssel ist für den Zimmertresor? - Der gelbe. \n4. In Bett willst du schlafen? - Im rechten. \n5. An........................ Tagen ist der Botanische Garten geschlossen? - Nur am Montag. \n6................................Tür führt zur Tiefgarage? - Die erste Tür links. \n7. Mit ............Karte möchten Sie zahlen? - Mit einer Kreditkarte von VISA. \n8. Unter .............Telefonnummer kann ich die Hotelbar erreichen? - 984. \n9............................... Museum können Sie mir empfehlen? - Wir haben hier in der \nStadt ein bekanntes Puppenmuseum"
          }
        ],
        "answerPages": [
          {
            "page": 378,
            "text": "die Lösungen auf CD. \n\n1. Im Geschäft \n\n□ Könnten Sie mir bitte mal diese Tasche dort zeigen? \na ...................................Tasche meinen Sie? \n□ Die blaue Tasche. \na ...............................................? \n□ Nein, nicht die rechte, die linke Tasche. Ja, genau ...... Tasche meine ich. \n\n2. Bei der Polizei \nkasus \nSigular Plural \nMaskulin feminin Neutral Plural \nNominativ Dieser \nwelcher \ndiese \nwelche \nDieses \nwelches \ndiese \nwelche \nAkkusativ Diesen \nwelchen \ndiese \nwelche \nDieses \nwelches \ndiese \nwelche \nDativ Diesem \nwelchem \ndieser \nwelcher \nDiesem \nwelchem \ndiesen \nwelchen \nGenetiv Dieses \nwelches \ndieser \nwelcher \nDieses \nwelches \ndieser \nwelcher"
          },
          {
            "page": 379,
            "text": "Die Lösungen: \n1- 1.d 2 .e 3 .c 4.f 5.a 6. b \n2- 1. Welche Tasche, Diese, diese Tasche 2. Was für einen Mann, Was für einen Mantel, Welche \nHaarfarbe, diese Fotos, dieser Mann, Diesen Mann 3. Welches Bild, dieses Bild \n3- 1. Was für ein Zimmer 2. welchem Stock 3. Welcher Schlüssel 4. welchem Bett 5. welchen \nTagen 6. Welche Tür 7. was für einer Karte 8. welcher Telefonnummer 9. Was für \nein/Welches Museum"
          },
          {
            "page": 380,
            "text": "380"
          }
        ]
      }
    ],
    "interactiveQuestions": [
      {
        "id": "q-1",
        "prompt": "Folge 57: welche und was für · Übung 1 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "welcher Telefonnummer",
          "b",
          "d",
          "Was für ein Zimmer"
        ],
        "answer": "d"
      },
      {
        "id": "q-2",
        "prompt": "Folge 57: welche und was für · Übung 1 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "e",
          "welcher Telefonnummer",
          "a",
          "Welche Tasche, Diese, diese Tasche"
        ],
        "answer": "e"
      },
      {
        "id": "q-3",
        "prompt": "Folge 57: welche und was für · Übung 1 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "a",
          "c",
          "e",
          "Was für ein Zimmer"
        ],
        "answer": "c"
      },
      {
        "id": "q-4",
        "prompt": "Folge 57: welche und was für · Übung 1 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Welcher Schlüssel",
          "Welches Bild, dieses Bild",
          "Was für ein Zimmer",
          "f"
        ],
        "answer": "f"
      },
      {
        "id": "q-5",
        "prompt": "Folge 57: welche und was für · Übung 1 · item 5",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "f",
          "c",
          "Was für ein Zimmer",
          "a"
        ],
        "answer": "a"
      },
      {
        "id": "q-6",
        "prompt": "Folge 57: welche und was für · Übung 1 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "welchem Stock",
          "Welche Tasche, Diese, diese Tasche",
          "b",
          "d"
        ],
        "answer": "b"
      },
      {
        "id": "q-7",
        "prompt": "Folge 57: welche und was für · Übung 2 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Welche Tasche, Diese, diese Tasche",
          "Welches Bild, dieses Bild",
          "d",
          "a"
        ],
        "answer": "Welche Tasche, Diese, diese Tasche"
      },
      {
        "id": "q-8",
        "prompt": "Folge 57: welche und was für · Übung 2 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Welcher Schlüssel",
          "b",
          "Welches Bild, dieses Bild",
          "welchem Stock"
        ],
        "answer": "Welches Bild, dieses Bild"
      },
      {
        "id": "q-9",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 1",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Welches Bild, dieses Bild",
          "welchem Stock",
          "Was für ein Zimmer",
          "welchem Bett"
        ],
        "answer": "Was für ein Zimmer"
      },
      {
        "id": "q-10",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 2",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "welchem Stock",
          "welcher Telefonnummer",
          "welchem Bett",
          "f"
        ],
        "answer": "welchem Stock"
      },
      {
        "id": "q-11",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 3",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "b",
          "Welche Tasche, Diese, diese Tasche",
          "Welcher Schlüssel",
          "d"
        ],
        "answer": "Welcher Schlüssel"
      },
      {
        "id": "q-12",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 4",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Welcher Schlüssel",
          "welchem Stock",
          "Welche Tasche, Diese, diese Tasche",
          "welchem Bett"
        ],
        "answer": "welchem Bett"
      },
      {
        "id": "q-13",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 6",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "Was für ein Zimmer",
          "welcher Telefonnummer",
          "Welche Tür",
          "Welches Bild, dieses Bild"
        ],
        "answer": "Welche Tür"
      },
      {
        "id": "q-14",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 7",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "c",
          "welcher Telefonnummer",
          "was für einer Karte",
          "Welcher Schlüssel"
        ],
        "answer": "was für einer Karte"
      },
      {
        "id": "q-15",
        "prompt": "Folge 57: welche und was für · Übung 3 · item 8",
        "instruction": "Read the matching exercise text in the PDF section, then choose the answer from the hidden answer key.",
        "options": [
          "welchem Stock",
          "d",
          "welcher Telefonnummer",
          "Was für ein Zimmer"
        ],
        "answer": "welcher Telefonnummer"
      }
    ],
    "sourcePageCount": 7,
    "answerPageCount": 3
  }
];
