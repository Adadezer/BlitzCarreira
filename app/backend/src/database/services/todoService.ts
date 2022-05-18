import TodoModel from '../models/todoModel';
import ITask from '../../interfaces/ITasks';

export default class TodoService {
  constructor(private todoModel: TodoModel) {}

  public async getTask(): Promise<ITask[] | void> {
    const allTasks = await this.todoModel.getTask();
    return allTasks
  }
}
