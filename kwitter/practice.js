const firebaseConfig = {
  apiKey: "AIzaSyBqQtOpckDmtvYqsnzJW-K8F7WaB8zqXl0",
  authDomain: "chicken-nugget-1c037.firebaseapp.com",
  databaseURL: "https://chicken-nugget-1c037-default-rtdb.firebaseio.com",
  projectId: "chicken-nugget-1c037",
  storageBucket: "chicken-nugget-1c037.appspot.com",
  messagingSenderId: "556181175958",
  appId: "1:556181175958:web:d94efec40a9a80a65eccb7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  })
}