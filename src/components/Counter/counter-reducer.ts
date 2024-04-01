import React from 'react';

const initState = {
	value: 0
}

type InitStateType = typeof initState
export const counterReducer = (state = initState, action: CounterActionType): InitStateType => {
	switch (action.type) {
		case 'counter/INC_VALUE':
			return {...state, value: state.value + 1}
		case 'counter/RESET_VALUE':
			return {...state, value: action.value}
		case 'counter/SET_VALUE':
			return {...state, value: action.value}
		default:
			return state
	}
}

export const incrValueAC = () => ( {type: 'counter/INC_VALUE'} as const)
export const resetValueAC = (value: number) => ( {type: 'counter/RESET_VALUE', value} as const)
export const setValueAC = (value: number) => ( {type: 'counter/SET_VALUE', value} as const)

type IncrValueActionType = ReturnType<typeof incrValueAC>
type ResetValueActionType = ReturnType<typeof resetValueAC>
type SetValueActionType = ReturnType<typeof setValueAC>

export type CounterActionType = IncrValueActionType | ResetValueActionType | SetValueActionType