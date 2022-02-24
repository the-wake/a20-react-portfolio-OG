import React from 'react';

function Project({ project }) {
  const { name, repo } = project;

  return (
    <div>
      <h1>{name}</h1>
      <a href={repo}>{repo}</a>
    </div>
  )
}

export default Project;
