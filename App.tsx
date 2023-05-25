import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AddTodo, ToDoItem, Header } from "@components";

interface ToDo {
  item: {
    key: string;
    text: string;
  };
}

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the Switch", key: "3" },
  ]);

  const pressHandler = async (key:string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(prev => prev.key != key);
    })
  }

  const submitHandler = async (text:string) => {
    setTodos(prevTodos => {
      return [{text, key: Math.random().toString()},...prevTodos];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        {/* To Do List */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }: ToDo) => {
              // return <ToDoItem item={item} pressHandler={pressHandler} />;
              return <ToDoItem item={item} pressHandler={pressHandler} />;
            }}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
