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
    b:{label:"Kid example", text:"Wajib: daily prayers. Haram: lying. Mustahabb: extra salawat. Makruh: something better left."},
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
];

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

const STORY1 = {
  title:"Story 1: The Golden Key",
  scene:"indoor",
  text:[
    "Zahra receives a golden key when she begins her bāligha journey.",
    "She worries: “Is responsibility like a heavy box?”",
    "Her mother says: “Allah gives responsibility to the one He knows can grow.”",
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
  text:[
    "Amina thinks the tiny lantern is too small to matter.",
    "Then the lights go out, and the little lantern fills the room with light.",
    "Her grandmother says: “A small light can remove a great deal of darkness.”",
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

/* ---------------- state ---------------- */

const state = {
  screen: "title",
  visited: new Set(),
  game: { selected:null, status:null },      // status: 'good' | 'retry'
  scenario: { selected:null },
  story1: { selected:null, status:null },
  story2: { selected:null, status:null },
  activity: { active:null },
  pledge: new Set(),
};

const QUESTION_ORDER = QUESTIONS.map(q=>q.id);

function go(screen){
  state.screen = screen;
  if (QUESTION_ORDER.includes(screen)) state.visited.add(screen);
  render();
  window.scrollTo({top:0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? "auto":"smooth"});
}

/* ---------------- shared chrome ---------------- */

function topbar(){
  if (state.screen === "title") return "";
  const pct = Math.round((state.visited.size / QUESTIONS.length) * 100);
  return `
  <div class="topbar">
    <div class="brand">${ICONS.lantern}My Baligha Journey</div>
    <div class="progress-wrap">
      <span>${state.visited.size}/${QUESTIONS.length} questions</span>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <button class="menu-btn" data-nav="menu">${ICONS.menu} Menu</button>
  </div>`;
}

function actionRow({leftLabel, leftNav, rightLabel, rightNav, rightPrimary=true}){
  return `<div class="actions">
    ${leftNav ? `<button class="btn btn-ghost" data-nav="${leftNav}">${leftLabel}</button>` : `<span></span>`}
    ${rightNav ? `<button class="btn ${rightPrimary ? "btn-primary":"btn-ghost"}" data-nav="${rightNav}">${rightLabel} ${ICONS.arrow}</button>` : ``}
  </div>`;
}

/* ---------------- screens ---------------- */

function screenTitle(){
  return `
  <div class="hero">
    <span class="eyebrow">${ICONS.lantern} Interactive lesson for elementary girls</span>
    <h1>My Baligha Journey</h1>
    <p class="lede">Allah trusts me with beautiful responsibilities. A gentle, question-by-question journey through worship, hijab, mistakes, and mercy — with stories, a game, and a pledge along the way.</p>
    <button class="btn btn-primary" data-nav="agreement">Start Lesson ${ICONS.arrow}</button>
  </div>`;
}

function screenAgreement(){
  return `
  <div class="scene classroom stack">
    <span class="eyebrow">Before we begin</span>
    <h2>How we will learn today</h2>
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
    <div class="actions">
      <span></span>
      <button class="btn btn-primary" data-nav="menu">Open Menu ${ICONS.arrow}</button>
    </div>
  </div>`;
}

function menuTile(q){
  const visited = state.visited.has(q.id);
  return `<button class="tile ${visited ? "visited":""}" data-nav="${q.id}">
    <span class="dot"></span>
    <span class="tag">Q${q.num}</span>
    <span class="q">${q.title}</span>
  </button>`;
}

function screenMenu(){
  const tiles = QUESTIONS.map(menuTile).join("");
  return `
  <div class="stack">
    <div>
      <span class="eyebrow">Choose a question</span>
      <h2>Menu</h2>
      <p class="lede">Click any question tile, or go in order.</p>
    </div>
    <div class="menu-grid">${tiles}</div>
    <div class="menu-grid" style="grid-template-columns:repeat(3,1fr);">
      <button class="tile special" data-nav="game"><span class="tag">Play</span><span class="q">Quick Review Game</span></button>
      <button class="tile special" data-nav="storyMenu"><span class="tag">Listen</span><span class="q">Story Time</span></button>
      <button class="tile special" data-nav="pledge"><span class="tag">Reflect</span><span class="q">My Baligha Pledge</span></button>
    </div>
    <div class="actions">
      <span></span>
      <button class="btn btn-ghost" data-nav="references">Teacher references</button>
    </div>
  </div>`;
}

function screenQuestion(q){
  const idx = QUESTION_ORDER.indexOf(q.id);
  const next = idx < QUESTIONS.length - 1 ? QUESTION_ORDER[idx+1] : "game";
  const nextLabel = idx < QUESTIONS.length - 1 ? `Question ${q.num+1}` : "Quick Review Game";
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
    ${actionRow({leftLabel:"Menu", leftNav:"menu", rightLabel: next==="game" ? "Play the review game" : "Next question", rightNav: next})}
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
    ${actionRow({leftLabel:"Menu", leftNav:"menu", rightLabel:"Continue to the pledge", rightNav:"pledge"})}
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
    <h2>My Baligha Pledge</h2>
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
    <h2>Divine responsibility is not a burden</h2>
    <p class="lede">Today we will listen to two short stories: The Golden Key, and The Little Lantern. Your job: choose, discuss, and reflect.</p>
    <div class="actions">
      <button class="btn btn-ghost" data-nav="menu">Menu</button>
      <button class="btn btn-primary" data-nav="story1">Begin Story 1 ${ICONS.arrow}</button>
    </div>
  </div>`;
}

function storyScreen(story, key, nextNav, nextLabel){
  const s = state[key];
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
    <h2>${story.title}</h2>
    ${story.text.map(t=>`<p class="lede">${t}</p>`).join("")}
    <p style="font-weight:800;color:#fff;margin-top:6px;">${story.question}</p>
    <div class="options">${opts}</div>
    ${feedback}
    <div class="actions"><button class="btn btn-ghost" data-nav="menu">Menu</button><span></span></div>
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
      <button class="btn btn-primary" data-nav="references">See references ${ICONS.arrow}</button>
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
        </ul>
      </div>
      <div>
        <h3>Shia fiqh references</h3>
        <ul>
          <li>Sayyid Sistani, Adulthood—Puberty Q&amp;A: a girl is adult after completing nine lunar years.</li>
          <li>Sayyid Sistani, Summary of Rules of Worship, Issue 2: taklif begins for girls after nine lunar years.</li>
          <li>Sayyid Sistani, Islamic Laws, Ruling 776: covering during prayer.</li>
          <li>Sayyid Sistani, Hijab Q&amp;A and Women’s Issues: hijab around non-mahram and covering details.</li>
        </ul>
      </div>
    </div>
    <div class="note">For detailed or unusual situations, families should ask their own marja or local scholar.</div>
    <div class="actions"><button class="btn btn-primary" data-nav="menu">Back to Menu</button><span></span></div>
  </div>`;
}

/* ---------------- router ---------------- */

function screenHTML(){
  if (state.screen === "title") return screenTitle();
  if (state.screen === "agreement") return screenAgreement();
  if (state.screen === "menu") return screenMenu();
  if (state.screen === "game") return screenGame();
  if (state.screen === "scenario") return screenScenario();
  if (state.screen === "pledge") return screenPledge();
  if (state.screen === "storyMenu") return screenStoryMenu();
  if (state.screen === "story1") return storyScreen(STORY1, "story1", "story2", "Continue to Story 2");
  if (state.screen === "story2") return storyScreen(STORY2, "story2", "activity", "Go to Activity");
  if (state.screen === "activity") return screenActivity();
  if (state.screen === "references") return screenReferences();
  const q = QUESTIONS.find(q=>q.id === state.screen);
  if (q) return screenQuestion(q);
  return screenMenu();
}

function render(){
  const app = document.getElementById("app");
  app.innerHTML = `
    ${topbar()}
    <main><div class="screen">${screenHTML()}</div></main>
    <footer> Created by Shoa Mehar Zaidi · My Baligha Journey</footer>
  `;
  attachEvents();
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
}

render();
