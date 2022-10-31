import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/users.model';
import { Posts } from 'src/models/posts/model/posts.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService], 
  imports: [
    SequelizeModule.forFeature([User , Posts])
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
