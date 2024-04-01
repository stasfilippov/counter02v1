import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from 'styled-components';

type SettingType = {
	title: 'max' | 'min'
	value: number
	callback: (number: number ) => void
}
export const Setting: React.FC<SettingType> = ({title, value, callback}) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (title === 'max') {
			callback(+e.currentTarget.value)
		}
		if (title === 'min') {
			callback(+e.currentTarget.value)
		}
	}

	return (
		<SettingStyles >
			<div>{title} value:</div>
			<input
				type={'number'}
				onChange={onChangeHandler}
				value={value}
			/>
		</SettingStyles>
	);
};

type SettingStylesPropsType = {
	error?: boolean
}

const SettingStyles = styled.div<SettingStylesPropsType>`
    display: flex;
    gap: 20px;

    input {
        max-width: 100px;
        border-radius: 5px;
        border-width: 2px;
        border-style: solid;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        border-color: ${props => props.error ? 'red' : 'cadetblue'};
        background-color: ${props => props.error ? '#ffc9c9' : 'transparent'};

        &:focus {
            outline: none;
        }
    }

`
