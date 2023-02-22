import { useState } from "react";
import axios from "axios";


 
export function useApi(initialValue = "https://container-service-1.utth4a3kjn6m0.us-west-2.cs.amazonlightsail.com/") {
  const [dataBase, setDataBase] = useState(null);
  const [servicios, setServicios] = useState(null);
  


  
  const url = initialValue;

    const fetchServicios = () => {      

      axios.get(`${url}jobs`).then((resp) => {
        /* setValores({
              shablon: [(resp.data.shablon_nuevo + resp.data.shablon_bajada + resp.data.shablon_grabado), (resp.data.shablon_usado + resp.data.shablon_borrado + resp.data.shablon_bajada + resp.data.shablon_grabado)],
              rendimiento: [[resp.data.logo_claro, resp.data.central_claro, resp.data.full_claro], [resp.data.logo_oscuro, resp.data.central_oscuro, resp.data.full_oscuro]],
              colores: [[resp.data.agua_fc, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, 0, resp.data.dyp], [resp.data.agua_fo, resp.data.plastisol, resp.data.relieve, resp.data.foil, resp.data.glitter, resp.data.corrosion, resp.data.dyp]]
        }); */
        setServicios(resp.data)
      })
      .catch(err => console.error(err))
      .then(item => {
        

      });

      
    };

  const login = (user, pass, openLoginError)=>{
    

    axios.get(`${url}users`).then((resp) => {
      
      const index = resp.data.findIndex((cuenta => cuenta.user === user ));
      const usuario = (resp.data[index]);
      

      if(index >= 0){

        bcrypt.compare(pass, usuario.password, (err, isMatch)=>{
          if(err){
            throw err
          }else if(!isMatch){
            openLoginError()
          }else{
            window.localStorage.setItem("login", JSON.stringify({user: usuario.user, idbase: usuario.idbase, logged: true}))

            window.location.replace("/configuracion");
          }
        }) 

      } else{
        openLoginError()
      }
     
      
    })
  }





  const leerBD = () => {
    axios.get(`${url}content/${initialValue}`).then((resp) => {
      setDataBase(resp.data);
    }).catch(err => console.log(err));
  };

  const postDB = (newValue)=>{

    

    axios.patch(`${url}/updateBase/${initialValue}`, newValue)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return [servicios, fetchServicios, login, leerBD, postDB, dataBase, setDataBase];
}

