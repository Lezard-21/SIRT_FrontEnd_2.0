import NumberInput from "../Components/form/NumberInput";
import TextAreaInput from "../Components/form/TextAreaInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProblemasForm from "../Components/form/ProblemasForm";
import { getUserCokie } from "../utils/UserCookie";
import { usePeriodo } from "../hooks/PeriodoContext";
import { useTutoriaActual } from "../hooks/TutoriaActivaContext";
import ProblemaCard from "../Components/form/ProblemaCard";
import { postReporte } from "../servers/Reportes.server";

export default function AddReporte() {
    const navigate = useNavigate()
    const [asistencias, setAsistencias] = useState(0)
    const [alumnosEnRiesgo, setAlumnosEnRiesgo] = useState(0)
    const [comentariosGenerales, setComentariosGenerales] = useState("")
    const [problemas, setProblemas] = useState([])

    const periodoActual = usePeriodo()
    const tutoriaActual = useTutoriaActual()
    const programaEduActual = getUserCokie("programaEduActual")
    const idCuenta = getUserCokie("idCuenta")
    const nombreCuenta = getUserCokie("nombre")
    const correoCuenta = getUserCokie("correo")

    const eliminarProblema = (descripcion) => {
        setProblemas((prevProblemas) =>
            prevProblemas.filter((problema) => problema.descripcion !== descripcion)
        );
    };

    const postData = () => {
        const reporte = {
            Asistencias: asistencias,
            NoAlumnosRiesgo: alumnosEnRiesgo,
            Periodo: periodoActual.abreviacion,
            ProgramaEducativo: programaEduActual,
            NoTutoria: tutoriaActual.numTutoria,
            idCuenta: parseInt(idCuenta),
            NombreCuenta: nombreCuenta,
            Correo: correoCuenta,
            ComentariosGenerales: comentariosGenerales,
            PAFFI: [],
            Problemas: problemas
        }
        console.log(reporte);
        
        postReporte(reporte)
    }

    return (
        <>
            <div className="w-full flex justify-between">
                <button onClick={() => { navigate(-1) }}>
                    <img src="/return.svg" />
                </button>
                <h1 className="text-4xl w-fit text-center">Crear reporte</h1>
                <button>
                    <img src="/newPafi.svg" draggable="false" />
                </button>
            </div>
            <div className="border-2 mt-5 mb-5 p-10">
                <NumberInput
                    labelText="Número de alumnos que asistieron"
                    defaultText="0"
                    key="asistencias"
                    onChange={value => setAsistencias(value)}
                />
                <NumberInput
                    labelText="Número de alumnos en riesgo"
                    defaultText="0"
                    key="noEnRiesgo"
                    onChange={value => setAlumnosEnRiesgo(value)}
                />

                <hr className="w-full mt-5" />
                <p className="mb-5">Problemas academicos detectados</p>

                {problemas && problemas.length > 0 &&
                    <div className="w-full h-fit border-2 flex-col p-7  space-y-4">
                        {
                            problemas.map((problema) => (
                                <ProblemaCard key={problema.descripcion} problema={problema} onClose={value => eliminarProblema(value)} />
                            ))
                        }
                    </div>
                }
                <ProblemasForm onChange={value => setProblemas(value)} />

                <hr className="mt-5" />
                <TextAreaInput
                    labelText="Comentarios generales"
                    key="comentarios"
                    onChange={value => setComentariosGenerales(value)}
                />
                <div className="w-full flex justify-center space-x-10 mt-10">
                    <button className="h-fit" onClick={() => { navigate(-1) }}>
                        <img src="/btnCancelar.svg" alt="Cancela la cración del reporte" />
                    </button>
                    <button className="h-fit" onClick={postData}>
                        <img src="/btnCrearReporte.svg" alt="Crea el reporte" />
                    </button>
                </div>
            </div>
        </>
    )
}