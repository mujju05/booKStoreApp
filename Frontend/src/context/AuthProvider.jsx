import React, { createContext, useContext, useState } from 'react'

export const AuthContext= createContext()  //created context
export default function AuthProvider({children}) { // passing to multiple file i.e children

    const initialAuthUser = localStorage.getItem("Users"); // getting data from browser storage and providing state.
    const [authUser, setAuthUser]=useState(
        initialAuthUser? JSON.parse(initialAuthUser) : undefined
    )
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

  
}

export const useAuth = () => useContext(AuthContext);

// this context is created coz we can used and access are user globally.