import { Router } from 'express';
import TodoController from '../database/controllers/todoController';
import TodoService from '../database/services/todoService';
import TodoModel from '../database/models/todoModel';
import { PrismaClient } from '@prisma/client';
import validationTask from '../middlewares/taskMiddleware';

const router = Router();

const prisma = new PrismaClient();
const todoModel = new TodoModel(prisma);
const todoService = new TodoService(todoModel);
const todoController = new TodoController(todoService);

router.get('/', (req, res, next) => todoController.getTask(req, res, next));
router.post('/', validationTask, (req, res, next) => todoController.createTask(req, res, next) );

export default router;