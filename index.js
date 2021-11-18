function login() {
    username = document.getElementById("user").value;
    localStorage.setItem("Username", username);
    window.location = "chatroom.html"; 
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5DrV6H3hbZbZA6n7WhDMnXT6qGVryJb8",
  authDomain: "chatterbox-v1-0.firebaseapp.com",
  databaseURL: "https://chatterbox-v1-0-default-rtdb.firebaseio.com",
  projectId: "chatterbox-v1-0",
  storageBucket: "chatterbox-v1-0.appspot.com",
  messagingSenderId: "141238100164",
  appId: "1:141238100164:web:585f638ac143d215436991"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function chatRoom() {
    window.location = "realchatroom.html";
}