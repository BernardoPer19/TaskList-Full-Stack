const DB_DATABASE = process.env.DB_DATABASE || "TaskList_DB";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PASSWORD = process.env.DB_PASSWORD || "mysqlcasa";

const JWT_PASSWORD_SECRET =
  process.env.JWT_PASSWORD_SECRET || "micontraseñasegurisima";
const SALTS_ROUNDS = process.env.SALTS_ROUNDS || 10;

export {
  DB_DATABASE,
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_PASSWORD,
  JWT_PASSWORD_SECRET,
  SALTS_ROUNDS,
};
