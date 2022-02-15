import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsUrl } from "class-validator"

export class CreateLinkDto {
    @ApiProperty({
        required: true
    })
    @IsEmail()
    email: string

    @ApiProperty({
        required: true
    })
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

    @ApiProperty({
        required: false
    })
    @IsOptional()
    transitions: number
}