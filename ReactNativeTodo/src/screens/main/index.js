import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
// He definido "name": "todoList" en package.json para definir el nombre de la carpeta raíz
import TodoList from "todoList/src/components/TodoList";
import {getTodos} from "todoList/src/data/todos";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    componentDidMount = () => {
        this.setState({todos:getTodos()});
    }

    render() {
        //const {todos} = this.state;
        return (
            <View style={styles.container}>
                <Text selectable>ToDo List App</Text>

                <TodoList todos={this.state.todos}/>
            </View>
        );
    }
}

export default MainScreen;