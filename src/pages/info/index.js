import { useLocation } from "react-router-dom";
import Welcome from "../../components/welcome";
import '../info/index.scss';

export default function Info() {
  let location = useLocation();
  let respostasDapessoa = location.state;
  console.log(location.state);

  return (

    <div className="info">
      <div className="faixa">
        <Welcome />
      </div>

      <div className="meio">
      <div id="container" className="container">
        <div className='left'>
          <div className='textos'>

            <h2>INFORMÁTICA</h2>


          </div>

          <div className='pontuacao'>

            <h5>SUA PONTUAÇÃO</h5>
            <h4 id="pot">{respostasDapessoa.info}/10</h4>

            <div className="caract">



              <h4> CARACTERÍSTICAS DE INFORMÁTICA</h4>

              <p> Parabéns! Estudantes de informática são aptos a resolver problemas, informatizando e/ou automatizando situações do mundo real em qualquer que seja a área do conhecimento humano. É alguém que gosta de resolver problemas, vencer desafios, conviver com a inovação e deseja contribuir para o progresso do país, desenvolvendo novas tecnologias.
              </p>
            </div>
          </div>
        </div>

        <div id="right" className='right'>
          <div className='outros'>
            <h1>PONTUAÇÃO EM OUTROS CURSOS</h1>

            <div className="outros-curso">
            <p> Pontuação em Comunicação Visual: {respostasDapessoa.cv}/10</p>
            <p> Pontuação em Secretariado: {respostasDapessoa.sec}/10</p>
            <p>  Pontuação em Administração: {respostasDapessoa.adm}/10</p>

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