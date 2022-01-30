import React, { useContext } from 'react';
import Header from '../../components/Header';
import ProjectContext from '../../context/ProjectContext';

function ProjectNew() {
  const { 
    newProject,
    setName_project,
    name_project,
    setDate_initial,
    date_initial,
    setDate_final,
    date_final,
    setValue,
    value,
    setRisk,
    risk,
    setName_participant,
    name_participant,
   } = useContext(ProjectContext);

  return ( 
    <>
      <Header />
      <div className="py-8">
        <form>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 text-center gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-xl font-medium text-lime-200">Nome do Projeto:</label>
                <input
                  type="text"
                  value={name_project}
                  onChange={(e) => setName_project(e.target.value)}
                  className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-xl font-medium text-lime-200">Valor do Projeto:</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-xl font-medium text-lime-200">Data de Início:</label>
                <input
                  type="date"
                  value={date_initial}
                  onChange={(e) => setDate_initial(e.target.value)}
                  className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-xl font-medium text-lime-200">Data de Finalização:</label>
                <input
                  type="date"
                  value={date_final}
                  onChange={(e) => setDate_final(e.target.value)}
                  className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-xl font-medium text-lime-200">Participantes do Projeto:</label>
                <input
                  type="text"
                  value={name_participant}
                  onChange={(e) => setName_participant(e.target.value)}
                  className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                  required
                />
              </div> 

              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-xl font-medium text-lime-200">Risco do Projeto:</label>
                <select
                  value={risk}
                  onChange={(e) => setRisk(e.target.value)}
                  className="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Selecione o Risco">
                    <option defaultValue="DEFAULT">Selecione o risco</option>
                    <option value="0">Baixo</option>
                    <option value="1">Médio</option>
                    <option value="2">Alto</option>
                </select>           
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-center sm:px-6">
            <button onClick={newProject} className="inline-flex justify-center py-5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Criar Projeto
            </button>
          </div>
        </div>
        </form>
      </div>
    </>
   );
}

export default ProjectNew;
