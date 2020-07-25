import React, {Component} from "react";
/*
SafeAreaView es un contenedor de react-native que hace que, cuando el contenido
empieza arriba, no aparezca sobre el notch.
Pero, si el móvil no tiene notch, aparecera sobre la barra de notificaciones,
por lo que, además de usar SafeAreaView, no estaría mal darle un marginTop de
30 para que baje un poco y no quede mal en ningún caso.
*/
import {SafeAreaView, View, Text, StyleSheet, TextInput, Button} from "react-native";
// He definido "name": "todoList" en package.json para definir el nombre de la carpeta raíz
import TodoList from "todoList/src/components/TodoList";
import { getTodos, addTodo, updateTodo, deleteTodo } from "todoList/src/data/todos";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // Alinea horizontalmente
      alignItems: 'center',
      // Alinea verticalmente
      //justifyContent: 'center',
      marginTop: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        flex: 1,
        borderBottomWidth: 1,
        fontSize: 20
    },
    addRow: {
        flexDirection: 'row',
        width: '80%'
    }
});

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            newTodo: null
        };
    }

    componentDidMount = () => {
        this.setState({todos:getTodos()});
    }

    handleAdd = () => {
        const { todos, newTodo } = this.state;
        const newList = addTodo(todos, {text: newTodo});
        this.setState({todos: newList, newTodo: null});
    }

    handleUpdate = todo => {
        const { todos } = this.state;
        const newList = updateTodo(todos, todo);
        this.setState({ todos: newList });
    };

    handleDelete = todo => {
        const { todos } = this.state;
        const newList = deleteTodo(todos, todo);
        this.setState({ todos: newList });
    }

    render() {
        const {todos, newTodo} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>ToDo List App</Text>

                <View style={styles.addRow}>
                    <TextInput
                        placeholder="Nuevo ToDo"
                        value={newTodo}
                        onChangeText={todo => this.setState({newTodo: todo})}
                        style={styles.text}
                        autoCapitalize="words"
                        /*
                        clearrButtonMode solo funciona en IOS
                        Pone una X al final del input para borrarlo todo
                        */
                        clearButtonMode="always"
                        /*
                        returnKeyType solo funciona en IOS
                        Cambia la tecla return por un tick en el teclado
                        */
                        returnKeyType="done"
                    />
                    <Button title="Añadir" onPress={this.handleAdd} />
                </View>
                <TodoList todos={todos} onUpdate={this.handleUpdate} onDelete={this.handleDelete} />
            </SafeAreaView>
        );
    }
}

export default MainScreen;