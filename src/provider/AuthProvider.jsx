import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

const AuthContext = createContext(null)
const auth = getAuth(app)

const authInfo = {

}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;