import { Resolver } from '@nestjs/graphql';
import { Args, Float, Int, Query } from '@nestjs/graphql';
@Resolver()
export class HelloWorldResolver {
    @Query(()=>String,{name:'hello',description:'prueba de hola mundo'})
    helloWorld():string {
        return 'Hello World!';
    }
    @Query(()=>Float,{name:'randomNumber',description:'prueba de numero aleatorio'})
    randomNumber():number {
        return Math.random()*100;

    }
    @Query(()=>Int,{name:'randomFromToZero',description:'prueba de numero random desde cero con argumento por defecto 10'})
    getRadomFromZeroTo(@Args('to', {nullable:true,type: ()=> Int}) to:number = 10):number{
        return Math.floor(Math.random()*to);
    }
}
