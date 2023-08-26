import { createContext, useState } from "react";


export const warningContext = createContext(); 

function WarningsContextProvider({children}) {

    const [taskNameLengthWarning, setTaskNameLengthWarning] = useState("");

    return (
        
        <warningContext.Provider 
        
            value={{
                taskNameLengthWarning,
                setTaskNameLengthWarning
            }}
        >

            {children}
            
        </warningContext.Provider>



    );
}

export default WarningsContextProvider;