var firebaseConfig = {
      apiKey: "AIzaSyBMA7D93YDRlsZrdkOnisFouNbVRumWZ9Y",
      authDomain: "kwitter1-d58c1.firebaseapp.com",
      databaseURL: "https://kwitter1-d58c1-default-rtdb.firebaseio.com",
      projectId: "kwitter1-d58c1",
      storageBucket: "kwitter1-d58c1.appspot.com",
      messagingSenderId: "179591866022",
      appId: "1:179591866022:web:7e92e800c8afd6c2827667"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom()
    {
      room_name= document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+Room_names);
      //row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      window.location="kwitter_page.html";
      console.log(name);
      localStorage.setItem("room_name",name);
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}