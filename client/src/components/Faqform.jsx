import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import image from "../assets/faqform.png";


import emailjs from "@emailjs/browser";

import Swal from 'sweetalert2'

const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Nombre muy corto!")
    .max(20, "Nombre demasiado largo!")
    .required("No puedes dejar este espacio en blanco!")
    .matches(/^[A-Z _]+$/i, "El nombre solo puede contener letras"),
  email: yup
    .string()
    .email("Mail no valido")
    .required("Debes ingresar un mail"),
  consulta: yup
    .string()
    // .max(20, "Has excedido el límite de caracteres permitidos!")
    .required("No puedes dejar este espacio en blanco!"),
  tipo: yup
    .string()
    .max(15, "Has excedido el límite de caracteres permitidos!")
    .required("No puedes dejar este espacio en blanco!")
    .matches(/^[A-Z _]+$/i, "El oficio solo puede contener letras"),
});

function Faqform() {
  // const handleClick = () => {
  //   console.log("entro");
  // };

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_60byldi",
        "template_3em4toc",
        form.current,
        "d_XVSuMm0pNrQoWNm"
      )
      .then(
        (result) => {
          // console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Todo salió muy bien...',
            text: 'Muy Pronto Alguien de nuestro equipo se comunicará contigo!',
          })
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Uups...',
            text: 'Algo salio mal!',
            
          })
        }
      );
  };

  return (
    <div className="flex  max-w-7xl mx-auto mb-28">
      
      
      <div className=" md:w-1/3 hidden md:block items-center justify-center ">
        <img className=" w-72 h-72" src={image} alt="" />
      </div>
      <div className=" md:w-2/3 ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            tipo:"",
            consulta: "",
          }}

          onSubmit={(values, {resetForm}) => {
            console.log('The values', values)
            sendEmail(values)
            resetForm()
          }}

          validationSchema={userSchema}
        >
          <Form ref={form}>
            <div className="flex flex-wrap">
              <div className="flex flex-col md:flex-row w-full">
                <div className="p-3 md:w-1/2">
                  <label className="  font-bold block text-[#313D69] mt-5 mr-56">
                    Nombre
                  </label>
                  <Field
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Nombre completo"
                    className=" px-3 py-2 focus: outline-none rounded-xl text-left w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="font-bold text-red-600"
                  />
                </div>
                <div className="p-3 md:w-1/2">
                  <label className="  font-bold block text-[#313D69] mt-5 mr-56">
                    Email
                  </label>
                  <Field
                    name="email"
                    id="email-send"
                    type="email"
                    placeholder="Ingresa tu mail"
                    className=" px-6 py-2 focus: outline-none rounded-xl text-left w-full"
                  />
                  <ErrorMessage
                    name="error"
                    component="p"
                    className="font-bold  text-red-500"
                  />
                </div>
              </div>
              <div className="flex  flex-row w-full">
                <div className="p-3 md:w-1/2">
                  <label className="  font-bold block text-[#313D69] mt-5 mr-56">
                    Tipo de usuario
                  </label>
                  <Field
                    name="tipo"
                    id="tipo"
                    type="text"
                    placeholder="Tipo de usuario"
                    className=" px-3 py-2 focus: outline-none rounded-xl text-left w-full"
                  />
                  <ErrorMessage
                    name="tipo"
                    component="p"
                    className="font-bold  text-red-500"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="p-3 w-full">
                  <label className="  font-bold block text-[#313D69] mt-5 mr-48  ">
                    Tu consulta
                  </label>
                  <Field
                    as="textarea"
                    name="consulta"
                    id="consulta"
                    type="textarea"
                    placeholder="Escribe tu duda o consulta aquí"
                    className=" px-3 py-2 focus: outline-none rounded-xl w-full resize-none"
                  />
                  <ErrorMessage
                    name="consulta"
                    component="p"
                    className="font-bold  text-red-500"
                  />
                </div>
              </div>
            </div>
            <div></div>
            <div className="mx-auto flex w-full items-center justify-center">
              <button
                // onClick={sendEmail}
                type="submit"
                className="bg-btnColor w-48 h-12 rounded-full text-xl text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-4 hover:shadow-228b active:shadow "
              >
                Enviar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Faqform;
