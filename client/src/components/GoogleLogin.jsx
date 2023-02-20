import { useEffect, useState } from "react"

export default function GoogleLogin({clientId, cbresponse}) {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)

  useEffect(() => {
    if (gsiScriptLoaded) {return}

    const initializeGsi = () => {
      if (!window.google || gsiScriptLoaded) {return}

      setGsiScriptLoaded(true)
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: cbresponse
      });
      window.google.accounts.id.renderButton(document.getElementById("g_id_signin"),{
        size:"large",
        shape: "pill",
        theme: "outlined"
      })
    }

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.onload = initializeGsi
    script.async = true
    script.id = "google-client-script"
    document.querySelector("body")?.appendChild(script)

    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel()
      document.getElementById("google-client-script")?.remove()
    }
  }, [cbresponse, gsiScriptLoaded])




// const handleGoogleSignIn = (res) => {
//   if (!res.clientId || !res.credential) return;

//     // Implement your login mutations and logic here.
//     // Set cookies, call your backend, etc. 

//     setUser(val.data?.login.user);
//   }

return <div className={"g_id_signin"} />

}
