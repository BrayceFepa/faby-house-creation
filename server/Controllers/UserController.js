import { signinToken } from "../Config/auth.js";
import UserModel from "../Models/User.js";
import bcrypt from "bcrypt";

// get all user
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).sort({ _id: -1 });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//get a user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("Compte inexistant");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, password } = req.body;

  if (id === currentUserId) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      }); //last param to get the new informations of the user and not the old
      const token = signinToken(user);
      res.status(200).send({ jwt: token, user });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied");
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json("Compte supprimé avec succès");
  } catch (error) {
    res.status(500).json(error);
  }
};
