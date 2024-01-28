import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

type SettingType = {
	title: 'max' | 'min'
	callBack: (value: number, name: 'max' | 'min') => void
	value: number
}
export const Setting: React.FC<SettingType> = ({title, callBack, value}) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		callBack(+e.currentTarget.value, title)
	}

	return (
		<SettingStyles>
			<div>{title} value:</div>
			<input type={'number'} onChange={onChangeHandler} value={value}/>
		</SettingStyles>
	);
};

const SettingStyles = styled.div`
    display: flex;
    gap: 20px;

    input {
        max-width: 100px;
        border-radius: 5px;
        border: 2px cadetblue solid;
        text-align: center;
        font-weight: bold;

        &:focus {
            outline: none;
        }
    }

`
