import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule, 
    MongooseModule.forRoot('mongodb+srv://crud-nestjs:crud-nestjs@cluster0.zfgdv.mongodb.net/test')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
