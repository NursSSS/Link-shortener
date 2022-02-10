import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto } from './dto';
import { LinkEntity } from './entity/link.entity';
import { ILink } from './interface/link.interface';

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
        let randomstring = require("randomstring")
        dto._key = randomstring.generate(7)
        dto.short_link = 'http://localhost:3000/link/' + dto._key
        return await this.entity.create(dto)
    }

    async filter(mail: string){
        const link = this.entity.find( {email: mail} )
        if(!link){
            throw new NotFoundException()
        }

        return await link
    }

    async redirect(key: string){
        const link = await this.entity.findOne( {_key: key} )
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
}
