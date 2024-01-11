import firebaseConfig from "./config.js";

firebase.initializeApp(firebaseConfig);

//REF: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
const bday = sessionStorage.getItem("bday");
const countdown = document.getElementById("countdown");
const logoutBtn = document.getElementById("logoutBtn");

// Getting today's date
// REF: https://stackoverflow.com/questions/8215556/how-to-check-if-input-date-is-equal-to-todays-date 
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// REF: https://stackoverflow.com/questions/36876583/why-new-date-set-as-today-gives-back-yesterday
// REF: https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates


let todaysDate = new Date().setHours(0,0,0,0);
const currentYear = new Date().getFullYear()

let userBday = new Date(bday).setFullYear(currentYear);


// =>Assignment Requirements: If the user’s birthday is not today, display the number of days left until their birthday. 
// =>Assignment Requirements: When the user logs in, check how many days are left before the user’s birthday.

const countdownVal = Math.round((userBday - todaysDate) / (1000 * 60 * 60 * 24))
console.log(countdownVal);

countdown.innerHTML = countdownVal;

//=>Assignment Requirements: You should also have functionality for the user to logout and for existing users to login 
logoutBtn.addEventListener("click", () => {
    sessionStorage.clear()
    window.location.href = "login.html";

})