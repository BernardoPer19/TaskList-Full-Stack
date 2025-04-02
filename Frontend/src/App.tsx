import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./index.css";
import { AuthProvider } from "./context/AuthContex";
// import TaskPage from "./components/TaskPage";
// import TaskFormPage from "./components/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { TasksProvider } from "./context/TasksContext";
import TaskPage from "./pages/TaskPage";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              {/* <Route path="/tasks" element={<TaskFormPage />} /> */}
              <Route path="/tasks" element={<TaskPage />} />
              <Route path="/tasks/:id" element={<TaskPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;
