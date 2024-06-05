import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import ItemDescription from './Components/items/ItemDescription';

function App ( ) {
  return (
    <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/description" element={<ItemDescription/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App