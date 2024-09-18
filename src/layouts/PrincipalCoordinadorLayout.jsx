import BotonProgramaEdu from "../Components/layout/BotonProgramaEdu";
import { Outlet } from "react-router-dom";

export default function PrincipalCoordinadorLayout() {
    return (
        <>
        <div className="flex h-screen">
            {/* Navbar vertical en el lado derecho */}
            <div className="w-64 bg-white border-l border-gray-200 flex flex-col">
                <nav className="flex flex-col items-center p-4">
                    <div className="w-full">
                        <img src="./FEI.jpg" className="h-20 w-20"></img>
                        <p>Nombre: </p>
                        <p>Rol: </p>
                        <p>Periodo: </p>
                        <p>No. Tutoria: </p>
                    </div>
                        <BotonProgramaEdu nombrePrograma={"LISTI"} rutaLogo={"/LISTI-Logo.png"}/>
                    <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200">
                        <img
                            src="./config.svg"
                            alt="Icono"
                            className="w-6 h-6 mr-2"
                        />
                        <span>Configuración</span>
                    </button>
                    <button className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200">
                        <img
                            src="./cerrar-sesion.svg"
                            alt="Icono"
                            className="w-6 h-6 mr-2"
                        />
                        <span>Cerrar Sesión</span>
                    </button>
                </nav>
            </div>
            {/* Contenido principal */}
            <div className="flex-1 p-8 bg-gray-100">
                <Outlet />
            </div>
        </div>
        </>
    );
}