import TodoModel from '../models/todoModel';
import ITask from '../../interfaces/ITasks';

export default class TodoService {
  constructor(private todoModel: TodoModel) {}

  public async getTask(): Promise<ITask[] | void> {
    const allTasks = await this.todoModel.getTask();
    return allTasks;
  }

  public async createTask(task: ITask): Promise<ITask | void> {
    const createTask = await this.todoModel.createTask(task);
    return createTask;
  }
}
