# Portfolio | Dev Backend

Personal portfolio as a **terminal** and **macOS-style (Finder)** interface. Constantly updated as new projects and experience are added.

---

## Table of contents

- [English](#english) *(primary)*
- [Português (Brasil)](#português-brasil)
- [中文](#中文)
- [한국어](#한국어)
- [日本語](#日本語)
- [Deutsch](#deutsch)
- [Español](#español)

---

## English

**Live link:** *(fill in when published — e.g. https://your-portfolio.vercel.app)*

### Screenshots

| Terminal | Finder (GUI) |
|----------|--------------|
| ![Terminal](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| Dark mode | Settings |
|-----------|----------|
| ![Dark mode](docs/screenshots/03-dark-mode.png) | ![Settings](docs/screenshots/04-settings.png) |

### Supported languages

The app is available in 7 languages (change via `lang` command in the terminal or the settings icon in the GUI):

| Code | Language |
|------|----------|
| pt-BR | Português (Brasil) |
| en | English |
| zh | 中文 (Chinese) |
| ko | 한국어 (Korean) |
| ja | 日本語 (Japanese) |
| de | Deutsch (German) |
| es | Español (Spanish) |

### About the project

This repository is a **personal portfolio** showing experience, skills, projects, and contact info. It is **constantly updated**: as you build new projects and gain new experience, content here will be updated accordingly.

**Features:**

- **Terminal mode:** navigate with commands (`ls`, `cd`, `cat`, `open`, `help`, `lang`, `theme`, `gui`, etc.) through sections (about, career, skills, projects, contact).
- **Finder mode (GUI):** macOS-inspired interface with a sidebar and main content panel.
- **Switch:** change between terminal and GUI via the `gui` command or the dock icons.
- **Internationalization:** 7 languages (pt-BR, en, zh, ko, ja, de, es), changeable in settings or with the `lang` command.
- **Light/dark theme:** toggle in settings (gear icon in the GUI header).

### Stack

- **[Next.js](https://nextjs.org)** 16 (App Router)
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **Fonts:** [Geist](https://vercel.com/font) (sans and mono)

No UI or global state libraries: context for mode (terminal/GUI), locale, and theme; styles with Tailwind and custom CSS.

### How to run

**Requirements:** Node.js 18+ and npm (or yarn/pnpm).

1. Clone the repo and go to the project folder:

```bash
git clone <repository-url>
cd portifolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Other commands:**

- `npm run build` — production build
- `npm run start` — production server (after `npm run build`)
- `npm run lint` — ESLint

---

## Português (Brasil)

**Link de acesso:** *(preencher quando publicado — ex.: https://seu-portfolio.vercel.app)*

### Screenshots

| Terminal | Finder (GUI) |
|----------|--------------|
| ![Terminal](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| Modo escuro | Configurações |
|-------------|---------------|
| ![Modo escuro](docs/screenshots/03-dark-mode.png) | ![Configurações](docs/screenshots/04-settings.png) |

### Idiomas suportados

A aplicação está disponível em 7 idiomas (altere pelo comando `lang` no terminal ou pelo ícone de configurações na GUI):

| Código | Idioma |
|--------|--------|
| pt-BR | Português (Brasil) |
| en | English |
| zh | 中文 (Chinês) |
| ko | 한국어 (Coreano) |
| ja | 日本語 (Japonês) |
| de | Deutsch (Alemão) |
| es | Español (Espanhol) |

### Sobre o projeto

Este repositório é um **portfólio pessoal** que apresenta experiência, habilidades, projetos e contato. Está em **constante atualização**: conforme novos projetos e experiências forem criados, o conteúdo será atualizado aqui.

**Diferenciais:**

- **Modo Terminal:** navegação por comandos (`ls`, `cd`, `cat`, `open`, `help`, `lang`, `theme`, `gui`, etc.) pelas seções (about, career, skills, projects, contact).
- **Modo Finder (GUI):** interface inspirada no macOS, com sidebar e painel de conteúdo.
- **Alternância:** troca entre terminal e GUI pelo comando `gui` ou pelos ícones do dock.
- **Internacionalização:** 7 idiomas (pt-BR, en, zh, ko, ja, de, es), alterável nas configurações ou pelo comando `lang`.
- **Tema claro/escuro:** toggle nas configurações (ícone de engrenagem no header da GUI).

### Stack

- **[Next.js](https://nextjs.org)** 16 (App Router)
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **Fontes:** [Geist](https://vercel.com/font) (sans e mono)

Sem bibliotecas de UI ou estado global: contexto para modo (terminal/GUI), idioma e tema; estilos com Tailwind e CSS customizado.

### Como rodar

**Requisitos:** Node.js 18+ e npm (ou yarn/pnpm).

1. Clone o repositório e entre na pasta do projeto:

```bash
git clone <url-do-repositorio>
cd portifolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

**Outros comandos:**

- `npm run build` — build de produção
- `npm run start` — servidor de produção (após `npm run build`)
- `npm run lint` — ESLint

---

## 中文

**访问链接：** *(发布后填写 — 例如 https://your-portfolio.vercel.app)*

### 截图

| 终端 | Finder (GUI) |
|------|--------------|
| ![终端](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| 深色模式 | 设置 |
|----------|------|
| ![深色模式](docs/screenshots/03-dark-mode.png) | ![设置](docs/screenshots/04-settings.png) |

### 支持的语言

应用支持 7 种语言（在终端用 `lang` 命令或 GUI 设置图标中切换）：

| 代码 | 语言 |
|------|------|
| pt-BR | 葡萄牙语（巴西） |
| en | 英语 |
| zh | 中文 |
| ko | 韩语 |
| ja | 日语 |
| de | 德语 |
| es | 西班牙语 |

### 关于项目

本仓库为**个人作品集**，展示经历、技能、项目与联系方式。**持续更新**：随着新项目与新经历的增加，内容会同步更新。

**特点：**

- **终端模式：** 通过命令（`ls`、`cd`、`cat`、`open`、`help`、`lang`、`theme`、`gui` 等）在 about、career、skills、projects、contact 等板块间导航。
- **Finder 模式（GUI）：** 类 macOS 界面，侧边栏与主内容区。
- **切换：** 在终端输入 `gui` 或点击 dock 图标在终端与 GUI 间切换。
- **多语言：** 7 种语言（pt-BR、en、zh、ko、ja、de、es），在设置或通过 `lang` 命令切换。
- **浅色/深色主题：** 在设置中切换（GUI 标题栏齿轮图标）。

### 技术栈

- **[Next.js](https://nextjs.org)** 16（App Router）
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **字体：** [Geist](https://vercel.com/font)（sans 与 mono）

未使用 UI 或全局状态库：通过 context 管理模式（终端/GUI）、语言与主题；样式为 Tailwind 与自定义 CSS。

### 如何运行

**环境要求：** Node.js 18+ 与 npm（或 yarn/pnpm）。

1. 克隆仓库并进入项目目录：

```bash
git clone <仓库地址>
cd portifolio
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

**其他命令：**

- `npm run build` — 生产构建
- `npm run start` — 生产服务器（需先执行 `npm run build`）
- `npm run lint` — ESLint

---

## 한국어

**접속 링크:** *(배포 후 입력 — 예: https://your-portfolio.vercel.app)*

### 스크린샷

| 터미널 | Finder (GUI) |
|--------|--------------|
| ![터미널](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| 다크 모드 | 설정 |
|-----------|------|
| ![다크 모드](docs/screenshots/03-dark-mode.png) | ![설정](docs/screenshots/04-settings.png) |

### 지원 언어

앱은 7개 언어를 지원합니다(터미널에서 `lang` 명령 또는 GUI 설정 아이콘으로 변경).

| 코드 | 언어 |
|------|------|
| pt-BR | 포르투갈어(브라질) |
| en | 영어 |
| zh | 중국어 |
| ko | 한국어 |
| ja | 일본어 |
| de | 독일어 |
| es | 스페인어 |

### 프로젝트 소개

이 저장소는 **개인 포트폴리오**로, 경력, 스킬, 프로젝트, 연락처를 보여 줍니다. **지속적으로 업데이트**되며, 새 프로젝트와 경험이 생길 때마다 내용이 반영됩니다.

**기능:**

- **터미널 모드:** `ls`, `cd`, `cat`, `open`, `help`, `lang`, `theme`, `gui` 등 명령으로 about, career, skills, projects, contact 섹션 탐색.
- **Finder 모드(GUI):** macOS 스타일 인터페이스, 사이드바와 메인 콘텐츠 패널.
- **전환:** 터미널에서 `gui` 명령 또는 독 아이콘으로 터미널/GUI 전환.
- **다국어:** 7개 언어(pt-BR, en, zh, ko, ja, de, es), 설정 또는 `lang` 명령으로 변경.
- **라이트/다크 테마:** 설정에서 전환(GUI 헤더 톱니 아이콘).

### 스택

- **[Next.js](https://nextjs.org)** 16 (App Router)
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **폰트:** [Geist](https://vercel.com/font) (sans, mono)

UI/전역 상태 라이브러리 없음: 모드(터미널/GUI), 언어, 테마는 context로 관리; Tailwind와 커스텀 CSS로 스타일링.

### 실행 방법

**요구 사항:** Node.js 18+ 및 npm(또는 yarn/pnpm).

1. 저장소 클론 및 프로젝트 폴더로 이동:

```bash
git clone <저장소-주소>
cd portifolio
```

2. 의존성 설치:

```bash
npm install
```

3. 개발 서버 실행:

```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

**기타 명령:**

- `npm run build` — 프로덕션 빌드
- `npm run start` — 프로덕션 서버(`npm run build` 후)
- `npm run lint` — ESLint

---

## 日本語

**アクセスリンク:** *(公開時に記入 — 例: https://your-portfolio.vercel.app)*

### スクリーンショット

| ターミナル | Finder (GUI) |
|------------|--------------|
| ![ターミナル](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| ダークモード | 設定 |
|--------------|------|
| ![ダークモード](docs/screenshots/03-dark-mode.png) | ![設定](docs/screenshots/04-settings.png) |

### 対応言語

アプリは7言語に対応（ターミナルの `lang` コマンドまたはGUIの設定アイコンで変更）。

| コード | 言語 |
|--------|------|
| pt-BR | ポルトガル語（ブラジル） |
| en | 英語 |
| zh | 中国語 |
| ko | 韓国語 |
| ja | 日本語 |
| de | ドイツ語 |
| es | スペイン語 |

### プロジェクトについて

このリポジトリは**個人ポートフォリオ**で、経歴・スキル・プロジェクト・連絡先を掲載しています。**随時更新**され、新しいプロジェクトや経験に合わせて内容が更新されます。

**機能：**

- **ターミナルモード：** `ls`、`cd`、`cat`、`open`、`help`、`lang`、`theme`、`gui` などのコマンドで about、career、skills、projects、contact を操作。
- **Finderモード（GUI）：** macOS風インターフェース、サイドバーとメインコンテンツパネル。
- **切替：** ターミナルで `gui` コマンドまたはドックアイコンでターミナル/GUIを切替。
- **多言語：** 7言語（pt-BR、en、zh、ko、ja、de、es）、設定または `lang` コマンドで変更。
- **ライト/ダークテーマ：** 設定で切替（GUIヘッダーの歯車アイコン）。

### スタック

- **[Next.js](https://nextjs.org)** 16（App Router）
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **フォント：** [Geist](https://vercel.com/font)（sans、mono）

UI・グローバル状態ライブラリは未使用。モード（ターミナル/GUI）、言語、テーマはcontextで管理。スタイルはTailwindとカスタムCSS。

### 実行方法

**必要環境：** Node.js 18+ と npm（または yarn/pnpm）。

1. リポジトリをクローンし、プロジェクトフォルダへ移動：

```bash
git clone <リポジトリURL>
cd portifolio
```

2. 依存関係をインストール：

```bash
npm install
```

3. 開発サーバーを起動：

```bash
npm run dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

**その他のコマンド：**

- `npm run build` — 本番ビルド
- `npm run start` — 本番サーバー（`npm run build` の後）
- `npm run lint` — ESLint

---

## Deutsch

**Zugriffslink:** *(nach Veröffentlichung ausfüllen — z. B. https://your-portfolio.vercel.app)*

### Screenshots

| Terminal | Finder (GUI) |
|----------|--------------|
| ![Terminal](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| Dunkelmodus | Einstellungen |
|-------------|---------------|
| ![Dunkelmodus](docs/screenshots/03-dark-mode.png) | ![Einstellungen](docs/screenshots/04-settings.png) |

### Unterstützte Sprachen

Die App ist in 7 Sprachen verfügbar (über Befehl `lang` im Terminal oder über das Einstellungs-Icon in der GUI änderbar):

| Code | Sprache |
|------|---------|
| pt-BR | Portugiesisch (Brasilien) |
| en | Englisch |
| zh | Chinesisch |
| ko | Koreanisch |
| ja | Japanisch |
| de | Deutsch |
| es | Spanisch |

### Über das Projekt

Dieses Repository ist ein **persönliches Portfolio** mit Erfahrung, Fähigkeiten, Projekten und Kontaktmöglichkeiten. Es wird **laufend aktualisiert**: Mit neuen Projekten und Erfahrungen wird der Inhalt hier ergänzt.

**Funktionen:**

- **Terminalmodus:** Navigation per Befehlen (`ls`, `cd`, `cat`, `open`, `help`, `lang`, `theme`, `gui` usw.) durch die Bereiche about, career, skills, projects, contact.
- **Finder-Modus (GUI):** macOS-inspirierte Oberfläche mit Sidebar und Hauptinhalt.
- **Wechsel:** Zwischen Terminal und GUI per Befehl `gui` oder über die Dock-Icons.
- **Mehrsprachigkeit:** 7 Sprachen (pt-BR, en, zh, ko, ja, de, es), in den Einstellungen oder per `lang` änderbar.
- **Hell/Dunkel-Theme:** Umschalter in den Einstellungen (Zahnrad-Icon in der GUI-Headerleiste).

### Stack

- **[Next.js](https://nextjs.org)** 16 (App Router)
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **Schriften:** [Geist](https://vercel.com/font) (sans und mono)

Keine UI- oder globalen State-Bibliotheken: Context für Modus (Terminal/GUI), Sprache und Theme; Styling mit Tailwind und eigenem CSS.

### Lokal starten

**Voraussetzungen:** Node.js 18+ und npm (oder yarn/pnpm).

1. Repository klonen und in den Projektordner wechseln:

```bash
git clone <Repository-URL>
cd portifolio
```

2. Abhängigkeiten installieren:

```bash
npm install
```

3. Entwicklungsserver starten:

```bash
npm run dev
```

4. Im Browser [http://localhost:3000](http://localhost:3000) öffnen.

**Weitere Befehle:**

- `npm run build` — Produktions-Build
- `npm run start` — Produktions-Server (nach `npm run build`)
- `npm run lint` — ESLint

---

## Español

**Enlace de acceso:** *(completar al publicar — ej. https://your-portfolio.vercel.app)*

### Capturas de pantalla

| Terminal | Finder (GUI) |
|----------|--------------|
| ![Terminal](docs/screenshots/01-terminal.png) | ![Finder](docs/screenshots/02-finder.png) |

| Modo oscuro | Ajustes |
|-------------|---------|
| ![Modo oscuro](docs/screenshots/03-dark-mode.png) | ![Ajustes](docs/screenshots/04-settings.png) |

### Idiomas soportados

La aplicación está disponible en 7 idiomas (cambiar con el comando `lang` en la terminal o el icono de ajustes en la GUI):

| Código | Idioma |
|--------|--------|
| pt-BR | Português (Brasil) |
| en | English |
| zh | 中文 (Chino) |
| ko | 한국어 (Coreano) |
| ja | 日本語 (Japonés) |
| de | Deutsch (Alemán) |
| es | Español |

### Sobre el proyecto

Este repositorio es un **portafolio personal** que muestra experiencia, habilidades, proyectos y contacto. Se **actualiza constantemente**: a medida que crees nuevos proyectos y experiencias, el contenido se irá actualizando aquí.

**Características:**

- **Modo terminal:** navegación por comandos (`ls`, `cd`, `cat`, `open`, `help`, `lang`, `theme`, `gui`, etc.) por las secciones about, career, skills, projects, contact.
- **Modo Finder (GUI):** interfaz inspirada en macOS, con barra lateral y panel de contenido.
- **Cambio:** alternar entre terminal y GUI con el comando `gui` o los iconos del dock.
- **Internacionalización:** 7 idiomas (pt-BR, en, zh, ko, ja, de, es), cambiables en ajustes o con el comando `lang`.
- **Tema claro/oscuro:** interruptor en ajustes (icono de engranaje en la cabecera de la GUI).

### Stack

- **[Next.js](https://nextjs.org)** 16 (App Router)
- **[React](https://react.dev)** 19
- **[TypeScript](https://www.typescriptlang.org)** 5
- **[Tailwind CSS](https://tailwindcss.com)** 4
- **Fuentes:** [Geist](https://vercel.com/font) (sans y mono)

Sin bibliotecas de UI ni estado global: contexto para modo (terminal/GUI), idioma y tema; estilos con Tailwind y CSS personalizado.

### Cómo ejecutar

**Requisitos:** Node.js 18+ y npm (o yarn/pnpm).

1. Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <url-del-repositorio>
cd portifolio
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en el navegador.

**Otros comandos:**

- `npm run build` — build de producción
- `npm run start` — servidor de producción (tras `npm run build`)
- `npm run lint` — ESLint

---

## License

Personal use / portfolio. See repository for details.
