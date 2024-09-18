import {URL_API}  from "../Constants/URL_API"
import { get } from "../utils/HTTPMethods";
import { getUserCokie } from "../utils/UserCookie"

const idTutor = getUserCokie("idCuenta")
export default function getInfoTutor(){
    return get(URL_API.INFORMACION_TUTOR + idTutor)
}