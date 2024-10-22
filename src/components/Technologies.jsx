import React, { useState, useEffect } from 'react';
import { FaAws, FaDatabase, FaEnvelopeOpenText } from 'react-icons/fa'; // Importar íconos

const tecnologias = [
  {
    nombre: 'AWS',
    descripcion:
      'Implementación en la nube para soluciones escalables y seguras.',
    icono: <FaAws className='text-6xl text-[#ff9900]' />,
  },
  {
    nombre: 'PostgreSQL',
    descripcion:
      'Base de datos relacional avanzada para aplicaciones complejas.',
    icono: <FaDatabase className='text-6xl text-[#336791]' />,
  },
  {
    nombre: 'Postman',
    descripcion: 'Plataforma de pruebas de API para desarrollo ágil.',
    icono: <FaEnvelopeOpenText className='text-6xl text-[#ef5b25]' />,
  },
  {
    nombre: 'Docker',
    descripcion:
      'Plataforma de contenedores para despliegue de aplicaciones eficientes.',
    icono: <FaDatabase className='text-6xl text-[#0db7ed]' />,
  },
  {
    nombre: 'GitHub',
    descripcion:
      'Control de versiones para la colaboración en proyectos de software.',
    icono: <FaDatabase className='text-6xl text-[#171515]' />,
  },
  {
    nombre: 'Jenkins',
    descripcion:
      'Automatización de pipelines de CI/CD para desarrollo continuo.',
    icono: <FaDatabase className='text-6xl text-[#d24939]' />,
  },
];

const Technologies = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActivo((prevIndice) => (prevIndice + 1) % tecnologias.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, []);

  // Obtener las tres tecnologías visibles
  const tecnologiasVisibles = [
    tecnologias[indiceActivo],
    tecnologias[(indiceActivo + 1) % tecnologias.length],
    tecnologias[(indiceActivo + 2) % tecnologias.length],
  ];

  return (
    <div className='py-16 text-center'>
      <h2 className='text-4xl font-bold text-[#007bbd] mb-12'>
        Tecnologías Usadas
      </h2>
      <div className='flex justify-center gap-8'>
        {tecnologiasVisibles.map((tecnologia, index) => (
          <div
            key={index}
            className='w-64 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center'
          >
            <div className='mb-4'>{tecnologia.icono}</div>
            <h3 className='text-2xl font-semibold text-[#007bbd] mb-2'>
              {tecnologia.nombre}
            </h3>
            <p className='text-gray-600'>{tecnologia.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
