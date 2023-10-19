import "./LoginPage.css"
import RegisterPage from "./RegisterPage"
import { useState } from "react"

function LoginPage() {

    const [logIn, setLogin] = useState(false)

  return (
    <div className="loginPage">
      <div className="loginPage-bg">
        <img 
        className="loginPage-logo"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-bg" />
        <button 
        className="sign-in-button"
        onClick={() => setLogin(true)}>
            Sign In 
        </button>

        <div className="loginPage-gradient">

        </div>

        <div className="loginPage-body">
            {logIn ? (
                <RegisterPage/>
            ) : (
                <>
                <h1>
                    Unlimited movies, TV shows, and more.
                </h1>
                <h2> Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginPage-input">
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button 
                        onClick={() => setLogin(true)}
                        className="loginPage-get-started">
                           GET STARTED
                        </button>
                    </form>
    
                </div>
                
                </>
            )}
           

        </div>
        </div>
        </div>
  )
}

export default LoginPage