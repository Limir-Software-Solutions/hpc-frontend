import React, { useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import { Hidden } from '@mui/material';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [alerta, setAlerta] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email === '' || email.length < 6) {
			setAlerta({
				msg: 'El Email es obligatorio',
				error: true,
			});
			return;
		}

		try {
			const { data } = await axios.post(
				`http://localhost:8081/users/forgotPassword`,
				{ email }
			);

			setAlerta({
				msg: data.msg,
				error: false,
			});
		} catch (error) {
			setAlerta({
				msg: 'Correo no encontrado',
				error: true,
			});
		}
	};

	const { msg } = alerta;

	return (
		<>
			<div className="flex flex-col md:flex-row h-screen">
				<Hidden smDown>
					{/* La imagen solo se mostrará en pantallas mayores o iguales a `md` */}
					<img
						src="static/images/login.jpg"
						alt="hola"
						className="h-screen w-full md:w-1/2 object-cover"
					/>
				</Hidden>
				<div className="flex flex-col justify-center items-center w-full md:w-1/2">
					<form
						className={'my-10 bg-white rounded-lg px-6 py-8 w-full md:w-10/12 mx-auto'}
						onSubmit={handleSubmit}
					>
						<h1 className={'text-3xl font-bold text-center mb-2 uppercase'}>
							Recupera Tu Contraseña
						</h1>

						{msg && <Error alerta={alerta} />}

						<h2 className={'text-xl font-bold text-center mb-6 uppercase'}>
							Ingresando tu Correo
						</h2>
						<div className={'my-4'}>
							<label
								className={'uppercase text-gray-600 block text-xl font-bold'}
								htmlFor={'email'}
							>
								Correo
							</label>
							<input
								type={'email'}
								placeholder={'Escribe tu email'}
								className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<a
							href={'/login'}
							className="text-sky-600 hover:text-sky-500 transition-colors"
						>
							Tienes cuenta? Inicia Sesión
						</a>

						<input
							type={'submit'}
							value={'Recuperar Contraseña'}
							className={
								'bg-sky-700 w-full py-3 mt-6 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
							}
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
