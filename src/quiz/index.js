
import './index.scss';
import Welcome from "../components/welcome.js";

export default function Quiz() {
  return (
    <div className="quiz">

      <div className='faixa'>
      <Welcome/>
      </div>
     <div className='container'>
      <div className='texto'>
        <h1>TESTE</h1> 
        <h2>VOCACIONAL</h2>
        <p>Com esse teste você poderá ver com qual dos cursos técnicos mais se identifica. Clique no botão abaixo para começar!</p>

        <a href='http://localhost:3000/teste'>INICIAR TESTE</a>
      </div>
<img className='image' src="/assets/images/profissoes.png" alt="" />

     </div>
      
    
    </div>
  );
}


