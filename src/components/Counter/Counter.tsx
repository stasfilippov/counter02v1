import React from 'react';
import {Scoreboard} from './Scoreboard/Scoreboard';
import {Button} from './Button/Button';

export const Counter = () => {
	return (
		<div className="wrapper">
			<Scoreboard/>
			<div className="battons-wrapper">
				<Button
					title={'add'}
				/>
				<Button
					title={'reset'}
				/>
			</div>
		</div>
	);
};

