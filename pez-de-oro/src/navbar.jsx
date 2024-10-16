

function NavBar(){
    return<ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Inicio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Menus</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Entradas</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" aria-disabled="true">Bebidas</a>
    </li>
  </ul>
}

export default NavBar;

