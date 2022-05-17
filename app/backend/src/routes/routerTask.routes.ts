import { Router } from 'express';
import TodoController from '../database/controllers/todoController';
import TodoService from '../database/services/todoService';

// import validationLogin from '../middlewares/loginMiddleware';
// import authUser from '../middlewares/authUser';

const router = Router();

const todoService = new TodoService();
const todoController = new TodoController(todoService);

router.get('/', (req, res) => todoController.getTask(req, res));

export default router;