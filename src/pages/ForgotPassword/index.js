import React, {useState} from 'react';
import axios from 'axios';

const ForgotPassword = () => {

	const [email, setEmail] = useState('')
	const [alerta, setAlerta] = useState({})

	const handleSubmit = async e => {
		e.preventDefault();

		if(email === '' || email.length < 6) {
			setAlerta({
				msg: 'El Email es obligatorio',
				error: true
			});
			return
		}

		try {
			const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/forgot-password`, { email })

			setAlerta({
				msg: data.msg,
				error: false
			})

		} catch (error) {
			setAlerta({
				msg: error.response.data.msg,
				error: true
			})
		}
	}

	return (
		<>
			<div
				className="flex flex-row justify-around items-center h-screen"
			>
				<img
					src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/hollow-knight.1683709273.8012.jpg?width=768&aspect_ratio=16:9&format=nowebp"
					alt="hola"
					className="h-screen w-1/2 object-cover"
				/>
				<div
					className="flex flex-col items-center w-1/2"
				>
					<form
						className={'my-10 bg-white rounded-lg px-36 py-8 w-full'}
						onSubmit={handleSubmit}
					>
						<h1
							className={'text-3xl font-bold text-center mb-2 uppercase'}
						>
							Recupera Tu Contrasena
						</h1>
						<h2
							className={'text-xl font-bold text-center mb-6 uppercase'}
						>
							Ingresando tu Email
						</h2>
						<div className={'mt-10 mb-6'}>
							<label className={'uppercase text-gray-600 block text-xl font-bold'} htmlFor={'email'}>Email</label>
							<input
								type={'email'}
								placeholder={'Escribe tu email'}
								className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<a
							href={'/login'}
							className="text-sky-600 hover:text-sky-500 transition-colors"
						>
							Tienes cuenta? Inicia sesion
						</a>

						<input
							type={'submit'}
							value={'Recuperar Contraseña'}
							className={'bg-sky-700 w-full py-3 mb-5 mt-4 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'}
						/>
					</form>
				</div>
			</div>
		</>
	);
}

export default ForgotPassword;