import {
    getStorage,
    ref,
    uploadBytes,getDownloadURL
  } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";
  
  document.getElementById("update").onclick = async () => {
    let file = document.getElementById("uploadFile").files[0];
    console.log(file);
    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);
  
    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    }; // Upload the file and metadata
    const uploadTask = await uploadBytes(storageRef, file, metadata);
    console.log(uploadTask);
  
    let url = await getDownloadURL(uploadTask.ref);
    console.log(url);
  };