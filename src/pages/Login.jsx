import FormLogin from "../Components/form/FormLogin";

const login = () => {
  
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          <img
            src="/FEI.jpg"
            alt="Imagen de fondo"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-2/3 flex items-center justify-center bg-white">
          <div className="p-8 w-3/5">
            <h2 className="text-6xl text-center font-bold mb-4">SIRT</h2>
            <h2 className="text-xl font-bold text-center mb-4">Inicio de Sesión</h2>
            <FormLogin />
            <p className="text-center p-5"><a href="/" className="text-sky-600">¿Olvidaste tu contrseña?</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
