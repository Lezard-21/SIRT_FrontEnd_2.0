import {URL_API}  from "../Constants/URL_API"
import { get } from "../utils/HTTPMethods"

export function getEEs(){
    return get(URL_API.EXPERIENCIAS_EDUCATIVAS)
}

export function getEEsById(id) {
    get(URL_API.EXPERIENCIAS_EDUCATIVAS_POR_ID+id)
}
export function getRelacionesEE(id) {
    get(URL_API.RELACIONES_EE+id)
}