import { AuthModel } from "../model/AuthModel.js";

export const registerUser = async (req, res) => {
  const validatedData = validateRegister(req.body);
  const { name, username, email, password } = validatedData;

  try {
    const foudUser = await AuthModel.verifyByEmail(email);
    if (foudUser) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    const hashedPassword = await AuthModel.HashingPassword(password);

    const newUser = await AuthModel.register({
      name,
      username,
      email,
      hashedPassword,
    });

    return res.status(201).json({
      message: "Usuario registrado",
      newUser,
    });
  } catch (error) {}
};
