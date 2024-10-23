import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBtiTgZQdhbWD305XWvA0pEJw7qvw5dIeY",
    authDomain: "mernblog-79b30.firebaseapp.com",
    projectId: "mernblog-79b30",
    storageBucket: "mernblog-79b30.appspot.com",
    messagingSenderId: "282147305118",
    appId: "1:282147305118:web:b8f2a91675d2acdae02d8f"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}