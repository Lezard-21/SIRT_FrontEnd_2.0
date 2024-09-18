const API_URL = "http://localhost:4000/api"
export const URL_API = {
    AUTH: API_URL + "/auth/",
    TIEMPO: API_URL + "/tiempo/",
    INFORMACION_TUTOR: API_URL + "/cuentas/",
    DOCENTES: API_URL + "/docentes/",
    DOCENTES_POR_PROGRAMA_EDUCATIVO: API_URL + "/docentes/byProgramaEdu/",
    DOCENTES_POR_ID: API_URL + "/docentes/",
    EXPERIENCIAS_EDUCATIVAS: API_URL + "/ee/",
    EXPERIENCIAS_EDUCATIVAS_POR_ID: API_URL + "/ee/",
    EXPERIENCIAS_EDUCATIVAS_POR_PROGRAMA_EDUCATIVO: API_URL + "/ee/byProgramaEdu/",
    RELACIONES_EE_DOCENTE: API_URL + "/relacionDocentesEE/",
    RELACIONES_EE: API_URL + "/relacionDocentesEE/ByIdEE/",
    PROGRAMA_EDUCATIVO: API_URL + "/programasEducativos/",
    REPORTES_POR_ID_CUENTA: API_URL + "/reportes/byIdCuenta/",
    REPORTES_POR_PARAMS: API_URL + "/reportes/byAttributes/",
    REPORTES: API_URL + "/reportes/",
    PERIODO_ACTUAL: API_URL + "/periodos/byEstado/activo/"
}