import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useApi } from '../../hooks/useApi';

function EditProfileProfessional2() {
  const [userUpdatedStatus, setUserUpdatedStatus] = useState({});
  const [, , , , getProfessional] = useApi();
  const userStatus = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [selectUsuario, setSelectUsuario] = useState('false');
  const profile = useSelector((state) => state.profile);
  const updatedUser = profile.profile.user;
  /* 
  console.log(profile, 'EL USER STATUS'); */
  console.log(updatedUser, 'EL PROFESIONAL');

  useEffect(() => {
    console.log(userStatus.user.id);
    getProfessional(userStatus.user.id);
  }, []);

  const location = useLocation();
  const user = location.state;

  const [formData, setFormData] = useState({
    professional: updatedUser.professional,
    name: updatedUser.name,
    lastName: updatedUser.lastname,
    email: updatedUser.email,
    telefono: updatedUser.telefono,
    country: updatedUser.country,
    city: updatedUser.city,
    zipCode: updatedUser.zipCode,
    dateOfBirty: updatedUser.dateOfBirty,
    job: updatedUser.job,
    description: updatedUser.description,
  });

  const [newFormData, setNewFormData] = useState({
    professional: updatedUser.professional,
    name: updatedUser.name,
    lastName: updatedUser.lastname,
    email: updatedUser.email,
    telefono: updatedUser.telefono,
    country: updatedUser.country,
    city: updatedUser.city,
    zipCode: updatedUser.zipCode,
    dateOfBirty: updatedUser.dateOfBirty,
    job: updatedUser.job,
    description: updatedUser.description,
  });

  const postEditUser = (data) => {
    return new Promise((resolve, reject) =>
      fetch(
        'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/user/me',
        {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Connection: 'keep-alive',
            Authorization: `Bearer ${userStatus.user.token}`,
          },
        }
      )
        .then((res) => res.json(data))
        .then((result) => {
          resolve(result);
          console.log(result);
        })
        .catch((error) => reject(error))
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (userStatus.user.token) {
      postEditUser(newFormData);
      localStorage.setItem('newFormData', JSON.stringify(newFormData));
      navigate(`/perfilProfesional/${userStatus.user.id}`);
    } else {
      navigate('/login');
    }
  };

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });

    setNewFormData({
      ...formData,
      [name]: value,
      professional: selectUsuario,
    });
  }
  const handleSelectUsuario = (event) => {
    const select = event.target.value;
    setSelectUsuario(select);
    setNewFormData({ ...formData, professional: select });
  };
  /*   console.log(newFormData); */

  /*   useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('myFormData'));

    if (savedData) {
      setFormData({});
    }
  }, []); */

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
            professional: updatedUser.professional,
            name: updatedUser.name,
            lastName: updatedUser.lastname,
            email: updatedUser.email,
            telefono: updatedUser.telefono,
            country: updatedUser.country,
            city: updatedUser.city,
            zipCode: updatedUser.zipCode,
            dateOfBirty: updatedUser.dateOfBirty,
            job: updatedUser.job,
            description: updatedUser.description,
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
                  name='professional'
                  id='professional'
                  type='text'
                  className='py-2  focus: outline-focusColor rounded-xl border-labelGrayColor border-2 pl-0 text-center'
                  value={selectUsuario}
                  onChange={handleSelectUsuario}
                >
                  <option hidden selected>
                    Selecciona una opción
                  </option>
                  <option value='false'>Cliente</option>
                  <option value='true'>Profesional</option>
                </Field>

                <ErrorMessage
                  name='oficios'
                  component='p'
                  className='font-bold  text-[#ffffff]'
                />
              </div>
              {selectUsuario === 'false' ? (
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
                      onChange={handleOnChange}
                      value={formData.name}
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
                      name='lastName'
                      id='lastName'
                      type='text'
                      className='  px-2 py-2 focus: outline-focusColor  rounded-xl border-labelGrayColor border-2 placeholder:-translate-x-6'
                      onChange={handleOnChange}
                      value={formData.lastName}
                    />
                    <ErrorMessage
                      name='lastName'
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
                      onChange={handleOnChange}
                      value={formData.email}
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
                      onChange={handleOnChange}
                      value={formData.name}
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
                      name='lastName'
                      id='lastName'
                      type='text'
                      className='  px-2 py-2 focus: outline-focusColor  rounded-xl border-labelGrayColor border-2 placeholder:-translate-x-6'
                      onChange={handleOnChange}
                      value={formData.lastName}
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
                      onChange={handleOnChange}
                      value={formData.email}
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
                      onChange={handleOnChange}
                      value={formData.telefono}
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
                      htmlFor='country'
                    >
                      Pais
                    </label>
                    <Field
                      as='select'
                      name='country'
                      id='country'
                      type='text'
                      className='px-2 py-2.5 focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                      onChange={handleOnChange}
                      value={formData.pais}
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
                      htmlFor='city'
                    >
                      Ciudad/Provincia
                    </label>
                    <Field
                      name='city'
                      id='city'
                      type='text'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                      onChange={handleOnChange}
                      value={formData.ciudad}
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
                      onChange={handleOnChange}
                      value={formData.zipCode}
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
                      onChange={handleOnChange}
                      value={formData.dateOfBirty}
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
                      name='job'
                      id='job'
                      type='password'
                      className=' px-2 py-2 focus: outline-focusColor rounded-xl border-labelGrayColor border-2 placeholder:-translate-x-6  '
                      onChange={handleOnChange}
                      value={formData.job}
                    >
                      <option hidden selected>
                        Selecciona una opción
                      </option>
                      <option value='63f4c2d13174deb8a1c47222'>
                        Electricista
                      </option>
                      <option value='63f4c2fc3174deb8a1c47227'>Soldador</option>
                      <option value='63f4c3423174deb8a1c4722a'>
                        Electrónico
                      </option>
                      <option value='63f4c4583174deb8a1c47231'>Médico</option>
                      <option value='63f4c62a3174deb8a1c47242'>
                        Constructor
                      </option>
                      <option value='63f4c6683174deb8a1c47244'>
                        Veterinario
                      </option>
                      <option value='63f4c6a33174deb8a1c47246'>
                        Enfermero
                      </option>
                      <option value='63f4c87e3174deb8a1c4724d'>
                        Fotógrafo
                      </option>
                    </Field>

                    <ErrorMessage
                      name='job'
                      component='p'
                      className='font-bold  text-[#ffffff]'
                    />
                  </div>
                  <div className='col-start-2 col-end-5 row-start-4 row-end-6 -mr-6 flex-shrink-0 -mt-24'>
                    <label
                      className=' font-bold block text-labelColor mt-5 whitespace-nowrap'
                      htmlFor='password'
                    >
                      Descripción
                    </label>
                    <Field
                      name='description'
                      id='description'
                      type='textarea'
                      className=' w-full px-2 pb-24 text-start focus: outline-focusColor rounded-xl  border-labelGrayColor border-2 placeholder:-translate-x-6  '
                      onChange={handleOnChange}
                      value={formData.description}
                    />
                    <ErrorMessage
                      name='description'
                      component='p'
                      className='whitespace-nowrap text-labelColor'
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

export default EditProfileProfessional2;
