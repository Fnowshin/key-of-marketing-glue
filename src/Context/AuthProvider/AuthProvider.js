import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user , setUser ] =useState(null);


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const createUser  = (email, password ) => {
      createUserWithEmailAndPassword(auth, email, password )
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword()
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (loggedinUser) => {
            console.log('state changed',  loggedinUser);
            setUser(loggedinUser)
        })
        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = { user, providerLogin, logOut, createUser, signIn}

    return (
        <div>
            <AuthContext.Provider value={ authInfo }>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;