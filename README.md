# **API de Tareas con Autenticación (JWT) y PostgreSQL**

Esta es una API de tareas que permite a los usuarios registrar sus tareas, gestionarlas y ver estadísticas detalladas sobre ellas. La aplicación incluye autenticación segura utilizando **JWT** (JSON Web Tokens) y almacena los datos en **PostgreSQL**.

---

## **🚀 Funcionalidades Principales**

- **Registro de nuevo usuario**
- **Iniciar sesión** con autenticación JWT
- **Cerrar sesión**
- **Ver la lista de tareas**
- **Crear nuevas tareas**
- **Editar tareas existentes**
- **Marcar tareas como completadas**
- **Eliminar tareas**
- **Filtrar tareas** por estado (pendientes/completadas)
- **Buscar tareas** por título o descripción
- **Ver detalles de una tarea**
- **Paginación de tareas**
- **Confirmación antes de eliminar tareas**
- **Notificaciones de tareas vencidas** (opcional)
- **Ver estadísticas básicas de tareas**

---

## **📚 Tecnologías Utilizadas**

- **Node.js** con **Express** para la creación de la API
- **JWT (JSON Web Tokens)** para autenticación
- **PostgreSQL** para almacenamiento de datos
- **Bcrypt.js** para encriptación de contraseñas
- **Express-rate-limit** para proteger las rutas
- **Cors** para permitir el acceso entre diferentes orígenes

---

## **⚙️ Instalación y Configuración**

### 1. Clona el repositorio
```bash
git clone https://github.com/tuusuario/tareas-api.git
cd tareas-api
