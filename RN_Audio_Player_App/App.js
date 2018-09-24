
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from './components/Player';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Player />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(4, 4, 4)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
