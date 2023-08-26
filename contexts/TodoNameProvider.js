import { createContext, useState } from "react";

export const todoContext = createContext();

function TodoNameProvider({children}) {

    const [todoName, setTodoName] = useState("");

    const [numberOfTasks, setNumberOfTasks] = useState(0);

    const [completedTasks, setCompletedTasks] = useState(0);

    const [listData, setListData] = useState([{}]);
    

    return (

        <todoContext.Provider
        
        value={{
            
            todoName,
            setTodoName,
            numberOfTasks,
            setNumberOfTasks,
            completedTasks,
            setCompletedTasks,
            listData,
            setListData,
        }}
        
        >

            {children}

        </todoContext.Provider>
        
    );
}

export default TodoNameProvider;