import PropTypes from 'prop-types';

export default function BotonProgramaEdu({ texto, rutaIcono, handleClick }) {
    return (
        <button onClick={handleClick} className="flex justify-center py-2 px-4 text-gray-700 hover:bg-gray-300 rounded-md transition duration-200 w-full">
            <img
                src={rutaIcono}
                alt="Icono Configuración"
                className="w-6 h-6 mr-2"
            />
            <span>{texto}</span>
        </button>
    )
}

BotonProgramaEdu.propTypes = {
    texto: PropTypes.string,
    rutaIcono: PropTypes.string,
    handleClick: PropTypes.func
}