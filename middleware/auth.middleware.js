import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization") || req.header("authorization");

  console.log("Authorization Header :", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Access Denied. No token provided!" });
  }

  try {
    // Split "Bearer <token>" and take only the token part
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = decoded; // attach decoded payload to request
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(400).json({ message: "Invalid Token!" });
  }
};

export default authMiddleware;
