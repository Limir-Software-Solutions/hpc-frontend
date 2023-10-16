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
                const url = `https://services-hpc.onrender.com/users/confirm/${id}`
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
                    <a
                        className='block text-center mt-4 mb-10 text-white uppercase text-sm rounded bg-sky-600 rounded-3xl w-56 m-auto p-2 font-bold'
                        href='https://hpc-admin.vercel.app'
                    >Confirmar Cuenta</a>
                )}
            </div>
        </div>
    )
}

export default ConfirmarCuenta