import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Menu extends Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <Text style={styles.menu}>
                    What
                </Text>
            </View>
        );
     }
}

const styles = StyleSheet.create({
    menu: {
        padding: 30,
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
});