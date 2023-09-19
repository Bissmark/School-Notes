import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthPage = ({ setUser }) => {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <main>
            <h1>{showSignup ? 'Log In Page' : 'Sign Up Page'}</h1>
            <button onClick={() => setShowSignup(!showSignup)}>{showSignup ? 'Log In' : 'Sign Up'}</button>
            { showSignup ? 
                <SignUpForm setUser={setUser} /> 
                : 
                <LoginForm setUser={setUser} /> 
            }
        </main>
    );
}

export default AuthPage;