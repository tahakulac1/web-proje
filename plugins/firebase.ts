import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgileri
const firebaseConfig: Record<string, string> = {
    apiKey: "AIzaSyBolc07bwp8olnCQkAZzNKjpxTVaO_IJDk" as string,
    authDomain: "web-project-defacto.firebaseapp.com" as string,
    projectId: "web-project-defacto" as string,
    storageBucket: "web-project-defacto.firebasestorage.app" as string,
    messagingSenderId: "717271748308" as string,
    appId: "1:717271748308:web:1414b4fc2eef56b265f541" as string,
    measurementId: "G-M6Q45TYH1V"as string
};

// Firebase uygulamasını başlat
const firebaseApp = initializeApp(firebaseConfig);

// Firestore ve Authentication referanslarını al
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Referansları dışa aktar
export { db, auth };
export default firebaseApp;
