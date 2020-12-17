import { AppService } from './app.service';
import { TodoDTO } from './app.tododto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTodos(): Promise<TodoDTO[]>;
    createTodo(todo: TodoDTO): Promise<import("./app.interface").ITodos>;
    getTodoById(id: string): Promise<TodoDTO>;
    modifyTodo(id: string, todo: TodoDTO): Promise<TodoDTO>;
    deleteTodoById(id: string): Promise<TodoDTO>;
}
