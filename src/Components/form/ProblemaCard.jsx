import PropTypes from 'prop-types';

export default function ProblemaCard({ problema, onClose } ) {
    let chipSrc = '/low-problem-chip.svg';
    problema.prioridad = problema.prioridad.toLowerCase();

    if (problema.prioridad === 'alta') {
        chipSrc = '/high-problem.svg';
    } else if (problema.prioridad === 'media') {
        chipSrc = '/medium-problem.svg';
    }

    const handleClose = ()=>{
        onClose(problema.descripcion)
    }
        
    return(
        <div className="h-52 w-full shadow-md border-2 rounded-lg flex-row">
            <div className="flex justify-between p-3 w-full h-1/4">
                <p className="text-xl"><b>Problema</b></p>
                <div className="flex justify-between space-x-5">
                    <button>
                        <img src="/smallEditCard.svg"/>
                    </button>
                    <button onClick={handleClose}>
                        <img src="/smallDeleteCard.svg"/>
                    </button>
                </div>
            </div>
            <div className="flex h-full p-3">
                <div className="w-3/5 h-16 space-y-2 text-sm">
                    <p>EE: {problema.experienciaEducativa}</p>
                    <p>Docente: {problema.profesor}</p>
                    <p>Alumno: {problema.numeroAlumnos}</p>
                    <img src={chipSrc} />
                </div>
                <div className="box-border border-2 border-gray-300 rounded-lg flex relative flex-col shrink-0 w-3/6 h-24">
                    <textarea readOnly disabled className="h-full w-full resize-none" value={problema.descripcion} />
                </div>
            </div>
        </div>
    )
}

ProblemaCard.propTypes = {
    key: PropTypes.number.isRequired,
    onClose: PropTypes.func,
    problema: PropTypes.shape({
        prioridad: PropTypes.string.isRequired,
        experienciaEducativa: PropTypes.string.isRequired,
        profesor: PropTypes.string.isRequired,
        numeroAlumnos: PropTypes.number.isRequired,
        descripcion: PropTypes.string.isRequired
    }).isRequired
};