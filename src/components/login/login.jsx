import { Link } from "react-router-dom"
import logo from "../../img/twitter-logo-4.png"
import "./login.css"
function Login() {
    return (
      <div className="login">
        <img src={logo} alt="twitter logo" />
        <h1 className="login__headname">Log in to Twitter</h1>
        <form className="login__form">
          <input className="login__form-input" required type="text" placeholder="Phone number, email address" />
          <input className="login__form-input" required type="text" placeholder="Password" />
          <button className="login__form-btn" type="submit">Log In</button>
        </form>
        <div className="login__link-wrapper">
          <Link className="login__link" to="/login">Forgot password?</Link>
          <Link className="login__link" to="/signup">Sign up to Twitter</Link>
        </div>
      </div>
    );
  }
  
  export default Login;