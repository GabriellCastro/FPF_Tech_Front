import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';

function ProjectList() {
  const { project } = useContext(ProjectContext);
  return (
    <>
      {
        project.map((element) => (
          <div className="py-8" key={element._id}>
            <div className="flex items-center justify-center w-full">
              <div className="w-4/1 ml-2 mr-2 bg-gray-900 p-8 shadow rounded">
                <div className="flex items-center border-b border-gray-200 pb-6">
                  <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt="dog img" className="w-12 h-12 rounded-full" />
                  <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full flex justify-between">
                      <div>
                        <strong className="text-xl font-medium leading-5 text-lime-200 mb-3 mr-5">Nome do Projeto:</strong>
                        <p className="text-xl font-medium leading-5 text-lime-500">{element.name_project}</p>
                      </div>
                      <div>
                        <strong className="text-xl font-medium leading-5 text-lime-200">Participantes:</strong>
                        <p className="text-sm leading-normal pt-2 text-gray-500">{element.name_participant}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-2 mt-6">
                  <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full flex justify-between">
                      <div>
                        <strong className="text-xl m font-medium leading-5 text-lime-200 mb-3">Valor do Projeto:</strong>
                        <p className="text-xl font-medium leading-5 text-lime-500">
                          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.value)}
                        </p>
                      </div>
                      <div>
                        <strong className="text-xl font-medium leading-5 text-lime-200">Risco:</strong>
                        <p className="text-sm leading-normal pt-2 text-gray-500">{element.risk}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around mt-2">
                    <Link to={`/edit/${element._id}`}>
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Editar
                      </button>
                    </Link>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ProjectList;
