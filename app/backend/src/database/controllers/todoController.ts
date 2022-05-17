import { Request, Response } from 'express';
import TodoService from '../services/todoService';

export default class TodoController {
  constructor(private todoService: TodoService) {}

  public async getTask(req: Request, res: Response): Promise<Response | void> {
    const allTasks = await this.todoService.getTask();
  
    return res.status(200).json(allTasks);
  }
}
