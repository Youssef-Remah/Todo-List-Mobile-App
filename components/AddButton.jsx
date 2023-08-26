import { Button } from 'react-native-paper';
import style from '../styles/MainStyles';
import { useContext } from 'react';
import { todoContext } from '../contexts/TodoNameProvider';
import uuid from 'react-native-uuid';
import { warningContext } from '../contexts/WarningsContextProvider';


function AddButton() {

    const { todoName, setNumberOfTasks, setListData } = useContext(todoContext);

    const { taskNameLengthWarning, setTaskNameLengthWarning } = useContext(warningContext);


    const submitTask = () => {

        const regex = /^[^A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~\-\\]*$/;

        if (todoName.length < 4 || regex.test(todoName)) {
            
            setTaskNameLengthWarning(
                () => (
                    "Task Length Should be More Than 3 Valid Characters"
                )
            );

            return;
        }

        if(taskNameLengthWarning.length !== 0)
        {
            setTaskNameLengthWarning(
                () => (
                    ""
                )
            );

        }

        //create a new Id for the task

        const taskId = uuid.v4();

        //create a new task to add

        const newTask = {

            id: taskId,

            title: todoName,

        };

        //update the listData

        setListData((prevListData) => {

            if (prevListData.length === 1 && Object.keys(prevListData[0]).length === 0) {

                // Replace the empty object with the new task
                return [newTask];
            }

            else {

                // Append the new task to the existing listData
                return [...prevListData, newTask];
            }
        });

        //increment number of tasks

        setNumberOfTasks((oldNumberOfTasks) => oldNumberOfTasks + 1);

    };


    return (

        <Button mode='elevated' style={style.addButtonStyle} onPress={submitTask}>Add</Button>

    );
}

export default AddButton;