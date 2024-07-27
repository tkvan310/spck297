import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

export function writeUserData(infoUser) {
  const db = getDatabase();
  set(ref(db, 'users/' + infoUser.uid), {
    username: infoUser.username,
    email: infoUser.email,
    img : "https://firebasestorage.googleapis.com/v0/b/sanrphaamr-cu.appspot.com/o/images%2F%E1%BA%A3nh%20profile%20m%E1%BA%B7c%20%C4%91%E1%BB%8Bnh.jpg?alt=media&token=0c65f7e9-2ca7-49eb-b639-5a6bc29db5be",
    
  });
}