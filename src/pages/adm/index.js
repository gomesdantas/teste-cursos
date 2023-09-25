import { useLocation } from "react-router-dom";
import Welcome from "../../components/welcome";
import '../adm/index.scss';


export default function Adm(){
  

    let location = useLocation();
    let respostasDapessoa = location.state;

    console.log(location.state);

return(

    <div className="adm">
        <div className="faixa">
<Welcome/>
        </div>
        <div id="container" className="container">
        <div className='left'>
        <div className='textos'>
<h2>ADMINISTRAÇÃO</h2>
      
</div>
     
     <div className='pontuacao'>

      <h5>SUA PONTUAÇÃO</h5>
      <h4 id="pot">{respostasDapessoa.adm}/10</h4>
     
     <div className="caract">
<h4> CARACTERÍSTICAS DE ADMINISTRAÇÃO</h4>

<p>Parabéns, o administrador é uma pessoa organizada e planejada, que sabe lidar bem com metas, objetivos, prazos, planilhas, relatórios, diferentes demandas e possíveis contratempos, é proativo, flexível, criativo e inovador. É ético, líder, sabe se comunicar bem, é disciplinado, integra bem a teoria e a prática, é crítico e reflexivo, além de ser um tomador de decisões, está antenado em tudo o que acontece no mundo, tem uma visão de futuro aguçada e é informado.</p>
</div>

     </div>
        </div>

<div id="right" className='right'>
<div className='outros'>
  <h1 id="point">PONTUAÇÃO EM OUTROS CURSOS</h1>

  <div className="outros-curso">
  <p className="azul"> Pontuação em Comunicação Visual: {respostasDapessoa.cv}/10</p>
<p> Pontuação em Secretariado: {respostasDapessoa.sec}/10</p>
<p>  Pontuação em Informática: {respostasDapessoa.info}/10</p>
  </div>


</div>

<div className='conheca'>

  <h1>CONHEÇA NOSSOS CURSOS</h1>
<div className='carac'>
  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/informatica/">
      <div className="redondo">
      <img   className="tamanho" src="./assets/images/computer-solid.svg" alt="" />
      </div>
   
    </a>
    <p>Informática</p>

  </div>

  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/secretariado/">
    <div className="redondo">
    <img  className="tamanho" src="./assets/images/folder-regular.svg" alt="" />
    </div>
   
    </a>
    <p>Secretariado</p>
  </div>

  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/comunicacao-visual/">
    <div className="redondo">
    <img className="tamanho" src="./assets/images/palette-solid.svg" alt="" />
      </div>
   
    </a>
    <p>Comunicação Visual</p>
  </div>

  <div className="img">
    <a href="https://acaonsfatima.org.br/cursos/administracao-de-empresas/">
    <div className="redondo-esse">
    <img className="diminui" src="./assets/images/file-invoice-dollar-solid.svg" alt="" />
      </div>
 
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