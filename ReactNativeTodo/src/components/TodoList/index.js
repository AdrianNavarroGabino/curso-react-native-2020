import React, {Fragment} from 'react';
import { Text, View, StyleSheet } from 'react-native';
// rncsl + tab

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        margin: 5,
        width: "80%"
    },
    text: {
        padding: 5,
        fontWeight: 'bold'
    },
    textDone: {
        color: '#aaa',
        textDecorationLine: 'line-through',
        fontWeight: 'normal'
    }
})

const TodoList = ({
    todos,
}) => (
    <Fragment>
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
            <View style={styles.listItem} key={todo.text}>
                <Text style={[styles.text, todo.done && styles.textDone]}>{todo.text}</Text>
            </View>
        ))}
    </Fragment>
);

export default TodoList;
