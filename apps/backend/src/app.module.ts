import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BlocksModule } from './blocks/Blocks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/kkk'),
    UsersModule,
    BlocksModule,
  ],
})
export class AppModule {}
