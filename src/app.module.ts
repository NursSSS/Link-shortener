import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkController } from './link/link.controller';
import { LinkModule } from './link/link.module';
import { LinkService } from './link/link.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nurs:123321@cluster0.nfrrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), LinkModule],
  controllers: [],
  providers: []
})
export class AppModule {}
