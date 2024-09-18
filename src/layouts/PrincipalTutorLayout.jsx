import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserCokie, removeUserCokie } from "../utils/UserCookie";
import getPeriodoActual from "../servers/Periodos.server";
import InfoDisplayer from "../Components/layout/InfoDisplayer";
import BotonProgramaEdu from "../Components/layout/BotonProgramaEdu";
import BotonAuxiliar from "../Components/layout/BotonAuxiliar";
import BotonCerrarNavBar from "../Components/layout/BotonCerrarNavBar";
import { PeriodoProvider } from "../context/PeriodoProvider"
import { TutoriaActivaProvider } from "../context/TutoriaActivaContext";
import { TutoriasProvider } from "../context/TutoriasProvider";
import { StringToArray } from "../utils/Converters";
export default function PrincipalTutorLayout() {
    const rol = getUserCokie("rol")
    const nombre = getUserCokie("nombre")
    // const [navigate, setNavigate] = useState({ path: "", nav: false })
    const [periodo, setPeriodo] = useState({})
    const [tutoriaActiva, setTutoriaActiva] = useState({})
    const [tutorias, setTutorias] = useState([])
    const programasEdu = StringToArray(getUserCokie("programasEdu"))
    const navigate = useNavigate()

    const cerrarSesion = () => {
        removeUserCokie("programasEdu")
        removeUserCokie("token")
        removeUserCokie("rol")
        removeUserCokie("nombre")
        removeUserCokie("correo")
        removeUserCokie("idCuenta")
        removeUserCokie("programaEduActual")
        // setNavigate({ path: "/login", nav: true })
        navigate("/login")
    }

    const getTutoriaActual = (periodoInfo) => {
        const tutorias = periodoInfo.Tutorias
        for (const element of tutorias) {
            if (element.estado === "Activa") {
                return element
            }
        }
        return { error: true, errorMessage: "No se encontraron tutorías activas" }
    }

    useEffect(() => {
        const asignarPeriodoActual = async () => {
            try {
                let response = await getPeriodoActual()
                response = response.data[0]
                setPeriodo(response)
                setTutorias(response.Tutorias)
                setTutoriaActiva(getTutoriaActual(response))
            } catch (error) {
                console.log(error)
            }
        }
        asignarPeriodoActual()
    }, [])

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* {navigate.nav && <Navigate to={navigate.path} replace />} */}
                <div className="w-80 bg-slate-100 border-l border-gray-300 flex flex-col">
                    <div className="w-full mt-3 flex justify-end ">
                        <BotonCerrarNavBar handleClick={() => { }} />
                    </div>
                    <nav className="flex flex-col items-stretch justify-between p-4 space-y-11">
                        <div className="seccion_1 w-full border p-6 border-black shadow-md rounded-xl">
                            <InfoDisplayer info={{ nombre: nombre, rol: rol, periodo: periodo.abreviacion, noTutoria: tutoriaActiva.numTutoria, rutaImagen: "/FEI.jpg" }} />
                        </div>
                        <div className="seccion_2 space-y-5 min-h-44">
                            {programasEdu.includes("0") && (
                                <BotonProgramaEdu
                                    handleClick={()=>{navigate("/tutor/principal/LTC")}}
                                    nombrePrograma={"LTC"}
                                    rutaLogo={"/LTC-logo.png"}
                                />
                            )}
                            {programasEdu.includes("1") && (
                                <BotonProgramaEdu
                                    handleClick={()=>{navigate("/tutor/principal/LISTI")}}
                                    nombrePrograma={"LISTI"}
                                    rutaLogo={"/LISTI-logo.png"}
                                />
                            )}

                        </div>
                        <div className="mt-8 seccion_3 space-y-3">
                            <BotonAuxiliar texto={"Configuracón"} rutaIcono={"/config.svg"} handleClick={() => { }} />
                            <BotonAuxiliar texto={"Cerrar Sesión"} rutaIcono={"/cerrar-sesion.svg"} handleClick={cerrarSesion} />
                        </div>
                    </nav>
                </div>
                <div className="flex-1 p-56 pt-10 pb-0 bg-gray-100 overflow-auto">
                    {Object.keys(periodo).length > 0 ? (
                        <PeriodoProvider data={periodo}>
                            <TutoriaActivaProvider data={tutoriaActiva}>
                                <TutoriasProvider data={tutorias}>
                                    <Outlet />
                                </TutoriasProvider>
                            </TutoriaActivaProvider>
                        </PeriodoProvider>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </div>
        </>
    );
}