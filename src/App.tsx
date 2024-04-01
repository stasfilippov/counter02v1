import './App.css'
import {Button} from './components/Counter/Button/Button'
import {Scoreboard} from './components/Counter/Scoreboard/Scoreboard'


function App() {

	return (
		<div className="App">
			{/*<div className="wrapper">*/}
			{/*	<Settingsboard*/}
			{/*		maxValue={maxValue}*/}
			{/*		minValue={minValue}*/}
			{/*		setValue={setValueHandler}*/}
			{/*	/>*/}
			{/*	<Button*/}
			{/*		title={'Set'}*/}
			{/*		callback={setToLocalStorageHandler}*/}
			{/*		disabled={isDisableSetButton}*/}
			{/*	/>*/}
			{/*</div>*/}
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
		</div>
	)
}

export default App
