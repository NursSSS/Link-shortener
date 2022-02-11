import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsUrl } from "class-validator"

export class UpdateLinkDto {
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsUrl()
    original_link: string
}