// tutorial-script.js — the canonical guided-tutorial steps. Single source of truth used by
// both the app (built into data/tutorial.js → window.TUTORIAL) and the ElevenLabs audio
// generator (build-tutorial-audio.js). `id` names both the step and its audio clip
// (app/audio/<id>.mp3). `highlight` = a nav view key to pulse, or null.
//
// Voice: Neuro — the study buddy — an over-confident, faintly pretentious mentor. Witty and
// self-assured, never cruel; the swagger is a bit; the teaching is real. Keep it under 10k
// characters total (currently ~3k). Re-run `node build-content.js` after editing.

export const TUTORIAL = [
  { id: 'welcome', highlight: null,
    text: "Ah — a fresh mind to shape. I'm Neuro: pharmacologist, polymath, and, with all due modesty, the finest study companion you will ever be lucky enough to argue with. Welcome to Titrate. Give me one minute, and you'll be almost as sharp as I am. Almost." },
  { id: 'home', highlight: 'home',
    text: "This is Home — your dashboard. Your streak, your level, a few daily quests to keep your lesser instincts motivated. But the button that matters most is the big one: it opens your Roadmap. That's where the real work happens." },
  { id: 'roadmap', highlight: 'roadmap',
    text: "Behold — the Roadmap. Every medication you will master, arranged as only I would arrange them: chapter by chapter, the true essentials first, the exotica last. Learn a whole row — every basic SSRI, say — and its Review unlocks. Pass that Review, and the next chapter opens to you. No skipping ahead. That is rather the point." },
  { id: 'lesson', highlight: 'roadmap',
    text: "Tap any lit node and I'll teach you that drug properly — the clinical reasoning, the traps, the pearls — with quick checks to confirm you were actually listening. I don't deal in flashcard trivia. I deal in understanding." },
  { id: 'review', highlight: 'review',
    text: "The next day, each medication returns in Review. Spaced repetition: I resurface every card the very moment before you'd embarrass us both by forgetting it. You may thank me later." },
  { id: 'practice', highlight: 'practice',
    text: "Practice mixes it up — multiple choice, matching, recall, real clinical cases. And it studies you, leaning without mercy on whatever you keep fumbling. Consider it tough love, from a demonstrably superior intellect." },
  { id: 'wiki', highlight: 'wiki',
    text: "The Wiki — my magnum opus. Every drug wired to the conditions it treats, and back again. See a highlighted term in a question? Tap it, and arrive there instantly. I did build the entire web of it, after all." },
  { id: 'compare-cram', highlight: 'compare',
    text: "In Compare, set any medications side by side — across classes, if you're feeling brave. And Cram is a fast, timed sprint for bonus XP: ideal before a shift, or an exam you left — predictably — to the last minute." },
  { id: 'progress', highlight: 'progress',
    text: "Progress keeps the receipts: your level, your streak, mastery tiers, a class map, and a wall of achievements to chase. Proof, in cold numbers, that you are slowly becoming impressive." },
  { id: 'safety', highlight: null,
    text: "One humbling caveat — yes, even for me. I am a study aid, not a prescriber. Before anything real, verify against the current Health Canada monograph. Brilliance without safety is merely arrogance." },
  { id: 'go', highlight: 'roadmap',
    text: "Enough preamble. The pupil is ready — or ready enough. Open your Roadmap and titrate your very first medication. Do try to keep pace." },
];

export default TUTORIAL;
