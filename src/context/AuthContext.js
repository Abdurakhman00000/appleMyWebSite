import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../FireBase';



const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT = {
    user: null,
}

const reducer = (state = INIT, action) => {
    switch (action.type) {
        case "GET_USER":
            return {...state, user: action.payload}
    
        default:
            return state;
    }
}


const AuthContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT)


    const googleProvider = new GoogleAuthProvider();


    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    }


    function getUser() {
        return onAuthStateChanged(auth, (user) => 
        dispatch({
            type: "GET_USER",
            payload: user,
        }))
    }


    useEffect(() => {
        getUser()
    }, [])


    const values = {
        register,
        signInWithGoogle,
        user: state.user,
    };
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;