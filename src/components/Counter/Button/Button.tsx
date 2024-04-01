import React from 'react';
import {useDispatch} from 'react-redux';
import {incrValueAC, resetValueAC} from '../counter-reducer';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {getCounterValuse} from '../../../app/app-selectors';

type NameButtonType = 'add' | 'reset'
type ButtonPropsType = {
	title: NameButtonType
}


export const Button: React.FC<ButtonPropsType> = ({
	                                                  title,
                                                  }) => {
	const countValue = useAppSelector(getCounterValuse)
	const dispatch = useAppDispatch()

	const isDisabled = (name: NameButtonType, countValue: number) => {
		return name === 'reset' && countValue === 0
	}

	const onClickHandler = () => {
		if (title === 'add') {
			dispatch(incrValueAC())
			return
		}
		if (title === 'reset') {
			dispatch(resetValueAC())
			return;
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

