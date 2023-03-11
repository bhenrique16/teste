import React from "react";
import { Link } from "react-router-dom";
import imagemCard from '../assets/imgClima.jpg'
import imagemCard2 from '../assets/imgCep.jpg'
import imagemCard3 from '../assets/imgForm.jpg'

import "../styles/main.css";

function Menu() {
  return (
    <div className="text-black min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8">Qual página você quer acessar?</h2>
      <ul className="flex flex-row">
        <li className="mr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div><img className="w-full" src={imagemCard} title="Sunset in the mountains" /></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Buscar Clima</div>
            </div>
            <div className="px-5 pt-2 pb-3">
              <Link to="/clima" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Acessar
              </Link>
            </div>
          </div>
        </li>
        <li className="mr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div><img className="w-full" src={imagemCard2} title="Sunset in the mountains" /></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Buscar CEP</div>
            </div>
            <div className="px-5 pt-2 pb-3">
              <Link to="/cep" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Acessar
              </Link>
            </div>
          </div>
        </li>
        <li className="mr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div><img className="w-full" src={imagemCard3} title="Sunset in the mountains" /></div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Formulário Contato</div>
            </div>
            <div className="px-5 pt-2 pb-3">
              <Link to="/contato" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Acessar
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
