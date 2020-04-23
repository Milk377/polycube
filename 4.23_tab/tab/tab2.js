import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Tab2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> 지난 메세지 입니다.</Text>
            </View>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 30,
    }

});
