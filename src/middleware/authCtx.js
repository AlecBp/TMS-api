import { verify } from "jsonwebtoken";

module.exports = (req) => {
  const authHeader = req.get("authorization");
  const context = { isAuth: false, role: null, userId: null };

  if (!authHeader) {
    return context;
  }

  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    return context;
  }

  let decodedToken;
  try {
    decodedToken = verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return context;
  }

  if (!decodedToken) {
    return context;
  }

  context.isAuth = true;
  context.userId = decodedToken.userId;
  context.role = decodedToken.role;
  return context;
};
