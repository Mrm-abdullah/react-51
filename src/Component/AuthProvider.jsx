import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.config";
import {signOut, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const signInUser = ( email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser)
            console.log('dfgdfdf',curentUser);
        setLoading(false)
        });
        return () =>{
            unSubscribe()
        }
    },[])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
            
    }

    const AuthInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;