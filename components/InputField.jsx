import { useContext } from 'react';
import { TextInput } from 'react-native-paper';
import style from '../styles/MainStyles';
import { todoContext } from '../contexts/TodoNameProvider';


function InputField() {

    const {todoName, setTodoName} = useContext(todoContext);

    return (

        <TextInput
        
            label='Task Name...'
            value={todoName}
            onChangeText={(name) => setTodoName(name)}
            style={style.inputFieldStyle}
        />
        
    );
}

export default InputField;