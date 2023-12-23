import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if(authHeader)
        token = authHeader.split(" ")[1];
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, process.env.sEcReT);
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
