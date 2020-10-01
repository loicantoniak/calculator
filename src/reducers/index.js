const defaultState = {
  expression: '',
  memory: null,
  backgroundColor: 'red',
};

import {actions} from '../actions';
import {evaluateur} from '../reducers/evaluateur';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function reducers(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD_SYMBOL:
      return Object.assign({}, state, {
        expression: state.expression + action.key,
      });
    case actions.CLEAR_ALL:
      return Object.assign({}, state, {
        expression: defaultState.expression,
      });
    case actions.CLEAR_SYMBOL:
      return Object.assign({}, state, {
        expression: state.expression.substring(0, state.expression.length - 1),
      });
    case actions.CALCULATE:
      return Object.assign({}, state, {
        expression: evaluateur(state.expression),
      });
    case actions.SAVE_MEMORY:
      return Object.assign({}, state, {
        memory: evaluateur(state.expression),
      });
    case actions.CLEAR_MEMORY:
      return Object.assign({}, state, {
        memory: defaultState.memory,
      });
    case actions.ADD_MEMORY:
      return Object.assign({}, state, {
        expression: state.expression + state.memory,
      });
    case actions.CHANGE_COLOR:
      return Object.assign({}, state, {
        backgroundColor: getRandomColor(),
      });

    default:
      return state;
  }
}
