import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

export function Expression(props) {
  const {expression} = props;
  return (
    <>
      <View style={styles.expression}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
    </>
  );
}

const mapStateToProps = (state) => ({
  expression: state.expression,
});

export default connect(mapStateToProps)(Expression);

const styles = StyleSheet.create({
  expression: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginBottom: 10,
  },
  expressionText: {
    fontSize: 20,
  },
});
