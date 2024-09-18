import {URL_API}  from "../Constants/URL_API"
import { get } from "../utils/HTTPMethods"

export function getDocentes(){
    return get(URL_API.DOCENTES)
}

export function getDocentesById(){
    return get(URL_API.DOCENTES_POR_ID)
}