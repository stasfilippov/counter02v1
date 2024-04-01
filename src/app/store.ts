import React from 'react';
import {combineReducers, createStore} from 'redux';
import {counterReducer} from '../components/Counter/counter-reducer';
import {loadState, saveState} from '../utils/localstorage-utils';
import {settingsCounterReducer} from '../components/CounterSettings/settingsboard-reducer';

const rootReducer = combineReducers({
	counter: counterReducer,
	settings: settingsCounterReducer
})

const preloadedState = loadState()

export const store = createStore(rootReducer, preloadedState)

store.subscribe(()=> {
	saveState(store.getState())
})

export type AppDispatch = typeof store.dispatch
export type AppStateType = ReturnType<typeof rootReducer>
