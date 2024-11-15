// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzdQtnddZttNGax0z6uhKMqTtt9zbIbas",
    authDomain: "fir-e6414.firebaseapp.com",
    projectId: "fir-e6414",
    storageBucket: "fir-e6414.firebasestorage.app",
    messagingSenderId: "832522287966",
    appId: "1:832522287966:web:676e840f2172644dab2dcf",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    const name = document.getElementById("name");
    const message = document.getElementById("message");

    const newMessage = push(messages);

    set(newMessage, {
        name: name.value,
        message: message.value,
        created_at: serverTimestamp(),
      });

      name.value = "";
      message.value ="";
});
             
                 