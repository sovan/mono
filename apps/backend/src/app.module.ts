import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BlocksModule } from './blocks/Blocks.module';
import { AnyController } from './any/any.controller';
import { AnyService } from './any/any.services';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/kkk'),
    UsersModule,
    BlocksModule,
  ],
  controllers: [AnyController],
  providers: [AnyService],
})
export class AppModule {}
