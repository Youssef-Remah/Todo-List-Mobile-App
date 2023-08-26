import { Text } from "react-native";
import { useContext } from "react";
import { todoContext } from "../contexts/TodoNameProvider";
import style from "../styles/MainStyles";

function ListTitle() {

    const {

        numberOfTasks,

        completedTasks

    } = useContext(todoContext);

    return (

        <Text style={style.listTitleStyle}>

            {`${completedTasks} Done of ${numberOfTasks} Tasks`}

        </Text>

    );
}

export default ListTitle;