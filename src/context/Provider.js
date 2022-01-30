import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import api from '../services/api';
import ProjectContext from './ProjectContext';

function Provider({ children }) {
  const [project, setProject] = useState([]);

  useEffect(() => {
    api.get('project')
      .then((res) => setProject(res.data));
  }, []);

  const contextValue = {
    project,
  };

  return ( 
    <ProjectContext.Provider value={ contextValue }>
      {children}
    </ProjectContext.Provider>
   );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
