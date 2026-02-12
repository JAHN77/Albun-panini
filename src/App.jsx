import { Link } from 'react-router-dom'
import Cards from './components/cards'

function App() {
  return (
    <div>
      <h1 class=''>Bienvenido a mi App</h1>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/contacto"> Ir a Contacto</Link>
      </nav>
      <div>
        <Cards imgSrc="https://www.shutterstock.com/shutterstock/photos/2538919491/display_1500/stock-photo-a-small-green-plant-being-held-gently-in-cupped-hands-symbolizing-environmental-care-and-2538919491.jpg" name="Ejemplo de Imagen" />
      </div>
      
    </div>
  )
}

export default App
