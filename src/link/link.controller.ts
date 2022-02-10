import { Controller, Get, Param } from '@nestjs/common';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
    constructor( private readonly service: LinkService ) {}

    @Get(':email')
    async findAll(@Param('email') email: string){
        return await this.service.findAll(email)
    }
}
