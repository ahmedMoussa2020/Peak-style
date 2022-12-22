import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase";

const Authentication = () => {


  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
