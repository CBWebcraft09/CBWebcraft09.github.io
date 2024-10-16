/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar'
import {Header} from './header'
import {Card} from './card'
import { Acordation } from './acordation'
import {Boton} from './boton'


ReactDOM.createRoot(document.getElementById('root')).render(
  //usar esta etiqueta una especie de codigo q se va ejecutar en desarollo 
  //para saver si estas escriendo codigo correcto en REACT 😱😅
  //TE DA UNAS RECOMENDACIONES EL PROPIO ENTORNO DE DESAROLLO para corregir unos errores😊👌 
  //DEJARLO AHI ES BUENA PRACTICA 👌👌😊
  <React.StrictMode>
    
    <Header/>
    <Card comida1='SEGUNDO ESTOFADO' comida2='LOMO SALTADO' comida3='CEVICHE MIXTO'/>
    <Acordation/>
    <Boton/>
    
  </React.StrictMode>
)
