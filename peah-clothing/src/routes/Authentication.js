import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

import '../styles/Authentication.styles.scss'
const Authentication = () => {
  return (
    <div className="authentication-container">
      {/* <h1>Sign In</h1> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
