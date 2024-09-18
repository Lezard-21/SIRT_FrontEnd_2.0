import {URL_API}  from "../Constants/URL_API"
import { get } from "../utils/HTTPMethods"

export default function getPeriodoActual(){
    return get(URL_API.PERIODO_ACTUAL)
}