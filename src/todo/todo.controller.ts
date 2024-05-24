import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('/todo/get_todos')
  getTodos(data: { id: number; todo: string }[]) {
    data = [
      {
        id: 1,
        todo: 'item 1',
      },
      {
        id: 2,
        todo: 'item 2',
      },
      {
        id: 3,
        todo: 'item 3',
      },
    ];
    return data;
  }
}
