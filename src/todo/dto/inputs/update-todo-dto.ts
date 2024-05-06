import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInput{

    @IsInt()
    @Min(1)
    @Field(()=>Int,{description:'Id de la tarea', nullable:false})
    id:number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    @IsOptional()
    @Field(()=>String,{description:'Descripcion de la tarea', nullable:true})
    description?:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @IsOptional()
    @Field(()=>String,{description:'Titulo de la tarea', nullable:true})
    title?:string;

    @IsOptional()
    @Field(()=>Boolean,{description:'Estado de la tarea', nullable:true})
    done?:boolean;


}