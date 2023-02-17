import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Mail no valido")
    .required("Debes ingresar un mail")
});

function Faqform() {
  return (
    <div className=" bg-primary rounded-xl  md:m-auto md:w-1/3 xl:m-auto xl: w-1/4   " >
      <div className=" mb-4 py-16 text-center flex-col justify-center items-center pr-10  ">
        <header className="">
          <h2 className="text-5xl font-bold text-[#ffffff] text-left ml-14 mb-7 font-khula">Regístrate</h2>
          <div className="inline-grid grid-cols-2 gap-3 mr-20
           ">
          <h3 onClick="text-decoration-line: underline;"  className="text-[#ffffff]  text-xl  ml-14 mb-7 mr-1 font-khula underline underline-offset-8 decoration-btnColor decoration-4">Registro</h3>
          <h3 className="text-[#ffffff]  text-xl ml-10  mb-5 font-khula">Iniciar sesión</h3>
          </div>
        </header>
        
        <Formik
          initialValues={{
            nombre: "",
            email: "",
          }}
          validationSchema={userSchema}
        >
          <Form>
            <div>

              <label className="  font-bold block text-[#313D69] mt-5 mr-56" htmlFor="email font-khula">Nombre</label>
              <Field
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Nombre"
                className=" px-3 py-2 focus: outline-none rounded-xl pl-24 text-left"
              />
              <ErrorMessage name="email" component="p" className="font-bold  text-[#ffffff]" />

              <label className="  font-bold block text-[#313D69] mt-5 mr-56" htmlFor="email font-khula">Email</label>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Ingresa tu mail"
                className=" px-3 py-2 focus: outline-none rounded-xl pl-24 text-left"
              />
              <ErrorMessage name="email" component="p" className="font-bold  text-[#ffffff]" />

              <label  className="  font-bold block text-[#313D69] mt-5 mr-48  " htmlFor="password font-khula">Tu consulta</label>
              <Field
                name="consulta"
                id="consulta"
                type="text"
                placeholder="Escribe tu duda o consulta aquí"
                className=" px-3 py-2 pl-24 focus: outline-none rounded-xl placeholder:-translate-x-6"
              />
              <ErrorMessage name="password" component="p"  className="font-bold  text-[#ffffff]"/>

              
              
            </div>
            
            <button type="submit"  className="bg-btnColor w-48 h-12 rounded-full text-xl mb-4 text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow " >Enviar</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Faqform;
