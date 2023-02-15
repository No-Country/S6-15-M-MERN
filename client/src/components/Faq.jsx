import React, { useState } from 'react';
import Faqform from './Faqform';
const Faq = () => {
  const [menu, setMenu] = useState(null);

  const handleMenu = (id) => {
    setMenu(menu === id ? null : id);
  };

  return (
    <div className='bg-[#f5f5f5] h-screen w-[100%] pt-1 '>
      <div className='grid grid-cols-2 ml-[24%] mr-[24%] gap-28 mt-48'>
        <div className=' h-[600px]'>
          <h3 className='text-2xl font-bold'>Usuarios</h3>
          <ul className='font-medium mt-6 '>
            <li className='flex justify-between'>
              ¿Qué es CONTRATÁ
              <button className='text-xl' onClick={() => handleMenu(1)}>
                +
              </button>
            </li>
            <p
              className={menu === 1 ? 'block text-sm text-stone-500' : 'hidden'}
            >
              CONTRATÁ es una app que te conecta con profesionales que pueden
              ayudarte en lo que necesites.
            </p>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between'>
              ¿Cómo me registro?
              <button className='text-xl' onClick={() => handleMenu(2)}>
                +
              </button>
            </li>
            <p
              className={menu === 2 ? 'block text-sm text-stone-500' : 'hidden'}
            >
              Para registrarte debes entrar a la sección de Login, poner tu mail
              y contraseña y luego crear tu perfil de usuario.
            </p>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between'>
              ¿Cuánto me cuesta pedir un presupuesto?
              <button className='text-xl' onClick={() => handleMenu(3)}>
                +
              </button>
            </li>
            <p
              className={menu === 3 ? 'block text-sm text-stone-500' : 'hidden'}
            >
              El precio del presupuesto depende del profesional prestador del
              servicio.
            </p>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between'>
              ¿Cómo pido un presupuesto? <button className='text-xl'>+</button>
            </li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between'>
              ¿Cómo ver las calificaciones del profesional?{' '}
              <button className='text-xl'>+</button>
            </li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between'>
              Contraté a alguien anteriormente y perdí su contacto, ¿Cómo hago
              para volver a comunicarme? <button className='text-xl'>+</button>
            </li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between'>
              ¿Si un técnico o profesional tiene bajas calificaciones de los
              clientes, se lo da de baja en la plataforma?{' '}
              <button className='text-xl'>+</button>
            </li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
          </ul>
        </div>
        <div className=' '>
          <h3 className='text-2xl font-bold'>Profesionales</h3>
          <ul className='font-medium mt-6'>
            <li>¿Puedo prestar mis servicios?</li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li>¿Puedo editar mi información de perfil?</li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li>
              ¿Si no veo la categoría del servicio que yo ofrezco que puedo
              hacer?
            </li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li>¿Cómo conseguir buenas calificaciones?</li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
            <li>¿Que puedo hacer si recibo una valoracion negrativa?</li>
            <hr className='h-[2px] opacity-25 my-4  border-0 bg-black' />
          </ul>
        </div>
      </div>

      <div>
          <h3 className='text-center mt-11 mb-8'>¿Te quedaste con dudas?</h3>
          <h3 className='text-center mb-8'>¡Comunicate  nostros!</h3>
          <div>
            <Faqform/>
          </div>


      </div>

    </div>
  );
};

export default Faq;
