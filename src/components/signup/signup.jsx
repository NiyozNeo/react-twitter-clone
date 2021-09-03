import "./signup.css";
import logo from "../../img/twitter-logo-4.png";
import backTwitter from "../../img/back-twitter.png";
import googleLogo from "../../img/google-icon.png";
import appleLogo from "../../img/logo-apple.png";
import { Link } from "react-router-dom";
function Signup() {
  function openModal() {
    let modal = document.querySelector(".modal");
    modal.style.display = "flex";
  }
  return (
    <div className="signup">
      <img
        className="signup__logo"
        src={backTwitter}
        alt="twitter-background"
      />
      <div className="signup__wrapper">
        <img className="signup__img" src={logo} alt="twitter-logo" />
        <p className="signup__headname">Happening now</p>
        <p className="signup__join">Join Twitter today</p>
        <ul className="signup__servs">
          <li className="signup__servs-item">
            <button onClick={openModal} className="signup__servs-link">
              <img src={googleLogo} alt="google logo" /> Sign up with Google
            </button>
          </li>
          <li className="signup__servs-item">
            <button onClick={openModal} className="signup__servs-link">
              <img src={appleLogo} alt="google logo" /> Sign up with Apple
            </button>
          </li>
          <li className="signup__servs-item">
            <button onClick={openModal} className="signup__servs-link">
              Sign up with phone or email
            </button>
          </li>
        </ul>
        <p to="/signup" className="signup__terms">
          By singing up you agree to the{" "}
          <Link className="signup__extralink">Terms of Service</Link> and{" "}
          <Link to="/signup" className="signup__extralink">
            Privacy Policy
          </Link>
          , including{" "}
          <Link to="/signup" className="signup__extralink">
            Cookie Use
          </Link>
          .
        </p>
        <p className="signup__login">
          Already have an account?{" "}
          <Link className="signup__extralink" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
