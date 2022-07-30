import { Link } from 'react-router-dom'
import img from "../../images/landscape.png"

function Home() {
     

     return (
          <main className="home">
               <img src={img}/>                  
               <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi illo recusandae asperiores eaque odit modi aliquam dignissimos ut placeat, illum qui suscipit ex necessitatibus accusantium praesentium. Tempore, possimus facere?.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste provident facere similique nostrum, officiis tempore, quos aliquid rem deleniti beatae officia dicta voluptatum nesciunt ea quidem soluta voluptatem expedita corporis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam nostrum repudiandae, beatae pariatur adipisci eveniet quae culpa ipsam perferendis voluptas rerum labore autem similique sint quibusdam reiciendis. In, autem.
               </p>
          </main>
     )
}


export default Home