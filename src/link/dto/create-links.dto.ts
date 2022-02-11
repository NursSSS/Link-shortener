import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsUrl } from "class-validator"

export class CreateLinkDto {
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsUrl()
    original_link: string

    @ApiProperty({
        required: false
    })
    @IsOptional()
    short_link: string

    @ApiProperty({
        required: false
    })
    @IsOptional()
    _key: string
}