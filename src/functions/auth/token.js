import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

export async function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '48h' });
}

export async function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
