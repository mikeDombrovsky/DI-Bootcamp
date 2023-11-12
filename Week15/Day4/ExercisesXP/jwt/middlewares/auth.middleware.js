import jwt from "jsonwebtoken";

const secretKey = "12345";

const autheticate = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: "wrong token" });
    }

    req.user = user;
    next();
  });
};

export default autheticate;
