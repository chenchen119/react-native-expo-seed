import { Video } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');


class HomeScreen extends Component {
  state = {
  };
  render() {
    const { paused } = this.state;

    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
