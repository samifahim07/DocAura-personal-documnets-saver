
import "./style.css";

/* =========================================================
   DOCAURA
   Your Documents. Your Privacy.
   ========================================================= */

const APP_NAME = "DocAura";
const DB_NAME = "DocAuraDB";
const DB_VERSION = 1;
const STORE_NAME = "documents";

const KEYS = {
  profile: "docAuraProfile",
  pin: "docAuraPin",
  theme: "docAuraTheme",
  language: "docAuraLanguage",
  authenticated: "docAuraAuthenticated",
};

const state = {
  page: "home",
  documents: [],
  profile: {
    name: "",
    phone: "",
    photo: "",
  },
  theme: localStorage.getItem(KEYS.theme) || "light",
  language: localStorage.getItem(KEYS.language) || "en",
  search: "",
  selectedCategory: "All",
  selectedDocument: null,
  showSettings: false,
  showProfileEditor: false,
  showPinSetup: false,
  showUnlock: false,
  pinError: "",
  toast: "",
};

const app = document.querySelector("#app");

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  en: {
    tagline: "Your Documents. Your Privacy.",
    greeting: "Welcome to DocAura",
    subtitle: "Your personal document space, organized and accessible.",
    homeNav: "Home",
    documentsNav: "Documents",
    aboutDeveloper: "About Developer",
    viewDocuments: "View Documents",
    addDocument: "Add Document",
    myDocuments: "My Documents",
    categories: "Categories",
    recentDocuments: "Recent Documents",
    search: "Search your documents...",
    all: "All",
    identity: "Identity",
    education: "Education",
    finance: "Finance",
    personal: "Personal",
    other: "Other",
    noDocuments: "No documents yet",
    noDocumentsDescription: "Start building your private document collection.",
    uploadFirst: "Upload Your First Document",
    profile: "My Profile",
    editProfile: "Edit Profile",
    fullName: "Full Name",
    phoneNumber: "Mobile Number",
    profilePhoto: "Profile Photo",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    removePhoto: "Remove Photo",
    settings: "Settings",
    appearance: "Appearance",
    language: "Language",
    light: "Light",
    dark: "Dark",
    english: "English",
    bangla: "Bangla",
    security: "Security",
    setupPin: "Set Up PIN",
    changePin: "Change PIN",
    enterPin: "Enter Your PIN",
    confirmPin: "Confirm PIN",
    unlockTitle: "Your Documents Are Locked",
    unlockDescription: "Enter your PIN to access your private documents.",
    unlock: "Unlock Documents",
    fingerprint: "Fingerprint Authentication",
    fingerprintInfo: "Native Android biometric authentication will be added during APK integration.",
    pinRequired: "Please enter a PIN.",
    pinMismatch: "PINs do not match.",
    pinLength: "PIN must contain at least 4 digits.",
    wrongPin: "Incorrect PIN. Please try again.",
    pinSaved: "PIN saved successfully.",
    profileSaved: "Profile updated successfully.",
    documentAdded: "Document added successfully.",
    documentDeleted: "Document deleted.",
    selectFile: "Select a document",
    documentName: "Document Name",
    category: "Category",
    description: "Description",
    upload: "Upload Document",
    preview: "Preview",
    download: "Download",
    delete: "Delete",
    close: "Close",
    fileType: "File type",
    fileSize: "File size",
    dateAdded: "Date added",
    noResults: "No matching documents found.",
    confirmDelete: "Are you sure you want to delete this document?",
    logout: "Lock Documents",
    privacyNotice: "Your documents are stored locally in this browser.",
    footer: "Made with care. Your privacy matters.",
    documents: "Documents",
    stored: "Stored locally",
    welcomeName: "Hello",
    edit: "Edit",
    back: "Back",
    biometricUnavailable: "Fingerprint authentication requires the native Android app.",
    pinNotSet: "Please set up a PIN before locking your documents.",
    fileTooLarge: "This file is too large for browser storage.",
    fileReadError: "Could not read this file.",
    pleaseSelectImage: "Please select an image file.",
    imageTooLarge: "Please select an image smaller than 2 MB.",
    academicInfo: "Academic Information",
    university: "University",
    department: "Department",
    profession: "Profession",
    studentDeveloper: "Student & Developer",
    technicalInterests: "Technical Interests",
    projects: "Projects",
    developerBio: "Developer Bio",
    visitGithub: "Visit GitHub",
    aboutDescription: "Get to know the developer behind DocAura.",
    cse: "Computer Science & Engineering",
    projectDescription: "A project from my development journey.",
    bioOne: "I'm Fahim Sami, a Computer Science and Engineering undergraduate at East West University with a strong interest in Machine Learning, Artificial Intelligence, and software development.",
    bioTwo: "I enjoy building practical technology solutions, exploring intelligent systems, and turning ideas into functional applications.",
    bioThree: "My areas of interest include Machine Learning, Deep Learning, AI Automation, Agentic AI, LLMs, and modern application development.",
    bioFour: "Currently building DocAura — a personal, offline-first document management application focused on simplicity, privacy, and accessibility.",
    profileNotAdded: "Not added",
    noMobileNumber: "No mobile number added",
    chooseTheme: "Choose your preferred theme.",
    chooseLanguage: "Choose your preferred language.",
    managePin: "Manage your document PIN.",
    lockLibrary: "Lock your document library.",
    previewUnavailable: "Preview is not available for this file type.",
    couldNotDelete: "Could not delete document.",
    couldNotSavePin: "Could not save PIN.",
    couldNotVerifyPin: "Could not verify PIN.",
    unableToStart: "Unable to start DocAura",
    refreshTryAgain: "Please refresh the application and try again.",
  },

  bn: {
    tagline: "আপনার ডকুমেন্ট। আপনার গোপনীয়তা।",
    greeting: "DocAura-তে স্বাগতম",
    subtitle: "আপনার ব্যক্তিগত ডকুমেন্টগুলো গুছিয়ে রাখুন।",
    homeNav: "হোম",
    documentsNav: "ডকুমেন্ট",
    aboutDeveloper: "ডেভেলপার পরিচিতি",
    viewDocuments: "ডকুমেন্ট দেখুন",
    addDocument: "ডকুমেন্ট যোগ করুন",
    myDocuments: "আমার ডকুমেন্ট",
    categories: "ক্যাটাগরি",
    recentDocuments: "সাম্প্রতিক ডকুমেন্ট",
    search: "ডকুমেন্ট খুঁজুন...",
    all: "সব",
    identity: "পরিচয়পত্র",
    education: "শিক্ষা",
    finance: "আর্থিক",
    personal: "ব্যক্তিগত",
    other: "অন্যান্য",
    noDocuments: "এখনো কোনো ডকুমেন্ট নেই",
    noDocumentsDescription: "আপনার ব্যক্তিগত ডকুমেন্ট সংগ্রহ তৈরি শুরু করুন।",
    uploadFirst: "প্রথম ডকুমেন্ট আপলোড করুন",
    profile: "আমার প্রোফাইল",
    editProfile: "প্রোফাইল সম্পাদনা",
    fullName: "সম্পূর্ণ নাম",
    phoneNumber: "মোবাইল নম্বর",
    profilePhoto: "প্রোফাইল ছবি",
    saveChanges: "পরিবর্তন সংরক্ষণ",
    cancel: "বাতিল",
    removePhoto: "ছবি সরান",
    settings: "সেটিংস",
    appearance: "থিম",
    language: "ভাষা",
    light: "লাইট",
    dark: "ডার্ক",
    english: "ইংরেজি",
    bangla: "বাংলা",
    security: "নিরাপত্তা",
    setupPin: "PIN সেট করুন",
    changePin: "PIN পরিবর্তন",
    enterPin: "আপনার PIN দিন",
    confirmPin: "PIN নিশ্চিত করুন",
    unlockTitle: "আপনার ডকুমেন্ট লক করা আছে",
    unlockDescription: "ডকুমেন্ট দেখতে আপনার PIN দিন।",
    unlock: "ডকুমেন্ট আনলক করুন",
    fingerprint: "ফিঙ্গারপ্রিন্ট",
    fingerprintInfo: "APK তৈরির সময় Android biometric authentication যুক্ত করা হবে।",
    pinRequired: "অনুগ্রহ করে PIN দিন।",
    pinMismatch: "দুটি PIN মেলেনি।",
    pinLength: "PIN কমপক্ষে ৪ সংখ্যার হতে হবে।",
    wrongPin: "ভুল PIN। আবার চেষ্টা করুন।",
    pinSaved: "PIN সংরক্ষণ করা হয়েছে।",
    profileSaved: "প্রোফাইল আপডেট হয়েছে।",
    documentAdded: "ডকুমেন্ট যোগ হয়েছে।",
    documentDeleted: "ডকুমেন্ট মুছে ফেলা হয়েছে।",
    selectFile: "ডকুমেন্ট নির্বাচন করুন",
    documentName: "ডকুমেন্টের নাম",
    category: "ক্যাটাগরি",
    description: "বিবরণ",
    upload: "ডকুমেন্ট আপলোড",
    preview: "দেখুন",
    download: "ডাউনলোড",
    delete: "মুছুন",
    close: "বন্ধ করুন",
    fileType: "ফাইলের ধরন",
    fileSize: "ফাইলের আকার",
    dateAdded: "যোগ করার তারিখ",
    noResults: "কোনো ডকুমেন্ট পাওয়া যায়নি।",
    confirmDelete: "আপনি কি নিশ্চিত যে ডকুমেন্টটি মুছতে চান?",
    logout: "ডকুমেন্ট লক করুন",
    privacyNotice: "আপনার ডকুমেন্ট এই ব্রাউজারেই সংরক্ষিত থাকে।",
    footer: "আপনার গোপনীয়তাই আমাদের অগ্রাধিকার।",
    documents: "ডকুমেন্ট",
    stored: "লোকাল স্টোরেজ",
    welcomeName: "স্বাগতম",
    edit: "সম্পাদনা",
    back: "ফিরে যান",
    biometricUnavailable: "ফিঙ্গারপ্রিন্ট ব্যবহারের জন্য নেটিভ Android অ্যাপ প্রয়োজন।",
    pinNotSet: "ডকুমেন্ট লক করার আগে PIN সেট করুন।",
    fileTooLarge: "এই ফাইলটি ব্রাউজার স্টোরেজের জন্য অনেক বড়।",
    fileReadError: "ফাইলটি পড়া যায়নি।",
    pleaseSelectImage: "অনুগ্রহ করে একটি ছবি নির্বাচন করুন।",
    imageTooLarge: "২ MB-এর কম আকারের ছবি নির্বাচন করুন।",
    academicInfo: "শিক্ষাগত তথ্য",
    university: "বিশ্ববিদ্যালয়",
    department: "বিভাগ",
    profession: "পরিচয়",
    studentDeveloper: "শিক্ষার্থী ও ডেভেলপার",
    technicalInterests: "প্রযুক্তিগত আগ্রহ",
    projects: "প্রজেক্টসমূহ",
    developerBio: "ডেভেলপার পরিচিতি",
    visitGithub: "GitHub প্রোফাইল দেখুন",
    aboutDescription: "DocAura-এর নির্মাতা সম্পর্কে জানুন।",
    cse: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
    projectDescription: "আমার ডেভেলপমেন্ট যাত্রার একটি প্রজেক্ট।",
    bioOne: "আমি Fahim Sami, East West University-এর Computer Science and Engineering বিভাগের একজন শিক্ষার্থী। Machine Learning, Artificial Intelligence এবং Software Development-এর প্রতি আমার গভীর আগ্রহ রয়েছে।",
    bioTwo: "আমি বাস্তব সমস্যার প্রযুক্তিগত সমাধান তৈরি করতে, intelligent systems নিয়ে কাজ করতে এবং নতুন ধারণাকে কার্যকর application-এ রূপ দিতে পছন্দ করি।",
    bioThree: "আমার আগ্রহের ক্ষেত্রগুলোর মধ্যে রয়েছে Machine Learning, Deep Learning, AI Automation, Agentic AI, LLMs এবং আধুনিক application development।",
    bioFour: "বর্তমানে DocAura তৈরি করছি — একটি personal, offline-first document management application, যার মূল লক্ষ্য simplicity, privacy এবং accessibility।",
    profileNotAdded: "যোগ করা হয়নি",
    noMobileNumber: "মোবাইল নম্বর যোগ করা হয়নি",
    chooseTheme: "আপনার পছন্দের থিম নির্বাচন করুন।",
    chooseLanguage: "আপনার পছন্দের ভাষা নির্বাচন করুন।",
    managePin: "ডকুমেন্ট PIN পরিচালনা করুন।",
    lockLibrary: "আপনার ডকুমেন্ট লাইব্রেরি লক করুন।",
    previewUnavailable: "এই ফাইলের preview পাওয়া যাচ্ছে না।",
    couldNotDelete: "ডকুমেন্ট মুছে ফেলা যায়নি।",
    couldNotSavePin: "PIN সংরক্ষণ করা যায়নি।",
    couldNotVerifyPin: "PIN যাচাই করা যায়নি।",
    unableToStart: "DocAura চালু করা যাচ্ছে না",
    refreshTryAgain: "পেজটি refresh করে আবার চেষ্টা করুন।",
  },
};

function t(key) {
  return translations[state.language]?.[key] || translations.en[key] || key;
}

/* =========================================================
   DEVELOPER DATA
========================================================= */

const developerProjects = [
  {
    name: "DocAura",
    icon: "📁",
    description: "Personal offline-first document management application.",
  },
  {
    name: "CROPVEYRA Intelligence",
    icon: "🌱",
    description: "Semi-supervised plant disease recognition system.",
  },
  {
    name: "ALTRORYA",
    icon: "📊",
    description: "AI-powered financial intelligence platform.",
  },
  {
    name: "AutoML Doctor",
    icon: "🤖",
    description: "Automated machine learning project.",
  },
  {
    name: "FitCoach AI",
    icon: "💪",
    description: "AI-powered fitness coaching application.",
  },
  {
    name: "Mental Health Predictor",
    icon: "🧠",
    description: "Machine learning-based prediction project.",
  },
  {
    name: "Zavra Recommendation API",
    icon: "✨",
    description: "Recommendation system API with multiple variants.",
  },
  {
    name: "Soil Grain Size Prediction",
    icon: "🔬",
    description: "Image-based soil grain size distribution prediction.",
  },
];

const developerInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Agentic AI",
  "Large Language Models (LLMs)",
  "AI Automation",
  "MLOps & Cloud",
];

/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });
}

function formatSize(bytes = 0) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString(
    state.language === "bn" ? "bn-BD" : "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
}

function getInitials(name) {
  if (!name) return "DA";

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getCategoryIcon(category) {
  const icons = {
    Identity: "🪪",
    Education: "🎓",
    Finance: "💳",
    Personal: "📁",
    Other: "📄",
  };

  return icons[category] || "📄";
}

function showToast(message) {
  state.toast = message;
  render();

  setTimeout(() => {
    state.toast = "";

    const toast = document.querySelector(".toast");
    if (toast) toast.remove();
  }, 2600);
}

/* =========================================================
   PROFILE STORAGE
========================================================= */

function loadProfile() {
  try {
    const saved = localStorage.getItem(KEYS.profile);

    if (saved) {
      state.profile = {
        ...state.profile,
        ...JSON.parse(saved),
      };
    }
  } catch (error) {
    console.error("Profile loading error:", error);
  }
}

function saveProfile() {
  localStorage.setItem(KEYS.profile, JSON.stringify(state.profile));
}

/* =========================================================
   INDEXED DB
========================================================= */

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, {
          keyPath: "id",
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllDocuments() {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result || []);
      database.close();
    };

    request.onerror = () => {
      reject(request.error);
      database.close();
    };
  });
}

async function saveDocument(documentData) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    store.put(documentData);

    transaction.oncomplete = () => {
      resolve(true);
      database.close();
    };

    transaction.onerror = () => {
      reject(transaction.error);
      database.close();
    };
  });
}

async function deleteDocument(id) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    store.delete(id);

    transaction.oncomplete = () => {
      resolve(true);
      database.close();
    };

    transaction.onerror = () => {
      reject(transaction.error);
      database.close();
    };
  });
}

async function refreshDocuments() {
  try {
    state.documents = await getAllDocuments();
  } catch (error) {
    console.error("Document loading error:", error);
    state.documents = [];
  }
}

/* =========================================================
   PIN SYSTEM
========================================================= */

async function hashPin(pin) {
  const data = new TextEncoder().encode(pin);
  const hash = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function savePin(pin) {
  const hashedPin = await hashPin(pin);

  localStorage.setItem(KEYS.pin, hashedPin);
  sessionStorage.setItem(KEYS.authenticated, "true");
}

async function verifyPin(pin) {
  const savedPin = localStorage.getItem(KEYS.pin);

  if (!savedPin) return false;

  const enteredHash = await hashPin(pin);
  return enteredHash === savedPin;
}

function isAuthenticated() {
  return sessionStorage.getItem(KEYS.authenticated) === "true";
}

function hasPin() {
  return Boolean(localStorage.getItem(KEYS.pin));
}

function lockDocuments() {
  sessionStorage.removeItem(KEYS.authenticated);
  state.page = "home";
  state.selectedDocument = null;
  state.showUnlock = false;
  render();
}

/* =========================================================
   ANIMATED BACKGROUND
========================================================= */

function createBackground() {
  const particles = Array.from({ length: 15 }, (_, index) => {
    const left = (index * 37) % 100;
    const delay = (index % 8) * -1.5;
    const duration = 9 + (index % 7);

    return `
      <span
        class="particle"
        style="
          left:${left}%;
          animation-delay:${delay}s;
          animation-duration:${duration}s;
        "
      ></span>
    `;
  }).join("");

  return `
    <div class="ambient-background">
      ${particles}
    </div>
  `;
}

/* =========================================================
   PROFILE AVATAR
========================================================= */

function profileAvatar(sizeClass = "") {
  if (state.profile.photo) {
    return `
      <img
        class="${sizeClass || "profile-avatar"}"
        src="${state.profile.photo}"
        alt="Profile photo"
      />
    `;
  }

  return `
    <div class="${sizeClass || "profile-avatar"}"
         style="
           display:grid;
           place-items:center;
           background:var(--primary);
           color:white;
           font-weight:800;
         ">
      ${escapeHTML(getInitials(state.profile.name))}
    </div>
  `;
}

/* =========================================================
   HEADER
========================================================= */

function renderHeader() {
  return `
    <header class="app-header">

      <div class="logo" data-action="home" style="cursor:pointer">
        <div class="logo-icon">D</div>
        <div>Doc<span>Aura</span></div>
      </div>

      <div class="header-actions">

        <button class="icon-button"
                data-action="settings"
                title="${t("settings")}">
          ⚙
        </button>

        <button class="profile-shortcut"
                data-action="profile">
          ${profileAvatar("profile-avatar")}
          <span>
            ${escapeHTML(state.profile.name || t("profile"))}
          </span>
        </button>

      </div>
    </header>
  `;
}

/* =========================================================
   MAIN NAVIGATION
========================================================= */

function renderNavigation() {
  const navItems = [
    { action: "home", label: t("homeNav"), icon: "⌂" },
    { action: "view-documents", label: t("documentsNav"), icon: "▤" },
    { action: "profile", label: t("profile"), icon: "👤" },
    { action: "about-developer", label: t("aboutDeveloper"), icon: "✦" },
  ];

  return `
    <nav class="app-navigation" aria-label="Main navigation">

      ${navItems.map((item) => {
        const active =
          (item.action === "home" && state.page === "home") ||
          (item.action === "profile" && state.page === "profile") ||
          (item.action === "about-developer" && state.page === "about") ||
          (item.action === "view-documents" &&
            ["library", "add"].includes(state.page));

        return `
          <button
            class="nav-item ${active ? "active" : ""}"
            data-action="${item.action}"
            ${active ? 'aria-current="page"' : ""}
          >
            <span class="nav-icon">${item.icon}</span>
            <span>${item.label}</span>
          </button>
        `;
      }).join("")}

    </nav>
  `;
}

/* =========================================================
   HOME PAGE
========================================================= */

function renderHome() {
  const recentDocuments = [...state.documents]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 3);

  return `
    <main class="main-content">

      <section class="hero">

        <h1>
          ${t("greeting")}${state.profile.name
            ? `, ${escapeHTML(state.profile.name.split(" ")[0])}`
            : ""}
        </h1>

        <p>${t("subtitle")}</p>

        <button class="btn"
                data-action="view-documents">
          ${t("viewDocuments")} →
        </button>

      </section>

      <section class="section">

        <div style="
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
          flex-wrap:wrap;
        ">
          <h2 class="section-title">${t("categories")}</h2>

          <span class="badge">
            ${state.documents.length} ${t("documents")}
          </span>
        </div>

        <div class="category-grid">

          ${[
            "Identity",
            "Education",
            "Finance",
            "Personal",
            "Other",
          ].map((category) => `
            <article class="category-card"
                     data-action="category"
                     data-category="${category}">

              <div class="category-icon">
                ${getCategoryIcon(category)}
              </div>

              <h3>${t(category.toLowerCase())}</h3>

              <p>
                ${state.documents.filter(
                  (doc) => doc.category === category
                ).length} ${t("documents")}
              </p>

            </article>
          `).join("")}

        </div>

      </section>

      <section class="section">

        <div style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
          margin-bottom:16px;
        ">
          <h2 class="section-title" style="margin:0">
            ${t("recentDocuments")}
          </h2>

          <button class="text-button"
                  data-action="view-documents">
            ${t("viewDocuments")} →
          </button>
        </div>

        ${
          recentDocuments.length
            ? `<div class="document-grid">
                ${recentDocuments.map(renderDocumentCard).join("")}
               </div>`
            : renderEmptyState()
        }

      </section>

      <section class="section">

        <div class="welcome-card">

          <h2 style="margin-bottom:10px">
            ${t("privacyNotice")}
          </h2>

          <p>${t("tagline")}</p>

        </div>

      </section>

    </main>
  `;
}

/* =========================================================
   EMPTY STATE
========================================================= */

function renderEmptyState() {
  return `
    <div class="empty-state">

      <div class="empty-state-icon">📂</div>

      <h3>${t("noDocuments")}</h3>

      <p>${t("noDocumentsDescription")}</p>

      <button class="btn btn-primary"
              style="margin-top:18px"
              data-action="add-document">
        + ${t("uploadFirst")}
      </button>

    </div>
  `;
}

/* =========================================================
   DOCUMENT CARD
========================================================= */

function renderDocumentCard(doc) {
  return `
    <article class="document-card">

      <div class="document-icon">
        ${getCategoryIcon(doc.category)}
      </div>

      <h3>${escapeHTML(doc.name)}</h3>

      <p>
        ${escapeHTML(doc.description || doc.fileName)}
      </p>

      <div class="document-meta">

        <span>${formatDate(doc.dateAdded)}</span>

        <span>${formatSize(doc.size)}</span>

      </div>

      <div class="document-actions">

        <button class="btn btn-primary"
                style="flex:1"
                data-action="preview"
                data-id="${escapeHTML(doc.id)}">
          ${t("preview")}
        </button>

        <button class="icon-button"
                data-action="delete-document"
                data-id="${escapeHTML(doc.id)}"
                title="${t("delete")}">
          🗑
        </button>

      </div>

    </article>
  `;
}

/* =========================================================
   DOCUMENT LIBRARY
========================================================= */

function renderLibrary() {
  const query = state.search.toLowerCase();

  const filtered = state.documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(query) ||
      doc.fileName.toLowerCase().includes(query);

    const matchesCategory =
      state.selectedCategory === "All" ||
      doc.category === state.selectedCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return `
    <main class="main-content">

      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:15px;
        flex-wrap:wrap;
        margin-bottom:22px;
      ">

        <div>
          <h1 class="section-title" style="font-size:27px">
            ${t("myDocuments")}
          </h1>

          <p class="section-description">
            ${state.documents.length} ${t("documents")}
          </p>
        </div>

        <button class="btn btn-primary"
                data-action="add-document">
          + ${t("addDocument")}
        </button>

      </div>

      <div class="search-box" style="margin-bottom:20px">
        <span>🔍</span>

        <input
          id="documentSearch"
          type="text"
          placeholder="${t("search")}"
          value="${escapeHTML(state.search)}"
        />
      </div>

      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:9px;
        margin-bottom:23px;
      ">

        ${["All", "Identity", "Education", "Finance", "Personal", "Other"]
          .map((category) => `
            <button
              class="btn ${
                state.selectedCategory === category
                  ? "btn-primary"
                  : "btn-secondary"
              }"
              style="padding:9px 14px"
              data-action="filter-category"
              data-category="${category}"
            >
              ${category === "All" ? t("all") : t(category.toLowerCase())}
            </button>
          `).join("")}

      </div>

      <div id="documentResults">
        ${renderDocumentResults(filtered)}
      </div>

      <button class="btn btn-ghost"
              style="margin-top:25px"
              data-action="home">
        ← ${t("back")}
      </button>

    </main>
  `;
}

function renderDocumentResults(documents) {
  if (!documents.length) {
    return `
      <div class="empty-state">
        <div class="empty-state-icon">🔎</div>
        <h3>${t("noResults")}</h3>
      </div>
    `;
  }

  return `
    <div class="document-grid">
      ${documents.map(renderDocumentCard).join("")}
    </div>
  `;
}

/* =========================================================
   PROFILE PAGE
========================================================= */

function renderProfile() {
  return `
    <main class="main-content">

      <div class="section">
        <h1 class="section-title">${t("profile")}</h1>

        <p class="section-description">
          Manage your personal information.
        </p>
      </div>

      <section class="profile-welcome">

        ${profileAvatar("profile-welcome-image")}

        <div>
          <h2>
            ${escapeHTML(state.profile.name || t("profile"))}
          </h2>

          <p>
            ${escapeHTML(state.profile.phone || t("noMobileNumber"))}
          </p>

          <button class="text-button"
                  data-action="edit-profile"
                  style="margin-top:10px">
            ✎ ${t("editProfile")}
          </button>
        </div>

      </section>

      <section class="document-card">

        <h3>${t("fullName")}</h3>

        <p style="margin-top:8px">
          ${escapeHTML(state.profile.name || t("profileNotAdded"))}
        </p>

        <div class="divider"></div>

        <h3 style="margin-top:20px">${t("phoneNumber")}</h3>

        <p style="margin-top:8px">
          ${escapeHTML(state.profile.phone || t("profileNotAdded"))}
        </p>

      </section>

      <button class="btn btn-ghost"
              style="margin-top:20px"
              data-action="home">
        ← ${t("back")}
      </button>

    </main>
  `;
}

/* =========================================================
   ABOUT DEVELOPER PAGE
========================================================= */

function renderAboutDeveloper() {
  return `
    <main class="main-content about-developer-page">

      <section class="section">
        <h1 class="section-title">${t("aboutDeveloper")}</h1>

        <p class="section-description">
          ${t("aboutDescription")}
        </p>
      </section>

      <section class="developer-hero">

        <div class="developer-avatar">
          FS
        </div>

        <div class="developer-identity">

          <span class="developer-label">
            DOCAURA DEVELOPER
          </span>

          <h2>Fahim Sami</h2>

          <p>${t("studentDeveloper")}</p>

          <a
            href="https://github.com/samifahim07"
            target="_blank"
            rel="noopener noreferrer"
            class="developer-github"
          >
            <span>⌘</span>
            ${t("visitGithub")} ↗
          </a>

        </div>

      </section>

      <section class="section developer-section">

        <h2 class="section-title">
          🎓 ${t("academicInfo")}
        </h2>

        <div class="developer-info-grid">

          <article class="developer-info-card">
            <span class="developer-info-label">
              ${t("university")}
            </span>
            <h3>East West University</h3>
          </article>

          <article class="developer-info-card">
            <span class="developer-info-label">
              ${t("department")}
            </span>
            <h3>${t("cse")}</h3>
          </article>

          <article class="developer-info-card">
            <span class="developer-info-label">
              ${t("profession")}
            </span>
            <h3>${t("studentDeveloper")}</h3>
          </article>

        </div>

      </section>

      <section class="section developer-section">

        <h2 class="section-title">
          ⚡ ${t("technicalInterests")}
        </h2>

        <div class="developer-interest-list">

          ${developerInterests.map((interest) => `
            <span class="developer-interest">
              ${escapeHTML(interest)}
            </span>
          `).join("")}

        </div>

      </section>

      <section class="section developer-section">

        <h2 class="section-title">
          🚀 ${t("projects")}
        </h2>

        <div class="developer-project-grid">

          ${developerProjects.map((project) => `
            <article class="developer-project-card">

              <div class="developer-project-icon">
                ${project.icon}
              </div>

              <h3>${escapeHTML(project.name)}</h3>

              <p>${escapeHTML(
                state.language === "bn"
                  ? t("projectDescription")
                  : project.description
              )}</p>

            </article>
          `).join("")}

        </div>

      </section>

      <section class="section developer-section">

        <div class="developer-bio-card">

          <h2>
            👨‍💻 ${t("developerBio")}
          </h2>

          <p>${t("bioOne")}</p>
          <p>${t("bioTwo")}</p>
          <p>${t("bioThree")}</p>
          <p>${t("bioFour")}</p>

        </div>

      </section>

      <button
        class="btn btn-ghost"
        style="margin-top:10px"
        data-action="home"
      >
        ← ${t("back")}
      </button>

    </main>
  `;
}

/* =========================================================
   PROFILE EDITOR MODAL
========================================================= */

function renderProfileEditor() {
  if (!state.showProfileEditor) return "";

  return `
    <div class="modal-overlay"
         data-action="close-profile-overlay">

      <div class="modal-content"
           data-modal-content="true">

        <div class="modal-header">
          <h2>${t("editProfile")}</h2>

          <button class="icon-button"
                  data-action="close-profile">
            ✕
          </button>
        </div>

        <div class="profile-editor">

          ${profileAvatar("profile-photo-large")}

          <div style="text-align:center">

            <label class="btn btn-secondary"
                   for="profilePhotoInput">
              📷 ${t("profilePhoto")}
            </label>

            <input
              type="file"
              id="profilePhotoInput"
              accept="image/*"
              hidden
            />

            <button class="remove-photo"
                    data-action="remove-photo">
              ${t("removePhoto")}
            </button>

          </div>

          <div class="form-group">
            <label for="profileName">${t("fullName")}</label>

            <input
              id="profileName"
              type="text"
              value="${escapeHTML(state.profile.name)}"
              placeholder="${t("fullName")}"
            />
          </div>

          <div class="form-group">
            <label for="profilePhone">${t("phoneNumber")}</label>

            <input
              id="profilePhone"
              type="tel"
              value="${escapeHTML(state.profile.phone)}"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div class="modal-footer">

            <button class="btn btn-secondary"
                    data-action="close-profile">
              ${t("cancel")}
            </button>

            <button class="btn btn-primary"
                    data-action="save-profile">
              ${t("saveChanges")}
            </button>

          </div>

        </div>

      </div>
    </div>
  `;
}

/* =========================================================
   ADD DOCUMENT MODAL
========================================================= */

function renderAddDocumentModal() {
  if (state.page !== "add") return "";

  return `
    <div class="modal-overlay"
         data-action="close-add-overlay">

      <div class="modal-content"
           data-modal-content="true">

        <div class="modal-header">
          <h2>${t("addDocument")}</h2>

          <button class="icon-button"
                  data-action="close-add">
            ✕
          </button>
        </div>

        <form id="addDocumentForm">

          <div class="form-group">
            <label for="documentFile">${t("selectFile")}</label>

            <input
              id="documentFile"
              type="file"
              required
            />
          </div>

          <div class="form-group">
            <label for="documentName">${t("documentName")}</label>

            <input
              id="documentName"
              type="text"
              placeholder="${t("documentName")}"
              required
            />
          </div>

          <div class="form-group">
            <label for="documentCategory">${t("category")}</label>

            <select id="documentCategory">
              <option value="Identity">${t("identity")}</option>
              <option value="Education">${t("education")}</option>
              <option value="Finance">${t("finance")}</option>
              <option value="Personal">${t("personal")}</option>
              <option value="Other">${t("other")}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="documentDescription">${t("description")}</label>

            <textarea
              id="documentDescription"
              placeholder="${t("description")}"
            ></textarea>
          </div>

          <div class="modal-footer">

            <button type="button"
                    class="btn btn-secondary"
                    data-action="close-add">
              ${t("cancel")}
            </button>

            <button type="submit"
                    class="btn btn-primary">
              ${t("upload")}
            </button>

          </div>

        </form>

      </div>
    </div>
  `;
}

/* =========================================================
   DOCUMENT PREVIEW
========================================================= */

function renderPreviewModal() {
  const doc = state.selectedDocument;

  if (!doc) return "";

  const isImage = doc.type.startsWith("image/");
  const isPDF = doc.type === "application/pdf";

  let preview = "";

  if (isImage) {
    preview = `
      <img
        src="${doc.data}"
        alt="${escapeHTML(doc.name)}"
        style="
          width:100%;
          max-height:420px;
          object-fit:contain;
          border-radius:12px;
          background:var(--surface-soft);
        "
      />
    `;
  } else if (isPDF) {
    preview = `
      <iframe
        src="${doc.data}"
        title="${escapeHTML(doc.name)}"
        style="
          width:100%;
          height:420px;
          border:0;
          border-radius:12px;
        "
      ></iframe>
    `;
  } else {
    preview = `
      <div class="empty-state">
        <div class="empty-state-icon">📄</div>
        <h3>${escapeHTML(doc.name)}</h3>
        <p>${t("previewUnavailable")}</p>
      </div>
    `;
  }

  return `
    <div class="modal-overlay"
         data-action="close-preview-overlay">

      <div class="modal-content"
           data-modal-content="true"
           style="width:min(650px,100%)">

        <div class="modal-header">
          <h2>${escapeHTML(doc.name)}</h2>

          <button class="icon-button"
                  data-action="close-preview">
            ✕
          </button>
        </div>

        ${preview}

        <div class="document-meta">
          <span>${t("fileType")}: ${escapeHTML(doc.type)}</span>
          <span>${formatSize(doc.size)}</span>
        </div>

        <div class="modal-footer">

          <button class="btn btn-secondary"
                  data-action="close-preview">
            ${t("close")}
          </button>

          <button class="btn btn-primary"
                  data-action="download"
                  data-id="${escapeHTML(doc.id)}">
            ↓ ${t("download")}
          </button>

        </div>

      </div>
    </div>
  `;
}

/* =========================================================
   PIN SETUP MODAL
========================================================= */

function renderPinSetup() {
  if (!state.showPinSetup) return "";

  return `
    <div class="modal-overlay">

      <div class="modal-content">

        <div class="auth-lock-icon">🔐</div>

        <h2>${t("setupPin")}</h2>

        <p class="auth-description">
          Create a PIN to control access to your document library.
        </p>

        <div class="form-group">
          <label for="newPin">${t("enterPin")}</label>

          <input
            id="newPin"
            class="pin-input"
            type="password"
            inputmode="numeric"
            maxlength="8"
            placeholder="••••"
          />
        </div>

        <div class="form-group">
          <label for="confirmPin">${t("confirmPin")}</label>

          <input
            id="confirmPin"
            class="pin-input"
            type="password"
            inputmode="numeric"
            maxlength="8"
            placeholder="••••"
          />
        </div>

        <p class="section-description"
           id="pinSetupError"
           style="color:var(--danger);margin-bottom:12px">
          ${escapeHTML(state.pinError)}
        </p>

        <button class="btn btn-primary"
                style="width:100%"
                data-action="save-pin">
          ${t("saveChanges")}
        </button>

        <button class="btn btn-ghost"
                style="width:100%;margin-top:8px"
                data-action="cancel-pin">
          ${t("cancel")}
        </button>

      </div>
    </div>
  `;
}

/* =========================================================
   UNLOCK MODAL
========================================================= */

function renderUnlockModal() {
  if (!state.showUnlock) return "";

  return `
    <div class="auth-modal">

      <div class="modal-content">

        <div class="auth-lock-icon">🔒</div>

        <h2>${t("unlockTitle")}</h2>

        <p class="auth-description">
          ${t("unlockDescription")}
        </p>

        <div class="form-group">
          <input
            id="unlockPin"
            class="pin-input"
            type="password"
            inputmode="numeric"
            maxlength="8"
            placeholder="••••"
          />
        </div>

        <p style="
          color:var(--danger);
          font-size:13px;
          margin-bottom:13px;
        ">
          ${escapeHTML(state.pinError)}
        </p>

        <button class="btn btn-primary"
                style="width:100%"
                data-action="unlock">
          ${t("unlock")}
        </button>

        <button class="biometric-button"
                data-action="biometric">
          <span>☝</span>
          ${t("fingerprint")}
        </button>

        <p class="biometric-settings">
          ${t("fingerprintInfo")}
        </p>

        <button class="text-button"
                style="margin-top:16px"
                data-action="home">
          ${t("back")}
        </button>

      </div>
    </div>
  `;
}

/* =========================================================
   SETTINGS MODAL
========================================================= */

function renderSettings() {
  if (!state.showSettings) return "";

  return `
    <div class="modal-overlay"
         data-action="close-settings-overlay">

      <div class="modal-content"
           data-modal-content="true">

        <div class="modal-header">
          <h2>${t("settings")}</h2>

          <button class="icon-button"
                  data-action="close-settings">
            ✕
          </button>
        </div>

        <div class="settings-list">

          <div class="settings-item">
            <div>
              <h3>${t("appearance")}</h3>
              <p>${t("chooseTheme")}</p>
            </div>

            <select id="themeSelect">
              <option value="light"
                ${state.theme === "light" ? "selected" : ""}>
                ${t("light")}
              </option>

              <option value="dark"
                ${state.theme === "dark" ? "selected" : ""}>
                ${t("dark")}
              </option>
            </select>
          </div>

          <div class="settings-item">
            <div>
              <h3>${t("language")}</h3>
              <p>${t("chooseLanguage")}</p>
            </div>

            <select id="languageSelect">
              <option value="en"
                ${state.language === "en" ? "selected" : ""}>
                ${t("english")}
              </option>

              <option value="bn"
                ${state.language === "bn" ? "selected" : ""}>
                ${t("bangla")}
              </option>
            </select>
          </div>

          <div class="settings-item">
            <div>
              <h3>${t("security")}</h3>
              <p>${t("managePin")}</p>
            </div>

            <button class="btn btn-secondary"
                    data-action="change-pin">
              ${hasPin() ? t("changePin") : t("setupPin")}
            </button>
          </div>

          <div class="settings-item">
            <div>
              <h3>${t("logout")}</h3>
              <p>${t("lockLibrary")}</p>
            </div>

            <button class="btn btn-secondary"
                    data-action="lock">
              🔒
            </button>
          </div>

        </div>

        <p class="section-description"
           style="margin-top:18px">
          ${t("privacyNotice")}
        </p>

      </div>
    </div>
  `;
}

/* =========================================================
   FOOTER
========================================================= */

function renderFooter() {
  return `
    <footer class="app-footer">
      <strong>DocAura</strong>
      <p>${t("footer")}</p>
      <p style="margin-top:6px">${t("tagline")}</p>
    </footer>
  `;
}

/* =========================================================
   MAIN RENDER
========================================================= */

function render() {
  if (!app) return;

  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.lang = state.language;

  let pageContent = "";

  if (state.page === "home") {
    pageContent = renderHome();
  } else if (state.page === "library") {
    pageContent = renderLibrary();
  } else if (state.page === "profile") {
    pageContent = renderProfile();
  } else if (state.page === "about") {
    pageContent = renderAboutDeveloper();
  }

  app.innerHTML = `
    <div class="app-container">

      ${createBackground()}

      ${renderHeader()}

      ${renderNavigation()}

      ${pageContent}

      ${renderFooter()}

      ${renderProfileEditor()}
      ${renderAddDocumentModal()}
      ${renderPreviewModal()}
      ${renderSettings()}
      ${renderPinSetup()}
      ${renderUnlockModal()}

      ${
        state.toast
          ? `<div class="toast">${escapeHTML(state.toast)}</div>`
          : ""
      }

    </div>
  `;
}

/* =========================================================
   NAVIGATION ACTIONS
========================================================= */

function openLibrary() {
  if (!hasPin()) {
    state.showPinSetup = true;
    state.pinError = "";
    render();
    return;
  }

  if (!isAuthenticated()) {
    state.showUnlock = true;
    state.pinError = "";
    render();
    return;
  }

  state.page = "library";
  state.selectedCategory = "All";
  state.search = "";
  render();
}

function openCategory(category) {
  if (!hasPin()) {
    state.showPinSetup = true;
    state.pinError = "";
    render();
    return;
  }

  if (!isAuthenticated()) {
    state.showUnlock = true;
    state.pinError = "";
    render();
    return;
  }

  state.selectedCategory = category;
  state.page = "library";
  state.search = "";
  render();
}

function openAboutDeveloper() {
  state.page = "about";
  render();
}

/* =========================================================
   PROFILE ACTIONS
========================================================= */

function openProfileEditor() {
  state.showProfileEditor = true;
  render();
}

function closeProfileEditor() {
  state.showProfileEditor = false;
  render();
}

function removeProfilePhoto() {
  state.profile.photo = "";
  saveProfile();
  render();
}

async function handleProfilePhoto(file) {
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast(t("pleaseSelectImage"));
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    showToast(t("imageTooLarge"));
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    state.profile.photo = reader.result;
    saveProfile();
    render();
  };

  reader.onerror = () => {
    showToast(t("fileReadError"));
  };

  reader.readAsDataURL(file);
}

function saveProfileChanges() {
  const name = document.querySelector("#profileName")?.value.trim() || "";
  const phone = document.querySelector("#profilePhone")?.value.trim() || "";

  state.profile.name = name;
  state.profile.phone = phone;

  saveProfile();

  state.showProfileEditor = false;
  render();

  showToast(t("profileSaved"));
}

/* =========================================================
   DOCUMENT ACTIONS
========================================================= */

function openAddDocument() {
  if (!hasPin()) {
    state.showPinSetup = true;
    state.pinError = "";
    render();
    return;
  }

  if (!isAuthenticated()) {
    state.showUnlock = true;
    state.pinError = "";
    render();
    return;
  }

  state.page = "add";
  render();
}

async function handleDocumentUpload(event) {
  event.preventDefault();

  const file = document.querySelector("#documentFile")?.files?.[0];

  if (!file) {
    showToast(t("selectFile"));
    return;
  }

  if (file.size > 15 * 1024 * 1024) {
    showToast(t("fileTooLarge"));
    return;
  }

  const name =
    document.querySelector("#documentName")?.value.trim() ||
    file.name;

  const category =
    document.querySelector("#documentCategory")?.value || "Other";

  const description =
    document.querySelector("#documentDescription")?.value.trim() || "";

  const reader = new FileReader();

  reader.onload = async () => {
    const documentData = {
      id: crypto.randomUUID(),
      name,
      fileName: file.name,
      category,
      description,
      type: file.type || "application/octet-stream",
      size: file.size,
      dateAdded: new Date().toISOString(),
      data: reader.result,
    };

    try {
      await saveDocument(documentData);
      await refreshDocuments();

      state.page = "library";
      state.selectedCategory = "All";
      state.search = "";

      render();
      showToast(t("documentAdded"));
    } catch (error) {
      console.error("Upload error:", error);
      showToast(t("fileReadError"));
    }
  };

  reader.onerror = () => {
    showToast(t("fileReadError"));
  };

  reader.readAsDataURL(file);
}

async function removeDocument(id) {
  const confirmed = window.confirm(t("confirmDelete"));

  if (!confirmed) return;

  try {
    await deleteDocument(id);
    await refreshDocuments();

    state.selectedDocument = null;

    render();
    showToast(t("documentDeleted"));
  } catch (error) {
    console.error("Delete error:", error);
    showToast(t("couldNotDelete"));
  }
}

function openPreview(id) {
  const doc = state.documents.find((item) => item.id === id);

  if (!doc) return;

  state.selectedDocument = doc;
  render();
}

function downloadDocument(id) {
  const doc = state.documents.find((item) => item.id === id);

  if (!doc) return;

  const link = document.createElement("a");

  link.href = doc.data;
  link.download = doc.fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();
}

/* =========================================================
   PIN ACTIONS
========================================================= */

async function handlePinSetup() {
  const pin = document.querySelector("#newPin")?.value || "";
  const confirmPin = document.querySelector("#confirmPin")?.value || "";

  if (!/^\d{4,8}$/.test(pin)) {
    state.pinError = t("pinLength");
    render();
    return;
  }

  if (pin !== confirmPin) {
    state.pinError = t("pinMismatch");
    render();
    return;
  }

  try {
    await savePin(pin);

    state.showPinSetup = false;
    state.pinError = "";

    render();

    showToast(t("pinSaved"));
  } catch (error) {
    console.error("PIN setup error:", error);
    state.pinError = t("couldNotSavePin");
    render();
  }
}

async function handleUnlock() {
  const pin = document.querySelector("#unlockPin")?.value || "";

  if (!pin) {
    state.pinError = t("pinRequired");
    render();
    return;
  }

  try {
    const valid = await verifyPin(pin);

    if (!valid) {
      state.pinError = t("wrongPin");
      render();
      return;
    }

    sessionStorage.setItem(KEYS.authenticated, "true");

    state.showUnlock = false;
    state.pinError = "";
    state.page = "library";

    render();
  } catch (error) {
    console.error("PIN verification error:", error);
    state.pinError = t("couldNotVerifyPin");
    render();
  }
}

function openPinChange() {
  state.showSettings = false;
  state.showPinSetup = true;
  state.pinError = "";
  render();
}

/* =========================================================
   THEME AND LANGUAGE
========================================================= */

function changeTheme(theme) {
  if (!["light", "dark"].includes(theme)) return;

  state.theme = theme;
  localStorage.setItem(KEYS.theme, theme);

  render();
}

function changeLanguage(language) {
  if (!["en", "bn"].includes(language)) return;

  state.language = language;
  localStorage.setItem(KEYS.language, language);

  render();
}

/* =========================================================
   EVENT DELEGATION
========================================================= */

document.addEventListener("click", async (event) => {
  const actionElement = event.target.closest("[data-action]");

  if (!actionElement) return;

  if (actionElement.dataset.modalContent === "true") return;

  const action = actionElement.dataset.action;
  const id = actionElement.dataset.id;
  const category = actionElement.dataset.category;

  switch (action) {
    case "home":
      state.page = "home";
      state.showUnlock = false;
      state.showPinSetup = false;
      state.showSettings = false;
      render();
      break;

    case "view-documents":
      openLibrary();
      break;

    case "add-document":
      openAddDocument();
      break;

    case "profile":
      state.page = "profile";
      render();
      break;

    case "about-developer":
      openAboutDeveloper();
      break;

    case "edit-profile":
      openProfileEditor();
      break;

    case "close-profile":
      closeProfileEditor();
      break;

    case "close-profile-overlay":
      if (event.target === actionElement) {
        closeProfileEditor();
      }
      break;

    case "save-profile":
      saveProfileChanges();
      break;

    case "remove-photo":
      removeProfilePhoto();
      break;

    case "category":
      openCategory(category);
      break;

    case "filter-category":
      state.selectedCategory = category;
      render();
      break;

    case "preview":
      openPreview(id);
      break;

    case "close-preview":
      state.selectedDocument = null;
      render();
      break;

    case "close-preview-overlay":
      if (event.target === actionElement) {
        state.selectedDocument = null;
        render();
      }
      break;

    case "download":
      downloadDocument(id);
      break;

    case "delete-document":
      await removeDocument(id);
      break;

    case "close-add":
      state.page = "library";
      render();
      break;

    case "close-add-overlay":
      if (event.target === actionElement) {
        state.page = "library";
        render();
      }
      break;

    case "settings":
      state.showSettings = true;
      render();
      break;

    case "close-settings":
      state.showSettings = false;
      render();
      break;

    case "close-settings-overlay":
      if (event.target === actionElement) {
        state.showSettings = false;
        render();
      }
      break;

    case "save-pin":
      await handlePinSetup();
      break;

    case "cancel-pin":
      state.showPinSetup = false;
      state.pinError = "";
      render();
      break;

    case "unlock":
      await handleUnlock();
      break;

    case "change-pin":
      openPinChange();
      break;

    case "lock":
      lockDocuments();
      showToast(t("logout"));
      break;

    case "biometric":
      showToast(t("biometricUnavailable"));
      break;
  }
});

/* =========================================================
   INPUT EVENTS
========================================================= */

document.addEventListener("input", (event) => {
  if (event.target.id !== "documentSearch") return;

  state.search = event.target.value;

  const query = state.search.toLowerCase();

  const filtered = state.documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(query) ||
      doc.fileName.toLowerCase().includes(query);

    const matchesCategory =
      state.selectedCategory === "All" ||
      doc.category === state.selectedCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  const results = document.querySelector("#documentResults");

  if (results) {
    results.innerHTML = renderDocumentResults(filtered);
  }
});

/* =========================================================
   CHANGE EVENTS
========================================================= */

document.addEventListener("change", async (event) => {
  if (event.target.id === "profilePhotoInput") {
    const file = event.target.files?.[0];
    await handleProfilePhoto(file);
  }

  if (event.target.id === "themeSelect") {
    changeTheme(event.target.value);
  }

  if (event.target.id === "languageSelect") {
    changeLanguage(event.target.value);
  }
});

/* =========================================================
   FORM EVENTS
========================================================= */

document.addEventListener("submit", async (event) => {
  if (event.target.id === "addDocumentForm") {
    await handleDocumentUpload(event);
  }
});

/* =========================================================
   INITIALIZATION
========================================================= */

async function initializeApp() {
  try {
    loadProfile();
    await refreshDocuments();

    render();

    console.log(`${APP_NAME} initialized successfully.`);
  } catch (error) {
    console.error("DocAura initialization error:", error);

    app.innerHTML = `
      <main class="main-content">
        <div class="empty-state">
          <h2>${t("unableToStart")}</h2>
          <p>${t("refreshTryAgain")}</p>
        </div>
      </main>
    `;
  }
}

initializeApp();
