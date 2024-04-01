import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../app/store';

type ScoreboardPropsType = {
}
export const Scoreboard: React.FC<ScoreboardPropsType> = () => {
	const countValue = useSelector<AppStateType, number>(state => state.counter.value)

	return (
		<ScoreboardStyle >
			<ScoreboardText>{countValue}</ScoreboardText>
		</ScoreboardStyle>
	);
};

const ScoreboardStyle = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    border-radius: 10px;
    border: 2px cadetblue solid;
`

const ScoreboardText = styled.div`
    font-size: 30px;
    color: #518586;
`
const ErrorMessage = styled.div`
    font-size: 15px;
    color: red;
`