import { View, Text, FlatList } from "react-native";
import { useContext, useState } from "react";
import { todoContext } from "../contexts/TodoNameProvider";
import style from "../styles/MainStyles";
import { Checkbox } from 'react-native-paper';


function TodoListItem() {

    const { listData, setCompletedTasks, setNumberOfTasks } = useContext(todoContext);

    const [doneTasks, setDoneTasks] = useState({});

    const [tasksToDelete, setTasksToDelete] = useState([]);


    const onDoneChecked = (taskId) => {

        setDoneTasks(
            (prevState) => (
                { ...prevState, [taskId]: !prevState[taskId] }
            )
        );

        setCompletedTasks(
            (prevState) => (
                doneTasks[taskId] ? prevState - 1 : prevState + 1
            )
        );

    };

    const onDeleteChecked = (taskId) => {

        if (tasksToDelete.includes(taskId)) {
            setTasksToDelete(
                (prevState) => (
                    prevState.filter((id) => id !== taskId)
                )
            );
        }
        else {
            setTasksToDelete(
                (prevState) => (
                    [...prevState, taskId]
                )
            );
        }

        setNumberOfTasks(
            (prevState) => (
                prevState - 1
            )
        );

        setCompletedTasks(
            (prevState) => (
                (prevState > 0 && doneTasks[taskId] == true) ? prevState - 1 : prevState
            )
        );

    };


    const renderTodoItem = ({ item }) => {

        const isDoneChecked = doneTasks[item.id] || false;

        const isDeleteChecked = tasksToDelete.includes(item.id);

        return (

            <View style={style.listItemStyle}>

                <Text numberOfLines={1} >{(item.title.length > 13)? item.title.substring(0, 13) + '...' : item.title }</Text>

                <Checkbox.Item label="Done" status={isDoneChecked ? 'checked' : 'unchecked'} onPress={() => onDoneChecked(item.id)} />

                <Checkbox.Item label="Delete" status={isDeleteChecked ? 'checked' : 'unchecked'} onPress={() => onDeleteChecked(item.id)} />

            </View>

        );
    };


    return (

        <>
            {
                (Object.keys(listData[0]).length != 0) &&

                <FlatList

                    data={listData.filter((task) => !tasksToDelete.includes(task.id))}

                    renderItem={renderTodoItem}

                    keyExtractor={(item) => item.id}

                    numColumns={1}

                    contentContainerStyle={{ alignItems: 'center' }}
                />
            }

        </>




    );
}

export default TodoListItem;