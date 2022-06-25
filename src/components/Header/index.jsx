import { Link } from 'react-router-dom'


function Header() {

     return (
          <div>
               <header>
                    <Link to='/' className='link'> <h1>Lorem Ipsum</h1></Link>
               </header>
               <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                    <Link to='/author' className='link'>Autor</Link>
               </nav>
          </div>
     )
}


export default Header