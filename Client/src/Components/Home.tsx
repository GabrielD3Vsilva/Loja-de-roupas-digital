import ProductItem from './items/ProductItem';

function Home ( ) {
    return (
        <div className="bg-white h-screen w-screen">
            <header className="bg-red-800 py-8">
                <h1 className="text-center text-white text-3xl">Fashion project</h1>
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

export default Home;