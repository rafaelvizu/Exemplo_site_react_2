import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Author from './pages/Author'
import Error from './pages/Error'


function RoutesApp() {


     return (
          <BrowserRouter>
               <Header/>
               <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                    <Route path="/author" element={<Author/>}/>

                    <Route path="*" element={<Error/>}/>
               </Routes>
          
          </BrowserRouter>
     )
}


export default RoutesApp