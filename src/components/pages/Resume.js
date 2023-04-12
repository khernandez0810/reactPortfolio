import React from 'react';

export default function Resume() {
  return (
    <div className='text-center'>
    <h1 className="py-5 text-center">Resume</h1>
    <div class="resume-container card-container d-flex flex-wrap justify-content-center">
  <div class="px-5 text-center backEndCard">
    <h2 className=''>Back-End Proficiencies</h2>
    <ul style={{listStyle: 'none'}}>
      <li>Node</li>
      <li>Express</li>
      <li>API (Web, Server, 3rd Party)</li>
      <li>SQL</li>
      <li>MongoDB</li>
      <li>Javascript</li>
    </ul>
  </div>
  <div class="px-5 text-center frontEndCard">
    <h2>Front-end Proficiencies</h2>
    <ol style={{listStyle: 'none'}}>
      <li>HTML</li>
      <li>CSS</li>
      <li>Bootstrap</li>
      <li>Handlebars</li>
      <li>React</li>
      <li>Tailwind</li>
    </ol>
  </div>
</div>
    <h3 className='resume-text py-5'>Download Resume
    </h3>
       <a href="./assets/docs/KH-Resume.pdf" download>
       <button type="button" class="mb-5 btn btn-dark btn-lg"><i style={{paddingRight: "10px"}} className=" fa-solid fa-download"></i>Download Resume</button>
       </a>
       </div>
  );
}
