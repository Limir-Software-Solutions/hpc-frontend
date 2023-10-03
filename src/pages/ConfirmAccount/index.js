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
        <>
            <h1 className="text-sky-600 font-black text-5xl capitalize text-center mt-16">Confirma tu cuenta
            </h1>

            <div className='mt-20 md:mt-10 shadow-lg px-5 py-2 rounded-xl bg-white'>
                {msg && <Error alerta={alerta} />}

                {cuentaConfirmada && (
                    <Link
                        className='block text-center mt-16 mb-10 text-white uppercase text-sm rounded bg-sky-600 rounded-3xl w-56 m-auto p-2 font-bold'
                        to="/"
                    >Inicia Sesión</Link>
                )}
            </div>
        </>
    )
}

export default ConfirmarCuenta