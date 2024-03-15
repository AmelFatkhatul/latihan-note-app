import { createContext, useContext, useState } from "react"
import { handleLogin } from "../Api"

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
    const doLogin = async (email, password) => {
        //memanggil api dengan data email& password
        console.log("akan memanggil login dengan:", email, password)
        //memnaggil api menggunakan axios
        const apiResult = await handleLogin(email, password)
        console.log(apiResult)


        //jika berhasil maka setIsLoggedin -> true
        //simpan token ke dalam local storage
        setIsLoggedin(true)
       console.log ("test kepanggil" , isLoggedin)
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

