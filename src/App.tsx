import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from './components/Scoreboard/Scoreboard';
import {Button} from './components/Button/Button';
import {Settingsboard} from './components/Settingsboard/Settingsboard';

export type NameButtonType = 'add' | 'reset'


function App() {


	let [maxValue, setMaxValue] = useState<number>(5);
	let [minValue, setMinValue] = useState<number>(0);
	let [isDisableSetButton, setIsDisableSetButton] = useState(true)
	let [isShowText, setIsShowText] = useState(false)
	let [isDisabeControlBtns, setIsDisabeControlBtns] = useState(false)

	let [count, setCount] = useState<number>(0)

	useEffect(() => {
		let newMaxValue = localStorage.getItem('maxValue')
		let newMinValue = localStorage.getItem('minValue')

		if (newMaxValue && newMinValue) {
			setMaxValue(JSON.parse(newMaxValue))
			setMinValue(JSON.parse(newMinValue))
		}

		getMinValueFromLocalStorageHandler()
	}, [])

	const setToLocalStorageHandler = () => {
		localStorage.setItem('maxValue', JSON.stringify(maxValue))
		localStorage.setItem('minValue', JSON.stringify(minValue))
		getMinValueFromLocalStorageHandler()
		setIsDisableSetButton(true)
		setIsShowText(false)
		setIsDisabeControlBtns(false)
	}

	const getMinValueFromLocalStorageHandler = () => {
		let newMinValue = localStorage.getItem('minValue')
		if (newMinValue) {
			setCount(JSON.parse(newMinValue))
		}
	}

	const incrementCount = () => {
		if (count < maxValue) {
			setCount(count + 1);
		}
	}
	const resetCount = () => {
		setCount(minValue)
	}
	const isDisabled = (name: NameButtonType, countValue: number): boolean => {
		return isDisabeControlBtns
			? isDisabeControlBtns
			: (name === 'add' && countValue >= maxValue) || (name === 'reset' && countValue === minValue);

	}
	const setMaxValueHandler = (value: number) => {
		setIsDisabeControlBtns(true)
		setIsDisableSetButton(false)
		setIsShowText(true)
		setMaxValue(value)
	}
	const setMinValueHandler = (value: number) => {
		setIsDisabeControlBtns(true)
		setIsDisableSetButton(false)
		setIsShowText(true)
		setMinValue(value)
	}

	return (
		<div className="App">
			<div className="wrapper">
				<Settingsboard maxValue={maxValue} minValue={minValue} setMaxValue={setMaxValueHandler}
				               setMinValue={setMinValueHandler}/>
				<Button title={'Set'} callback={setToLocalStorageHandler} disabled={isDisableSetButton}/>
			</div>
			<div className="wrapper">
				<Scoreboard count={count} maxValue={maxValue} minValue={minValue} isShowText={isShowText}/>
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
