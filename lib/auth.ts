import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export async function verifyToken(token: string) {
  try {
    if (!SECRET_KEY) {
      throw new Error("Missing jwt secret key");
    }
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

export function getUserIdFromToken(token: string): string {
  try {
    if (!SECRET_KEY) {
      throw new Error("Missing jwt secret key");
    }
    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
    return decoded.userId;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
