/* eslint-disable react/prop-types */
import estofado from './assets/estofado.jpg';
import ceviche from './assets/ceviche.jpg';
import lomo from './assets/lomoSaltado.jpg';
export function Card(props){
    return( 

  <div className="card-group " style={{margin:'2em',gap:'2em'}}>
      <div className="card" style={{borderRadius:'3em'}}>
      <img src={estofado} className="card-img-top" alt="..." style={{borderRadius:'3em 3em 0em 0em'}}/>
        <div className="card-body">
          <h5 className="card-title">{props.comida1}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card" style={{borderRadius:'3em'}}>
      <img src={lomo} className="card-img-top" alt="..." style={{borderRadius:'3em 3em 0em 0em'}}/>
        <div className="card-body">
          <h5 className="card-title">{props.comida2}</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card" style={{borderRadius:'3em'}}>
      <img src={ceviche} className="card-img-top" alt="..." style={{borderRadius:'3em 3em 0em 0em'}}/>
        <div className="card-body">
          <h5 className="card-title">{props.comida3}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
  </div>

    )
}