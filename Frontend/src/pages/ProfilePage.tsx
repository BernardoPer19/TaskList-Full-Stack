import { useAuth } from "../hooks/useAuth";


const ProfilePage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-semibold">No estás autenticado</h2>
        <p>Por favor, inicia sesión para ver tu perfil.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white flex justify-center items-center">
      <div className="w-full max-w-3xl px-6 py-12 bg-white rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-4">Perfil de Usuario</h1>
          <p className="text-lg text-gray-600">Gestiona tu cuenta y preferencias.</p>
        </div>

        {/* Profile Info Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-6 mb-8">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 mb-6 sm:mb-0">
            <img
              src="https://via.placeholder.com/150" // Cambia esto por la URL de la imagen de tu perfil
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">{user.user_name}</h2>
            <p className="mt-2 text-gray-400">Correo: {user.email}</p>
            <p className="mt-1 text-gray-400">Miembro desde: Enero 2022</p>
          </div>
        </div>

     
        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg text-xl transform transition-all hover:bg-indigo-700 hover:scale-105 hover:shadow-2xl active:scale-95 mb-6">
            Editar Perfil
          </button>
        </div>

    
        <div className="text-center">
          <button
            onClick={logout}
            className="bg-red-600 text-white px-8 py-3 rounded-full shadow-lg text-xl transform transition-all hover:bg-red-700 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 TaskList Inc. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default ProfilePage;
