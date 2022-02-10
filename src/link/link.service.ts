import { ConflictException, HttpStatus, Injectable, Redirect } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto } from './dto';
import { LinkEntity } from './entity/link.entity';

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
        dto.short_link = 'http://localhost:3000/link/re' + dto._key
        return await this.entity.create(dto)
    }

    async filter(mail: string){
        return await this.entity.find( {email: mail} )
    }

    @Redirect()
    async redirect(key: string){
        const link = await this.entity.findOne( {_key: key} )
        return { statusCode: 302, url: link.original_link}
    }
}
