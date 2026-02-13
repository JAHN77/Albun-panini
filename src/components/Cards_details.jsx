import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cardsData } from '../data';

function Cards_details() {
    const { id } = useParams();
    const card = cardsData.find((item) => item.id === parseInt(id));

    if (!card) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold mb-4">Carta no encontrada</h2>
                <Link to="/" className="text-blue-500 hover:underline">Volver al álbum</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <Link to="/" className="self-start px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                Volver
            </Link>

            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
                    <img
                        src={card.imgSrc}
                        alt={card.name}
                        className="w-full max-w-sm rounded-xl shadow-lg object-cover"
                    />
                </div>

                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-2 text-gray-800">{card.name}</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">{card.team}</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">{card.position}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-gray-700">Biografía</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {card.description}
                    </p>

                    <h3 className="text-xl font-semibold mb-3 text-gray-700">Estadísticas</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="block text-gray-500 text-xs uppercase">Velocidad</span>
                            <span className="text-lg font-bold text-gray-800">{card.stats.velocidad}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="block text-gray-500 text-xs uppercase">Tiro</span>
                            <span className="text-lg font-bold text-gray-800">{card.stats.tiro}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="block text-gray-500 text-xs uppercase">Pase</span>
                            <span className="text-lg font-bold text-gray-800">{card.stats.pase}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="block text-gray-500 text-xs uppercase">Regate</span>
                            <span className="text-lg font-bold text-gray-800">{card.stats.regate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards_details;