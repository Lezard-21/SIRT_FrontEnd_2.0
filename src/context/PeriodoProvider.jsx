import React, { useState } from "react"
import PropTypes from 'prop-types';

export const PeriodoContext = React.createContext()
export const PeriodoContextUpdate = React.createContext()

export function PeriodoProvider( { children, data} ) {
    const [periodo, setPeriodo] = useState(data)
    const updatePeriodo = (nuevoPeriodo)=>{
        setPeriodo(nuevoPeriodo)
    }
    return(
        <PeriodoContext.Provider value={periodo}>
            <PeriodoContextUpdate.Provider value={updatePeriodo}>
                {children}
            </PeriodoContextUpdate.Provider>
        </PeriodoContext.Provider>
    )
}

PeriodoProvider.propTypes = {
    children: PropTypes.node,
    data: PropTypes.object
}