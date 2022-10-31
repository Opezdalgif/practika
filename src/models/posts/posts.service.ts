import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/models/users/users.service';
import { getHeapCodeStatistics } from 'v8';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/updateposts.dto';
import { Posts } from './model/posts.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts) private postRepository: typeof Posts ,
     private userService: UsersService){}

    async createPost(dto: CreatePostDto) {
        const post = await  this.postRepository.create({...dto})
        return post;
    }

    async getPost(userId: number) {
        const post = await this.postRepository.findOne({where: {userId} , include:{all:true}})
        return post;
    }

    async update(userId: number , dto: UpdatePostDto , id: number){
        const user = await this.userService.getUserById(userId)
        if(user) {
            const updatePost = await this.postRepository.update(dto , {where: {id,userId} })
            return updatePost;
        }
        throw new ForbiddenException('Такой пользователь или запись не найдены')
        
    }

    async delete(userId:number , id:number){
        const user = await this.userService.getUserById(userId)
        if(user) {
            const updatePost = await this.postRepository.destroy( {where: {id,userId} })
            return updatePost;
        }
        throw new ForbiddenException('Такой пользователь или запись не найдены')
    }




}
