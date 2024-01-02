import React from 'react';

type ButtonPropsType = {
	title: string
	callback: () => void
	disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = ({
	                                                  title,
	                                                  callback,
	                                                  disabled
                                                  }) => {


	const onClickHandler = () => {
		callback()
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

