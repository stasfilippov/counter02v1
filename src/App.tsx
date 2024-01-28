import {useEffect, useState} from 'react'
import './App.css'
import {Button} from './components/Button/Button'
import {Scoreboard} from './components/Scoreboard/Scoreboard'
import {Settingsboard} from './components/Settingsboard/Settingsboard'

export type NameButtonType = 'add' | 'reset'

function App() {
	let [maxValue, setMaxValue] = useState<number>(5)
	let [minValue, setMinValue] = useState<number>(0)
	let [count, setCount] = useState<number>(0)

	useEffect(() => {
		let newMaxValue = localStorage.getItem('maxvalue')
		let newMinValue = localStorage.getItem('minvalue')

		if (newMaxValue && newMinValue) {
			setMaxValue(JSON.parse(newMaxValue))
			setMinValue(JSON.parse(newMinValue))
			setCount(JSON.parse(newMinValue))
		}
	}, [])


	let [isDisableSetButton, setIsDisableSetButton] = useState(true)
	let [isShowText, setIsShowText] = useState(false)
	let [isDisabeControlBtns, setIsDisabeControlBtns] = useState(false)

	const setToLocalStorageHandler = () => {
		localStorage.setItem('maxvalue', JSON.stringify(maxValue))
		localStorage.setItem('minvalue', JSON.stringify(minValue))
		setCount(minValue)
		// getMinValueFromLocalStorageHandler()
		setIsDisableSetButton(true)
		setIsShowText(false)
		setIsDisabeControlBtns(false)
	}

	const incrementCount = () => {
		if (count < maxValue) {
			setCount(count + 1)
		}
	}
	const resetCount = () => {
		setCount(minValue)
	}
	const isDisabled = (name: NameButtonType, countValue: number): boolean => {
		if (!isDisabeControlBtns) {
			return (name === 'add' && countValue >= maxValue) || (name === 'reset' && countValue === minValue)
		}
		return isDisabeControlBtns
	}
	const setValueHandler = (value: number, name: 'max' | 'min') => {
		setIsDisabeControlBtns(true)
		setIsDisableSetButton(false)
		setIsShowText(true)
		name === 'max' ? setMaxValue(value) : setMinValue(value)
	}


	return (
		<div className="App">
			<div className="wrapper">
				<Settingsboard
					maxValue={maxValue}
					minValue={minValue}
					setValue={setValueHandler}
				/>
				<Button
					title={'Set'}
					callback={setToLocalStorageHandler}
					disabled={isDisableSetButton}
				/>
			</div>
			<div className="wrapper">
				<Scoreboard
					count={count}
					maxValue={maxValue}
					minValue={minValue}
					isShowText={isShowText}
				/>
				<div className="battons-wrapper">
					<Button
						title={'Add'}
						callback={incrementCount}
						disabled={isDisabled('add', count)}
					/>
					<Button
						title={'Reset'}
						callback={resetCount}
						disabled={isDisabled('reset', count)}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
