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
			return {...state, value: 0}
		default:
			return state
	}
}

export const incrValueAC = () => ( {type: 'counter/INC_VALUE'} as const)
export const resetValueAC = () => ( {type: 'counter/RESET_VALUE'} as const)

type IncrValueActionType = ReturnType<typeof incrValueAC>
type ResetValueActionType = ReturnType<typeof resetValueAC>

export type CounterActionType = IncrValueActionType | ResetValueActionType