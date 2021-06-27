import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from './Colors';
import Task from './Components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  {/* Status meanings = 0: Default, 1: AutoList*/}
  let addStatus = 0;

  const changeStatusAutoList = () => {
    if (!addStatus == 1) {addStatus = 1;};
    handleAddTask();
  }

  const changeStatusDefault = () => {
    if (!addStatus == 0) {addStatus = 0;}
    handleAddTask();
  }

  const handleAddTask = () => {
    if (addStatus == 0)
      if (!task) {
        alert("Not added");
      }
      else {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask("");
      }
    else if (addStatus == 1) {
      alert("Auto!")
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Shopping List</Text>

        <View style={styles.items}>
          {/*Task items go here */}
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={Capitalize(item)} />
              </TouchableOpacity>

              )
            })
          }


        </View>
      
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.extraButtonsWrapper}
      >
        {/*Add additional buttons here*/}
        <TouchableOpacity onPress={() => changeStatusAutoList()}>
          <View style={[styles.addWrapper, styles.extraButtons]}>
            <Text style={styles.addText}>=</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task here"} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => changeStatusDefault()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: "Montserrat",
    fontSize: 28,
    fontWeight: "700",
    color: colors.black
  },
  items: {
    marginTop: 20,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 60,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    width: "75%",
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 60,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    
  },
  extraButtonsWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'center',
    right: '5%',
    bottom: '25%',
  },
  extraButtons: {
    marginTop: 15,
  },
  

});
