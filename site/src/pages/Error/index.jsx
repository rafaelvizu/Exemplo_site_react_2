import { Link } from 'react-router-dom'


function Error() {

     return (
          <div className='error'>
               <h2>ERRO!</h2>
               <p>
                    Essa página não existe! Volte para <Link to='/' className='link'>Home</Link>
               </p>
          </div>
     )
}


export default Error