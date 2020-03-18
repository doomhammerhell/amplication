import { Arg, ArgsType, Field, FieldResolver, Float, ID, InputType, Int, ObjectType, registerEnumType } from "type-graphql";
import { Args, Context, Mutation, Query, ResolveProperty, Resolver, Root } from "@nestjs/graphql";
import { CreateOneEntityFieldArgs } from "../../dto/args";
import { FindOneArgs } from "../../dto/args";
//import { FindManyEntityFieldArgs } from "../../dto/args/FindManyEntityFieldArgs";
import { UpdateOneEntityFieldArgs } from "../../dto/args";
import { EntityFieldService } from '../../core';
import { EntityField } from "../../models/EntityField";

@Resolver(_of => EntityField)
export class EntityFieldResolver {
  constructor(private readonly entityFieldService: EntityFieldService) {}
  @Query(_returns => EntityField, {
    nullable: true,
    description: undefined
  })
  async entityField(@Context() ctx: any, @Args() args: FindOneArgs): Promise<EntityField | null> {
    return this.entityFieldService.entityField(args);
  }

  // @Query(_returns => [EntityField], {
  //   nullable: false,
  //   description: undefined
  // })
  // async entityFields(@Context() ctx: any, @Args() args: FindManyEntityFieldArgs): Promise<EntityField[]> {
  //   return ctx.prisma.entityField.findMany(args);
  // }


  @Mutation(_returns => EntityField, {
    nullable: true,
    description: undefined
  })
  async createEntityField(@Context() ctx: any, @Args() args: CreateOneEntityFieldArgs): Promise<EntityField> {
    return this.entityFieldService.createEntityField(args); 
  }

  @Mutation(_returns => EntityField, {
    nullable: true,
    description: undefined
  })
  async deleteOneEntityField(@Context() ctx: any, @Args() args: FindOneArgs): Promise<EntityField | null> {
    return ctx.prisma.entityField.delete(args);
  }

  @Mutation(_returns => EntityField, {
    nullable: true,
    description: undefined
  })
  async updateOneEntityField(@Context() ctx: any, @Args() args: UpdateOneEntityFieldArgs): Promise<EntityField | null> {
    return ctx.prisma.entityField.update(args);
  }



}