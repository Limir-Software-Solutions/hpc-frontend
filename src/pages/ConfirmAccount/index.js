import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios";
import Error from '../../components/Error';

const ConfirmarCuenta = () => {

    const [alerta, setAlerta] = useState({})
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

    const params = useParams();
    const { id } = params

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `http://localhost:8081/users/confirm/${id}`
                const { data } = await axios(url)

                setAlerta({
                    msg: data.msg,
                    error: false
                })

                setCuentaConfirmada(true)

            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        confirmarCuenta();
    }, )

    const { msg } = alerta

    return (
        <div
            className="flex flex-col h-screen items-center justify-center"
        >
            <h1 className="text-sky-600 font-black text-5xl capitalize text-center">Confirma tu cuenta</h1>

            <div className='mt-20 md:mt-10 px-5 rounded-xl'>
                {msg && <Error alerta={alerta} />}

                {cuentaConfirmada && (
                    <Link
                        className='block text-center mt-4 mb-10 text-white uppercase text-sm rounded bg-sky-600 rounded-3xl w-56 m-auto p-2 font-bold'
                        to="/"
                    >Confirmar Cuenta</Link>
                )}
            </div>
        </div>
    )
}

export default ConfirmarCuenta