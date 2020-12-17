import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDTO } from './app.tododto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello() {
    return this.appService.getHello();
  }

  @Get('todos')
  public async getTodos() {
    return this.appService.getTodos();
  }

  @Post('createtodo')
  public async createTodo(@Body() todo:TodoDTO){
    return this.appService.createTodo(todo);
  }

  @Get('todo/:id')
  public async getTodoById(@Param('id') id : string){
    return this.appService.getTodoById(id);
  }

  @Put('modify/:id')
  public async modifyTodo(@Param('id') id:string,@Body() todo:TodoDTO){
    return this.appService.modifyTodoById(id,todo);
  }

  @Delete('delete/:id')
  public async deleteTodoById(@Param('id') id : string){
    return this.appService.deleteTodoById(id);
  }

}
