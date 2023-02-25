import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  const buenosAiresRef = useRef(null);

  function handleSelect() {
    if (buenosAiresRef.classList.contains(buenos - aires)) {
    }
  }

  return (
    <Menu as='div' className='relative inline-block text-right'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          Todas las ciudades
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <button
                  ref={buenosAiresRef}
                  onClick={handleSelect}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm buenos-aires'
                  )}
                >
                  Buenos Aires
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Rosario
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Ciudad 3
                </Link>
              )}
            </Menu.Item>
            <form method='POST' action='#'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type='submit'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-right text-sm'
                    )}
                  >
                    Ciudad 4
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
