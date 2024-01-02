import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard/Scoreboard';
import {Button} from './components/Button/Button';

export type NameButtonType = 'add' | 'reset'

function App() {

	let [count, setCount] = useState<number>(0)

	let maxValue = 5;
	let minValue = 0;
	const incrementCount = () => {
		if (count < maxValue) {
			setCount(count + 1);
		}
	}

	const resetCount = () => {
		setCount(minValue)
	}

	const isDisabled = (name: NameButtonType, countValue: number): boolean => {
		return (name === 'add' && countValue >= maxValue) || (name === 'reset' && countValue === minValue);
	}

	return (
		<div className="App">
			<div className="wrapper">
				<Scoreboard count={count}/>
				<div className="battons-wrapper">
					<Button title={'Add'} callback={incrementCount}
					        disabled={isDisabled('add', count)}/>
					<Button title={'Reset'}
					        callback={resetCount}
					        disabled={isDisabled('reset', count)}/>
				</div>
			</div>
		</div>
	);
}

export default App;
