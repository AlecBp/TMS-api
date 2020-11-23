import { sign, verify } from "jsonwebtoken";
import { User } from "./../models";

export const createAcessToken = (user) => {
  return sign(
    { userId: user.id, role: user.role, firstName: user.firstName, lastName: user.lastName, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_DURATION }
  );
};

export const createRefreshToken = (user) => {
  return sign({ userId: user.id, tokenVersion: user.tokenVersion }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_DURATION,
  });
};

export const handleRefreshToken = async (req, res) => {
  const token = req.cookies.mrtk;

  if (!token) return res.send({ ok: false, accessToken: "" });

  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.send({ ok: false, accessToken: "" });
  }

  const user = await User.findById(payload.userId);
  console.log(payload);

  if (!user) return res.send({ ok: false, accessToken: "" });

  if (user.tokenVersion !== payload.tokenVersion) {
    return res.send({ ok: false, accessToken: "" });
  }

  sendRefreshToken(res, createRefreshToken(user));
  console.log("TOKEN RENEWED");

  return res.send({ ok: true, accessToken: createAcessToken(user) });
};

export const sendRefreshToken = (res, token) => {
  res.cookie("mrtk", token, { httpOnly: true, path: "/refresh_token" });
};

export const clearCookie = (res) => {
  res.cookie("mrtk", "", { httpOnly: true, path: "/refresh_token" });
};
