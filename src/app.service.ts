import { Injectable, HttpException } from '@nestjs/common';
import { TodoDTO } from './app.tododto';
// import { TODOS } from './app.todos';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ITodos } from './app.interface';  


@Injectable()
export class AppService {

  // private todos = TODOS;
  constructor(@InjectModel('todoSchema') private readonly todos: Model<ITodos>){}

  public getHello() {
    return 'Hello World!';
  }


  public async getTodos() :Promise<TodoDTO[]>{
    const todolist =await this.todos.find().exec();
    if(!todolist)
      throw new HttpException('Not Found',404);
    return todolist;
  }

  public async createTodo(todo){
      const newtodo = await new this.todos(todo);
      return newtodo.save();
  }

  public async getTodoById(id: string): Promise<TodoDTO>{
    const todo = await this.todos.findById(id).exec();
    if(!todo)
      throw new HttpException('Not Found',404);
    return todo;
  }

  public async modifyTodoById(id: string,newtodo: TodoDTO) :Promise<TodoDTO>{
    
    const todo = await this.todos.findByIdAndUpdate(id,newtodo).exec();
    if(!todo)
      throw new HttpException('Not Found',404);
    return todo;
  }

  public async deleteTodoById(id:string) : Promise<TodoDTO>{
    const todo = await this.todos.findByIdAndDelete(id).exec();
    if(!todo)
      new HttpException('Not Found',404);
    return todo;
  }



 /* public getTodos(){
    return this.todos;
  }

  public createTodo(todo : TodoDTO){
    return this.todos.push(todo);
  }

  public getTodoById(id: string){
    const todo = this.todos.find((e)=>(e.id === id));
    if(todo)
      return todo;
    throw new HttpException('Not Found',404);
  }

  public modifyTodoById(id: string,newtodo: TodoDTO){
    const index = this.todos.findIndex((e)=>(e.id === id));
    if(index === -1)
        throw new HttpException('Not Found',404);
      this.todos[index].description = newtodo.description;
  }

  public deleteTodoById(id:string){
    const index = this.todos.findIndex((e)=>(e.id === id));
    if(index === -1)
        throw new HttpException('Not Found',404);
      this.todos.splice(index,1);
      return this.todos;
  }
  */

}
