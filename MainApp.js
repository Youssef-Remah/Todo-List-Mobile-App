import { View, Text } from "react-native";
import AppBar from "./components/AppBar";
import InputField from "./components/InputField";
import AddButton from "./components/AddButton";
import ListTitle from "./components/ListTitle";
import TodoListItem from "./components/TodoListItem";
import { warningContext } from "./contexts/WarningsContextProvider";
import { useContext } from "react";


function MainApp() {

    const {taskNameLengthWarning} = useContext(warningContext);


    return (

        <>
            <View>

                <AppBar></AppBar>

            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                <InputField></InputField>

                <AddButton></AddButton>

            </View>

            <View style={{alignItems:'center'}}>

                {

                    (taskNameLengthWarning !== 0) && <Text>{taskNameLengthWarning}</Text>

                }

                <ListTitle/>

            </View>

            <View style={{ flex: 1}}>

                <TodoListItem/>

            </View>

        </>

    );
}

export default MainApp;