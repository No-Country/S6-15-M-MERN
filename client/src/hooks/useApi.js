import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { jobsFetched } from '../features/jobs/jobsSlice';
import { userStatus } from "../features/user/userSlice";
import { professionalsFetched } from "../features/professionalsSlice/professionalsSlice"
import axios from 'axios';

export function useApi( initialValue = 'https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/' )  {
  const dispatch = useDispatch();

  const url = initialValue;

  const readJobs = async () => {      
      axios.get(`${url}jobs`)
      .then((resp) => {
        dispatch(
          jobsFetched(resp.data.jobs)
        )
      })
      .catch((err) => console.error(err));
  };



  const postUser = (data) => {
    console.log(data, 'DATA')
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
        .then((result) => {
          const verifiedUser ={
            token: result.user.token,
            id: result.user.user._id,
            professional: result.user.user.professional
          }
          
          dispatch(
            userStatus(verifiedUser)        
          )

          localStorage.setItem('user', JSON.stringify(verifiedUser));


          resolve(result)})
        .catch((error) => reject(error))
    );
  };
   
  const userLogin = (data)=>{
    axios.post(`${url}auth/login`, data)
    .then(function (response) {
      const verifiedUser ={
        token: response.data.responseUser.token,
        id: response.data.responseUser.user._id,
        professional: response.data.responseUser.user.professional
      }


      dispatch(
        userStatus(verifiedUser)        
      )

      localStorage.setItem('user', JSON.stringify(verifiedUser));

      
    })
    .catch(function (error) {
      console.log(error);
    });

   
  }

  const professionalsList = (id, city) => {
    let searchCity = "";

   (city != undefined) && (searchCity = "&city="+city);
  

    axios
      .get(`${url}user?job=${id}${searchCity}`)
      .then((resp) => {
        dispatch(professionalsFetched(resp.data.responseGetUser));
      })
      .catch((err) => console.log(err));
  };

 


  return [readJobs, postUser, userLogin, professionalsList];
}
