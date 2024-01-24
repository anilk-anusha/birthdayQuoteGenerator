# Quirky Quotes - Birthday Quote Generator 

## Overview

This project includes Intermediate JavaScript & Firebase concepts.

## Table of Contents

- [Topics Covered](#topics-covered)
- [TO-DO](#TO-DO)
- [Setup](#setup)
- [Screenshots](#screenshots)
- [Status](#status)
- [References](#references)


## TO-DO

- [x] A sign-up page that takes the user’s name, date of birth, email, and password.
- [x] Use a date picker to take the user’s birthdate
- [x] Using Firebase Auth and Firebase Realtime Database, create the user on sign up and store their name and birthdate
- [x] When the user logs in, check how many days are left before the user’s birthday
- [x] If the user’s birthday is today, display a happy birthday message with their name and a random quote from the https://type.fit/api/quotes API endpoint 
- [x] If the user’s birthday is not today, display the number of days left until their birthday
- [x] Functionality for the user to logout and for existing users to login


 
## Technologies

- HTML5
- CSS3
- JavaScript ES6
- Firebase


## Screenshots

1. Countdown Example 

![Sign Up Page](/assets/signup-page.png)
![Login Page](/assets/login-page.png)
![Countdown Page](/assets/countdown-page.png)

2. Birthday Quote Example 

![Sign Up Page for Birthday](/assets/signup-page-for-birthday.png)
![Login Page for Birthday](/assets/login-page-for-birthday.png)

![Birthday Quote Page](/assets/birthday-quote-page.png)

3. Alerts

![Sign Up Page Alert](/assets/signup-alert.png)
![Error Alert](/assets/error.png)

4. Firebase Auth and Realtime Database dashboard

![Firebase Auth dashboard](/assets/firebase-auth.png)
![Firebase Realtime Database dashboard](/assets/firebase-realtime-db.png)

## Setup


### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Visual Studio Code](https://code.visualstudio.com/)

### Firebase Project Setup

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the instructions to create a new Firebase project.

2. **Enable Firebase Authentication:**
   - In the Firebase Console, navigate to "Authentication" and enable the authentication method you want to use (e.g., Email/Password, Google Sign-In, etc.).

3. **Set Up Realtime Database:**
   - In the Firebase Console, navigate to "Database" and create a Realtime Database.
   - Set up the rules for your database. For testing purposes, you can start with allowing read and write access to all.

4. **Get Firebase Config:**
   - In the Firebase Console, go to "Project settings" (gear icon).
   - Under the "General" tab, find the Firebase SDK snippet and copy the configuration object.

### Project Initialization

1. **Create a new project:**
   - Open VS Code and create a new folder for your project.

2. **Initialize npm:**
   - Open the terminal in VS Code and run the following command to initialize npm:
     ```bash
     npm init -y
     ```

3. **Install Firebase tools:**
   - Install the Firebase CLI globally by running:
     ```bash
     npm install -g firebase-tools
     ```

4. **Log in to Firebase:**
   - Run the following command to log in to Firebase:
     ```bash
     firebase login
     ```

5. **Initialize Firebase in your project:**
   - Run the following command to initialize Firebase in your project and follow the prompts:
     ```bash
     firebase init
     ```
     - Choose "Firestore" and "Functions" when prompted. Select the Firebase project you created earlier.

### Code Integration

1. **Install Firebase SDK:**
   - Install the Firebase SDK in your project:
     ```bash
     npm install firebase
     ```

2. **Write Firebase Authentication Code:**
   - Write your authentication code using the Firebase Auth SDK in your project.

3. **Write Realtime Database Code:**
   - Write the code to interact with the Firebase Realtime Database using the Firebase Realtime Database SDK.

### Testing Locally

1. **Run your project locally:**
   - Use the following command to run your project locally:
     ```bash
     npm run serve
     ```
   - This will start a local development server.

2. **Test Authentication and Database Interaction:**
   - Open your browser and go to the specified localhost address to test your Firebase Authentication and Realtime Database interactions.

### GitHub Setup

1. **Initialize Git:**
   - If you haven't already, initialize a Git repository in your project folder:
     ```bash
     git init
     ```

2. **Create a `.gitignore` file:**
   - Create a `.gitignore` file and add entries for files and directories you don't want to include in your Git repository. For Node.js projects, you can use [Node.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) as a template.

3. **Commit and Push:**
   - Add, commit, and push your code to GitHub:
     ```bash
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-repository-url>
     git push -u origin master
     ```

Now, your GitHub project is set up with Firebase Auth and Firebase Realtime Database integration, and you can continue developing and deploying your application.


## Status

Project Status: Completed

## References

https://firebase.google.com/
