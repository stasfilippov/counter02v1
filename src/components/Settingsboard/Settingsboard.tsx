import React from 'react';
import {Setting} from './Setting/Setting';
import styled from 'styled-components';

type SettingsboardType = {
	maxValue: number
	minValue: number
	setMaxValue: (value: number) => void
	setMinValue: (value: number) => void
}
export const Settingsboard: React.FC<SettingsboardType> = ({
	                                                           setMaxValue,
	                                                           setMinValue,
	                                                           maxValue, minValue
                                                           }) => {


	return (
		<SettingsboardStyles>
			<Setting title={'max'} callBack={setMaxValue} value={maxValue}/>
			<Setting title={'min'} callBack={setMinValue} value={minValue}/>
		</SettingsboardStyles>
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
