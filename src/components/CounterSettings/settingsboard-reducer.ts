import React from 'react';

const initState = {
	maxValue: 0,
	minValue: 0
}

type InitStateType = typeof initState
export const settingsCounterReducer = (state = initState, action: SettingsActionType): InitStateType => {
	switch (action.type) {
		case 'settingsCounter/SET_VALUES':
			return {
				...state,
				maxValue: action.values.maxValue,
				minValue: action.values.minValue
			}

		default:
			return state
	}
}
export type SettingsValues = {
	maxValue: number
	minValue: number
}
export const settingsCounterSetValues = (values: SettingsValues) => ( {type: 'settingsCounter/SET_VALUES', values} as const)

type settingsCounterSetValuesActionType = ReturnType<typeof settingsCounterSetValues>

export type SettingsActionType = settingsCounterSetValuesActionType