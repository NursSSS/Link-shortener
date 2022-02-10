import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkEntity } from './entity/link.entity';
import { ILink } from './interface/link.interface';

@Injectable()
export class LinkService {
    constructor(
        @InjectModel(LinkEntity.name)
        private readonly entity: Model<LinkEntity>
      ) {}
    
    async findAll(email: string){
        return await this.entity.find((item: ILink) => item.email == email)
    }
}
