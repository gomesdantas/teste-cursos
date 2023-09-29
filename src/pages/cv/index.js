import { useLocation } from "react-router-dom";
import Welcome from "../../components/welcome";
import '../cv/index.scss';


export default function Cv() {

  let location = useLocation();
  let respostasDapessoa = location.state;

  console.log(location.state);

  return (

    <div className="cv">
      <div className="faixa">
        <Welcome />
      </div>

      <div className="meio">
      <div  id="container" className="container">
        <div className='left'>
          <div className='textos'>

            <h1 id="vc">COMUNICAÇÃO VISUAL</h1>


          </div>

          <div className='pontuacao'>

            <h5 id="sp">SUA PONTUAÇÃO</h5>
            <h4 id="pot" >{respostasDapessoa.cv}/10</h4>
            <div className="caract">

              <h4 id="cv-carac"> CARACTERÍSTICAS DA COMUNICAÇÃO VISUAL</h4>
              <p id="cv-infos"> Parabéns! Quem cursa Comunicação visual, são pessoas criativas, que prezam por um bom trabalho e entregam tudo de si em um projeto. Pessoas de comunicação visual tem a capacidade de se comunicar através de elementos gráficos, que costuma utilizar as cores, imagens, movimentos, formas e desenhos com efeitos que ajudam na compreensão da informação. O que é muito importante, porque pode explicar conceitos mais complexos de forma clara e persuasiva.</p>
            </div>
          </div>
        </div>

        <div id="right" className='right'>
          <div className='outros'>
            <h1>PONTUAÇÃO EM OUTROS CURSOS</h1>
            <div className="outros-curso">
              <p> Pontuação em Administração: {respostasDapessoa.adm}/10</p>
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
    
    </div>
  )
}