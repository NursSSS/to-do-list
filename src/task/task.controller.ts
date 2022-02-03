import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto, findOneTaskDto, UpdateTaskDto } from './dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly service: TaskService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }

    @Get(':id')
    async findOne(@Param() { id }: findOneTaskDto){
        return await this.service.findOne(id)
    }

    @Post()
    async create(@Body() dto: CreateTaskDto){
        return await this.service.create(dto)
    }

    @Put(':id')
    async update(@Param() { id }: findOneTaskDto, @Body() dto: UpdateTaskDto){
        return await this.service.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param() { id }: findOneTaskDto){
        return await this.service.delete(id)
    }
}
