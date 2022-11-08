import { Resolver, Query } from '@nestjs/graphql';
import { ToDo } from './entities/todo.entity';

@Resolver()
export class TodosResolver {
  @Query(() => ToDo)
  todos(): ToDo {
    return {
      id: 1,
      title: 'test',
    };
  }
}
