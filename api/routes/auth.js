const router = require("express").Router();
const User = require("../Models/User");

//Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "Tous les champs sont obligatoires" });
  } else {
    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    try {
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

module.exports = router;
