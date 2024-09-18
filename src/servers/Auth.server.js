import { postAuth } from "../utils/HTTPMethods";
import {URL_API}  from "../Constants/URL_API"

export default function AutenticateUser(userData){
    return postAuth(URL_API.AUTH,userData)
}