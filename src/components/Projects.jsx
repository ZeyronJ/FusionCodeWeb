import React, { useState, useEffect } from 'react';
// import MultiCarouselTechnologies from './MultiCarouselTechnologies';
import { projects } from '../helpers/constants';

function Projects() {
  const [showVideos, setShowVideos] = useState([]);

  useEffect(() => {
    const initialArray = [];
    for (let i = 0; i < projects.length; i++) {
      initialArray.push(false);
    }
    setShowVideos(initialArray);
  }, []);

  const handleToggleVideos = (index) => {
    setShowVideos((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Invertir el estado del índice
      return newState;
    });
  };
  return (
    <section
      className='flex justify-center items-center mt-20 text-slate-200'
      id='projects'
    >
      <div className='lg:w-3/4 w-full p-4 mb-10 max-w-[1100px]'>
        <h1 className='text-4xl font-bold mb-6 text-center text-[#007bbd]'>
          Proyectos realizados
        </h1>
        <div className='grid lg:grid-cols-2 gap-6 justify-center'>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 ease-in-out'
              >
                <img className='w-full object-cover' src={project.img} alt='' />
                <div className='px-4 py-6'>
                  <h2 className='text-[#007bbd] text-lg font-semibold -mt-2'>
                    {project.title}
                  </h2>
                  <div className='flex flex-wrap gap-1 my-1'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='text-xs bg-blue-100 rounded-full px-2 py-1 text-[#007bbd]'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <MultiCarouselTechnologies
                    technologies={project.technologies}
                  /> */}
                  <p className='text-black/90 text-pretty mt-1'>
                    {project.description}
                  </p>
                </div>
                {/* <div className='p-4 mt-4'>
                  {project.web !== '' ? (
                    <a
                      className='px-4 py-2 bg-blue-800 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900 hover:text-slate-100 cursor-pointer'
                      href={project.web}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Demo del proyecto'
                    >
                      Demo
                    </a>
                  ) : (
                    <button
                      className='px-4 py-2 bg-blue-800 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900 hover:text-slate-100 cursor-pointer'
                      title='Ver video demo'
                      onClick={() => console.log('fotos')}
                    >
                      Fotos
                    </button>
                  )}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
