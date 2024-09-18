import HorizontalCard from "../Components/reportes/HorizontalCard";
import CardAddReporte from "../Components/reportes/CardAddReporte"
import SelectInput from "../Components/form/SelectInput"
import { usePeriodo } from "../hooks/PeriodoContext";
import { getReportesByIdCuenta } from "../servers/Reportes.server"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { setUserCokie } from "../utils/UserCookie";

export default function PrincipalTutor({ programaEdu }) {
    const [reporteInfo, setReporteInfo] = useState([]);
    const [programaActual] = useState(programaEdu)
    const periodo = usePeriodo()
    const navigate = useNavigate()


    const fetchReportes = async () => {
        try {
            const reportesData = await getReportesByIdCuenta();
            console.log(reportesData)
            if (reportesData && reportesData.data) {
                let reportesPrograma = [];
                for (const element of reportesData.data) {
                    if (element.ProgramaEducativo === programaActual) {
                        reportesPrograma.push(element); 
                    }
                }
                setReporteInfo(reportesPrograma);
            }
        } catch (error) {
            console.error("Error fetching reportes:", error);
        }
    };
    useEffect(() => {
        setUserCokie("programaEduActual",programaActual)
        fetchReportes();
    }, []);

    const handleButtonAddReporte = ()=>{
        navigate("/tutor/addReporte")
    }

    const tutoriaData = {
        fechaFinalizacion: "2024-09-16",
        numTutoria: 2
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="w-1/2 h-16">
                    {/* TODO agregar los periodos */}
                    <SelectInput labelText="Selecciona un periodo" defaultText={periodo.abreviacion} options={[]} />
                </div>
                <div className="w-1/2 h-16 p-5 flex justify-end">
                    <button disabled className="h-10 w-40 mr-5 bg-slate-300 rounded-3xl flex justify-center p-3 shadow-sm shadow-black">
                        <img className="flex-shrink-0 w-1/3 h-5" src="/addSomethig.svg" />
                        <p className="flex-grow w-2/3 h-5 text-center text-xs">Tutoría Especial</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col p-14 pt-0 justify-center space-y-10 mt-10">
                {reporteInfo.length <= 0 && <CardAddReporte handleClick={handleButtonAddReporte} tutoriaData={tutoriaData} />}

                {reporteInfo && reporteInfo.length > 0 &&
                    reporteInfo.map((reporte, index) => (
                        <HorizontalCard
                            key={index}
                            reporteData={reporte}
                            tutoriaData={tutoriaData}
                        />
                    ))
                }
            </div>
        </div>
    )
}

PrincipalTutor.propTypes = { programaEdu: PropTypes.string }