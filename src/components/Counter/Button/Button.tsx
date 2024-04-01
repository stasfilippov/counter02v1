import React from 'react';
import {useDispatch} from 'react-redux';
import {incrValueAC, resetValueAC, setValueAC} from '../counter-reducer';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {getCounterValue} from '../../../app/app-selectors';
import {settingsCounterSetValues, SettingsValues} from '../../CounterSettings/settingsboard-reducer';

type NameButtonType = 'add' | 'reset' | 'set'
type ButtonPropsType = {
	title: NameButtonType
	currentSettingsValue?: SettingsValues
}


export const Button: React.FC<ButtonPropsType> = ({
	                                                  title,
	                                                  currentSettingsValue
                                                  }) => {
	const countValue = useAppSelector(getCounterValue)
	const settingsValuesFromState = useAppSelector(state => state.settings)
	const dispatch = useAppDispatch()

	const isDisabled = (name: NameButtonType, countValue: number) => {
		switch (name) {
			case 'reset':
				return countValue === 0
			case 'add':
				return countValue === settingsValuesFromState.maxValue
		}
	}

	const onClickHandler = () => {
		if (title === 'add') {
			dispatch(incrValueAC())
			return
		}
		if (title === 'reset') {
			dispatch(resetValueAC(settingsValuesFromState.minValue))
			return;
		}
		if (title === 'set' && currentSettingsValue) {
			dispatch(settingsCounterSetValues(currentSettingsValue))
			dispatch(setValueAC(currentSettingsValue.minValue))
		}
	}

	const styleButton = {
		width: '100px',
		height: '50px',
		backgroundColor: 'azure',
		border: '2px cadetblue solid',
		marginRight: '5px',
		cursor: 'pointer',
		fontWeight: 'bold',
		borderRadius: '10px',
		fontSize: '20px',
		fontFamily: 'Montserrat'
	}


	return (
		<button
			style={styleButton}
			onClick={onClickHandler}
			disabled={isDisabled(title, countValue)}
		>
			{title}
		</button>
	);
};

