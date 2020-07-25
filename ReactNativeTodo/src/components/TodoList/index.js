import React, {Fragment} from 'react';
import { Text, View } from 'react-native';
// rncsl + tab

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
            !todo.done && <Text key={todo.text}>{todo.text}</Text>
        ))}
    </Fragment>
);

export default TodoList;
