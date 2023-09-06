import Welcome from "../../components/welcome";
import '../info/index.scss';

export default function Info(){
  


return(

    <div className="info">
        <div className="faixa">
<Welcome/>
        </div>
        <div className="container">
        <div className='left'>
        <div className='textos'>

<h1>SEU RESULTADO. . .</h1>


</div>
     
     <div className='pontuacao'>

      <h5>SUA PONTUAÇÃO</h5>
     <div className="caract">

    
     
<h4> CARACTERÍSTICAS DE INFORMÁTICA</h4>

<p> Parabéns! Estudantes de informática são aptos a resolver problemas, informatizando e/ou automatizando situações do mundo real em qualquer que seja a área do conhecimento humano. É alguém que gosta de resolver problemas, vencer desafios, conviver com a inovação e deseja contribuir para o progresso do país, desenvolvendo novas tecnologias. 
</p>
</div>
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