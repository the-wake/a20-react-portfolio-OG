import React from 'react';

function Project({ project }) {
  const { name, repo } = project;

  return (
    <div className="container projects-container">
      <h4>{name}</h4>
      <a href={repo}>{repo}</a>
    </div>
  )
}

export default Project;
