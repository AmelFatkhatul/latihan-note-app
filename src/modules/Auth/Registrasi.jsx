import { useState } from "react";
import { Register, setTokens } from "../config/Api";
// import { Register, setTokens } from "../Api";

function Registrasi() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = async () => {
        const apiRegis = await Register(name,email,password);
        if(apiRegis.status === 201){
            setName("")
            setEmail("")
            setPassword("")
            alert(apiRegis.data.message)
        }else{
            const {name= [],email = [], password = []} = apiRegis.data.errors;
            const err = [...name,...email,...password]
            alert(err.join("\n"));
        }
    }

    return (
        <div className="container">
        <h1 className='text-center m-5 font-bold text-3xl'>Registrasi</h1>
        <div className="flex flex-col  items-center">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nama" className="input w-[80%]"></input>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="input w-[80%]"></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="input w-[80%]"></input>

            <button onClick={handleRegister} className="bg-blue-400 text-black text-lg rounded-lg px-5 py-3 mt-4" >Registrasi</button>

        </div>
    </div>


    )
}

export default Registrasi;