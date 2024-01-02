import React from 'react';

type ScoreboardPropsType = {
	count: number
}
export const Scoreboard = (props: ScoreboardPropsType) => {
	
	const scoreboardStyle = {
		width: '200px',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: props.count >= 5 ? 'red' : 'black',
		fontWeight: 'bold',
		fontSize: '30px',
		borderRadius: '10px',
		border: '2px cadetblue solid',

	}

	return (
		<div style={scoreboardStyle} className={'Scoreboard'}> {props.count} </div>
	);
};