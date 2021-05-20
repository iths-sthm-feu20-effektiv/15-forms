import { useState } from 'react'
import './Form.css'

const UpdateAddress = () => {
	const [name, setName] = useState('')
	const [nameTouched, setNameTouched] = useState(false)

	let nameIsValid: boolean = (name !== '')
	let nameClass = ''
	if( nameTouched ) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	}

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
				<div className="message hidden"> Error? </div>
			</div>

			<div>
				<label> Telefonnummer </label>
				<input type="text" className="error" />
			</div>

			<div>
				<label> Skostorlek </label>
				<input type="text" className="valid" />
			</div>

		</div>
	)
}

export default UpdateAddress
