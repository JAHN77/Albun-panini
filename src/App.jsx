import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 class=''>Bienvenido a mi App</h1>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/contacto"> Ir a Contacto</Link>
      </nav>
    </div>
  )
}

export default App
