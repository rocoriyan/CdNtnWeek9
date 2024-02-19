const { Router } = require("express");
const userRouter = Router();

const cntrlFuncs = require("./controllers"); //controller functions

userRouter.post("/users/signup", cntrlFuncs.signupUser);
userRouter.get("/users/listUsers", cntrlFuncs.listUsers);

module.exports = userRouter;