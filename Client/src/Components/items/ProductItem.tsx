import {useNavigate} from 'react-router-dom'

type ProductsInfo = {
    title: string,
    value: number,
    image: string,
    description: string
}

function ProductItem ({title, value, image, description}: ProductsInfo) {
    const navigate = useNavigate( );

    const redirectToDescription = ( ) => {
        navigate('/description', {state: {
            title, value, image, description
        }})
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
                <img src={image}/>
            </h3>


            <button onClick={( )=>redirectToDescription( )} className="bg-red-800 px-2 py-1 text-white text-lg transition-all ease-in-out hover:bg-red-400" >
                Ver mais detalhes
            </button>
        </section>
    )
}

export default ProductItem;