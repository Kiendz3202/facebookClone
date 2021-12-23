import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../store/auth-context';
import classes from './Login2.module.css';
import useInput from '../../hooks/use-input';


const AuthForm = () => {
    const ctx = useContext(AuthContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const [confirmError, setConfirmError] = useState(false)
    const navigate = useNavigate()


    const validEmail = (value) => {
        return value.includes('@')
    }
    const validPassword = (value) => {
        return (value.length >= 7)
    }
    // const validConfirm = (value) => {
    //     return (value.length >= 7)
    // }

    const {
        enteredInput: enteredEmail,
        isTouched: emailIsTouched,
        enteredIsValid: emailIsValid,
        hasError: emailHasError,
        handleInput: handleEmail,
        handleBlur: handleBlurEmail,
        reset: resetEmail
    } = useInput(validEmail)

    const {
        enteredInput: enteredPassword,
        isTouched: passwordIsTouched,
        enteredIsValid: passwordIsValid,
        hasError: passwordHasError,
        handleInput: handlePassword,
        handleBlur: handleBlurPassword,
        reset: resetPassword
    } = useInput(validPassword)

    // const {
    //     enteredInput: enteredConfirm,
    //     isTouched: confirmIsTouched,
    //     enteredIsValid: confirmIsValid,
    //     hasError: confirmHasError,
    //     handleInput: handleConfirm,
    //     handleBlur: handleBlurConfirm,
    //     reset: resetConfirm
    // } = useInput(validConfirm)

    let formIsValid = false
    if (emailIsValid && passwordIsValid) {
        formIsValid = true
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!emailIsValid || !passwordIsValid) {
            return;
        }



        if (!isLogin) {
            try {
                setError('')
                setLoading(true)
                await ctx.signup(enteredEmail, enteredPassword)
                navigate('/')
            } catch {
                setError('Something wrong')
            }
            setLoading(false)
        } else {
            try {
                setError('')
                setLoading(true)
                await ctx.login(enteredEmail, enteredPassword)
                navigate('/dashboard')
            } catch {
                setError('Something wrong')
            }
            setLoading(false)
        }
        resetEmail()
        resetPassword()
        // resetConfirm()

    }

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input onBlur={handleBlurEmail} onChange={handleEmail} value={enteredEmail} type='email' id='email' required />
                    {emailHasError ? <p style={{ color: 'white' }}>vui long nhap lai</p> : ''}
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input onBlur={handleBlurPassword} onChange={handlePassword} value={enteredPassword} type='password' id='password' required />
                    {passwordHasError ? <p style={{ color: 'white' }}>vui long nhap lai</p> : ''}
                </div>
                {/* {!isLogin ?
                    <div className={classes.control}>
                        <label htmlFor='confirm'>Confirm password</label>
                        <input onBlur={handleBlurConfirm} onChange={handleConfirm} value={enteredConfirm} type='password' id='confirm' required />
                        {confirmHasError ? <p>vui long nhap lai</p> : ''}
            </div> :
                    ''} */}
                <div className={classes.actions}>
                    {loading ? <p>Loading.....</p> : <button disabled={!formIsValid}>{isLogin ? 'Login' : 'Create Account'}</button>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section >
    );
};

export default AuthForm;