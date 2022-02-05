import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiAcceptedResponse, ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, findOneTaskDto, UpdateTaskDto } from './dto';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
    constructor(private readonly service: TaskService){}

    @Get()
    @ApiOkResponse({ type: [CreateTaskDto]})
    async findAll(){
        return await this.service.findAll()
    }

    @Get(':id')
    @ApiNotFoundResponse()
    @ApiBadRequestResponse({ description: 'Validation issues'})
    async findOne(@Param() { id }: findOneTaskDto){
        return await this.service.findOne(id)
    }

    @Post()
    @ApiCreatedResponse({ type: [CreateTaskDto]})
    @ApiConflictResponse({ description: 'Task already exist' })
    @ApiBadRequestResponse({ description: 'Validation issues'})
    async create(@Body() dto: CreateTaskDto){
        return await this.service.create(dto)
    }

    @Put(':id')
    @ApiOkResponse()
    @ApiBadRequestResponse({ description: 'Validation issues'})
    @ApiNotFoundResponse()
    async update(@Param() { id }: findOneTaskDto, @Body() dto: UpdateTaskDto){
        return await this.service.update(id, dto)
    }

    @Delete(':id')
    @ApiBadRequestResponse({ description: 'Validation issues'})
    @ApiNoContentResponse()
    @ApiNotFoundResponse()
    async delete(@Param() { id }: findOneTaskDto){
        return await this.service.delete(id)
    }
}
