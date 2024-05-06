import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Todo {
    @Field(()=> Int ,{description:'id de la tarea'})
    id: number;
    @Field(()=>String ,{description:'titulo de la tarea'})
    title: string;
    @Field(()=>String ,{description:'descripcion de la tarea'})
    description: string;
    @Field(()=>Boolean ,{description:'estado de la tarea'})
    done: boolean = false;

  

}