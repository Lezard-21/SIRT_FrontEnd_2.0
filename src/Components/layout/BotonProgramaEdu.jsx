import PropTypes from 'prop-types';
import { setUserCokie } from '../../utils/UserCookie';
export default function BotonProgramaEdu( { nombrePrograma, rutaLogo, handleClick} ) {
    setUserCokie("programaEduActual",nombrePrograma)
    return (
        <button onClick={handleClick} className="h-20 w-full p-3 flex items-center border border-zinc-700 shadow-md hover:bg-gray-300 rounded-md">
            <div
                className="ml-5 w-20 h-20 bg-no-repeat bg-cover bg-center rounded-l-md"
                style={{ backgroundImage: `url(${rutaLogo})` }}
            ></div>
            <span className="w-1/2 text-xl">{nombrePrograma}</span>
        </button>
    )
}

BotonProgramaEdu.propTypes = {
    nombrePrograma: PropTypes.string,
    rutaLogo: PropTypes.string,
    handleClick: PropTypes.func
}