firebaseConfig = {
    apiKey: "AIzaSyDQmj3ctwfdgBUn8h6ERxE8NK58vybEzeM",
    authDomain: "kwiter-82ec3.firebaseapp.com",
    databaseURL: "https://kwiter-82ec3-default-rtdb.firebaseio.com",
    projectId: "kwiter-82ec3",
    storageBucket: "kwiter-82ec3.appspot.com",
    messagingSenderId: "58426848095",
    appId: "1:58426848095:web:fbd17cd74130bfbcd9fcea",
};
firebase.initializeApp(firebaseConfig);
function AddUser()
{
    user_name = document.getElementById("username").value; 
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
}