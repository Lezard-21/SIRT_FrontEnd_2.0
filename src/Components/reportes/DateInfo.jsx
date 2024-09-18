import PropTypes from 'prop-types';

function DateInfo({ isProblemas, prioridad, isPafi }) {
  let imageSrc = ""
  if(prioridad) {
    imageSrc = '/low-problem-chip.svg';
    prioridad = prioridad.toLowerCase();

    if (prioridad === 'alta') {
      imageSrc = '/high-problem.svg';
    } else if (prioridad === 'media') {
      imageSrc = '/medium-problem.svg';
    }
  }
  return (
    <div className="flex flex-col text-xs tracking-wide leading-4 whitespace-nowrap">
      { prioridad && isProblemas &&
        <img loading="lazy" src={imageSrc} className="object-contain mt-2 rounded-3xl aspect-[4.12] w-[107px]" alt="" />
        || <></>
      }
      {isPafi &&
        <img loading="lazy" src="/pafi-chip.svg" className="object-contain mt-1.5 rounded-3xl aspect-[4.12] w-[107px]" alt="" />
        || <></>
      }
    </div>
  );

}

DateInfo.propTypes = {
  isProblemas: PropTypes.bool,
  prioridad: PropTypes.string,
  isPafi: PropTypes.bool
}

export default DateInfo;