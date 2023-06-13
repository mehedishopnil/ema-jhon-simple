import React, { createContext } from 'react';


export const AuthContext = createContext(null);

const user = 'Mehedi hasan shopnil';

const AuthProvider = ({children}) => {

    const authInfo = {
        user,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;