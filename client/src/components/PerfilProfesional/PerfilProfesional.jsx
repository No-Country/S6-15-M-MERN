import Foto from '../../assets/profile.jpeg';
import Icon from '../../assets/Icon.png';
import Telefono from '../../assets/Telefono.png';
import Correo from '../../assets/Correo.png';
import envelope from '../../assets/envelope.png';
import { opcionesApp } from '../../utils/opcionesApp';
import marta from '../../assets/marta.png';

import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function PerfilProfesional() {
  const profile = useSelector((state) => state.profile);
  const jobs = useSelector((state) => state.jobs);

  const { returnJob, returnBanners } = opcionesApp();

  const [imagen, setImagen] = useState(
    'https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/banners%2Felectricista.png?alt=media&token=41be896c-0152-4d4c-a6c4-79f14258b954'
  );

  const [readJobs, , , , getProfessional] = useApi();

  const [searchparams] = useSearchParams();

  /* {profesionalId === JSON.parse(localStorage.getItem("user")).id && console.log("Si")} */

  const profesionalId = searchparams.get('id');
  /*  console.log(profesionalId);
  console.log(JSON.parse(localStorage.getItem("user")).id);
 */

  useEffect(() => {
    readJobs();
    getProfessional(profesionalId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        jobs.jobs.filter((job) => job._id === profile.profile.user.job)[0] !==
          undefined &&
        profile.profile.user !== undefined
      ) {
        setImagen(
          jobs.jobs.filter((job) => job._id === profile.profile.user.job)[0]
            .jobBannerUrl
        );
      }
    }, 1000);
  });

  const navigate = useNavigate();

  const sendMessage = () => {
    const email = profile.profile.user.email;
    navigate('/sol-servicio', { state: { email } });
  };

  return (
    <div>
      {/* <span className="w-[284px] ml-[10px]  top-[-4] font-['Nunito Sans'] not-italic font-bold leading-[33px] flex items-center text-[#083A50] mb-3">
        Configuración de tu perfil
      </span> */}

      <img
        className='w-full height-[146px] flex-none order-1 self-stretch grow-0'
        src={returnBanners(profile.profile.user.job)}
      />
      <div className='container mx-auto  '>
        <div className='flex w-full'>
          <div className=''>
            <div className='relative top-[-55px] flex flex-col'>
              <img
                className='w-64 h-64 max-[1625px]:w-52 max-[1625px]:h-52 max-[1280px]:w-48 max-[1280px]:h-48 max-[1024px]:w-48 max-[1024px]:h-48 max-[768px]:w-44 max-[768px]:h-44  mx-auto rounded-full border-8 border-[#26B893] border-opacity-50 '
                src={
                  profile.profile.user.avatarURL !== ''
                    ? profile.profile.user.avatarURL
                    : Foto
                }
              />
              {profesionalId ===
                JSON.parse(localStorage.getItem('user')).id && (
                <button className='bg-[#43936c] w-9 h-9 rounded-full text-white relative left-[116px] top-[-25px]'>
                  <FontAwesomeIcon icon={faUpload} />
                </button>
              )}

              {/* <img
            className='relative flex flex-row justify-center items-center p-0 gap-4 left-[10px] top-[-200px] w-[204px]'
            src={Enviame}
          /> */}
            </div>

            <div className='flex flex-row max-[502px]:-mt-[140px] '>
              <img
                className=' ml-4' /* 'relative left-[15px] right-[12.5%] top-[-250px] bottom-[12.5%]' */
                src={Telefono}
              />
              <p className='ml-4'>+ 59 1 1001 8830</p>
            </div>

            <div className='flex flex-row items-center mt-4'>
              <img className='ml-4 h-4' src={Correo} />
              <p className='m-4'>{profile.profile.user.email}</p>
            </div>

            {/* ES ACA EL BOTONNNNNNNNN */}

            <div className='w-full flex justify-center '>
              <button
                onClick={sendMessage}
                className=' max-[600px]:w-40  bg-[#43936c] text-white py-3 px-8 rounded-lg w-48 whitespace-nowrap m-2 flex'
              >
                <img
                  src={envelope}
                  alt='envelope'
                  className='ml-4 w-4 mt-[3px] max-[600px]:ml-0'
                />{' '}
                <p className=' ml-4'>Mensaje</p>{' '}
              </button>
            </div>
          </div>
          <div className='flex-col max-[662px]:-ml-16 max-[662px]:w-[395px] max-[662px]:mr-4 max-[502px]:mt-[160px] '>
            <h1 className='font-inter mt-5  not-italic font-bold max-[662px]:text-[28px] text-[39px] leading-[120%] flex items-center  ml-[100px] text-[#083A50]'>
              {profile.profile.user.name}
            </h1>
            <p className="font-['Inter'] not-italic font-semibold text-[18px] leading-[24px] top-[-158px] ml-[100px] mt-2 text-[#083A50]">
              {returnJob(profile.profile.user.job)}
            </p>

            <div className='flex mt-4'>
              <img
                className=' left-[260px] right-[16.67%] top-[-148px] bottom-[7.03%] ml-[100px]'
                src={Icon}
              />
              <p className=" font-['Inter'] not-italic font-normal text-[13px] leading-[120%] top-[-166px] ml-2 flex items-center text-[#083A50]">
                {profile.profile.user.city}
              </p>
            </div>

            <div>
              <p className=" font-['Inter'] mt-16 not-italic font-normal text-[18px] leading-[24px] max-[662px]:text-[14px] max-w-[832px]  ml-[100px] text-[#28315C] bg-[#F5F5F5] rounded-lg p-4">
                {profile.profile.user.description}
              </p>
            </div>
            {/*ACA VA EL CAROUSEL???????????? */}
            <div className=' mt-60'>
              <p className=' ml-[100px] font-bold text-3xl'>
                Proyectos más recientes
              </p>
            </div>
            <div>
              {profesionalId ===
                JSON.parse(localStorage.getItem('user')).id && (
                <div className=' ml-[100px]'>
                  <button className=' w-40 h-10 bg-[#43936c] rounded-lg text-white mt-10'>
                    Subir fotos
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className=''>
        <OurServices />
      </div>

      <div className=''>
        <Reviews className='absolute' />
      </div> */}

        <div className=''></div>
      </div>
    </div>
  );
}
