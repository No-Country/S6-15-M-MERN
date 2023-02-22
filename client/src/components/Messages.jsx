import React, { useState } from 'react';

const Messages = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  console.log(name, email);

  return (
    <div>
      <form className='grid grid-cols-12'>
        <div class='mb-6 col-start-5 col-end-7'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Name:
          </label>
          <input
            type='text'
            id='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required
            autoComplete='off'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div class='mb-6'>
          <label
            for='email'
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@contrata.com'
            required
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div class='flex items-start mb-6 col-start-5 col-end-7'>
          <div class='flex items-center h-5'>
            <input
              id='remember'
              type='checkbox'
              value=''
              class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
              required
            />
          </div>
          <label
            for='remember'
            class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Remember me
          </label>
        </div>

        <div className='col-start-5 col-end-7'>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Message:
          </label>
          <textarea
            id='message'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your message...'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          ></textarea>
        </div>
        <button
          type='submit'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          href={`mailto:${email}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Messages;
