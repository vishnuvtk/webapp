// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  onValue,
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

// Load messages on data event
onValue(messages, (snapshot) => {
    // Create a reference
    const ul = document.getElementById("messages");
    ul.replaceChildren();
  
    // Loop through messeages and add them to the ul
    snapshot.forEach((childSnapshot) => {
      // Fetch the data from the snapshot
      const childData = childSnapshot.val();
  
      // Create a text node with message and name
      const text = document.createTextNode(
        childData.message + " ~ " + childData.name
      );
  
      // Create a li element
      const li = document.createElement("li");
  
      // Append li and text to the ul
      li.appendChild(text);
      ul.appendChild(li);
    });
  });
                 
                 