/**
 * In-depth grammar explanations for each lesson, designed for Goethe exam preparation.
 * Content is rendered as HTML in the lesson page before the quiz begins.
 */

export const lessonContentMap: Record<string, string> = {

// ─── A1 ────────────────────────────────────────────────────────────────

'a1-01-articles': `
<h2>Definite & Indefinite Articles in German</h2>

<h3>1. Grammatical Gender</h3>
<p>Every German noun has one of three genders: <strong>masculine (der)</strong>, <strong>feminine (die)</strong>, or <strong>neuter (das)</strong>. Unlike English, gender must be memorized with each noun — it is rarely predictable from meaning alone.</p>

<table>
  <thead><tr><th>Gender</th><th>Definite</th><th>Indefinite</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td>Masculine</td><td>der</td><td>ein</td><td>der Tisch, der Hund, der Mann</td></tr>
    <tr><td>Feminine</td><td>die</td><td>eine</td><td>die Frau, die Katze, die Blume</td></tr>
    <tr><td>Neuter</td><td>das</td><td>ein</td><td>das Kind, das Buch, das Haus</td></tr>
    <tr><td>Plural (all)</td><td>die</td><td>—</td><td>die Bücher, die Kinder</td></tr>
  </tbody>
</table>

<h3>2. Gender Hints (Patterns)</h3>
<ul>
  <li><strong>Masculine:</strong> days, months, seasons (der Montag, der Januar); car brands (der BMW); -er/-ling/-ismus endings (der Computer, der Frühling)</li>
  <li><strong>Feminine:</strong> -ung, -heit, -keit, -tion, -schaft endings (die Zeitung, die Freiheit, die Möglichkeit); most flowers and trees</li>
  <li><strong>Neuter:</strong> -chen, -lein diminutives (das Mädchen — even though it means "girl"!); -ment, -um endings (das Dokument, das Museum); infinitives used as nouns (das Essen)</li>
</ul>

<h3>3. Articles Change with Case</h3>
<p>Articles change depending on the grammatical case. At A1, focus on <strong>Nominativ</strong> (subject) and <strong>Akkusativ</strong> (direct object):</p>
<table>
  <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td><strong>Nominativ</strong></td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
    <tr><td><strong>Akkusativ</strong></td><td><em>den / einen</em></td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
  </tbody>
</table>
<p><strong>Key rule:</strong> Only masculine changes in the accusative: der → den, ein → einen.</p>

<h3>4. Common Mistakes in Exams</h3>
<ul>
  <li>Forgetting that "das Mädchen" is neuter (because of -chen)</li>
  <li>Using "ein" instead of "einen" for masculine accusative</li>
  <li>Forgetting that plural always uses "die" regardless of singular gender</li>
</ul>

<h3>5. Practice Strategy</h3>
<p>Always learn nouns WITH their article: not "Tisch" but "der Tisch". Color-code genders in your flashcards (blue = masculine, red = feminine, green = neuter).</p>
`,

'a1-02-present-tense': `
<h2>Present Tense (Präsens) — Regular Verbs</h2>

<h3>1. How Regular Conjugation Works</h3>
<p>Take the verb stem (infinitive minus -en/-n), then add the personal ending:</p>
<table>
  <thead><tr><th>Person</th><th>Ending</th><th>machen</th><th>spielen</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>-e</td><td>mache</td><td>spiele</td></tr>
    <tr><td>du</td><td>-st</td><td>machst</td><td>spielst</td></tr>
    <tr><td>er/sie/es</td><td>-t</td><td>macht</td><td>spielt</td></tr>
    <tr><td>wir</td><td>-en</td><td>machen</td><td>spielen</td></tr>
    <tr><td>ihr</td><td>-t</td><td>macht</td><td>spielt</td></tr>
    <tr><td>sie/Sie</td><td>-en</td><td>machen</td><td>spielen</td></tr>
  </tbody>
</table>

<h3>2. Special Spelling Rules</h3>
<ul>
  <li><strong>Stems ending in -t, -d, -chn, -ffn, -gn:</strong> Add an extra <em>-e-</em> before -st and -t for pronunciation. Example: arbeit-en → du arbeit<em>e</em>st, er arbeit<em>e</em>t</li>
  <li><strong>Stems ending in -s, -ß, -z, -x:</strong> The du-form drops the extra -s: reisen → du reist (not "reisst")</li>
  <li><strong>Verbs ending in -eln:</strong> ich-form can drop the stem -e: sammeln → ich samm(e)le</li>
</ul>

<h3>3. When to Use Präsens</h3>
<ul>
  <li>Current actions: <em>Ich lerne Deutsch.</em></li>
  <li>Habitual actions: <em>Er spielt jeden Tag Fußball.</em></li>
  <li>Future with time indicator: <em>Morgen fahre ich nach Berlin.</em></li>
  <li>General facts: <em>Die Erde dreht sich um die Sonne.</em></li>
</ul>

<h3>4. Separable Verbs in Present Tense</h3>
<p>Separable prefixes (an-, auf-, aus-, ein-, mit-, zu-, etc.) detach and go to the end:</p>
<p><em>anfangen → Ich <strong>fange</strong> um 8 Uhr <strong>an</strong>.</em></p>

<h3>5. Goethe Exam Tip</h3>
<p>In the Goethe A1 exam, you'll see fill-in-the-blank and short response items. Make sure you can conjugate quickly and know the spelling exceptions (-t/-d stems).</p>
`,

'a1-03-sein-haben': `
<h2>Sein & Haben — The Two Most Important Irregular Verbs</h2>

<h3>1. Full Conjugation</h3>
<table>
  <thead><tr><th>Person</th><th>sein (to be)</th><th>haben (to have)</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>bin</td><td>habe</td></tr>
    <tr><td>du</td><td>bist</td><td>hast</td></tr>
    <tr><td>er/sie/es</td><td>ist</td><td>hat</td></tr>
    <tr><td>wir</td><td>sind</td><td>haben</td></tr>
    <tr><td>ihr</td><td>seid</td><td>habt</td></tr>
    <tr><td>sie/Sie</td><td>sind</td><td>haben</td></tr>
  </tbody>
</table>

<h3>2. When to Use Sein</h3>
<ul>
  <li>Identity/state: <em>Ich bin Lehrerin. Er ist müde.</em></li>
  <li>Origin/nationality: <em>Sie ist aus Frankreich.</em></li>
  <li>Location: <em>Wir sind im Kino.</em></li>
  <li>Age: <em>Ich bin 25 Jahre alt.</em></li>
  <li>As auxiliary for Perfekt (with movement/change verbs)</li>
</ul>

<h3>3. When to Use Haben</h3>
<ul>
  <li>Possession: <em>Ich habe ein Auto.</em></li>
  <li>Physical states (German uses haben, not sein): <em>Ich habe Hunger / Durst / Angst.</em></li>
  <li>As auxiliary for Perfekt (with most verbs)</li>
</ul>

<h3>4. Sein vs. Haben for Perfekt (Preview)</h3>
<p><strong>sein:</strong> movement verbs (gehen, fahren, fliegen, kommen) and change-of-state verbs (werden, sterben, aufwachen). Also: sein, bleiben.</p>
<p><strong>haben:</strong> everything else (machen, lernen, essen, schlafen, etc.)</p>

<h3>5. Common Goethe Exam Patterns</h3>
<ul>
  <li>"Er ist Arzt." — No article before professions with sein!</li>
  <li>"Wer ist das?" — Wer is always 3rd person singular</li>
  <li>Formal Sie always conjugates like sie (they): Sind Sie...? / Haben Sie...?</li>
</ul>
`,

'a1-04-accusative': `
<h2>The Accusative Case (Akkusativ)</h2>

<h3>1. What Is the Accusative?</h3>
<p>The accusative marks the <strong>direct object</strong> — the thing being directly acted upon. In "I see <em>the man</em>," "the man" is accusative.</p>

<h3>2. Article Changes</h3>
<table>
  <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td><strong>Definite</strong></td><td>der → <strong>den</strong></td><td>die → die</td><td>das → das</td><td>die → die</td></tr>
    <tr><td><strong>Indefinite</strong></td><td>ein → <strong>einen</strong></td><td>eine → eine</td><td>ein → ein</td><td>— → —</td></tr>
    <tr><td><strong>Negative</strong></td><td>kein → <strong>keinen</strong></td><td>keine → keine</td><td>kein → kein</td><td>keine → keine</td></tr>
  </tbody>
</table>
<p><strong>Critical rule:</strong> Only <em>masculine</em> articles change. Feminine, neuter, and plural stay the same.</p>

<h3>3. Accusative Verbs</h3>
<p>These common verbs take a direct object (accusative):</p>
<p>haben, sehen, kaufen, brauchen, essen, trinken, lesen, finden, kennen, mögen, nehmen, suchen, besuchen</p>

<h3>4. Accusative Prepositions</h3>
<p>These prepositions <em>always</em> trigger accusative:</p>
<p><strong>durch, für, gegen, ohne, um</strong> (memory aid: "DOGFU")</p>
<p>Example: <em>Ohne <strong>einen</strong> Regenschirm gehe ich nicht raus.</em></p>

<h3>5. Accusative Pronouns</h3>
<table>
  <thead><tr><th>Nominative</th><th>Accusative</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>mich</td></tr>
    <tr><td>du</td><td>dich</td></tr>
    <tr><td>er</td><td>ihn</td></tr>
    <tr><td>sie</td><td>sie</td></tr>
    <tr><td>es</td><td>es</td></tr>
    <tr><td>wir</td><td>uns</td></tr>
    <tr><td>ihr</td><td>euch</td></tr>
    <tr><td>sie/Sie</td><td>sie/Sie</td></tr>
  </tbody>
</table>

<h3>6. Interrogative Pronouns</h3>
<p><strong>Wen?</strong> (whom?) for people, <strong>Was?</strong> (what?) for things — both accusative.</p>
<p><em>Wen siehst du? — Ich sehe den Lehrer.</em></p>

<h3>7. Goethe Exam Tip</h3>
<p>The exam loves testing masculine accusative: make sure "der→den" and "ein→einen" are automatic for you.</p>
`,

'a1-05-negation': `
<h2>Negation: nicht vs. kein</h2>

<h3>1. Two Ways to Negate</h3>
<p>German has two main negation words, and choosing the wrong one is a common exam mistake:</p>
<ul>
  <li><strong>kein/keine/keinen:</strong> Negates nouns that would have an indefinite article (ein/eine) or no article</li>
  <li><strong>nicht:</strong> Negates everything else — verbs, adjectives, adverbs, nouns with definite articles, proper nouns, possessives</li>
</ul>

<h3>2. When to Use "kein"</h3>
<p>Replace ein/eine with kein/keine:</p>
<ul>
  <li><em>Ich habe <strong>ein</strong> Auto → Ich habe <strong>kein</strong> Auto.</em></li>
  <li><em>Er trinkt Kaffee → Er trinkt <strong>keinen</strong> Kaffee.</em> (no article → kein)</li>
  <li><em>Er ist Lehrer → Er ist <strong>kein</strong> Lehrer.</em> (profession without article)</li>
</ul>
<p><strong>kein declines like ein</strong> (kein, keine, keinen, keinem, keiner, keines).</p>

<h3>3. When to Use "nicht"</h3>
<ul>
  <li>Negate the verb: <em>Ich komme <strong>nicht</strong>.</em></li>
  <li>Negate an adjective: <em>Das ist <strong>nicht</strong> schön.</em></li>
  <li>Negate with definite article: <em>Das ist <strong>nicht</strong> das Buch.</em></li>
  <li>Negate possessive: <em>Das ist <strong>nicht</strong> mein Hund.</em></li>
  <li>Negate a prepositional phrase: <em>Ich fahre <strong>nicht</strong> nach Berlin.</em></li>
</ul>

<h3>4. Position of "nicht"</h3>
<ul>
  <li><strong>End of sentence</strong> when negating the whole sentence: <em>Ich verstehe das nicht.</em></li>
  <li><strong>Before what it negates</strong> when negating a specific element: <em>Ich fahre nicht <strong>nach Berlin</strong> (sondern nach München).</em></li>
  <li><strong>Before adjectives/adverbs:</strong> <em>Er ist nicht müde.</em></li>
  <li><strong>Before prepositional phrases:</strong> <em>Ich wohne nicht in Berlin.</em></li>
</ul>

<h3>5. Quick Decision Tree</h3>
<p>Ask: "Is there a noun with ein/eine or no article?" → Yes: use kein. No: use nicht.</p>
`,

'a1-06-word-order': `
<h2>German Word Order (Satzbau)</h2>

<h3>1. The V2 Rule — The Most Important Rule</h3>
<p>In German main clauses, the <strong>conjugated verb is ALWAYS in position 2</strong>. This is non-negotiable.</p>
<p><em>Ich <strong>gehe</strong> morgen ins Kino.</em> (Subject first → verb second)</p>
<p><em>Morgen <strong>gehe</strong> ich ins Kino.</em> (Time first → verb still second, subject moves to third)</p>

<h3>2. Subject-Verb Inversion</h3>
<p>When anything other than the subject starts the sentence, the subject and verb swap positions:</p>
<ul>
  <li><em><strong>Heute</strong> lerne ich Deutsch.</em> (not "Heute ich lerne")</li>
  <li><em><strong>In Berlin</strong> wohnt mein Bruder.</em></li>
  <li><em><strong>Leider</strong> kann ich nicht kommen.</em></li>
</ul>

<h3>3. Question Word Order</h3>
<p><strong>Yes/No questions:</strong> Verb in position 1</p>
<p><em><strong>Kommst</strong> du morgen?</em></p>
<p><strong>W-questions:</strong> W-word in position 1, verb in position 2</p>
<p><em><strong>Wo wohnst</strong> du?</em></p>

<h3>4. TMP Order (Time – Manner – Place)</h3>
<p>When you have multiple adverbials, they generally follow this order:</p>
<p><em>Ich fahre <strong>jeden Tag</strong> (Time) <strong>mit dem Bus</strong> (Manner) <strong>zur Arbeit</strong> (Place).</em></p>

<h3>5. Sentence Bracket (Satzklammer)</h3>
<p>When there are two verb parts (modal + infinitive, auxiliary + participle, separable verb), the conjugated part stays in position 2 and the other goes to the END:</p>
<ul>
  <li>Modal: <em>Ich <strong>kann</strong> gut <strong>schwimmen</strong>.</em></li>
  <li>Perfekt: <em>Er <strong>hat</strong> gestern einen Kuchen <strong>gebacken</strong>.</em></li>
  <li>Separable: <em>Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>.</em></li>
</ul>

<h3>6. Goethe Exam Tip</h3>
<p>The exam tests V2 heavily. If you see a sentence starting with a time expression or adverb, the verb MUST come next, then the subject.</p>
`,

'a1-07-modal-verbs': `
<h2>Modal Verbs (Modalverben)</h2>

<h3>1. The Six Modal Verbs</h3>
<table>
  <thead><tr><th>Verb</th><th>Meaning</th><th>ich</th><th>du</th><th>er/sie/es</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr></thead>
  <tbody>
    <tr><td>können</td><td>can, able to</td><td>kann</td><td>kannst</td><td>kann</td><td>können</td><td>könnt</td><td>können</td></tr>
    <tr><td>müssen</td><td>must, have to</td><td>muss</td><td>musst</td><td>muss</td><td>müssen</td><td>müsst</td><td>müssen</td></tr>
    <tr><td>wollen</td><td>want to</td><td>will</td><td>willst</td><td>will</td><td>wollen</td><td>wollt</td><td>wollen</td></tr>
    <tr><td>sollen</td><td>should</td><td>soll</td><td>sollst</td><td>soll</td><td>sollen</td><td>sollt</td><td>sollen</td></tr>
    <tr><td>dürfen</td><td>may, allowed to</td><td>darf</td><td>darfst</td><td>darf</td><td>dürfen</td><td>dürft</td><td>dürfen</td></tr>
    <tr><td>mögen</td><td>like</td><td>mag</td><td>magst</td><td>mag</td><td>mögen</td><td>mögt</td><td>mögen</td></tr>
  </tbody>
</table>

<h3>2. Möchten (Would Like)</h3>
<p>"Möchten" is technically Konjunktiv II of mögen but used as a polite "want":</p>
<p><em>Ich <strong>möchte</strong> einen Kaffee, bitte.</em> (I would like a coffee, please.)</p>

<h3>3. Sentence Structure with Modals</h3>
<p>Modal verb in position 2, main verb as infinitive at the END:</p>
<p><em>Ich <strong>muss</strong> heute lange <strong>arbeiten</strong>.</em></p>
<p><em><strong>Kannst</strong> du mir bitte <strong>helfen</strong>?</em></p>

<h3>4. Modals Without Infinitive</h3>
<p>Sometimes modals stand alone when the main verb is obvious:</p>
<ul>
  <li><em>Ich muss nach Hause.</em> (= muss gehen)</li>
  <li><em>Ich kann Deutsch.</em> (= kann sprechen)</li>
  <li><em>Ich möchte ein Eis.</em> (= möchte haben)</li>
</ul>

<h3>5. Key Differences</h3>
<ul>
  <li><strong>müssen vs. sollen:</strong> müssen = internal/objective necessity; sollen = someone else says so</li>
  <li><strong>"Nicht müssen" ≠ "must not"!</strong> "Du musst nicht" = you don't have to. "Du darfst nicht" = you must not / are not allowed.</li>
</ul>

<h3>6. Goethe Exam Tip</h3>
<p>Modal verbs appear in almost every Goethe exam section. Know the ich/du/er forms cold. Watch for "nicht müssen" vs. "nicht dürfen" — a classic trap.</p>
`,

'a1-08-possessive': `
<h2>Possessive Pronouns (Possessivpronomen)</h2>

<h3>1. Possessive Stems</h3>
<table>
  <thead><tr><th>Person</th><th>Possessive</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>mein</td></tr>
    <tr><td>du</td><td>dein</td></tr>
    <tr><td>er / es</td><td>sein</td></tr>
    <tr><td>sie (she)</td><td>ihr</td></tr>
    <tr><td>wir</td><td>unser</td></tr>
    <tr><td>ihr (you pl.)</td><td>euer</td></tr>
    <tr><td>sie (they)</td><td>ihr</td></tr>
    <tr><td>Sie (formal)</td><td>Ihr</td></tr>
  </tbody>
</table>

<h3>2. Possessives Decline Like "ein"</h3>
<p>The ending depends on the gender/case of the <em>noun being possessed</em> (not the owner):</p>
<table>
  <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td><strong>Nominativ</strong></td><td>mein</td><td>meine</td><td>mein</td><td>meine</td></tr>
    <tr><td><strong>Akkusativ</strong></td><td><strong>meinen</strong></td><td>meine</td><td>mein</td><td>meine</td></tr>
    <tr><td><strong>Dativ</strong></td><td>meinem</td><td>meiner</td><td>meinem</td><td>meinen</td></tr>
  </tbody>
</table>

<h3>3. Special: euer</h3>
<p>"Euer" drops the internal -e- when an ending is added: euer → eu<strong>re</strong> (not "euere"), eu<strong>ren</strong>.</p>

<h3>4. Common Mistakes</h3>
<ul>
  <li>Using "sein" for female owners — "ihr" means her/their: <em>Maria liebt <strong>ihren</strong> Hund.</em></li>
  <li>Forgetting masculine accusative ending: <em>Ich sehe <strong>deinen</strong> Bruder.</em> (not "dein")</li>
</ul>
`,

'a1-09-dative-intro': `
<h2>Introduction to the Dative Case (Dativ)</h2>

<h3>1. What Is the Dative?</h3>
<p>The dative marks the <strong>indirect object</strong> — the person who receives something or benefits from the action.</p>
<p><em>Ich gebe <strong>dem Mann</strong> (dative) <strong>das Buch</strong> (accusative).</em></p>

<h3>2. Article Changes in Dative</h3>
<table>
  <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td><strong>Definite</strong></td><td>der → <strong>dem</strong></td><td>die → <strong>der</strong></td><td>das → <strong>dem</strong></td><td>die → <strong>den (+n)</strong></td></tr>
    <tr><td><strong>Indefinite</strong></td><td>ein → <strong>einem</strong></td><td>eine → <strong>einer</strong></td><td>ein → <strong>einem</strong></td><td>— → —</td></tr>
  </tbody>
</table>
<p><strong>Plural dative:</strong> The noun itself adds <strong>-n</strong> if it doesn't already end in -n or -s: den Kindern, den Freunden, but den Autos.</p>

<h3>3. Dative Pronouns</h3>
<table>
  <thead><tr><th>Nominative</th><th>Dative</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>mir</td></tr>
    <tr><td>du</td><td>dir</td></tr>
    <tr><td>er</td><td>ihm</td></tr>
    <tr><td>sie (she)</td><td>ihr</td></tr>
    <tr><td>es</td><td>ihm</td></tr>
    <tr><td>wir</td><td>uns</td></tr>
    <tr><td>ihr</td><td>euch</td></tr>
    <tr><td>sie/Sie</td><td>ihnen/Ihnen</td></tr>
  </tbody>
</table>

<h3>4. Dative Prepositions</h3>
<p>These prepositions ALWAYS take dative: <strong>aus, bei, mit, nach, seit, von, zu</strong> (memory: "AusBeiMitNachSeitVonZu")</p>
<p><em>Ich fahre <strong>mit dem</strong> Bus. Er kommt <strong>aus der</strong> Schweiz.</em></p>

<h3>5. Common Dative Verbs</h3>
<p>Some verbs take a dative object instead of accusative: <strong>helfen, danken, gefallen, gehören, folgen, antworten, gratulieren, glauben</strong></p>
<p><em>Ich helfe <strong>dir</strong>. Das Buch gehört <strong>mir</strong>.</em></p>
`,

'a1-10-perfekt': `
<h2>Present Perfect (Perfekt)</h2>

<h3>1. Formation</h3>
<p>Perfekt = <strong>haben/sein (conjugated) + Partizip II (past participle)</strong></p>
<p><em>Ich <strong>habe</strong> Deutsch <strong>gelernt</strong>. Er <strong>ist</strong> nach Berlin <strong>gefahren</strong>.</em></p>

<h3>2. Partizip II of Regular Verbs</h3>
<p>ge- + stem + -t: machen → <strong>gemacht</strong>, lernen → <strong>gelernt</strong>, arbeiten → <strong>gearbeitet</strong> (extra -e- for -t/-d stems)</p>

<h3>3. Partizip II of Irregular Verbs</h3>
<p>ge- + changed stem + -en: schreiben → <strong>geschrieben</strong>, trinken → <strong>getrunken</strong>, gehen → <strong>gegangen</strong></p>
<p>These must be memorized — there is no shortcut.</p>

<h3>4. When to Use haben vs. sein</h3>
<p><strong>sein</strong> is used with:</p>
<ul>
  <li>Verbs of movement (change of location): gehen, fahren, fliegen, kommen, laufen, reisen</li>
  <li>Verbs of state change: werden (become), sterben (die), aufwachen (wake up), einschlafen (fall asleep)</li>
  <li>sein itself: <em>Ich <strong>bin</strong> dort <strong>gewesen</strong>.</em></li>
  <li>bleiben: <em>Er <strong>ist</strong> zu Hause <strong>geblieben</strong>.</em></li>
</ul>
<p><strong>haben</strong> is used with everything else (the majority of verbs).</p>

<h3>5. Special Partizip II Forms</h3>
<ul>
  <li><strong>Separable verbs:</strong> ge- goes between prefix and stem: aufmachen → <strong>aufgemacht</strong>, einkaufen → <strong>eingekauft</strong></li>
  <li><strong>Inseparable prefixes (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-):</strong> NO ge-: besuchen → <strong>besucht</strong>, verstehen → <strong>verstanden</strong></li>
  <li><strong>-ieren verbs:</strong> NO ge-: studieren → <strong>studiert</strong>, telefonieren → <strong>telefoniert</strong></li>
</ul>

<h3>6. Perfekt vs. Präteritum</h3>
<p>In <strong>spoken German</strong>, Perfekt is overwhelmingly preferred. Präteritum is mainly used for sein, haben, modal verbs, and in written/formal contexts.</p>
`,

// ─── A2 ────────────────────────────────────────────────────────────────

'a2-01-dative-full': `
<h2>Dative Case — Full Mastery</h2>

<h3>1. Two-Way Prepositions (Wechselpräpositionen)</h3>
<p>These 9 prepositions take <strong>dative for location (wo?)</strong> and <strong>accusative for direction (wohin?)</strong>:</p>
<p><strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong></p>
<table>
  <thead><tr><th>Location (Dative) — wo?</th><th>Direction (Accusative) — wohin?</th></tr></thead>
  <tbody>
    <tr><td>Das Bild hängt an <strong>der</strong> Wand.</td><td>Ich hänge das Bild an <strong>die</strong> Wand.</td></tr>
    <tr><td>Das Buch liegt auf <strong>dem</strong> Tisch.</td><td>Ich lege das Buch auf <strong>den</strong> Tisch.</td></tr>
    <tr><td>Die Katze sitzt unter <strong>dem</strong> Stuhl.</td><td>Die Katze kriecht unter <strong>den</strong> Stuhl.</td></tr>
  </tbody>
</table>

<h3>2. Position vs. Movement Verb Pairs</h3>
<table>
  <thead><tr><th>Position (wo? + Dativ)</th><th>Movement (wohin? + Akkusativ)</th></tr></thead>
  <tbody>
    <tr><td>stehen (stand)</td><td>stellen (put upright)</td></tr>
    <tr><td>liegen (lie)</td><td>legen (lay)</td></tr>
    <tr><td>sitzen (sit)</td><td>setzen (set/place)</td></tr>
    <tr><td>hängen (hang, intransitive)</td><td>hängen (hang, transitive)</td></tr>
  </tbody>
</table>

<h3>3. All Dative Verbs</h3>
<p>helfen, danken, gefallen, gehören, folgen, antworten, gratulieren, glauben, passen, schmecken, fehlen, begegnen, ähneln, widersprechen, vertrauen</p>

<h3>4. Dative with Adjectives</h3>
<p>Some adjectives require dative: <em>Das ist <strong>mir</strong> egal/wichtig/bekannt/klar/peinlich.</em></p>

<h3>5. Goethe A2 Exam Focus</h3>
<p>Wechselpräpositionen are THE most tested grammar point at A2. Practice recognizing wo? vs. wohin? questions instantly.</p>
`,

'a2-02-reflexive': `
<h2>Reflexive Verbs & Pronouns</h2>

<h3>1. What Are Reflexive Verbs?</h3>
<p>Reflexive verbs have a pronoun that refers back to the subject. The action is performed on oneself.</p>

<h3>2. Reflexive Pronouns</h3>
<table>
  <thead><tr><th>Person</th><th>Accusative</th><th>Dative</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>mich</td><td>mir</td></tr>
    <tr><td>du</td><td>dich</td><td>dir</td></tr>
    <tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
    <tr><td>wir</td><td>uns</td><td>uns</td></tr>
    <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
    <tr><td>sie/Sie</td><td>sich</td><td>sich</td></tr>
  </tbody>
</table>

<h3>3. Accusative vs. Dative Reflexive</h3>
<p><strong>Accusative:</strong> when the reflexive pronoun is the only object</p>
<p><em>Ich wasche <strong>mich</strong>.</em> (I wash myself)</p>
<p><strong>Dative:</strong> when there is also a direct object (body part, etc.)</p>
<p><em>Ich wasche <strong>mir</strong> die Hände.</em> (I wash my hands — "die Hände" is the accusative object)</p>

<h3>4. Common Reflexive Verbs (Accusative)</h3>
<p>sich freuen (auf/über), sich beeilen, sich setzen, sich erinnern (an), sich interessieren (für), sich entscheiden, sich fühlen, sich konzentrieren (auf), sich beschweren (über)</p>

<h3>5. Dative Reflexive Verbs</h3>
<p>sich etwas vorstellen (imagine), sich etwas wünschen (wish for), sich etwas ansehen (look at), sich Sorgen machen (worry)</p>

<h3>6. Word Order</h3>
<p>Reflexive pronoun comes right after the conjugated verb (or after the subject in inversions):</p>
<p><em>Ich freue <strong>mich</strong>. / Morgen freue ich <strong>mich</strong>.</em></p>
`,

'a2-03-prateritum': `
<h2>Simple Past (Präteritum) — Common Verbs</h2>

<h3>1. When to Use Präteritum</h3>
<p>In spoken German, Präteritum is mainly used for: <strong>sein, haben, modal verbs, werden</strong>, and in <strong>written narratives</strong>. All other verbs typically use Perfekt in speech.</p>

<h3>2. Conjugation of sein & haben</h3>
<table>
  <thead><tr><th>Person</th><th>sein → war</th><th>haben → hatte</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>war</td><td>hatte</td></tr>
    <tr><td>du</td><td>warst</td><td>hattest</td></tr>
    <tr><td>er/sie/es</td><td>war</td><td>hatte</td></tr>
    <tr><td>wir</td><td>waren</td><td>hatten</td></tr>
    <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
    <tr><td>sie/Sie</td><td>waren</td><td>hatten</td></tr>
  </tbody>
</table>

<h3>3. Modal Verbs in Präteritum</h3>
<p>Modals lose their umlaut in Präteritum:</p>
<p>können → konnte, müssen → musste, dürfen → durfte, mögen → mochte, wollen → wollte, sollen → sollte</p>

<h3>4. Regular (Weak) Verbs</h3>
<p>Stem + -te, -test, -te, -ten, -tet, -ten: machen → machte, lernen → lernte</p>

<h3>5. Irregular (Strong) Verbs</h3>
<p>Stem vowel changes, no -te ending: gehen → ging, kommen → kam, sehen → sah, schreiben → schrieb</p>
<p>These forms must be memorized from verb tables.</p>

<h3>6. Goethe Exam Usage</h3>
<p>The reading section uses Präteritum extensively. You must recognize these forms even if you don't actively produce them in speech.</p>
`,

'a2-04-conjunctions': `
<h2>Conjunctions & Sentence Structure</h2>

<h3>1. Coordinating Conjunctions (Position 0)</h3>
<p>These do NOT affect word order — the verb stays in position 2:</p>
<p><strong>und, oder, aber, denn, sondern</strong></p>
<p><em>Ich lerne Deutsch, <strong>und</strong> er lernt Spanisch.</em></p>

<h3>2. Subordinating Conjunctions (Verb to End)</h3>
<p>These send the conjugated verb to the END of the clause:</p>
<p><strong>weil, dass, wenn, ob, obwohl, als, bevor, nachdem, während, damit, seit(dem), bis, da</strong></p>
<p><em>Ich lerne Deutsch, <strong>weil</strong> ich in Deutschland arbeiten <strong>möchte</strong>.</em></p>

<h3>3. Word Order in Subordinate Clauses</h3>
<ul>
  <li>Conjunction → subject → ... → conjugated verb at the END</li>
  <li>If the subordinate clause comes first, the main clause starts with the verb (V2 rule): <em><strong>Weil</strong> es regnet, <strong>bleibe</strong> ich zu Hause.</em></li>
</ul>

<h3>4. Key Differences</h3>
<ul>
  <li><strong>weil</strong> (because) vs. <strong>denn</strong> (because): weil → verb at end; denn → normal word order</li>
  <li><strong>wenn</strong> (if/when, repeatable) vs. <strong>als</strong> (when, single past event)</li>
  <li><strong>dass</strong> (that): <em>Ich weiß, dass er kommt.</em></li>
</ul>

<h3>5. Adverbial Connectors (Position 1)</h3>
<p>These act like adverbs, causing subject-verb inversion:</p>
<p><strong>deshalb, deswegen, trotzdem, dann, danach, außerdem</strong></p>
<p><em>Es regnet. <strong>Deshalb</strong> bleibe ich zu Hause.</em> (verb-second after deshalb)</p>
`,

'a2-05-comparative': `
<h2>Comparative & Superlative</h2>

<h3>1. Comparative Formation</h3>
<p>Add <strong>-er</strong> to the adjective: schnell → schnell<strong>er</strong>, klein → klein<strong>er</strong></p>
<p>Use <strong>als</strong> for comparison (NOT "wie"!): <em>Er ist größer <strong>als</strong> ich.</em></p>
<p>Use <strong>so ... wie</strong> for equality: <em>Er ist <strong>so</strong> groß <strong>wie</strong> ich.</em></p>

<h3>2. Superlative Formation</h3>
<p>am + adjective + <strong>-sten</strong>: <em>Er ist <strong>am schnellsten</strong>.</em></p>
<p>Or with article: der/die/das + adjective + <strong>-ste</strong>: <em>Das ist das <strong>schönste</strong> Haus.</em></p>

<h3>3. Umlaut in Comparative/Superlative</h3>
<p>Common one-syllable adjectives add umlaut: alt → <strong>ä</strong>lter → am <strong>ä</strong>ltesten; groß → gr<strong>ö</strong>ßer; jung → j<strong>ü</strong>nger; kalt → k<strong>ä</strong>lter; warm → w<strong>ä</strong>rmer; lang → l<strong>ä</strong>nger</p>

<h3>4. Irregular Forms</h3>
<table>
  <thead><tr><th>Base</th><th>Comparative</th><th>Superlative</th></tr></thead>
  <tbody>
    <tr><td>gut</td><td>besser</td><td>am besten</td></tr>
    <tr><td>viel</td><td>mehr</td><td>am meisten</td></tr>
    <tr><td>gern</td><td>lieber</td><td>am liebsten</td></tr>
    <tr><td>hoch</td><td>höher</td><td>am höchsten</td></tr>
    <tr><td>nah</td><td>näher</td><td>am nächsten</td></tr>
  </tbody>
</table>

<h3>5. Comparative + Adjective Endings</h3>
<p>In attributive position (before noun), comparative still takes adjective endings:</p>
<p><em>ein größ<strong>eres</strong> Haus</em> (comparative -er + adjective ending -es)</p>
`,

'a2-06-prepositions': `
<h2>Prepositions — Complete A2 Overview</h2>

<h3>1. Accusative Prepositions</h3>
<p><strong>durch, für, gegen, ohne, um</strong></p>
<p>Always trigger accusative: <em>Ich laufe <strong>durch den</strong> Park.</em></p>

<h3>2. Dative Prepositions</h3>
<p><strong>aus, bei, mit, nach, seit, von, zu</strong></p>
<p>Always trigger dative: <em>Ich fahre <strong>mit dem</strong> Bus.</em></p>
<p>Contractions: bei dem → beim, von dem → vom, zu dem → zum, zu der → zur</p>

<h3>3. Two-Way Prepositions (Wechselpräpositionen)</h3>
<p><strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong></p>
<p>Dative = location (wo?), Accusative = direction (wohin?)</p>
<p>Contractions: in dem → im, in das → ins, an dem → am, an das → ans</p>

<h3>4. Prepositions with Fixed Meanings</h3>
<ul>
  <li><strong>seit</strong> + dative: since/for (time): <em>Ich lerne seit <strong>einem</strong> Jahr Deutsch.</em></li>
  <li><strong>bei</strong>: at (someone's place), near, during: <em>Ich wohne bei <strong>meinen</strong> Eltern.</em></li>
  <li><strong>nach</strong>: to (countries/cities without article), after: <em>Ich fahre nach Berlin.</em></li>
  <li><strong>zu</strong>: to (people, specific places): <em>Ich gehe zum Arzt.</em></li>
</ul>

<h3>5. Verb + Preposition Combinations</h3>
<p>Many verbs have fixed prepositions: warten <strong>auf</strong> (acc), sich freuen <strong>auf/über</strong>, denken <strong>an</strong> (acc), Angst haben <strong>vor</strong> (dat), sich interessieren <strong>für</strong> (acc)</p>
`,

'a2-07-perfekt-irregular': `
<h2>Perfekt — Irregular Past Participles</h2>

<h3>1. Strong Verb Patterns</h3>
<p>Strong verbs change their stem vowel in Partizip II and use the -en ending:</p>
<table>
  <thead><tr><th>Pattern</th><th>Infinitive → Partizip II</th></tr></thead>
  <tbody>
    <tr><td>ei → ie</td><td>schreiben → geschrieben, bleiben → geblieben</td></tr>
    <tr><td>i → u</td><td>trinken → getrunken, finden → gefunden</td></tr>
    <tr><td>e → o</td><td>sprechen → gesprochen, helfen → geholfen</td></tr>
    <tr><td>a → a</td><td>fahren → gefahren, tragen → getragen</td></tr>
    <tr><td>e → e</td><td>geben → gegeben, lesen → gelesen</td></tr>
  </tbody>
</table>

<h3>2. Mixed Verbs</h3>
<p>These change their stem vowel but use the weak -t ending:</p>
<p>bringen → gebracht, denken → gedacht, kennen → gekannt, nennen → genannt, wissen → gewusst, rennen → gerannt</p>

<h3>3. Verbs with sein in Perfekt</h3>
<p>Movement: gehen → ist gegangen, fahren → ist gefahren, fliegen → ist geflogen, kommen → ist gekommen, laufen → ist gelaufen, schwimmen → ist geschwommen</p>
<p>State change: werden → ist geworden, sterben → ist gestorben, wachsen → ist gewachsen</p>
<p>Exceptions: sein → ist gewesen, bleiben → ist geblieben, passieren → ist passiert</p>

<h3>4. No "ge-" Rules</h3>
<ul>
  <li>Inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-): verstehen → verstanden</li>
  <li>-ieren verbs: studieren → studiert</li>
</ul>
`,

'a2-08-adjective-endings': `
<h2>Adjective Endings (Adjektivdeklination)</h2>

<h3>1. Three Declension Patterns</h3>
<p>Adjective endings depend on: (1) the article type, (2) the case, (3) the gender.</p>

<h3>2. After Definite Articles (Weak Endings)</h3>
<p>After der/die/das/den/dem: adjective gets <strong>-e</strong> or <strong>-en</strong></p>
<table>
  <thead><tr><th></th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td>Nom</td><td>-e</td><td>-e</td><td>-e</td><td>-en</td></tr>
    <tr><td>Akk</td><td>-en</td><td>-e</td><td>-e</td><td>-en</td></tr>
    <tr><td>Dat</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
  </tbody>
</table>
<p><em>der groß<strong>e</strong> Mann, die schön<strong>e</strong> Frau, das klein<strong>e</strong> Kind, den alt<strong>en</strong> Mann</em></p>

<h3>3. After Indefinite Articles (Mixed Endings)</h3>
<p>After ein/eine/kein/mein etc.:</p>
<table>
  <thead><tr><th></th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td>Nom</td><td>-er</td><td>-e</td><td>-es</td><td>-en</td></tr>
    <tr><td>Akk</td><td>-en</td><td>-e</td><td>-es</td><td>-en</td></tr>
    <tr><td>Dat</td><td>-en</td><td>-en</td><td>-en</td><td>-en</td></tr>
  </tbody>
</table>
<p><em>ein groß<strong>er</strong> Mann, eine schön<strong>e</strong> Frau, ein klein<strong>es</strong> Kind</em></p>

<h3>4. Without Article (Strong Endings)</h3>
<p>The adjective itself shows gender/case:</p>
<table>
  <thead><tr><th></th><th>Masc</th><th>Fem</th><th>Neut</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td>Nom</td><td>-er</td><td>-e</td><td>-es</td><td>-e</td></tr>
    <tr><td>Akk</td><td>-en</td><td>-e</td><td>-es</td><td>-e</td></tr>
    <tr><td>Dat</td><td>-em</td><td>-er</td><td>-em</td><td>-en</td></tr>
  </tbody>
</table>
<p><em>kalt<strong>er</strong> Kaffee, frisch<strong>e</strong> Milch, kalt<strong>es</strong> Wasser</em></p>

<h3>5. The Golden Rule</h3>
<p>The gender/case signal must appear ONCE — either on the article or the adjective. If the article shows it (der, die, das), the adjective uses weak -e/-en. If not (ein for masc/neut), the adjective takes over with -er/-es.</p>
`,

'a2-09-imperative': `
<h2>Imperative (Commands)</h2>

<h3>1. Forms</h3>
<table>
  <thead><tr><th>Form</th><th>Formation</th><th>Example (machen)</th><th>Example (lesen)</th></tr></thead>
  <tbody>
    <tr><td>du</td><td>Stem (+ optional -e)</td><td>Mach(e)!</td><td>Lies!</td></tr>
    <tr><td>ihr</td><td>Same as ihr-form</td><td>Macht!</td><td>Lest!</td></tr>
    <tr><td>Sie</td><td>Infinitive + Sie</td><td>Machen Sie!</td><td>Lesen Sie!</td></tr>
  </tbody>
</table>

<h3>2. Special Rules for du-Form</h3>
<ul>
  <li>Stem-changing verbs with e→i/ie keep the change: sprechen → <strong>Sprich!</strong>, lesen → <strong>Lies!</strong>, nehmen → <strong>Nimm!</strong></li>
  <li>Stem-changing verbs with a→ä do NOT change: fahren → <strong>Fahr!</strong> (not "Fähr!")</li>
  <li>Stems ending in -t/-d add -e: arbeiten → <strong>Arbeite!</strong></li>
</ul>

<h3>3. Sein in Imperative</h3>
<p>du: <strong>Sei</strong> ruhig! / ihr: <strong>Seid</strong> ruhig! / Sie: <strong>Seien Sie</strong> ruhig!</p>

<h3>4. Separable Verbs</h3>
<p>Prefix goes to the end: aufstehen → <strong>Steh auf!</strong> / mitkommen → <strong>Komm mit!</strong></p>

<h3>5. Softening Commands</h3>
<p>Add <strong>bitte</strong>, <strong>doch</strong>, <strong>mal</strong> to soften: <em>Hilf mir bitte! / Komm doch mal her!</em></p>
`,

'a2-10-genitive': `
<h2>Genitive Case (Genitiv)</h2>

<h3>1. What Is the Genitive?</h3>
<p>The genitive shows <strong>possession</strong>: <em>Das Auto <strong>des Mannes</strong></em> (the man's car).</p>

<h3>2. Article Changes</h3>
<table>
  <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td>Definite</td><td>des (+s/es)</td><td>der</td><td>des (+s/es)</td><td>der</td></tr>
    <tr><td>Indefinite</td><td>eines (+s/es)</td><td>einer</td><td>eines (+s/es)</td><td>—</td></tr>
  </tbody>
</table>
<p><strong>Masculine and neuter nouns add -s or -es:</strong> des Mann<strong>es</strong>, des Kind<strong>es</strong>, des Auto<strong>s</strong></p>
<p>Rule: One-syllable nouns usually get -es; multi-syllable nouns get -s.</p>

<h3>3. Genitive Prepositions</h3>
<p><strong>wegen</strong> (because of), <strong>während</strong> (during), <strong>trotz</strong> (despite), <strong>statt/anstatt</strong> (instead of), <strong>innerhalb</strong> (within), <strong>außerhalb</strong> (outside of)</p>
<p><em>Wegen <strong>des</strong> Wetters bleiben wir zu Hause.</em></p>

<h3>4. Spoken vs. Written German</h3>
<p>In spoken German, genitive is often replaced by "von + dative": <em>das Auto <strong>von dem</strong> Mann</em>. But the Goethe exam expects genitive in writing!</p>

<h3>5. Names in Genitive</h3>
<p>Names simply add -s without apostrophe: <em><strong>Toms</strong> Auto, <strong>Marias</strong> Buch</em></p>
<p>If the name ends in -s/-ß/-z, use apostrophe: <em><strong>Hans'</strong> Buch</em> or <em>das Buch <strong>von Hans</strong></em></p>
`,

// ─── B1 ────────────────────────────────────────────────────────────────

'b1-01-konjunktiv2-present': `
<h2>Konjunktiv II — Present</h2>

<h3>1. What Is Konjunktiv II?</h3>
<p>Konjunktiv II expresses <strong>unreal/hypothetical situations</strong>, <strong>wishes</strong>, and <strong>polite requests</strong>. It's the German subjunctive mood.</p>

<h3>2. Formation: würde + Infinitive</h3>
<p>For most verbs, use <strong>würde</strong> + infinitive:</p>
<p><em>Ich <strong>würde</strong> gern nach Japan <strong>reisen</strong>.</em> (I would like to travel to Japan)</p>
<table>
  <thead><tr><th>Person</th><th>würde</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>würde</td></tr>
    <tr><td>du</td><td>würdest</td></tr>
    <tr><td>er/sie/es</td><td>würde</td></tr>
    <tr><td>wir</td><td>würden</td></tr>
    <tr><td>ihr</td><td>würdet</td></tr>
    <tr><td>sie/Sie</td><td>würden</td></tr>
  </tbody>
</table>

<h3>3. Own K2 Forms (Used Without würde)</h3>
<p>These verbs use their own Konjunktiv II forms:</p>
<table>
  <thead><tr><th>Verb</th><th>K2 Form</th></tr></thead>
  <tbody>
    <tr><td>sein</td><td>wäre</td></tr>
    <tr><td>haben</td><td>hätte</td></tr>
    <tr><td>können</td><td>könnte</td></tr>
    <tr><td>müssen</td><td>müsste</td></tr>
    <tr><td>dürfen</td><td>dürfte</td></tr>
    <tr><td>sollen</td><td>sollte</td></tr>
    <tr><td>wollen</td><td>wollte</td></tr>
    <tr><td>wissen</td><td>wüsste</td></tr>
  </tbody>
</table>

<h3>4. Conditional Sentences (wenn-Sätze)</h3>
<p><em><strong>Wenn</strong> ich reich <strong>wäre</strong>, <strong>würde</strong> ich um die Welt reisen.</em></p>
<p>Structure: Wenn + ... + K2 verb (end), K2 verb + subject + ...</p>

<h3>5. Polite Requests</h3>
<p><em>Könnten Sie mir bitte helfen? / Dürfte ich Sie etwas fragen? / Hätten Sie einen Moment?</em></p>

<h3>6. Wishes</h3>
<p><em>Ich wünschte, ich hätte mehr Zeit. / Wenn ich doch nur besser Deutsch könnte!</em></p>
`,

'b1-02-passive': `
<h2>Passive Voice (Passiv)</h2>

<h3>1. Vorgangspassiv (Process Passive)</h3>
<p>Formation: <strong>werden</strong> (conjugated) + <strong>Partizip II</strong></p>
<p><em>Das Haus <strong>wird</strong> gebaut.</em> (The house is being built.)</p>

<h3>2. Passive in All Tenses</h3>
<table>
  <thead><tr><th>Tense</th><th>Formation</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Präsens</td><td>wird + P2</td><td>Das Buch wird gelesen.</td></tr>
    <tr><td>Präteritum</td><td>wurde + P2</td><td>Das Buch wurde gelesen.</td></tr>
    <tr><td>Perfekt</td><td>ist + P2 + <strong>worden</strong></td><td>Das Buch ist gelesen worden.</td></tr>
    <tr><td>Plusquamperfekt</td><td>war + P2 + worden</td><td>Das Buch war gelesen worden.</td></tr>
    <tr><td>Futur I</td><td>wird + P2 + werden</td><td>Das Buch wird gelesen werden.</td></tr>
  </tbody>
</table>
<p><strong>Important:</strong> In Perfekt passive, use "worden" (not "geworden")!</p>

<h3>3. Agent (Who Does It?)</h3>
<ul>
  <li><strong>von + Dativ</strong> for people/agents: <em>Das Buch wird <strong>von dem</strong> Lehrer gelesen.</em></li>
  <li><strong>durch + Akkusativ</strong> for impersonal causes: <em>Die Stadt wurde <strong>durch</strong> ein Erdbeben zerstört.</em></li>
  <li><strong>mit + Dativ</strong> for instruments: <em>Der Brief wurde <strong>mit</strong> einem Kugelschreiber geschrieben.</em></li>
</ul>

<h3>4. Modal Verbs + Passive</h3>
<p>Modal + Partizip II + werden: <em>Das <strong>muss</strong> gemacht <strong>werden</strong>.</em></p>

<h3>5. Impersonal Passive</h3>
<p>Used with intransitive verbs (no direct object): <em>Hier <strong>wird</strong> nicht geraucht.</em> (No smoking here.)</p>

<h3>6. Active → Passive Conversion</h3>
<p>Accusative object becomes subject. Subject becomes "von + dative" or is dropped. Verb becomes werden + Partizip II.</p>
`,

'b1-03-relative-clauses': `
<h2>Relative Clauses (Relativsätze)</h2>

<h3>1. What Are Relative Clauses?</h3>
<p>They add information about a noun using a relative pronoun. The verb goes to the END of the relative clause.</p>
<p><em>Der Mann, <strong>der</strong> dort steht, ist mein Lehrer.</em></p>

<h3>2. Relative Pronouns</h3>
<table>
  <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th><th>Plural</th></tr></thead>
  <tbody>
    <tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
    <tr><td>Akk</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
    <tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr>
    <tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
  </tbody>
</table>

<h3>3. How to Choose the Right Pronoun</h3>
<ol>
  <li><strong>Gender/Number:</strong> Match the noun being described (antecedent)</li>
  <li><strong>Case:</strong> Determined by the pronoun's role IN the relative clause</li>
</ol>
<p><em>Die Frau, <strong>die</strong> (nom, f) ich kenne... → Die Frau, <strong>die</strong> (akk, f) ich kenne...</em></p>
<p>Wait — both are "die"! But: <em>Der Mann, <strong>der</strong> (nom) dort steht... vs. Der Mann, <strong>den</strong> (akk) ich kenne...</em></p>

<h3>4. Relative Clauses with Prepositions</h3>
<p>Preposition + relative pronoun: <em>Der Film, <strong>über den</strong> wir gesprochen haben, war gut.</em></p>

<h3>5. "Was" and "Wo" as Relative Pronouns</h3>
<ul>
  <li><strong>was</strong>: after alles, etwas, nichts, das (demonstrative), superlatives: <em>Alles, <strong>was</strong> er sagt, ist richtig.</em></li>
  <li><strong>wo</strong>: for places: <em>Die Stadt, <strong>wo</strong> ich wohne...</em> (or: in der)</li>
</ul>
`,

'b1-04-infinitive-zu': `
<h2>Infinitive Clauses with "zu"</h2>

<h3>1. Basic Structure</h3>
<p><em>Ich versuche, Deutsch <strong>zu lernen</strong>.</em></p>
<p>The infinitive with "zu" goes to the end. A comma is recommended before the infinitive clause.</p>

<h3>2. With Separable Verbs</h3>
<p>"zu" goes between the prefix and the verb: <em>Ich versuche, früh <strong>aufzustehen</strong>.</em></p>

<h3>3. Verbs That Require "zu + Infinitive"</h3>
<p>versuchen, beginnen, anfangen, aufhören, vergessen, planen, hoffen, vorhaben, sich freuen, sich entscheiden</p>

<h3>4. "um ... zu" (in order to)</h3>
<p><em>Ich lerne Deutsch, <strong>um</strong> in Deutschland <strong>zu arbeiten</strong>.</em></p>

<h3>5. "ohne ... zu" (without doing)</h3>
<p><em>Er ging, <strong>ohne</strong> etwas <strong>zu sagen</strong>.</em></p>

<h3>6. "anstatt/statt ... zu" (instead of doing)</h3>
<p><em>Sie spielte, <strong>anstatt zu lernen</strong>.</em></p>

<h3>7. When NOT to Use "zu"</h3>
<p>After modal verbs, lassen, sehen, hören, gehen, fahren, lernen: <em>Ich <strong>kann</strong> schwimmen.</em> (no "zu"!)</p>
`,

'b1-05-prateritum-full': `
<h2>Präteritum — Full Mastery for B1</h2>

<h3>1. Why Präteritum Matters at B1</h3>
<p>The Goethe B1 exam reading section uses Präteritum extensively. You must recognize all common strong verb forms.</p>

<h3>2. Strong Verb Vowel Change Patterns</h3>
<table>
  <thead><tr><th>Pattern</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td>ei → ie</td><td>schreiben → schrieb, bleiben → blieb, steigen → stieg</td></tr>
    <tr><td>ie → o</td><td>fliegen → flog, ziehen → zog, bieten → bot</td></tr>
    <tr><td>i → a</td><td>singen → sang, trinken → trank, finden → fand</td></tr>
    <tr><td>e → a</td><td>sprechen → sprach, helfen → half, nehmen → nahm</td></tr>
    <tr><td>a → u</td><td>fahren → fuhr, tragen → trug, waschen → wusch</td></tr>
    <tr><td>a → ie</td><td>fallen → fiel, lassen → ließ, schlafen → schlief</td></tr>
  </tbody>
</table>

<h3>3. Conjugation Endings (Strong Verbs)</h3>
<p>ich/er: no ending (just stem change), du: -st, wir/sie: -en, ihr: -t</p>
<p><em>ich ging, du gingst, er ging, wir gingen, ihr gingt, sie gingen</em></p>

<h3>4. Mixed Verbs</h3>
<p>Stem change + weak endings: bringen → brachte, denken → dachte, kennen → kannte, wissen → wusste</p>

<h3>5. Präteritum vs. Perfekt Usage</h3>
<ul>
  <li><strong>Präteritum preferred for:</strong> sein (war), haben (hatte), modals (konnte, musste), werden (wurde), wissen (wusste)</li>
  <li><strong>Perfekt preferred for:</strong> all other verbs in speech</li>
  <li><strong>Written narratives:</strong> Präteritum throughout</li>
</ul>
`,

'b1-06-indirect-speech': `
<h2>Indirect Speech (Indirekte Rede) & Konjunktiv I</h2>

<h3>1. What Is Konjunktiv I?</h3>
<p>Konjunktiv I is used to report what someone else said without confirming its truth.</p>
<p>Direct: <em>Er sagt: "Ich <strong>bin</strong> krank."</em></p>
<p>Indirect: <em>Er sagt, er <strong>sei</strong> krank.</em></p>

<h3>2. Formation</h3>
<p>Infinitive stem + endings: -e, -est, -e, -en, -et, -en</p>
<table>
  <thead><tr><th>Person</th><th>haben</th><th>sein</th><th>können</th></tr></thead>
  <tbody>
    <tr><td>er/sie/es</td><td>habe</td><td>sei</td><td>könne</td></tr>
    <tr><td>sie (pl.)</td><td>hätten*</td><td>seien</td><td>könnten*</td></tr>
  </tbody>
</table>
<p>*When K1 is identical to indicative, use K2 instead.</p>

<h3>3. K1 Replacement Rule</h3>
<p>If K1 form = indicative form (which happens often with ich, wir, sie/Sie), use <strong>Konjunktiv II</strong> instead:</p>
<p><em>Sie sagen, sie <strong>hätten</strong> keine Zeit.</em> (not "haben" — identical to indicative)</p>

<h3>4. Dass-Clause Alternative</h3>
<p>In everyday German, indirect speech often uses dass + indicative:</p>
<p><em>Er sagt, <strong>dass</strong> er krank <strong>ist</strong>.</em> (less formal)</p>

<h3>5. Goethe B1 Exam</h3>
<p>At B1, you mainly need to recognize K1 in reading. Active production is more heavily tested at B2/C1.</p>
`,

'b1-07-plusquamperfekt': `
<h2>Past Perfect (Plusquamperfekt)</h2>

<h3>1. Formation</h3>
<p><strong>hatte/war</strong> (Präteritum of haben/sein) + <strong>Partizip II</strong></p>
<p><em>Ich <strong>hatte</strong> schon gegessen. Er <strong>war</strong> schon gegangen.</em></p>

<h3>2. When to Use It</h3>
<p>For an action that happened <strong>BEFORE another past action</strong>:</p>
<p><em><strong>Nachdem</strong> ich gegessen <strong>hatte</strong>, ging ich spazieren.</em></p>
<p><em><strong>Als</strong> er ankam, <strong>waren</strong> wir schon <strong>gegangen</strong>.</em></p>

<h3>3. Signal Words</h3>
<p><strong>nachdem</strong> (after) is the classic Plusquamperfekt trigger:</p>
<p>Nachdem + Plusquamperfekt, ... Präteritum/Perfekt</p>

<h3>4. Haben vs. Sein (Same Rules as Perfekt)</h3>
<p>Movement/change verbs → war; all others → hatte</p>

<h3>5. Goethe Exam Pattern</h3>
<p>"Nachdem"-sentences are heavily tested. Make sure you know the tense sequence: nachdem + Plusquamperfekt → main clause in Präteritum.</p>
`,

'b1-08-n-deklination': `
<h2>N-Declension (N-Deklination)</h2>

<h3>1. What Is N-Declension?</h3>
<p>Certain masculine nouns add <strong>-(e)n</strong> in ALL cases except nominative singular.</p>

<h3>2. Which Nouns?</h3>
<ul>
  <li>Masculine nouns ending in <strong>-e</strong> referring to people/animals: der Junge, der Kollege, der Kunde, der Löwe, der Neffe, der Affe</li>
  <li>Nationality/profession nouns ending in <strong>-e</strong>: der Deutsche, der Franzose, der Grieche</li>
  <li>Masculine nouns from Greek/Latin ending in <strong>-ant, -ent, -ist, -at, -oge</strong>: der Student, der Patient, der Polizist, der Diplomat, der Biologe</li>
  <li>Special: der Herr (adds -n in singular, -en in plural), der Mensch, der Nachbar, der Bauer</li>
</ul>

<h3>3. Declension Pattern</h3>
<table>
  <thead><tr><th>Case</th><th>Regular Masc</th><th>N-Decl. (der Junge)</th></tr></thead>
  <tbody>
    <tr><td>Nominativ</td><td>der Mann</td><td>der Junge</td></tr>
    <tr><td>Akkusativ</td><td>den Mann</td><td>den Junge<strong>n</strong></td></tr>
    <tr><td>Dativ</td><td>dem Mann</td><td>dem Junge<strong>n</strong></td></tr>
    <tr><td>Genitiv</td><td>des Mann<strong>es</strong></td><td>des Junge<strong>n</strong></td></tr>
  </tbody>
</table>

<h3>4. Exception: der Name, der Buchstabe, der Gedanke</h3>
<p>These add -n in accusative/dative but -ns in genitive: des Name<strong>ns</strong>, des Gedanke<strong>ns</strong></p>

<h3>5. Common Exam Mistake</h3>
<p>Forgetting to decline: "Ich frage den Student" ✗ → "Ich frage den Student<strong>en</strong>" ✓</p>
`,

// ─── B2 ────────────────────────────────────────────────────────────────

'b2-01-konjunktiv2-past': `
<h2>Konjunktiv II — Past</h2>

<h3>1. Formation</h3>
<p><strong>hätte/wäre + Partizip II</strong></p>
<p><em>Wenn ich das <strong>gewusst hätte</strong>, hätte ich anders gehandelt.</em></p>
<p><em>Wenn er früher <strong>losgefahren wäre</strong>, hätte er den Zug erreicht.</em></p>

<h3>2. Hätte vs. Wäre</h3>
<p>Same rule as Perfekt: movement/change verbs → <strong>wäre</strong>; all others → <strong>hätte</strong></p>
<ul>
  <li>hätte gemacht, hätte gesagt, hätte gelernt</li>
  <li>wäre gegangen, wäre gefahren, wäre geworden, wäre geblieben</li>
</ul>

<h3>3. When to Use K2 Past</h3>
<ul>
  <li><strong>Counterfactual past:</strong> What would have happened (but didn't)</li>
  <li><strong>Past regrets:</strong> Ich wünschte, ich hätte mehr gelernt.</li>
  <li><strong>"Almost" situations:</strong> Fast wäre ich gefallen.</li>
  <li><strong>Past advice:</strong> An deiner Stelle hätte ich das nicht gemacht.</li>
</ul>

<h3>4. Modal Verbs in K2 Past</h3>
<p>hätte + infinitive + modal infinitive (double infinitive!):</p>
<p><em>Das <strong>hätte</strong> nicht passieren <strong>müssen</strong>.</em> (That didn't have to happen.)</p>
<p><em>Er <strong>hätte</strong> kommen <strong>können</strong>.</em> (He could have come.)</p>

<h3>5. K2 Present vs. K2 Past</h3>
<table>
  <thead><tr><th>K2 Present (unreal now)</th><th>K2 Past (unreal then)</th></tr></thead>
  <tbody>
    <tr><td>Wenn ich reich wäre...</td><td>Wenn ich reich gewesen wäre...</td></tr>
    <tr><td>Ich würde reisen.</td><td>Ich wäre gereist.</td></tr>
  </tbody>
</table>
`,

'b2-02-participial-attributes': `
<h2>Extended Participial Attributes</h2>

<h3>1. What Are They?</h3>
<p>Participial attributes compress relative clauses into adjective-like structures BEFORE the noun. They are extremely common in formal/academic German and heavily tested at B2/C1.</p>

<h3>2. Partizip I (Present Participle)</h3>
<p>Formation: infinitive + d + adjective ending</p>
<p>Meaning: <strong>ongoing/active</strong> action</p>
<p><em>der <strong>lesende</strong> Mann</em> = the man who is reading</p>
<p><em>das <strong>schlafende</strong> Kind</em> = the child who is sleeping</p>

<h3>3. Partizip II (Past Participle)</h3>
<p>Formation: Partizip II + adjective ending</p>
<p>Meaning: <strong>completed/passive</strong> action</p>
<p><em>das <strong>geschriebene</strong> Buch</em> = the book that was written</p>
<p><em>der <strong>reparierte</strong> Computer</em> = the computer that was repaired</p>

<h3>4. Extended Attributes</h3>
<p>Additional information goes BETWEEN the article and the participle:</p>
<p><em>die <strong>seit Jahren in Deutschland lebenden</strong> Ausländer</em></p>
<p>= die Ausländer, die seit Jahren in Deutschland leben</p>

<h3>5. How to Read Extended Attributes</h3>
<ol>
  <li>Find the article (die/der/das...)</li>
  <li>Find the noun at the end</li>
  <li>Everything in between is the participial attribute</li>
  <li>Convert to a relative clause to understand it</li>
</ol>

<h3>6. Adjective Endings Still Apply</h3>
<p>The participle takes normal adjective endings based on gender, case, and article type.</p>
`,

'b2-03-subjunctive-modals': `
<h2>Subjective Modal Verbs (Subjektive Modalverben)</h2>

<h3>1. Objective vs. Subjective Use</h3>
<p><strong>Objective (normal):</strong> <em>Er <strong>muss</strong> arbeiten.</em> (He must work — he has to.)</p>
<p><strong>Subjective (speaker's assumption):</strong> <em>Er <strong>muss</strong> krank <strong>sein</strong>.</em> (He must be sick — I'm pretty sure.)</p>

<h3>2. Subjective Modal Meanings</h3>
<table>
  <thead><tr><th>Modal</th><th>Degree of Certainty</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>müssen</td><td>~95% certain</td><td>Er muss krank sein. (He must be sick.)</td></tr>
    <tr><td>dürfte</td><td>~80% probable</td><td>Er dürfte zu Hause sein. (He's probably at home.)</td></tr>
    <tr><td>kann/könnte</td><td>~50% possible</td><td>Er könnte recht haben. (He might be right.)</td></tr>
    <tr><td>mag</td><td>~50% concessive</td><td>Das mag sein. (That may be.)</td></tr>
    <tr><td>sollen</td><td>reported claim</td><td>Er soll reich sein. (He's said to be rich.)</td></tr>
    <tr><td>wollen</td><td>unverified self-claim</td><td>Er will das gesehen haben. (He claims to have seen it.)</td></tr>
  </tbody>
</table>

<h3>3. Past Reference with Subjective Modals</h3>
<p>Modal + Partizip II + haben/sein:</p>
<p><em>Er <strong>muss</strong> das <strong>gewusst haben</strong>.</em> (He must have known that.)</p>
<p><em>Sie <strong>soll</strong> dort <strong>gewesen sein</strong>.</em> (She is said to have been there.)</p>

<h3>4. Sollen vs. Wollen</h3>
<ul>
  <li><strong>sollen:</strong> Others say it (hearsay): <em>Er soll intelligent sein.</em></li>
  <li><strong>wollen:</strong> The person claims it themselves (unverified): <em>Er will das nicht gemacht haben.</em></li>
</ul>

<h3>5. Goethe B2 Exam</h3>
<p>Subjective modals appear frequently in reading comprehension. Recognizing the difference between objective and subjective use is crucial.</p>
`,

'b2-04-nominalization': `
<h2>Nominalization (Nominalisierung)</h2>

<h3>1. What Is Nominalization?</h3>
<p>Converting verbs, adjectives, or other word classes into nouns. Very common in formal/academic German.</p>

<h3>2. Verb → Noun</h3>
<ul>
  <li><strong>Infinitive as noun:</strong> das Lesen (reading), das Schwimmen (swimming) — always neuter</li>
  <li><strong>-ung suffix:</strong> die Erfahrung, die Bedeutung, die Lösung — always feminine</li>
  <li><strong>Other suffixes:</strong> -heit/-keit (die Freiheit, die Möglichkeit), -nis (das Ergebnis), -tion (die Information)</li>
</ul>

<h3>3. Adjective → Noun</h3>
<p>Adjectives become nouns with adjective endings:</p>
<p><em>der Alte (the old man), die Alte (the old woman), das Alte (the old thing), die Alten (the old people)</em></p>
<p>After etwas/nichts/viel/wenig: <em>etwas <strong>Neues</strong>, nichts <strong>Besonderes</strong></em> (neuter with strong ending)</p>

<h3>4. Verbal Nouns with Prepositions</h3>
<p>Verb + preposition → Noun + preposition:</p>
<p><em>sich freuen <strong>auf</strong> → die Freude <strong>auf</strong></em></p>
<p><em>hoffen <strong>auf</strong> → die Hoffnung <strong>auf</strong></em></p>

<h3>5. Why It Matters for Goethe</h3>
<p>Goethe B2/C1 reading texts are full of nominalizations. You must recognize that "die Durchführung" = performing/carrying out, "die Bearbeitung" = processing, etc.</p>
`,

'b2-05-futur2': `
<h2>Future Perfect (Futur II)</h2>

<h3>1. Formation</h3>
<p><strong>werden + Partizip II + haben/sein</strong></p>
<p><em>Bis morgen <strong>werde</strong> ich das Buch <strong>gelesen haben</strong>.</em></p>
<p><em>Er <strong>wird</strong> schon <strong>angekommen sein</strong>.</em></p>

<h3>2. Two Uses</h3>
<h4>a) Future completion (by a certain time)</h4>
<p><em>Bis nächste Woche <strong>werde</strong> ich die Arbeit <strong>beendet haben</strong>.</em></p>

<h4>b) Assumption about the past (much more common!)</h4>
<p><em>Er <strong>wird</strong> den Bus <strong>verpasst haben</strong>.</em> (He probably missed the bus.)</p>
<p>This is equivalent to subjective "muss + Partizip II + haben": <em>Er muss den Bus verpasst haben.</em></p>

<h3>3. Signal Words</h3>
<p><strong>bis</strong> (by/until), <strong>wohl</strong> (probably), <strong>sicher</strong> (surely), <strong>wahrscheinlich</strong> (probably), <strong>vermutlich</strong> (presumably)</p>

<h3>4. Goethe Exam Context</h3>
<p>Futur II is relatively rare but appears in B2/C1 exams, especially for expressing assumptions about past events.</p>
`,

// ─── C1 ────────────────────────────────────────────────────────────────

'c1-01-passive-alternatives': `
<h2>Passive Alternatives (Passiversatzformen)</h2>

<h3>1. Why Passive Alternatives?</h3>
<p>Academic and formal German avoids excessive passive. These alternatives express passive meaning more elegantly.</p>

<h3>2. sich lassen + Infinitive</h3>
<p>Meaning: "can be done"</p>
<p><em>Das Problem <strong>lässt sich</strong> lösen.</em> = Das Problem kann gelöst werden.</p>
<p>Past: <em>Das <strong>ließ sich</strong> nicht vermeiden.</em></p>

<h3>3. sein + zu + Infinitive</h3>
<p>Meaning: "must/can be done" (context determines which)</p>
<p><em>Die Aufgabe <strong>ist</strong> bis morgen <strong>zu erledigen</strong>.</em> (must be done)</p>
<p><em>Die Aufgabe <strong>ist</strong> leicht <strong>zu lösen</strong>.</em> (can be solved — with "leicht/schwer" = possibility)</p>

<h3>4. -bar / -lich Adjectives</h3>
<p>Equivalent to English "-able/-ible": machbar (doable), lösbar (solvable), trinkbar (drinkable), essbar (edible), lesbar (readable), erreichbar (reachable), unübersetzbar (untranslatable)</p>

<h3>5. Bekommen-Passiv (Recipient Passive)</h3>
<p>Focus on the person who RECEIVES something:</p>
<p><em>Er <strong>bekommt</strong> das Buch <strong>geschenkt</strong>.</em> (He gets the book as a gift.)</p>
<p>Also with: kriegen, erhalten</p>

<h3>6. bleiben + zu + Infinitive</h3>
<p><em>Es <strong>bleibt abzuwarten</strong>.</em> = It remains to be seen.</p>

<h3>7. es gilt + zu + Infinitive</h3>
<p><em>Es <strong>gilt zu beachten</strong>, dass...</em> = It is important to note that...</p>
`,

'c1-02-connectors-advanced': `
<h2>Advanced Connectors & Complex Sentence Structure</h2>

<h3>1. Two-Part Connectors (Zweiteilige Konnektoren)</h3>
<table>
  <thead><tr><th>Connector</th><th>Meaning</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>je ... desto/umso</td><td>the more ... the more</td><td>Je mehr du übst, desto besser wirst du.</td></tr>
    <tr><td>sowohl ... als auch</td><td>both ... and</td><td>Er spricht sowohl Deutsch als auch Englisch.</td></tr>
    <tr><td>weder ... noch</td><td>neither ... nor</td><td>Sie kann weder singen noch tanzen.</td></tr>
    <tr><td>nicht nur ... sondern auch</td><td>not only ... but also</td><td>Er ist nicht nur intelligent, sondern auch fleißig.</td></tr>
    <tr><td>entweder ... oder</td><td>either ... or</td><td>Entweder kommst du mit, oder du bleibst hier.</td></tr>
    <tr><td>zwar ... aber</td><td>indeed ... but</td><td>Es ist zwar teuer, aber gut.</td></tr>
  </tbody>
</table>

<h3>2. Concessive Connectors</h3>
<p><strong>obwohl/obgleich/obschon</strong> (although — subordinating → verb at end)</p>
<p><strong>trotzdem/dennoch/nichtsdestotrotz</strong> (nevertheless — adverbial → verb inversion)</p>
<p><em>Obwohl es regnet, geht er spazieren.</em> = <em>Es regnet. Trotzdem geht er spazieren.</em></p>

<h3>3. Causal Connectors</h3>
<p><strong>weil/da</strong> (because — subordinating), <strong>denn</strong> (because — coordinating), <strong>nämlich</strong> (namely — adverb, no inversion, mid-sentence)</p>

<h3>4. Conditional Structures</h3>
<p><strong>falls</strong> (in case), <strong>sofern</strong> (provided that), <strong>vorausgesetzt, dass</strong> (provided that)</p>

<h3>5. Consecutive/Result Connectors</h3>
<p><strong>so ... dass</strong> (so ... that), <strong>folglich/infolgedessen</strong> (consequently)</p>

<h3>6. "Indem" (by doing)</h3>
<p><em>Man lernt am besten, <strong>indem</strong> man viel <strong>übt</strong>.</em> (One learns best by practicing a lot.)</p>
`,

'c1-03-konjunktiv1-advanced': `
<h2>Konjunktiv I — Advanced (Indirect Speech in Depth)</h2>

<h3>1. Full K1 Conjugation</h3>
<p>Stem (from infinitive) + endings: -e, -est, -e, -en, -et, -en</p>
<table>
  <thead><tr><th></th><th>haben</th><th>sein</th><th>werden</th><th>können</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>habe*</td><td>sei</td><td>werde*</td><td>könne</td></tr>
    <tr><td>du</td><td>habest</td><td>sei(e)st</td><td>werdest</td><td>könnest</td></tr>
    <tr><td>er/sie/es</td><td>habe</td><td>sei</td><td>werde</td><td>könne</td></tr>
    <tr><td>wir</td><td>haben*</td><td>seien</td><td>werden*</td><td>können*</td></tr>
    <tr><td>ihr</td><td>habet</td><td>seiet</td><td>werdet*</td><td>könnet</td></tr>
    <tr><td>sie/Sie</td><td>haben*</td><td>seien</td><td>werden*</td><td>können*</td></tr>
  </tbody>
</table>
<p>*Forms identical to indicative → replace with K2</p>

<h3>2. Replacement Rule in Practice</h3>
<p>When K1 = indicative, use K2:</p>
<ul>
  <li><em>Sie sagen, sie <strong>hätten</strong> keine Zeit.</em> (K1 "haben" = indicative, so use K2 "hätten")</li>
  <li><em>Er sagte, ich <strong>solle</strong> kommen.</em> (K1 "solle" ≠ "soll", so K1 works)</li>
</ul>

<h3>3. K1 Past (for reporting past events)</h3>
<p>K1 of haben/sein + Partizip II:</p>
<p><em>Er sagte, er <strong>habe</strong> das Buch <strong>gelesen</strong>.</em></p>
<p><em>Sie sagte, sie <strong>sei</strong> dort <strong>gewesen</strong>.</em></p>

<h3>4. K1 in Fixed Expressions</h3>
<p><em>Es <strong>lebe</strong> der König!</em> (Long live the king!)</p>
<p><em>Man <strong>nehme</strong> 200g Mehl...</em> (One takes... — in recipes)</p>
<p><em><strong>Sei</strong> es wie es <strong>sei</strong>.</em> (Be that as it may.)</p>

<h3>5. Goethe C1 Writing</h3>
<p>For the Schreiben section, you must use K1 correctly when reporting others' opinions in essays.</p>
`,

'c1-04-functional-verbs': `
<h2>Functional Verb Structures (Funktionsverbgefüge)</h2>

<h3>1. What Are FVG?</h3>
<p>A verb + noun combination where the noun carries the meaning and the verb is "empty" (functional). Very common in formal/bureaucratic German.</p>

<h3>2. Common Functional Verb Structures</h3>
<table>
  <thead><tr><th>FVG</th><th>Meaning</th><th>Simple Verb</th></tr></thead>
  <tbody>
    <tr><td>eine Frage stellen</td><td>to ask a question</td><td>fragen</td></tr>
    <tr><td>eine Entscheidung treffen</td><td>to make a decision</td><td>entscheiden</td></tr>
    <tr><td>Einfluss nehmen auf</td><td>to influence</td><td>beeinflussen</td></tr>
    <tr><td>in Betracht ziehen</td><td>to consider</td><td>betrachten/erwägen</td></tr>
    <tr><td>zur Verfügung stehen</td><td>to be available</td><td>verfügbar sein</td></tr>
    <tr><td>in Anspruch nehmen</td><td>to make use of</td><td>beanspruchen/nutzen</td></tr>
    <tr><td>in Kraft treten</td><td>to take effect</td><td>wirksam werden</td></tr>
    <tr><td>Kritik üben an</td><td>to criticize</td><td>kritisieren</td></tr>
    <tr><td>Bezug nehmen auf</td><td>to refer to</td><td>sich beziehen auf</td></tr>
    <tr><td>Antrag stellen</td><td>to submit an application</td><td>beantragen</td></tr>
    <tr><td>zur Kenntnis nehmen</td><td>to take note of</td><td>bemerken</td></tr>
    <tr><td>Rücksicht nehmen auf</td><td>to show consideration</td><td>berücksichtigen</td></tr>
    <tr><td>in Frage stellen</td><td>to question/challenge</td><td>bezweifeln</td></tr>
    <tr><td>unter Beweis stellen</td><td>to prove/demonstrate</td><td>beweisen</td></tr>
    <tr><td>zum Ausdruck bringen</td><td>to express</td><td>ausdrücken</td></tr>
  </tbody>
</table>

<h3>3. Why They Matter</h3>
<p>FVG sound more formal and are expected in Goethe C1 writing. They also appear heavily in reading comprehension texts.</p>

<h3>4. Aktionsart Distinction</h3>
<ul>
  <li><strong>Inchoative (beginning):</strong> in Gang kommen (get going), in Kraft treten (take effect)</li>
  <li><strong>Durative (ongoing):</strong> zur Verfügung stehen (be available), unter Druck stehen (be under pressure)</li>
  <li><strong>Causative (causing):</strong> in Gang setzen (set in motion), unter Druck setzen (put under pressure)</li>
</ul>
`,

'c1-05-preposition-verb': `
<h2>Verb-Preposition Combinations (Verben mit festen Präpositionen)</h2>

<h3>1. Why They're Difficult</h3>
<p>German verbs have fixed prepositions that often differ from English. You must memorize each combination including the case the preposition takes.</p>

<h3>2. Important Combinations (by Preposition)</h3>

<h4>an + Akkusativ</h4>
<p>denken an, sich erinnern an, glauben an, sich gewöhnen an, sich wenden an</p>

<h4>an + Dativ</h4>
<p>teilnehmen an, leiden an, arbeiten an, zweifeln an, sich beteiligen an, liegen an</p>

<h4>auf + Akkusativ</h4>
<p>warten auf, sich freuen auf, achten auf, sich konzentrieren auf, verzichten auf, sich verlassen auf, sich beziehen auf, reagieren auf, hoffen auf, sich vorbereiten auf, bestehen auf</p>

<h4>über + Akkusativ</h4>
<p>sich freuen über, sich beschweren über, sich ärgern über, nachdenken über, sprechen über, diskutieren über, berichten über, sich informieren über, sich wundern über, verfügen über</p>

<h4>für + Akkusativ</h4>
<p>sich interessieren für, sich entscheiden für, sorgen für, sich bedanken für, kämpfen für, sich einsetzen für</p>

<h4>mit + Dativ</h4>
<p>sich beschäftigen mit, rechnen mit, sich unterhalten mit, anfangen mit, aufhören mit, beginnen mit</p>

<h4>von + Dativ</h4>
<p>abhängen von, träumen von, sich erholen von, sich verabschieden von, handeln von</p>

<h4>vor + Dativ</h4>
<p>Angst haben vor, sich fürchten vor, warnen vor, sich schützen vor, sich ekeln vor</p>

<h3>3. Da-Compounds (Pronominal Adverbs)</h3>
<p>For things (not people), replace preposition + pronoun with <strong>da(r) + preposition</strong>:</p>
<p><em>Ich denke <strong>daran</strong>.</em> (I'm thinking about it.) — NOT "Ich denke an es"</p>
<p><em>Ich freue mich <strong>darüber</strong>.</em> (I'm happy about it.)</p>

<h3>4. Wo-Compounds (Questions about Things)</h3>
<p><em><strong>Worauf</strong> wartest du?</em> (What are you waiting for?)</p>
<p><em><strong>Woran</strong> denkst du?</em> (What are you thinking about?)</p>
<p>For people, use preposition + wen/wem: <em>Auf <strong>wen</strong> wartest du?</em></p>

<h3>5. Goethe C1 Strategy</h3>
<p>These combinations are tested in cloze exercises and writing. Create a dedicated list and review regularly. Pay special attention to case (an + Akk vs. an + Dat).</p>
`,

};
