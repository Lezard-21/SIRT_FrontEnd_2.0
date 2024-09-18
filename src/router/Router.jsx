import { createBrowserRouter } from "react-router-dom";
import PrincipalTutorLayout from "../layouts/PrincipalTutorLayout";
import PrincipalCoordinadorLayout from "../layouts/PrincipalCoordinadorLayout";
import Redirect from "../Components/redirecters/Redirect";
import Login from "../pages/Login";
import PrincipalTutor from "../pages/PrincipalTutor";
import AddReporte from "../pages/AddReporte";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Redirect page=""/>,
    },
    {
        path: "/login", 
        element:<Redirect page="Login"><Login /></Redirect>,
        errorElement: <h1>Error!</h1>,
    },
    {
        element: <Redirect page="Tutor"><PrincipalTutorLayout /></Redirect>,
        path:"/tutor",
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "/tutor/principal/LTC",  
                element: <PrincipalTutor programaEdu="LTC"/>,
            },
            {
                path: "/tutor/principal/LISTI",  
                element: <PrincipalTutor programaEdu="LISTI"/>,
            },
            {
                path: "/tutor/addReporte",  
                element: <AddReporte />,
            },
            {
                path:"/tutor/reporteInfo/*",
                element: <h1>reporte 1</h1>
            }
        ],
    },
    {
        element: <Redirect page="Coordinador"><PrincipalCoordinadorLayout /></Redirect>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "/coordinador",  
                element: <h1>Coordinador Page</h1>,
            },
        ],
    }
]);
