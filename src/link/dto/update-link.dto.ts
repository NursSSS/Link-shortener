import { IsEmail, IsUrl } from "class-validator"

export class UpdateLinkDto {
    @IsEmail()
    email: string

    @IsUrl()
    original_link: string
}