import React from "react";
import { Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {addNumber, equally, removeEC, removeOne} from "../../../store/actions/action-number";
import {styles} from "./CounterCss"

class Counter extends React.Component {

    render() {
        const numberBtn1 = [".", "%", "00","7", "8", "9", "4", "5", "6", "1", "2", "3", "<", "0", "=",];
        const numberBtn2 = ["+", "-", "*", "/", "CE"];
        return (
            <View style={styles.container}>
                <View style={styles.NumberText}>
                    <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>{this.props.error}</Text>
                    <Text style={{fontSize: 35, textAlign: 'right', marginBottom: 20,
                        marginTop: 20, color: '#fff'}}>{this.props.counter}</Text>
                </View>
                <View style={styles.NumberFunc}>
                    <View style={styles.NumberBtn}>
                        {
                            numberBtn1.map((btn, index) => {

                                if (btn === "<"){
                                    return <View key={index}>
                                        <TouchableOpacity >
                                            <Text onPress={() => this.props.onPressRemoveOne(btn)}
                                                  style={{paddingTop: 30, color: '#E95C29', width: 90, height: 90,
                                                      backgroundColor: "#0F100F", textAlign: 'center', fontSize: 25}}
                                            >{btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                if (btn === "="){
                                    return <View key={index}>
                                        <TouchableOpacity >
                                            <Text onPress={() => this.props.equally(btn)}
                                                  style={{paddingTop: 30, color: '#E95C29', width: 90, height: 90,
                                                      backgroundColor: "#0F100F", textAlign: 'center', fontSize: 25}}
                                            >{btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                return <View key={index} >
                                    <TouchableOpacity style={{activeOpacity: 0.5}}>
                                        <Text onPress={() => this.props.onPressHandlerAddNumber(btn)} style={styles.btnNumber}>{btn}</Text>
                                    </TouchableOpacity>
                                </View>
                            })
                        }
                    </View>
                    <View>
                        {
                            numberBtn2.map((btn, index) => {
                                if (btn === "CE"){
                                    return <View key={index}>
                                        <TouchableOpacity>
                                            <Text onPress={this.props.onPressRemoveCE}
                                                  style={{paddingTop: 30, color: '#E95C29', width: 90, height: 90,
                                                      backgroundColor: "#1E201E", textAlign: 'center', fontSize: 25}}
                                            >{btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                return <View style={{backgroundColor: "#1E201E"}} key={index}>
                                    <TouchableOpacity>
                                        <Text onPress={() => this.props.onPressHandlerAddNumber(btn)} style={styles.btnFunc}>{btn}</Text>
                                    </TouchableOpacity>
                                </View>
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
  return {
      counter: state.counter,
      error: state.error,
  }
};
const mapDispatchProps = dispatch => {
    return {
        onPressHandlerAddNumber: number => dispatch(addNumber(number)),
        onPressRemoveOne: () => dispatch(removeOne()),
        onPressRemoveCE: () => dispatch(removeEC()),
        equally: () => dispatch(equally()),
    }
};

export default connect(mapStateToProps, mapDispatchProps)(Counter);