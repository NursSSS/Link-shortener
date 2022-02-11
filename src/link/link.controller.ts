import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Redirect } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestDto, CreateLinkDto, NotFoundedDto, UpdateLinkDto } from './dto';
import { LinkEntity } from './entity';
import { LinkService } from './link.service';

@ApiTags('Link')
@Controller('link')
export class LinkController {
    constructor( private readonly service: LinkService ) {}


    @Get('findAll')
    @ApiResponse({
        status: 200,
        description: 'Get all links of data base',
        type: [LinkEntity],
    })
    async findAll(){
        return await this.service.findAll()
    }


    @Post()
    @ApiBody({ type: CreateLinkDto })
    @ApiCreatedResponse({ 
        description: 'Create a short link',
        type: CreateLinkDto 
    })
    @ApiBadRequestResponse({ 
        description: 'Validation error',
        type: BadRequestDto
    })
    async createShortLinks(@Body() dto: CreateLinkDto){
        return await this.service.createShortLink(dto)
    }


    @Get('find/:mail')
    @ApiResponse({
        status: 201,
        description: 'Get links by email',
    })
    @ApiNotFoundResponse({ type: NotFoundedDto })
    async filter(@Param('mail') mail: string){
        return await this.service.filter(mail)
    }


    @Get(':key')
    @ApiResponse({
        status: 302,
        description: 'Redirecting from original link by short link'
    })
    @ApiNotFoundResponse({ type: NotFoundedDto })
    @Redirect('', 302)
    async redirect(@Param('key') key: string){
        return await this.service.redirect(key)
    }


    @Delete(':id')
    @ApiResponse({
        status: 204,
        description: 'Delete link by id'
    })
    @ApiBadRequestResponse({ 
        description: 'Validation error',
        type: BadRequestDto
    })
    @ApiNotFoundResponse({ type: NotFoundedDto })
    @HttpCode(204)
    async deleteOne(@Param('id') id: string){
        return await this.service.deleteOne(id)
    }


    @Put(':key')
    @ApiBody({ type: UpdateLinkDto})
    @ApiResponse({
        status: 201,
        description: 'Update link',
        type: UpdateLinkDto
    })
    @ApiBadRequestResponse({ 
        description: 'Validation error',
        type: BadRequestDto
    })
    @ApiNotFoundResponse({ type: NotFoundedDto })
    async update(@Param('key') key: string, @Body() dto: UpdateLinkDto){
        return await this.service.update(key, dto)
    }
}
