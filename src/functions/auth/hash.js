import bcrypt from "bcrypt";

const saltRounds = 10;

export async function generateHash(password) {
  return bcrypt.hash(password, saltRounds);
}

export async function compareHash(passwordString, hash) {
  console.log(passwordString, hash);
  return bcrypt.compare(passwordString, hash);
}
