import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text>View</Text>
            </View>
            <View style={styles.containerBottom}>
                <Text>View</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    containerTop: {
        flex: 1,
        flexDirection: 'column',

        alignContent: 'center',
        justifyContent: 'flex-end',
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'column',

        alignContent: 'center',
        justifyContent: 'flex-start',
    },
});
