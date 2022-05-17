import TodoModel from '../models/todoModel';
import ITask from '../../interfaces/ITasks';

export default class TodoService {
  constructor(private todoModel = new TodoModel) {}

  public async getTask(): Promise<ITask[] | void> {
    const allTasks = await this.todoModel.getTask();
    // console.log('userGET service:', userValid);
    return allTasks
  }
}
