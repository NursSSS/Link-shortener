import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto, FindByKeyDto, UpdateLinkDto } from './dto';
import { LinkEntity } from './entity/link.entity';
import * as randomstring from 'randomstring'

@Injectable()
export class LinkService {
    constructor(
        @InjectModel(LinkEntity.name)
        private readonly entity: Model<LinkEntity>
    ) {}
    
    async findAll(){
        return await this.entity.find()
    }

    async createShortLink(dto: CreateLinkDto){
        dto._key = randomstring.generate(7)
        dto.short_link = 'http://localhost:3000/link/' + dto._key
        return await this.entity.create(dto)
    }

    async filter(email: string){
        const link = await this.entity.find({email: email})
        if(!link){
            throw new NotFoundException()
        }

        return link
    }

    async redirect(key: string){
        const link = await this.entity.findOne({_key: key})
        if(!link){
            throw new NotFoundException()
        }

        return { statusCode: 302, url: link.original_link}
    }

    async deleteOne(id: string){
        const link = await this.entity.findById(id)
        if(!link){
            throw new NotFoundException()
        }

        return await this.entity.deleteOne( {link} )
    }

    async update(key: string, dto: UpdateLinkDto){
        const link = await this.entity.findOne({_key: key})
        if(!link){
            throw new NotFoundException()
        }

        Object.assign(link, dto)
        return await link.save()
    }
}
