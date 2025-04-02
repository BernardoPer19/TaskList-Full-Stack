import bcrypt from "bcrypt";
import pool from "../db/db.js";
import { JWT_PASSWORD_SECRET, SALTS_ROUNDS } from "../config.js";
import jwt from "jsonwebtoken";

export class AuthModel {
  static async HashingPassword(password) {
    return await bcrypt.hash(password, SALTS_ROUNDS);
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

  static async comparePasswords(plainPassword, hashedPassword) {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      throw new Error("Error comparing passwords: " + error.message);
    }
  }

  static createToken(user) {
    try {
      const token = jwt.sign(
        {
          id: user.user_id,
          name: user.user_name,
          email: user.email,
          createAcc: user.createAcc,
        },
        JWT_PASSWORD_SECRET,
        { expiresIn: "2h" }
      );
      return token;
    } catch (error) {
      throw new Error("Error generating token: " + error.message);
    }
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
}
