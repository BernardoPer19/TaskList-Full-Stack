import { AuthModel } from "../model/AuthModel.js";
import { validateRegister } from "../Schemas/AuthSchema.js";

export const registerUser = async (req, res) => {
  try {
    const validatedData = validateRegister(req.body);
    const { user_name, email, password, createAcc } = validatedData.data;

    if (!validatedData) {
      return res.status(400).json({ message: "Datos inválidos" });
    }
;

    if (!password) {
      return res.status(400).json({ message: "Falta la contraseña" });
    }

    const foundUser = await AuthModel.verifyByEmail(email);
    if (foundUser) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    const newUser = await AuthModel.register({
      user_name,
      email,
      password,
      createAcc,
    });

    return res.status(201).json({
      message: "Usuario registrado",
      user: newUser,
    });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json(error.message);
  }
};
