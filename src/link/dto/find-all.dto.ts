import { ApiProperty } from "@nestjs/swagger";

export class FindAllDto{
    @ApiProperty()
    email: string

    @ApiProperty()
    original_link: string

    @ApiProperty()
    short_link: string

    @ApiProperty()
    transitions: number

    @ApiProperty()
    _key: string

    @ApiProperty()
    _id: string
}