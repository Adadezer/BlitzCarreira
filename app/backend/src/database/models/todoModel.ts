import { PrismaClient, Todo } from '@prisma/client';
import ITask from '../../interfaces/ITasks';

export default class TodoModel {
  constructor(private orm: PrismaClient) {}

  public async getTask(): Promise<Todo[] | void> {

    const allTasks = await this.orm.todo.findMany();
    return allTasks;
  }

  public async createTask(task: ITask) {

    const createTask = await this.orm.todo.create({
      data: {
        descricao: task.descricao,
        status: task.status,
      },
    });
    return createTask;
  }
}