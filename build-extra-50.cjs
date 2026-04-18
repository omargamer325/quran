/* يولّد quran-extra-50.js — 50 سورة (أرقام ٣–٥٢). التشغيل: node build-extra-50.cjs */
const fs = require("fs");
const path = require("path");

async function main() {
  const out = [];
  for (let n = 3; n <= 52; n++) {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${n}/quran-uthmani`);
    const j = await res.json();
    if (j.code !== 200) throw new Error("surah " + n + " " + JSON.stringify(j));
    out.push({
      number: n,
      name: j.data.name,
      ayahCount: j.data.numberOfAyahs,
      ayahs: j.data.ayahs.map((a) => a.text),
    });
    process.stdout.write(n + " ");
    await new Promise((r) => setTimeout(r, 200));
  }
  const dest = path.join(__dirname, "quran-extra-50.js");
  const header =
    "// 50 سورة (أرقام 3–52) — النص العثماني: api.alquran.cloud (quran-uthmani)\n";
  fs.writeFileSync(dest, header + "window.QURAN_EXTRA_SURAHS=" + JSON.stringify(out) + ";", "utf8");
  console.log("\nكتب:", dest, fs.statSync(dest).size, "bytes");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
