import { sign, verify } from "jsonwebtoken";
// import {} from '.../'


const JWT_SECRET = process.env.JWT_SECRET || "token.2024";
const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET , {
    expiresIn: '5h',
  });
  return jwt;
};

const verifyToken = async () => {};

export { generateToken, verifyToken };
 