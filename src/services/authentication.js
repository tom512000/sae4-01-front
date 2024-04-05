// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from "bcryptjs";

// eslint-disable-next-line import/prefer-default-export
export function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
