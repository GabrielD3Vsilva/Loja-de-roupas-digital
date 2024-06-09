import {useNavigate} from 'react-router-dom';
import axios from 'axios';

type ProductsInfo = {
    title: string,
    value: number,
    image: string,
    description: string,
    isAdm: boolean
}

function ProductItem ({title, value, image, description, isAdm}: ProductsInfo) {
    const navigate = useNavigate( );

    const redirectToDescription = ( ) => {
        navigate('/description', {state: {
            title, value, image, description
        }})
    }

    const deleteProduct = async ( ) => {
        await axios.post('http://localhost:8080/deleteProduct', JSON.stringify({title: title, value: value, image: image, description: description}),
        {
            headers: {"Content-Type": "application/json"}
        }).then(
            (response) => {
                console.log(response.data);
                window.location.reload( );
            }
        ).catch((error)=>console.log('erro ao deletar produto: ', error));
    }

    return (
        <section className="px-8 border-2 border-black text-center py-10 flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-red-600
            ">
                {title}
            </h3>

            <h4 className="text-2xl font-black">
                {value} Reais
            </h4>

            <h3 className="flex justify-center">
                <img src={image} className='w-40 h-52'/>
            </h3>

            <button onClick={( )=>redirectToDescription( )} className="bg-red-800 px-2 py-1 text-white text-lg transition-all ease-in-out hover:bg-red-400" >
                Ver mais detalhes
            </button>

            {isAdm? 
            <button onClick={( )=>deleteProduct( )} className="bg-red-800 px-2 py-1 text-white text-lg transition-all ease-in-out hover:bg-red-400" >
            Deletar produto
            </button>
            :<></>}
        </section>
    )
}

export default ProductItem;