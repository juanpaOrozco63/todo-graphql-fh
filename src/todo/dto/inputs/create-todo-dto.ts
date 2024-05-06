import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateTodoInput{

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    @Field(()=>String,{description:'Descripcion de la tarea'})
    description:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @Field(()=>String,{description:'Titulo de la tarea'})
    title:string;



}