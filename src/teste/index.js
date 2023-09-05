import './index.scss';
import Welcome from "../components/welcome.js";

import { data } from '../data/questions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Teste() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState([]);

  const estiloCursorPointer = {
    cursor: 'pointer',
  };
  let navigation = useNavigate();

  function adicionarResposta(curso) {
    setRespostasUsuario([...respostasUsuario, curso]);
    setPerguntaAtual(perguntaAtual + 1);

    if (perguntaAtual == data.length - 1) {
      navigation('/resultado', { state: [...respostasUsuario, curso] })
    }
    
  }
  


  return (
    <div className="page-teste">
      <div className='faixa'>
        <Welcome />
      </div>



      <div className='container'>
        <a href='http://localhost:3000/' className="volta">Voltar</a>
        <div className='questions'>

          <p>{data[perguntaAtual].titulo}</p>
        
          <table >
            <tbody >
              <tr >
                
                <td onClick={() => adicionarResposta(data[perguntaAtual].respostas[0].curso)} style={estiloCursorPointer}>
                  {data[perguntaAtual].respostas[0].texto}
                </td>

                <td onClick={() => adicionarResposta(data[perguntaAtual].respostas[1].curso)} style={estiloCursorPointer}>
                  {data[perguntaAtual].respostas[1].texto}
                </td>

              </tr>
              <tr>

                <td onClick={() => adicionarResposta(data[perguntaAtual].respostas[2].curso)} style={estiloCursorPointer}>
                  {data[perguntaAtual].respostas[2].texto}
                </td>
                
                <td onClick={() => adicionarResposta(data[perguntaAtual].respostas[3].curso)} style={estiloCursorPointer}>
                  {data[perguntaAtual].respostas[3].texto}
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}