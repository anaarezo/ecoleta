import React, { useState } from 'react';
import './App.css';
import Header from './Header';

// imutabilidade/estados são informações mantidas pelo próprio componente - clicou ou preencheu algum input
// JSX Sintaxe de xml dentro do javascript - props atributos que eu quero enviar para o componente
function App() {
  // Retorna sempre array [valor do estado, função para atualizar o valor do estado]
  const [counter, setCounter] = useState(0); 

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`}/>
      
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;