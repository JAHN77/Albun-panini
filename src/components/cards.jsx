import React from 'react';

function Cards({imgSrc,name}) {
  return (
    <div class=" w-50 h-50 bg-gray-200">
        <div class="w-45 h-45 bg-white text-center">
            <img src={imgSrc} alt={name} />
        </div>
      
    </div>
  );
}

export default Cards;