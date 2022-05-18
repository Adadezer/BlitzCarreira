import { PrismaClient, Todo } from '@prisma/client';

export default class TodoModel {
  constructor(private ormPrisma: PrismaClient) {}

  public async getTask(): Promise<Todo[] | void> {

    const allTasks = await this.ormPrisma.todo.findMany();
    return allTasks;
  }
}