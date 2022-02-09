import { Module } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkEntity, LinkSchema } from './entity/link.entity';
import { LinkService } from './link.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: LinkEntity.name, schema: LinkSchema }])],
  providers: [LinkService]
})
export class LinkModule {}