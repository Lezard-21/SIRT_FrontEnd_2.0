import PropTypes from 'prop-types';

export default function InfoDisplayer({ info }) {
    return (
        <>
            <div className="w-full flex justify-center">
                <img src={info.rutaImagen} className="h-20 w-20 rounded-full border-2 border-gray-300" alt="Logo" />
            </div>
            <div className="flex mt-3">
                <label className="w-1/3 text-sm">Nombre: </label>
                <p className=" w-2/3 text-sm">{info.nombre}</p>
            </div>
            <div className="flex mt-1">
                <label className="w-1/3 text-sm">Rol: </label>
                <p className="w-2/3 text-sm">{info.rol}</p>
            </div>
            <div className="flex mt-1">
                <label className="w-1/3 text-sm">Periodo: </label>
                <p className=" w-2/3 text-sm">{info.periodo}</p>
            </div>
            <div className="flex mt-1">
                <label className="w-1/3 text-sm">No.Tutoría: </label>
                <p className="w-2/3 text-sm">{info.noTutoria}</p>
            </div>
        </>
    )
}

InfoDisplayer.propTypes = { info: PropTypes.object }