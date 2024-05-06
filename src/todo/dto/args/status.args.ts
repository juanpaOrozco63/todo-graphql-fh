import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsOptional } from "class-validator";

@ArgsType()
export class StatusArgs {

  @Field(()=>Boolean,{description:'Estado de la tarea', nullable:true})
  @IsOptional()
  @IsBoolean()
  status?: Boolean;
}

