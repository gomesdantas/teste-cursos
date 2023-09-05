import './index.scss';
import Welcome from "../components/welcome.js";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Resultado() {
  // const [respostas, setRespostas] = useState()

  let location = useLocation();

  console.log(location.state);

  return (
    <div className="pages-resultado">
      <div className='faixa'>
        <Welcome />
      </div>

      <div className="container">
        <div className='left'>
        <div className='textos'>

<h1>SEU RESULTADO. . .</h1>

{location.state?.length && location.state.map(item =>
        <div>{item}</div>
      )}
</div>
     
     <div className='pontuacao'>

      <h5>SUA PONTUAÇÃO</h5>
     
     
<h4> CARACTERÍSTICAS DO ADMINISTRADOR</h4>


     </div>
        </div>

<div className='right'>
<div className='outros'>
  <h1>PONTUAÇÃO EM OUTROS CURSOS</h1>


</div>

<div className='conheca'>

  <h1>CONHEÇA NOSSOS CURSOS</h1>
<div className='carac'>
  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/informatica/">
    <img  src="./assets/images/info.png" alt="" />
    </a>
    <p>Informática</p>

  </div>

  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/secretariado/">
    <img src="./assets/images/sec.png" alt="" />
    </a>
    <p>Secretariado</p>
  </div>

  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/comunicacao-visual/">
    <img src="./assets/images/cv.png" alt="" />
    </a>
    <p>Comunicação Visual</p>
  </div>

  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/administracao-de-empresas/">
    <img src="./assets/images/adm.png" alt="" />
    </a>
    <p>Administração</p>
  </div>
  </div>
</div>
</div>

      </div>
    </div>
  )



}