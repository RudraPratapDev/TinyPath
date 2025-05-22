import { cookieOptions } from "../config/config.js";
import { findUserByEmail } from "../dao/user.dao.js";
import { registerUser, loginUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const { token, user } = await registerUser(name, email, password);

  res.cookie("accessToken", token, cookieOptions);
  req.user = user;
  res.status(200).json({ message: "Register Success" });
});

export const login_user = wrapAsync(async (req, res) => {
  const { email, password } = req.body;
  const { token, user } = await loginUser(email, password);
  res.cookie("accessToken", token, cookieOptions);
  req.user = user;
  res.status(200).json({ message: "Login Success" });
});
