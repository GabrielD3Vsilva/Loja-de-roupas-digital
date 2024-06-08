import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import ItemDescription from './Components/items/ItemDescription';
import FormAdm from './Components/FormAdm';
import HomeAdm from './Components/HomeAdm';
import AddProductsAdm from './Components/products/AddProductsAdm';

function App ( ) {
  return (
    <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/description" element={<ItemDescription/>}/>
                <Route path="/adm" element={<FormAdm/>} />
                <Route path="/homeAdm" element={<HomeAdm/>}/>
                <Route path="/addProduct" element={<AddProductsAdm/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App