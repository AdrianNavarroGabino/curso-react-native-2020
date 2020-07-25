import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
// He definido "name": "todoList" en package.json para definir el nombre de la carpeta raíz
import TodoList from "todoList/src/components/TodoList";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

//const todos = ["Tarea 1", "Tarea 2", "Tarea 3"];
const todos = [
    {text: "Tarea 1", done: false},
    {text: "Tarea 2", done: false},
    {text: "Tarea 3", done: false},
    {text: "Tarea 4", done: true}];

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text selectable>ToDo List App</Text>

                <TodoList todos={todos}/>
            </View>
        );
    }
}

export default MainScreen;