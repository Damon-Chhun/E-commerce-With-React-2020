import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCI8I7MaCD9nOdm5HgzK3nCgm0G6vX2AU",
  authDomain: "commerce-db-2e2be.firebaseapp.com",
  databaseURL: "https://commerce-db-2e2be.firebaseio.com",
  projectId: "commerce-db-2e2be",
  storageBucket: "commerce-db-2e2be.appspot.com",
  messagingSenderId: "726959760723",
  appId: "1:726959760723:web:9b725a199acae52420eda6",
  measurementId: "G-R60GF2SL8S"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message, "error creating user");
    }
    return userRef;
  }

  console.log(snapShot);
};

export const addCollectionAndDocument = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
