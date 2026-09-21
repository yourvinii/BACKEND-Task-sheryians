import express from "express";
import {
  createTask,
  updateTask,
  deleteTask,
  getTask,
  getTasksById,
} from "../controllers/taskController.js";
import protect from "../middlewares/authMiddleware.js";


const taskRouter = express.Router();

taskRouter.route("/").post(protect,createTask );
taskRouter.route("/").get(protect, getTask)
taskRouter.route("/:id").get(protect, getTasksById)
taskRouter.route("/:id").put(protect, updateTask)
taskRouter.route("/:id").delete(protect, deleteTask)

export default taskRouter;
