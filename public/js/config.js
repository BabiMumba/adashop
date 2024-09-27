// Configuration Firebase (tu peux la récupérer depuis la console Firebase)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getDatabase, ref, push, set } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';


export const firebaseConfig = {
    apiKey: "votre code API",
    authDomain: "alison-243.firebaseapp.com",
    databaseURL: "https://alison-243-default-rtdb.firebaseio.com",
    projectId: "alison-243",
    storageBucket: "alison-243.appspot.com",
    messagingSenderId: "814950433953",
    appId: "1:814950433953:web:431154fa2614081db51ce0",
    measurementId: "G-LMG978KH27"
};



// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database, ref, push, set };CAMTASIA_21_ASSET_FORMAT*C:\ProgramData\TechSmith\Camtasia Studio 21\Library 4.0\Camtasia Libraries\Camtasia 2021\Pistes de musique\technicolordreams.asset\technicolordreams.assetproj|atAudio