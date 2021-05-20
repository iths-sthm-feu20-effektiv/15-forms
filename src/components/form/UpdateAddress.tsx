import { useState } from 'react'
import './Form.css'

const UpdateAddress = () => {
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)

	const [phone, setPhone] = useState('')
	const [phoneTouched, setPhoneTouched] = useState(false)


	// Variabler för validering (kontrollera rimligheten i värden)
	// Ändra bara CSS-klassen om användaren haft en chans att ändra värdet
	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if( name === '' ) {
		nameIsValid = false
		// nameErrorMessage = 'Du har inte skrivit något namn.'
		nameErrorMessage = 'Vänligen skriv ditt namn.'
	}
	let nameClass = ''
	if( nameTouched ) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	}

	const allowedPhoneCharacters = "+0123456789 -"
	let phoneIsValid: boolean = true
	let phoneErrorMessage: string = ''
	if( phone === '' ) {
		phoneIsValid = false
		phoneErrorMessage = 'Vänligen skriv ditt telefonnummer.'
	} else if( !phone.split('').every(char => allowedPhoneCharacters.includes(char)) ) {
		phoneIsValid = false
		phoneErrorMessage = 'Skriv ditt telefonnummer på formen: "0733-12345678".'
	}
	let phoneClass = ''
	if( phoneTouched ) {
		phoneClass = (phoneIsValid ? 'valid' : 'error')
	}

	let formIsInvalid = !nameIsValid || !phoneIsValid


	return (
		<div className="update-form">
			<div>
				<label> Namn </label>
				<input type="text"
					onBlur={() => setNameTouched(true)}
					onChange={e => setName(e.target.value)}
					value={name}
					className={nameClass}
				/>
				{nameTouched ? <div className="message"> {nameErrorMessage} </div> : null}
			</div>

			<div>
				<label> Telefonnummer </label>
				<input type="text"
					onBlur={() => setPhoneTouched(true)}
					onChange={e => setPhone(e.target.value)}
					value={phone}
					className={phoneClass}
				/>
				{phoneTouched ? <div className="message"> {phoneErrorMessage} </div> : null}
			</div>

			<div>
				<label> Skostorlek </label>
				<input type="text" className="valid" />
			</div>

			<div>
				<button disabled={formIsInvalid}> Spara ändringar </button>
			</div>

		</div>
	)
}

export default UpdateAddress
