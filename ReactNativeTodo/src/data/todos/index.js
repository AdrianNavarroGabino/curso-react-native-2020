import { AsyncStorage } from "react-native";

const getTodos = () => [
    newTodo({text: "Tarea 1", done: false}),
    newTodo({text: "Tarea 2", done: false}),
    newTodo({text: "Tarea 3", done: false}),
    newTodo({text: "Tarea 4", done: false}),
    newTodo({text: "Tarea 5", done: false}),
    newTodo({text: "Tarea 6", done: false}),
    newTodo({text: "Tarea 7", done: false}),
    newTodo({text: "Tarea 8", done: false}),
    newTodo({text: "Tarea 9", done: false}),
    newTodo({text: "Tarea 10", done: false}),
    newTodo({text: "Tarea 11", done: false}),
    newTodo({text: "Tarea 12", done: false}),
    newTodo({text: "Tarea 13", done: false}),
    newTodo({text: "Tarea 14", done: false}),
    newTodo({text: "Tarea 15", done: false}),
    newTodo({text: "Tarea 16", done: true})];
    
const newTodo = todo => ({
    id: Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1),
    text: todo.text,
    createdAt: new Date(),
    done: todo.done,
    priority: todo.priority
});

const updateTodo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.id);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    saveTodos(newTodoList);
    return newTodoList;
};
  
const addTodo = (list, todo) => {
    const newTodoList = [...(list || []), newTodo(todo)];
    saveTodos(newTodoList);
    return newTodoList;
};
  
const saveTodos = async todos => {
    try {
      const resp = await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
};
  
const deleteTodo = (list, todo) => {
    const newTodoList = list.filter(t => t.id !== todo.id);
    saveTodos(newTodoList);
    return newTodoList;
};
    
export { getTodos, addTodo, updateTodo, deleteTodo };