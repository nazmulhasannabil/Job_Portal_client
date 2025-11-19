import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth).then(()=>{
            setUser(null);
        }).catch((error)=>{
            console.log(error);
        })
    
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            console.log('auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        } 
    }, [])

    const SignInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const authInfo = {
        createUser,
        loading,
        user,
        signInUser,
        SignInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider