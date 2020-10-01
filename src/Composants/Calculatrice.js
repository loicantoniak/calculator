import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './Title';
import Expression from './Expression';
import Keyboard from './Keyboard';
import Memory from './Memory';

export default function Calculatrice(props) {
  return (
    <>
      <View style={styles.container}>
        <Title title="Ma Calculatrice" />
        <Expression expression="dsdsds" />
        <Memory />
        <Keyboard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
