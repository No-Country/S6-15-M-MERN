import React, { useState } from 'react';
import Faqform from './Faqform';
import NavBar from './NavBar';
const Faq = () => {
  const [menu, setMenu] = useState(null);

  const handleMenu = (id) => {
    setMenu(menu === id ? null : id);
  };

  return (
<<<<<<< HEAD
    <div>
      <NavBar />
      <div className='bg-[#f5f5f5] h-screen w-[100%] pt-1 pb-1 max-[412px]:h-[100%] '>
        <div className='grid grid-cols-2 ml-[15%] mr-[15%] gap-24 mt-48 max-[900px]:mr-[5%] max-[900px]:ml-[5%] max-[900px]:gap-12 max-[680px]:gap-8 max-[412px]:grid-cols-1  '>
          <div className=' h-[600px]'>
            <h3 className='text-2xl font-bold text-[#28315C]'>Usuarios</h3>
            <ul className='font-medium text-sm mt-6 '>
              <li className='flex justify-between text-[#303A42]'>
                ¿Qué es CONTRATÁ
                <button className='text-xl ' onClick={() => handleMenu(1)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 1 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                CONTRATÁ es una plataforma gratuita donde puedes solicitar, de
                manera rápida y segura, servicios a diferentes técnicos y
                profesionales para cualquier trabajo que necesites realizar en
                tu casa o para ti.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Cómo me registro?
                <button className='text-xl' onClick={() => handleMenu(2)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 2 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Es muy sencillo, Solo debes dar clik en “Registrate” e ingresar
                Nombre, Apellido y e-mail.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Cuánto me cuesta pedir un presupuesto?
                <button className='text-xl' onClick={() => handleMenu(3)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 3 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Pedir presupuestos a través de la plataforma es GRATIS. En caso
                de que te comuniques con un profesional por un servicio, puede
                que haya cargos para que el profesional realice el presupuesto,
                depende de cada profesional si cobra por presupuesto previo al
                trabajo o no.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Cómo pido un presupuesto?
                <button className='text-xl' onClick={() => handleMenu(4)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 4 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Necesitas estar registrado para solicitar presupuesto. En
                nuestra sección de servicios puedes encontrar todos los
                servicios disponibles, ingresas en el de tu preferencia. Allí
                encontrarás un listado de profesionales, al hacer click en el
                Perfil del Profesional podrás ver un resumen de su historial,
                fotografía de trabajos anteriores y reseñas de otros usuarios.
                Para brindarte mayor seguridad puedes comunicarte directamente
                desde la plataforma.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Cómo ver las calificaciones del profesional?
                <button className='text-xl' onClick={() => handleMenu(5)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 5 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Es muy facil, haces click en el nombre del profesional y eso te
                guiará a su perfil completo, donde encontrarás toda la
                información disponible, incluido fotografias de sus trabajos
                anteriores y reseñas de otros usuarios.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                Contraté a alguien anteriormente y perdí su contacto, ¿Cómo hago
                para volver a comunicarme?
                <button className='text-xl' onClick={() => handleMenu(6)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 6 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                En tu perfil puedes encontrar un historial completo de tus
                contrataciones, allí encontrarás los profesionales contratados
                anteriormente y la calificación qué les asignaste.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Si un técnico o profesional tiene bajas calificaciones de los
                clientes, se lo da de baja en la plataforma?
                <button className='text-xl' onClick={() => handleMenu(7)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 7 ? 'block text-sm text-stone-500 mt-2 ' : 'hidden'
                }
              >
                Si eso sucede se investigan los casos puntuales y, si queda
                demostrado que los trabajos no fueron realizados con excelencia,
                se procede a retirar al mismo de la plataforma.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black ' />
            </ul>
          </div>
          <div className=' h-[600px] max-[412px]:-mt-0 '>
            <h3 className='text-2xl font-bold text-[#28315C]'>Profesionales</h3>
            <ul className='font-medium text-sm mt-6'>
              <li className='flex justify-between text-[#303A42]'>
                ¿Puedo prestar mis servicios?
                <button className='text-xl' onClick={() => handleMenu(8)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 8 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                ¡Nos encantaría que te sumes a nuestra red de profesionales! Una
                vez que creas tu cuenta tienes la opción de ingresar como
                profesional, allí debes completar tus datos y crear tu perfil,
                recuerda subir fotografías de tus trabajos anteriores, si tienes
                licencia y estás registrado en tu área sube una imagen del
                documento que lo acredite.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Puedo editar mi información de perfil?
                <button className='text-xl' onClick={() => handleMenu(9)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 9 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Si, haciendo click en el botón EDITAR PERFIL en tu perfil.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Si no veo la categoría del servicio que yo ofrezco que puedo
                hacer?
                <button className='text-xl' onClick={() => handleMenu(10)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 10 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Si el servicio que ofreces no figura en nuestras categorías
                podes enviarnos un mensaje desde el formulario de contacto con
                la página para sugerirnos agregarla.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Cómo conseguir buenas calificaciones?
                <button className='text-xl' onClick={() => handleMenu(11)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 11 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                ¡Brindando el mejor servicio! Eso además va a aumentar el número
                de solicitudes que te lleguen a tu perfil.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
              <li className='flex justify-between text-[#303A42]'>
                ¿Que puedo hacer si recibo una valoracion negativa?
                <button className='text-xl' onClick={() => handleMenu(12)}>
                  +
                </button>
              </li>
              <p
                className={
                  menu === 12 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
                }
              >
                Recuerda antes que nada que las valoraciones son opiniones
                subjetivas y personales de cada usuario. Lo mejor que puedes
                hacer es contactar al cliente para saber qué fue lo que pasó,
                aclararlo y tenerlo en cuenta para próximos trabajos.
              </p>
              <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            </ul>
          </div>
=======
    <div className='bg-[#f5f5f5] h-screen w-[100%] pt-1 pb-1 max-[412px]:h-[100%] '>
      <div className='grid grid-cols-2 ml-[15%] mr-[15%] gap-24 mt-48 max-[900px]:mr-[5%] max-[900px]:ml-[5%] max-[900px]:gap-12 max-[680px]:gap-8 max-[412px]:grid-cols-1  '>
        <div className=' h-[600px]'>
          <h3 className='text-2xl font-bold text-[#28315C]'>Usuarios</h3>
          <ul className='font-medium text-sm mt-6 '>
            <li className='flex justify-between text-[#303A42]'>
              ¿Qué es CONTRATÁ
              <button className='text-xl ' onClick={() => handleMenu(1)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 1 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              CONTRATÁ es una app que te conecta con profesionales que pueden
              ayudarte en lo que necesites.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Cómo me registro?
              <button className='text-xl' onClick={() => handleMenu(2)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 2 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Para registrarte debes entrar a la sección de Login, poner tu mail
              y contraseña y luego crear tu perfil de usuario.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Cuánto me cuesta pedir un presupuesto?
              <button className='text-xl' onClick={() => handleMenu(3)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 3 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              El precio del presupuesto depende del profesional prestador del
              servicio.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Cómo pido un presupuesto?
              <button className='text-xl' onClick={() => handleMenu(4)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 4 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Para pedir presupuesto tienes que ir a la pestaña SERVICIOS,
              elegir el tipo de servicio que necesitas y luego en la pantalla
              siguiente buscar por zona. Entrar al perfil del profesional
              seleccionado y hacer click en el botón ENVIAR MENSAJE.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Cómo ver las calificaciones del profesional?
              <button className='text-xl' onClick={() => handleMenu(5)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 5 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Puedes ver las calificaciones en el perfil del profesional bajo el
              botón de ENVIAR MENSAJE.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              Contraté a alguien anteriormente y perdí su contacto, ¿Cómo hago
              para volver a comunicarme?
              <button className='text-xl' onClick={() => handleMenu(6)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 6 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Para volver a comunicarte podes revisar tu bandeja de entrada en
              MIS MENSAJES.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Si un técnico o profesional tiene bajas calificaciones de los
              clientes, se lo da de baja en la plataforma?
              <button className='text-xl' onClick={() => handleMenu(7)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 7 ? 'block text-sm text-stone-500 mt-2 ' : 'hidden'
              }
            >
              En caso de que el profesional tenga bajas calificaciones, la
              plataforma evaluará las reviews hechas por los usuarios y tomará
              una decisión de acuerdo a eso.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black ' />
          </ul>
        </div>
        <div className=' h-[600px] max-[412px]:-mt-0 '>
          <h3 className='text-2xl font-bold text-[#28315C]'>Profesionales</h3>
          <ul className='font-medium text-sm mt-6'>
            <li className='flex justify-between text-[#303A42]'>
              ¿Puedo prestar mis servicios?
              <button className='text-xl' onClick={() => handleMenu(8)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 8 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Si, solo basta con registrarte y elegir una de las categorias de
              servicios que disponemos. Crearte un perfil y listo!
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Puedo editar mi información de perfil?
              <button className='text-xl' onClick={() => handleMenu(9)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 9 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Si, haciendo click en el botón EDITAR PERFIL en tu perfil.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Si no veo la categoría del servicio que yo ofrezco que puedo
              hacer?
              <button className='text-xl' onClick={() => handleMenu(10)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 10 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Si el servicio que ofreces no figura en nuestras categorías podes
              enviarnos un mensaje desde el formulario de contacto con la página
              para sugerirnos agregarla.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Cómo conseguir buenas calificaciones?
              <button className='text-xl' onClick={() => handleMenu(11)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 11 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Para obtener buenas calificaciones asegurate de brindar un muy
              buen servicio y trata cordialmente a tus clientes.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
            <li className='flex justify-between text-[#303A42]'>
              ¿Que puedo hacer si recibo una valoracion negativa?
              <button className='text-xl' onClick={() => handleMenu(12)}>
                +
              </button>
            </li>
            <p
              className={
                menu === 12 ? 'block text-sm text-stone-500 mt-2' : 'hidden'
              }
            >
              Si recibes una valoración negativa puedes intentar comunicarte con
              el cliente y tratar de resolver el conflicto amablemente.
            </p>
            <hr className='h-[1px] opacity-25 my-4  border-0 bg-black' />
          </ul>
        </div>
      </div>

      <div>
          <h3 className='text-center mt-11 mb-8'>¿Te quedaste con dudas?</h3>
          <h3 className='text-center mb-8'>¡Comunicate  nostros!</h3>
          <div>
            <Faqform/>
>>>>>>> 63d9cd11cbb328a0382238774e9b0d03056bfb65
        </div>

        <div>
          <h3 className='text-center mt-11 mb-8'>¿Te quedaste con dudas?</h3>
          <h3 className='text-center mb-8'>¡Comunicate nostros!</h3>
          <div>
            <Faqform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
