import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Controls = ({
    paused,
    onPressPlay,
    onPressPause
}) => (
    <View style={styles.container}>
        {!paused ? 
            <TouchableOpacity onPress={onPressPause}>
                <View style={styles.playButton}>
                    <Text style={{ color: 'white', fontSize: 36 }}>PAUSE</Text>
                </View>
            </TouchableOpacity> : 
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Text style={{ color: 'white', fontSize: 36 }}>PLAY</Text>
                </View>
            </TouchableOpacity>
        }
    </View>
);

export default Controls;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 14
    },
    playButton: {
        height: 140,
        width: 140,
        borderWidth: 1,
        borderColor: 'white', 
        borderRadius: 140/2,
        alignItems: 'center', 
        justifyContent: 'center',
    }
});