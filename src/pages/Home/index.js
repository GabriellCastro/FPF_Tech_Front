import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ProjectList from '../../components/ProjectList';
import ProjectContext from '../../context/ProjectContext';
import api from '../../services/api';

function Home() {
  const { setProject } = useContext(ProjectContext)

  useEffect(() => {
    console.log('aqui')
    api.get('project')
    .then((res) => setProject(res.data));
  }, []);

  return ( 
    <>
      <Header />
      <div className="mt-8 ml-16">
        <Link to={'/new'}>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/new">Novo Projeto</button>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full">
        <ProjectList />
      </div>
    </>
   );
}

export default Home;
