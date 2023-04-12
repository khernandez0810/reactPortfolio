import React from 'react';
import Kevin from '../../assets/images/kevin.png'
export default function About() {
  return (
    <div className='pb-5'>
      <div>
      <h1 className="pt-5 text-center">About Me</h1>
      <p className="pt-5 pb-5 about-text">Hello! My name is Kevin. I am a graduate of University of Central Florida with a bachelor's in Health sciences. 
            I have always been passionate of technology as a whole and want to advance and enhance my knowledge in the field along with applying my skills that have been gained to where needed. My skills include experience in HTML, CSS, Github, Javascript, Node.js, Express.js, jquery, Bootstrap, mySQL,  API, Jest, Object oriented programming, npm,  SQL, JSON applications and Microsoft Office,  My hobbies include watching sports, gaming and traveling.
            I look forward to meeting you and potentially working with you!
         </p>
         </div>
         <div>
          <img className="kevin" src={Kevin} alt="kevin"></img>
         </div>

    </div>
    
  );
}
