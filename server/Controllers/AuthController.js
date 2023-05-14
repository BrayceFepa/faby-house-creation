import UserModel from "../Models/User.js";
import bcrypt from "bcrypt";

import { signinToken, isAuth } from "../Config/auth.js";

//Registering a new user
export const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, phonenumber } = req.body;

  const isAdded = await UserModel.findOne({ email: email });

  if (isAdded) {
    const token = signinToken(isAdded);
    return res.send({
      token,
      name: isAdded.name,
      email: isAdded.email,
      message: "Cet addresse email existe déjà",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  if (!firstname || !lastname || !phonenumber || !password) {
    res.status(400).json({
      message: `Tous les champs sont obligatoires !`,
    });
  } else {
    const newUser = new UserModel({
      firstName: firstname,
      lastName: lastname,
      phoneNumber: phonenumber,
      email: email,
      password: hashedPassword,
    });

    try {
      const savedUser = await newUser.save();
      const token = signinToken(savedUser);
      res.status(201).send({ jwt: token, savedUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Tous les champs sont obligatoires" });
  } else {
    try {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const token = signinToken(user);
        const validity = await bcrypt.compare(password, user.password);
        validity
          ? res.status(201).send({ jwt: token, user })
          : res.status(400).json({ message: "Mot de passe incorrect" });
      } else {
        res.status(404).json("Ce compte n'existe pas !");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
