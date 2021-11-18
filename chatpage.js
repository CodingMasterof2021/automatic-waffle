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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
    msg = document.getElementById("input").value;
    firebase.database().ref(room_name).push({
        name:username,
        message:msg,
        like:0
    });
    
    document.getElementById("input").value = "";
}