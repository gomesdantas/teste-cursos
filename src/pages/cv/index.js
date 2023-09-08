import Welcome from "../../components/welcome";
import '../cv/index.scss';


export default function Cv(){
  


return(

    <div className="cv">
        <div className="faixa">
<Welcome/>
        </div>
        <div className="container">
        <div className='left'>
        <div className='textos'>

<h1>COMUNICAÇÃO VISUAL</h1>


</div>
     
     <div className='pontuacao'>

      <h5>SUA PONTUAÇÃO</h5>
     <div className="caract">
     
<h4> CARACTERÍSTICAS DA COMUNICAÇÃO VISUAL</h4>
<p> Parabéns! Quem cursa Comunicação visual, são pessoas criativas, que prezam por um bom trabalho e entregam tudo de si em um projeto. Pessoas de comunicação visual tem a capacidade de se comunicar através de elementos gráficos, que costuma utilizar as cores, imagens, movimentos, formas e desenhos com efeitos que ajudam na compreensão da informação. O que é muito importante, porque pode explicar conceitos mais complexos de forma clara e persuasiva.</p>
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