import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext({});

// export function useAuth() {
//     return useContext(AuthContext)
// }

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const [dataPost, setDataPost] = useState()

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout() {
        return signOut(auth)
    }
    function pushData(data) {
        setDataPost(data)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubcribe
    }, [])
    const value = {
        signup,
        currentUser,
        login,
        logout,
        pushData,
        dataPost
    }

    return (
        <AuthContext.Provider value={value}>{!loading && props.children}</AuthContext.Provider>
    )
}

export default AuthContext









// const AuthContext = React.createContext({
//     token: '',
//     isLoggedIn: false,
//     login: (idtoken) => { },
//     logout: () => { }
// });



// export const AuthContextProvider = (props) => {
//     const [token, setToken] = useState('')

//     const userIsLoggedIn = !!token;

//     const loginHandler = (token) => {
//         setToken(token)
//     }

//     const logoutHandler = () => {
//         setToken(null)
//     }

//     const contextValue = {
//         token: token,
//         isLoggedIn: userIsLoggedIn,
//         login: loginHandler,
//         logout: logoutHandler
//     };


//     return (<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>)
// }


// export default AuthContext