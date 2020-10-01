import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';

export default function Key(props) {
  const {text, disabled, onPress} = props;

  return (
    <>
      <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(text)}
        disabled={disabled}>
        <Text style={styles.textdefault}>{text}</Text>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 20,
    margin: 10,
  },
  textdefault: {
    fontSize: 16,
  },
});
