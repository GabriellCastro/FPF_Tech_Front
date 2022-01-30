import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';

function ProjectEdit() {
  // Projeto do id Buscado
  const [project, setProject] = useState([])

  // id da url
  const { id } = useParams();

  useEffect(() => {
    api.get(`/project/${id}`)
      .then((res) => setProject(res.data))
  }, [id]);


  const updateSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.update(`project/update${id}`, project);
    } catch (error) {
      alert("Error ao tentar Editar o Projeto!!")
    }
  }

  const handleValue = (value) => {
    console.log(value)
  }

  if (!project || project.length === 0) return 'Loading...';

  const { name_project, date_initial, date_final, value, risk, name_participant } = project;
  return (
    <>
      <Header />
      {
       console.log(project)
      }
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
                    onChange={(e) => handleValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-xl font-medium text-lime-200">Valor do Projeto:</label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-xl font-medium text-lime-200">Data de Início:</label>
                  <input
                    type="date"
                    value={date_initial}
                    onChange={(e) => handleValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-xl font-medium text-lime-200">Data de Finalização:</label>
                  <input
                    type="date"
                    value={date_final}
                    onChange={(e) => handleValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-xl font-medium text-lime-200">Participantes do Projeto:</label>
                  <input
                    type="text"
                    value={name_participant}
                    onChange={(e) => handleValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div> 

                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-xl font-medium text-lime-200">Risco do Projeto:</label>
                  <select
                    value={risk}
                    onChange={(e) => handleValue(e.target.value)}
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
              <button onClick={(e) => updateSubmit(e)} className="inline-flex justify-center py-5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Atualizar projeto 📝
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProjectEdit;
