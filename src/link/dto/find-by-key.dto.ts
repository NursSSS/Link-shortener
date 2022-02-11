import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class FindByKeyDto {
    @ApiProperty()
    @Length(7,7)
    key: string
}