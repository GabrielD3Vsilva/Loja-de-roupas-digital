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
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                        <ProductItem title={'teste'} value={10} image={'teste'}/>
                    </section>
                </div>
                
            </main>
        </div>
    )
}

export default Home;