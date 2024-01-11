import firebaseConfig from "./config.js";

firebase.initializeApp(firebaseConfig);


//=>Assignment Requirements: Use Firebase Auth to store user email and password 
const auth = firebase.auth();

//Sign up functionality 

const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const signUpBtn = document.getElementById("signupbtn");

//Adding an event handler for the Sign up button

signUpBtn.addEventListener('click', e => {
    e.preventDefault();
    //read values on button click
    const email = userEmail.value;
    const password = userPassword.value;

    console.log(email, password);

    // Builds an object with data given by the user.
    const obj = {
        name: getFormInput("name"),
        //If the user enters the contact number with hyphen, it will replace the one withhout hyphen. 
        birthdate: getFormInput("birthdate")
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then((credential) => {
            //Calling the post method
            postToFirebase(obj, credential.user.uid);
            document.getElementById("name").value = null;
            document.getElementById("birthdate").value = null;
            console.log("User Created!", credential.user.uid)
            alert("Sign up successful! Please login now.")
            //redirecting to login page
            // window.location.href = "login.html";
        }).catch((error) => {
            console.log("Error", error)
            alert("Oops, something went wrong. Please try again.");
        })    
});


//=>Assignment Requirements: Use Firebase Realtime Database, create the user on sign up and store their name and birthdate.
//Function to return the input value added by the user

function getFormInput(id) {
    return document.getElementById(id).value;
}

function generateId() {
    const id = "uuid_" + (String(Math.floor(Math.random() * 10000000)));
    console.log(id);
    return id;
}

// Function will post the given value passed in object to our database.
// REF: https://firebase.google.com/docs/database/web/read-and-write

function postToFirebase(obj, uid) {
    console.log("postToFirebase")
    const database = firebase.database().ref(uid);

    database.set({
        name: obj.name,
        birthdate: obj.birthdate
    })

}

