import { useEffect } from "react";
function GoogleLogin({clientId, cbresponse, uriresponse}) {

    useEffect(() => {
        const google = window.google;
        // const widthView = window.innerWidth <= 360 ? 300 : 350;
        const sizes = window.innerWidth <= 360 ? "medium" : "large";
        /* global google */
        google.accounts.id.initialize({
          client_id: clientId,
          callback: cbresponse,
          ux_mode: "redirect",
          login_uri: uriresponse
        });
    
        google.accounts.id.renderButton(document.getElementById("googleLogin"), {
          theme: "outline",
          shape: "circle",
          size: sizes
          //width: widthView
        });
      }, []);

  return (
    <div id="googleLogin"></div>
  )
}

export default GoogleLogin