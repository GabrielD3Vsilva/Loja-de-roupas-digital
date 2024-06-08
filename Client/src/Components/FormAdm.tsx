import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function FormAdm ( ) {
    const navigate = useNavigate( );
    const [email, setEmail] = useState <any> ( );
    const [password, setPassword] = useState <any> ( );

    const handleAdm = async (e: any) => {
        e.preventDefault( );

        await axios.post('http://localhost:8080/adm', JSON.stringify({email: email, password: password}), {
            headers: {"Content-Type": "application/json"}
        })
        .then((response)=>{
            console.log(response.data);
            navigate('/'); 
        })
        .catch((error)=>console.log('houve o erro: ', error));

    }

    return (
        <section className="bg-white flex justify-center">
            <div className="bg-red-800 mt-20 text-white flex-col justify-center text-center py-10 px-10">
                <h1 className="text-2xl mb-3">Login para administrador</h1>
                <form className="flex flex-col gap-3" onSubmit={(e)=>handleAdm(e)}>
                    <input type="email" placeholder="Email" className="py-1 text-center text-gray-700"
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" className="py-1 text-center text-gray-700" onChange={(e)=>setPassword(e.target.value)}/>

                    <input type="submit" value="Conectar" className="px-2 bg-red-950 py-2 transition-all hover:bg-red-600 font-semibold" />

                    <Link to="/" className="px-2 bg-red-950 py-2 transition-all hover:bg-red-600 font-semibold">Voltar ao inicio</Link>
                </form>
            </div>
        </section>
    )
}

export default FormAdm