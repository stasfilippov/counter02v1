import React, {useState} from 'react';
import {Button} from '../Counter/Button/Button';
import {Setting} from './Setting/Setting';
import styled from 'styled-components';
import {useAppSelector} from '../../app/hooks';

export const CounterSettings = () => {
	const settingsValue = useAppSelector(state => state.settings)

	const [currentMaxValue, setCurrentMaxValue] = useState<number>(settingsValue.maxValue)
	const [currentMinValue, setCurrentMinValue] = useState<number>(settingsValue.minValue)

	console.log({currentMaxValue, currentMinValue})

	let currentSettingValues = {
		maxValue: currentMaxValue,
		minValue: currentMinValue
	}


	return (
		<div className="wrapper">
			<SettingsboardStyles>
				<Setting title={'max'} value={currentMaxValue} callback={setCurrentMaxValue}/>
				<Setting title={'min'} value={currentMinValue} callback={setCurrentMinValue}/>
			</SettingsboardStyles>
			<Button title={'set'} currentSettingsValue={currentSettingValues}/>
		</div>
	);
};

const SettingsboardStyles = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: black;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    border: 2px cadetblue solid;
`
