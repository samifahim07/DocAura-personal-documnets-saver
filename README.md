# DocAura

### Your Documents. Your Privacy.

**DocAura** is an offline-first personal document management application designed to help users organize, manage, and access their important documents through a clean, simple, and user-friendly interface.

Built with modern web technologies and integrated with Android using Capacitor, DocAura aims to make personal document management convenient and accessible.

---

## Features

- **Document Management** — Upload, view, search, organize, and delete documents.
- **Category-Based Organization** — Keep documents organized by category.
- **PIN-Based Access** — Control access to the document library with a personal PIN.
- **Profile Management** — Customize your profile with a name, phone number, and profile photo.
- **Dark & Light Themes** — Switch between two visual themes.
- **Bilingual Interface** — English and Bangla language support.
- **Document Preview** — Preview supported images and PDF documents.
- **Offline-First Experience** — Core application features work locally without requiring a backend server.
- **Android Application** — Package the application as an Android APK using Capacitor.

## Screenshots

<!-- Add application screenshots here -->

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application functionality |
| Vite | Development and production build |
| Capacitor | Android integration |
| IndexedDB | Local document storage |
| LocalStorage | Profile and application preferences |

## Project Structure

```text
DocAura/
├── android/                 # Android native project
├── public/                  # Static assets
├── src/
│   ├── main.js              # Main application logic
│   └── style.css            # Application styling
├── index.html
├── capacitor.config.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 22+
- npm
- Android Studio and Android SDK (for Android builds)

### 1. Clone the Repository

```bash
git clone https://github.com/samifahim07/DocAura.git
cd DocAura
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Sync Android Project

```bash
npx cap sync android
```

### 6. Open Android Studio

```bash
npx cap open android
```

In Android Studio, select:

**Build → Build Bundle(s) / APK(s) → Build APK(s)**

The debug APK is generally generated at:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Privacy & Security

DocAura follows an offline-first approach, keeping application data on the local device.

**Current implementation limitations:**

- The PIN mechanism provides an application access gate, not cryptographic document protection.
- IndexedDB and LocalStorage are not encrypted by default.
- Native Android biometric authentication is not yet implemented.
- Secure encrypted document storage requires additional native security integration.

Do not use the current prototype as an encrypted vault for highly sensitive documents.

## Developer

**Fahim Sami**

Computer Science & Engineering  
East West University

- GitHub: [@samifahim07](https://github.com/samifahim07)

## Project Vision

The goal of DocAura is to create a simple, accessible, and privacy-focused personal document management experience with offline functionality and native Android capabilities.

## License

All rights reserved. No open-source license has been specified for this project.

