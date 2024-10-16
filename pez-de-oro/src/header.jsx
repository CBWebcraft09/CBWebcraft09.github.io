import './header.css'
import {BotonWatsap} from './botonWatsap'

export function Header(){
    return <div className="header-image">

      <div className="container-letras">
        <h1 className='pezDeOro'>Pez de oro</h1>
        <h3 className='letras'>Restaurante - Cevicheria</h3>
        <BotonWatsap/>
        <p className='letras2'>Ubicado frente a la Backus restaurante variedad
        de platillos<br/>Menus-Bebidad-Postres</p>
      </div>
  </div>
}