import React from "react"
import { PeriodoContext, PeriodoContextUpdate } from "../context/PeriodoProvider"

export const usePeriodo = ()=>{
    return React.useContext(PeriodoContext)
}

export const usePeriodoUpdate = ()=>{
    return React.useContext(PeriodoContextUpdate)
}