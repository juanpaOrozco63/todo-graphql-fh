import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo-dto';
import { UpdateTodoInput } from './dto/inputs/update-todo-dto';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {
    private todos:Todo[] = [
        { id: 1, title: 'Tarea 1', description: 'Descripcion de la tarea 1', done: false },
        { id: 2, title: 'Tarea 2', description: 'Descripcion de la tarea 2', done: true },
        { id: 3, title: 'Tarea 3', description: 'Descripcion de la tarea 3', done: false },
        { id: 4, title: 'Tarea 4', description: 'Descripcion de la tarea 4', done: true },
    ];

    get totaltodos() {
        return this.todos.length;
    }
    get doneTodos(){
        return this.todos.filter(todo => todo.done).length;
    }
    get pendingTodos(){
        return this.todos.filter(todo => !todo.done).length;
    }   

    findAll(statusArgs:StatusArgs) {
        const {status} = statusArgs;
        if(status !== undefined) return this.todos.filter(todo => todo.done === status);
        
        return this.todos;
    }

    findOne(id: number) {
        const todo = this.todos.find(todo => todo.id === id);
        if(!todo) throw new Error('Todo not found');
        return todo;
    }

    create(createTodoInput:CreateTodoInput) : Todo {
        const todo = new Todo();
        todo.description = createTodoInput.description;
        todo.title = createTodoInput.title;
        todo.id = Math.max(...this.todos.map(todo => todo.id)) + 1;
        this.todos.push(todo)
        return todo
    }

    update(updateTodoInput:UpdateTodoInput) {
        const todo = this.findOne(updateTodoInput.id);
        if(updateTodoInput.description) todo.description = updateTodoInput.description;
        if(updateTodoInput.title) todo.title = updateTodoInput.title;   
        if(updateTodoInput.done !== undefined) todo.done = updateTodoInput.done;
        this.todos = this.todos.map(todo => {
            return (todo.id === updateTodoInput.id) ? todo : todo;
        });
        return todo; 
    }

    remove(id: number) {
        const todo = this.findOne(id);
        if(todo.done) throw new Error('Cannot delete a completed task');
        this.todos = this.todos.filter(todo => todo.id !== id);
        return `Se ha eliminado la tarea con id ${id}`;
    }
}
