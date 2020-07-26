import React, {Fragment} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// rncsl + tab

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    contentContainer: {
        flexGrow: 1
    },
    listItem: {
        margin: 5,
        padding: 5,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center'
    },
    bullet: {
        width: '10%'
    },
    text: {
        flex: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    textDone: {
        color: '#aaa',
        textDecorationLine: 'line-through',
        fontWeight: 'normal'
    },
    delete: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center"
    },
    deleteText: {
        color: '#ff0000',
        fontSize: 18
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
    }
})

const TodoList = ({
    todos, onUpdate, onDelete
}) => {
    renderItem = todo => (
        <TouchableOpacity style={styles.listItem} key={todo.text} onPress={() => onUpdate({...todo, done: !todo.done})}>
            <Text style={styles.bullet}>-</Text>
            <Text style={[styles.text, todo.done && styles.textDone]}>{todo.text}</Text>
            <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
                <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
    
    renderSeparator = () => {
        return <View style={styles.separator} />;
    };
    
    renderEmptyComponent = () => (
        <View style={styles.emptyList}>
          <Text>Lista Vacia</Text>
        </View>
    );
    
    return (
        <FlatList
            style={styles.container}
            data={todos}
            keyExtractor={todo => todo.id}
            renderItem={({item}) => renderItem(item)}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={renderEmptyComponent}
        />)
    /*
    // Un ScrollView va a renderizar todos los elementos de la lista
    // Por eso no se deben utilizar para listas, sino para elementos en pantalla
    //<ScrollView contentContainerStyle={styles.container}>
        //<Text>Tarea 1</Text>
        //<Text>Tarea <Text>2</Text></Text>
        //<Text>Tarea 3</Text>

        //<Text>{todos[0]}</Text>
        //<Text>{todos[1]}</Text>
        //<Text>{todos[2]}</Text>

        {todos.map(todo => (
            Equivalente a
            todo.done ? null : <Text key={todo.text}>{todo.text}</Text>
            <TouchableOpacity style={styles.listItem} key={todo.text} onPress={() => onUpdate({...todo, done: !todo.done})}>
                <Text style={styles.bullet}>-</Text>
                <Text style={[styles.text, todo.done && styles.textDone]}>{todo.text}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        ))}
    </ScrollView>
    */
};

export default TodoList;
