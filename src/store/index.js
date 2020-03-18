import React from 'react';

import { createOvermind } from 'overmind';
import { createHook, Provider } from 'overmind-react';

import { initialState } from './state';
import * as actions from './actions';

export const store = createOvermind({
  state: { ...initialState },
  actions,
});

export const useStore = createHook(store);

export const StoreProvider = ({ children }) => <Provider value={store}>{children}</Provider>;
