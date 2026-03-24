// ============================================================
//  ✏️  ここを編集してください — このファイルだけでOKです
// ============================================================

const profile = {

  // --- 基本情報 ---
  name: "Kazuma Moriuchi",           // 表示名（ナビ・フッターに使用）
  nameJa: "守内 一馬",       // 日本語名（任意、空文字でも可）
  role: "Cloud Engineer", // 肩書き（ヒーロー見出しに使用）
  location: "Osaka, Japan",

  // --- ヒーローセクション ---
  // role の後ろに表示されるキャッチコピー（改行は \n で）
  heroSubtitle: "based in Osaka.",
  heroBio: "クラウドエンジニアとして活動しています。",

  // --- About セクション ---
  about: [
    "大阪を拠点に活動するクラウドエンジニアです。大阪大学大学院で超伝導量子コンピュータ実機の研究に従事し、現在はアマゾンウェブサービスジャパン合同会社にてクラウドサポートエンジニアのお仕事をしております。",
  ],
  interests: "AWS, 量子コンピュータ",  // About の Interests 欄

  // --- スキル ---
  // { category, items: [] } の形で何行でも追加できます
  skills: [
    {
      category: "Languages",
      items: ["Python", "Go","TypeScript", "Java"],
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js"],
    },
    {
      category: "Domain",
      items: ["Serverless", "Quantum Computing", "Machine Learning"],
    },
  ],

  // --- 資格・認定 ---
  certifications: [
    {
      category: "AWS",
      items: ["AWS Certified Solutions Architect - Professional", "AWS Certified Developer Engineer - Associate"],
    },
    {
      category: "その他",
      items:[]
    }
  ],

  // --- 学歴・職歴 ---
  // type: "work" | "education"
  // 新しい順に並べてください
  history: [
    {
      year: "2024/3 - 現在",
      type: "work",
      title: "クラウドサポートエンジニア",
      org: "アマゾンウェブサービスジャパン合同会社",
      desc: "AWS のサポートエンジニアとして、主にサーバレスサービスに関する技術的な問い合わせ対応を担当。お客様の課題解決に向けて、AWS のベストプラクティスに基づいた提案やトラブルシューティングを行っています。",
    },
    {
      year: "2023/4 - 2024/2",
      type: "work",
      title: "セキュリティエンジニア",
      org: "LINEヤフー株式会社",
      desc: "認証認可システムの設計・開発を担当。ヤフー株式会社と LINE 株式会社の合併時のシステム刷新プロジェクトに参画し、OpenID Connect をベースとした認証基盤の構築に従事。",
    },
    {
      year: "2021/4 - 2023/3",
      type: "education",
      title: "修士課程修了",
      org: "大阪大学大学院 基礎工学研究科",
      desc: "研究テーマ：「クロスエントロピー最小化による超伝導量子ビット系の実効ハミルトニアン推定」に関する研究。",
    }
  ],

  // --- 連絡先 ---
  // url を空文字 "" にすると非表示になります
  contact: [
    { platform: "Email",      value: "kzmruc.dev@gmail.com",          url: "mailto:yourname@email.com" },
    // { platform: "GitHub",     value: "github.com/kzmurc-dev",         url: "https://github.com/yourname" },
    { platform: "LinkedIn",   value: "linkedin.com/in/kazumamoriuchi",    url: "https://linkedin.com/in/yourname" },
  ],

};

export default profile;
