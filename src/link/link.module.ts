import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkEntity, LinkSchema } from './entity/link.entity';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LinkEntity.name, schema: LinkSchema }
    ])
  ],
  controllers: [LinkController],
  providers: [LinkService]
})
export class LinkModule {}