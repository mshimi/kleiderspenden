import { createContext, useState } from "react";

export const AreaContext = createContext();


export default function AreaContextProvider({children}) {


    

    const [formState, setFormState] = useState({isList: false, selectedOption : "0", search: ""});



    return (
        <AreaContext.Provider value={{formState,setFormState}}>
            {children}
        </AreaContext.Provider>
    );
}