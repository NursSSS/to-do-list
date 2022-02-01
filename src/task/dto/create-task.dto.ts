import { IsDateString, IsOptional, Length } from "class-validator"

export class CreateTaskDto {
    @Length(3, 10)
    title: string

    @IsDateString()
    date: string

    @IsOptional()
    @Length(0, 30)
    description?: string
}