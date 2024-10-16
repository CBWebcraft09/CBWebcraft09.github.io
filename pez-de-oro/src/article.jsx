/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


export function Article(props){
    return <div class="row g-0 bg-body-secondary position-relative" style={{borderRadius:'2em'}}>
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src={props.imagen} class="w-100" alt="ceviche" style={{borderRadius:'2em'}}/>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and were using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
}