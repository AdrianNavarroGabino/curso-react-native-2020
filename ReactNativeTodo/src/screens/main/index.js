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

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text selectable>ToDo List App</Text>
                <Text>Tarea 1</Text>
                <Text>Tarea <Text>2</Text></Text>
                <Text>Tarea 3</Text>
            </View>
        );
    }
}

export default MainScreen;