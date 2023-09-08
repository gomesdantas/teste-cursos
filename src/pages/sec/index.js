import Welcome from "../../components/welcome";
import '../sec/index.scss';

export default function Sec(){
  


return(

    <div className="Sec">
        <div className="faixa">
<Welcome/>
        </div>
        <div className="container">
        <div className='left'>
        <div className='textos'>

<h1>SECRETARIADO</h1>


</div>
     
     <div className='pontuacao'>

      <h5>SUA PONTUAÇÃO</h5>
     <div className="caract">

    
     
<h4> CARACTERÍSTICAS DO SECRETARIADO</h4>

<p> Parabéns!O Secretariado é uma carreira que envolve organizar o ambiente de trabalho, atender os clientes, prestar as informações demandadas, arquivar documentos, redigir cartas, ofícios e comunicados. O profissional dessa área precisam ser organizados, ter um pensamento eficaz, adaptabilidade e uma comunicação assertiva. </p>
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