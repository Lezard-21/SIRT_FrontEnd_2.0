import React from "react"
import { TutoriaActivaContext, TutoriaActivaContextUpdate  } from "../context/TutoriaActivaContext"

export const useTutoriaActual = ()=>{
    return React.useContext(TutoriaActivaContext)
}

export const useTutoriaActualUpdate = ()=>{
    return React.useContext(TutoriaActivaContextUpdate)
}