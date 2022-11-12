import React, {useState} from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/header';
import TodoItem from './components/TodoItem';

export default function App() {
  
  const [todos,setTodos] = useState([
    {text: 'buy coffee',key: '1'},
    {text: 'go to bed',key: '2'},
    {text: 'do whatever',key: '3'}
  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(text => text.key != key)
    });
  }

  const submitHandler = (text) =>{

    if(text.length > 3){
    setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    });
    }
    else
    {
      Alert.alert('OOPS!','Todos must be over 3 characters long',[
        {text: 'Understood', onPress : () => console.log('alert closed')}
      ]);
    }
  }
  
  return (
    
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
                <TodoItem item = {item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    backgroundColor: 'pink',
    padding: 40,
  },
  list:{
    flex:1,
    backgroundColor:'yellow',
    marginTop:20
  }
  
});
