import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import UserModel from "../Models/User.js";

export const signinToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2d",
    }
  );
};

export const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (authorization.length > 0) {
      const token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } else {
      res.status(403).send("Not authorized");
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

export const isAdmin = async (req, res, next) => {
  const admin = await UserModel.findOne({ isAdmin: true });
  if (admin) {
    next();
  } else {
    res.status(401).send({ message: "Forbiden" });
  }
};

export const checkAdminAuthorization = (req, res, next) => {
  //Get the token from the request headers or query parameter
  const { authorization } = req.headers;
  if (authorization.length > 0) {
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Missing token" });
    }
  } else {
    res.status(403).send({ message: "Not authorized" });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // check if the user is an admin
    if (!decodedToken.isAdmin) {
      return res.status(403).send({ message: "Access denied" });
    }

    // Add the decoded token to the request object for further use if needed
    req.decodedToken = decodedToken;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
