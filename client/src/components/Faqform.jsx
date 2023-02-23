import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import image from "../assets/faqform.png"

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Mail no valido")
    .required("Debes ingresar un mail")
});

function Faqform() {
  return (
    <div className="flex max-w-7xl mx-auto mb-28" >  {/* bg-[#f5f5f5] rounded-xl  md:m-auto md:w-1/3 xl:m-auto xl: w-1/4 */}
      <div className="flex w-1/3 items-center justify-center ">
        <img className=" w-72 h-72" src={image} alt="" />
      </div>
      <div className=" w-2/3">
        <Formik
          initialValues={{
            nombre: "",
            email: "",
          }}
          validationSchema={userSchema}
        >
          <Form>
            <div className="flex flex-wrap">
              <div className="flex flex-row w-full">
                <div className="p-3 w-1/2">
                  <label className="  font-bold block text-[#313D69] mt-5 mr-56" htmlFor="email font-khula">Nombre</label>
                  <Field
                    name="nombre"
                    id="nombre"
                    type="text"
                    placeholder="Nombre completo"
                    className=" px-3 py-2 focus: outline-none rounded-xl text-left w-full"
                  />
                  <ErrorMessage name="email" component="p" className="font-bold text-red-600" />
                </div>
                <div className="p-3 w-1/2">
                <label className="  font-bold block text-[#313D69] mt-5 mr-56" htmlFor="email font-khula">Email</label>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Ingresa tu mail"
                className=" px-6 py-2 focus: outline-none rounded-xl text-left w-full"
              />
              <ErrorMessage name="email" component="p" className="font-bold  text-red-500" />

                </div>
              </div>
              <div className="flex  flex-row w-full">
              <div className="p-3 w-1/2">
                  <label className="  font-bold block text-[#313D69] mt-5 mr-56" htmlFor="email font-khula">Tipo de usuario</label>
                  <Field
                    name="tipo"
                    id="tipo"
                    type="text"
                    placeholder="Tipo de usuario"
                    className=" px-3 py-2 focus: outline-none rounded-xl text-left w-full"
                  />
                  <ErrorMessage name="email" component="p" className="font-bold  text-red-500" />
                </div>
                

              </div>
              <div className="flex flex-row w-full">
                <div className="p-3 w-full">
                <label className="  font-bold block text-[#313D69] mt-5 mr-48  " htmlFor="password font-khula">Tu consulta</label>
              <Field
                as="textarea"
                name="consulta"
                id="consulta"
                type="textarea"
                placeholder="Escribe tu duda o consulta aquí"
                className=" px-3 py-2 focus: outline-none rounded-xl w-full resize-none"
              />
              <ErrorMessage name="password" component="p" className="font-bold  text-red-500"/>

                </div>
              

              </div>

            </div>
            <div>


              

              



            </div>
            <div className="mx-auto flex w-full items-center justify-center">
            <button type="submit" className="bg-btnColor w-48 h-12 rounded-full text-xl text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow " >Enviar</button>

            </div>

           
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Faqform;
