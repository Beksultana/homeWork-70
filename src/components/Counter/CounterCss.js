import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E95C29',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        color: '#b1c3b1',
    },
    btnNumber: {
        textAlign: 'center',
        width: 90,
        height: 90,
        fontSize: 25,
        paddingTop: 30,
        borderWidth: 0.5,
        borderColor: '#000',
        color: '#b1c3b1',
        backgroundColor: '#0F100F'
    },
    btnFunc: {
        textAlign: 'center',
        width: 90,
        height: 90,
        fontSize: 25,
        color: '#E95C29',
        paddingTop: 30,
        borderWidth: 0.5,
        borderColor: '#000',
    },
    NumberText:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    NumberFunc: {
        flex: 2.3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        backgroundColor: '#0D0B0B'
    },
    NumberBtn: {
        width: 270, flexDirection: 'row',
        flexWrap: 'wrap',
    }
});