const { Router } = require("express");
const userRouter = Router();

const { hashPass } = require("../middleware/auth");

const cntrlFuncs = require("./controllers"); //controller functions

userRouter.post("/users/signup", hashPass, cntrlFuncs.signupUser);
userRouter.get("/users/listUsers", cntrlFuncs.listUsers);

module.exports = userRouter;