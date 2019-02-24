import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native';

export default class App extends React.Component {

  render() {
      const numberBtn = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "=",];
    return (
      <View style={styles.container}>
          <View style={styles.NumberText}>
            <Text>asdjfj</Text>
          </View>
          <View style={styles.NumberFunc}>
              <View style={styles.NumberBtn}>
                  {
                      numberBtn.map((btn, index) => {
                          if(btn.length < 3){
                              return <View key={index} style={styles.ViewButtons}>
                                  <TouchableHighlight>
                                      <Text style={styles.btnNumber}>{btn}</Text>
                                  </TouchableHighlight>
                              </View>
                          }
                      })
                  }
              </View>
              <View style={styles.ViewButtonsFunc}>
                  <TouchableHighlight>
                      <Text style={styles.btnFunc}>+</Text>
                  </TouchableHighlight>
                  <TouchableHighlight>
                      <Text style={styles.btnFunc}>-</Text>
                  </TouchableHighlight><TouchableHighlight>
                  <Text style={styles.btnFunc}>*</Text>
                  </TouchableHighlight>
                  <TouchableHighlight>
                      <Text style={styles.btnFunc}>/</Text>
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
        margin: 1,
        width: 85,
        height: 90,
        fontSize: 25,
        paddingTop: 30,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    btnFunc: {
        textAlign: 'center',
        margin: 1,
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },
    NumberBtn: {
      width: 270, flexDirection: 'row',
        flexWrap: 'wrap'

    },
    ViewButtonsFunc: {

    },
});
