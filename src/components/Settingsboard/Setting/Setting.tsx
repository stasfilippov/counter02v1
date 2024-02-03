import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from 'styled-components';

type SettingType = {
	title: 'max' | 'min'
	callBack: (value: number, name: 'max' | 'min') => void
	value: number
	compareValue: number
}
export const Setting: React.FC<SettingType> = ({title, callBack, value, compareValue}) => {

	const [error, setError] = useState(false)
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		callBack(+e.currentTarget.value, title)


	}

	useEffect(() => {

		switch (title) {
			case 'min': {
				value < 0 || value > compareValue || value === compareValue ? setError(true) : setError(false);
				break;
			}
			case 'max': {
				value < 0 || value === compareValue ? setError(true) : setError(false);
				break
			}

			default:
				break;
		}

	}, [value, compareValue])

	return (
		<SettingStyles error={error}>
			<div>{title} value:</div>
			<input type={'number'} onChange={onChangeHandler} value={value}/>
		</SettingStyles>
	);
};

type SettingStylesPropsType = {
	error: boolean
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
