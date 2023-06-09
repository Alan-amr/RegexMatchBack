const express = require("express");
const router = express.Router();

const {validatorCreateUser} = require("../validators/userValidator");
const {getAllUsers, createUser, getUserByUsernameAndPassword} = require("../controllers/userController");

router.get("/",getAllUsers);

router.post("/", validatorCreateUser, createUser);

router.get("/login/:userName/:password",getUserByUsernameAndPassword);

module.exports = router