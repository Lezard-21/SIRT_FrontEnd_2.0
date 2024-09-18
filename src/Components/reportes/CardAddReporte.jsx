import PropTypes from 'prop-types';

export default function HorizontalCard( {tutoriaData, handleClick} ) {
    const finalizacion = tutoriaData.fechaFinalizacion;
    let numeroDeTutoria = "Primera Tutoría";
    if (tutoriaData.numTutoria === 2) numeroDeTutoria = "Segunda Tutoria";
    if (tutoriaData.numTutoria === 3) numeroDeTutoria = "Tercera Tutoria";
    
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
                <button onClick={handleClick} className="h-full w-full flex justify-center">
                    <img src="/addReporte.svg" className="" alt="" />
                </button>
            </main>
        </article>
    );
}

HorizontalCard.propTypes = {
    handleClick: PropTypes.func,
    tutoriaData: PropTypes.shape({
        fechaFinalizacion: PropTypes.string.isRequired,
        numTutoria: PropTypes.number.isRequired
    }).isRequired
};