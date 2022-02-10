import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLinkDto } from './dto';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
    constructor( private readonly service: LinkService ) {}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }

    @Post()
    async createShortLinks(@Body() dto: CreateLinkDto){
        return await this.service.createShortLink(dto)
    }
}
