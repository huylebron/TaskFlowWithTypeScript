import express from "express";
import dotenv from "dotenv";
import config from "./Config/config";

// Khởi tạo môi trường
dotenv.config();

// Khởi tạo ứng dụng Express
const app = express();
const PORT = config.port || 3000;

// Middleware cơ bản
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route cơ bản
app.get("/", (req, res) => {
  res.send("API đang hoạt động!");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
