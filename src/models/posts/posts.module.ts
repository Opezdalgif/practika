import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/users/model/users.model';
import { Posts } from './model/posts.model';
import { UsersModule } from 'src/models/users/users.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User , Posts]), 
    UsersModule
  ]
})
export class PostsModule {}
