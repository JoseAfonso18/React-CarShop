// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkEJ6Zl7VOdeVlXyKb9bUza0ER6EUCvYc",
    authDomain: "reactcarshop.firebaseapp.com",
    projectId: "reactcarshop",
    storageBucket: "reactcarshop.firebasestorage.app",
    messagingSenderId: "873391341944",
    appId: "1:873391341944:web:062de578c0cf29bf59888d",
    measurementId: "G-9F15MVENJ6"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa a autenticação
const auth = getAuth(app);

// Provedor de autenticação do Google
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };