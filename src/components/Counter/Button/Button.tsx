import React from 'react';
import {useDispatch} from 'react-redux';
import {incrValueAC} from '../counter-reducer';

type ButtonPropsType = {
	title: string
	disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = ({
	                                                  title,
	                                                  disabled
                                                  }) => {
	const dispatch = useDispatch()

	const onClickHandler = () => {
		dispatch(incrValueAC())
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
		<button style={styleButton} onClick={onClickHandler} className={'Button'}
		        disabled={disabled}>
			{title}
		</button>
	);
};

