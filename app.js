const STORAGE_KEY = "adhkar-counters-v2";

const SECTION_ADHKAR = {
  title: "الأذكار",
  items: [
      { id: "subhan", text: "سُبْحَانَ اللَّهِ", hint: "تسبيح", defaultTarget: 33 },
      { id: "hamd", text: "الْحَمْدُ لِلَّهِ", hint: "حمد", defaultTarget: 33 },
      { id: "takbir", text: "اللَّهُ أَكْبَرُ", hint: "تكبير", defaultTarget: 33 },
      { id: "tahlil", text: "لَا إِلَهَ إِلَّا اللَّهُ", hint: "تهليل", defaultTarget: 33 },
      { id: "istighfar", text: "أَسْتَغْفِرُ اللَّهَ", hint: "استغفار", defaultTarget: 33 },
      {
        id: "subhan_wa_bihamdih",
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        hint: "ما قاله حُوتٌ في بطنٍ مظلم",
        defaultTarget: 100,
      },
      {
        id: "subhan_alatheem",
        text: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ",
        hint: "ثقيلَتان في الميزان",
        defaultTarget: 33,
      },
      {
        id: "hawla",
        text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        hint: "كنز من كنوز الجنة",
        defaultTarget: 100,
      },
      {
        id: "hasbi",
        text: "حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ",
        hint: "قالها إبراهيم عند أُلْقِيَ في النار",
        defaultTarget: 33,
      },
      {
        id: "yunqal",
        text: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
        hint: "دعاء ذي النون",
        defaultTarget: 33,
      },
      {
        id: "rabbana_atina",
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        hint: "من دعاء المؤمنين",
        defaultTarget: 10,
      },
      {
        id: "la_ilaha_illa_llah_wahd",
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        hint: "من أذكار الصباح والمساء",
        defaultTarget: 10,
      },
      {
        id: "salawat_short",
        text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
        hint: "صلاة مختصرة على النبي ﷺ",
        defaultTarget: 33,
      },
    ],
};

const SECTION_MUAWWIDHAT = {
    title: "المعوذتان",
    items: [
      {
        id: "surah_falaq",
        title: "سُورَةُ الْفَلَقِ",
        hint: "اضغط بعد كل تلاوة كاملة (أو بعد كل مرة تقرؤها)",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
          "مِن شَرِّ مَا خَلَقَ",
          "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
          "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
          "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        ],
      },
      {
        id: "surah_nas",
        title: "سُورَةُ النَّاسِ",
        hint: "اضغط بعد كل تلاوة كاملة",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          "مَلِكِ النَّاسِ",
          "إِلَٰهِ النَّاسِ",
          "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
          "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
          "مِنَ الْجِنَّةِ وَالنَّاسِ",
        ],
      },
    ],
};

const QURAN_ITEMS_SHORT = [
      {
        id: "surah_fatiha",
        title: "سُورَةُ الْفَاتِحَةِ",
        hint: "أم الكتاب — اضغط بعد كل ختمة للسورة",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
          "الرَّحْمَٰنِ الرَّحِيمِ",
          "مَالِكِ يَوْمِ الدِّينِ",
          "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
          "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        ],
      },
      {
        id: "surah_ikhlas",
        title: "سُورَةُ الْإِخْلَاصِ",
        hint: "تعدل ثلث القرآن — اضغط بعد كل تلاوة",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "قُلْ هُوَ اللَّهُ أَحَدٌ",
          "اللَّهُ الصَّمَدُ",
          "لَمْ يَلِدْ وَلَمْ يُولَدْ",
          "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        ],
      },
      {
        id: "surah_kawthar",
        title: "سُورَةُ الْكَوْثَرِ",
        hint: "اضغط بعد كل تلاوة",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
          "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
          "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        ],
      },
      {
        id: "surah_asr",
        title: "سُورَةُ الْعَصْرِ",
        hint: "اضغط بعد كل تلاوة",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "وَالْعَصْرِ",
          "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
          "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        ],
      },
      {
        id: "surah_inshirah",
        title: "سُورَةُ الشَّرْحِ",
        hint: "اضغط بعد كل تلاوة",
        defaultTarget: 3,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
          "وَوَضَعْنَا عَنكَ وِزْرَكَ",
          "الَّذِي أَنقَضَ ظَهْرَكَ",
          "وَرَفَعْنَا لَكَ ذِكْرَكَ",
          "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
          "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
          "فَإِذَا فَرَغْتَ فَانصَبْ",
          "وَإِلَى رَبِّكَ فَارْغَبْ",
        ],
      },
      {
        id: "surah_duha",
        title: "سُورَةُ الضُّحَىٰ",
        hint: "اضغط بعد كل تلاوة",
        defaultTarget: 1,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "وَالضُّحَىٰ",
          "وَاللَّيْلِ إِذَا سَجَىٰ",
          "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
          "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
          "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
          "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
          "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
          "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ",
          "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ",
          "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ",
          "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        ],
      },
      {
        id: "surah_kafirun",
        title: "سُورَةُ الْكَافِرُونَ",
        hint: "اضغط بعد كل تلاوة",
        defaultTarget: 1,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
          "لَا أَعْبُدُ مَا تَعْبُدُونَ",
          "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
          "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
          "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
          "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
        ],
      },
      {
        id: "surah_nasr",
        title: "سُورَةُ النَّصْرِ",
        hint: "اضغط بعد كل تلاوة",
        defaultTarget: 1,
        body: [
          "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
          "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
          "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا",
        ],
      },
];

function getTilawahItems() {
  const long = window.QURAN_LONG_SURAHS;
  const bulk = window.QURAN_EXTRA_SURAHS;
  const items = [...SECTION_MUAWWIDHAT.items, ...QURAN_ITEMS_SHORT];

  if (long && Array.isArray(long.mulk) && long.mulk.length) {
    items.push({
      id: "surah_mulk",
      title: "سُورَةُ الْمُلْكِ",
      hint: "٣٠ آية — اضغط بعد كل ختمة تلاوة كاملة للسورة",
      defaultTarget: 1,
      body: long.mulk,
    });
  }
  if (long && Array.isArray(long.baqarah) && long.baqarah.length) {
    items.push({
      id: "surah_baqarah",
      title: "سُورَةُ الْبَقَرَةِ",
      hint: "٢٨٦ آية — اضغط بعد كل ختمة. النص في صندوق قابل للتمرير",
      defaultTarget: 1,
      body: long.baqarah,
    });
  }

  if (Array.isArray(bulk)) {
    for (const s of bulk) {
      if (!s || typeof s.number !== "number" || !Array.isArray(s.ayahs)) continue;
      items.push({
        id: "surah_" + s.number,
        title: s.name || "سُورَةٌ",
        hint:
          (s.ayahCount != null ? s.ayahCount : s.ayahs.length) +
          " آية — اضغط بعد كل ختمة تلاوة كاملة",
        defaultTarget: 1,
        body: s.ayahs,
      });
    }
  }

  return items;
}

function getSections() {
  return [
    { title: "الأذكار", items: SECTION_ADHKAR.items },
    { title: "التلاوة", items: getTilawahItems() },
  ];
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function migrateFromV1(state) {
  try {
    if (localStorage.getItem(STORAGE_KEY)) return state;
    const raw = localStorage.getItem("adhkar-counters-v1");
    if (!raw) return state;
    const old = JSON.parse(raw);
    for (const key of Object.keys(old)) {
      if (!old[key] || typeof old[key] !== "object") continue;
      if (!state[key]) continue;
      state[key].count = Number(old[key].count) || state[key].count;
      if (old[key].target != null)
        state[key].target = Number(old[key].target) || state[key].target;
    }
    saveState(state);
  } catch {
    /* ignore */
  }
  return state;
}

function getDefaults() {
  const stored = loadState();
  const defaults = { salawat: { count: 0, target: 100 } };

  for (const section of getSections()) {
    for (const item of section.items) {
      defaults[item.id] = {
        count: 0,
        target: item.defaultTarget ?? 33,
      };
    }
  }

  for (const key of Object.keys(defaults)) {
    if (stored[key]) {
      defaults[key].count = Number(stored[key].count) || 0;
      if (stored[key].target != null) defaults[key].target = Number(stored[key].target) || 0;
    }
  }

  return migrateFromV1(defaults);
}

let state = getDefaults();

function updateProgress(card, count, target) {
  const fill = card.querySelector("[data-progress]");
  const done = card.querySelector("[data-done]");
  const goalLabel = card.querySelector("[data-goal-label]");

  if (target > 0) {
    const pct = Math.min(100, (count / target) * 100);
    fill.style.width = pct + "%";
    goalLabel.textContent = "من " + target;
    done.hidden = count < target;
  } else {
    fill.style.width = "0%";
    goalLabel.textContent = "— اضبط هدفاً في الحقل أعلاه";
    done.hidden = true;
  }
}

function bindCard(card, id) {
  const countEl = card.querySelector("[data-count]");
  const input = card.querySelector('input[type="number"]');

  function sync() {
    countEl.textContent = state[id].count;
    if (input) input.value = state[id].target;
    updateProgress(card, state[id].count, state[id].target);
    saveState(state);
  }

  card.querySelector("[data-action='increment']").addEventListener("click", () => {
    state[id].count += 1;
    sync();
  });

  card.querySelector("[data-reset]").addEventListener("click", () => {
    state[id].count = 0;
    sync();
  });

  if (input) {
    input.addEventListener("change", () => {
      let t = parseInt(input.value, 10);
      if (Number.isNaN(t) || t < 0) t = 0;
      state[id].target = t;
      sync();
    });
  }

  sync();
}

function formatAyahNumber(n) {
  try {
    return n.toLocaleString("ar-u-nu-arab");
  } catch {
    const east = "٠١٢٣٤٥٦٧٨٩";
    return String(n).replace(/\d/g, (d) => east[parseInt(d, 10)]);
  }
}

function buildContentBlock(item) {
  if (item.body && item.body.length) {
    const wrap = document.createElement("div");
    wrap.className = "quran-body";
    if (item.id === "surah_baqarah" || item.body.length > 100) {
      wrap.classList.add("quran-body--scroll");
    }
    item.body.forEach((line, i) => {
      const p = document.createElement("p");
      p.className = "quran-ayah";

      const txt = document.createElement("span");
      txt.className = "ayah-text";
      txt.textContent = line;

      const num = document.createElement("span");
      num.className = "ayah-number";
      num.setAttribute("aria-label", "آية " + formatAyahNumber(i + 1));
      num.textContent = formatAyahNumber(i + 1);

      p.appendChild(txt);
      p.appendChild(num);
      wrap.appendChild(p);
    });
    return wrap;
  }
  const textEl = document.createElement("p");
  textEl.className = "dhikr-text";
  textEl.textContent = item.text;
  return textEl;
}

function createCard(item) {
  const isSurah = Boolean(item.body);
  const article = document.createElement("article");
  article.className = isSurah ? "card card-surah" : "card";
  article.dataset.id = item.id;

  if (isSurah) {
    const titleEl = document.createElement("p");
    titleEl.className = "dhikr-text";
    titleEl.textContent = item.title;
    article.appendChild(titleEl);
  }

  const quranEl = buildContentBlock(item);
  article.appendChild(quranEl);

  if (isSurah && surahNumberFromItem(item) != null) {
    article.insertBefore(createTarteelBar(item, article), quranEl);
  }

  const hintEl = document.createElement("p");
  hintEl.className = "dhikr-translation";
  hintEl.textContent = item.hint;
  article.appendChild(hintEl);

  const controls = document.createElement("div");
  controls.className = "controls";

  const targetRow = document.createElement("div");
  targetRow.className = "target-row";
  const label = document.createElement("label");
  label.textContent = "الهدف";
  const inp = document.createElement("input");
  inp.type = "number";
  inp.min = "0";
  inp.step = "1";
  inp.inputMode = "numeric";
  inp.value = String(item.defaultTarget ?? 33);
  targetRow.appendChild(label);
  targetRow.appendChild(inp);

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn-tap";
  btn.dataset.action = "increment";
  btn.textContent = isSurah ? "تمت تلاوة — عدٌّ واحد" : "اضغط للعدّ";

  controls.appendChild(targetRow);
  controls.appendChild(btn);
  article.appendChild(controls);

  const progressWrap = document.createElement("div");
  progressWrap.className = "progress-wrap";
  progressWrap.innerHTML = `
    <div class="progress-bar"><div class="progress-fill" data-progress></div></div>
    <div class="stats">
      <span><span class="count" data-count>0</span> <span data-goal-label></span></span>
      <span>
        <span class="goal-done" data-done hidden>تم الهدف</span>
        <button type="button" class="btn-reset" data-reset>صفر العدّ</button>
      </span>
    </div>
  `;
  article.appendChild(progressWrap);

  return article;
}

const SURAH_NUM_BY_ID = {
  surah_fatiha: 1,
  surah_baqarah: 2,
  surah_mulk: 67,
  surah_ikhlas: 112,
  surah_kawthar: 108,
  surah_asr: 103,
  surah_inshirah: 94,
  surah_duha: 93,
  surah_kafirun: 109,
  surah_nasr: 110,
  surah_falaq: 113,
  surah_nas: 114,
};

function surahNumberFromItem(item) {
  const m = /^surah_(\d+)$/.exec(item.id);
  if (m) return parseInt(m[1], 10);
  const n = SURAH_NUM_BY_ID[item.id];
  return n != null ? n : null;
}

function tilawahOrderKey(item) {
  return surahNumberFromItem(item) ?? 999;
}

/** قُرّاء — معرّفات api.alquran.cloud (الصوت آية بآية؛ بعضهم له ملف سورة كاملة على CDN) */
const TARTEEL_RECITERS = [
  { id: "ar.alafasy", name: "مشاري العفاسي" },
  { id: "ar.mahermuaiqly", name: "ماهر المعيقلي" },
  { id: "ar.abdurrahmaansudais", name: "عبد الرحمن السديس" },
  { id: "ar.abdullahbasfar", name: "عبد الله بصفر" },
  { id: "ar.abdulsamad", name: "عبد الباسط عبد الصمد" },
  { id: "ar.husary", name: "محمود خليل الحصري" },
  { id: "ar.husarymujawwad", name: "الحصري — مجوّد" },
  { id: "ar.hudhaify", name: "علي الحذيفي" },
  { id: "ar.shaatree", name: "أبو بكر الشاطري" },
  { id: "ar.ahmedajamy", name: "أحمد العجمي" },
  { id: "ar.hanirifai", name: "هاني الرفاعي" },
  { id: "ar.muhammadjibreel", name: "محمد جبريل" },
  { id: "ar.muhammadayyoub", name: "محمد أيوب" },
  { id: "ar.ibrahimakhbar", name: "إبراهيم الأخضر" },
  { id: "ar.saoodshuraym", name: "سعود الشريم" },
  { id: "ar.aymanswoaid", name: "أيمن سويد" },
  { id: "ar.parhizgar", name: "شهريار برهيزكار" },
  { id: "ar.minshawi", name: "محمد صديق المنشاوي" },
  { id: "ar.minshawimujawwad", name: "المنشاوي — مجوّد" },
  { id: "ar.abdulbasitmurattal", name: "عبد الباسط — مرتّل" },
];

const RECITER_STORAGE_KEY = "trh-reciter-edition";

function getStoredReciterEdition() {
  try {
    const s = localStorage.getItem(RECITER_STORAGE_KEY);
    if (s && TARTEEL_RECITERS.some((r) => r.id === s)) return s;
  } catch {
    /* ignore */
  }
  return TARTEEL_RECITERS[0].id;
}

function reciterNameFromEdition(edition) {
  return TARTEEL_RECITERS.find((r) => r.id === edition)?.name ?? edition;
}

function ayahTextIncludesBasmala(text) {
  if (!text) return false;
  const t = text
    .replace(/\ufeff/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "")
    .replace(/\s+/g, "");
  return t.includes("بسم") && (t.includes("الله") || t.includes("لله"));
}

function resolveAyahAudioCandidates(ay) {
  const out = [];
  if (ay && ay.audio) out.push(ay.audio);
  if (ay && Array.isArray(ay.audioSecondary)) {
    for (const u of ay.audioSecondary) {
      if (u && !out.includes(u)) out.push(u);
    }
  }
  return out;
}

/** ملف سورة واحد (بدون تقطيع آيات) — متاح لبعض القرّاء على cdn.islamic.network */
function fullSurahAudioUrl(edition, surahNum) {
  return `https://cdn.islamic.network/quran/audio-surah/128/${edition}/${surahNum}.mp3`;
}

const tarteelState = {
  audio: null,
  mode: null,
  playlist: [],
  highlightMap: [],
  card: null,
};

function stopTarteel() {
  if (tarteelState.audio) {
    tarteelState.audio.pause();
    tarteelState.audio.src = "";
    tarteelState.audio.removeAttribute("src");
    try {
      tarteelState.audio.load();
    } catch {
      /* ignore */
    }
    tarteelState.audio = null;
  }
  tarteelState.mode = null;
  tarteelState.playlist = [];
  tarteelState.highlightMap = [];
  tarteelState.card = null;
  document.querySelectorAll(".quran-ayah--playing").forEach((el) => el.classList.remove("quran-ayah--playing"));
  document.querySelectorAll(".quran-body--basmala-playing").forEach((el) => el.classList.remove("quran-body--basmala-playing"));
  document.querySelectorAll(".quran-body--full-playing").forEach((el) => el.classList.remove("quran-body--full-playing"));
}

function highlightTarteelBasmala(card) {
  const ayahs = card.querySelectorAll(".quran-ayah");
  ayahs.forEach((el) => el.classList.remove("quran-ayah--playing"));
  const body = card.querySelector(".quran-body");
  if (body) {
    body.classList.add("quran-body--basmala-playing");
    requestAnimationFrame(() => {
      body.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
}

function highlightTarteelAyah(card, idx) {
  const body = card.querySelector(".quran-body");
  body?.classList.remove("quran-body--basmala-playing");
  const ayahs = card.querySelectorAll(".quran-ayah");
  const n = ayahs.length;
  const safeIdx = n === 0 ? 0 : Math.min(Math.max(0, idx), n - 1);
  ayahs.forEach((el, i) => el.classList.toggle("quran-ayah--playing", i === safeIdx));
  if (ayahs[safeIdx]) {
    requestAnimationFrame(() => {
      ayahs[safeIdx].scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
}

function applyTarteelHighlight(card, audioIndex) {
  const map = tarteelState.highlightMap;
  const hi = map.length > audioIndex ? map[audioIndex] : audioIndex;
  if (hi === -1) highlightTarteelBasmala(card);
  else highlightTarteelAyah(card, hi);
}

function playTarteelFrom(card, i, candIdx, statusEl, playFullBtn, playAyahBtn, stopBtn) {
  const playlist = tarteelState.playlist;
  if (i >= playlist.length) {
    stopTarteel();
    statusEl.textContent = "انتهت تلاوة السورة (آية بآية).";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    return;
  }

  const entry = playlist[i];
  const candidates = entry.candidates || [];
  if (candIdx >= candidates.length) {
    statusEl.textContent = "تعذّر تشغيل هذا المقطع حتى مع الروابط البديلة.";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    stopTarteel();
    return;
  }

  applyTarteelHighlight(card, i);
  if (tarteelState.audio) {
    try {
      tarteelState.audio.pause();
    } catch {
      /* ignore */
    }
  }
  const a = new Audio(candidates[candIdx]);
  tarteelState.audio = a;

  a.addEventListener("ended", () =>
    playTarteelFrom(card, i + 1, 0, statusEl, playFullBtn, playAyahBtn, stopBtn),
  );
  a.addEventListener("error", () => {
    if (candIdx + 1 < candidates.length) {
      playTarteelFrom(card, i, candIdx + 1, statusEl, playFullBtn, playAyahBtn, stopBtn);
      return;
    }
    statusEl.textContent = "تعذّر تشغيل هذا المقطع.";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    stopTarteel();
  });

  a.play()
    .then(() => {
      stopBtn.disabled = false;
    })
    .catch(() => {
      statusEl.textContent = "المتصفّح منع التشغيل. انقر مجدداً على «آية بآية» أو «السورة كاملة».";
      playFullBtn.disabled = false;
      playAyahBtn.disabled = false;
      stopBtn.disabled = true;
      stopTarteel();
    });
}

async function fetchBasmalaAudioCandidates(edition) {
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/1/${edition}`);
    const j = await res.json();
    if (j.code !== 200 || !j.data?.ayahs?.[0]) return [];
    return resolveAyahAudioCandidates(j.data.ayahs[0]);
  } catch {
    return [];
  }
}

function startFullSurah(card, surahNum, edition, statusEl, playFullBtn, playAyahBtn, stopBtn) {
  stopTarteel();
  tarteelState.mode = "full";
  tarteelState.card = card;
  statusEl.textContent = "جاري تشغيل السورة كاملة…";
  playFullBtn.disabled = true;
  playAyahBtn.disabled = true;
  stopBtn.disabled = false;

  const body = card.querySelector(".quran-body");
  body?.classList.remove("quran-body--basmala-playing");
  document.querySelectorAll(".quran-ayah--playing").forEach((el) => el.classList.remove("quran-ayah--playing"));
  body?.classList.add("quran-body--full-playing");

  const url = fullSurahAudioUrl(edition, surahNum);
  const a = new Audio(url);
  tarteelState.audio = a;

  a.addEventListener("ended", () => {
    body?.classList.remove("quran-body--full-playing");
    statusEl.textContent = "انتهت تلاوة السورة (ملف واحد بدون تقطيع).";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    tarteelState.audio = null;
    tarteelState.mode = null;
    tarteelState.card = null;
  });

  a.addEventListener("error", () => {
    body?.classList.remove("quran-body--full-playing");
    statusEl.textContent =
      "ملف السورة الكاملة غير متاح لهذا القارئ على الخادم. جرّب «آية بآية»، أو قارئاً مثل العفاسي أو عبد الله بصفر أو عبد الباسط مرتّل.";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    stopTarteel();
  });

  a.play().catch(() => {
    body?.classList.remove("quran-body--full-playing");
    statusEl.textContent = "المتصفّح منع التشغيل. انقر مجدداً على «السورة كاملة».";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    stopTarteel();
  });
}

async function startTarteel(card, surahNum, edition, statusEl, playFullBtn, playAyahBtn, stopBtn) {
  stopTarteel();
  tarteelState.mode = "ayah";
  tarteelState.card = card;
  statusEl.textContent = "جاري جلب مقاطع التلاوة…";
  playFullBtn.disabled = true;
  playAyahBtn.disabled = true;
  stopBtn.disabled = false;

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/${edition}`);
    const j = await res.json();
    if (j.code !== 200 || !j.data || !Array.isArray(j.data.ayahs)) {
      throw new Error("bad");
    }

    const apiAyahs = j.data.ayahs;
    const pairs = apiAyahs
      .map((ay, k) => {
        const candidates = resolveAyahAudioCandidates(ay);
        return candidates.length ? { candidates, ayahIdx: k } : null;
      })
      .filter(Boolean);

    let playlist = pairs.map((p) => ({ candidates: p.candidates }));
    let highlightMap = pairs.map((p) => p.ayahIdx);
    if (playlist.length === 0) throw new Error("empty");

    if (surahNum !== 1 && surahNum !== 9 && apiAyahs.length > 0) {
      const firstTxt = apiAyahs[0].text || "";
      if (!ayahTextIncludesBasmala(firstTxt)) {
        const basCandidates = await fetchBasmalaAudioCandidates(edition);
        if (basCandidates.length) {
          playlist = [{ candidates: basCandidates }, ...playlist];
          highlightMap = [-1, ...highlightMap];
        }
      }
    }

    tarteelState.playlist = playlist;
    tarteelState.highlightMap = highlightMap;
    statusEl.textContent =
      "القارئ: " +
      reciterNameFromEdition(edition) +
      " — آية بآية (كل المقاطع من المصدر؛ البسملة من الفاتحة لنفس القارئ عند الحاجة، ما عدا التوبة)";
    playTarteelFrom(card, 0, 0, statusEl, playFullBtn, playAyahBtn, stopBtn);
  } catch {
    statusEl.textContent = "تعذّر التحميل. تحقّق من الإنترنت أو جرّب قارئاً آخر.";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
    stopTarteel();
  }
}

function createTarteelBar(item, article) {
  const bar = document.createElement("div");
  bar.className = "tarteel-bar";

  const recRow = document.createElement("div");
  recRow.className = "tarteel-reciter-row";
  const recLabel = document.createElement("label");
  recLabel.className = "tarteel-reciter-label";
  const recSelectId = "tarteel-rec-" + item.id.replace(/[^a-zA-Z0-9_-]/g, "_");
  recLabel.htmlFor = recSelectId;
  recLabel.textContent = "القارئ";
  const recSelect = document.createElement("select");
  recSelect.id = recSelectId;
  recSelect.className = "tarteel-reciter-select";
  recSelect.setAttribute("aria-label", "اختيار القارئ");
  for (const r of TARTEEL_RECITERS) {
    const opt = document.createElement("option");
    opt.value = r.id;
    opt.textContent = r.name;
    recSelect.appendChild(opt);
  }
  recSelect.value = getStoredReciterEdition();
  recSelect.addEventListener("change", () => {
    try {
      localStorage.setItem(RECITER_STORAGE_KEY, recSelect.value);
    } catch {
      /* ignore */
    }
  });
  recRow.appendChild(recLabel);
  recRow.appendChild(recSelect);

  const row = document.createElement("div");
  row.className = "tarteel-bar__buttons";

  const playFullBtn = document.createElement("button");
  playFullBtn.type = "button";
  playFullBtn.className = "btn-tarteel btn-tarteel--full";
  playFullBtn.textContent = "السورة كاملة (ملف واحد)";

  const playAyahBtn = document.createElement("button");
  playAyahBtn.type = "button";
  playAyahBtn.className = "btn-tarteel";
  playAyahBtn.textContent = "آية بآية";

  const stopBtn = document.createElement("button");
  stopBtn.type = "button";
  stopBtn.className = "btn-tarteel btn-tarteel--stop";
  stopBtn.textContent = "إيقاف";
  stopBtn.disabled = true;

  const statusEl = document.createElement("p");
  statusEl.className = "tarteel-status";
  statusEl.textContent =
    "«السورة كاملة» بدون تقطيع (إن وُجد الملف للقارئ). «آية بآية» يمرّ على كل المقاطع من الـAPI. البسملة تُضاف من الفاتحة لنفس القارئ عندما لا تظهر في أول آية (ما عدا التوبة).";

  const sn = surahNumberFromItem(item);
  playFullBtn.addEventListener("click", () =>
    startFullSurah(article, sn, recSelect.value, statusEl, playFullBtn, playAyahBtn, stopBtn),
  );
  playAyahBtn.addEventListener("click", () =>
    startTarteel(article, sn, recSelect.value, statusEl, playFullBtn, playAyahBtn, stopBtn),
  );
  stopBtn.addEventListener("click", () => {
    stopTarteel();
    statusEl.textContent = "متوقف. اختر «السورة كاملة» أو «آية بآية» للبدء.";
    playFullBtn.disabled = false;
    playAyahBtn.disabled = false;
    stopBtn.disabled = true;
  });

  bar.appendChild(recRow);
  row.appendChild(playFullBtn);
  row.appendChild(playAyahBtn);
  row.appendChild(stopBtn);
  bar.appendChild(row);
  bar.appendChild(statusEl);
  return bar;
}

let tilawahItemsSorted = [];
const tilawahPickButtons = new Map();

function renderAdhkarSection() {
  const mount = document.getElementById("adhkar-root");
  if (!mount) return;
  const adhkar = getSections()[0];
  for (const item of adhkar.items) {
    const card = createCard(item);
    mount.appendChild(card);
    bindCard(card, item.id);
  }
}

function renderTilawahPicker() {
  const wrap = document.getElementById("tilawah-picker");
  const panel = document.getElementById("tilawah-panel");
  if (!wrap || !panel) return;

  tilawahItemsSorted = [...getTilawahItems()].sort((a, b) => tilawahOrderKey(a) - tilawahOrderKey(b));
  tilawahPickButtons.clear();

  wrap.replaceChildren();

  const g = document.createElement("div");
  g.className = "surah-grid";

  for (const item of tilawahItemsSorted) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "surah-pick";
    btn.dataset.surahId = item.id;
    btn.textContent = item.title;
    btn.addEventListener("click", () => selectTilawah(item.id));
    tilawahPickButtons.set(item.id, btn);
    g.appendChild(btn);
  }

  wrap.appendChild(g);

  panel.replaceChildren();
  const ph = document.createElement("div");
  ph.className = "tilawah-placeholder card";
  const t = document.createElement("p");
  t.className = "dhikr-text";
  t.textContent = "لم يُخترَ بعدُ سورة";
  const s = document.createElement("p");
  s.className = "dhikr-translation";
  s.textContent = "اضغط على أحد صناديق أسماء السور أعلاه لعرض النص والعدّ";
  ph.appendChild(t);
  ph.appendChild(s);
  panel.appendChild(ph);
}

function selectTilawah(id) {
  stopTarteel();

  for (const [bid, btn] of tilawahPickButtons) {
    btn.classList.toggle("surah-pick--active", bid === id);
  }

  const panel = document.getElementById("tilawah-panel");
  if (!panel) return;

  const item = tilawahItemsSorted.find((x) => x.id === id);
  if (!item) return;

  panel.replaceChildren();
  const card = createCard(item);
  panel.appendChild(card);
  bindCard(card, item.id);

  requestAnimationFrame(() => {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const MAIN_TAB_KEY = "trh-main-tab";

function setupMainTabs() {
  const btns = document.querySelectorAll(".top-switch [data-tab]");
  const vQuran = document.getElementById("view-quran");
  const vAdhkar = document.getElementById("view-adhkar");
  if (!btns.length || !vQuran || !vAdhkar) return;

  function apply(tab) {
    const isQuran = tab === "quran";
    vQuran.hidden = !isQuran;
    vAdhkar.hidden = isQuran;
    btns.forEach((b) => {
      const on = b.dataset.tab === tab;
      b.classList.toggle("top-switch__btn--active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    try {
      sessionStorage.setItem(MAIN_TAB_KEY, tab);
    } catch {
      /* ignore */
    }
  }

  btns.forEach((b) => {
    b.addEventListener("click", () => apply(b.dataset.tab));
  });

  let initial = "quran";
  try {
    const s = sessionStorage.getItem(MAIN_TAB_KEY);
    if (s === "adhkar" || s === "quran") initial = s;
  } catch {
    /* ignore */
  }
  apply(initial);
}

function init() {
  bindCard(document.querySelector('.card[data-id="salawat"]'), "salawat");
  renderAdhkarSection();
  renderTilawahPicker();
  setupMainTabs();
}

init();
