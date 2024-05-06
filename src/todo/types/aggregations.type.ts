import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'Todo Agreggations'})
export class AggregationsType {

    @Field(()=>Int)
    totalTodos: number;
    @Field(()=>Int)
    doneTodos: number;
    @Field(()=>Int)
    pendingTodos: number;
    @Field(()=>Int,{deprecationReason:'Use doneTodos instead'})
    totalTodosCompleted:number
}