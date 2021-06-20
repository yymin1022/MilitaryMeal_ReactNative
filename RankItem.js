import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RankItem(props) {
    const menuRank = props.rank;
    const menuTitle = props.menu;

    return (
        <View style={styles.container}>

            <Text>{menuRank}</Text>
            <Text>{menuTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '95%',

        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        justifyContent: 'center',
        margin: 8
    },
});
