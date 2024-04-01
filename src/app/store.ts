import React from 'react';
import {combineReducers, createStore} from 'redux';
import {counterReducer} from '../components/Counter/counter-reducer';

const rootReducer = combineReducers({
	counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

store.subscribe(()=> {
	localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppDispatch = typeof store.dispatch
