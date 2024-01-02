import React from 'react';
import styled from 'styled-components';

type ScoreboardPropsType = {
	count: number
	maxValue: number
	minValue: number
	isShowText: boolean
}
export const Scoreboard: React.FC<ScoreboardPropsType> = ({count, maxValue, isShowText, minValue}) => {


	return (
		<ScoreboardStyle count={count} maxValue={maxValue}>
			{minValue === maxValue || minValue > maxValue || minValue < 0
				? <ErrorMessage>Incorrect value</ErrorMessage>
				: isShowText
					? <ScoreboardText>enter values and press 'set'</ScoreboardText>
					: count
			}
		</ScoreboardStyle>
	);
};

const ScoreboardStyle = styled.div<{ count: number, maxValue: number }>`
    width: 200px;
    height: 100px;
    display: flex;
    color: ${props => props.count >= props.maxValue ? 'red' : 'black'};
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    border-radius: 10px;
    border: 2px cadetblue solid;
`

const ScoreboardText = styled.div`
    font-size: 15px;
    color: #518586;
`
const ErrorMessage = styled.div`
    font-size: 15px;
    color: red;
`