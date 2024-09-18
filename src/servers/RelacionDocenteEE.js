import { URL_API } from "../Constants/URL_API";
import { get } from "../utils/HTTPMethods";

export async function getRelacionesDocenteEE() {
   return await get(URL_API.RELACIONES_EE_DOCENTE)
}