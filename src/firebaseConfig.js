// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoZquiRfEzHEhRnQS9wJKOe-T6FVxEUDk",
  authDomain: "appauth-c5ace.firebaseapp.com",
  projectId: "appauth-c5ace",
  storageBucket: "appauth-c5ace.appspot.com",
  messagingSenderId: "527386171373",
  appId: "1:321908210297:android:c98370ac487729b41432a8" // Substitua pelo seu App ID
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha a instância de autenticação
export const auth = getAuth(app);
