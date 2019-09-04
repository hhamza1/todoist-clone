import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBp_1G_SOhrgSRjksNFI6vhmGbWODvLpeY",
    authDomain: "todoist-clone-9cb97.firebaseapp.com",
    databaseURL: "https://todoist-clone-9cb97.firebaseio.com",
    projectId: "todoist-clone-9cb97",
    storageBucket: "",
    messagingSenderId: "594626769890",
    appId: "1:594626769890:web:35276168f98667d9"
});

export {firebaseConfig as firebase};
