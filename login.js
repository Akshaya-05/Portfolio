let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    namefield.style.maxHeight ="0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    namefield.style.maxHeight ="60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtOM0Opto6ipbCFWIEd6RGgaly0gji5wg",
  authDomain: "portfolio-68760.firebaseapp.com",
  databaseURL: "https://portfolio-68760-default-rtdb.firebaseio.com",
  projectId: "portfolio-68760",
  storageBucket: "portfolio-68760.appspot.com",
  messagingSenderId: "416849226684",
  appId: "1:416849226684:web:704c74c826545bad8859b9",
  measurementId: "G-PTWTMDQKJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Getting all the objects of html
var name =document.getElementById("name")
var email =document.getElementById("Email")
var passwords =document.getElementById("Password")

// making function on storing data
window.signup = function(e){
    e.preventDefault();
    var obj = {
        Name:name.Value,
        Email:email.value,
        Password:passwords.value,
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.passwords)
    .then(function(success){
        alert("Signup Successfully")
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
}







// const userSignIn = async() => {
// signInWithPopup(auth, provider)
// .then((result) => {
//     const user = result.user
//     console.log(user);
//     // location.replace("./index.html")

// }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.mesage
// })   
// }

// onAuthStateChanged(auth, (user) =>{
// if(user) {
//     alert("You have signed in ")
//     location.replace("index.html")
    

// }
// })

// signInButton.addEventListener("click", userSignIn);

  