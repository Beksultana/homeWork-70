import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {addNumber, equally, removeEC, removeOne} from "../../../store/actions/action-number";

class Counter extends React.Component {

    render() {
        const numberBtn1 = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "<", "0", "=", ".", "%", "00"];
        const numberBtn2 = ["+", "-", "*", "/", "CE"];
        return (
            <View style={styles.container}>
                <View style={styles.NumberText}>
                    <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 20}}>{this.props.counter}</Text>
                </View>
                <View style={styles.NumberFunc}>
                    <View style={styles.NumberBtn}>
                        {
                            numberBtn1.map((btn, index) => {

                                if (btn === "<"){
                                    return <View key={index}>
                                        <TouchableOpacity>
                                            <Text onPress={() => this.props.onPressRemoveOne(btn)} style={styles.btnNumber}>{btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                if (btn === "="){
                                    return <View key={index}>
                                        <TouchableOpacity >
                                            <Text onPress={() => this.props.equally(btn)} style={styles.btnNumber}>{btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                return <View key={index} >
                                    <TouchableOpacity activeOpacity={0.3}>
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
                                                  style={{paddingTop: 30, color: '#fff', width: 85, height: 100,
                                                      backgroundColor: "#BD1722", margin: 1, textAlign: 'center', fontSize: 25}}
                                            >{btn}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                return <View key={index}>
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
        alignItems: 'flex-end',
        paddingBottom: 5,

    },
    NumberBtn: {
        width: 270, flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 2,
    },
});

const mapStateToProps = state => {
  return {
      counter: state.counter
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