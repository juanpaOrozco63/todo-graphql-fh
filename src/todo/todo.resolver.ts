import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/inputs/create-todo-dto';
import { UpdateTodoInput } from './dto/inputs/update-todo-dto';
import { StatusArgs } from './dto/args/status.args';
import { AggregationsType } from './types/aggregations.type';

@Resolver()
export class TodoResolver {

    constructor(
        private readonly todoService:TodoService
    ){

    }

    @Query (()=>[Todo],{name:'findAllTodo',description:'Lista de todos'})
    findAll(@Args('status', {type: ()=> Boolean}) statusArgs:StatusArgs):Todo[]{
        return  this.todoService.findAll(statusArgs);
    }
    @Query(()=>Todo,{name:'findOneTodo',description:'Obtener un todo'}) 
    findOne(@Args('id', {type: ()=> Int}) id:number){
        return this.todoService.findOne(id);
    }
    @Mutation(()=>Todo,{name:'createTodo',description:'Crear un todo'})
   createTodo(@Args('createTodoInput') createTodoInput:CreateTodoInput){
        return this.todoService.create(createTodoInput);
   }
   @Mutation(()=>Todo,{name:'updateTodo',description:'Actualizar un todo'})
   updateTodo(@Args('updateTodoInput') updateTodoInput:UpdateTodoInput){
    return this.todoService.update(updateTodoInput);
   }
    @Mutation(()=>Todo,{name:'removeTodo',description:'Eliminar un todo'})
    removeTodo(@Args('id', {type: ()=> Int}) id:number){
        return this.todoService.remove(id);
    }
    //Agreggations
    @Query(()=>Int,{name:'totalTodos',description:'Contar todos'})
    totalTodos():number{
        return this.todoService.totaltodos;
    }
    @Query(()=>Int,{name:'doneTodos',description:'Contar todos completados'})
    doneTodos():number{
        return this.todoService.doneTodos;
    }   
    @Query(()=>Int,{name:'pendingTodos',description:'Contar todos pendientes'})
    pendingTodos():number{
        return this.todoService.pendingTodos;
    }     
    @Query(()=>AggregationsType)
    aggregations():AggregationsType{
        return {
            totalTodos:this.todoService.totaltodos,
            doneTodos:this.todoService.doneTodos,
            pendingTodos:this.todoService.pendingTodos,
            totalTodosCompleted:this.todoService.doneTodos
        }

    } 
}
