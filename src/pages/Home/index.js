import React from 'react';
import Header from '../../components/Header';
import ProjectList from '../../components/ProjectList';

function Home() {

  return ( 
    <>
      <Header />
      <div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/new">Novo Projeto</button>
        {/* { project.map((item) => console.log(item)) } */}
        <ProjectList />
      </div>
    </>
   );
}

export default Home;
