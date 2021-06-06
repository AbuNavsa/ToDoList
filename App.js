import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from './Colors';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/*Task items go here */}
          <Task text="Task 1"></Task>
          <Task text="Task 2"></Task>

        </View>
      
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
          <TextInput style={styles.input} placeholder={"Write a task here"}/>
          <TouchableOpacity></TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
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
    fontFamily: "Montserrat",
    fontSize: 28,
    fontWeight: 700,
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
    width: 250,

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

});
