import React, { useState } from "react"
import PropTypes from 'prop-types';

export const TutoriasContext = React.createContext()
export const TutoriasContextUpdate = React.createContext()

export function TutoriasProvider( { children, data} ) {
    const [tutorias, setTutorias] = useState(data)
    const updateTutorias = (nuevaTutotrias)=>{
        setTutorias(nuevaTutotrias)
    }
    return(
        <TutoriasContext.Provider value={tutorias}>
            <TutoriasContextUpdate.Provider value={updateTutorias}>
                {children}
            </TutoriasContextUpdate.Provider>
        </TutoriasContext.Provider>
    )
}

TutoriasProvider.propTypes = {
    children: PropTypes.node,
    data: PropTypes.array
}