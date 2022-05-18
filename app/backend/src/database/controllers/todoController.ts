import { Request, Response, NextFunction } from 'express';
import TodoService from '../services/todoService';

export default class TodoController {
  constructor(private todoService: TodoService) {}

  public async getTask(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const allTasks = await this.todoService.getTask();
  
      return res.status(200).json(allTasks);
    } catch (error) {
      next(error)
    }
  }

  public async createTask(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { descricao, status } = req.body;
      const task = { descricao, status };

      const createTask = await this.todoService.createTask(task);
  
      return res.status(201).json(createTask);
    } catch (error) {
      next(error)
    }
  }
}
