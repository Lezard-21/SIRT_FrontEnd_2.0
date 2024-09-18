import PropTypes from 'prop-types';

function StudentInfo({ nombreTutor, asistencias, tutoradosEnRiesgo }) {

  return (
    <div className="flex flex-col self-start mr-0">
      <h3 className="text-sm text-wrap tracking-normal max-w-48 leading-6 opacity-[var(--sds-size-stroke-border)] max-md:mr-2">{nombreTutor}</h3>
      <p className="mt-2.5 opacity-[var(--sds-size-stroke-border)]">Alumnos que asistieron: {asistencias}</p>
      <p className="self-start mt-3 opacity-[var(--sds-size-stroke-border)]">Alumnos en riesgo: {tutoradosEnRiesgo}</p>
    </div>
  );

}

StudentInfo.propTypes = {
    nombreTutor : PropTypes.string.isRequired,
    asistencias : PropTypes.number.isRequired,
    tutoradosEnRiesgo: PropTypes.number.isRequired,
 }


export default StudentInfo;