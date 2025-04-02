import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuthContext();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </div>
        <div className="space-x-4 text-white">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          ) : (
            <>
              <p>Hola {user?.createAcc}</p>

              <Link to="/tasks" className="hover:underline">
                Tasks
              </Link>
              <Link to="/profile" className="hover:underline">
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                }}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
