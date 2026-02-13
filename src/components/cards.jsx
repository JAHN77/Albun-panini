import React from 'react';
import { Link} from 'react-router-dom';

function Cards({imgSrc, name}) {
  return (
    <Link 
      to={"/descripcion"} 
      className="block group w-50 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
    >
      <div className="flex justify-center items-center w-50 h-60 bg-gray-200 border border-gray-300 rounded-lg hover:shadow-xl cursor-pointer">

        <div className="w-45 h-45 ">
          

          <div className='w-full h-full'>
            <img className='w-full h-full object-cover rounded-xl' src={imgSrc} alt="imagen no disponible" />

          </div>

          <div className='w-full text-center'>
            <p>{name}</p>
            
          </div>
        </div>

      </div>
    </Link>
  );
}

export default Cards;