import React from 'react';
import { render } from 'react-dom';
import { App } from './App' // não é necessário passar a extensão do arquivo na importação, pos já está configurado no webpack o .jsx

render(<App />, document.getElementById('root'))