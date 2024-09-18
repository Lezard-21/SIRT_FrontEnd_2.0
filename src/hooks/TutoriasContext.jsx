import React from "react"
import { TutoriasContext, TutoriasContextUpdate  } from "../context/TutoriasProvider"

export const useTutorias = ()=>{
    return React.useContext(TutoriasContext)
}

export const useTutoriasUpdate = ()=>{
    return React.useContext(TutoriasContextUpdate)
}