import { useState } from 'react'

const Form = () => {
	const [inputText, setInputText] = useState('default')
	// const [inputText2, setInputText2] = useState('default')

	return (
	<section>
		<p>
			<label> Skriv in ditt namn:
			<input onChange={event => {
					console.log('Uncontrolled change', event.target.value);
				}
			} /> (uncontrolled)
			</label>
		</p>
		<p>
			<label> Skriv in ditt namn:
			<input onChange={event => {
					console.log('Controlled change', event.target.value);
					setInputText(event.target.value.toUpperCase())
				}}
				value={inputText}
			/>
			</label> (controlled)
		</p>

		<p>
			<input type="checkbox" value="hejsan" /> Precisions-klick
		</p>
		<p>
			<label>
			<input type="checkbox" /> Bättre!
			</label>
		</p>

	</section>

)}
// <p>
// 	<label> Skriv in ditt namn:
// 	<input onChange={event => {
// 			console.log('Controlled change 2', event.target.value);
// 			if( !event.target.value.endsWith('0') ) {
// 				setInputText2(event.target.value)
// 			}
// 		}}
// 		value={inputText2}
// 	/>
// 	</label> (controlled)
// </p>
export default Form
