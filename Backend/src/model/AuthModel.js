import bcrypt from "bcrypt";

import { SALTS_ROUNDS } from "../config.js";
import pool from "../db/db.js";

export class AuthModel {
  static async HashingPassword(password) {
    const hashPassword = await bcrypt.hash(password, SALTS_ROUNDS);
    return hashPassword;
  }

  static async register({ user_name, email, password, createAcc }) {
    try {
      const hashPassword = await this.HashingPassword(password);

      const query = `INSERT INTO public.users_tb(
	 user_name, email, password, "createAcc")
	VALUES ($1,$2,$3,$4)`;

      const data = [user_id, user_name, email, hashPassword, createAcc];

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

      if (result.rows.length === 0) {
        return null;
      }

      return result.rows[0];
    } catch (error) {
      throw new Error("Error verifying email: " + error.message);
    }
  }

  static comparePasswords(plainPassword, hashedPassword) {
    try {
      const isMatch = bcrypt.compare(plainPassword, hashedPassword);
      return isMatch;
    } catch (error) {
      throw new Error("Error comparing passwords: " + error.message);
    }
  }
}
