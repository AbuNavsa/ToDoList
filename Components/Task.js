import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Colors';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '80%',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: colors.lightBlue,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.lightBlue,

    }

});

export default Task