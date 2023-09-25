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


  let pontuacaoinfo=0;
  let pontuacaocv=0;
  let pontuacaoadm=0;
  let pontuacaosec=0;


  function Contador() {
    for (let item = 0; item < location.state.length; item++) {
      {
        let i = location.state[item];

        if (i=='Administração') {
          pontuacaoadm++;
        }

        if (i=='Informática') {
         pontuacaoinfo++;
        }

        if (i=='Comunicação Visual') {
          pontuacaocv++;
        }
        if (i=='Secretariado') {
         pontuacaosec++;
        }
      }

    }
    
  }

  function mostrarCurso() {
    let cursos = agrupar(location.state);
    let maior = verMaior(cursos);
    Contador()

    switch (maior.nome) {
      case 'Administração':
        navigate('/administracao', {state: {
          adm: pontuacaoadm,
          cv: pontuacaocv,
          info: pontuacaoinfo,
          sec: pontuacaosec
        }});
        break;

      case 'Informática':
        navigate('/informatica', {state:{
          adm: pontuacaoadm,
          cv: pontuacaocv,
          info: pontuacaoinfo,
          sec: pontuacaosec
        }});
        break;

      case 'Secretariado':
        navigate('/secretariado', {state:{
          sec: pontuacaosec,
          adm: pontuacaoadm,
          cv: pontuacaocv,
          info: pontuacaoinfo         
        }});
        break;

      case 'Comunicação Visual':
        navigate('/comunicacao', {state:{
          cv: pontuacaocv,
          sec: pontuacaosec,
          adm: pontuacaoadm,
          info: pontuacaoinfo
        }});
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