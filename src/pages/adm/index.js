import { useLocation } from "react-router-dom";
import Welcome from "../../components/welcome";
import '../adm/index.scss';


export default function Adm(){
  

    let location = useLocation();

    console.log(location.state);

return(

    <div className="adm">
        <div className="faixa">
<Welcome/>
        </div>
        <div className="container">
        <div className='left'>
        <div className='textos'>

<<<<<<< HEAD

<h2>ADMINISTRAÇÃO</h2>
=======
<h1>SEU RESULTADO. . .</h1>

{location.state?.length && location.state.map(item =>
        <div>{item}</div>
      )} 
>>>>>>> 784853822e3a06ffbedc355e5b9de6e734fdfde3
      

      
</div>
     
     <div className='pontuacao'>

      <h5>SUA PONTUAÇÃO</h5>
     
     <div className="caract">
<h4> CARACTERÍSTICAS DE ADMINISTRAÇÃO</h4>

<p>Parabéns, o administrador é uma pessoa organizada e planejada, que sabe lidar bem com metas, objetivos, prazos, planilhas, relatórios, diferentes demandas e possíveis contratempos, é proativo, flexível, criativo e inovador. É ético, líder, sabe se comunicar bem, é disciplinado, integra bem a teoria e a prática, é crítico e reflexivo, além de ser um tomador de decisões, está antenado em tudo o que acontece no mundo, tem uma visão de futuro aguçada e é informado.</p>
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