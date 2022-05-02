// needed to setup firebase config
import { initializeApp } from 'firebase/app';

// needed for authentication
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

// needed for firestore DB
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAccrN7SMqRVIUkTRgEJ7t8aKwE2gkQB9Y',
    authDomain: 'ecommerce-4f5c6.firebaseapp.com',
    databaseURL: 'https://ecommerce-4f5c6.firebaseio.com',
    projectId: 'ecommerce-4f5c6',
    storageBucket: 'ecommerce-4f5c6.appspot.com',
    messagingSenderId: '626401234010',
    appId: '1:626401234010:web:c111ed8027f04d6a361c63',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// create a provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

// get the Firestore Auth Instance
export const auth = getAuth();

// Google Signin Methods
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, provider);

// instantiate the DB
export const db = getFirestore();

// Create user in firestore db
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if (! userAuth) return;
    // firebase returns a document reference even if there is no document
    const userDocRef = doc(db, 'users', userAuth.uid);
    // returns a snapshot of actual data from the db
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        } catch (error) {
            console.log(`error creating user ${error.message}`);
        }
    }

    // if user data does not exist

    return userDocRef;
};

// Login with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
if(!email || !password) return;
return await createUserWithEmailAndPassword(auth, email, password)
}
