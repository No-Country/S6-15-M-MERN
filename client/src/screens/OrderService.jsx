import { useRef } from "react";
import emailjs from "@emailjs/browser";
// viene de cardServices
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

export const OrderService = () => {
  const { state } = useLocation();
  const { email } = state || {};

  // console.log(state);
  const form = useRef();
  // console.log(email);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form.current);
    emailjs
      .sendForm(
        "service_60byldi",
        "template_uj2wx57",
        form.current,
        "d_XVSuMm0pNrQoWNm"
      )
      .then(
        (result) => {
          // console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Todo salió muy bien...',
            text: 'Muy pronto tendrás una respuesta a tu consulta!',
          })
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
          })
        }
      );
  };

  return (
    <div>
      <div className=" max-md:h-44 max-lg:h-56 max-xl:h-96 max-2xl:h-96 max-sm:h-24 w-full bg-no-repeat bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/OrderService%2F6VIA5VvDooRq5SuCn9YQ5lMZ7Ct9VGjJknQuwWkG.webp.png?alt=media&token=1de80ed5-b1a6-420f-b7ce-6edd9adb2852')]"></div>
      <div className="p-10 text-gray-400 text-xl">
        <p>
          Contanos que problema necesitas solucionar y nosotros te enviaremos
          SIN CARGO un presupuesto.
        </p>
        <p>
          Todos nuestros servicios son verificados, cuentan con experiencia y
          referencias comprobables.
        </p>
        <div className="flex justify-center">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-3/4 flex flex-wrap"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 max-sm:text-xs   leading-tight focus:outline-none focus:shadow-outline"
                id="fromname"
                type="text"
                name="from_name"
                placeholder="Nombre Completo"
              />
            </div>

            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm max-sm:text-xs  font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 max-sm:text-xs  leading-tight focus:outline-none focus:shadow-outline"
                id="userEmail"
                type="email "
                name="user_email"
                placeholder="email"
              />
            </div>

            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm max-sm:text-xs font-bold mb-2"
                htmlFor="location"
              >
                Barrio/Localidad
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 max-sm:text-xs  leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                name="location"
              >
                
              </input>
            </div>
            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm max-sm:text-xs font-bold mb-2"
                htmlFor="location"
              >
                Email del Profesional a contactar:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 max-sm:text-xs  leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                name="to_email"
                value={email}
                disabled={true}
              >
                
              </input>
            </div>

            <div className="mb-4 w-full p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 max-sm:text-xs "
                htmlFor="ask"
              >
                Tu consulta
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-sm:text-xs "
                id="ask"
                type="text"
                rows="4"
                name="message"
                placeholder="Describe detalladamente tu problema"
              />
            </div>

            <div className="flex items-center justify-center w-full p-2">
              <input
                className="bg-buttons-saveButtonGreen hover:bg-buttons-hoverButtonGreen text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
