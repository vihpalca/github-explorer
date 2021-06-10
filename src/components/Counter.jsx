import React, { useState } from 'react';

export function Counter() {
  //let counter = 0; Utilizar dessa forma sem o useState não funciona pois o react não fica monitorando todas as variaveis de cada componente, essa prática, era uma prática muito ruim chamada de Two-way-data-binding, utilizada pelo angularJs. Então toda vez
  //que for necessário monitoriar uma variavel pois ela poderá ser alterada e sua alteração deverá ser mostrada em tela, é necessário mostrar ao react qual variável é essa. Para isso usamos o useState.
  let [ counter, setCounter ] = useState(0);//Sempre que utilizar uma função do react com use na frente, significa que é um Hooks. A função useState retorna um array com 2 propriedades, uma com o valor e outro uma função para alterar o valor da propriedade
                                              //Utilizamos declarando array então como uma forma de destructuring , assim, pegamos os 2 retornos do useState e passamos para as propriedades que nomeamos dentro do array

  function increment() {
    setCounter(counter + 1);
  }


  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Incrementar
      </button>
    </div>
  );
}