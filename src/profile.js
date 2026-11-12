// ============================================================
//  ✏️  ここを編集してください — このファイルだけでOKです
// ============================================================

const profile = {

  // --- 基本情報 ---
  name: "Kazuma Moriuchi",           // 表示名（ナビ・フッターに使用）
  nameJa: "守内 一馬",                // 日本語名（任意、空文字でも可）
  role: "Full-Stack Engineer",       // 肩書き（ヒーロー見出しに使用）
  title: "株式会社シューヴェル 取締役副社長 兼 CTO",
  location: "Osaka, Japan（リモート可）",

  // --- ヒーローセクション ---
  heroSubtitle: "設計から運用まで。",
  heroBio:
    "元 AWS クラウドサポートエンジニア／元 LINEヤフー セキュリティエンジニア。現在はスタートアップの CTO として、プロダクトを企画・設計・開発・運用まで一人で担っています。",
  heroTags: [
    "AWS Certified SA Professional",
    "Serverless",
    "IaC (AWS CDK)",
    "OIDC / 認証認可",
    "TypeScript / Next.js",
  ],

  // --- About セクション ---
  about: [
    "大阪を拠点に活動するフルスタックエンジニアです。大学院で超伝導量子コンピュータの研究に取り組んだあと、LINEヤフー株式会社でセキュリティエンジニアとして、認証・認可システムの開発に従事しました。",
    "その後、アマゾンウェブサービスジャパン合同会社でクラウドサポートエンジニアとして、サーバーレスサービスを中心に、さまざまな企業の技術的な課題解決や最適なシステム構成の提案を行いました。",
    "2026年9月からは株式会社シューヴェルの取締役副社長兼 CTO として、競走馬売買プラットフォーム「ウマトイ」の技術選定、アーキテクチャ設計、実装、IaC、セキュリティ対策、運用まで一貫して担当しています。",
  ],
  interests: "AWS, サーバーレス, 生成 AI 活用, 量子コンピュータ",

  // --- 副業で対応できること ---
  services: [
    {
      title: "AWS インフラ設計・構築・改善",
      desc: "AWS 構成の設計・構築、AWS CDK による IaC 化、既存環境のコスト・セキュリティ・運用面の見直し。",
    },
    {
      title: "バックエンド／API 開発",
      desc: "TypeScript（Next.js Route Handlers / Lambda）、Go、Python による API・バッチ・非同期処理の開発。",
    },
    {
      title: "認証認可・セキュリティ",
      desc: "OpenID Connect / OAuth 2.0、Amazon Cognito を使った認証基盤の設計・実装、AWS 環境のセキュリティ対策。",
    },
    {
      title: "技術顧問・CTO 支援",
      desc: "技術選定、アーキテクチャレビュー、AWS 障害の調査・切り分け、生成 AI（Amazon Bedrock）を使った機能の企画・導入支援。",
    },
    {
      title: "Web サイト制作",
      desc: "コーポレートサイトやサービスサイトの制作。Next.js / React での実装から、AWS Amplify などへのデプロイ、公開後の運用までまとめて対応します。",
    },
  ],

  // --- 実績・制作物 ---
  works: [
    {
      name: "ウマトイ",
      kind: "Web サービス ／ 株式会社シューヴェル",
      period: "2026/9 - 現在",
      url: "https://umatoi.com",
      desc: "競走馬を探す人と、馬を託したい人をつなぐ売買プラットフォーム。CTO として企画段階から参画し、技術選定・アーキテクチャ設計・実装・IaC・セキュリティ対策・運用までを担当。利用者が少ない立ち上げ期でも固定費がかからないよう、サーバーレスと従量課金を基本にした構成にしています。オークション、会員認証、入金期限の管理、書類 PDF の自動生成、生成 AI による紹介文作成などの機能を実装しました。",
      stack: [
        "TypeScript",
        "Next.js",
        "AWS Amplify",
        "Aurora Serverless v2",
        "Cognito",
        "Lambda",
        "EventBridge",
        "Amazon Bedrock",
        "AWS WAF",
        "AWS CDK",
        "Vitest / Playwright",
      ],
    },
    {
      name: "PhotoSort",
      kind: "iOS アプリ ／ 個人開発",
      period: "2026/4 - 現在",
      url: "https://apps.apple.com/jp/app/photosort/id6766166803",
      urlLabel: "App Store",
      desc: "ファイルアプリの画像を、ファイルアプリでの名前順を保ったまま写真アプリに保存する iOS／iPadOS アプリ。企画からデザイン、実装、アプリ内課金、App Store 審査対応、リリースまで一人で行い、App Store で配信中です。画像はすべて端末内で処理し、外部に送信しない設計にしています。",
      stack: ["Swift", "SwiftUI", "PhotoKit", "StoreKit 2"],
    },
  ],

  // --- スキル ---
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "Python", "Go", "Swift", "Java"],
    },
    {
      category: "Frameworks",
      items: ["Next.js", "React", "SwiftUI", "Tailwind CSS"],
    },
    {
      category: "AWS",
      items: [
        "Lambda / API Gateway",
        "Amplify / Cognito",
        "Aurora Serverless / S3",
        "EventBridge / SNS / SES",
        "Amazon Bedrock",
        "WAF / GuardDuty",
      ],
    },
    {
      category: "IaC / DevOps",
      items: ["AWS CDK", "Amplify Gen 2", "GitHub Actions", "Vitest / Playwright"],
    },
    {
      category: "Security",
      items: ["OpenID Connect / OAuth 2.0", "認証基盤の設計", "AWS セキュリティ対策"],
    },
    {
      category: "Domain",
      items: ["Serverless", "Generative AI", "Quantum Computing", "Machine Learning"],
    },
  ],

  // --- 資格・認定 ---
  certifications: [
    {
      category: "AWS",
      items: [
        "AWS Certified Solutions Architect - Professional",
        "AWS Certified Developer - Associate",
      ],
    },
  ],

  // --- 学歴・職歴 ---
  // type: "work" | "education" | "break"
  // 新しい順に並べてください
  history: [
    {
      year: "2026/9 - 現在",
      type: "work",
      title: "取締役副社長 兼 CTO",
      org: "株式会社シューヴェル",
      desc: "Web サイト・Web アプリ・スマホアプリの企画・開発・運用を行う会社の技術責任者。競走馬売買プラットフォーム「ウマトイ」の技術選定、AWS アーキテクチャ設計、開発、セキュリティ対策、運用までを統括しています。",
    },
    {
      year: "2026/6 - 2026/8",
      type: "break",
      title: "キャリアブレイク（個人開発・技術研鑽）",
      org: "",
      desc: "iOS アプリ「PhotoSort」の改善・運用を続けながら、Next.js や AWS、生成 AI など、フルスタック開発に必要な技術の研鑽に取り組みました。",
    },
    {
      year: "2024/3 - 2026/5",
      type: "work",
      title: "クラウドサポートエンジニア",
      org: "アマゾンウェブサービスジャパン合同会社",
      desc: "Lambda をはじめとするサーバーレスサービスを中心に、さまざまな企業からの技術的な問い合わせに対応。ログや再現検証から原因を切り分け、AWS のベストプラクティスに基づく解決策や構成改善を提案しました。",
    },
    {
      year: "2023/4 - 2024/2",
      type: "work",
      title: "セキュリティエンジニア",
      org: "LINEヤフー株式会社",
      desc: "認証認可システムの設計・開発を担当。ヤフー株式会社と LINE 株式会社の合併に伴うシステム刷新プロジェクトに参画し、OpenID Connect をベースとした認証基盤の構築に従事しました。",
    },
    {
      year: "2021/4 - 2023/3",
      type: "education",
      title: "修士課程修了",
      org: "大阪大学大学院 基礎工学研究科",
      desc: "研究テーマ：「クロスエントロピー最小化による超伝導量子ビット系の実効ハミルトニアン推定」。",
    },
  ],

  // --- 連絡先 ---
  // url を空文字 "" にすると非表示になります
  contactNote: "副業・業務委託のご相談は、メールまたは LinkedIn からお気軽にご連絡ください。",
  contact: [
    { platform: "Email",    value: "kzmruc.dev@gmail.com",           url: "mailto:kzmruc.dev@gmail.com" },
    { platform: "LinkedIn", value: "linkedin.com/in/kazumamoriuchi", url: "https://www.linkedin.com/in/kazumamoriuchi" },
  ],

};

export default profile;
