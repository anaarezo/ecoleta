import React from 'react';
import './App.css';
import Header from './Header';

// estados são informações mantidas pelo próprio componente - clicou ou preencheu algum input
// JSX Sintaxe de xml dentro do javascript - props atributos que eu quero enviar para o componente
function App() {
  
  let counter = 1;

  function handleButtonClick() {
    counter++;
    console.log(counter);
  }

  return (
    <div>
      <Header title="Hello World"/>
      
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;