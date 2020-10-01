import React from 'react';
import {View, StyleSheet} from 'react-native';
import Key from './Key';
import {connect} from 'react-redux';
import {saveMemory, clearMemory, addMemory} from '../actions';

function Memory(props) {
  return (
    <>
      <View style={styles.keyboard}>
        <Key text="MS" onPress={props.saveMemory} />
        <Key text="MC" onPress={props.clearMemory} disabled={props.disabled} />
        <Key text="MR" onPress={props.addMemory} disabled={props.disabled} />
      </View>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveMemory: (key) => dispatch(saveMemory(key)),
  clearMemory: (key) => dispatch(clearMemory(key)),
  addMemory: (key) => dispatch(addMemory(key)),
});

const mapStateToProps = (state) => ({
  disabled: state.memory === null,
});

export default connect(mapStateToProps, mapDispatchToProps)(Memory);

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 50,
  },
});
