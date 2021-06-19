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
        <View style={styles.containerBottomItem}>
          <Text>Rank 4</Text>
        </View>
        <View style={styles.containerBottomItem}>
          <Text>Rank 5</Text>
        </View>
        <View style={styles.containerBottomItem}>
          <Text>Rank 6</Text>
        </View>
        <View style={styles.containerBottomItem}>
          <Text>Rank 7</Text>
        </View>
        <View style={styles.containerBottomItem}>
          <Text>Rank 8</Text>
        </View>
        <View style={styles.containerBottomItem}>
          <Text>Rank 9</Text>
        </View>
        <View style={styles.containerBottomItem}>
          <Text>Rank 10</Text>
        </View>
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
    flex: 2,

    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  containerTop: {
    flex: 4,
    flexDirection: 'row',
    height: '100%',
    width: '100%',

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
    backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center'
  },
  containerTopItemSide: {
    flex: 1,
    height: '100%',
    width: '90%',
    
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15
  },
  containerBottom: {
    flex: 10,
    height: '100%',
    width: '100%',

    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  containerBottomItem: {
    flex: 1,
    height: '100%',
    width: '95%',

    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 8
  },
});
