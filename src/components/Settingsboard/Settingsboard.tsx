import React from 'react'
import styled from 'styled-components'
import {Setting} from './Setting/Setting'

type SettingsboardType = {
	maxValue: number
	minValue: number
	setValue: (value: number, name: 'max' | 'min') => void
}
export const Settingsboard: React.FC<SettingsboardType> = ({
	                                                           setValue,
	                                                           maxValue,
	                                                           minValue,
                                                           }) => {
	return (
		<SettingsboardStyles>
			<Setting title={'max'} callBack={setValue} value={maxValue}/>
			<Setting title={'min'} callBack={setValue} value={minValue}/>
		</SettingsboardStyles>
	)
}

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
