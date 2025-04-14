import jwt from "jsonwebtoken";
import "dotenv/config.js";

class jwtService {
  generateToken(role, id) {
    try {
      const token = jwt.sign({ role: role, id: id }, process.env.JWT_KEY, {
        expiresIn: "1d",
      });
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  verifyToken(token) {
    try {
      const verify = jwt.verify(token, process.env.JWT_KEY);
      return verify;
    } catch (error) {
      console.log(error);
    }
  }
}


export default jwtService;
