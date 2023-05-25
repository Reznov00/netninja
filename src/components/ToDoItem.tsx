import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

type todoProps = {
  item: {
    key: string;
    text: string;
  };
  pressHandler: (key:string) => void;
};

const ToDoItem = ({item, pressHandler}: todoProps) => {
  return (
    <TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export {ToDoItem};

const styles = StyleSheet.create({
  item:{
    padding:16,
    marginTop:16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed'
  },
});
