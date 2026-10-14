// 楽曲データ。Claudeに伝えた内容をここに反映していく。
// キーは曲名、値は { bpm, release: "YYYY-MM-DD", album, track: アルバム内の曲順, stem: STEMのURL }
// 空の項目は "" にしておく。リリース日の新しい順、同じアルバムは曲順で並ぶ。
const songMeta = {
  "HAMETSUのねがい": { bpm: 160, release: "", album: "CULTURE DRUG ORCHESTRA", track: 2, stem: "https://drive.google.com/drive/folders/1890VeopbI8u1TYu29hkodeSlchI_ZzN-?usp=sharing" },
};
