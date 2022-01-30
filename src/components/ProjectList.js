import React, { useContext } from 'react';
// import ProjectContext from '../context/ProjectContext';

function ProjectList() {
  // const { project = [] } = useContext(ProjectContext);
  return ( 
    <>
      {/* { 
        project.map((element) => {
          <div className="py-8 w-full">
            <div className="lg:flex items-center justify-center w-full">
                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-900 p-8 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt="dog img" className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-lime-500">{ element.name_project }</p>
                                <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                        <div className="flex justify-around">
                          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Editar
                          </button>
                          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Excluir
                          </button>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        })
      } */}
    </>
  );
}

export default ProjectList;
