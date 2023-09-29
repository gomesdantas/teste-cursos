
import './index.scss';
import Welcome from "../components/welcome.js";
import {Link} from "react-router-dom"

export default function Quiz() {
  return (
    <div className="quiz">

      <div className='faixa'>
      <Welcome/>
      </div>

      <div className='meio'>
      <div className='container'>
      <div className='texto'>
        <h1>TESTE</h1> 
        <h2 id="texto2">VOCACIONAL</h2>
        <p>Com esse teste você poderá ver com qual dos cursos técnicos mais se identifica. Clique no botão abaixo para começar!</p>

<Link to={'/teste'}>
  <button id='teste-botao' className='teste-botao'>INICIAR TESTE</button>

</Link>
    
      </div>
<img id='image' className='image' src="/assets/images/profis-removebg-preview.png" alt="" />
     </div>
      </div>
    
      
    
    </div>
  );
}


