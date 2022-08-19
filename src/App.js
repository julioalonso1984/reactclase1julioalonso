//import logo from './logo.svg';
import './estilos.css';

function App() {
  let imagen = "heladera.jpg";
  let titulo = "heladera";
  let precio = "$90.000";
  let descripcion = "no frost, inverter";
  const producto = {id:1, image:imagen, title:titulo, price:precio, description:descripcion}

  return (
    <div className="container">
      <h1>Liquidación oferta</h1>
      <p>Ultimos productos disponibles</p>
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
          <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h1>{producto.title}</h1>
          <p>{producto.price}</p>
          <p>{producto.description}</p>
        </div>        
      </div>
      
    </div>
  );
}

export default App;
