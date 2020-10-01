import React from 'react';
import {connect} from 'react-redux';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';

import {changeColor} from '../actions';

function Title(props) {
  const {title} = props;
  const titleStyle = {...styles.title};
  titleStyle.backgroundColor = props.backgroundColor;

  return (
    <>
      <TouchableHighlight
        style={titleStyle}
        onPress={() => props.changeColor()}>
        <Text style={styles.titleText}>{title}</Text>
      </TouchableHighlight>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeColor: () => dispatch(changeColor()),
});

const mapStateToProps = (state) => ({
  backgroundColor: state.backgroundColor,
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
  },
});
