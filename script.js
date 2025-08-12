import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCG2qEzBgb9mhyWAykO6OApPSyOlkLHAH8",
  authDomain: "neardyrush.firebaseapp.com",
  databaseURL: "https://neardyrush-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "neardyrush",
  storageBucket: "neardyrush.firebasestorage.app",
  messagingSenderId: "130401101856",
  appId: "1:130401101856:web:577aaa770dd08d38deb445",
  measurementId: "G-22CGSBLNK4"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const auth = getAuth();

document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(userCredential.user).then(() => {
        message.textContent = "Verification email sent. Please check your inbox. if you can't see verification email, please check your spam";
      });
    })
    .catch((error) => {
      message.textContent = error.message;
    });
});
