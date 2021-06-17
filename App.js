import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerAppBar}>
        <Text>Title Bar</Text>
      </View>
      <View style={styles.containerTop}>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemSide}>
            <Text>Rank 2</Text>
          </View>
        </View>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemCenter}>
            <Text>Rank 1</Text>
          </View>
        </View>
        <View style={styles.containerTopItem}>
          <View style={styles.containerTopItemSide}>
            <Text>Rank 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Text>Other Ranks</Text>
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
  containerAppBar: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  containerTop: {
    flex: 4,
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    margin: 5
  },
  containerTopItem: {
    height: "100%",
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  containerTopItemCenter: {
    flex: 1,
    height: '100%',
    width: '90%',
    
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center'
  },
  containerTopItemSide: {
    flex: 1,
    height: '100%',
    width: '90%',
    
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10
  },
  containerBottom: {
    flex: 10,

    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});
