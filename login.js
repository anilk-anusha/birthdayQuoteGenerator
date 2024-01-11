import firebaseConfig from "./config.js";

firebase.initializeApp(firebaseConfig);
const refDatabase = firebase.database().ref();

//=>Assignment Requirements: Use Firebase Auth to store user email and password 
const auth = firebase.auth();

//Login functionality 
const loginEmail = document.getElementById("emailLogin");
const loginPassword = document.getElementById("passwordLogin");
const loginBtn = document.getElementById("loginbtn");

//Adding an event handler for the Login button
loginBtn.addEventListener('click', e => {
    e.preventDefault();
    //read values on button click
    const email = loginEmail.value;
    const password = loginPassword.value;

    console.log(email, password);

    // REF: https://stackoverflow.com/questions/38352772/is-there-any-way-to-get-firebase-auth-user-uid
    // REF: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
    // REF: https://www.w3schools.com/jsref/jsref_getdate.asp
    // REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

    auth.signInWithEmailAndPassword(email, password)
        .then((credential) => {
            console.log("User Logged In!", credential)
            refDatabase.get().then(data => {
                    console.log(data.val()[credential.user.uid])
                    const bday = data.val()[credential.user.uid].birthdate
                    const name = data.val()[credential.user.uid].name

                    sessionStorage.setItem("bday", bday)
                    sessionStorage.setItem("name", name)
                    
                    const d = new Date();
                    const todaysDate = new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))

                    const month = bday.split('-')[1];
                    const day = bday.split('-')[2];
                    const userBday = new Date(Date.UTC(d.getFullYear(), month - 1, day));

                    // call setHours to take the time out of the comparison
                    console.log(userBday.toISOString(), todaysDate.toISOString(), userBday.toISOString() == todaysDate.toISOString())
                    if(userBday.toISOString() == todaysDate.toISOString()) {
                        // Date equals today's date
                        window.location.href = "birthday.html";
                    } else {
                        window.location.href = "countdown.html";
                    }
                }
            )
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
    const id = "uu id_" + (String(Math.floor(Math.random() * 10000000)));
    console.log(id);
    return id;
}
