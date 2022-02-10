import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
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
        dto.short_link = 'http://localhost:3000/' + randomstring.generate(7)
        return await this.entity.create(dto)
    }
}
