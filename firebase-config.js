// Firebase 설정 - 한솔건축 (hansol6643)
const firebaseConfig = {
  apiKey: "AIzaSyBt2UQzRIaaDp5OoZnwsGS5HguK-592F-g",
  authDomain: "hansol6643.firebaseapp.com",
  databaseURL: "https://hansol6643-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hansol6643",
  storageBucket: "hansol6643.firebasestorage.app",
  messagingSenderId: "484499455925",
  appId: "1:484499455925:web:0934ff14934d18c4c763fc"
};

firebase.initializeApp(firebaseConfig);
const fbDb = firebase.database();
const fbAuth = firebase.auth();

// 🔑 로그인 도우미(Apps Script) 주소 — 청년회·단오·가문굴비와 같은 도우미, 시스템 구분만 hansol
var SEC_AUTH_URL = "https://script.google.com/macros/s/AKfycbylFvbMgcGfy6E9fRXq-V2LPogguDKNVtfq1YI_baBES1q58SVxmJdfm54uI_MORxFa/exec";
var SEC_SYS = "hansol";
