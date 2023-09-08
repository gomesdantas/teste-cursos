import './index.scss';
import Welcome from "../components/welcome.js";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Resultado() {

  let location = useLocation();
  let navigate = useNavigate();



  useState(() => {
    setTimeout(mostrarCurso, 2000);
  }, [])


  function mostrarCurso() {
    let cursos = agrupar(location.state);
    let maior = verMaior(cursos);

    switch (maior.nome) {
      case 'Administração':
        navigate('/administracao');
        break;

      case 'Informática':

        navigate('/informatica');
        break;

      case 'Secretariado':
        navigate('/secretariado');
        break;

      case 'Comunicação Visual':
        navigate('/comunicacao');
        break;

    }
  }




  function agrupar(respostas) {
    let cursos = [];
    for (let item of respostas) {
      let curso = cursos.find(c => c.nome == item);
      if (!curso) {
        cursos.push({ nome: item, qtd: 1 })
      }
      else {
        curso.qtd++;
      }
    }
    return cursos;
  }


  function verMaior(cursos) {
    let maior = { nome: '', qtd: 0 };
    for (let item of cursos) {
      if (item.qtd > maior.qtd)
        maior = item;
    }
    return maior;
  }




  return (

    <div className="pages-resultado">
      <div className='faixa'>
      <Welcome/>
      <p></p>
      </div>
      <div className='analise'>
      
      <p> Analisando o melhor curso para você...</p>
      <i class="fa-solid fa-spinner fa-spin"></i>
      </div>
   
      
    </div>
  )



}