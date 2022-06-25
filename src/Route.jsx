import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Author from './pages/Author'


function RoutesApp() {


     return (
          <BrowserRouter>
               <Header/>
               <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                    <Route path="/author" element={<Author/>}/>
               </Routes>
          
          </BrowserRouter>
     )
}


export default RoutesApp