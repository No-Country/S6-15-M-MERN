import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
import clipper from "../assets/clipper.svg";
import { useState } from "react";

export const OrderService = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <NavBar />
      <div className=" bg-[url('https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/OrderService%2F6VIA5VvDooRq5SuCn9YQ5lMZ7Ct9VGjJknQuwWkG.webp.png?alt=media&token=1de80ed5-b1a6-420f-b7ce-6edd9adb2852')] h-72 w-full ">
        <div
          className="w-full h-full flex flex-col  justify-center items-center  
             bg-blue-800/30 backdrop-brightness-75"
        >
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <span className="text-white text-4xl w-1/2 ">
              Solicitar electricista
            </span>
          </div>
        </div>
      </div>
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
            onSubmit={handleSubmit}
          >
            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                value={inputs.username || ""}
                placeholder="Nombre Completo"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email "
                name="email"
                value={inputs.email || ""}
                placeholder="email"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 w-full md:w-1/2 p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Barrio/Localidad
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                name="location"
                value={inputs.location}
                onChange={handleChange}
              >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>

            <div className="mb-4 w-full p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ask"
              >
                Tu consulta
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ask"
                type="number"
                rows="4"
                name="ask"
                value={inputs.ask || ""}
                placeholder="Describe detalladamente tu problema"
                onChange={handleChange}
              />
            </div>

            <div className="shadow appearance-none border rounded w-full p-2 m-2  text-gray-700 focus:outline-none flex flex-col  justify-center items-center ">
              <div className="">
                <img src={clipper} alt="" />
              </div>
              <div className="">
                <span className="text-gray-400">
                  Adjunta las fotos o archivos necesarios
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center w-full p-2">
              <input
                className="bg-buttons-saveButtonGreen hover:bg-buttons-hoverButtonGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
