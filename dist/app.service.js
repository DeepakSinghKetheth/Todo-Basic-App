"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AppService = class AppService {
    constructor(todos) {
        this.todos = todos;
    }
    getHello() {
        return 'Hello World!';
    }
    async getTodos() {
        const todolist = await this.todos.find().exec();
        if (!todolist)
            throw new common_1.HttpException('Not Found', 404);
        return todolist;
    }
    async createTodo(todo) {
        const newtodo = await new this.todos(todo);
        return newtodo.save();
    }
    async getTodoById(id) {
        const todo = await this.todos.findById(id).exec();
        if (!todo)
            throw new common_1.HttpException('Not Found', 404);
        return todo;
    }
    async modifyTodoById(id, newtodo) {
        const todo = await this.todos.findByIdAndUpdate(id, newtodo).exec();
        if (!todo)
            throw new common_1.HttpException('Not Found', 404);
        return todo;
    }
    async deleteTodoById(id) {
        const todo = await this.todos.findByIdAndDelete(id).exec();
        if (!todo)
            new common_1.HttpException('Not Found', 404);
        return todo;
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('todoSchema')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map