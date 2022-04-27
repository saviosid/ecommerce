// needed to setup firebase config
import {initializeApp} from 'firebase/app';

// needed for authentication
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// needed for firestore DB
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAccrN7SMqRVIUkTRgEJ7t8aKwE2gkQB9Y",
  authDomain: "ecommerce-4f5c6.firebaseapp.com",
  databaseURL: "https://ecommerce-4f5c6.firebaseio.com",
  projectId: "ecommerce-4f5c6",
  storageBucket: "ecommerce-4f5c6.appspot.com",
  messagingSenderId: "626401234010",
  appId: "1:626401234010:web:c111ed8027f04d6a361c63"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// instantiate the DB
export const db = getFirestore();

export  const createUserDocumentFromAuth = async (userAuth) => {
    // firebase returns a document reference even if there is no document
    const userDocRef = doc(db, 'users', userAuth.uid);
    // returns a snapshot of actual data from the db
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log(`error creating user ${error.message}`)
        }
    }

    // if user data does not exist

    return userDocRef
}