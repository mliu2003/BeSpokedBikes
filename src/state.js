const createStore = (yourReducer) => {
  let listeners = [];
  let currentState = yourReducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (payload) => {
      currentState = yourReducer(currentState, payload);

      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe: (newListener) => {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener);
      };

      return unsubscribe;
    },
  };
};

const initialState = {
  render: 0,
};

const actions = {
    toggleRender: {type: 'render'},
};

const stateReducer = (state = initialState, payload) => {
  return {
    ...state,
    render: payload.render,
  }
};

const state = createStore(stateReducer);

export default state