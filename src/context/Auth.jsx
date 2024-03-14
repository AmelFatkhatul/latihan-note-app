import { createContext, useContext, useState } from "react"

//nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => { },
    doLogout: () => { },
}

// buat context
const AuthContext = createContext(initialAuthState)

// buat custom hook
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({ children }) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false)

    // funcion
    const doLogin = () => {
        setIsLoggedin(true)
    }

    const doLogout = () => {
        setIsLoggedin(false)
    }

    // return provider
    return (
        <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
            {children}
        </AuthContext.Provider>
    )
}


// export provider
export {AuthProvider, useAuth}

