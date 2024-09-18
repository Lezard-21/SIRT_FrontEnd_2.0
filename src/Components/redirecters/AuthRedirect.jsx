// import { Navigate } from 'react-router-dom';
// import { roles } from '../Constants/roles'; // Assuming roles are defined in a separate file

// const AuthRedirect = ({ isAuthenticated, userRole }) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (userRole === roles.tutor) {
//     return <Navigate to="/tutor" replace />;
//   } else if (userRole === roles.coordinador) {
//     return <Navigate to="/coordinador" replace />;
//   } else if (userRole === roles.administrador) {
//     return <Navigate to="/administrador" replace />;
//   }

//   // Default path for other roles or unhandled cases
//   return <Navigate to={defaultPath || '/'} replace />;
// };

// export default AuthRedirect;
