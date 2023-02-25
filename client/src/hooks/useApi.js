import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jobsFetched } from '../features/jobs/jobsSlice';
import axios from 'axios';
import { professionalsFetched } from '../features/professionalsSlice/professionalsSlice';

export function useApi(
  initialValue = 'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/'
) {
  const dispatch = useDispatch();

  const url = initialValue;

  const readJobs = async () => {
    axios
      .get(`${url}jobs`)
      .then((resp) => {
        dispatch(jobsFetched(resp.data.jobs));
      })
      .catch((err) => console.error(err));
  };

  const postUser = (data) => {
    console.log(data, 'DATA');
    return new Promise((resolve, reject) =>
      fetch(
        'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Connection: 'keep-alive',
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    );
  };

  const userLogin = (data) => {
    axios
      .post(`${url}/auth/login`)
      .then((resp) => {
        console.log(resp, 'RESPUESTALOGIN');
        dispatch(userFetched(resp.status));
      })
      .catch((err) => console.error(err));
  };

  const professionalsList = (data) => {
    axios
      .get(`${url}user?professional=true&job=${data.id}`)
      .then((resp) => {
        dispatch(professionalsFetched(resp.data.responseGetUser));
      })
      .catch((err) => console.log(err));
  };

  return [readJobs, postUser, userLogin, professionalsList];
}
