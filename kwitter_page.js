//YOUR FIREBASE LINKS
var firebaseConfig = {

      apiKey: "AIzaSyC1tjFIbOHW-dIMFqf5-ztU5yCqf1N4nIw",
    
      authDomain: "project-94-1fe2a.firebaseapp.com",
    
      databaseURL: "https://project-94-1fe2a-default-rtdb.firebaseio.com",
    
      projectId: "project-94-1fe2a",
    
      storageBucket: "project-94-1fe2a.appspot.com",
    
      messagingSenderId: "637699377829",
    
      appId: "1:637699377829:web:67a88b61abe3c5bcf0db4c"
    
    };
    firebase.initialize(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send() 
    {
    msg = document.getElementById("msg").value;           
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0      
    });      
    
    document.getElementById("msg").value = "";
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
    
    //End code
    } });  }); }     
    getData();
    
    }
    