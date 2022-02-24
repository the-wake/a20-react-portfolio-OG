// rfce
import React, { useState } from 'react';
import Project from './Project.js';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Monster Finder',
      repo: 'www.google.com',
    },
    {
      name: 'Dungeon Crawler',
      repo: 'www.amazon.com',
    }
  ]);

  return (
    <div>
      {projects.map((project, index) => {
        return <Project project={project} key={index}/>
      })}
    </div>
  )
}

export default Portfolio;