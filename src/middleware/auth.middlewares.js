import jwtService from "../service/jwt.service.js";

const jwtservice = new jwtService();
const AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : undefined;
    const payloadData = jwtservice.verifyToken(token);
    req.id = payloadData.id;
    req.role = payloadData.role;
    next();
  } catch (error) {
    next(error);
  }
};

export default AuthMiddleware;
