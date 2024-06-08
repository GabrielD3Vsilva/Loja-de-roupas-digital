import ProductItem from './items/ProductItem';
import {Link} from 'react-router-dom'

function HomeAdm ( ) {
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
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                        <ProductItem title={'Camiseta branca'} description={'Camiseta branca com tecnologia que desamassa ao colocar ao corpo, e tem propriedades anti-suor'} value={10} image={'https://tse3.mm.bing.net/th?id=OIP._so1t1r-5cZxxMnosl4GmQHaHa&pid=Api&P=0&h=180'}/>
                    </section>
                </div>
                
            </main>
        </div>
    )
}

export default HomeAdm;