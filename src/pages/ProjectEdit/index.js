import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import { toast } from 'react-toastify';

function ProjectEdit() {
  // Projeto do id Buscado
  const [project, setProject] = useState([]);

  //State Att
  const [name, setName] = useState('');
  const [dateI, setDateI] = useState('');
  const [dateF, setDateF] = useState('');
  const [valueAtt, setValueAtt] = useState('');
  const [riksAtt, setRiskAtt] = useState('');
  const [participantes, setParticipantes] = useState('');

  // id da url
  const { id } = useParams();

  useEffect(() => {
    async function get() {
      const {data} = await api.get(`/project/${id}`);
      setProject(data);
      setName(data.name_project)
      setDateI(data.date_initial)
      setDateF(data.date_final)
      setValueAtt(data.value)
      setRiskAtt(data.risk)
      setParticipantes(data.name_participant)
    }
    get()
  }, [id]);

  const updateSubmit = async (e) => {
    e.preventDefault();

    const dataValue = {
      name_project: name,
      date_initial: dateI,
      date_final: dateF,
      value: valueAtt,
      risk: riksAtt,
      name_participant: participantes,
    };

    console.log(dataValue)

    try {
      const {data: { message }} = await api.put(`/project/update/${id}`, dataValue)
      return toast.success(message)
    } catch (error) {
      console.log(error)
      return toast.error("Error ao tentar Editar o Projeto!!");
    }
  }

  if (!project || project.length === 0) return 'Loading...';
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-xl font-medium text-lime-200">Valor do Projeto:</label>
                  <input
                    type="number"
                    value={valueAtt}
                    onChange={(e) => setValueAtt(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-xl font-medium text-lime-200">Data de Início:</label>
                  <input
                    type="date"
                    value={dateI}
                    onChange={(e) => setDateI(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-xl font-medium text-lime-200">Data de Finalização:</label>
                  <input
                    type="date"
                    value={dateF}
                    onChange={(e) => setDateF(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-xl font-medium text-lime-200">Participantes do Projeto:</label>
                  <input
                    type="text"
                    value={participantes}
                    onChange={(e) => setParticipantes(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none"
                    required
                  />
                </div> 

                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-xl font-medium text-lime-200">Risco do Projeto:</label>
                  <select
                    value={riksAtt}
                    onChange={(e) => setRiskAtt(e.target.value)}
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
              <button onClick={updateSubmit} className="inline-flex justify-center py-5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
