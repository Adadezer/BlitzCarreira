import { Router } from 'express';
import TodoController from '../database/controllers/todoController';
import TodoService from '../database/services/todoService';
import TodoModel from '../database/models/todoModel';
import { PrismaClient } from '@prisma/client';

// import validationLogin from '../middlewares/loginMiddleware';
// import authUser from '../middlewares/authUser';

const router = Router();

const prisma = new PrismaClient();
const todoModel = new TodoModel(prisma);
const todoService = new TodoService(todoModel);
const todoController = new TodoController(todoService);

router.get('/', (req, res) => todoController.getTask(req, res));

export default router;