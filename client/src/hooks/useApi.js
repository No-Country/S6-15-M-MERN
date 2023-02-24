import { useState } from "react";
import { useDispatch } from "react-redux";
import { jobsFetched } from "../features/jobs/jobsSlice"
import axios from "axios";


 
export function useApi(initialValue = "https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/") {


  const dispatch = useDispatch();

  const url = initialValue;

    const readJobs = async () => {      

      axios.get(`${url}jobs`).then((resp) => {
        dispatch(
          jobsFetched(resp.data.jobs)
        )
        /* console.log(resp.data) */
      })
      .catch(err => console.error(err))

      
    };

  const login = (name,email,pass)=>{
    axios.get(`${url}/auth/register`).then((resp) => {
      dispatch(
        jobsFetched(resp.data.jobs)
      )
      /* console.log(resp.data) */
    })
    .catch(err => console.error(err))
  }


  const registrerUser = (name,email,pass)=>{
    axios.get(`${url}/auth/register`).then((resp) => {
      dispatch(
        registerFetched(resp.data.user)
      )
      /* console.log(resp.data) */
    })
    .catch(err => console.error(err))
  }


  return [readJobs, login, registrerUser];
}

