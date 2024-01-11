import firebaseConfig from "./config.js";

firebase.initializeApp(firebaseConfig);

//REF: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
const name = sessionStorage.getItem("name");
const username = document.getElementById("username");
const quoteContainer = document.getElementById("quoteContainer");
const quoteAuthor = document.getElementById("quoteAuthor");
const logoutBtn = document.getElementById("logoutBtn");


// REF:https://www.epochconverter.com/
//REF: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//=>Assignment Requirements: If the user’s birthday is today, display a happy birthday message with their name and a  random quote from the https://type.fit/api/quotes API endpoint. 
const quoteFunc = async () => {
    const apiQuotes = await fetch('https://type.fit/api/quotes').then(data => data.json())
    const quoteIndex = Math.floor(Math.random() * apiQuotes.length)

    username.innerHTML = name
    quoteContainer.innerHTML = apiQuotes[quoteIndex].text
    quoteAuthor.innerHTML = apiQuotes[quoteIndex].author.split(',')[0]
}

quoteFunc()

//=>Assignment Requirements: You should also have functionality for the user to logout and for existing users to login 
logoutBtn.addEventListener("click", () => {
    sessionStorage.clear()
    window.location.href = "login.html";

})