import React from 'react';
import projects from '../../assets/data/projects';
export default function Home() {
  return (
    <>
    <h1 className='pt-5 text-center'>My Projects</h1>
<div className="row-md-4 container text-center">
  <div className="p-2 row justify-content-center">
{projects.map((project) => {
  return (
    <div className="rounded-4 project m-3 h-75" style={{width: "18rem"}}>
    <img src={project.image} class="rounded-4 card-img-top mt-3" alt={project.alt} style={{height: "200px"}}></img>
    <div class="card-body">
      <h5 class="card-title mt-3">{project.name}</h5>
      <p class="project-text">{project.description}</p>
      <a href={project.repoLink} class="btn btn-dark">Go to Repo</a>
      <a href={project.deployLink} class="my-2 btn btn-dark">Go to Deployed App</a>
    </div>
  </div>
  )
})}
  </div>
</div>
</>
  );
}
