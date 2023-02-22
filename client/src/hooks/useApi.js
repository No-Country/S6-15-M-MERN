import { useState } from "react";
import { useDispatch } from "react-redux";
import { jobsFetched } from "../features/jobs/jobsSlice"
import axios from "axios";


 
export function useApi(initialValue = "https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/") {


  const dispatch = useDispatch();

  const url = initialValue;

    const readJobs = () => {      

      axios.get(`${url}jobs`).then((resp) => {
        dispatch(
          jobsFetched(resp.data.jobs)
        )
        /* console.log(resp.data) */
      })
      .catch(err => console.error(err))

      
    };

  const login = (user, pass)=>{

  }




  return [readJobs, login, serviceJobs];
}

