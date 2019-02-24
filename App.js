import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native';

export default class App extends React.Component {

    state = {
        counter: ''
    };

    onPressHandler = value => {
        this.setState({
            counter: this.state.counter + value
        })
    };

    onPressRemoveOne = () => {
        const removedCounterOne = this.state.counter.substr(0, this.state.counter.length - 1);
        this.setState({
            counter: removedCounterOne
        })
    };

    equallyHandler = () => {
        const result = eval(this.state.counter);
        this.setState({
            counter: result
        })
    };

    onPressRemoveCE = () => {
        this.setState({
            counter: ''
        })
    };
  render() {
      const numberBtn1 = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "<", "0", "=", ".", "%", "00"];
      const numberBtn2 = ["+", "-", "*", "/", "CE"];
    return (
      <View style={styles.container}>
          <View style={styles.NumberText}>
            <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 20}}>{this.state.counter}</Text>
          </View>
          <View style={styles.NumberFunc}>
              <View style={styles.NumberBtn}>
                  {
                      numberBtn1.map((btn, index) => {

                          if (btn === "<"){
                              return <View key={index}>
                                  <TouchableHighlight>
                                      <Text onPress={this.onPressRemoveOne} style={styles.btnNumber}>{btn}</Text>
                                  </TouchableHighlight>
                              </View>
                          }
                          if (btn === "="){
                              return <View key={index}>
                                  <TouchableHighlight>
                                      <Text onPress={this.equallyHandler} style={styles.btnNumber}>{btn}</Text>
                                  </TouchableHighlight>
                              </View>
                          }
                          return <View key={index} >
                                  <TouchableHighlight>
                                      <Text onPress={() => this.onPressHandler(btn)} style={styles.btnNumber}>{btn}</Text>
                                  </TouchableHighlight>
                              </View>
                      })
                  }
              </View>
              <View>
                  {
                      numberBtn2.map((btn, index) => {
                          if (btn === "CE"){
                              return <View key={index}>
                                  <TouchableHighlight>
                                      <Text onPress={this.onPressRemoveCE}
                                            style={{paddingTop: 30, color: '#fff', width: 85, height: 100,
                                                backgroundColor: "#BD1722", margin: 1, textAlign: 'center', fontSize: 25}}
                                      >{btn}</Text>
                                  </TouchableHighlight>
                              </View>
                          }
                          return <View key={index} style={styles.ViewButtonsFunc}>
                              <TouchableHighlight>
                                  <Text onPress={() => this.onPressHandler(btn)} style={styles.btnFunc}>{btn}</Text>
                              </TouchableHighlight>
                          </View>
                      })
                  }
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
        height: 100,
        fontSize: 25,
        paddingTop: 30,
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 5
    },
    btnFunc: {
        textAlign: 'center',
        margin: 1,
        width: 85,
        height: 100,
        fontSize: 25,
        color: '#fff',
        paddingTop: 30,
        backgroundColor: '#009364',
        borderRadius: 5
    },
    NumberText: {
      flex: 1,
        justifyContent: 'flex-end',
    },
    NumberFunc: {
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end'
    },
    NumberBtn: {
      width: 270, flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 5

    },
    ViewButtonsFunc: {

    },
});
