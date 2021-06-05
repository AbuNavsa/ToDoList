import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

  }

});
