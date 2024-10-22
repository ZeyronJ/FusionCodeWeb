import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // Estado para el mensaje de éxito
  const [error, setError] = useState(false); // Estado para manejar errores

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageSent(true); // Mostrar mensaje de éxito
    setError(false); // Reiniciar el estado de error en caso de éxito
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {},
        (error) => {
          console.log('Hubo un fallo al enviar el correo', error.text);
          setMessageSent(false); // Mostrar mensaje de éxito
          setError(true); // Mostrar mensaje de error
        }
      );
  };

  return (
    <section id='contact' className='py-10'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-center text-[#007bbd]'>
          Contáctanos
        </h2>

        <div className='grid grid-cols-1 gap-8 max-w-2xl mx-auto'>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8'> */}
          <form
            className='bg-white p-6 rounded-lg mx-4 shadow-lg text-[#007bbd]'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-[#007bbd] font-bold mb-2'
              >
                Nombre
              </label>
              <input
                type='text'
                id='name'
                name='user_name'
                className='w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-blue-50'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-[#007bbd] font-bold mb-2'
              >
                Correo electrónico
              </label>
              <input
                type='email'
                id='email'
                name='user_email'
                className='w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-blue-50'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-[#007bbd] font-bold mb-2'
                required
              >
                Mensaje
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                className='w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-blue-50 resize-none'
                required
              ></textarea>
            </div>

            {/* Contenedor flex para el botón y el mensaje */}
            <div className='flex items-center'>
              <button className='bg-gradient-to-r from-[#007bbd] to-[#005a8c] text-white py-3 px-8 rounded-full shadow-lg font-bold transform hover:scale-105 transition focus:ring-sky-300 focus:outline-none focus:ring-2'>
                Enviar
              </button>

              {/* Mensaje de éxito o error al lado del botón */}
              {messageSent && (
                <div className='text-green-500 font-semibold ml-2'>
                  ¡Mensaje enviado!
                </div>
              )}
              {error && (
                <div className='text-red-500 font-semibold'>
                  Error al enviar.
                </div>
              )}
            </div>
          </form>

          <div className='bg-white p-6 rounded-lg shadow-lg mx-4'>
            <h3 className='text-xl font-semibold mb-4 text-[#007bbd]'>
              Información de contacto
            </h3>
            {/* <p className='mb-2'>Correo: info@taskforceti.com</p> */}
            <p>Teléfono: +56 9 5610 9988</p>
          </div>
        </div>
      </div>
    </section>
  );
}
