

function Author() {

     return (
          <main className="author">
               
               <div className="author-info-container">
                    <img src="src/images/author_image.jpg"/>
                    <div className="author_info">
                         <h2>Rafael Vizú</h2>
                         <hr/>
                         <p>Graduando Ciência da computação</p>
                         <hr/>
                         <a href="https://www.linkedin.com/in/rafael-vizu/" target='_blank' rel="external">Linkedin</a>
                         <a href="https://github.com/rafaelvizu/" target='_blank' rel="external">GitHub</a>
                    </div>
               </div>

               <div className="author_sobre_projeto">
                    <h3>Sobre esse projeto</h3>
                    <hr/>
                    <p>
                         Projeto feito em react.js, onde tento focar mais no desing. Aqui temos um site responsivo, que pode
                         ser acessado de qualquer aparelho.
                    </p>
               </div>

          </main>
     )
}



export default Author