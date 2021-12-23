import React from 'react'
import { useState, useRef, useContext } from 'react'
import AuthContext from '../../store/auth-context';
import classes from './Login.module.css'



function Login() {
    const authCtx = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const emailInputRef = useRef();
    const passwordInputRef = useRef()

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        setIsLoading(true)
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4tKh4I6kVY9qLDYvDkGyOuKA-Gx1jD4A'

        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4tKh4I6kVY9qLDYvDkGyOuKA-Gx1jD4A'
        };

        try {
            const request = await fetch(
                url,
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            setIsLoading(false)
            if (!request.ok) {
                throw new Error(request.error.message)
            }
            const data = request.json()
            console.log(data)
            authCtx.login(data.idToken)
        } catch (err) {
            alert(err.message)
        }

        // fetch(
        //     url,
        //     {
        //         method: "POST",
        //         body: JSON.stringify({
        //             email: enteredEmail,
        //             password: enteredPassword,
        //             returnSecureToken: true
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // ).then(res => {
        //     setIsLoading(false)
        //     if (res.ok) {
        //         return res.json()
        //     } else {
        //         return res.json().then(data => {
        //             let errorMessage = data.error.message;
        //             throw new Error(errorMessage)
        //         });
        //     }
        // }).then((data) => {
        //     authCtx.login(data.idToken)
        //     console.log(data)
        // })
        //     .catch(err => {
        //         alert(err.message)
        //     });

    }

    const print = (event) => {
        event.preventDefault()
        console.log(authCtx.isLoggedIn)
    }



    return (
        <div className={classes.login}>
            <div className={classes.logo} >
                <img src='data:image/png;base64,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' alt="" />
            </div>
            <section className={classes.auth}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input ref={emailInputRef} type='email' id='email' required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input ref={passwordInputRef} type='password' id='password' required />
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                        {isLoading && <p>Sending request....</p>}
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                        <button onClick={print}>ấn</button>
                    </div>
                </form>
            </section>
        </div>
    )
}




export default Login
