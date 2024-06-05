import {useLocation} from 'react-router-dom'

function ItemDescription ( ) {
    const location = useLocation( )

    const infoFromProduct = location.state.title;

    return (
        <>
            {infoFromProduct}
        </>
    )
}

export default ItemDescription