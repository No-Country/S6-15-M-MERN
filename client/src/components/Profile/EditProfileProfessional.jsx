import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function EditProfileProfessional() {
  const navigate = useNavigate();
  const [selectUsuario, setSelectUsuario] = useState('Cliente');

  const handleSelectUsuario = (event) => {
    setSelectUsuario(event.target.value);
  };

  const location = useLocation();
  const user = location.state;
  console.log(user);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    /*     navigate(`/perfilProfesional/${user._id}`); */
    console.log(user._id);
  };

  const userSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Nombre muy corto!')
      .max(15, 'Nombre demasiado largo!')
      .required('Debes llenar este espacio!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
    lastname: yup
      .string()
      .min(3, 'Apellido muy corto!')
      .max(15, 'Apellido demasiado largo!')
      .required('Debes llenar este espacio!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
    dateOfBirty: yup
      .date()
      .max(new Date(Date.now() - 567648000000), 'Debes tener al menos 18 años')
      .required('Obligatorio'),
    zipCode: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Solo se deben ingresar dígitos')
      .min(4, 'Deben ser 4 dígitos exactos')
      .max(4, 'Deben ser 4 dígitos exactos')
      .required('Obligatorio'),
    newEmail: yup
      .string()
      .email('Mail no valido')
      .required('Debes ingresar un mail'),
  });
  return (
    <div>
      <div className=' ml-40 mr-40'>
        <header className='text-labelGrayColor font-bold text-4xl mb-10 flex-shrink-0'>
          Editar tu perfil
        </header>
        <h3 className='text-labelGrayColor font-bold mb- mt-24 '>
          Información Personal
        </h3>
        <Formik
          initialValues={{
            name: user.name,
            lastname: '',
            dateOfBirty: '',
            zipCode: '',
            email: user.email,
          }}
          validationSchema={userSchema}
        >
          <Form className='container' onSubmit={handleOnSubmit}>
            <div className='grid gap-x-64 mb-6 grid-cols-8 grid-rows-5 '>
              <div className='col-start-1 col-end-2 row-start-1 row-end-2 mt-8 '>
                <label
                  className=' font-bold block text-labelColor whitespace-nowrap'
                  htmlFor='password'
                >
                  CLIENTE O PROFESIONAL?
                </label>
                <Field
                  as='select'
                  name='oficios'
                  id='oficios'
                  type='password'
                  className='py-2  focus: outline-focusColor rounded-xl border-labelGrayColor border-2 pl-0 text-center'
                  value={selectUsuario}
                  onChange={handleSelectUsuario}
                >
                  <option hidden selected>
                    Selecciona una opción
                  </option>
                  <option value='cliente'>Cliente</option>
                  <option value='profesional'>Profesional</option>
                </Field>

                <ErrorMessage
                  name='oficios'
                  component='p'
                  className='font-bold  text-[#ffffff]'
                />
              </div>
              {selectUsuario === 'cliente' ? (
                <>
                  <div className=' w-full col-span-1 row-start-2 row-end-3 -mr-6 flex-shrink-0 mt-5'>
                    <label className='font-bold block text-labelColor  '>
                      Nombre
                    </label>
                    <Field
                      name='name'
                      id='name'
                      type='text'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl border-labelGrayColor border-2'
                    />
                    <ErrorMessage
                      name='name'
                      component='p'
                      className='text-labelColor whitespace-nowrap'
                    />
                  </div>
                  <div className=' w-full col-start-2 col-end-3 row-start-2 row-end-3 -mr-6 flex-shrink-0 mt-5'>
                    <label
                      className='  font-bold block text-labelColor  '
                      htmlFor='password '
                    >
                      Apellido
                    </label>
                    <Field
                      name='lastname'
                      id='lastname'
                      type='text'
                      className='  px-2 py-2 focus: outline-focusColor  rounded-xl border-labelGrayColor border-2 placeholder:-translate-x-6'
                    />
                    <ErrorMessage
                      name='lastname'
                      component='p'
                      className='text-labelColor whitespace-nowrap'
                    />
                  </div>
                  <div className='w-full col-start-3 col-end-4 row-start-2 row-end-3 -mr-6 flex-shrink-0 mt-5'>
                    <label
                      className=' font-bold block text-labelColor whitespace-nowrap '
                      htmlFor='email'
                    >
                      Nuevo Email
                    </label>
                    <Field
                      name='email'
                      id='email'
                      type='email'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl   border-labelGrayColor border-2 placeholder:-translate-x-6 '
                    />
                    <ErrorMessage
                      name='passwordConfirmation'
                      component='p'
                      className='text-labelColor whitespace-nowrap'
                    />
                  </div>
                  <div className='col-start-1 col-end-2 item '>
                    <button
                      type='submit'
                      className='bg-btnColor w-48 h-12  rounded-xl text-xl  text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-8  hover:shadow-228b active:shadow'
                    >
                      Guardar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className=' w-full col-span-1 row-start-2 row-end-3 -mr-6 flex-shrink-0 -mt-12'>
                    <label className='font-bold block text-labelColor  '>
                      Nombre
                    </label>
                    <Field
                      name='name'
                      id='name'
                      type='text'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl border-labelGrayColor border-2'
                    />
                    <ErrorMessage
                      name='name'
                      component='p'
                      className=' text-labelColor whitespace-nowrap'
                    />
                  </div>
                  <div className=' w-full col-start-2 col-end-3 row-start-2 row-end-3 -mr-6 flex-shrink-0 -mt-12'>
                    <label
                      className='  font-bold block text-labelColor  '
                      htmlFor='password '
                    >
                      Apellido
                    </label>
                    <Field
                      name='lastname'
                      id='lastname'
                      type='text'
                      className='  px-2 py-2 focus: outline-focusColor  rounded-xl border-labelGrayColor border-2 placeholder:-translate-x-6'
                    />
                    <ErrorMessage
                      name='lastname'
                      component='p'
                      className=' text-labelColor whitespace-nowrap'
                    />
                  </div>
                  <div className='w-full col-start-3 col-end-4 row-start-2 row-end-3 -mr-6 flex-shrink-0 -mt-12'>
                    <label
                      className=' font-bold block text-labelColor whitespace-nowrap '
                      htmlFor='email'
                    >
                      Nuevo Email
                    </label>
                    <Field
                      name='email'
                      id='email'
                      type='email'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl   border-labelGrayColor border-2 placeholder:-translate-x-6 '
                    />
                    <ErrorMessage
                      name='passwordConfirmation'
                      component='p'
                      className=' text-labelColor whitespace-nowrap'
                    />
                  </div>

                  <div className=' w-full row-start-2 row-end-3 col-start-4 col-end-5 -mr-6 flex-shrink-0 -mt-12'>
                    <label
                      className=' font-bold block text-labelColor whitespace-nowrap '
                      htmlFor='telefono'
                    >
                      Teléfono de contacto
                    </label>
                    <Field
                      name='telefono'
                      id='telefono'
                      type='number'
                      className=' px-2 py-2 focus: outline-focusColor  rounded-xl   border-labelGrayColor border-2 placeholder:-translate-x-6 '
                    />
                    <ErrorMessage
                      name='telefono'
                      component='p'
                      className='whitespace-nowrap text-labelColor'
                    />
                  </div>
                  <div className='row-start-3 row-end-4 col-start-1 col-end-2 -mr-6 flex-shrink-0 -mt-24'>
                    <label
                      className=' font-bold block text-labelColor mt-5 '
                      htmlFor='pais'
                    >
                      Pais
                    </label>
                    <Field
                      as='select'
                      name='pais'
                      id='pais'
                      type='text'
                      className='px-2 py-2.5 focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                    >
                      <option hidden selected>
                        Selecciona una opción
                      </option>
                      <option value='argentina'>Argentina</option>
                      <option value='chile'>Chile</option>
                      <option value='colombia'>Colombia</option>
                      <option value='ecuador'>Ecuador</option>
                    </Field>
                    <ErrorMessage
                      name='passwordConfirmation'
                      component='p'
                      className='whitespace-nowrap text-labelColor'
                    />
                  </div>
                  <div className='col-start-2 col-end-3 row-start-3 row-end-4 -mr-6 flex-shrink-0 -mt-24'>
                    <label
                      className=' font-bold block text-labelColor mt-5 '
                      htmlFor='ciudad'
                    >
                      Ciudad/Provincia
                    </label>
                    <Field
                      name='ciudad'
                      id='ciudad'
                      type='text'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                    />
                    <ErrorMessage
                      name='ciudad'
                      component='p'
                      className='whitespace-nowrap text-labelColor'
                    />
                  </div>
                  <div className='col-start-3 col-end-4 row-start-3 row-end-4 -mr-6 flex-shrink-0 -mt-24'>
                    <label
                      className=' font-bold block whitespace-nowrap text-labelColor mt-5 '
                      htmlFor='zipCode'
                    >
                      Código Postal
                    </label>
                    <Field
                      name='zipCode'
                      id='zipCode'
                      type='number'
                      className='  px-2 py-2 focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                    />
                    <ErrorMessage
                      name='zipCode'
                      component='p'
                      className='whitespace-nowrap text-labelColor'
                    />
                  </div>
                  <div className='col-start-4 col-end-5 row-start-3 row-end-4 -mr-6 flex-shrink-0 -mt-24'>
                    <label
                      className=' font-bold block text-labelColor mt-5 whitespace-nowrap'
                      htmlFor='password'
                    >
                      Fecha de nacimiento
                    </label>
                    <Field
                      name='dateOfBirty'
                      id='dateOfBirty'
                      type='date'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                    />
                    <ErrorMessage
                      name='dateOfBirty'
                      component='p'
                      className='whitespace-nowrap text-labelColor'
                    />
                  </div>
                  <div className='col-start-1 col-end-2 -mr-6 flex-shrink-0 -mt-24'>
                    <label
                      className=' font-bold block text-labelColor mt-5 '
                      htmlFor='password'
                    >
                      Oficio
                    </label>
                    <Field
                      as='select'
                      name='oficios'
                      id='oficios'
                      type='password'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl border-labelGrayColor border-2 placeholder:-translate-x-6  '
                    >
                      <option hidden selected>
                        Selecciona una opción
                      </option>
                      <option value='gasista'>Gasista</option>
                      <option value='electricista'>Electricista</option>
                      <option value='jardinero'>Jardinero</option>
                      <option value='cerrajero'>Cerrajero</option>
                    </Field>

                    <ErrorMessage
                      name='oficios'
                      component='p'
                      className='font-bold  text-[#ffffff]'
                    />
                  </div>
                  <div className='col-start-1 col-end-2 item '>
                    <button
                      type='submit'
                      className='bg-btnColor w-48 h-12  rounded-xl text-xl  text-[#ffffff] font-bold  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#83e3be]  disabled:cursor-not-allowed  mt-28  hover:shadow-228b active:shadow'
                    >
                      Guardar
                    </button>
                  </div>
                </>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditProfileProfessional;
