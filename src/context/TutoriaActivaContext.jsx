import React, { useState } from "react"
import PropTypes from 'prop-types';

export const TutoriaActivaContext = React.createContext()
export const TutoriaActivaContextUpdate = React.createContext()

export function TutoriaActivaProvider( { children, data} ) {
    const [tutoriaActiva, setPeriodo] = useState(data)
    const updateTutoriaActiva = (nuevaTutotriaActiva)=>{
        setPeriodo(nuevaTutotriaActiva)
    }
    return(
        <TutoriaActivaContext.Provider value={tutoriaActiva}>
            <TutoriaActivaContextUpdate.Provider value={updateTutoriaActiva}>
                {children}
            </TutoriaActivaContextUpdate.Provider>
        </TutoriaActivaContext.Provider>
    )
}

TutoriaActivaProvider.propTypes = {
    children: PropTypes.node,
    data: PropTypes.object
}