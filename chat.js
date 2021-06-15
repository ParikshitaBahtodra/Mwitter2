//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCWA9ENyGy7mNJUgsX2YqApQ2HIm6EmHhQ",
      authDomain: "mwitter-43496.firebaseapp.com",
      databaseURL: "https://mwitter-43496-default-rtdb.firebaseio.com",
      projectId: "mwitter-43496",
      storageBucket: "mwitter-43496.appspot.com",
      messagingSenderId: "726999246978",
      appId: "1:726999246978:web:9600c8fa4f9d352fa46c9b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");

    function send(){
          var msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
          
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
