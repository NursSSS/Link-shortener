import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkEntity } from './entity/link.entity';

@Injectable()
export class LinkService {
    constructor(
        @InjectModel(LinkEntity.name)
        private readonly entity: Model<LinkEntity>
      ) {}
    
    
}
