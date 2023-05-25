import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React,{useState} from 'react';

type addtodoProps = {
    submitHandler: (text: string) => void,
};

const AddTodo = ({submitHandler}:addtodoProps) => {
    const [todo, setTodo] = useState('');
    const handleSubmit = (todo: string) => {
        submitHandler(todo);
        setTodo('');
    }
    return (
        <View>
            <TextInput placeholder='Add New Todo' style={styles.input} value={todo} onChangeText={setTodo} />
            <Button onPress={()=>{handleSubmit(todo)}} title='Add Todo' color={'coral'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export {AddTodo}