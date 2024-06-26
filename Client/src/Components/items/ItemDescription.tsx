import {useLocation} from 'react-router-dom'
import {Link} from "react-router-dom";
import axios from 'axios';

function ItemDescription ( ) {
    const locationRef = useLocation( );
    const infoFromProduct = locationRef.state;

    const RedirectToMercadoPago = async ( ) => {
        const title = infoFromProduct.title;
        const value = infoFromProduct.value;
        const image = infoFromProduct.image;
        const description = infoFromProduct.description;;

        const objectInfo = {title: title, value: value, image: image, description: description}
        console.log({title, value, image, description});

        await axios.post('http://localhost:8080/payment', JSON.stringify(objectInfo), {
            headers: {"Content-Type": "application/json"}
        }).then((response)=>{
            window.location.href = response.data.init
        })
        .catch((error)=>console.log(error));

        
    }

    // serão permitidas descrições de até 94 caracteres

    return (
        <div className='h-screen w-screen'>
            <header className='bg-red-800 py-8 text-center'>
                <h1 className='text-3xl text-white'>Sobre o produto</h1>
            </header>
            
            <section className='py-20 flex justify-center gap-4 flex-wrap'>
                <div className="">
                    <img src={infoFromProduct.image} className='h-56'/>
                </div>

                <div className="text-center max-w-72">
                    <h2 className='text-2xl text-red-800'>{infoFromProduct.title}</h2>

                    <h3 className='text-xl text-black'>preço: {infoFromProduct.value} Reais</h3>

                    <p className='max-w-screen mt-4 text-lg text-center'>
                        {infoFromProduct.description} 
                    </p>

                        <button className='bg-red-800 transition-all ease-in-out text-white px-2 py-1 mt-7 hover:bg-red-500' onClick={( )=>RedirectToMercadoPago()}>
                            Comprar item
                        </button>

                        <Link to="/" className='bg-red-800 transition-all ease-in-out text-white px-2 py-1 mt-1 ml-2 hover:bg-red-500'>Voltar página</Link>

                </div>
            </section>
        </div>
    )
}

export default ItemDescription