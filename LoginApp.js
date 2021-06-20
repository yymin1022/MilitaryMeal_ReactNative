import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <Text>View</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    containerMain: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',

        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        margin: 5
    },
});
