import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
export const OrderService = () => {
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
      <div className="p-10 text-gray-400 font-normal text-xl">
        <p>
          Contanos que problema necesitas solucionar y nosotros te enviaremos
          SIN CARGO un presupuesto.
        </p>
        <p>
          Todos nuestros servicios son verificados, cuentan con experiencia y
          referencias comprobables.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};
