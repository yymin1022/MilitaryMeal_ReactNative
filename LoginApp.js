import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text>LOGO_국방부</Text>
                <Text style={styles.textTitle}>김병장님,</Text>
                <Text style={styles.textTitle}>식사시간입니다.</Text>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerBottomInputID}>
                    <Text>ID INPUT</Text>
                </View>
                <View style={styles.containerBottomInputPW}>
                    <Text>PW INPUT</Text>
                </View>
                <View style={styles.containerBottomMenu}>
                    <Text>ID_FIND / PW_FIND / REGISTER</Text>
                </View>
                <View style={styles.containerBottomLogin}>
                    <Text>LOGIN</Text>
                </View>
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

        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    containerBottomInputID: {
        flexDirection: 'row',

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    containerBottomInputPW: {
        flexDirection: 'row',

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    containerBottomMenu: {
        flexDirection: 'row',

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    containerBottomLogin: {
        flexDirection: 'row',

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textTitle: {
        fontSize: 25,
    },
});
