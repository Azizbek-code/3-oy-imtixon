import CustomError from "../utils/customError.js";

const RoleMiddleware = (...roles) => {
  return async (req, res, next) => {
    try {
      const userRole = req.role;
      console.log(userRole);
      
      if (roles.includes(userRole)) {
        return next();
      }
    } catch (error) {
      throw new CustomError("Forbiddin resourse", 401);
    }
  };
};
export default RoleMiddleware;
