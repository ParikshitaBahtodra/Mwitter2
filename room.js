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
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addroom(){
var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name "
});
localStorage.setItem("room_name",room_name);
window.location="chat.html";
}
 
 
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name  -  "+Room_names);

var row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
localStorage.setItem("room_name",name);
window.location="chat.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="login.html";
}