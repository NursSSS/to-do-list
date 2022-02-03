import { Length } from "class-validator";

export class findOneTaskDto {
    @Length(24,24)
    id: string
}