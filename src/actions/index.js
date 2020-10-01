export const actions = {
  ADD_SYMBOL: 'ADD_SYMBOL',
  CLEAR_ALL: 'CLEAR_ALL',
  CLEAR_SYMBOL: 'CLEAR_SYMBOL',
  CALCULATE: 'CALCULATE',
  SAVE_MEMORY: 'SAVE_MEMORY',
  CLEAR_MEMORY: 'CLEAR_MEMORY',
  ADD_MEMORY: 'ADD_MEMORY',
  CHANGE_COLOR: 'CHANGE_COLOR',
};

export function addSymbol(key) {
  return {
    type: actions.ADD_SYMBOL,
    key: key,
  };
}

export function clearAll() {
  return {
    type: actions.CLEAR_ALL,
  };
}

export function clearSymbol() {
  return {
    type: actions.CLEAR_SYMBOL,
  };
}

export function calculate() {
  return {
    type: actions.CALCULATE,
  };
}

export function saveMemory() {
  return {
    type: actions.SAVE_MEMORY,
  };
}

export function clearMemory() {
  return {
    type: actions.CLEAR_MEMORY,
  };
}

export function addMemory() {
  return {
    type: actions.ADD_MEMORY,
  };
}

export function changeColor() {
  return {
    type: actions.CHANGE_COLOR,
  };
}
