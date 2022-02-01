import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskEntity, TaskSchema } from './entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: TaskEntity.name, schema: TaskSchema}
    ])
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
