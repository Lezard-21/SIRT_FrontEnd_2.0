import { URL_API } from "../Constants/URL_API";
import { get, post } from "../utils/HTTPMethods";
import { getUserCokie } from "../utils/UserCookie";

// terminar
const idCuenta = getUserCokie("idCuenta")
export async function getReportesByIdCuenta() {
   return await get(URL_API.REPORTES_POR_ID_CUENTA + idCuenta)
}

export async function getReportesByParams( {periodo, programaEducativo} ) {
   return await get(URL_API.REPORTES_POR_ID_CUENTA + idCuenta + "/" + periodo + "/" + programaEducativo)
}

export async function postReporte(reporte) {
   return await post(URL_API.REPORTES,reporte)
}