/* ============================================================
   My Baligha Journey — interactive lesson
   Single-file vanilla JS app. No build step, no dependencies.
   ============================================================ */

const ICONS = {
  lantern: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2.2M9 3.6h6l1 2.4H8l1-2.4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 6.6h10l-1.1 11.4a2 2 0 0 1-2 1.8h-3.8a2 2 0 0 1-2-1.8L7 6.6Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9.5 9.5c0 2 1 3 2.5 3s2.5-1 2.5-3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M10.3 20.2h3.4M11 22h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4.5 4.5L19.5 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.5s-7.5-4.6-10-9.2C.4 8 2 4.5 5.6 4A5 5 0 0 1 12 7a5 5 0 0 1 6.4-3c3.6.5 5.2 4 3.6 7.3-2.5 4.6-10 9.2-10 9.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  moonstar: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 3.5a8 8 0 1 0 5 12.7A6.3 6.3 0 0 1 15.5 3.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M19.3 4.2l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z" fill="currentColor"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.2c2.4-1 5-1.2 7 0v13.6c-2-1.2-4.6-1-7 0V5.2Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M20 5.2c-2.4-1-5-1.2-7 0v13.6c2-1.2 4.6-1 7 0V5.2Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
};

/* ---------------- content data ---------------- */

const QUESTIONS = [
  { id:"q1", num:1, title:"What does “baligha” mean?", tagline:"A new stage of dignity, worship, and responsibility",
    a:{label:"Simple answer", text:"Baligha means a girl has reached the age when Islamic duties become wajib for her."},
    b:{label:"Heart answer", text:"It means Allah sees me as capable. I am old enough to speak to Allah, obey Him, and grow closer to Him."},
    talk:"What is one responsibility you already do well?",
    ref:"Sistani, Adulthood/Puberty Q&A · Summary of Rules, Issue 2" },
  { id:"q2", num:2, title:"What is Islam?", tagline:"Islam means choosing Allah’s guidance with love and trust",
    a:{label:"Simple answer", text:"Islam is submitting to Allah: learning what He loves and trying to live that way."},
    b:{label:"Why it is beautiful", text:"Islam gives my life direction: worship, good character, family, modesty, justice, and mercy."},
    talk:"Where do you see mercy in Islam?",
    ref:"Qur’an 2:112 · Qur’an 16:97" },
  { id:"q3", num:3, title:"Who is a Muslim?", tagline:"A Muslim believes in Allah and follows His Messenger ﷺ and the Ahlul Bayt عليهم السلام",
    a:{label:"Simple answer", text:"A Muslim believes there is no god but Allah and that Prophet Muhammad ﷺ is His messenger."},
    b:{label:"Shia identity", text:"As Shia Muslims, we also love and follow the guidance of the Ahlul Bayt عليهم السلام."},
    talk:"What is one good character trait a Muslim should show?",
    ref:"Qur’an 49:14 · Qur’an 42:23" },
  { id:"q4", num:4, title:"Why does Allah want me to worship Him?", tagline:"Allah does not need our worship; we need closeness to Him",
    a:{label:"Simple answer", text:"Allah created us to worship Him. Worship means knowing Him, loving Him, and choosing what pleases Him."},
    b:{label:"Heart answer", text:"Prayer, Qur’an, hijab, kindness, and honesty polish the heart and help us become our best selves."},
    talk:"How does prayer make your heart feel?",
    ref:"Qur’an 51:56 · 20:14 · 29:45" },
  { id:"q5", num:5, title:"Why am I responsible for Sharia and wajibaat?", tagline:"Responsibility means Allah knows I can grow",
    a:{label:"Simple answer", text:"After taklif begins, wajib actions become required and haram actions must be avoided."},
    b:{label:"Mercy answer", text:"Allah does not ask more than a soul can bear. He gives help, reminders, family, teachers, and tawbah."},
    talk:"What help has Allah given you?",
    ref:"Qur’an 2:286 · Sistani Summary of Rules, Issue 2" },
  { id:"q6", num:6, title:"What are wajib, haram, mustahabb, and makruh?", tagline:"A small Sharia vocabulary slide",
    a:{label:"Four words", text:"Wajib = must do. Haram = must avoid. Mustahabb = loved and recommended. Makruh = better to avoid."},
    b:{label:"Example", text:"Wajib: daily prayers. Haram: lying. Mustahabb: extra salawat. Makruh: something better left."},
    talk:"Which word means “Allah loves it, but it is not required”?",
    ref:"General Shia fiqh terminology" },
  { id:"q7", num:7, title:"Why do I pray and fast?", tagline:"Worship builds a strong, bright heart",
    a:{label:"Prayer", text:"Salah is my daily meeting with Allah. It reminds me that He sees me and loves guidance for me."},
    b:{label:"Fasting", text:"Fasting trains patience, gratitude, self-control, and care for people who have less."},
    talk:"What habit can help you pray on time?",
    ref:"Qur’an 20:14 · 29:45 · 2:183" },
  { id:"q8", num:8, title:"Why do I wear hijab?", tagline:"Hijab is worship, modesty, identity, and dignity",
    a:{label:"Simple answer", text:"Hijab is a wajib act of modesty for a baligha girl in front of non-mahram men and boys."},
    b:{label:"Heart answer", text:"Hijab says: my worth is deeper than appearance. I belong to Allah, and I carry my faith with dignity."},
    talk:"What can make hijab feel easier and more beautiful?",
    ref:"Qur’an 24:31 · 33:59 · Sistani Hijab Q&A" },
  { id:"q9", num:9, title:"Who do I wear hijab around?", tagline:"The key word is non-mahram",
    a:{label:"Mahram", text:"Someone you do not need hijab in front of — like a father, brother, grandfather, uncle, or son."},
    b:{label:"Non-mahram", text:"Someone hijab is required in front of — like unrelated men and boys after they reach puberty."},
    talk:"Name two examples of mahram and two examples of non-mahram.",
    ref:"Qur’an 24:31 · Sistani Women’s Issues Q&A" },
  { id:"q10", num:10, title:"What if hijab, prayer, or fasting feels hard?", tagline:"Hard does not mean impossible; it means we need support",
    a:{label:"What to remember", text:"Allah knows my effort. He does not burden a soul beyond its capacity."},
    b:{label:"What to do", text:"Ask for help. Practice in small steps. Make du‘a. Choose friends who make obedience easier."},
    talk:"What is one small step you can take this week?",
    ref:"Qur’an 2:286 · 94:5–6" },
  { id:"q11", num:11, title:"If I do not wear hijab, what are the consequences?", tagline:"Consequences should bring us back to Allah, not make us despair",
    a:{label:"Honest answer", text:"If hijab is wajib for me and I knowingly leave it, I have missed an obligation and should return to Allah."},
    b:{label:"Mercy answer", text:"I should not give up. Allah loves tawbah. I can ask forgiveness, fix my action, and try again."},
    talk:"How can we correct ourselves without shaming ourselves?",
    ref:"Qur’an 39:53 · 4:110 · Sistani Hijab Q&A" },
  { id:"q12", num:12, title:"How can hijab make me happy and strong?", tagline:"Hijab becomes easier when it connects to love",
    a:{label:"Strength", text:"Hijab teaches courage: I can be Muslim even when everyone is not doing the same thing."},
    b:{label:"Happiness", text:"It can become a daily reminder: Allah sees my effort, and my value comes from my soul and deeds."},
    talk:"What kind of hijab style feels comfortable and modest?",
    ref:"Qur’an 33:59 · 16:97" },
  { id:"q13", num:13, title:"What if classmates ask, “Why do you wear that?”", tagline:"A confident answer can be kind and simple",
    a:{label:"One-sentence answer", text:"“I wear hijab because I am Muslim, and it helps me worship Allah and practice modesty.”"},
    b:{label:"If they are rude", text:"Stay calm. You do not have to debate. Find a trusted adult if someone mocks or pressures you."},
    talk:"Practice saying your answer with confidence.",
    ref:"Qur’an 16:125 · 41:34" },
  { id:"q14", num:14, title:"What should I do when I make a mistake?", tagline:"A believer returns to Allah again and again",
    a:{label:"Three steps", text:"1. Stop the mistake. 2. Ask Allah to forgive you. 3. Try to fix it and do better."},
    b:{label:"Hope", text:"Never think, “Allah will not forgive me.” Allah’s mercy is greater than our mistakes."},
    talk:"What words can you say when you ask Allah for forgiveness?",
    ref:"Qur’an 39:53 · 4:110" },
  { id:"q15", num:15, title:"What is Taqleed?", tagline:"Following a qualified scholar keeps my worship correct", standalone:true,
    a:{label:"Simple answer", text:"Taqleed means following the rulings of a qualified, living marja‘ (a scholar of Islamic law) for matters I cannot work out on my own."},
    b:{label:"Heart answer", text:"It is a mercy from Allah — I do not have to figure out every ruling alone. A trustworthy scholar helps me practice Islam correctly and with confidence."},
    talk:"Do you know the name of the marja‘ your family follows?",
    ref:"General Shia fiqh practice · Sistani.org, Introduction to Taqleed" },
];

/* ---------------- important section: niyyah for taqleed ---------------- */

const NIYYAH = {
  eyebrow: "An Important First Step",
  title: "Niyyah for Taqleed",
  tagline: "When a girl becomes baligha, she needs a niyyah for taqleed too — not just for salah and fasting.",
  a: { label:"Simple answer", text:"Niyyah means intention. Just like I make a niyyah in my heart before I pray or fast, I also need to make a niyyah for taqleed — deciding, sincerely, that I am following a qualified marja‘ because I want to please Allah, not just out of habit." },
  b: { label:"Heart answer", text:"Once I become baligha, every one of my actions is written down and matters. Taqleed only truly counts as worship when I choose it on purpose, for Allah — not because everyone in my family already does it." },
  sample: "“I intend to perform taqleed of my marja‘, sincerely seeking closeness to Allah.”",
  talk: "Do you know who your family's marja‘ is? If not, that's a great question to ask a parent or teacher this week.",
  ref: "General Shia fiqh practice · Sistani.org, Introduction to Taqleed",
};

const GAME = {
  question:"When a girl becomes baligha, what is the main message?",
  options:[
    "Allah trusts me with beautiful responsibilities",
    "Allah wants me to feel scared all the time",
    "Rules are only for adults, not girls",
    "I should never ask questions",
  ],
  correct:0,
  good:"Baligha means Allah trusts you with worship, modesty, and choices that grow your heart.",
  retry:"Allah teaches us with mercy. Becoming baligha is about dignity, responsibility, and growing closer to Him.",
};

const SCENARIO = {
  situation:"Your friend says: “I feel nervous wearing hijab at school.”",
  options:[
    "Make fun of her because she is nervous.",
    "Encourage her and help her find one small step.",
    "Tell her to give up because it is too hard.",
  ],
  best: 1,
  responses:[
    "Think again — teasing a nervous friend doesn’t help her feel safe or supported.",
    "That’s it. Small, kind encouragement helps a friend take her next step with confidence.",
    "Think again — giving up isn’t the answer. What could help her feel a little braver?",
  ],
};

const PLEDGE_ITEMS = [
  "Pray one salah more carefully",
  "Learn one hijab routine",
  "Ask one honest question",
  "Say istighfar when I make a mistake",
  "Choose a good friend habit",
];

/* ---------------- full stories, broken into readable pages ---------------- */

const STORY1 = {
  title:"Story 1: The Golden Key",
  scene:"indoor",
  pages:[
    [
      `One afternoon, Zahra came home from school and found a small golden box on her bed. On top of the box was a card from her mother: “For my dear Zahra, who is beginning a beautiful new journey.”`,
      `Zahra opened the box. Inside was a golden key tied with a soft green ribbon. She ran downstairs.`,
      `“Mama, what does this key open?”`,
    ],
    [
      `Her mother smiled. “It represents something very special. You have reached the age when Allah has invited you to take more responsibility for your actions.”`,
      `Zahra looked worried. “Responsibility? Does that mean I will have lots of difficult rules?”`,
      `Her mother sat beside her. “Imagine that a teacher gives an important classroom job to a student. Would she choose someone she did not trust?”`,
      `“No,” Zahra replied. “She would choose someone responsible.”`,
      `“Exactly,” said her mother. “Allah’s commands are not given to make you unhappy. They are a sign that Allah knows you are ready to grow.”`,
    ],
    [
      `Zahra held the golden key carefully. “But sometimes praying on time, fasting, or wearing hijab might feel difficult.”`,
      `Her mother nodded. “Sometimes good things require effort. Learning to read was once difficult. Tying your shoes was once difficult. But after you practiced, it became easier.”`,
      `“So, becoming bāligha is like receiving a new key?” Zahra asked.`,
      `“Yes. It is a key that opens the door to a closer friendship with Allah.”`,
    ],
    [
      `Her mother explained, “When you pray, you are speaking to Allah. When you fast, you are training your heart. When you wear hijab, you obey Allah and protect your dignity. When you tell the truth, help others, and control your anger, you become a stronger servant of Allah (swt).”`,
      `Zahra smiled. “So, Allah is not placing a heavy box on my shoulders?”`,
      `“No,” her mother answered. “Allah is placing a golden key in your hand.”`,
    ],
    [
      `Then her mother recited:`,
      { quote:"“Allah does not burden any soul beyond what it can bear.” — Qur’an 2:286" },
      `That evening, Zahra placed the golden key beside her prayer mat. When it was time for Salah, she stood before Allah and whispered:`,
      `“Dear Allah, thank You for trusting me. Please help me become Your humble and loving servant.”`,
      `For the first time, Zahra did not think of responsibility as a burden. She thought of it as an invitation.`,
    ],
  ],
  question:"What does the golden key represent?",
  options:["Allah trusts me and invites me closer", "A heavy burden with no help"],
  correct:0,
  good:{
    lines:[
      "The key means Allah trusts Zahra with worship, modesty, and good choices.",
      "Wājibāt are doors that open closeness to Allah.",
      "When something feels hard, Zahra can ask Allah for help and take one step at a time.",
    ],
    quote:"“Allah does not burden any soul beyond what it can bear.” — Qur’an 2:286",
  },
  retry:"Allah’s commands can require effort, but Allah is not trying to crush us. He gives guidance because He knows what protects and grows the heart. Think again: is responsibility a sign of rejection, or a sign of trust?",
};

const STORY2 = {
  title:"Story 2: The Little Lantern",
  scene:"night",
  pages:[
    [
      `Amina was walking home with her grandmother when they passed a shop filled with beautiful lanterns.`,
      `Some were large and decorated with colorful glass. Others were small and simple. Amina pointed to a tiny lantern.`,
      `“That one is so small. It probably cannot do anything important.”`,
      `Her grandmother smiled and bought the lantern.`,
    ],
    [
      `That night, the electricity suddenly went out. The entire house became dark. Amina felt frightened.`,
      `Her grandmother lit the small lantern. Its warm light filled the room and helped everyone find their way.`,
      `Amina looked surprised. “I thought it was too small to be important.”`,
      `Her grandmother replied, “A small light can remove a great deal of darkness.”`,
    ],
    [
      `Then she placed the lantern in Amina’s hands. “You are also growing into a light.”`,
      `“What do you mean?” Amina asked.`,
      `“When a girl becomes responsible before Allah, she begins a new stage of her life. Her prayers become lights. Her fasting becomes strength. Her hijab becomes dignity. Her kindness becomes warmth. Her good choices help guide her and others.”`,
    ],
    [
      `Amina looked down at the glowing lantern. “But what happens if I make a mistake?”`,
      `“Then you turn back to Allah,” her grandmother answered. “Allah is merciful. A servant of Allah is not someone who never makes mistakes. A servant of Allah is someone who keeps returning to Him.”`,
      `Amina asked, “Does being Allah’s servant mean I am not free?”`,
      `Her grandmother shook her head. “Being a servant of Allah frees your heart from becoming a servant of people’s opinions, fashion, popularity, anger, or selfish desires.”`,
      `She continued, “When you obey Allah, you are saying, ‘Allah knows me, Allah loves me, and Allah knows what will protect my heart.’”`,
    ],
    [
      `Amina thought about Sayyida Fatimah al-Zahra and Sayyida Zaynab. They were humble servants of Allah, but they were also courageous, intelligent, patient, and strong.`,
      `“So being humble does not mean being weak?” Amina asked.`,
      `“Not at all,” her grandmother said. “True humility means knowing that everything good comes from Allah. It gives a person strength without pride.”`,
    ],
    [
      `The next morning, Amina placed the lantern near her prayer mat. Before beginning salah, she whispered:`,
      `“Dear Allah, make my heart a light. Help me obey You with love, not with fear. Help me remember that Your commands are gifts that guide me.”`,
      `As the sun rose, Amina understood something important: Allah’s responsibilities were not chains around her. They were lights along her path.`,
    ],
  ],
  question:"What is divine responsibility like?",
  options:["A light that guides my choices", "Only rules that stop me from being happy"],
  correct:0,
  good:{
    lines:[
      "Prayer, hijab, honesty, kindness, and self-control become lights on the path to Allah.",
      "Being Allah’s humble servant makes her guided, dignified, and strong.",
      "She does not have to be controlled by popularity or people’s opinions.",
    ],
    quote:"“I did not create jinn and humans except to worship Me.” — Qur’an 51:56",
  },
  retry:"Allah’s guidance is not meant to take happiness away. It protects our heart and helps us choose what is beautiful, safe, and pleasing to Allah. Think again: what did the lantern do when the room was dark?",
};

const ACTIVITY_CHIPS = [
  { label:"Ṣalāh", text:"I will pray one prayer at its earliest time." },
  { label:"Hijab", text:"I will wear it with confidence and dignity." },
  { label:"Speech", text:"I will use kind words even when upset." },
  { label:"Qur’an", text:"I will read or listen for five minutes." },
];

/* ---------------- dress-up game: hijab or not ---------------- */
/* each item's w/top are % of the doll-wrap, tuned to the base_doll.png artwork */

const DOLL_BASE_IMG = "assets/base_doll.png";

const CLOTHING_ITEMS = [
  { id:"hijab", zone:"head", modest:true, label:"Hijab", img:"assets/hijab.png", w:95, top:6, z:4 },
  { id:"hair", zone:"head", modest:false, label:"Hair Down", img:"assets/hair.png", w:200, top:8, z:4 },
  { id:"shirt_long", zone:"top", modest:true, label:"Long-Sleeve Top", img:"assets/shirt_long.png", w:97, top:36, z:3 },
  { id:"shirt_short", zone:"top", modest:false, label:"Short-Sleeve Top", img:"assets/shirt_short.png", w:97, top:34, z:3 },
  { id:"pants", zone:"bottom", modest:true, label:"Loose Pants", img:"assets/pants.png", w:85, top:57, z:2 },
  { id:"skirt_long", zone:"bottom", modest:true, label:"Long Skirt", img:"assets/skirt_long.png", w:96, top:54, z:2 },
  { id:"skirt_short", zone:"bottom", modest:false, label:"Short Skirt", img:"assets/skirt_short.png", w:67, top:62, z:2 },
  { id:"shorts", zone:"bottom", modest:false, label:"Shorts", img:"assets/shorts.png", w:41, top:58, z:2 },
];

function clothingLayer(item){
  if (!item) return "";
  return `<img class="cloth-layer" src="${item.img}" alt="${item.label}" style="width:${item.w}%; top:${item.top}%; z-index:${item.z};" />`;
}

function buildDoll(d){
  const headItem = CLOTHING_ITEMS.find(c=>c.id === d.head);
  const topItem = CLOTHING_ITEMS.find(c=>c.id === d.top);
  const bottomItem = CLOTHING_ITEMS.find(c=>c.id === d.bottom);
  return `
    <img class="doll-base" src="${DOLL_BASE_IMG}" alt="doll" />
    ${clothingLayer(bottomItem)}
    ${clothingLayer(topItem)}
    ${clothingLayer(headItem)}
  `;
}

function evaluateOutfit(d){
  const nothingChosen = !d.head && !d.top && !d.bottom;
  const headOK = d.head === "hijab";
  const topOK = d.top === "shirt_long";
  const bottomOK = d.bottom === "pants" || d.bottom === "skirt_long";
  return { nothingChosen, headOK, topOK, bottomOK, allGood: headOK && topOK && bottomOK };
}



const FINAL_CHOICE = {
  eyebrow:"End of Lesson",
  title:"Who will I follow — the dunya, or Allah?",
  tagline:"Every single day, I get to choose. This is the real question behind everything we learned today.",
  correct:"allah",
  good:{
    lines:[
      "You chose the One who lasts forever.",
      "The dunya — fame, fashion, likes, trends — feels exciting, but it fades. It was never built to last.",
      "Allah, His pleasure, and Jannah do not fade. Choosing Him is choosing what is real and lasting.",
    ],
    quote:"“What is the life of this world except the enjoyment of delusion.” — Qur’an 3:185",
  },
  retry:{
    lines:[
      "It is easy to feel pulled toward the dunya — everyone feels that sometimes, and Allah is not asking you to never enjoy this world.",
      "But think about it: likes disappear, trends change, and things wear out. Allah’s love, guidance, and Jannah never do.",
      "Which one is really worth building your life around?",
    ],
    quote:"“The Hereafter is better for you than the first [life].” — Qur’an 93:4",
  },
  closing:"Every day is a new chance to choose again. Ya Allah, help me choose You — today, tomorrow, and always.",
};

/* ---------------- bonus mini-lesson: Qur'an & Ahlul Bayt ---------------- */

const BONUS_QA = [
  { num:1, title:"What is the Qur’an?",
    answer:"The Qur’an is the holy words of Allah (SWT), revealed to Prophet Muhammad (s). It is Allah’s final book of guidance. It teaches us what is true, what is good, and how to live in a way that pleases Allah.",
    together:"“The Qur’an is Allah’s message to guide my heart.”",
    question:"What is one thing the Qur’an teaches us?",
    ref:"Qur’an 2:2; Qur’an 17:9" },
  { num:2, title:"Why should I read the Qur’an?",
    answer:"It guides my heart to the straight path. It teaches me right from wrong. It brings light, calm, and blessings into my life. It helps me become closer to Allah and love what He loves.",
    small:"Read one short surah or one ayah each day with love and meaning.",
    ref:"Qur’an 17:9; Qur’an 13:28; Qur’an 17:82" },
  { num:3, title:"Who are Ahlul Bayt?",
    answer:"Ahlul Bayt are the purified family of Prophet Muhammad (s). In this lesson, we especially mean Ahlul Kisa — the five holy family under the cloak: Prophet Muhammad (s), Imam Ali (a), Sayyida Fatima al-Zahra (a), Imam Hasan (a), and Imam Husayn (a).",
    ref:"Qur’an 33:33; Hadith al-Kisa" },
  { num:4, title:"Why should I follow them?",
    answer:"The Prophet (s) told us to hold on to the Qur’an and his Ahlul Bayt together. They explain the Qur’an correctly through their words and actions. They show the best manners: truth, patience, courage, mercy, and worship. When I follow them, I stay close to Allah.",
    reflect:"Which quality of Ahlul Bayt do I want to practice today?",
    ref:"Hadith al-Thaqalayn; Qur’an 33:33; Qur’an 42:23" },
];

/* ---------------- state ---------------- */

const state = {
  screen: "menu",
  visited: new Set(),
  bonusVisited: new Set(),
  game: { selected:null, status:null },      // status: 'good' | 'retry'
  scenario: { selected:null },
  story1: { page:0, phase:"reading", selected:null, status:null },
  story2: { page:0, phase:"reading", selected:null, status:null },
  activity: { active:null },
  pledge: new Set(),
  finalChoice: { selected:null },
  dressup: { head:null, top:null, bottom:null },
  dressupChecked: false,
};

const QUESTION_ORDER = QUESTIONS.map(q=>q.id);
const BONUS_ORDER = BONUS_QA.map(b=>"bonus"+b.num);

function go(screen){
  // Entering these screens fresh always clears any previously chosen answer,
  // so nothing is "remembered" from a past visit.
  if (screen === "game") state.game = { selected:null, status:null };
  if (screen === "scenario") state.scenario = { selected:null };
  if (screen === "story1") state.story1 = { page:0, phase:"reading", selected:null, status:null };
  if (screen === "story2") state.story2 = { page:0, phase:"reading", selected:null, status:null };
  if (screen === "finalChoice") state.finalChoice = { selected:null };
  if (screen === "dressup"){ state.dressup = { head:null, top:null, bottom:null }; state.dressupChecked = false; }

  state.screen = screen;
  if (QUESTION_ORDER.includes(screen)) state.visited.add(screen);
  if (BONUS_ORDER.includes(screen)) state.bonusVisited.add(screen);
  render();
  window.scrollTo({top:0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? "auto":"smooth"});
}

/* ---------------- shared chrome ---------------- */

function topbar(){
  if (state.screen === "menu") return "";
  const pct = Math.round((state.visited.size / QUESTIONS.length) * 100);
  return `
  <div class="topbar">
    <div class="brand"><img class="brand-photo" src="assets/hero-night.jpg" alt="" />My Baligha Journey</div>
    <div class="progress-wrap">
      <span>${state.visited.size}/${QUESTIONS.length} questions</span>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <button class="menu-btn" data-nav="menu">${ICONS.menu} Menu</button>
  </div>`;
}

function ornament(label){
  return `<div class="ornament-row"><span class="line"></span>${ICONS.moonstar}<span style="font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">${label||""}</span>${ICONS.moonstar}<span class="line"></span></div>`;
}

function actionRow({leftLabel, leftNav, rightLabel, rightNav, rightPrimary=true}){
  return `<div class="actions">
    ${leftNav ? `<button class="btn btn-ghost" data-nav="${leftNav}">${leftLabel}</button>` : `<span></span>`}
    ${rightNav ? `<button class="btn ${rightPrimary ? "btn-primary":"btn-ghost"}" data-nav="${rightNav}">${rightLabel} ${ICONS.arrow}</button>` : ``}
  </div>`;
}

/* ---------------- screens ---------------- */

function menuTile(q){
  const visited = state.visited.has(q.id);
  return `<button class="tile ${visited ? "visited":""}" data-nav="${q.id}">
    <span class="dot"></span>
    <span class="tag">Q${q.num}</span>
    <span class="q">${q.title}</span>
  </button>`;
}

function screenNiyyah(){
  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">${NIYYAH.eyebrow}</span>
      <h2>${NIYYAH.title}</h2>
      <p class="lede">${NIYYAH.tagline}</p>
    </div>
    <div class="panels">
      <div class="panel"><h3>${NIYYAH.a.label}</h3><p>${NIYYAH.a.text}</p></div>
      <div class="panel"><h3>${NIYYAH.b.label}</h3><p>${NIYYAH.b.text}</p></div>
    </div>
    <div class="hadith-block">
      <span style="font-size:0.8rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--gold-deep);">A sample niyyah</span>
      <p class="say">${NIYYAH.sample}</p>
    </div>
    <div class="talk"><span>💬</span><p><b>Turn &amp; Talk:</b> ${NIYYAH.talk}</p></div>
    <p class="refline">${NIYYAH.ref}</p>
    <div class="actions">
      <button class="btn btn-primary" data-nav="menu">Back to Menu ${ICONS.arrow}</button>
      <span></span>
    </div>
  </div>`;
}

function screenMenu(){
  const tiles = QUESTIONS.map(menuTile).join("");
  return `
  <div class="stack">
    <div class="hero">
      <span class="eyebrow"><img class="eyebrow-photo" src="assets/hero-night.jpg" alt="" /> Interactive lesson for elementary girls</span>
      <h1 style="color:#fff;">My Baligha Journey</h1>
      <p class="lede">Allah trusts me with beautiful responsibilities. A gentle, question-by-question journey through worship, hijab, mistakes, and mercy — with full stories, a game, and a pledge along the way.</p>
      <p class="byline">By Shoa Mehar Zaidi</p>
    </div>

    <div class="scene classroom stack">
      <span class="eyebrow">Before we begin</span>
      <h2 style="color:#fff;">How we will learn today</h2>
      <p class="lede">Questions, choices, discussion, and reflection.</p>
      <div class="agreement-grid">
        <div>
          <p style="font-weight:800;color:#F3E3B8;margin-bottom:8px;">Class agreement</p>
          <ul>
            <li>We ask honest questions</li>
            <li>We do not shame anyone</li>
            <li>We help each other love Allah</li>
            <li>We practice step by step</li>
          </ul>
        </div>
        <div>
          <p style="font-weight:800;color:#F3E3B8;margin-bottom:8px;">Your job</p>
          <ul>
            <li>Listen with your heart</li>
            <li>Think before answering</li>
            <li>Choose one tiny action to begin this week</li>
          </ul>
        </div>
      </div>
    </div>

    <button class="tile special" data-nav="niyyah" style="display:block; text-align:left; width:100%; padding:20px 22px;">
      <span class="tag">💛 Important</span>
      <span class="q" style="font-size:1.05rem; display:block; margin-top:4px;">Niyyah for Taqleed — an important first step</span>
      <span style="display:block; margin-top:4px; font-weight:600; color:var(--ink-soft); font-size:0.85rem;">When a girl becomes baligha, she needs a niyyah for taqleed too. Tap to learn what that means.</span>
    </button>

    <div>
      ${ornament("Choose a question")}
      <h2>Menu</h2>
      <p class="lede">Click any question tile, or go in order.</p>
    </div>
    <div class="menu-grid">${tiles}</div>
    <div class="menu-grid special-row">
      <button class="tile special" data-nav="game"><span class="tag">Play</span><span class="q">Quick Review Game</span></button>
      <button class="tile special" data-nav="story1"><span class="tag">Story 1</span><span class="q">The Golden Key</span></button>
      <button class="tile special" data-nav="story2"><span class="tag">Story 2</span><span class="q">The Little Lantern</span></button>
      <button class="tile special" data-nav="bonusIntro"><span class="tag">Bonus</span><span class="q">Qur’an &amp; Ahlul Bayt</span></button>
      <button class="tile special" data-nav="pledge"><span class="tag">Reflect</span><span class="q">My Baligha Pledge</span></button>
      <button class="tile special" data-nav="finalChoice"><span class="tag">Reflect</span><span class="q">End of Lesson</span></button>
    </div>
    <div class="menu-grid" style="grid-template-columns:1fr;">
      <button class="tile special" data-nav="dressup"><span class="tag">Play</span><span class="q">🧕 Dress the Doll — Modesty Match</span></button>
    </div>
    <div class="actions">
      <span></span>
      <button class="btn btn-ghost" data-nav="references">Teacher references</button>
    </div>
  </div>`;
}

function screenQuestion(q){
  let next = null, nextLabel = "";
  if (!q.standalone){
    if (q.num < 14){ next = "q"+(q.num+1); nextLabel = "Next question"; }
    else if (q.num === 14){ next = "game"; nextLabel = "Play the review game"; }
  }
  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Question ${q.num} of ${QUESTIONS.length}</span>
      <h2>${q.title}</h2>
      <p class="lede">${q.tagline}</p>
    </div>
    <div class="panels">
      <div class="panel"><h3>${q.a.label}</h3><p>${q.a.text}</p></div>
      <div class="panel"><h3>${q.b.label}</h3><p>${q.b.text}</p></div>
    </div>
    <div class="talk"><span>💬</span><p><b>Turn &amp; Talk:</b> ${q.talk}</p></div>
    <p class="refline">${q.ref}</p>
    ${actionRow({leftLabel:"Menu", leftNav:"menu", rightLabel: nextLabel, rightNav: next})}
  </div>`;
}

function screenGame(){
  const g = state.game;
  const opts = GAME.options.map((opt, i)=>{
    let cls = "option";
    if (g.selected !== null){
      if (i === GAME.correct) cls += " correct";
      else if (i === g.selected) cls += " wrong";
    }
    const disabled = g.status === "good" ? "disabled" : "";
    return `<button class="${cls}" data-game-opt="${i}" ${disabled}>
      <span class="letter">${String.fromCharCode(65+i)}</span><span>${opt}</span>
    </button>`;
  }).join("");

  let feedback = "";
  if (g.status === "good"){
    feedback = `<div class="feedback good">${ICONS.check}<p>${GAME.good}</p></div>
    <div class="actions"><span></span><button class="btn btn-sage" data-nav="scenario">Continue ${ICONS.arrow}</button></div>`;
  } else if (g.status === "retry"){
    feedback = `<div class="feedback retry">${ICONS.heart}<p>${GAME.retry}</p></div>`;
  }

  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Quick Review Game</span>
      <h2>${GAME.question}</h2>
      <p class="lede">Click an answer to see how you did.</p>
    </div>
    <div class="options">${opts}</div>
    ${feedback}
    <div class="actions"><button class="btn btn-ghost" data-nav="menu">Menu</button><span></span></div>
  </div>`;
}

function screenScenario(){
  const s = state.scenario;
  const opts = SCENARIO.options.map((opt,i)=>{
    let cls = "option";
    if (s.selected !== null){
      if (i === SCENARIO.best) cls += i === s.selected ? " correct" : "";
      if (i === s.selected && i !== SCENARIO.best) cls += " wrong";
    }
    return `<button class="${cls}" data-scenario-opt="${i}">
      <span class="letter">${String.fromCharCode(65+i)}</span><span>${opt}</span>
    </button>`;
  }).join("");

  let feedback = "";
  if (s.selected !== null){
    const good = s.selected === SCENARIO.best;
    feedback = `<div class="feedback ${good ? "good":"retry"}">${good ? ICONS.check : ICONS.heart}<p>${SCENARIO.responses[s.selected]}</p></div>`;
  }

  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Scenario Circle</span>
      <h2>Read the situation, then choose the best next step</h2>
      <p class="lede">${SCENARIO.situation}</p>
    </div>
    <div class="options">${opts}</div>
    ${feedback}
    <div class="actions"><button class="btn btn-primary" data-nav="menu">Back to Menu ${ICONS.arrow}</button><span></span></div>
  </div>`;
}

function screenPledge(){
  const items = PLEDGE_ITEMS.map((item,i)=>{
    const on = state.pledge.has(i);
    return `<label class="check ${on?"on":""}">
      <input type="checkbox" data-pledge-idx="${i}" ${on?"checked":""}/>
      <span>${item}</span>
    </label>`;
  }).join("");

  return `
  <div class="scene landscape stack">
    <span class="eyebrow">Closing</span>
    <h2 style="color:#fff;">My Baligha Pledge</h2>
    <p class="lede">Choose one realistic step. This week, I will try to…</p>
    <div class="checklist">${items}</div>
    <div class="dua">
      <p class="label">Du‘a</p>
      <p>Ya Allah, help me love You, remember You, thank You, and worship You beautifully.</p>
    </div>
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Menu</button>
      <button class="btn btn-primary" data-nav="storyMenu">Story Time ${ICONS.arrow}</button>
    </div>
  </div>`;
}

function screenStoryMenu(){
  return `
  <div class="scene classroom stack">
    <span class="eyebrow">Story Time</span>
    <h2 style="color:#fff;">Divine responsibility is not a burden</h2>
    <p class="lede">Today we will read two full stories: The Golden Key, and The Little Lantern. Your job: read, choose, discuss, and reflect.</p>
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Menu</button>
      <button class="btn btn-primary" data-nav="story1">Begin Story 1 ${ICONS.book}</button>
    </div>
  </div>`;
}

function storyPageBlock(block){
  if (typeof block === "string"){
    return `<p>${block}</p>`;
  }
  if (block.quote){
    return `<p class="story-quote">${block.quote}</p>`;
  }
  return "";
}

function storyScreen(story, key, nextNav, nextLabel){
  const s = state[key];

  if (s.phase === "reading"){
    const page = story.pages[s.page];
    const isLast = s.page === story.pages.length - 1;
    const dots = story.pages.map((_,i)=>`<span class="${i===s.page?"on":""}"></span>`).join("");
    return `
    <div class="scene ${story.scene} stack">
      <span class="eyebrow">Story Time</span>
      <h2 style="color:#fff;">${story.title}</h2>
      <div class="story-page">${page.map(storyPageBlock).join("")}</div>
      <div class="story-meta">
        <div class="story-dots">${dots}</div>
        <span>Page ${s.page+1} of ${story.pages.length}</span>
      </div>
      <div class="actions">
        <button class="btn btn-ghost" data-nav="menu">Menu</button>
        ${isLast
          ? `<button class="btn btn-primary" data-story-next="${key}">Answer the question ${ICONS.arrow}</button>`
          : `<button class="btn btn-primary" data-story-page="${key}">Keep reading ${ICONS.arrow}</button>`}
      </div>
    </div>`;
  }

  // phase === "quiz"
  const opts = story.options.map((opt,i)=>{
    let cls = "option";
    if (s.selected !== null){
      if (i === story.correct) cls += " correct";
      else if (i === s.selected) cls += " wrong";
    }
    const disabled = s.status === "good" ? "disabled" : "";
    return `<button class="${cls}" data-story="${key}" data-opt="${i}" ${disabled}>
      <span class="letter">${String.fromCharCode(65+i)}</span><span>${opt}</span>
    </button>`;
  }).join("");

  let feedback = "";
  if (s.status === "good"){
    feedback = `<div class="feedback good">${ICONS.check}<div>
      ${story.good.lines.map(l=>`<p style="margin-bottom:6px;">${l}</p>`).join("")}
      <span class="quote">${story.good.quote}</span>
    </div></div>
    <div class="actions"><span></span><button class="btn btn-sage" data-nav="${nextNav}">${nextLabel} ${ICONS.arrow}</button></div>`;
  } else if (s.status === "retry"){
    feedback = `<div class="feedback retry">${ICONS.heart}<p>${story.retry}</p></div>`;
  }

  return `
  <div class="scene ${story.scene} stack">
    <span class="eyebrow">Story Time</span>
    <h2 style="color:#fff;">${story.title}</h2>
    <p style="font-weight:800;color:#fff;font-family:'Fraunces',serif;font-size:1.15rem;">${story.question}</p>
    <div class="options">${opts}</div>
    ${feedback}
    <div class="actions"><button class="btn btn-ghost" data-nav="menu">Menu</button>
      <button class="btn btn-ghost" data-story-reread="${key}">Read again</button>
    </div>
  </div>`;
}

function screenActivity(){
  const chips = ACTIVITY_CHIPS.map((c,i)=>`<button class="chip ${state.activity.active===i?"active":""}" data-activity="${i}">${c.label}</button>`).join("");
  const detail = state.activity.active !== null
    ? `<div class="chip-detail">${ACTIVITY_CHIPS[state.activity.active].text}</div>`
    : "";
  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Class Activity</span>
      <h2>“My Light Step”</h2>
      <p class="lede">Choose one responsibility that can become a light this week.</p>
    </div>
    <div class="chips">${chips}</div>
    ${detail}
    <div class="reflect">
      <label>Reflection sentence</label>
      <textarea placeholder="Allah, help me carry this responsibility with love because…"></textarea>
    </div>
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Menu</button>
      <button class="btn btn-primary" data-nav="finalChoice">End of Lesson ${ICONS.arrow}</button>
    </div>
  </div>`;
}

function clothingChip(item){
  const d = state.dressup;
  const worn = d.head === item.id || d.top === item.id || d.bottom === item.id;
  return `<div class="cloth-chip ${worn?"worn":""}" data-chip="${item.id}">
    <img class="chip-img" src="${item.img}" alt="${item.label}" />
    <span>${item.label}</span>
  </div>`;
}

function screenDressUp(){
  const d = state.dressup;
  const chips = CLOTHING_ITEMS.map(clothingChip).join("");
  const hasAnything = d.head || d.top || d.bottom;

  let feedback = "";
  if (state.dressupChecked){
    const r = evaluateOutfit(d);
    if (r.nothingChosen){
      feedback = `<div class="feedback retry">${ICONS.heart}<p>Drag a few items onto the doll first, then check her outfit.</p></div>`;
    } else {
      feedback = `
      <div class="feedback ${r.allGood?"good":"retry"}">${r.allGood?ICONS.check:ICONS.heart}
        <div>
          <p style="margin-bottom:8px;">${r.allGood
            ? "Ma’sha’Allah! Her hair, arms, and legs are all covered loosely — this is modest, hijab-friendly dressing."
            : "Take a look at what’s still showing. Modest dressing for hijab means covering the hair, and wearing loose clothing down to the wrists and ankles."}</p>
          <div class="outfit-checklist">
            <span class="chk ${r.headOK?"yes":"no"}"><span class="mark">${r.headOK?"✓":"✕"}</span>Hair covered</span>
            <span class="chk ${r.topOK?"yes":"no"}"><span class="mark">${r.topOK?"✓":"✕"}</span>Arms covered</span>
            <span class="chk ${r.bottomOK?"yes":"no"}"><span class="mark">${r.bottomOK?"✓":"✕"}</span>Legs covered</span>
          </div>
        </div>
      </div>`;
    }
  }

  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Dress-Up Challenge</span>
      <h2>Dress the Doll: Modest or Not?</h2>
      <p class="lede">Drag each item onto the doll. Then check whether her outfit covers what hijab asks us to cover in front of non-mahram.</p>
    </div>
    <div class="dressup-stage">
      <div class="doll-frame">
        <div class="doll-wrap">
          ${buildDoll(d)}
          <div class="drop-zone zone-head" data-zone="head"></div>
          <div class="drop-zone zone-top" data-zone="top"></div>
          <div class="drop-zone zone-bottom" data-zone="bottom"></div>
        </div>
        <span class="doll-caption">${hasAnything ? "Tap a placed item to remove it" : "Blank doll — start dragging!"}</span>
      </div>
      <div class="cloth-tray">${chips}</div>
    </div>
    ${feedback}
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Menu</button>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-ghost" data-dressup-reset="1">Reset Doll</button>
        <button class="btn btn-primary" data-dressup-check="1">Check My Outfit</button>
      </div>
    </div>
  </div>`;
}

function screenFinalChoice(){
  const fc = state.finalChoice;
  const chosen = fc.selected;

  function cardClasses(side){
    let cls = "choice-card " + side;
    if (chosen){
      cls += " selected";
      cls += (side === FINAL_CHOICE.correct) ? " correct" : " wrong";
    }
    return cls;
  }

  const disabled = chosen ? "disabled" : "";

  const cards = `
    <div class="choice-grid">
      <button class="${cardClasses("allah")}" data-final-opt="allah" ${disabled}>
        <span class="choice-word" lang="ar" dir="rtl">الله</span>
        <span class="choice-label">Allah</span>
        <span class="choice-sub">My Creator — forever, unchanging, the source of true happiness.</span>
      </button>
      <button class="${cardClasses("dunya")}" data-final-opt="dunya" ${disabled}>
        <span class="choice-icons">🌍✨👑</span>
        <span class="choice-label">The Dunya</span>
        <span class="choice-sub">Fame, fashion, likes, and trends — exciting, but temporary.</span>
      </button>
    </div>`;

  let feedback = "";
  if (chosen){
    const good = chosen === FINAL_CHOICE.correct;
    const content = good ? FINAL_CHOICE.good : FINAL_CHOICE.retry;
    feedback = `
    <div class="feedback ${good ? "good":"retry"}">${good ? ICONS.check : ICONS.heart}
      <div>
        ${content.lines.map(l=>`<p style="margin-bottom:6px;">${l}</p>`).join("")}
        <span class="quote">${content.quote}</span>
      </div>
    </div>
    ${!good ? `<div class="actions"><span></span><button class="btn btn-purple" data-final-retry="1">Choose again ${ICONS.arrow}</button></div>` : ""}
    ${good ? `<div class="dua" style="background:linear-gradient(180deg,#FFFCF3,#FBF0DA);border:1px solid var(--line);">
        <p class="label" style="color:var(--gold-deep);">Closing du‘a</p>
        <p style="color:var(--ink);">${FINAL_CHOICE.closing}</p>
      </div>` : ""}`;
  }

  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">${FINAL_CHOICE.eyebrow}</span>
      <h2>${FINAL_CHOICE.title}</h2>
      <p class="lede">${FINAL_CHOICE.tagline}</p>
    </div>
    ${cards}
    ${feedback}
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Back to Menu</button>
      <span></span>
    </div>
  </div>`;
}

/* ---------------- bonus screens ---------------- */

function screenBonusIntro(){
  return `
  <div class="card stack">
    <div>
      ${ornament("Bonus mini-lesson")}
      <h2>The Qur’an and Ahlul Bayt (A.S.)</h2>
      <p class="lede">Simple questions, beautiful answers.</p>
    </div>
    <div class="hadith-block">
      <span style="font-size:0.8rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--purple);">Allah says</span>
      <p class="say" dir="rtl" lang="ar" style="font-size:1.35rem;">إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا</p>
      <p class="say" style="font-size:1rem;margin-top:6px;">“Indeed, Allah only wants to remove all impurity from you, O People of the House, and purify you completely.”</p>
      <p class="ref">Qur’an 33:33</p>
    </div>
    <div class="hadith-block" style="margin-top:4px;">
      <span style="font-size:0.8rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--gold-deep);">The Prophet Muhammad (saww) said</span>
      <p class="say">“I leave behind two weighty things among you: the Book of Allah (the Qur’an) and my Ahlul Bayt. Hold fast to them, and you will never go astray.”</p>
      <p class="ref">Hadith al-Thaqalayn</p>
    </div>
    <div class="hadith-block" style="margin-top:4px;">
      <span style="font-size:0.8rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--purple);">Who are Ahlul Kisa?</span>
      <p style="color:var(--ink-soft);margin-top:8px;">The five holy people under the cloak (chadar) whom the Prophet (saww) loved most:</p>
      <div class="kisa-list">
        <span class="kisa-chip">Prophet Muhammad (saww)</span>
        <span class="kisa-chip">Imam Ali (a.s.)</span>
        <span class="kisa-chip">Sayyida Fatima Zahra (a.s.)</span>
        <span class="kisa-chip">Imam Hasan (a.s.)</span>
        <span class="kisa-chip">Imam Husayn (a.s.)</span>
      </div>
    </div>
    <div class="talk"><span>💚</span><p>When we follow the Qur’an and Ahlul Kisa (A.S.), we follow the best path to Allah (SWT) and happiness in this life and the Hereafter.</p></div>
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Menu</button>
      <button class="btn btn-primary" data-nav="bonus1">Start the four questions ${ICONS.arrow}</button>
    </div>
  </div>`;
}

function screenBonusQuestion(b){
  const idx = BONUS_QA.indexOf(b);
  const nextId = idx < BONUS_QA.length - 1 ? "bonus"+BONUS_QA[idx+1].num : "bonusClose";
  const nextLabel = idx < BONUS_QA.length - 1 ? `Question ${b.num+1}` : "Ahlul Bayt — the Ark of Salvation";
  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Question ${b.num} of ${BONUS_QA.length}</span>
      <h2>${b.title}</h2>
    </div>
    <div class="panel"><h3>Answer</h3><p>${b.answer}</p></div>
    ${b.together ? `<div class="talk"><span>🗣️</span><p><b>Say together:</b> ${b.together}</p></div>` : ""}
    ${b.small ? `<div class="talk"><span>🌙</span><p><b>Small action:</b> ${b.small}</p></div>` : ""}
    ${b.reflect ? `<div class="talk"><span>💭</span><p><b>Class reflection:</b> ${b.reflect}</p></div>` : ""}
    <p class="refline">${b.ref}</p>
    ${actionRow({leftLabel:"Menu", leftNav:"menu", rightLabel:nextLabel, rightNav:nextId})}
  </div>`;
}

function screenBonusClose(){
  return `
  <div class="card stack">
    <div>
      ${ornament("Ahlul Bayt (A.S.)")}
      <h2>The Ark of Salvation</h2>
    </div>
    <div class="hadith-block">
      <span style="font-size:0.8rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--gold-deep);">The Prophet Muhammad (s) said</span>
      <p class="say">“The example of my Ahlul Bayt among you is like the Ark of Nuh. Whoever boards it is saved, and whoever turns away from it is drowned.”</p>
      <p class="ref">Hadith al-Safinah — al-Hakim, al-Mustadrak ‘ala al-Sahihayn</p>
    </div>
    <div class="talk"><span>💗</span><p>When we love and follow Ahlul Bayt (A.S.), they guide us safely to Allah.</p></div>
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Back to Menu</button>
      <button class="btn btn-primary" data-nav="storyMenu">Go to Story Time ${ICONS.arrow}</button>
    </div>
  </div>`;
}

function screenReferences(){
  return `
  <div class="card stack">
    <div>
      <span class="eyebrow">Teacher references</span>
      <h2>Use these for review and parent questions</h2>
    </div>
    <div class="ref-grid">
      <div>
        <h3>Qur’an references</h3>
        <ul>
          <li>Purpose of worship — 51:56</li>
          <li>Prayer / remembrance — 20:14, 29:45</li>
          <li>Fasting — 2:183</li>
          <li>Capacity / mercy — 2:286, 94:5–6</li>
          <li>Hijab / modesty — 24:31, 33:59</li>
          <li>Mercy after mistakes — 39:53, 4:110</li>
          <li>Good speech — 16:125, 41:34</li>
          <li>Qur’an and Ahlul Bayt — 2:2, 17:9, 13:28, 17:82, 33:33, 42:23</li>
        </ul>
      </div>
      <div>
        <h3>Shia fiqh &amp; hadith references</h3>
        <ul>
          <li>Sayyid Sistani, Adulthood—Puberty Q&amp;A: a girl is adult after completing nine lunar years.</li>
          <li>Sayyid Sistani, Summary of Rules of Worship, Issue 2: taklif begins for girls after nine lunar years.</li>
          <li>Sayyid Sistani, Islamic Laws, Ruling 776: covering during prayer.</li>
          <li>Sayyid Sistani, Hijab Q&amp;A and Women’s Issues: hijab around non-mahram and covering details.</li>
          <li>Hadith al-Thaqalayn — Sahih al-Thaqalayn.</li>
          <li>Hadith al-Kisa; Hadith al-Safinah — al-Hakim, al-Mustadrak ‘ala al-Sahihayn.</li>
        </ul>
      </div>
    </div>
    <div class="note">For detailed or unusual situations, families should ask their own marja or local scholar.</div>
    <div class="actions"><button class="btn btn-primary" data-nav="menu">Back to Menu</button><span></span></div>
  </div>`;
}

/* ---------------- router ---------------- */

function screenHTML(){
  if (state.screen === "menu") return screenMenu();
  if (state.screen === "game") return screenGame();
  if (state.screen === "scenario") return screenScenario();
  if (state.screen === "pledge") return screenPledge();
  if (state.screen === "storyMenu") return screenStoryMenu();
  if (state.screen === "story1") return storyScreen(STORY1, "story1", "story2", "Continue to Story 2");
  if (state.screen === "story2") return storyScreen(STORY2, "story2", "activity", "Go to Activity");
  if (state.screen === "activity") return screenActivity();
  if (state.screen === "finalChoice") return screenFinalChoice();
  if (state.screen === "dressup") return screenDressUp();
  if (state.screen === "bonusIntro") return screenBonusIntro();
  if (state.screen === "bonusClose") return screenBonusClose();
  if (state.screen === "references") return screenReferences();
  if (state.screen === "niyyah") return screenNiyyah();
  const q = QUESTIONS.find(q=>q.id === state.screen);
  if (q) return screenQuestion(q);
  const b = BONUS_QA.find(b=>"bonus"+b.num === state.screen);
  if (b) return screenBonusQuestion(b);
  return screenMenu();
}

function footerLine(){
  const map = {
    menu:"My Baligha Journey",
    game:"Interactive review", scenario:"Interactive scenario", pledge:"Closing",
    storyMenu:"Story Time", story1:"Story Time", story2:"Story Time",
    activity:"Story Time", finalChoice:"End of Lesson", dressup:"Dress-Up Challenge",
    bonusIntro:"Qur’an & Ahlul Bayt", bonusClose:"Qur’an & Ahlul Bayt",
    references:"References", niyyah:"Niyyah for Taqleed",
  };
  let label = map[state.screen];
  if (!label) label = QUESTION_ORDER.includes(state.screen) ? "Menu" : (BONUS_ORDER.includes(state.screen) ? "Qur’an & Ahlul Bayt" : "My Baligha Journey");
  return `<footer><span>${label}</span><span> · Shoa Mehar Zaidi </span></footer>`;
}

function render(){
  const app = document.getElementById("app");
  app.innerHTML = `
    ${topbar()}
    <main><div class="screen">${screenHTML()}</div></main>
    ${footerLine()}
  `;
  attachEvents();
}

/* ---------------- dress-up drag & drop engine ---------------- */

let dragState = null; // { item, chipEl, ghost }

function positionGhost(ghost, x, y){
  ghost.style.left = x + "px";
  ghost.style.top = y + "px";
}

function elementAtPoint(x, y){
  if (dragState && dragState.ghost) dragState.ghost.style.display = "none";
  const el = document.elementFromPoint(x, y);
  if (dragState && dragState.ghost) dragState.ghost.style.display = "";
  return el;
}

function isCompatibleDrop(item, zone){
  if (!zone) return false;
  return item.zone === zone;
}

function clearZoneHighlights(){
  document.querySelectorAll(".drop-zone").forEach(z=>z.classList.remove("zone-active"));
}

function cleanupDrag(){
  if (dragState){
    dragState.chipEl.classList.remove("dragging");
    dragState.ghost.remove();
  }
  dragState = null;
  clearZoneHighlights();
}

function startChipDrag(e, chipEl, item){
  e.preventDefault();
  try{ chipEl.setPointerCapture(e.pointerId); }catch(err){}
  chipEl.classList.add("dragging");

  const ghost = document.createElement("div");
  ghost.className = "ghost-chip";
  ghost.innerHTML = `<img class="chip-img" src="${item.img}" alt="" /><span>${item.label}</span>`;
  document.body.appendChild(ghost);
  positionGhost(ghost, e.clientX, e.clientY);

  dragState = { item, chipEl, ghost };

  function onMove(ev){
    if (!dragState) return;
    positionGhost(dragState.ghost, ev.clientX, ev.clientY);
    clearZoneHighlights();
    const el = elementAtPoint(ev.clientX, ev.clientY);
    if (el && el.classList && el.classList.contains("drop-zone")){
      const zone = el.getAttribute("data-zone");
      if (isCompatibleDrop(item, zone)) el.classList.add("zone-active");
    }
  }

  function onUp(ev){
    finishChipDrag(ev.clientX, ev.clientY);
    teardown();
  }

  function onCancel(){
    cleanupDrag();
    teardown();
  }

  function teardown(){
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    window.removeEventListener("pointercancel", onCancel);
  }

  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onCancel);
}

function finishChipDrag(x, y){
  const item = dragState.item;
  const el = elementAtPoint(x, y);
  if (el && el.classList && el.classList.contains("drop-zone")){
    const zone = el.getAttribute("data-zone");
    if (isCompatibleDrop(item, zone)){
      state.dressup[zone] = item.id;
      state.dressupChecked = false;
    }
  }
  cleanupDrag();
  render();
}

function attachEvents(){
  document.querySelectorAll("[data-nav]").forEach(el=>{
    el.addEventListener("click", ()=> go(el.getAttribute("data-nav")));
  });

  document.querySelectorAll("[data-game-opt]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const i = Number(el.getAttribute("data-game-opt"));
      state.game.selected = i;
      state.game.status = i === GAME.correct ? "good" : "retry";
      render();
    });
  });

  document.querySelectorAll("[data-scenario-opt]").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.scenario.selected = Number(el.getAttribute("data-scenario-opt"));
      render();
    });
  });

  document.querySelectorAll("[data-story-page]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const key = el.getAttribute("data-story-page");
      state[key].page += 1;
      render();
      window.scrollTo({top:0, behavior:"smooth"});
    });
  });

  document.querySelectorAll("[data-story-next]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const key = el.getAttribute("data-story-next");
      state[key].phase = "quiz";
      render();
    });
  });

  document.querySelectorAll("[data-story-reread]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const key = el.getAttribute("data-story-reread");
      state[key].phase = "reading";
      state[key].page = 0;
      render();
      window.scrollTo({top:0, behavior:"smooth"});
    });
  });

  document.querySelectorAll("[data-final-opt]").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.finalChoice.selected = el.getAttribute("data-final-opt");
      render();
    });
  });

  document.querySelectorAll("[data-final-retry]").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.finalChoice.selected = null;
      render();
    });
  });

  document.querySelectorAll("[data-story]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const key = el.getAttribute("data-story");
      const i = Number(el.getAttribute("data-opt"));
      const story = key === "story1" ? STORY1 : STORY2;
      state[key].selected = i;
      state[key].status = i === story.correct ? "good" : "retry";
      render();
    });
  });

  document.querySelectorAll("[data-activity]").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.activity.active = Number(el.getAttribute("data-activity"));
      render();
    });
  });

  document.querySelectorAll("[data-pledge-idx]").forEach(el=>{
    el.addEventListener("change", ()=>{
      const i = Number(el.getAttribute("data-pledge-idx"));
      if (state.pledge.has(i)) state.pledge.delete(i); else state.pledge.add(i);
      render();
    });
  });

  document.querySelectorAll("[data-chip]").forEach(el=>{
    const item = CLOTHING_ITEMS.find(c=>c.id === el.getAttribute("data-chip"));
    el.addEventListener("pointerdown", (e)=> startChipDrag(e, el, item));
  });

  document.querySelectorAll(".drop-zone").forEach(el=>{
    el.addEventListener("click", ()=>{
      const zone = el.getAttribute("data-zone");
      if (!state.dressup[zone]) return;
      state.dressup[zone] = null;
      state.dressupChecked = false;
      render();
    });
  });

  document.querySelectorAll("[data-dressup-reset]").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.dressup = { head:null, top:null, bottom:null };
      state.dressupChecked = false;
      render();
    });
  });

  document.querySelectorAll("[data-dressup-check]").forEach(el=>{
    el.addEventListener("click", ()=>{
      state.dressupChecked = true;
      render();
    });
  });
}

render();