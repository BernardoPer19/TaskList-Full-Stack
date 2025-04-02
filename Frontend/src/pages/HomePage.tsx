import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white overflow-hidden">
      {/* Background Circles for Parallax Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 opacity-40 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 opacity-20 rounded-full animate-pulse transform translate-x-1/2 translate-y-1/2"></div>

      {/* Hero Section */}
      <div className="z-10 px-6 md:px-12 pt-10 text-center">
        {/* Main Title with Neon Glow Effect */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
          Organiza Tu Día con TaskList
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-10 md:w-2/3 mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Simplifica tu vida con nuestras herramientas para organizar y
          gestionar tus tareas fácilmente. ¡Da el primer paso hacia una vida más
          productiva!
        </p>

        {/* Call-to-Action Button */}
        <Link to="/login">
          <a className="bg-white text-indigo-600 px-8 py-4 rounded-full shadow-xl font-semibold text-2xl transform transition-all hover:scale-110 hover:bg-indigo-200 hover:shadow-2xl active:scale-95 animate__animated animate__fadeIn animate__delay-3s">
            Comienza Ahora
          </a>
        </Link>
      </div>

      {/* Animated Image Section */}
      <div className="mt-16 z-10 flex justify-center items-center w-full animate__animated animate__fadeIn animate__delay-4s">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7458/7458117.png" // Cambia esta URL por una imagen representativa
          alt="TaskList App"
          className="rounded-xl transform w-64 transition-transform hover:scale-110 hover:shadow-2xl"
        />
      </div>

      {/* Footer Section */}
      <footer className="absolute bottom-8 text-sm text-center z-10 text-gray-100">
        <p>© 2025 TaskList Inc. Todos los derechos reservados.</p>
      </footer>

      {/* Scroll to Tasks Button (Mobile Only) */}
      <div className="fixed bottom-8 right-8 sm:hidden">
        <Link to={"/login"}>
          <p className="bg-indigo-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center animate-bounce hover:bg-indigo-700">
            <span className="text-2xl">🔽</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
