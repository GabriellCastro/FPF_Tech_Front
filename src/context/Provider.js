import React, { useState, useEffect, useCallback } from 'react';
import { node } from 'prop-types';
import api from '../services/api';
import ProjectContext from './ProjectContext';

function Provider({ children }) {
  // lista de projetos
  const [project, setProject] = useState([]);

  // novo projeto
  const [name_project, setName_project] = useState('');
  const [date_initial, setDate_initial] = useState('');
  const [date_final, setDate_final] = useState('');
  const [value, setValue] = useState('');
  const [risk, setRisk] = useState('');
  const [name_participant, setName_participant] = useState('');

  const newProject = (e) => {
    e.preventDefault();

    const data = {
      name_project,
      date_initial,
      date_final,
      value,
      risk,
      name_participant,
    };


    try {
      api.post('/project/create', data).then(({data: { message }}) => alert(message))

    } catch (err) {
      alert("Error ao cadastrar um projeto!")
    }
  }

  const contextValue = {
    project,
    setProject,
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
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
