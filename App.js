import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from './Colors';
import Task from './Components/Task';
import ToolbarButton from './Components/Toolbar';



export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [shouldShow, setShouldShow] = useState(true);

  {/* Status meanings = 0: Default, 1: AutoList*/}
  let inputStatus = 0;

  const changeInputStatus = (status) => {
    const inputDefault = 0;
    const inputAutoList = 1;
    
    if (!inputStatus == inputDefault) {
      inputStatus = status
      setShouldShow(!shouldShow);

      alert(inputStatus)
    }
    else if (!inputStatus == inputAutoList) {
      inputStatus = status;
      setShouldShow(!shouldShow);
      alert(inputStatus);
    } 
  }

  const changeStatusDefault = () => {
    changeInputStatus(0);
    handleAddTask();
 }

  const changeStatusAutoList = () => {
    changeInputStatus(1);
  }
  
  const handleAddTask = () => {
    if (inputStatus == 0) {
      if (!task) {
        alert("Enter a shopping item");
      }
      else {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask("");
      }
    }
    else if (inputStatus == 1) {
      alert("Auto!")
    }
  }

  const handleAddColor = () => {
    
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
        {shouldShow ? (
          <ToolbarButton text="=" onPress={() => changeStatusDefault()}/>
        ) : (
          <ToolbarButton text="-" onPress={() => changeStatusDefault()}/>

        )}

      </KeyboardAvoidingView>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        {shouldShow ?
        (
        <TextInput style={styles.input} placeholder={"Write a task here"} value={task} onChangeText={text => setTask(text)}/>
        ) : (
        <TextInput style={[styles.input, styles.largeInput]} placeholder={"Write or paste a long list here"} value={task} onChangeText={text => setTask(text)}/>
        )}
        <View style={styles.addButtonsWrapper}>
          <TouchableOpacity onPress={() => handleAddColor()}>
              <View style={[styles.addWrapper, styles.colorPickButton]}>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "700",
    color: colors.black
  },
  items: {
    marginTop: 20,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'flex-end',
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
    position: 'relative',
    width: 55,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 60,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: '5%',
    bottom: 0,
    marginTop: 15,

  },
  addText: {
    
  },
  extraButtonsWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'center',
    right: '5%',
    bottom: '35%',

  },
  extraButtons: {
    zIndex: 1,

  },
  largeInput: {
    height: 200,
    textAlignVertical: 'top', 
    borderRadius: 30,
  },
  addButtonsWrapper: {
    flexDirection: 'column',
  },
  colorPickButton: {
    borderRadius: 60,
    backgroundColor: colors.lightBlue,
    borderColor: colors.white,
    borderWidth: 4,
  }
  

});
