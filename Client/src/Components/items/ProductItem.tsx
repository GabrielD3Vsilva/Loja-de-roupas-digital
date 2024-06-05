type ProductsInfo = {
    title: string,
    value: number,
    image: string
}

function ProductItem ({title, value, image}: ProductsInfo) {
    return (
        <section className="w-1/4 border-2 border-black text-center">
            <h3>
                {title}
            </h3>

            <h4>
                {value}
            </h4>

            <h3>
                {image}
            </h3>
        </section>
    )
}

export default ProductItem;