const crypto = require("crypto");
require("dotenv").config();

const algorithm = "aes-256-cbc";

function encryptData(data) {
  const cipher = crypto.createCipheriv(
    algorithm,
    process.env.SECRET_KEY,
    process.env.INIT_VECTOR
  );
  let encryptedData = cipher.update(data, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  console.log("plaintext: ", data);
  console.log("ciphertext: ", encryptedData);
  return encryptedData;
}

function decryptData(data) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    process.env.SECRET_KEY,
    process.env.INIT_VECTOR
  );
  let decryptedData = decipher.update(data, "hex", "utf-8");
  decryptedData += decipher.final("utf-8");
  console.log("ciphertext: ", data);
  console.log("plaintext: ", decryptedData);
  return decryptedData;
}

module.exports = {
  encryptData,
  decryptData,
};
