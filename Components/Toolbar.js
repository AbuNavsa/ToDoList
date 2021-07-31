import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Colors';

const ToolbarButton = ({ text, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.tbButtonShape}>
                <Text style={styles.tbButtonText}> {text} </Text>
            </View>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({

tbButtonShape: {
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
  tbButtonText: {
    
  },

});

export default ToolbarButton;
