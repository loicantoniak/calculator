import React from 'react';
import {View, StyleSheet} from 'react-native';
import Key from './Key';
import {connect} from 'react-redux';
import {addSymbol, clearAll, clearSymbol, calculate} from '../actions';

export function Keyboard(props) {
  return (
    <>
      <View style={styles.keyboard}>
        <Key text="AC" onPress={props.clearAll} />
        <Key text="C" onPress={props.clearSymbol} />
        <Key text="%" onPress={props.onKeyPress} />
        <Key text="/" onPress={props.onKeyPress} />
        <Key text="7" onPress={props.onKeyPress} />
        <Key text="8" onPress={props.onKeyPress} />
        <Key text="9" onPress={props.onKeyPress} />
        <Key text="x" onPress={props.onKeyPress} />
        <Key text="4" onPress={props.onKeyPress} />
        <Key text="5" onPress={props.onKeyPress} />
        <Key text="6" onPress={props.onKeyPress} />
        <Key text="-" onPress={props.onKeyPress} />
        <Key text="1" onPress={props.onKeyPress} />
        <Key text="2" onPress={props.onKeyPress} />
        <Key text="3" onPress={props.onKeyPress} />
        <Key text="+" onPress={props.onKeyPress} />
        <Key text="0" onPress={props.onKeyPress} />
        <Key text="=" onPress={props.calculate} />
      </View>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onKeyPress: (key) => dispatch(addSymbol(key)),
  clearAll: (key) => dispatch(clearAll(key)),
  clearSymbol: (key) => dispatch(clearSymbol(key)),
  calculate: (key) => dispatch(calculate(key)),

  //onAction: (params) => dispatch(functionAction(params)),
});

export default connect(null, mapDispatchToProps)(Keyboard);

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
