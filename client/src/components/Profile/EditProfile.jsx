import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
function EditProfile() {
  const userSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Nombre muy corto!")
      .max(15, "Nombre demasiado largo!")
      .required("No puedes dejar este espacio en blanco!")
      .matches(/^[A-Z _]+$/i, "El nombre solo puede contener letras"),
    lastname: yup
      .string()
      .min(3, "Apellido muy corto!")
      .max(15, "Apellido demasiado largo!")
      .required("No puedes dejar este espacio en blanco!")
      .matches(/^[A-Z _]+$/i, "El nombre solo puede contener letras"),
    dateOfBirty: yup
      .date()
      .max(new Date(Date.now() - 567648000000), "Debes tener al menos 18 años")
      .required("Obligatorio"),
    zipCode: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Solo se deben ingresar dígitos")
      .min(4, "Deben ser 4 dígitos exactos")
      .max(4, "Deben ser 4 dígitos exactos")
      .required("Obligatorio"),
    newEmail: yup
      .string()
      .email("Mail no valido")
      .required("Debes ingresar un mail"),
  });
  return (
    <div>
      <div className="ml-44 ">
        <header className="text-labelGrayColor font-bold text-2xl mb-5 font-khula">
          Editar tu perfil
        </header>
        <h3 className="text-labelGrayColor font-bold mb-14 ">
          Información Personal
        </h3>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            dateOfBirty: "",
            zipCode: "",
            newEmail: "",
          }}
          validationSchema={userSchema}
        >
          <Form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="  font-bold block text-labelColor mt-5 mr-24    font-khula">
                  Nombre
                </label>
                <Field
                  name="email"
                  id="email"
                  type="text"
                  className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-24   border-labelGrayColor border-2"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="font-bold  text-[#ffffff]"
                />
              </div>
              <div className="-ml-72">
                <label
                  className="  font-bold block text-labelColor  mt-5 mr-24   font-khula "
                  htmlFor="password "
                >
                  Apellido
                </label>
                <Field
                  name="password"
                  id="password"
                  type="password"
                  className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-24  border-labelGrayColor border-2 placeholder:-translate-x-6"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="font-bold  text-[#ffffff]"
                />
              </div>
            <div>
            <label
              className=" font-bold block text-labelColor mt-5 "
              htmlFor="password"
            >
              Código Postal
            </label>
            <Field
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96  border-labelGrayColor border-2 placeholder:-translate-x-6  "
            />
            <ErrorMessage
              name="passwordConfirmation"
              component="p"
              className="font-bold  text-[#ffffff]"
            />
           </div>
           <div>
            <label
              className=" font-bold block text-labelColor mt-5 mr-24 m "
              htmlFor="password"
            >
              Fecha de nacimiento
            </label>
            <Field
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96    border-labelGrayColor border-2 placeholder:-translate-x-6  "
            />
            <ErrorMessage
              name="passwordConfirmation"
              component="p"
              className="font-bold  text-[#ffffff]"
            />
            </div>
            <div>
            <label
              className=" font-bold block text-labelColor mt-5 mr-24 m "
              htmlFor="password"
            >
              Oficio
            </label>
            <Field
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96   border-labelGrayColor border-2 placeholder:-translate-x-6  "
            />
            <ErrorMessage
              name="passwordConfirmation"
              component="p"
              className="font-bold  text-[#ffffff]"
            />
            </div>
             <div>
              <label
                className=" font-bold block text-labelColor mt-5 mr-24 m "
                htmlFor="password"
              >
                Nuevo Email
              </label>
              <Field
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96   border-labelGrayColor border-2 placeholder:-translate-x-6  "
              />
              <ErrorMessage
                name="passwordConfirmation"
                component="p"
                className="font-bold  text-[#ffffff]"
              />
              </div>
              <div>
              <label
                className=" font-bold block text-labelColor mt-5 mr-24 m "
                htmlFor="password"
              >
                Teléfono de contacto
              </label>
              <Field
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96   border-labelGrayColor border-2 placeholder:-translate-x-6  "
              />
              <ErrorMessage
                name="passwordConfirmation"
                component="p"
                className="font-bold  text-[#ffffff]"
              />
              </div>
              <div>
              <label
                className=" font-bold block text-labelColor mt-5 mr-24 m "
                htmlFor="password"
              >
                Pais
              </label>
              <Field
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96   border-labelGrayColor border-2 placeholder:-translate-x-6  "
              />
              <ErrorMessage
                name="passwordConfirmation"
                component="p"
                className="font-bold  text-[#ffffff]"
              />
              </div>
              <div>
              <label
                className=" font-bold block text-labelColor mt-5 mr-24 m "
                htmlFor="password"
              >
                Ciudad
              </label>
              <Field
                name="passwordConfirmation"
                id="passwordConfirmation"
                type="password"
                className=" px-3 py-2 focus: outline-focusColor rounded-xl pl-96   border-labelGrayColor border-2 placeholder:-translate-x-6  "
              />
              <ErrorMessage
                name="passwordConfirmation"
                component="p"
                className="font-bold  text-[#ffffff]"
              />
             </div> 

            <button
              type="submit"
              className="bg-btnColor w-48 h-12 rounded-xl text-xl mb-4 text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-10 hover:shadow-228b active:shadow "
            >
              Guardar
            </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditProfile;
