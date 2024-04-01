import React from 'react';

const initState = {
	value: 0
}

type InitStateType = typeof initState
export const counterReducer = (state = initState, action: CounterActionType): InitStateType => {
	switch (action.type) {
		case 'counter/INC_VALUE':
			return {...state, value: state.value + 1}
		default:
			return state
	}
}

export const incrValueAC = () => ( {type: 'counter/INC_VALUE'} as const)

type IncrValueActionType = ReturnType<typeof incrValueAC>

export type CounterActionType = IncrValueActionType