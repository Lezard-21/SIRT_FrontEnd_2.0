import { Navigate } from "react-router-dom";
import { getUserCokie } from "../../utils/UserCookie";
import PropTypes from 'prop-types';

const verifyPage = (children, page, rol) => {
    if (page === rol) {
        return children;
    } else {
        return <Navigate to={searchCorrectPage()} />;
    }
};

const searchCorrectPage = (rol) => {
    if (rol === "Tutor") {
        return `/${rol}/principal/LTC`;
    }
    return "/login";
};

export default function Redirect({ children, page }) {
    if (page === "Login") {
        return children;
    }

    const token = getUserCokie("token");
    const rol = getUserCokie("rol");

    if (!token) {
        return <Navigate to="/login" />;
    }

    return verifyPage(children, page, rol);
}

Redirect.propTypes = {
    children: PropTypes.node, 
    page: PropTypes.string.isRequired
};

// import { Navigate } from "react-router-dom";
// import { getUserCokie } from "../utils/UserCookie"

// const token = getUserCokie("token")
// const rol = getUserCokie("rol")

// const verifyPage = (children, page)=>{
//     switch (page) {
//              case  "tutor" || "coordinador":
//                 return children
//             case  "login":
//                 return <Navigate to={searchCorrectPage} />
//             default:
//                 return <Navigate to="/login"/>
//         }
// }
// const searchCorrectPage = ()=>{
//     if (rol) {
//         const path = "/"+rol
//         return path
//     }
//     return null
// }
// export default function Redirect({ children, page }) {

//     if (token) {
//         verifyPage(children, page)   
//     }else{
//         return <Navigate to="/login"/>;
//     }
//     // return (
//     //     <div className="flex items-center justify-center h-screen bg-gray-100">
//     //         <div className="text-center">
//     //             <svg
//     //                 className="ml-10 animate-spin h-16 w-16 text-blue-500 mb-4"
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //                 fill="none"
//     //                 viewBox="0 0 24 24"
//     //             >
//     //                 <circle
//     //                     className="opacity-25"
//     //                     cx="12"
//     //                     cy="12"
//     //                     r="10"
//     //                     stroke="currentColor"
//     //                     strokeWidth="4"
//     //                 ></circle>
//     //                 <path
//     //                     className="opacity-75"
//     //                     fill="currentColor"
//     //                     d="M4 12a8 8 0 018-8v8z"
//     //                 ></path>
//     //             </svg>
//     //             <p className="text-xl font-semibold text-gray-700">Redireccionando...</p>
//     //         </div>
//     //     </div>
//     // )
// }