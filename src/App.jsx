import { Link } from 'react-router-dom'
import Cards from './components/Cards'
import { cardsData } from './data'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-center font-bold text-2xl p-5'>Album Panini</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-5'>
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            name={card.name}
          />
        ))}
      </div>

    </div>
  )
}

export default App
