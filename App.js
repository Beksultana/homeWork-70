import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.NumberText}>
            <Text>asdjfj</Text>
          </View>
          <View style={styles.NumberFunc}>
              <View style={styles.ViewButtons}>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>7</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>8</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>9</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>+</Text>
                  </TouchableHighlight>

              </View>
              <View style={styles.ViewButtons}>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>4</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>5</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>6</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>-</Text>
                  </TouchableHighlight>
              </View>
              <View style={styles.ViewButtons}>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>1</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>2</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>3</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>*</Text>
                  </TouchableHighlight>
              </View>
              <View style={styles.ViewButtons}>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>.</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>0</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnNumber}>%</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>/</Text>
                  </TouchableHighlight>
              </View>
              <View style={styles.ViewButtons}>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>&lit;</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>EC</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>M-</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button}>
                      <Text style={styles.btnFunc}>=</Text>
                  </TouchableHighlight>
              </View>

          </View>
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
    button: {
        alignItems: 'center',
        margin: 1,
    },
    btnNumber: {
      textAlign: 'center',
        width: 85,
        height: 90,
        fontSize: 25,
        paddingTop: 30,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    btnFunc: {
        textAlign: 'center',
        width: 85,
        height: 90,
        fontSize: 25,
        color: '#fff',
        paddingTop: 30,
        backgroundColor: '#009364',
    },
    NumberText: {
      flex: 1,
        justifyContent: 'flex-end'
    },
    NumberFunc: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    ViewButtons: {
        flexDirection: 'row',
    },
});
