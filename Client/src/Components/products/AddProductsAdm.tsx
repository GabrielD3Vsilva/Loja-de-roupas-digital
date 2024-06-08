import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function AddProductsAdm ( ) {
    const navigate = useNavigate( );
    const [title, setTitle] = useState <any> ( );
    const [description, setDescription] = useState <any> ( );
    const [image, setImage] = useState <any> ( );
    const [value, setValue] = useState <any> ( );

    const handleProduct = async (e: any) => {
        e.preventDefault( );

        await axios.post('http://localhost:8080/getProductsInfo', JSON.stringify({title: title, description: description, image: image, value: value}), {
            headers: {"Content-Type": "application/json"}
        }).then(()=>{
            navigate('/homeAdm');
        })
        .catch((error)=>console.log(error));
    }

    return (
        <section className="bg-white flex justify-center">
            <div className="bg-red-800 mt-20 text-white flex-col justify-center text-center py-10 px-10">
                <h1 className="text-lg md:text-2xl mb-3">Adicione produto</h1>
                <form className="flex flex-col gap-3" onSubmit={(e)=>handleProduct(e)}>
                    <input type="text" placeholder="Título do produto" className="py-1 text-center text-gray-700"
                    onChange={(e)=>setTitle(e.target.value)}
                    />

                    <input type="text" maxLength={94} placeholder="Descreva o produto" className="py-1 text-center text-gray-700" 
                    onChange={(e)=>setDescription(e.target.value)}/>

                    <input type="number" placeholder="Preço em reais" className="py-1 text-center text-gray-700" 
                    onChange={(e)=>setValue(e.target.value)}/>

                    <input type="text" placeholder="Coloque a url da imagem: " className="py-1 text-center text-gray-700" 
                    onChange={(e)=>setImage(e.target.value)}/>

                    <input type="submit" value="Adicionar" className="px-2 bg-red-950 py-2 transition-all hover:bg-red-600 font-semibold" />

                    <Link to="/homeAdm" className="px-2 text-center bg-red-950 py-2 transition-all hover:bg-red-600 font-semibold">Voltar ao inicio</Link>
                </form>
            </div>
        </section>        
    )
}

export default AddProductsAdm