import { IsDateString, IsOptional, Length } from "class-validator"

export class CreateTaskDto {
    @Length(3, 20)
    title: string

    @IsDateString()
    date: string

    @IsOptional()
    @Length(0, 30)
    description?: string
}