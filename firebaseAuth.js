import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  let formSignUp = document.getElementById("Signup");
  let emailSignUp = document.getElementById("a");
  let passwordSignUp = document.getElementById("b");
  console.log(1);
  formSignUp.addEventListener("submit", (e) => {
      console.log(4);
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,emailSignUp.value, passwordSignUp.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Đăng ký thành công")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode.errorMessage)
        // ..
      });
  });