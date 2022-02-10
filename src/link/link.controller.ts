import { Body, Controller, Delete, Get, Param, Post, Redirect } from '@nestjs/common';
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

    @Get('find/:mail')
    async filter(@Param('mail') mail: string){
        return await this.service.filter(mail)
    }

    @Get(':key')
    @Redirect('', 302)
    async redirect(@Param('key') key: string){
        return await this.service.redirect(key)
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: string){
        return await this.service.deleteOne(id)
    }
}
