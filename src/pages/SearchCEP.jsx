import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/main.css";
const SearchCEP = () => {
  const [street, setStreet] = useState('');
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${street}/json/`);
      const data = await response.json();
      console.log(data);
      if (data.cep) {
        setResults([
          {
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf,
            cep: data.cep,
          },
        ]);
      } else if (Array.isArray(data)) {
        setResults(data);
      }
    } catch (error) {
      console.log(error);
    }

    setHasSearched(true);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <Link to="/" className="absolute top-0 left-0 m-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Voltar</button>
      </Link>

      <div className="flex flex-col items-center">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Digite o CEP"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>

        {hasSearched && results.length === 0 && (
          <div className="text-gray-700 mt-4">Nenhum resultado encontrado.</div>
        )}

        {results.length > 0 && (
          <div className="mt-4">
            {results.map((result) => (
              <div key={result.cep} className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-gray-700 font-bold">CEP: {result.cep}</p>
                <p className="text-gray-700"><span className="font-bold">Logradouro:</span> {result.logradouro}</p>
                <p className="text-gray-700"><span className="font-bold">Bairro:</span> {result.bairro}</p>
                <p className="text-gray-700"><span className="font-bold">Cidade:</span> {result.cidade}</p>
                <p className="text-gray-700"><span className="font-bold">UF:</span> {result.uf}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCEP;
