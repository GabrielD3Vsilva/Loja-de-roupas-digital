import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import ItemDescription from './Components/items/ItemDescription';
import FormAdm from './Components/FormAdm';

function App ( ) {
  return (
    <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/description" element={<ItemDescription/>}/>
                <Route path="/adm" element={<FormAdm/>} />
            </Routes>
    </BrowserRouter>
  )
}

export default App