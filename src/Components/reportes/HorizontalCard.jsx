import StudentInfo from "./StudentInfo"
import DateInfo from "./DateInfo"
import PropTypes from 'prop-types';

export default function HorizontalCard({ reporteData, tutoriaData }) {
    
    const finalizacion = tutoriaData.fechaFinalizacion;
    const comentarios = reporteData.ComentariosGenerales;
    const asistencias = reporteData.Asistencias;
    const tutoradosEnRiesgo = reporteData.NoAlumnosRiesgo;

    const getPrioridadMasAlta = (problemas) => {
        let bandPrioridadAlta = false;
        let bandPrioridadMedia = false;
        let bandPrioridadBaja = false;
        for (const element of problemas) {
            let prioridad = element.Prioridad.toLowerCase();
            switch (prioridad) {
                case "alta":
                    bandPrioridadAlta = true;
                    break;
                case "media":
                    bandPrioridadMedia = true;
                    break;
                default:
                    bandPrioridadBaja = true;
                    break;
            }
        }
        if (bandPrioridadAlta) return "Alta";
        if (bandPrioridadMedia) return "Media";
        if (bandPrioridadBaja) return "Baja";
    };

    let numeroDeTutoria = "Primera Tutoría";
    if (reporteData.NoTutoria === 2) numeroDeTutoria = "Segunda Tutoria";
    if (reporteData.NoTutoria === 3) numeroDeTutoria = "Tercera Tutoria";
    
    let problemasExist = false;
    let prioridadMasAlta = "";
    if (reporteData.Problemas) {
        problemasExist = true;
        prioridadMasAlta = getPrioridadMasAlta(reporteData.Problemas);
    }

    let pafiExist = false;
    if (reporteData.PAFFI && Object.keys(reporteData.PAFFI).length > 0) {
        pafiExist = true;
    }

    return (
        <article className="flex flex-col font-medium rounded-xl text-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <header className="flex flex-wrap gap-5 justify-between items-start px-4 pt-1 pb-10 w-full rounded-xl bg-zinc-300 max-md:max-w-full">
                <div className="flex gap-2 text-base tracking-normal leading-6">
                    <h2 className="basis-auto opacity-[var(--sds-size-stroke-border)]">{numeroDeTutoria}</h2>
                    <img loading="lazy" src="/edit-icon.svg" className="object-contain shrink-0 self-start mt-1 w-4 aspect-square" alt="" />
                </div>
                <p className="text-sm tracking-normal leading-5 opacity-[var(--sds-size-stroke-border)]">
                    Fecha de finalización: {finalizacion}
                </p>
            </header>
            <main className="flex z-10 flex-wrap gap-5 justify-between px-3.5 py-3 -mt-8 w-full text-xs tracking-wide leading-4 bg-fuchsia-50 rounded-2xl border border-solid border-zinc-300 max-md:max-w-full">
                <StudentInfo nombreTutor="ROJANO CACERES JOSE RAFAEL" asistencias={asistencias} tutoradosEnRiesgo={tutoradosEnRiesgo} />
                <div className="box-border flex relative flex-col shrink-0 w-2/5">
                    <textarea readOnly disabled className="h-full w-full resize-none" value={comentarios} />
                </div>
                <DateInfo isProblemas={problemasExist} prioridad={prioridadMasAlta} isPafi={pafiExist} />
            </main>
        </article>
    );
}


HorizontalCard.propTypes = {
    reporteData: PropTypes.shape({
        Asistencias: PropTypes.number.isRequired,
        NoAlumnosRiesgo: PropTypes.number.isRequired,
        NoTutoria: PropTypes.number.isRequired,
        ComentariosGenerales: PropTypes.string.isRequired,
        Problemas: PropTypes.arrayOf(PropTypes.shape({
            Prioridad: PropTypes.string
        })),
        PAFFI: PropTypes.array
    }).isRequired,
    tutoriaData: PropTypes.shape({
        fechaFinalizacion: PropTypes.string.isRequired
    }).isRequired
};
