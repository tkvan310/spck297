
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const SignUp = ( email,password) =>{
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(us// er);
    let infoUser = {
        username: document.getElementById("username").value,
        email: user.email,
    }; alert("Đăng ký thành công")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    alert(" Đăng ký thất bại")
    // ..
  });
}

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    let infoUser = {
username: document.getElementById("username").value,
email: user.email,
    };
    alert(" Đăng nhập thành công")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    alert("Đăng nhập thất bại");
  });
