import { AuthModel } from "../model/AuthModel.js";
import { validateRegister } from "../Schemas/AuthSchema.js";

export const registerUser = async (req, res) => {
  try {
    const validatedData = validateRegister(req.body);
    const { user_name, email, password, createAcc } = validatedData.data;

    if (!validatedData) {
      return res.status(400).json({ message: "Datos inválidos" });
    }
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

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AuthModel.verifyByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "El correo NO está registrado" });
    }
    console.log(user.password);
    console.log(password);
    
    const validPassword = await AuthModel.comparePasswords(
      password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "La contraseña es incorrecta" });
    }

    const token = AuthModel.createToken(user);
    const options = {
      httpOnly: true,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 60,
    };

    res
      .cookie("access_token", token, options)
      .status(200)
      .json({ message: "Login exitoso" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error en el login", error: error.message });
  }


  

};
