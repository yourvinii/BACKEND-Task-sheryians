import express from "express";
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/auth", authRouter);

app.use("/api/tasks", taskRouter);
export default app;
