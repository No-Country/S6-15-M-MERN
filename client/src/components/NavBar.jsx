import React, { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import contrata from '../assets/contrata.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const solutions = [
  {
    name: 'Servicios',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/servicios',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'FAQs',
    description: "Connect with third-party tools that you're already using.",
    href: 'faq',
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ changeModal, isUserLogged }) {
  const userStatus = useSelector((state) => state.user);
  const navigate = useNavigate();

  const deleteLocal = () => {
    localStorage.removeItem('user');
    window.location.replace('/');
  };

  const handleClick = () => {
    console.log(changeStatus());
  };

  const navigateProfile = () => {
    navigate('/perfil');
  };

  return (
    <Popover className='relative bg-backgroundColor '>
      <div className='px-7'>
        <div className='flex items-center  py-6  md:space-x-10'>
          <div className='flex justify-start mr-auto '>
            <Link to='/'>
              <span className='sr-only'>Your Company</span>
              <img className='h-9 ml-3 w-auto sm:h-10' src={contrata} alt='' />
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Abrir menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group
            as='nav'
            className='hidden space-x-10 md:flex justify-center '
          >
            <Link
              to={'/servicios'}
              className='ml-3 text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Servicios
            </Link>

            <Link
              to='/faq'
              className='ml-3 text-base font-medium text-gray-500 hover:text-gray-900'
            >
              FAQ´s
            </Link>
            {userStatus.user.token ? (
              <p
                onClick={deleteLocal}
                className='ml-3 text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
              >
                Log Out
              </p>
            ) : (
              <></>
            )}
          </Popover.Group>
          {!userStatus.user.token ? (
            <div className='hidden items-center justify-end md:flex md:flex-2 '>
              <button
                onClick={changeModal}
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent bg-buttons-buttonGreen px-4 py-2 text-base font-medium text-textWhite shadow-sm hover:bg-blueGeneral'
              >
                Registrarse
              </button>
            </div>
          ) : (
            <div>
              <img
                onClick={navigateProfile}
                className=' max-sm:hidden max-md:hidden cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full w-11 h-11 border-[#28315C] border-solid '
                src={userStatus.user.avatarURL.path}
              />
              {/* <button  className='inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent bg-buttons-buttonGreen px-4 py-2 text-base font-medium text-textWhite shadow-sm hover:bg-blueGeneral'
               onClick={deleteLocal}>Cerrar sesión</button> */}
            </div>
          )}
        </div>
      </div>
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-backgroundColor  shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src={contrata}
                    alt='Your Company'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-background-color p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Cerrar menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      <item.icon
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
                        aria-hidden='true'
                      />
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  {userStatus.user.token ? (
                    <p
                      onClick={deleteLocal}
                      className='ml-3 text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
                    >
                      Log Out
                    </p>
                  ) : (
                    <></>
                  )}
                </nav>
              </div>
            </div>
            {!userStatus.user.token ? (
              <div className='space-y-6 py-6 px-5'>
                <div>
                  <button
                    onClick={changeModal}
                    className='flex w-full items-center justify-center rounded-md border-transparent bg-buttons-buttonGreen px-4 py-2 text-base font-medium  shadow-sm hover:bg-blueGeneral'
                  >
                    Registrarse
                  </button>
                </div>
              </div>
            ) : (
              <div className='space-y-6 py-6 px-5'>
                <div>
                  <button
                    onClick={navigateProfile}
                    className=' flex w-full items-center justify-center rounded-md border-transparent bg-buttons-buttonGreen  px-4 py-2 text-base font-medium  shadow-sm hover:bg-blueGeneral '
                  >
                    Perfil
                  </button>
                </div>
              </div>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
