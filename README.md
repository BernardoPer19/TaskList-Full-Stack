# **Todo App Full-Stack (React + Express + PostgreSQL)**

Esta es una aplicación Full-Stack de tareas que permite a los usuarios crear, editar, eliminar, marcar como completadas, y filtrar tareas. El backend se encarga de gestionar las tareas y los usuarios con autenticación utilizando **JWT**. El frontend está construido con **React**, **TypeScript**, **Tailwind CSS**, y usa **React Query** para la gestión de estado y datos asíncronos.

---

## **🚀 Funcionalidades Principales**

### **Backend (Express + PostgreSQL)**
- Registro de usuarios con autenticación JWT.
- Inicio y cierre de sesión con JWT.
- CRUD completo de tareas (Crear, Leer, Actualizar, Eliminar).
- Paginación de tareas.
- Filtrar tareas por estado (pendientes/completadas).
- Buscar tareas por título o descripción.
- Marcar tareas como completadas.
- Estadísticas de tareas (pendientes/completadas).

### **Frontend (React + TypeScript + Tailwind CSS)**
- Interfaz limpia y moderna con **Tailwind CSS**.
- Gestión de estado global usando **Context API**.
- Gestión de datos asíncronos con **React Query**.
- Implementación de formulario para registro e inicio de sesión.
- Páginas de vista para listar, crear, editar y eliminar tareas.
- Notificación de error para validación de formularios y autenticación.

---

## **📚 Tecnologías Utilizadas**

### **Backend:**
- **Node.js** con **Express** para crear el servidor.
- **JWT** para autenticación y autorización.
- **PostgreSQL** para almacenar los datos de tareas y usuarios.
- **Bcrypt.js** para encriptar contraseñas.
- **Express-validator** para validaciones de entrada.

### **Frontend:**
- **React** con **TypeScript** para la construcción de la interfaz de usuario.
- **Tailwind CSS** para estilos rápidos y modernos.
- **React Query** para la gestión eficiente de datos asíncronos.
- **Context API** para el manejo global de estado (autenticación, tareas, etc.).
- **Fetch API** para las solicitudes HTTP al backend.

---
