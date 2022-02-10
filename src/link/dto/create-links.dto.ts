import { IsEmail, IsOptional, IsUrl } from "class-validator"

export class CreateLinkDto {
    @IsEmail()
    email: string

    @IsUrl()
    original_link: string

    @IsOptional()
    short_link: string
}