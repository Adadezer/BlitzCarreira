import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoModel {
  

  public async getTask(): Promise<Todo[] | void> {

    const allTasks = await prisma.todo.findMany();
    return allTasks;
  }
}