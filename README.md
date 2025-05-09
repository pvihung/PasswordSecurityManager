# Password Security Manager


**Group Members:** Hung Pham, Justin Dam, Tony Fang

**Course:** CS157A 

**Instructor:** Tahereh Arabghalizi  

---
## Project Overview
This project aims to develop a secure password management system. The system will allow users to safely store and retrieve their account credentials and associated passwords with ease.

---
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
Please use ***npm install react*** in terminal to download React

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---
# Dependencies and required software
1. **JDK and Build:** Java 21 - Maven 4
2. **Web/API framework:** Spring Boot 3.3
3. **Database:** MySQL 8.4
4. **Frontend runtime:** Node.js 20
5. **Frontend framework:** React 18  

---
***Note:***
This project can work perfectly without sample data. However, we also provide you with our sample data to use and test on. The sample data will be stored in **Sample_Data** folder (as CSV) or SQLScript (as SQL Text File).

___
#Instructions to Run
**1. Clone this GitHub repository**

**2. There are 2 key source directories: JavaBackend and ReactFrontend:**

&emsp;**In your IDE (or other Java Runtime Environment), 
run AuthenticatorCs157AApplication.java to establish the server connection.**

***Note:***
The server connection is described under the `application.properties` file 
in the resources directory. By default, a MySQL connection to our server is 
set up, but users can replace the credentials with their own database and 
account login to allow the application to connect to a different server.

&emsp;**From command line, change to the ReactFrontend directory and run 
`npm start` to launch the web application.**