import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsDateString, IsOptional, Length } from "class-validator"

export class CreateTaskDto {
    @ApiProperty(
        { description: 'Title of task', example: 'Buy a bread'}
    )
    @Length(3, 20)
    title: string

    @ApiProperty()
    @IsDateString()
    date: string

    @ApiPropertyOptional()
    @IsOptional()
    @Length(0, 30)
    description?: string
}