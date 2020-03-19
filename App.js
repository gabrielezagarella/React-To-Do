import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Style'

export default class App extends React.Component {
  state = {
    todo: " ",
    todoList: []
  }
  changeText = (value) => {
    this.setState({
      todo: value,
    })
  }
  
  addToDo = () => {
    if(this.state.todo.trim() === ""){
      return alert("write something!")
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat(prevState.todo)
      }
    })
    this.setState({todo: " "})
  }
  deleteTodo = (index) => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter((item, i) => {
          return index != i 
        })
      }
    })
  }

  render() {
    const list = this.state.todoList.map((item, index) => (
      <TouchableOpacity key={index} onPress={() => this.deleteTodo(index)}>
         <Text style={styles.todo}>{item}</Text>
      </TouchableOpacity>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Block notes</Text>
        </View>
        <View style={styles.input}> 
        <TextInput 
        value={this.state.todo}
        style={styles.textInput}
        placeholder="write" 
        onChangeText={this.changeText}/>
        </View>
        <ScrollView>
          {list}
        </ScrollView>
        <TouchableOpacity onPress={this.addToDo} style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

