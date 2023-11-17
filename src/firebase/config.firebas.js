import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { ref, set, child, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
/**
 *
 * @param {*} name
 * @param {*} email
 * @param {*} pass
 * @param {*} photo
 */
const user_data = async (name, email, pass, photo) => {
  const userId = uuidv4();
  set(ref(db, `users/${userId}`), {
    id: userId,
    name: name,
    email: email,
    password: pass,
    photo: photo,
  })
    .then((r) => r)
    .catch((err) => err);
  console.log("success:");
};

const get_User = async (user_and_post = "post") => {
  return get(child(ref(db), user_and_post))
    .then((user) => user.val())
    .catch((err) => err.message);
};

export { db, user_data, get_User, app };
