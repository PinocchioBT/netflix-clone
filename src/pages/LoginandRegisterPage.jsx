import { auth } from "../../utils/firebase";
import "./RegisterPage.css";
import { useRef } from "react";
import { Alert } from "antd";

function RegisterPage() {


  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
     Alert(error.message)
    })
   
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value  
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
     Alert(error.message)
    })
  };

  return (
    <div className="registerPage">
      <form>
        <h1>Sign In</h1>
        <input  ref={emailRef} type="email" placeholder="Email" />
        <input  ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="new-to-netflix">New to Netflix? </span>
          <span className="sign-up-link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default RegisterPage;
