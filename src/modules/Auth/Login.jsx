import { useState } from "react";
// import { handleLogin, setTokens } from "./Api";
import { useAuth } from "./Auth";




function Login({onLogin}) {
    const {doLogin} = useAuth()

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleClick = async () => {
        doLogin(email, password)

        //    const login = await handleLogin(email,password);
        //    if(login.status === 200){
        //         setEmail("")
        //         setPassword("")
        //         setTokens(login.data.data.accessToken)
        //         onLogin(login.data.data.accessToken)
        //         alert(login.data.message)
        //    }else{
        //     const {email=[],password=[]} = login.data.errors;
        //     const err = [...email,...password];
        //     alert(err.join("\n"));
        //    }
    }

    return (
        <div className="container">
            <h1 className='text-center m-10 font-bold text-3xl'>Login</h1>
            <div className="flex flex-col items-center">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input w-[80%]"></input>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input w-[80%]"></input>

                <button onClick={handleClick} className="bg-blue-400 text-black text-lg rounded-lg px-5 py-3 mt-4" >Submit</button>

            </div>
        </div>


    )
}

export default Login;