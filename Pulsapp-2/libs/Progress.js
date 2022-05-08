/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/
import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

class Progress extends Component {
  render (){
    return (
      <View style={styles.main}>
        <View style={styles.containercActivityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({

  main: {
    position:"absolute",
    height:"100%",
    width:"100%",
    top:0,
    left:0,
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    flex: 1,
    justifyContent: "center",
    zIndex: 10,
    elevation: 10
  },

  containercActivityIndicator: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

  buttonColorMain: {
    backgroundColor: "#c0392b"
  }
});

export default Progress;
