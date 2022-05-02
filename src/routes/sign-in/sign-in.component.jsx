import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignupForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign-In Page</h1>
            <button onClick={logGoogleUser}>SignIn with Google Popup</button>
            <SignupForm />
        </div>
    );
};
export default SignIn;
