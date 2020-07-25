import React, { Component } from "react";
import { View, Text } from "react-native";
import { Helpers, Metrics } from 'App/Theme';
import styles from './indexStyle';

export default class HistoryScreen extends Component {
    render() {
        return (
            <View style={[
                Helpers.fill,
                Metrics.verticalPadding,
                Metrics.horizontalPadding,
                styles.container]}>
                <View>
                    <Text>This is history screen</Text>
                </View>
            </View>
        )
    }
}