import { useState } from 'react'

const Form = () => {
	const [inputText, setInputText] = useState('default')

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

export default Form
