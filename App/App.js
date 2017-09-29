import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';
import MenuContainer from './containers/MenuContainer.js';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MenuContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});