import { TodoDTO } from './app.tododto';
import { Model } from 'mongoose';
import { ITodos } from './app.interface';
export declare class AppService {
    private readonly todos;
    constructor(todos: Model<ITodos>);
    getHello(): string;
    getTodos(): Promise<TodoDTO[]>;
    createTodo(todo: any): Promise<ITodos>;
    getTodoById(id: string): Promise<TodoDTO>;
    modifyTodoById(id: string, newtodo: TodoDTO): Promise<TodoDTO>;
    deleteTodoById(id: string): Promise<TodoDTO>;
}
