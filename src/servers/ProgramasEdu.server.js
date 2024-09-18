import { URL_API } from "../Constants/URL_API";
import { get } from "../utils/HTTPMethods";

export async function getProgramasEdu(ids) {
   return await get(URL_API.PROGRAMA_EDUCATIVO + ids)
}