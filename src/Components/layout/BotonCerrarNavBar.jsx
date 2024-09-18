import PropTypes from 'prop-types';

export default function BotonCerrarNavBar( { handleClick } ) {
    return (
        <button onClick={handleClick} className="mr-2">
            <img
                src="/close.svg"
                alt="Icono Cerrar Sesión"
                className="w-6 h-6 mr-2"
            />
        </button>
    )
}


BotonCerrarNavBar.propTypes = {
    handleClick: PropTypes.func,
}