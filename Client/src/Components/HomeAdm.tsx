import ProductItem from './items/ProductItem';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function HomeAdm ( ) {
    const [products, setProducts] = useState([]);

    useEffect(( )=>{
        axios.get('http://localhost:8080/findAndReturnProducts')
        .then((response)=>{
            console.log(response.data)
            setProducts(response.data);
        })
        .catch((error)=>console.log(error));
    }, []);

    const renderProducts: any = ( ) => {
        if(!products || products == undefined ) {
            return <h2>Não existem produtos adicionados</h2>
        } else {
            return products.map((product)=>{
                return <ProductItem title={product.title} description={product.description} value={product.value} image={product.image} isAdm={true}/>
            })
        }
    } 

    return (
        <div className="bg-white h-screen w-screen">
            <header className="bg-red-800 px-8 py-8 flex justify-between">
                <h1 className="text-center text-white text-xl md:text-3xl">Fashion project</h1>

                <Link to="/addProduct" className="px-2 text-white bg-red-950 py-2 transition-all hover:bg-red-600 font-semibold">Adicione um produto</Link>
            </header>


            <main>
                <h2 className="mt-8 text-center font-bold text-3xl">Veja o melhor da moda</h2>

            
                <div className="flex justify-center">
                    <section className="flex flex-wrap justify-evenly mt-14 gap-16">
                        {renderProducts( )}
                    </section>
                </div>
                
            </main>
        </div>
    )
}

export default HomeAdm;