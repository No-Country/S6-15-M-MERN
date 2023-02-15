import { useState } from "react";

export function BoolHook(initialValue = true){
    const [booleanHook, setBooleanHook] = useState(initialValue);

    const switchValue = ()=>{booleanHook? setBooleanHook(!booleanHook): setBooleanHook(!booleanHook)};

    

    return[booleanHook, switchValue]
}