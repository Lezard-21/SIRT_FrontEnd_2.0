import { useState } from 'react';
import { replace, useNavigate } from 'react-router-dom';
import AutenticateUser from '../../servers/Auth.server';
import { setUserCokie } from '../../utils/UserCookie';
import { arrayToString } from "../../utils/Converters";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [errorServer, setErrorServer] = useState({ hasError: false, message: '' })
    const navigate = useNavigate()

    const getProgramasEdu = (programaEdu) => {
        return arrayToString(programaEdu)
    }

    const saveUserInfoOnCokie = (idCuenta, jwt, rol, programasEdu, nombre, correo) =>{
        setUserCokie("programasEdu",programasEdu)
        setUserCokie("token",jwt)
        setUserCokie("rol",rol)
        setUserCokie("nombre",nombre)
        setUserCokie("correo",correo)
        setUserCokie("idCuenta",idCuenta)
        setUserCokie("programaEduActual","LTC")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true)
            setErrorServer({hasError:false, message:""})
            console.log('Email:', email);
            console.log('Password:', password);
            const userData = {
                correo: email,
                password: password
            }
            const data = await AutenticateUser(userData)
            if (data.error) {
                setErrorServer({hasError:true, message: data.message})
            }else{
                const programasEdu = getProgramasEdu(data.programaEdu)
                saveUserInfoOnCokie(data.idCuenta, data.jwt, data.rol, programasEdu, data.nombre, data.email)
                navigate('/tutor/principal/LTC')
            }
        } catch (error) {
            setErrorServer({hasError:true, message:"Error en el servidor"})
        }finally{
            setIsLoading(false)
        }
    };

    return (
        <form className="space-y-4 flex flex-col" onSubmit={(e)=> handleSubmit(e)}>
            <div>
                <label htmlFor="email" className="block text-gray-700">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Ingrese su correo electrónico"
                    required
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Ingrese su contraseña"
                    required
                />
            </div>
            {errorServer.hasError && <label className='text-red-500 h-full text-center'>{errorServer.message}</label>}
            <button type="submit" className={`mt-6 mx-auto w-60 h-auto rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 ${isLoading ? 'opacity-50 cursor-wait' : ''}`}>{isLoading ? "Cargando..." : "Iniciar Sesión"}</button>
        </form>
    );
}
