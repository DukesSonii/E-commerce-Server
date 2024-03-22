// checkEnv.js
const dotenv = require("dotenv");
dotenv.config();

const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;

console.log("CLOUDINARY_NAME:", CLOUDINARY_NAME);
console.log("CLOUDINARY_KEY:", CLOUDINARY_KEY);
console.log("CLOUDINARY_SECRET:", CLOUDINARY_SECRET);
