import React from 'react';
import {StyleSheet,View} from 'react-native';
import Counter from "./src/components/Counter/Counter";
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './store/reducers/reducer-number';

const store = createStore(reducer);

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <Provider store={store}>
              <Counter/>
          </Provider>
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
  }
});

export default App;