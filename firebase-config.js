// Firebase 설정 - 한솔건축  ⚠ 새 Firebase 프로젝트를 만든 뒤 아래 값을 채워야 함 (콘솔 → 프로젝트 설정 → 웹 앱)
const firebaseConfig = {
  apiKey: "여기에",
  authDomain: "여기에.firebaseapp.com",
  databaseURL: "https://여기에-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "여기에",
  storageBucket: "여기에.firebasestorage.app",
  messagingSenderId: "여기에",
  appId: "여기에"
};

firebase.initializeApp(firebaseConfig);
const fbDb = firebase.database();
const fbAuth = firebase.auth();

// 🔑 로그인 도우미(Apps Script) 주소 — 청년회·단오·가문굴비와 같은 도우미, 시스템 구분만 hansol
var SEC_AUTH_URL = "https://script.google.com/macros/s/AKfycbylFvbMgcGfy6E9fRXq-V2LPogguDKNVtfq1YI_baBES1q58SVxmJdfm54uI_MORxFa/exec";
var SEC_SYS = "hansol";
