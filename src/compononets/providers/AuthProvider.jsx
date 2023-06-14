import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebse/firebse.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // For Sign Up 
    const creatUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

        // For Sign In
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // For Sign Out 
    const logOut = () =>{
      return signOut(auth);  
    }

    // observe user auth state 
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
        setUser(currentUser);
        setLoading(false);
       }));

    //    stop observing while unmounting
       return ()=>{
        return unsubscribe();
       } 
    }, [])


    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;