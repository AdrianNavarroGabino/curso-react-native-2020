import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

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

                {/*<Text>Tarea 1</Text>
                <Text>Tarea <Text>2</Text></Text>
                <Text>Tarea 3</Text>*/}

                {/*<Text>{todos[0]}</Text>
                <Text>{todos[1]}</Text>
                <Text>{todos[2]}</Text>*/}

                {todos.map(todo => (
                    /*
                    Equivalente a
                    todo.done ? null : <Text key={todo.text}>{todo.text}</Text>
                    */
                    !todo.done && <Text key={todo.text}>{todo.text}</Text>
                ))}
            </View>
        );
    }
}

export default MainScreen;