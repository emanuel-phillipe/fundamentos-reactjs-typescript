import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.js'

export function getRndInteger() {
  return Math.floor(Math.random() * (9999999 - 1000000) ) + 1000000;
}

ReactDOM.createRoot(document.getElementById('root')!).render( //PONTO DE EXPLAMAÇÃO FALA PRO TYPESCRIPT QUE ELE EXISTE!!!!
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
