import bcrypt from "bcrypt";
import pool from "../db/db.js";
import { SALTS_ROUNDS } from "../config.js";

export class AuthModel {
  static async HashingPassword(password) {
    return await bcrypt.hash(password, SALTS_ROUNDS);
  }

  static async register({ user_name, email, password, createAcc }) {
    try {
      const hashPassword = await this.HashingPassword(password);

      const query = `INSERT INTO public.users_tb(
        user_name, email, password, "createAcc"
      ) VALUES ($1, $2, $3, $4) RETURNING *;`;

      const data = [user_name, email, hashPassword, createAcc];

      const { rows } = await pool.query(query, data);

      return { success: true, user: rows[0] };
    } catch (error) {
      throw new Error("Error registering user: " + error.message);
    }
  }

  static async verifyByEmail(email) {
    try {
      const query = `SELECT * FROM users_tb WHERE email = $1;`;
      const result = await pool.query(query, [email]);

      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      throw new Error("Error verifying email: " + error.message);
    }
  }

  static async comparePasswords(plainPassword, hashedPassword) {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      throw new Error("Error comparing passwords: " + error.message);
    }
  }
}
